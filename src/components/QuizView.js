import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {connect} from "react-redux";
import BoxedButton from "./BoxedButton";

class QuizView extends Component {
    state = {
        currentQuestion: 0,
        correct: 0,
        showAnswer: false,
        showResults: false,
    };

    advance = (right) => {
        const {currentQuestion} = this.state;
        const totalQuestions = this.props.deck.cards.length;

        if (currentQuestion + 1 === totalQuestions) {
            this.setState({showResults: true});
        } else {
            this.setState(({correct, currentQuestion}) => (
                {
                    correct: correct + (right ? 1 : 0),
                    currentQuestion: currentQuestion + 1,
                    showAnswer: false,
                    showResults: false,
                }
            ));
        }
    };

    resetState = () => {
        this.setState({
            currentQuestion: 0,
            correct: 0,
            showAnswer: false,
            showResults: false,
        });
    };
    CompletedView = () => {
        const {correct} = this.state;
        const {deck} = this.props;
        const totalQuestions = deck.cards.length;

        return (
            <View style={styles.quizView}>
                <View>
                    <Text
                        style={styles.deckQuestion}>{`You have answered ${correct} questions correctly out of ${totalQuestions}! Huzzaah!`}</Text>
                </View>

                <View style={{margin: 30}}/>

                <BoxedButton style={styles.btnSpacing} text="Retry" onPress={() => this.resetState()}/>
                <BoxedButton style={styles.btnSpacing} text="Go to Deck"
                             onPress={() => this.props.navigation.goBack()}/>
                <BoxedButton style={styles.btnSpacing} text="Try another Deck"
                             onPress={() => this.props.navigation.navigate('DeckList')}/>
            </View>
        );
    };
    OngoingView = () => {
        const {currentQuestion, showAnswer} = this.state;
        const {deck} = this.props;
        const totalQuestions = deck.cards.length;
        return (<ScrollView style={styles.quizView} contentContainerStyle={{alignItems: 'center'}}>
            <View>
                <Text style={styles.deckQuestion}>{deck.cards[currentQuestion].question}</Text>
            </View>

            <View style={{margin: 30}}/>
            {!showAnswer && <BoxedButton style={styles.btnSpacing} text="Show Answer"
                                         onPress={() => this.setState({showAnswer: true})}/>}

            {
                showAnswer &&
                <View>
                    <Text style={styles.deckAnswer}>{deck.cards[currentQuestion].answer}</Text>
                    <BoxedButton style={styles.btnSpacing} color="green" text="Correct"
                                 onPress={() => this.advance(true)}/>
                    <BoxedButton style={styles.btnSpacing} color="red" text="Incorrect"
                                 onPress={() => this.advance(false)}/>
                </View>
            }

            <View style={{alignSelf: 'flex-end'}}>
                <Text style={styles.deckCount}>{`Question ${currentQuestion + 1}/${totalQuestions}`}</Text>
            </View>
        </ScrollView>);
    };

    render() {
        const {CompletedView, OngoingView} = this;
        if (this.state.showResults) return <CompletedView/>;
        else return <OngoingView/>;
    }
}


const styles = StyleSheet.create({
    quizView: {
        flexGrow: 1,
        marginHorizontal: 5,
        padding: 5
    },
    deckQuestion: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 30,

    },
    deckAnswer: {
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 20,
    },
    deckCount: {
        textAlign: 'center',
        fontSize: 15,
        color: '#666'
    },
    btnSpacing: {
        margin: 10,
    }
});

function mapStateToProps({decks}, {route}) {
    const {deckId} = route.params;
    return {deckId, deck: decks[deckId]};
}

export default connect(mapStateToProps)(QuizView);