import Image from 'next/image';
import { useEffect, useState } from 'react';

interface NumberSortingGameProps {
  onVerificationComplete?: (status: boolean) => void;
  isDisabled?: boolean;
}

export function NumberSortingGame({
  onVerificationComplete,
  isDisabled = false,
}: NumberSortingGameProps) {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [sorted, setSorted] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const generateRandomNumbers = () => {
    const newNumbers = Array.from({ length: 8 }, () => Math.floor(Math.random() * 100) + 1);
    setNumbers(newNumbers);
    setSorted(false);

    if (sorted && onVerificationComplete) {
      onVerificationComplete(false);
    }
  };

  useEffect(() => {
    generateRandomNumbers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (sorted && onVerificationComplete) {
      onVerificationComplete(true);
    }

    if (!sorted && onVerificationComplete) {
      onVerificationComplete(false);
    }
  }, [sorted, onVerificationComplete]);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    if (isDisabled) return;

    e.dataTransfer.setData('index', index.toString());
    setDraggedIndex(index);

    const target = e.currentTarget.cloneNode(true) as HTMLElement;
    target.style.opacity = '0.5';
    document.body.appendChild(target);
    e.dataTransfer.setDragImage(target, 25, 25);
    setTimeout(() => {
      document.body.removeChild(target);
    }, 0);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    if (isDisabled) return;
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
    if (isDisabled) return;

    const dragIndex = parseInt(e.dataTransfer.getData('index'));
    if (isNaN(dragIndex)) return;

    const newNumbers = [...numbers];
    const temp = newNumbers[dragIndex];
    newNumbers[dragIndex] = newNumbers[dropIndex];
    newNumbers[dropIndex] = temp;

    setNumbers(newNumbers);
    setDraggedIndex(null);
    setDragOverIndex(null);

    checkSortOrder(newNumbers);
  };

  const checkSortOrder = (nums: number[]) => {
    const isSorted = nums.every((num, index) => index === 0 || num >= nums[index - 1]);
    setSorted(isSorted);
  };

  return (
    <div className="p-6 rounded-md border backdrop-blur-sm border-border-primary bg-text-tertiary/5">
      <div className="flex flex-col items-center mb-6">
        <h2 className="mb-4 text-xl font-bold text-text-primary">Human Verification</h2>
        <Image
          src="/portfolio-new/images/home/popcorn.gif"
          alt="are you a human"
          width={100}
          height={100}
          className="mb-4 rounded-md"
        />
        <p className="mt-2 text-text-primary/80">
          Ok, so you think you are human? Prove it by arranging these numbers in ascending order.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center mb-6">
        {numbers.map((number, index) => (
          <div
            key={index}
            draggable={!isDisabled}
            onDragStart={e => handleDragStart(e, index)}
            onDragEnd={handleDragEnd}
            onDragOver={e => handleDragOver(e, index)}
            onDragLeave={handleDragLeave}
            onDrop={e => handleDrop(e, index)}
            className={`w-10 h-10 flex items-center justify-center text-xl font-medium rounded-md ${
              !isDisabled ? 'cursor-move' : 'cursor-not-allowed'
            } shadow transition duration-200 
              ${draggedIndex === index ? 'opacity-50' : 'opacity-100'}
              ${
                dragOverIndex === index
                  ? 'bg-bg-tertiary/20 border-2 border-text-tertiary'
                  : sorted
                    ? 'bg-emerald-400 text-white'
                    : 'bg-bg-primary/15 text-text-primary border border-text-primary/20'
              }
              ${isDisabled ? 'opacity-70' : ''}`}
          >
            {number}
          </div>
        ))}
      </div>

      {sorted && (
        <div className="px-4 py-3 mb-6 text-center rounded-md bg-text-tertiary/10 text-text-primary">
          <span className="font-medium">Verification complete!</span> You&apos;ve proven your
          humanity.
        </div>
      )}
    </div>
  );
}
