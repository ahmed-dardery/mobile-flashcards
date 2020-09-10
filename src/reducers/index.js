import {ADD_CARD, ADD_DECK, INITIALIZE_DATA, REMOVE_DECK} from "../actions";
import {combineReducers} from "redux";

function decks(state = {}, action) {
    switch (action.type) {
        case INITIALIZE_DATA: {
            return action.decks;
        }
        case ADD_CARD: {
            const {card, deck} = action;
            return {
                ...state,
                [deck]: {
                    ...state[deck],
                    cards: [...state[deck].cards, card]
                }
            };
        }
        case ADD_DECK: {
            const deck = action.deck;
            return {
                ...state,
                [deck]: {
                    deckTitle: deck,
                    cards: []
                }
            }
        }
        case REMOVE_DECK: {
            const deck = action.deck;
            const newState = {...state};
            newState[deck] = undefined;
            delete newState[deck];
            return newState;
        }
        default:
            return state;
    }
}

export default combineReducers({decks});