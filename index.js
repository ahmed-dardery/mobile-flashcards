import {registerRootComponent} from 'expo';
import {NavigationContainer} from '@react-navigation/native';
import App from './src/App';
import {Provider} from "react-redux";
import React from "react";
import {createStore} from "redux";
import reducer from "./src/reducers";
import middleware from "./src/middleware";

const store = createStore(reducer, middleware);

function MyApp() {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <App/>
            </Provider>
        </NavigationContainer>
    );
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(MyApp);
