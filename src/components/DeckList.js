import React, {Component} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {connect} from "react-redux";
import DeckBox from "./DeckBox";

class DeckList extends Component {
    render() {
        const {deckIds, decks} = this.props;
        return (
            <FlatList contentContainerStyle={styles.deckList}
                      data={deckIds}
                      extraData={decks}
                      keyExtractor={(item) => item}
                      renderItem={({item}) => <DeckBox deckId={item}/>}
            />
        )
    }
}

const styles = StyleSheet.create({
    deckList: {
        flexGrow: 1,
        marginHorizontal: 25
    }
});

function mapStateToProps({decks}) {
    return {
        deckIds: Object.keys(decks),
        decks
    }
}

export default connect(mapStateToProps)(DeckList);