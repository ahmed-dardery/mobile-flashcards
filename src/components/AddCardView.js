import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import BoxedButton from "./BoxedButton";

class AddCardView extends Component {
    state = {
        question: '',
        answer: '',
    };

    onAddCard = () => {
        alert("assume it was added!");
        //TODO: add card
        this.setState({question: '', answer: ''});
        this.props.navigation.goBack();
    };

    render() {
        const {deckId} = this.props.route.params;
        const {question, answer} = this.state;
        return (
            <View behavior="padding" style={styles.container}>
                <ScrollView>
                    <Text style={styles.inputText}>Question:</Text>
                    <TextInput placeholder="Enter the question here." maxLength={150} style={styles.input}
                               value={question}
                               onChangeText={(question) => this.setState({question})}/>
                    <Text style={styles.inputText}>Answer:</Text>
                    <TextInput placeholder="Enter the answer here." multiline maxLength={500}
                               style={[styles.input, {textAlignVertical: 'top'}]} value={answer}
                               onChangeText={(answer) => this.setState({answer})}/>
                    <View style={{marginVertical: 30}}/>
                    <BoxedButton text="Add Card" disabled={question.trim() === '' || answer.trim() === ''}
                                 onPress={() => this.onAddCard()}/>
                </ScrollView>
            </View>
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
export default AddCardView;