import {ADD_CARD, ADD_DECK, REMOVE_DECK} from "../actions";
import {combineReducers} from "redux";

function decks(state = {}, action) {
    switch (action.type) {
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
        case ADD_DECK:{
            const deck = action.deck;
            return{
                ...state,
                [deck]:{
                    deckTitle: deck,
                    cards: []
                }
            }
        }
        case REMOVE_DECK:{
            const deck = action.deck;
            let newState = {...state};
            newState[deck] = undefined;
            delete newState[deck];
            return newState;
        }
        default:
            return state;
    }
}

export default combineReducers({decks});