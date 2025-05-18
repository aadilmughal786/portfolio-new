import { useEffect, useState } from 'react';
import { Bird } from '../home/EndPage';

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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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

  // Handle clicking on a number tile
  const handleNumberClick = (index: number) => {
    // Prevent clicks if disabled or if numbers are already sorted correctly
    if (isDisabled || sorted) return;

    if (selectedIndex === null) {
      // First selection
      setSelectedIndex(index);
    } else {
      // Second selection - perform the swap
      if (selectedIndex !== index) {
        const newNumbers = [...numbers];
        const temp = newNumbers[selectedIndex];
        newNumbers[selectedIndex] = newNumbers[index];
        newNumbers[index] = temp;

        setNumbers(newNumbers);
        checkSortOrder(newNumbers);
      }

      // Reset selection after swap
      setSelectedIndex(null);
    }
  };

  const checkSortOrder = (nums: number[]) => {
    const isSorted = nums.every((num, index) => index === 0 || num >= nums[index - 1]);
    setSorted(isSorted);
  };

  return (
    <div className="p-6 rounded-md border backdrop-blur-sm border-border-primary bg-text-tertiary/5">
      <div className="flex flex-col items-center mb-6">
        <h2 className="mb-4 text-xl font-bold text-text-primary">Human Verification</h2>
        <div className="mb-6">
          <Bird />
        </div>
        <p className="mt-2 text-text-primary/80">
          Ok, so you think you are human? Prove it by arranging these numbers in ascending order.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center mb-6">
        {numbers.map((number, index) => (
          <div
            key={index}
            onClick={() => handleNumberClick(index)}
            className={`w-10 h-10 flex items-center justify-center text-xl font-medium rounded-md 
              ${!isDisabled && !sorted ? 'cursor-pointer' : ''} 
              shadow transition duration-200 
              ${selectedIndex === index ? 'ring-2 ring-text-tertiary' : ''}
              ${
                sorted
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

      <div className="text-sm text-center text-text-primary/70">
        {sorted ? (
          <p>Numbers are correctly sorted!</p>
        ) : (
          <p>Click on two numbers to swap their positions.</p>
        )}
      </div>
    </div>
  );
}
