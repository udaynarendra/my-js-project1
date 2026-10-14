const inputTextElement = document.querySelector('#input-text');
const sourceLanguageSelect = document.querySelector('.js-source-language');
const targetLanguageSelect = document.querySelector('.js-target-language');
const translateButton = document.querySelector('.js-translate-btn');
const outputElement = document.querySelector('#translation-output');

function setOutputMessage(message, type = 'info') {
    outputElement.textContent = message;
    outputElement.className = `output output-${type}`;
}

function clearOutputIfInputEmpty() {
    if (inputTextElement.value.trim() === '') {
        setOutputMessage('', 'info');
    }
}

async function translateText() {
    const textToTranslate = inputTextElement.value.trim();
    const sourceLanguage = sourceLanguageSelect.value;
    const targetLanguage = targetLanguageSelect.value;

    if (!textToTranslate) {
        setOutputMessage('Please enter text to translate.', 'error');
        return;
    }

    if (!sourceLanguage) {
        setOutputMessage('Please select the source language.', 'error');
        return;
    }

    if (!targetLanguage) {
        setOutputMessage('Please select the target language.', 'error');
        return;
    }

    if (sourceLanguage === targetLanguage) {
        setOutputMessage('Source and target languages must be different.', 'error');
        return;
    }

    const queryParams = new URLSearchParams({
        q: textToTranslate,
        langpair: `${sourceLanguage}|${targetLanguage}`
    });

    const requestUrl = `https://api.mymemory.translated.net/get?${queryParams.toString()}`;

    translateButton.disabled = true;
    setOutputMessage('Translating...', 'loading');

    try {
        const response = await fetch(requestUrl);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        const translatedText = data?.responseData?.translatedText;

        if (!translatedText) {
            const apiMessage = data?.responseDetails || data?.responseStatus;
            throw new Error(apiMessage || 'Translation service returned an empty response.');
        }

        setOutputMessage(translatedText, 'success');
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        setOutputMessage(`Unable to translate right now. ${message}`, 'error');
    } finally {
        translateButton.disabled = false;
    }
}

inputTextElement.addEventListener('input', clearOutputIfInputEmpty);
translateButton.addEventListener('click', translateText);
