import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
} from 'react-icons/fa';
import { personalInfo } from '../utils/constants';
import GradientText from './GradientText';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const form = formRef.current;
    const submitButton = submitButtonRef.current;
    const formStatus = statusRef.current;

    const setLoadingState = (isLoading: boolean) => {
      if (submitButton) {
        if (isLoading) {
          submitButton.classList.add('loading');
          submitButton.innerHTML = '<div class="spinner"></div> Sending...';
          submitButton.disabled = true;
        } else {
          submitButton.classList.remove('loading');
          submitButton.innerHTML = '<span>Send Message</span> ✈️';
          submitButton.disabled = false;
        }
      }
    };

    const showMessage = (message: string, type: string) => {
      if (formStatus) {
        formStatus.textContent = message;
        formStatus.className = 'form-status';
        formStatus.classList.add(type);
        formStatus.style.display = 'block';

        if (type === 'success') {
          setTimeout(() => {
            formStatus.style.display = 'none';
          }, 5000);
        }
      }
    };

    if (form) {
      const submitHandler = (e: Event) => {
        e.preventDefault();

        const formDataObj = new FormData(form);
        setLoadingState(true);

        fetch('https://api.hlomail.in/v1/contact-mail', {
          method: 'POST',
          body: formDataObj,
        })
          .then((response) => {
            if (response.ok) {
              showMessage('Your message has been sent successfully!', 'success');
              form.reset();
              setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
              throw new Error('Server error');
            }
          })
          .catch((error) => {
            console.error('Error:', error);
            showMessage('There was an error sending your message. Please try again.', 'error');
          })
          .finally(() => {
            setLoadingState(false);
          });
      };

      form.addEventListener('submit', submitHandler);

      return () => {
        form.removeEventListener('submit', submitHandler);
      };
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <style>{`
        .spinner {
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top: 3px solid white;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          animation: spin 1s linear infinite;
          margin-right: 8px;
          display: inline-block;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .form-status.success {
          color: #22c55e;
          padding: 12px;
          border-radius: 8px;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
        }
        .form-status.error {
          color: #ef4444;
          padding: 12px;
          border-radius: 8px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
        }
      `}</style>

      <section id="contact" className="section-padding relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <GradientText as="h2" className="text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </GradientText>
            <p className="text-slate-400 text-lg">Let's Connect</p>
            <p className="text-slate-300 mt-2">Feel free to reach out for collaborations or just a friendly hello</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Panel - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-2xl border space-y-6"
              style={{
                background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(239, 68, 68, 0.1))',
                backdropFilter: 'blur(20px)',
                borderColor: 'rgba(249, 115, 22, 0.3)',
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-4">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 text-slate-300 hover:text-orange-400 transition-colors group">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-red-500/30 to-orange-500/30 group-hover:from-red-500/50 group-hover:to-orange-500/50 transition-all">
                    <FaEnvelope className="text-orange-400 text-xl" />
                  </div>
                  <span>{personalInfo.email}</span>
                </a>
                <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-4 text-slate-300 hover:text-orange-400 transition-colors group">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-red-500/30 to-orange-500/30 group-hover:from-red-500/50 group-hover:to-orange-500/50 transition-all">
                    <FaPhone className="text-orange-400 text-xl" />
                  </div>
                  <span>{personalInfo.phone}</span>
                </a>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-red-500/30 to-orange-500/30">
                    <FaMapMarkerAlt className="text-orange-400 text-xl" />
                  </div>
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="text-lg font-semibold text-white mb-4">Connect with me</h4>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/DavidJayaraj01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-gradient-to-r from-red-500/30 to-orange-500/30 hover:from-red-500 hover:to-orange-500 text-white text-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://linkedin.com/in/davidjayaraja01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-gradient-to-r from-red-500/30 to-orange-500/30 hover:from-red-500 hover:to-orange-500 text-white text-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://instagram.com/david_jayaraj_01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-gradient-to-r from-red-500/30 to-orange-500/30 hover:from-red-500 hover:to-orange-500 text-white text-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://wa.me/919840488355"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-gradient-to-r from-red-500/30 to-orange-500/30 hover:from-red-500 hover:to-orange-500 text-white text-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/50"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="https://facebook.com/klassy.dj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-gradient-to-r from-red-500/30 to-orange-500/30 hover:from-red-500 hover:to-orange-500 text-white text-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                  >
                    <FaFacebookF />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Panel - Form */}
            <motion.form
              ref={formRef}
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 rounded-2xl border space-y-5"
              style={{
                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(249, 115, 22, 0.1))',
                backdropFilter: 'blur(20px)',
                borderColor: 'rgba(239, 68, 68, 0.3)',
              }}
            >
              <input
                type="hidden"
                name="api_key"
                value="64480decb173c0683c0157da2f989015"
              />
              <input
                type="hidden"
                name="to_email"
                value="davidjayaraj01@gmail.com"
              />

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg/50 border border-orange-500/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all placeholder-slate-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg/50 border border-orange-500/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all placeholder-slate-500"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-dark-bg/50 border border-orange-500/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all placeholder-slate-500"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg/50 border border-orange-500/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none placeholder-slate-500"
                ></textarea>
              </div>
              
              <div
                ref={statusRef}
                className="form-status text-sm"
                style={{ display: 'none' }}
              ></div>
              
              <button
                type="submit"
                ref={submitButtonRef}
                className="group relative w-full py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2">
                  <span>Send Message</span> 
                  <span>✈️</span>
                </span>
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
