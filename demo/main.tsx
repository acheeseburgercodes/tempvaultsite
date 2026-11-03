import './mock-api';
import React from 'react';
import {createRoot} from 'react-dom/client';
import '@fontsource-variable/manrope';
import App from './renderer/src/App';
import './renderer/src/styles.css';
import './renderer/src/theme-polish.css';
import './browser.css';
createRoot(document.getElementById('root')!).render(<App/>);
