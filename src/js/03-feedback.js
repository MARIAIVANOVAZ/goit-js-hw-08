import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
  };


const STORAGE_KEY = 'feedback-form-state';


refs.form.addEventListener('submit', onSubmitForm);
refs.input.addEventListener('input', throttle(onInputTextarea, 500));
refs.textarea.addEventListener('input', throttle(onInputTextarea, 500));

const formData = {
    email: '',
    message: '',
  };


function onSubmitForm(event) {
    event.preventDefault();
    if(formData.message === '' || formData.email === '') {
        alert('please fill in all fields')
    } else {
    event.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
} 
};

onCurrentPage();

function onInputTextarea(event) {
    formData[event.target.name] = event.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

   
};



function onCurrentPage () {
    const currentText = JSON.parse(localStorage.getItem(STORAGE_KEY));


    if (currentText) {
        formData.message = currentText.message;
        formData.email = currentText.email;

        refs.input.value = currentText.email;
        refs.textarea.value = currentText.message;
    }
   

} 
