# JavaScript Language Translator

A simple browser-based language translator built with HTML, CSS, JavaScript, and the MyMemory Translation API.

## What this app does

This app lets users enter text and translate it between the currently supported languages using a client-side request to the MyMemory API.

## Supported languages

- English (`en`)
- Telugu (`te`)
- Hindi (`hi`)

## Technologies used

- HTML
- CSS
- JavaScript (vanilla)
- [MyMemory Translation API](https://mymemory.translated.net/doc/spec.php)

## How the API request works

When **Translate** is clicked, the app validates:

1. Text is provided
2. Source language is selected
3. Target language is selected
4. Source and target languages are different

Then it sends a GET request to:

```text
https://api.mymemory.translated.net/get
```

with encoded query parameters via `URLSearchParams`:

- `q`: text to translate
- `langpair`: `<source>|<target>` (example: `en|te`)

The response is read from `responseData.translatedText` and rendered with `textContent`.

## Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/udaynarendra/my-js-project1.git
   ```

2. Open the project folder:

   ```bash
   cd my-js-project1
   ```

3. Open `index.html` directly in a browser (double-click or drag the file into a browser window).

No build step or dependencies are required.

## Project structure

```text
my-js-project1/
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── index.html
├── style.css
└── translator.js
```

## Current limitations

- Uses a free public API with rate limits and variable response quality.
- Requires internet access for translation.
- Currently supports only three languages.
- No translation history or persistence.

## Roadmap

- Add more language options.
- Add copy-to-clipboard for translated text.
- Add loading/error UI enhancements and retry support.
- Add optional voice input/output features.
- Add automated tests.

## GitHub Pages deployment

You can deploy this static project with GitHub Pages:

1. Go to repository **Settings** → **Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose branch **main** and folder **/(root)**.
4. Save and wait for Pages to publish.

After publishing, GitHub will provide the project URL in the Pages section.

## Contributing

Contributions are welcome. Please follow the guidelines in [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
