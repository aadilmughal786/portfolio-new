'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ReCAPTCHA from 'react-google-recaptcha';
import confetti from 'canvas-confetti';

export default function ContactForm() {
  // Form state management
  const [state, handleSubmit, reset] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID as string);
  const [honeypot, setHoneypot] = useState(''); // Anti-spam hidden field
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  // Message length validation constants
  const MAX_MESSAGE_LENGTH = 500;
  const MIN_MESSAGE_LENGTH = 20;
  const WARNING_THRESHOLD = 450;

  // Enable/disable submit button based on form validity
  useEffect(() => {
    const isMessageValid = message.length >= MIN_MESSAGE_LENGTH;
    const isSubjectValid = subject.trim().length > 0;
    setIsButtonEnabled(recaptchaToken !== null && isMessageValid && isSubjectValid);
  }, [recaptchaToken, message, subject]);

  // Confetti animation function
  const runConfetti = () => {
    const duration = 4000;
    const end = Date.now() + duration;
    const colors = ['#00d5f6', '#007397', '#ffffff'];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { y: 0.6 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  useEffect(() => {
    if (state.succeeded) {
      reset();
      setMessage('');
      setSubject('');
      setRecaptchaToken(null);
      runConfetti();
    }
  }, [reset, state.succeeded]);

  // Message input change handler
  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  // Dynamic styling based on message length
  const getCharCounterClass = () => {
    if (message.length >= MAX_MESSAGE_LENGTH || message.length < MIN_MESSAGE_LENGTH)
      return 'text-red-600 font-bold';
    if (message.length >= WARNING_THRESHOLD) return 'text-amber-600';
    return 'text-gray-500';
  };

  const getMessageBorderClass = () =>
    message.length > 0 && message.length < MIN_MESSAGE_LENGTH
      ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
      : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500';

  // Success state
  if (state.succeeded) {
    return (
      <div className="p-4 bg-green-50 rounded-lg border border-green-200 shadow-sm">
        <div className="flex items-center mb-2">
          <svg
            className="mr-2 w-5 h-5 text-green-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h3 className="font-medium text-green-800 text-md">Message sent!</h3>
        </div>
        <p className="text-sm text-green-700">
          Thank you for reaching out! Our pigeon has delivered your message safely.
        </p>
      </div>
    );
  }

  // Main form render
  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 mx-auto space-y-6 w-full max-w-md bg-white rounded-lg border border-gray-100 shadow-sm"
    >
      {/* Form header */}
      <h2 className="mb-1 text-xl font-semibold text-gray-800">Get in Touch</h2>
      <p className="mb-4 text-sm text-gray-600">
        {"Fill out the form below and we'll respond as soon as possible."}
      </p>

      {/* Name field */}
      <div>
        <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your name"
          className="block px-4 py-2 w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="mt-1 text-sm text-red-600"
        />
      </div>

      {/* Email field */}
      <div>
        <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="your.email@example.com"
          className="block px-4 py-2 w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-1 text-sm text-red-600"
        />
      </div>

      {/* Subject field */}
      <div>
        <label htmlFor="subject" className="block mb-1 text-sm font-medium text-gray-700">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={subject}
          onChange={e => setSubject(e.target.value)}
          placeholder="What's this about?"
          className="block px-4 py-2 w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
          className="mt-1 text-sm text-red-600"
        />
      </div>

      {/* Message field */}
      <div>
        <div className="flex justify-between mb-1">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <span className={`text-xs ${getCharCounterClass()}`}>
            {message.length}/{MAX_MESSAGE_LENGTH} characters
            {message.length > 0 &&
              message.length < MIN_MESSAGE_LENGTH &&
              ` (min ${MIN_MESSAGE_LENGTH})`}
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={message}
          onChange={handleMessageChange}
          maxLength={MAX_MESSAGE_LENGTH}
          placeholder={`How can we help you? (minimum ${MIN_MESSAGE_LENGTH} characters)`}
          className={`block px-4 py-2 w-full rounded-md border shadow-sm resize-y focus:ring-2 sm:text-sm ${getMessageBorderClass()}`}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-1 text-sm text-red-600"
        />
      </div>

      {/* Honeypot field for spam prevention */}
      <input
        type="text"
        name="_gotcha"
        value={honeypot}
        onChange={e => setHoneypot(e.target.value)}
        className="hidden"
      />

      {/* reCAPTCHA */}
      <div className="flex justify-center">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
          onChange={setRecaptchaToken}
        />
      </div>
      <input type="hidden" name="g-recaptcha" value={recaptchaToken || ''} />

      {/* Submit button */}
      <button
        type="submit"
        disabled={state.submitting || !isButtonEnabled}
        className="w-full cursor-pointer flex justify-center items-center px-4 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
      >
        {state.submitting ? (
          <div className="flex gap-2 items-center">
            <div className="w-5 h-5 rounded-full border-2 animate-spin border-t-transparent" />
            Sending...
          </div>
        ) : (
          <span>Send Message</span>
        )}
      </button>
    </form>
  );
}
