const inputElement = document.querySelector('#input-text');
const sourceLanguageElement = document.querySelector('#source-language');
const targetLanguageElement = document.querySelector('#target-language');
const translateButton = document.querySelector('.js-btn');
const outputElement = document.querySelector('.output');
const statusElement = document.querySelector('.status');

function showMessage(message, isError = false) {
    statusElement.textContent = message;
    statusElement.classList.toggle('error', isError);
}

function clearMessages() {
    statusElement.textContent = '';
    statusElement.classList.remove('error');
    outputElement.textContent = '';
}

async function translateText() {
    const text = inputElement.value.trim();
    const sourceLanguage = sourceLanguageElement.value;
    const targetLanguage = targetLanguageElement.value;

    clearMessages();

    if (!text) {
        showMessage('Please enter text to translate.', true);
        return;
    }

    if (!sourceLanguage || !targetLanguage) {
        showMessage('Please select both languages.', true);
        return;
    }

    if (sourceLanguage === targetLanguage) {
        showMessage('Please select two different languages.', true);
        return;
    }

    const query = new URLSearchParams({
        q: text,
        langpair: `${sourceLanguage}|${targetLanguage}`
    });

    translateButton.disabled = true;
    showMessage('Translating...');

    try {
        const response = await fetch(`https://api.mymemory.translated.net/get?${query}`);

        if (!response.ok) {
            throw new Error(`Translation request failed with status ${response.status}.`);
        }

        const data = await response.json();
        const translatedText = data?.responseData?.translatedText;

        if (!translatedText) {
            throw new Error('The translation service returned no result.');
        }

        outputElement.textContent = translatedText;
        showMessage('Translation complete.');
    } catch (error) {
        showMessage(error.message || 'Unable to translate right now. Please try again.', true);
    } finally {
        translateButton.disabled = false;
    }
}

inputElement.addEventListener('input', () => {
    if (!inputElement.value.trim()) {
        clearMessages();
    }
});

translateButton.addEventListener('click', translateText);
