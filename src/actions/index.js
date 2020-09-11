import {addCardAPI, addDeckAPI, loadDataAPI, removeDeckAPI} from '../utils/api'

export const ADD_CARD = 'ADD_CARD';

function addCard(deck, card) {
    return {
        type: ADD_CARD,
        deck,
        card,
    }
}

export function handleAddCard(deck, card) {
    return (dispatch) => {
        return addCardAPI(deck, card)
            .then(dispatch(addCard(deck, card)))
            .catch((err) => alert("an error occurred while adding the card 😕\n" + err))
    }
}

export const ADD_DECK = 'ADD_DECK';

function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

export function handleAddDeck(deck) {
    return (dispatch) => {
        return addDeckAPI(deck)
            .then(dispatch(addDeck(deck)))
            .catch(() => alert("an error occurred while adding the deck 😕"))
    }
}

export const REMOVE_DECK = 'REMOVE_DECK';

function removeDeck(deck) {
    return {
        type: REMOVE_DECK,
        deck,
    }
}

export function handleRemoveDeck(deck) {
    return (dispatch) => {
        return removeDeckAPI(deck)
            .then(dispatch(removeDeck(deck)))
            .catch(() => alert("an error occurred while removing the deck 😕"))
    }
}

export const INITIALIZE_DATA = 'INITIALIZE_DATA';

function initializeData(decks) {
    return {
        type: INITIALIZE_DATA,
        decks,
    }
}

export default function handleInitializeData() {
    return (dispatch) => {
        return loadDataAPI()
            .then(decks => {
                dispatch(initializeData(decks))
            })
            .catch(() => alert("an error occurred while loading data from database 😕"))
    }
}