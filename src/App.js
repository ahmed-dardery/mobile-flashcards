import {StatusBar} from 'expo-status-bar';
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import DeckList from "./components/DeckList";
import handleInitializeData from "./actions";
import Constants from 'expo-constants';
import {connect} from "react-redux";
import DeckView from "./components/DeckView";
import {appMainColor, appSecondaryColor} from './utils/colors'
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddCardView from "./components/AddCardView";
import AddDeckView from "./components/AddDeckView";
import {FontAwesome} from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabbedDeckList = () => {
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === 'DeckList') {
                            iconName = 'th-list'
                        } else if (route.name === 'AddDeckView') {
                            iconName = 'plus-square'
                        }

                        // You can return any component that you like here!
                        return <FontAwesome name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                activeTintColor: appMainColor,
                inactiveTintColor: 'gray',
            }}>
                <Tab.Screen name="DeckList" component={DeckList}/>
                <Tab.Screen name="AddDeckView" component={AddDeckView}/>
            </Tab.Navigator>
    );
};

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitializeData());
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={appMainColor} style="auto"/>
                <Stack.Navigator initialRouteName="TabbedDeckList" screenOptions={
                    {
                        headerTintColor: appSecondaryColor,
                        headerStyle: {
                            backgroundColor: appMainColor,
                        }
                    }
                }>
                    <Stack.Screen name="TabbedDeckList" component={TabbedDeckList} options={{title: "Deck List"}}/>
                    <Stack.Screen name="DeckView" component={DeckView} options={
                        ({route}) => ({title: route.params.title})
                    }/>
                    <Stack.Screen name="AddCardView" component={AddCardView} options={{title: "Add New Card"}}/>
                </Stack.Navigator>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});

export default connect()(App);
