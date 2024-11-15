import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { assets } from '../../assets/assests.js';
import { toast } from "react-toastify";

const ContactUs = () => {
  const form = useRef();
  const recaptchaRef = useRef();
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let timer;
    if (cooldown && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft <= 0 && cooldown) {
      setCooldown(false); // End cooldown
      setCaptchaVerified(false); // Require new captcha after cooldown
      recaptchaRef.current.reset(); // Reset reCAPTCHA visually
      setTimeLeft(0);
    }
    return () => clearInterval(timer);
  }, [cooldown, timeLeft]);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      toast.info("Please verify that you are not a robot.");
      return;
    }

    if (cooldown) {
      toast.info(`Please wait ${timeLeft} seconds before sending another message.`);
      return;
    }

    setIsSubmitting(true); // Block further submissions during this process

    emailjs
      .sendForm(
        'service_xlyunwf',
        'template_koz91we',
        form.current,
        {
          publicKey: 'iWl6NyKxLD2sL3_SY',
        }
      )
      .then(
        () => {
          toast.success('Mail sent successfully!');
          form.current.reset(); // Clear the form fields
          setIsSubmitting(false);
          setCooldown(true); // Start cooldown
          setTimeLeft(60); // Start a 15-second cooldown timer
        },
        (error) => {
          toast.error('Failed to send the email. Please try again.');
          setIsSubmitting(false); // Allow re-submission if failed
        }
      );
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value); // Only set to true if value exists
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl h-auto md:h-[80vh] rounded-lg overflow-hidden shadow-lg">
        {/* Left Section with Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-6">
          <img
            src={assets.contact_photo}
            alt="Contact Us"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Right Section with Email Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-start items-center p-4 md:p-6">
          <h1 className="text-3xl md:text-4xl mb-2 text-orange-700 font-semibold">Contact Us</h1>
          <div className="flex-grow flex items-center justify-center w-full">
            <form ref={form} onSubmit={sendEmail} className="w-full max-w-md">
              <label className="block text-lg mb-1 text-orange-200">Name</label>
              <input
                type="text"
                name="from_name"
                className="w-full mb-3 p-2 border rounded"
                required
              />

              <label className="block text-lg mb-1 text-orange-200">Email</label>
              <input
                type="email"
                name="from_email"
                className="w-full mb-3 p-2 border rounded"
                required
              />

              <label className="block text-lg mb-1 text-orange-200">Message</label>
              <textarea
                name="message"
                className="w-full mb-3 p-2 border rounded"
                rows="4"
                required
              />

              {/* Google reCAPTCHA */}
              <div className="mb-4 flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey='6LfKEXUqAAAAANZm9kojXA7sJB8vjQsc3P61_5sn'
                  onChange={handleCaptchaChange}
                />
              </div>

              <button
                type="submit"
                disabled={!captchaVerified || isSubmitting || cooldown}
                className={`w-full py-2 rounded transition-colors duration-300 ${
                  captchaVerified && !cooldown && !isSubmitting
                    ? 'bg-orange-500 hover:bg-orange-800 text-white rounded-full' // Active state
                    : 'bg-gray-400 text-gray-200 cursor-not-allowed' // Disabled state
                }`}
              >
                {cooldown ? `Wait ${timeLeft}s` : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;