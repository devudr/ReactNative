import React, { PropTypes } from 'react'
import { TouchableOpacity, Text } from "react-native";
//import style from "./style";

const Buttons = props => {
    const { text, onPress, style } = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

export const LoginButton = props => {
    const { text, onPress, style } = props;
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={.8} >
            <Text style={style}>{text}</Text>
        </TouchableOpacity>
    )
}

export const Button2 = props => {
    const { text, onPress } = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

export default Buttons


