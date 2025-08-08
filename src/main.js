// Initialize CKEditor 5 with MathType
async function initializeCKEditor() {
  try {
    // Load CKEditor 5 UMD if not already loaded
    if (!window.CKEDITOR) {
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.ckeditor.com/ckeditor5/46.0.0/ckeditor5.umd.js';
        script.onload = resolve;
        script.onerror = () => reject(new Error('Failed to load CKEditor 5 UMD'));
        document.head.appendChild(script);
      });
    }

    // Load MathType UMD
    await new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'node_modules/@wiris/mathtype-ckeditor5/dist/browser/index.umd.js';
      script.onload = resolve;
      script.onerror = () => reject(new Error('Failed to load MathType UMD'));
      document.head.appendChild(script);
    });

    // Get CKEditor components from global object
    const { ClassicEditor, Essentials, Bold, Italic, Paragraph } = window.CKEDITOR;
    
    // Get MathType plugin from global object
    const MathTypePlugin = window['@wiris/mathtype-ckeditor5']?.MathType || 
                          window['@wiris/mathtype-ckeditor5']?.default || 
                          window['@wiris/mathtype-ckeditor5'];

    // Create the editor
    const editor = await ClassicEditor.create(document.querySelector('#ckeditor'), {
      licenseKey: 'YOUR_LICENSE_KEY_HERE', // !!! Replace with your actual license key
      plugins: [Essentials, Bold, Italic, Paragraph, MathTypePlugin],
      toolbar: ['undo', 'redo', '|', 'bold', 'italic', '|', 'MathType', 'ChemType'],
      mathTypeParameters: {
        editorParameters: {
          language: 'en'
        }
      }
    });
    
    // Add initial content to the editor
    editor.setData('<p>Welcome to CKEditor 5 with MathType! Click the MathType button to create equations.</p>');
    
    // Make editor available globally for debugging
    window.editor = editor;
    
  } catch (error) {
    console.error('Error initializing CKEditor 5:', error);
    
    // Display error message to user
    const editorElement = document.querySelector('#ckeditor');
    if (editorElement) {
      editorElement.innerHTML = `
        <div style="padding: 20px; border: 1px solid #ff0000; border-radius: 4px; background-color: #fff5f5; color: #d32f2f;">
          <strong>Error loading CKEditor 5:</strong>
          <p>${error.message}</p>
          <p>Please check your internet connection and try refreshing the page.</p>
        </div>
      `;
    }
  }
}

// Initialize the editor when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeCKEditor);
} else {
  initializeCKEditor();
}
