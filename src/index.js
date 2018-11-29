import React from 'react';
import ReactDOM from 'react-dom';

import '@Lib'

import { BrowserRouter } from "react-router-dom";

//引入Provider,用于获取store上面的数据
import { Provider } from 'react-redux'
//当然要传入store
import store from './store'

import App from '@/App';
import * as serviceWorker from '@/serviceWorker';

ReactDOM.render(
    <Provider store = { store }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
