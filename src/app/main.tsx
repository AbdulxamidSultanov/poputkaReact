import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import {store} from "./providers/StoreProvider/store.ts";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router";

createRoot(document.getElementById('root')!).render(
        <BrowserRouter>
            <Provider store={store}>
                    <App/>
            </Provider>
        </BrowserRouter>
)
