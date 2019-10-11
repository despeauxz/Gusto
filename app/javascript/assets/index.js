import { AppContainer } from 'react-hot-loader';
import React from 'react';
import  { Provider } from 'react-redux';
import App from './components/App';
import store from './store/configureStore';

const Root = () => {
    return (
        <AppContainer>
            <Provider store={store}>
                <App />
            </Provider>
        </AppContainer>
    );
};

export default Root;
