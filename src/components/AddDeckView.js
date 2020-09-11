import React, {Component} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, View} from "react-native";
import BoxedButton from "./BoxedButton";
import {connect} from "react-redux";
import {handleAddDeck} from "../actions";

class AddDeckView extends Component {
    state = {
        title: '',
    };

    onAddDeck = () => {
        this.props.dispatch(handleAddDeck(this.state.title));
        this.setState({title: ''});
        this.props.navigation.navigate("DeckList");
    };

    render() {
        const {title} = this.state;
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <Text style={styles.inputText}>Deck Title:</Text>
                <TextInput maxLength={20} style={styles.input} value={title}
                           onChangeText={(title) => this.setState({title})}/>
                <View style={{marginVertical: 30}}/>
                <BoxedButton text="Add Deck" disabled={title === ''}
                             onPress={() => this.onAddDeck()}/>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 50,
        marginVertical: 0,
    },
    input: {
        alignSelf: 'stretch',
        padding: 8,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#757575',
        flex: 0,
    },
    inputText: {
        marginVertical: 30,
        fontSize: 20,
    }
});
export default connect()(AddDeckView);