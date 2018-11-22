import React from 'react';
import ReactDOM from 'react-dom';

import '@Lib'

import App from '@/App';
import * as serviceWorker from '@/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
