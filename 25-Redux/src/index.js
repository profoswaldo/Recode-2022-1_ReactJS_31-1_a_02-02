import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import * as serviceWorker from './serviceWorker';

import App from './components/main/App';
import {Store} from './store/store';

ReactDOM.render(
<Provider store={Store}>
    <App />
</Provider>
, document.getElementById('root'));

serviceWorker.unregister();
