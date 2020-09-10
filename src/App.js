import {StatusBar} from 'expo-status-bar';
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import DeckList from "./components/DeckList";
import handleInitializeData from "./actions";
import Constants from 'expo-constants';
import {connect} from "react-redux";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitializeData());
    }

    render() {
        return (
                <View style={styles.container}>
                    <StatusBar backgroundColor="#fff" style="auto"/>
                    <DeckList/>

                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});

export default connect()(App);
