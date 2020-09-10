import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import {appMainColor} from '../utils/colors'

export default function TextButton({text, style = {}, ...props}) {
    return (
        <TouchableOpacity {...props}>
            <Text style={[styles.reset, style]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    reset: {
        textAlign: 'center',
        color: appMainColor,
        fontSize: 17
    }
});