import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux'
import store from './stores';
import { BrowserRouter as Router } from 'react-router-dom';

const rootEl = document.getElementById('root');
if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(
        <Provider store={store}>
            <Router> {/* 确保 App 被包裹在 Router 中 */}
                <App />
            </Router>
        </Provider>
        /*    <React.StrictMode>
              <App />
            </React.StrictMode>,*/
    );
}
