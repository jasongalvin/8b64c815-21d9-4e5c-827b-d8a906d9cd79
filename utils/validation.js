export const validateInput = (data) => {
  const errors = {};
  if (!data.email) {
    errors.email = 'Email is required';
  }
  // additional validation logic here
  return errors;
};