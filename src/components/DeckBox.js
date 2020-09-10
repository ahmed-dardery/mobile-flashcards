import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {connect} from "react-redux";

class DeckBox extends Component {
    render() {
        const {deck} = this.props;
        return (
            <View style={styles.deckBox}>
                <Text style={styles.deckTitle}>{deck.title}</Text>
                <Text style={styles.deckCount}>{deck.cards.length} cards</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deckBox: {
        flex: 1,
        borderWidth: 2,
        borderColor: '#bbb',
        borderRadius: 5,

        elevation: 1,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowRadius: 3,

        padding: 10,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deckTitle: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    deckCount: {
        fontSize: 20,
        color: '#666'
    }
});

function mapStateToProps({decks}, {deckId}) {
    return {deck: decks[deckId]};
}

export default connect(mapStateToProps)(DeckBox);