const UI_ELEMS = {
    DISPLAY: document.querySelector('.display'),
    INPUT_FIELD: document.querySelector('.input'),
    FORM: document.querySelector('form'),
};

let firstName = '',
    gender;

function getData() {
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${firstName}`;

    return fetch(url)
        .then(response => response.json())
        .catch(err => {
            alert(err);
        });
}

function showResult() {
    UI_ELEMS.DISPLAY.textContent = `"${firstName} - ${gender}"`;
}

function writeFirstName(event) {
    event.preventDefault();
    firstName = UI_ELEMS.INPUT_FIELD.value;
}

function clearInputField() {
    UI_ELEMS.INPUT_FIELD.value = '';
}

UI_ELEMS.FORM.addEventListener('submit', e => {
    writeFirstName(e);
    clearInputField();

    if (firstName !== '') {
        getData()
            .then(result => {
                gender = result.gender;
                showResult();
            })
            .catch(err => {
                alert(err);
            });
    } else {
        alert('Введите имя');
    }
});
