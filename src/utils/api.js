import {AsyncStorage} from "react-native";

const deckStoreKey = "@mobile-flash-cards-md:decks";

const sampleData = {
    React: {
        title: 'React',
        cards: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        cards: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    },
    SupposedlyEmpty: {
        title: 'SupposedlyEmpty',
        cards: []
    },
    Small1: {
        title: 'Small1',
        cards: []
    },
    Small2: {
        title: 'Small2',
        cards: []
    },
    Small3: {
        title: 'Small3',
        cards: []
    },
    Small4: {
        title: 'Small4',
        cards: []
    },
    Small5: {
        title: 'Small5',
        cards: []
    }
};

export function loadDataAPI() {
    //return new Promise((ok) => ok(sampleData));
    return AsyncStorage.getItem(deckStoreKey).then(res => JSON.parse(res) || {})
}

export function addCardAPI(deck, card) {
    return AsyncStorage.getItem(deckStoreKey)
        .then((res) => {
            const data = JSON.parse(res) || {};
            data[deck] = {...data[deck], cards: [...data[deck].cards, card]};
            return AsyncStorage.setItem(deckStoreKey, JSON.stringify(data))
        });
}

export function addDeckAPI(deck) {
    const newDeck = {
        title: deck,
        cards: [],
    };
    return AsyncStorage.mergeItem(deckStoreKey, JSON.stringify({deck: newDeck}));
}

export function removeDeckAPI(deck) {
    return AsyncStorage.getItem(deckStoreKey)
        .then((res) => {
            const data = JSON.parse(res) || {};
            data[deck] = undefined;
            delete data[deck];
            return AsyncStorage.setItem(deckStoreKey, JSON.stringify(data))
        })
}