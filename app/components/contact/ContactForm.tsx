'use client';

import { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import confetti from 'canvas-confetti';
import { FaEnvelope, FaUser } from 'react-icons/fa';
import { FiTarget } from 'react-icons/fi';

export default function ContactSection() {
  // Message length validation constants
  const MAX_MESSAGE_LENGTH = 500;
  const MIN_MESSAGE_LENGTH = 20;
  const WARNING_THRESHOLD = 450;

  // State for form fields - simplified approach
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Track if each field has been touched (for validation)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  // FormSpree hook - simplified usage
  const [submissionState, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || '');

  // Handle input changes with minimal re-renders
  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Mark field as touched on blur
  const handleBlur = e => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true,
    }));
  };

  // Check if all fields are valid
  const areAllFieldsValid = () => {
    return (
      formState.name.trim() !== '' &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email) &&
      formState.subject.trim() !== '' &&
      formState.message.length >= MIN_MESSAGE_LENGTH &&
      formState.message.length <= MAX_MESSAGE_LENGTH
    );
  };

  // Is form ready to submit
  const isFormValid = areAllFieldsValid();

  // Reset form after successful submission
  useEffect(() => {
    // if (submissionState.succeeded) {
    runConfetti();
    // }
  }, []);

  const runConfetti = () => {
    const duration = 3 * 1000; // 3 seconds
    const end = Date.now() + duration;

    const colors = ['#00d5f6', '#007397', '#ffffff']; // You can customize the colors

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  // Helper functions for styling - minimized calculations
  const getCharCounterClass = () => {
    const length = formState.message.length;
    if (length >= MAX_MESSAGE_LENGTH || (length > 0 && length < MIN_MESSAGE_LENGTH))
      return 'text-red-600 font-bold';
    if (length >= WARNING_THRESHOLD) return 'text-amber-600';
    return 'text-gray-500';
  };

  const getMessageBorderClass = () => {
    const length = formState.message.length;
    return length > 0 && length < MIN_MESSAGE_LENGTH
      ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
      : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500';
  };

  if (submissionState.succeeded) {
    return (
      <section className="overflow-hidden relative px-4 pb-30 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Contact <span className="text-text-tertiary">Me</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-primary/80">
              {`Let's turn your ideas into reality. Whether you have a question, project inquiry, or
              just want to say hello.`}
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="p-6 rounded-xl border backdrop-blur-sm border-text-tertiary/10 bg-text-tertiary/5">
              <div className="flex items-center mb-4">
                <div className="p-3 mr-4 rounded-full bg-text-tertiary/10 text-text-tertiary">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary">Message sent!</h3>
              </div>
              <p className="mb-4 text-text-primary/80">
                {`Thank you for reaching out! I've received your message and will get back to you as
                soon as possible.`}
              </p>
              <p className="italic text-text-primary/70">
                Usually responds within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="overflow-hidden relative px-4 pb-30 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Contact <span className="text-text-tertiary">Me</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-primary/80">
            {`Let's turn your ideas into reality. Whether you have a question, project inquiry, or
            just want to say hello.`}
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <form
            onSubmit={handleSubmit}
            className="p-6 space-y-5 rounded-xl border backdrop-blur-sm border-text-tertiary/10 dark:bg-bg-primary/5"
            id="contact-form"
          >
            <div>
              <h2 className="mb-1 text-2xl font-bold text-text-primary">Send a Message</h2>
              <p className="text-text-primary/80">
                {`Have questions or want to work together? I'd love to hear from you.`}
              </p>
            </div>

            {/* Hidden honeypot field for spam prevention */}
            <input type="text" name="_gotcha" className="hidden" />

            {/* Two column layout for name and email */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block mb-1 text-sm font-medium text-text-primary">
                  Name
                </label>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-text-primary">
                    <FaUser />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Your name"
                    className="block py-2 pr-4 pl-10 w-full rounded-md border text-text-primary bg-bg-primary/15 border-text-primary/20 placeholder-text-primary/50 sm:text-sm"
                  />
                </div>
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block mb-1 text-sm font-medium text-text-primary">
                  Email
                </label>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-text-primary">
                    <FaEnvelope />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="your.email@example.com"
                    className="block py-2 pr-4 pl-10 w-full rounded-md border text-text-primary bg-bg-primary/15 border-text-primary/20 placeholder-text-primary/50 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Subject field */}
            <div>
              <label htmlFor="subject" className="block mb-1 text-sm font-medium text-text-primary">
                Subject
              </label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-text-primary">
                  <FiTarget />
                </div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formState.subject}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="What's this about?"
                  className="block py-2 pr-4 pl-10 w-full rounded-md border text-text-primary bg-bg-primary/15 border-text-primary/20 placeholder-text-primary/50 sm:text-sm"
                />
              </div>
            </div>

            {/* Message field */}
            <div>
              <div className="flex justify-between mb-1">
                <label htmlFor="message" className="block text-sm font-medium text-text-primary">
                  Message
                </label>
                <span className={`text-xs ${getCharCounterClass()}`}>
                  {formState.message.length}/{MAX_MESSAGE_LENGTH} characters
                  {formState.message.length > 0 &&
                    formState.message.length < MIN_MESSAGE_LENGTH &&
                    ` (min ${MIN_MESSAGE_LENGTH})`}
                </span>
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  maxLength={MAX_MESSAGE_LENGTH}
                  placeholder={`How can I help you? (minimum ${MIN_MESSAGE_LENGTH} characters)`}
                  className={`block px-4 py-2 w-full rounded-md border text-text-primary bg-bg-primary/15 border-text-primary/20 placeholder-text-primary/50 sm:text-sm ${getMessageBorderClass()}`}
                />
              </div>
            </div>

            {/* Submit button - only enabled when all validations pass */}
            <button
              type="submit"
              disabled={submissionState.submitting || !isFormValid}
              className="flex justify-center items-center px-4 py-3 w-full text-sm font-medium text-white rounded-md cursor-pointer bg-text-tertiary/80 hover:bg-text-tertiary focus:ring-2 focus:ring-offset-2 focus:ring-text-tertiary disabled:opacity-50"
            >
              {submissionState.submitting ? (
                <div className="flex gap-2 items-center">
                  <div className="w-5 h-5 rounded-full border-2 animate-spin border-t-transparent" />
                  Sending...
                </div>
              ) : (
                <span>Send Message</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
