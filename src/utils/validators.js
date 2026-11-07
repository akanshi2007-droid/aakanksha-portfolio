/**
 * Validation rules for the contact form. Each rule returns an error message,
 * or an empty string when the value is valid. Keys match field ids in
 * src/data/contactForm.json.
 */
export const validators = {
  name: value => {
    const v = value.trim();
    if (!v) return 'Please enter your name.';
    if (v.length < 2) return 'Name must be at least 2 characters.';
    if (!/^[\p{L}\p{M}' .-]+$/u.test(v)) return "Name can only contain letters, spaces, . - and '.";
    return '';
  },
  email: value => {
    const v = value.trim();
    if (!v) return 'Please enter your email.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return 'Enter a valid email like name@example.com.';
    return '';
  },
  message: value => {
    const v = value.trim();
    if (!v) return 'Please write a message.';
    if (v.length < 10) return 'Message must be at least 10 characters.';
    return '';
  }
};
