import { UI_ELEMENTS, showResult, clearInputField } from './view.js';

const SERVER_URL = 'https://api.genderize.io';

function getData() {
    const firstName = UI_ELEMENTS.INPUT_FIELD.value;
    const url = `${SERVER_URL}?name=${firstName}`;

    return fetch(url)
        .then(response => response.json())
        .catch(alert);
}

UI_ELEMENTS.FORM.addEventListener('submit', e => {
    e.preventDefault();

    const isInputEmpty = UI_ELEMENTS.INPUT_FIELD.value;

    if (!isInputEmpty) return;

    getData()
        .then(result => {
            showResult(result.name, result.gender);
        })
        .catch(alert);

    clearInputField();
});
