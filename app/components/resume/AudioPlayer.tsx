import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FaPlay, FaPause, FaSpinner } from 'react-icons/fa';
import { HiMusicalNote } from 'react-icons/hi2';
import { motion, AnimatePresence } from 'framer-motion';

interface AudioSummaryPlayerProps {
  audioSrc?: string;
  title?: string;
  description?: string;
}

const AudioPlayer: React.FC<AudioSummaryPlayerProps> = ({
  audioSrc = '/audio/page-summary.mp3',
  title = 'Page Summary',
  description = 'Listen to an AI-generated summary of this page',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const togglePlayPause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || isLoading) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(error => {
          console.error('Error playing audio:', error);
          setIsPlaying(false);
        });
    }
  }, [isPlaying, isLoading]);

  useEffect(() => {
    const audio = audioRef.current;
    const progressBar = progressBarRef.current;
    if (!audio || !progressBar) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setIsLoading(false);
    };
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };
    const handleWaiting = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('canplay', handleCanPlay);

    // --- Integrated Seeking Logic ---
    const seek = (e: MouseEvent) => {
      if (!duration) return;
      const rect = progressBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(1, clickX / rect.width));
      const newTime = percentage * duration;

      audio.currentTime = newTime;
      setCurrentTime(newTime);
    };

    const handleMouseDown = (e: MouseEvent) => {
      seek(e); // Apply seek on the initial click

      // Add move and up listeners to the document to capture dragging
      // outside the progress bar.
      const handleMouseMove = (moveEvent: MouseEvent) => {
        seek(moveEvent);
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    progressBar.addEventListener('mousedown', handleMouseDown);

    // If metadata is already loaded, update the state
    if (audio.readyState >= 2) {
      handleLoadedMetadata();
    }

    // --- Cleanup Function ---
    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('canplay', handleCanPlay);
      progressBar.removeEventListener('mousedown', handleMouseDown);
    };
  }, [duration]); // The effect now primarily depends on duration to set up seeking

  const formatTime = (time: number): string => {
    if (isNaN(time) || time === 0) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  const gradientAnimation = {
    background: isPlaying
      ? [
          'linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0, #ff0080)',
          'linear-gradient(45deg, #40e0d0, #ff0080, #ff8c00, #40e0d0)',
        ]
      : 'linear-gradient(45deg, #4a5568, #718096)',
  };

  return (
    <div className="relative p-6 mx-auto mb-10 w-full max-w-xl rounded-lg border backdrop-blur-xs bg-bg-primary/40 border-border-primary">
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      {/* Header */}
      <div className="flex gap-4 items-center mb-4">
        <motion.div
          className="rounded-full"
          animate={gradientAnimation}
          transition={{
            duration: isPlaying ? 3 : 0.3,
            repeat: isPlaying ? Infinity : 0,
            ease: 'linear',
          }}
        >
          <motion.button
            onClick={togglePlayPause}
            disabled={isLoading}
            className="flex justify-center items-center w-20 h-20 rounded-full transition-all duration-300 cursor-pointer disabled:opacity-50"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div key="loading">
                  <FaSpinner className="w-6 h-6 text-white animate-spin" />
                </motion.div>
              ) : isPlaying ? (
                <motion.div
                  key="pause"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                >
                  <FaPause className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="play"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                >
                  <FaPlay className="ml-1 w-6 h-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-text-mute">{description}</p>
        </div>
      </div>

      {/* Progress Bar & Attached Handle */}
      <div className="pt-2">
        <div ref={progressBarRef} className="relative w-full h-1.5 cursor-pointer">
          {/* Background */}
          <div className="w-full h-full rounded-full bg-text-tertiary/10" />

          {/* Progress fill */}
          <div
            className={`absolute top-0 left-0 h-full rounded-full ${
              isPlaying
                ? '[background-image:linear-gradient(70deg,_#ff0080,_#ff8c00,_#40e0d0,_#ff0080)]'
                : '[background-image:linear-gradient(45deg,_#4a5568,_#718096)]'
            }`}
            style={{ width: `${progressPercentage}%` }}
          >
            {/* The draggable handle */}
            <AnimatePresence>
              {!isLoading && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-1/2 w-4 h-4 bg-white rounded-full shadow-md"
                  style={{ y: '-50%', x: '50%' }}
                />
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-between mt-2 text-sm text-text-mute">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Musical Note Animation */}
      <AnimatePresence>
        {isPlaying && (
          <div className="overflow-hidden absolute inset-0 rounded-3xl pointer-events-none">
            {Array.from({ length: 8 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute text-text-tertiary/40"
                initial={{ opacity: 0, y: 100, x: 20 + i * 80, rotate: 0 }}
                animate={{ opacity: [0, 0.6, 0], y: -20, rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 1.5, ease: 'easeOut' }}
              >
                <HiMusicalNote className="w-4 h-4" />
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AudioPlayer;
