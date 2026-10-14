# JavaScript Language Translator

A lightweight browser-based translation app built with HTML, CSS, and modern JavaScript. It translates text between English, Telugu, and Hindi using the MyMemory Translation API.

## Features

- Translate between English (`en`), Telugu (`te`), and Hindi (`hi`)
- Client-side validation for text and language selections
- Prevents same-language translation requests
- Loading state and disabled button during API calls
- Friendly status/error messages for invalid input and API/network failures
- Accessible labels, focus states, and live-updating result region

## Supported Languages

- English
- Telugu
- Hindi

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- [MyMemory Translation API](https://mymemory.translated.net/doc/spec.php)

## API Usage

This project calls:

```text
GET https://api.mymemory.translated.net/get?q=<text>&langpair=<source>|<target>
```

The query string is created with `URLSearchParams` so user input is safely URL-encoded.

## Local Setup

1. Clone the repository:

```bash
git clone https://github.com/udaynarendra/javascript-language-translator.git
```

2. Open the project directory:

```bash
cd javascript-language-translator
```

3. Open `index.html` in your browser.

## GitHub Pages Deployment

1. Push this project to GitHub.
2. In **Settings → Pages**, set the source to the `main` branch (root).
3. Your live URL will be:

```text
https://udaynarendra.github.io/javascript-language-translator/
```

## Future Improvements

- Add more language options
- Add copy-to-clipboard support
- Add translation history
- Add dark mode
- Add keyboard shortcut support for quick translation

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](./LICENSE).
