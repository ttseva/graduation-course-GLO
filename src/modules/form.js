import {validate} from "./helpers.js";

const form = (formIds) => {
  const totalOutput = document.querySelector('#calc-total');

  const getForm = (blockId) => {
    const form = document.querySelector(`#${blockId} form`);
    const inputs = form.querySelectorAll('input');
    const submitBtn = form.querySelector('[type="Submit"]');
    return {form, inputs, submitBtn};
  }

  const sendForm = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
      .catch(err => alert('Ошибка отправки формы'));
  }

  const isEmpty = inputs => {
    let hasEmpty = false;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.classList.add('error');
        input.setAttribute('placeholder', 'Поле не может быть пустым');
        hasEmpty = true;
      } else {
        input.classList.remove('error');
      }
    });

    return hasEmpty;
  }

  const handleForm = (formObj) => {
    formObj.submitBtn.addEventListener('click', (e) => {
      e.preventDefault();

      if (!isEmpty(formObj.inputs)) {

        const total = totalOutput ? totalOutput.value : 0;
        const formData = {};

        formObj.inputs.forEach((input) => {
          formData[input.name] = input.value
        })
        formData['total'] = total;

        sendForm(formData)
          .then(data => {
            formObj.inputs.forEach((input) => {
              input.value = '';
            })
          })

        const oldButtonText = formObj.submitBtn.textContent;
        formObj.submitBtn.textContent = 'Форма отправлена!'
        setTimeout(() => {
          formObj.submitBtn.textContent = oldButtonText;
        }, 2000);
      }
    })
  }

  formIds.forEach(name => {
    const form = getForm(name);
    validate(form.inputs)
    handleForm(form);
  });
}

export default form;