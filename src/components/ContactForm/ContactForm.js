import emailjs from '@emailjs/browser';
import { faIdCardAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import './ContactForm.css';
import Button from '../common/Button';
import SectionTitle from '../common/SectionTitle';

// Small presentational subcomponents to keep Contact lean

const FormIcon = () => (
  <div className="form-icon">
    <FontAwesomeIcon icon={faIdCardAlt} color="white" size="3x" />
  </div>
);

const NameEmailFields = ({ errors = {} }) => (
  <div className="form-grid">
    <input
      type="text"
      name="user_name"
      placeholder="Your Name"
      className={`item form-control ${errors.user_name ? 'is-invalid' : ''}`}
      aria-label="Your Name"
      aria-invalid={errors.user_name ? 'true' : undefined}
      required
    />
    {errors.user_name && <div className="invalid-feedback">{errors.user_name}</div>}
    <input
      type="email"
      name="user_email"
      placeholder="Email Address"
      className={`item form-control ${errors.user_email ? 'is-invalid' : ''}`}
      aria-label="Email Address"
      aria-invalid={errors.user_email ? 'true' : undefined}
      required
    />
    {errors.user_email && <div className="invalid-feedback">{errors.user_email}</div>}
  </div>
);

const SubjectPhoneFields = ({ errors = {} }) => (
  <>
    <input
      type="text"
      name="subject"
      placeholder="Subject (optional)"
      className="item form-control"
      aria-label="Subject"
    />
    <input
      type="tel"
      name="phone"
      placeholder="Phone (optional)"
      className={`item form-control ${errors.phone ? 'is-invalid' : ''}`}
      aria-label="Phone"
    />
    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
  </>
);

const MessageField = ({ errors = {}, onChange }) => (
  <textarea
    name="message"
    placeholder="Write your message..."
    className={`item form-control ${errors.message ? 'is-invalid' : ''}`}
    aria-label="Message"
    aria-invalid={errors.message ? 'true' : undefined}
    maxLength={1000}
    onChange={onChange}
    required
  />
  // Note: invalid-feedback for textarea needs to follow it in DOM
);

const HoneypotField = () => (
  <input type="text" name="hp" tabIndex="-1" autoComplete="off" className="hp" aria-hidden="true" />
);

const SubmitButton = ({ sending }) => (
  <div className="submit-row">
    <Button type="submit" variant="accent" size="lg" className="w-100" loading={sending} disabled={sending}>
      {sending ? 'Sending…' : 'Send Message'}
    </Button>
  </div>
);

// Validation helpers
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[+0-9\s\-()]{6,}$/;
const getField = (fd, name) => (fd.get(name) || '').toString().trim();
function buildErrors(fd) {
  const nextErrors = {};
  const user_name = getField(fd, 'user_name');
  const user_email = getField(fd, 'user_email');
  const message = getField(fd, 'message');
  const phone = getField(fd, 'phone');

  if (!user_name) nextErrors.user_name = 'Please enter your name.';
  if (!emailRe.test(user_email)) nextErrors.user_email = 'Please enter a valid email address.';
  if (message.length < 10) nextErrors.message = 'Message should be at least 10 characters.';
  if (phone && !phoneRe.test(phone)) nextErrors.phone = 'Please enter a valid phone number.';

  const firstKey = Object.keys(nextErrors)[0];
  return { errors: nextErrors, firstKey };
}

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string }
  const [errors, setErrors] = useState({});

  function validateForm() {
    const fd = new FormData(form.current);
    const { errors: nextErrors, firstKey } = buildErrors(fd);
    setErrors(nextErrors);
    if (firstKey) {
      form.current?.querySelector(`[name="${firstKey}"]`)?.focus();
      return false;
    }
    return true;
  }
  const [messageLen, setMessageLen] = useState(0);

  function sendEmail(e) {
    e.preventDefault();
    // Honeypot: bots may fill this hidden field
    const hp = e.currentTarget['hp']?.value;
    if (hp) {
      return; // silently ignore
    }
  setStatus(null);
  if (!validateForm()) return;
    setSending(true);
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
          setStatus({ type: 'success', message: "Thanks! Your message was sent. I'll reply soon." });
          form.current?.reset();
          setErrors({});
        },
        (error) => {
          console.log(error.text);
          setStatus({ type: 'error', message: 'Sorry, something went wrong. Please try again later.' });
        }
      )
      .finally(() => setSending(false));
  }
  return (
    <section className="section" id="contact">
      <div className="container">
        {/* Toast notifications */}
        <ToastContainer position="top-end" className="p-3">
          <Toast
            bg={status?.type === 'error' ? 'danger' : 'dark'}
            show={!!status}
            onClose={() => setStatus(null)}
            delay={4000}
            autohide
          >
            <Toast.Header closeButton>
              <strong className="me-auto">{status?.type === 'error' ? 'Error' : 'Message sent'}</strong>
            </Toast.Header>
            <Toast.Body className="text-white">{status?.message}</Toast.Body>
          </Toast>
        </ToastContainer>
  <SectionTitle number={5}>Connect with me</SectionTitle>

        <div className="contact-form">
          <form className="contact-card" ref={form} onSubmit={sendEmail} noValidate>
            <FormIcon />
            <NameEmailFields errors={errors} />
            <SubjectPhoneFields errors={errors} />
            <MessageField errors={errors} onChange={(e) => setMessageLen(e.target.value.length)} />
            <div className="char-counter">{messageLen} / 1000</div>
            {errors.message && <div className="invalid-feedback d-block mb-2">{errors.message}</div>}
            <HoneypotField />
            <SubmitButton sending={sending} />
          </form>
        </div>
  </div>
    </section>
  );
};

export default Contact;
