import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  mailInput: document.querySelector('.feedback-form input'),
};

let feedbackForm = {};
initForm();

refs.form.addEventListener('input', throttle(handleFormInput, 500));
refs.form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(feedbackForm);
  feedbackForm = {};
  localStorage.removeItem('feedback-form-state');
}

function handleFormInput(e) {
  const formData = new FormData(refs.form);
  formData.forEach((value, name) => (feedbackForm[name] = value));
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackForm));
}

function initForm(e) {
  let saveForm = localStorage.getItem('feedback-form-state');
  if (saveForm) {
    saveForm = JSON.parse(saveForm);
    Object.entries(saveForm).forEach(([name, value]) => {
      feedbackForm[name] = value;
      refs.form.elements[name].value = value;
    });
  }
}
