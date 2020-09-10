import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View} from "react-native";
import {connect} from "react-redux";
import TextButton from "./TextButton";
import AddCardView from './AddCardView';
import BoxedButton from "./BoxedButton";

class DeckView extends Component {
    onRemoveDeck = () => {
        const {deck} = this.props;

        const onPress = () => {
            alert("to be implemented");
            //TODO: erase current deck
        };

        if(deck.cards.length === 0){
            onPress();
        }else{
            Alert.alert(
                "Delete Confirmation",
                `Are you sure you want to delete this deck along with its ${deck.cards.length} cards?`,
                [
                    {
                        text: "No",
                        style: "cancel"
                    },
                    {
                        text: "Yes",
                        onPress
                    }
                ]
            );
        }
    };

    render() {
        const {deck, navigation, deckId} = this.props;
        if (!deck) return null;
        return (
            <View style={styles.deckView}>
                <View style={styles.deckViewChild}>
                    <Text style={styles.deckTitle}>{deck.title}</Text>
                    <Text style={styles.deckCount}>{deck.cards.length} cards</Text>
                </View>
                <View style={{margin: 40}}/>

                <BoxedButton style={styles.deckViewChild} text="Add Card"
                              onPress={() => navigation.navigate('AddCardView', {deckId})}/>
                <BoxedButton disabled={!deck.cards.length} style={styles.deckViewChild} text="Start Quiz!"
                              onPress={() => alert("to be implement")/*TODO: navigation.navigate(QuizView, {deckId: deckId})*/}/>
                <View style={{margin: 10}}/>

                <TextButton style={styles.deckViewChild} text="Remove Deck" onPress={() => this.onRemoveDeck()}/>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    deckViewChild: {
        margin: 5,
    },
    deckView: {
        flexGrow: 1,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    deckTitle: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    deckCount: {
        textAlign: 'center',
        fontSize: 30,
        color: '#666'
    },
});

function mapStateToProps({decks}, {route}) {
    const {deckId} = route.params;
    return {deckId, deck: decks[deckId]};
}

export default connect(mapStateToProps)(DeckView);