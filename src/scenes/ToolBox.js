import React, { Component } from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

class ToolBox extends React.Component {
    static navigationOptions = {
        drawerLabel: 'ToolBox'
    };
    render() {
        return (
            <View ><Text>ToolBox</Text></View>
        );
    }
}




export default ToolBox