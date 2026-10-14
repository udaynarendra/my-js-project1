const textInput = document.querySelector('#input-text');
const sourceLanguageSelect = document.querySelector('.js-From');
const targetLanguageSelect = document.querySelector('.js-To');
const translateButton = document.querySelector('.js-btn');
const outputElement = document.querySelector('.output');
const statusElement = document.querySelector('.js-status');

function clearOutput() {
  outputElement.textContent = '';
}

function setStatus(message, isError = false) {
  statusElement.textContent = message;
  statusElement.classList.toggle('error', isError);
}

async function translateText() {
  const textToTranslate = textInput.value.trim();
  const sourceLanguage = sourceLanguageSelect.value;
  const targetLanguage = targetLanguageSelect.value;

  setStatus('');

  if (!textToTranslate) {
    clearOutput();
    setStatus('Please enter text to translate.', true);
    return;
  }

  if (!sourceLanguage) {
    setStatus('Please select the source language.', true);
    return;
  }

  if (!targetLanguage) {
    setStatus('Please select the target language.', true);
    return;
  }

  if (sourceLanguage === targetLanguage) {
    clearOutput();
    setStatus('Source and target languages must be different.', true);
    return;
  }

  const query = new URLSearchParams({
    q: textToTranslate,
    langpair: `${sourceLanguage}|${targetLanguage}`,
  });

  const endpoint = `https://api.mymemory.translated.net/get?${query.toString()}`;

  translateButton.disabled = true;
  setStatus('Translating...');
  clearOutput();

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(`Translation request failed (${response.status}).`);
    }

    const data = await response.json();

    if (data?.responseStatus && Number(data.responseStatus) !== 200) {
      throw new Error(data.responseDetails || 'Translation service returned an error.');
    }

    const translatedText = data?.responseData?.translatedText;

    if (!translatedText) {
      throw new Error('No translation was returned. Please try again.');
    }

    outputElement.textContent = translatedText;
    setStatus('Translation complete.');
  } catch (error) {
    clearOutput();
    setStatus(error instanceof Error ? error.message : 'Unable to translate right now. Please try again.', true);
  } finally {
    translateButton.disabled = false;
  }
}

textInput.addEventListener('input', () => {
  if (!textInput.value.trim()) {
    clearOutput();
    setStatus('');
  }
});

translateButton.addEventListener('click', () => {
  translateText();
});
