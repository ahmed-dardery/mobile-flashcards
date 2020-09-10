import {AsyncStorage} from "react-native";

const deckStoreKey = "@mobile-flash-cards-md:decks";

function loadData() {
    return AsyncStorage.getItem(deckStoreKey)
        .then(res => JSON.parse(res));
}

function addCard(deck, card) {
    AsyncStorage.getItem(deckStoreKey)
        .then((res) => {
            const data = JSON.parse(res);
            data[deck] = {...data[deck], cards: [...data[deck].cards, card]};
            return AsyncStorage.setItem(deckStoreKey, JSON.stringify(data))
        })
}

function addDeck(deck) {
    const newDeck = {
        deckTitle: deck,
        cards: [],
    };
    return AsyncStorage.mergeItem(deckStoreKey, JSON.stringify({deck: newDeck}));
}

function removeDeck(deck) {
    return AsyncStorage.getItem(deckStoreKey)
        .then((res) => {
            const data = JSON.parse(res);
            data[deck] = undefined;
            delete data[deck];
            return AsyncStorage.setItem(deckStoreKey, JSON.stringify(data))
        })
}

export default {
    loadData,
    addCard,
    addDeck,
    removeDeck
}