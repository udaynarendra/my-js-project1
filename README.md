# JavaScript Language Translator

A simple browser-based language translator built with HTML, CSS, and JavaScript. It uses the MyMemory Translation API to translate text between English, Telugu, and Hindi.

## Features

- Translate text between English, Telugu, and Hindi.
- Validate text and language selections before sending a request.
- Display loading, success, and error messages.
- Use the MyMemory Translation API directly from the browser.
- Run locally without installing dependencies.

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- [MyMemory Translation API](https://mymemory.translated.net/)

## How It Works

The browser sends the entered text and selected language pair to the MyMemory API. The API response is read as JSON, and the translated text is displayed in the result area.

Supported language codes:

- English: `en`
- Telugu: `te`
- Hindi: `hi`

## Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/udaynarendra/javascript-language-translator.git
   ```

2. Open the project folder.
3. Open `index.html` in a modern web browser.
4. Enter text, choose the source and target languages, and select **Translate**.

No package installation or build step is required.

## Project Structure

```text
.
├── index.html       # Accessible translator interface
├── style.css        # Layout and visual styling
├── translator.js    # Validation, API request, and result handling
├── CONTRIBUTING.md  # Contribution guidelines
├── LICENSE          # MIT License
└── README.md        # Project documentation
```

## Limitations

- Translation depends on the availability and limits of the MyMemory API.
- The application currently supports only English, Telugu, and Hindi.
- There is no translation history, authentication, or server-side proxy.
- The API response can vary depending on the external service.

## Roadmap

- Add more supported languages.
- Add copy-to-clipboard functionality.
- Add text-to-speech support.
- Add translation history.
- Add a dark mode.
- Add automated tests.

## GitHub Pages

This is a static project and can be deployed with GitHub Pages:

1. Open the repository **Settings** on GitHub.
2. Select **Pages** in the sidebar.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the root (`/`) folder.
5. Save the settings and wait for GitHub Pages to publish the site.

The live URL will be provided by GitHub after deployment. This repository does not claim a live demo until Pages has been enabled.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting changes.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
