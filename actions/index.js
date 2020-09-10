import api from '../utils/api'

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
        api.addCard(deck, card)
            .then(dispatch(addCard(deck, card)))
            .catch(alert("an error occurred while adding the card 😕"))
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
        api.addDeck(deck)
            .then(dispatch(addDeck(deck)))
            .catch(alert("an error occurred while adding the deck 😕"))
    }
}

export const REMOVE_DECK = 'REMOVE_DECK';

function removeDeck(deck) {
    return {
        type: REMOVE_DECK,
        deck,
    }
}

export function handleRemoveDeck(deck){
    return (dispatch) => {
        api.removeDeck(deck)
            .then(dispatch(removeDeck(deck)))
            .catch(alert("an error occurred while removing the deck 😕"))
    }
}