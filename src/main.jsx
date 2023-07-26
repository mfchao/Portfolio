
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// import './src/fonts/SFCompact/SF-Compact-Text-Bold.ttf';
// import './src/fonts/SFCompact/SF-Compact-Text-BoldItalic.ttf';
import './fonts/SFCompact/SF-Compact-Text-Light.ttf';
// import './src/fonts/SFCompact/SF-Compact-Text-LightItalic.ttf';
import './fonts/SFCompact/SF-Compact-Text-Medium.ttf';
// import './src/fonts/SFCompact/SF-Compact-Text-MediumItalic.ttf';
// import './src/fonts/SFCompact/SF-Compact-Text-Regular.ttf';
import './fonts/SFCompact/SF-Compact-Text-Semibold.ttf';
// import './src/fonts/SFCompact/SF-Compact-Text-SemiboldItalic.ttf';
import './fonts/SFCompact/SF-Compact-Text-Thin.ttf';

// import './src/fonts/SFCompact/SF-Compact-Text-ThinItalic.ttf';
// import './src/fonts/SFCompact/SF-Compact-Text-Ultralight.ttf';
// import './src/fonts/SFCompact/SF-Compact-Text-UltralightItalic.ttf';



import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'

studio.extend(extension);
studio.initialize();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={null}>
    <App />
    </Suspense>
  </React.StrictMode>,
)
