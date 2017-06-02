import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './bootstrap/css/bootstrap.css';
import './bootstrap/css/heroic-features.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
