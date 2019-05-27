import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App props="bienvenus"/>, document.getElementById('root'));


serviceWorker.unregister();
