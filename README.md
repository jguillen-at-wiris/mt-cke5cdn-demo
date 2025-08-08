# CKEditor 5 CDN + MathType Demo

## Introduction

This demo project demonstrates how to integrate the **MathType for CKEditor 5 NPM package** with the **CKEditor 5 CDN version**. This simple build showcases the seamless integration between the MathType plugin (installed via NPM) and CKEditor 5 loaded from CDN, providing a practical example for developers who want to use MathType with CKEditor 5 in a CDN-based setup.

The project uses **Vite** as the development server and build tool, making it easy to set up and run locally.

## Project Structure

```
mt-cke5cdn-demo/
├── index.html          # Main HTML file
├── src/
│   └── main.js         # Main JavaScript file with CKEditor initialization
├── package.json        # Project dependencies and scripts
└── README.md          # This file
```

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager
- A valid CKEditor 5 CDN license key

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This will install the required dependencies including:
- Vite (development server)
- MathType for CKEditor 5 NPM package

### 2. Configure License Key

**Important:** Before running the project, you must add your CKEditor 5 CDN license key.

Open `src/main.js` and locate **line 34**:

```javascript
licenseKey: 'YOUR_LICENSE_KEY_HERE', // !!! Replace with your actual license key
```

Replace `'YOUR_LICENSE_KEY_HERE'` with your actual CKEditor 5 license key.

### 3. Start Development Environment

To enable the development environment, run:

```bash
npm run dev
```

This will start the Vite development server, typically on `http://localhost:5173` (or another available port). The server will automatically reload when you make changes to the code.

## How It Works

1. **CKEditor 5 Loading**: The application loads CKEditor 5 from CDN (`https://cdn.ckeditor.com/ckeditor5/46.0.0/ckeditor5.umd.js`)

2. **MathType Integration**: The MathType plugin is loaded from the locally installed NPM package (`@wiris/mathtype-ckeditor5`)

3. **Dynamic Loading**: Both scripts are loaded dynamically and asynchronously to ensure proper initialization order

4. **Editor Configuration**: The editor is configured with essential plugins including MathType and ChemType functionality

## Troubleshooting

If you encounter issues:

1. **License Key Error**: Ensure you've replaced the placeholder license key with your actual CKEditor 5 license
2. **Loading Issues**: Check your internet connection as CKEditor 5 is loaded from CDN
3. **Dependencies**: Run `npm install` to ensure all dependencies are properly installed

## License

This demo project is for demonstration purposes. Pleasite ensure you have appropriate licenses for:
- CKEditor 5 (commercial license required for production use)
- MathType for CKEditor 5

## Support

For issues related to:
- **CKEditor 5**: Visit [CKEditor 5 Documentation](https://ckeditor.com/docs/ckeditor5/)
- **MathType**: Visit [MathType Documentation](https://docs.wiris.com/mathtype/en/)

You can also contact the Wiris Technical Support Team at [support@wiris.com](mailto:support@wiris.com)