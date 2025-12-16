import React, { useState, useEffect, useRef } from 'react';
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef(null);
  const statusRef = useRef(null);
  const submitButtonRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    const submitButton = submitButtonRef.current;
    const formStatus = statusRef.current;

    const setLoadingState = (isLoading) => {
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

    const showMessage = (message, type) => {
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
      const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        setLoadingState(true);

        fetch('https://api.hlomail.in/v1/contact-mail', {
          method: 'POST',
          body: formData,
        })
          .then((response) => {
            if (response.ok) {
              showMessage('Your message has been sent successfully!', 'success');
              form.reset();
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
            setFormSubmitted(true);
          });
      };

      form.addEventListener('submit', submitHandler);

      return () => {
        form.removeEventListener('submit', submitHandler);
      };
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <style>{`
        /* Spinner CSS */
        .spinner {
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top: 3px solid white;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          animation: spin 1s linear infinite;
          margin-right: 8px;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        /* Form status success */
        .form-status.success {
          color: #00ffc3;
        }
        /* Form status error */
        .form-status.error {
          color: #ff4d6d;
        }
      `}</style>

      <section
        id="contact"
        className="text-white py-16 px-4 relative overflow-hidden"
        style={{
          backgroundColor: '#0a0a0a',
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(139,92,246,0.08), rgba(139,92,246,0.08) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(0,255,255,0.08), rgba(0,255,255,0.08) 1px, transparent 1px, transparent 40px)',
          backgroundSize: '40px 40px',
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl relative z-10">
          {/* Left Panel */}
          <div
            className="p-8 rounded-2xl shadow-2xl space-y-6 border"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1))',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderColor: 'rgba(139, 92, 246, 0.3)',
            }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <h3 className="text-2xl font-semibold mb-2">
              Let's <span className="text-cyan-400">Connect</span>
            </h3>
            <p className="text-gray-300">
              Feel free to reach out for collaborations or just a friendly hello
            </p>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-4 hover:text-cyan-400 transition-colors">
                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600/50 to-cyan-600/50">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <span>davidbeniel2006@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 hover:text-cyan-400 transition-colors">
                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600/50 to-cyan-600/50">
                  <FaPhone className="text-white text-xl" />
                </div>
                <span>9840488355</span>
              </div>
              <div className="flex items-center gap-4 hover:text-cyan-400 transition-colors">
                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600/50 to-cyan-600/50">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <span>Chennai, Tamil Nadu</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="https://github.com/DavidJayaraj01"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gradient-to-r from-purple-600/50 to-cyan-600/50 hover:from-purple-600 hover:to-cyan-600 text-white text-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/davidjayaraja01"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gradient-to-r from-purple-600/50 to-cyan-600/50 hover:from-purple-600 hover:to-cyan-600 text-white text-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com/david_jayaraj_01"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gradient-to-r from-purple-600/50 to-cyan-600/50 hover:from-purple-600 hover:to-cyan-600 text-white text-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/919840488355"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gradient-to-r from-purple-600/50 to-cyan-600/50 hover:from-purple-600 hover:to-cyan-600 text-white text-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/50"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://facebook.com/klassy.dj"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gradient-to-r from-purple-600/50 to-cyan-600/50 hover:from-purple-600 hover:to-cyan-600 text-white text-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* Right Panel - Form */}
          <form
            ref={formRef}
            className="p-8 rounded-2xl shadow-2xl space-y-6 border"
            id="contactForm"
            style={{
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.1))',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderColor: 'rgba(6, 182, 212, 0.3)',
            }}
          >
            <input
              type="text"
              id="api_key"
              name="api_key"
              value="64480decb173c0683c0157da2f989015"
              style={{ display: 'none' }}
              readOnly
            />

            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
            />
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
            ></textarea>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
            />
            <div
              ref={statusRef}
              id="formStatus"
              className="text-sm"
              style={{ display: 'none' }}
            ></div>
            <button
              type="submit"
              ref={submitButtonRef}
              id="submitButton"
              className="group relative w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                <span>Send Message</span> 
                <span>✈️</span>
              </span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
