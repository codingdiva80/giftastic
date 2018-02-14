import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Homepage from './components/Homepage';

ReactDOM.render(<Homepage />, document.getElementById('root'));
registerServiceWorker();
