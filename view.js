export const UI_ELEMENTS = {
    DISPLAY: document.querySelector('.display'),
    INPUT_FIELD: document.querySelector('.input'),
    FORM: document.querySelector('form'),
};

export function showResult(firstName, gender) {
    UI_ELEMENTS.DISPLAY.textContent = `"${firstName} - ${gender}"`;
}

export function clearInputField() {
    UI_ELEMENTS.INPUT_FIELD.value = '';
}
