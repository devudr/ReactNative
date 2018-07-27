
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
    Platform,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import DrawerMenu from './DrawerMenu';
import Buttons, { Button1, Button2 } from "../components/Buttons";
import MyProfile from './MyProfile';
import { SYMBOL } from "../Constants";

var DrawerItemIndex;

// import ImageGrid from './ImageGrid';
click = () => {
    alert(SYMBOL)
}

class Index extends Component<{}> {
    render() {

        return (
            <MainStack screenProps={DrawerItemIndex} />
        );
    }
}


const MainStack = StackNavigator({
    MyProfile: {
        screen: MyProfile,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    SignUp: {
        screen: SignUp,
        // navigationOptions: {
        //     header: 
        // }
    },
    ForgotPassword: {
        screen: ForgotPassword,

    },
    DrawerMenu: {
        screen: DrawerMenu,
        navigationOptions: ({ navigation, screenProps }) => {
            console.log(screenProps.nav)
            DrawerItemIndex = navigation.state.routes[0].index;
            //return navigation.state.routes[0].index;
        }
        // navigationOptions: ({ navigation, screenProps }) => {
        //     //  const { params } = screenProps
        //     return {
        //         //header: (`${screenProps.title}`) == '' ? null : { titleStyle: { color: '#FFFFFF' } }
        //         header: navigation => ({
        //             titleStyle: {
        //                 color: '#FFFFFF'
        //             },
        //             tintColor: '#0087B7'
        //         })
        //     }
        // }

    },
});

export default Index