import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {appMainColor, appSecondaryColor} from "../utils/colors";

export default function BoxedButton({text, style, disabled, ...props}) {
    return (
        <TouchableOpacity disabled={disabled}
                          style={[styles.mdSubmitBtn, style, disabled && {opacity: 0.4}]} {...props}>
            <Text style={styles.submitBtnText}>{text}</Text>
        </TouchableOpacity>);
};

const styles = StyleSheet.create({
    submitBtnText: {
        color: appSecondaryColor,
        fontSize: 20,
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    mdSubmitBtn: {
        backgroundColor: appMainColor,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
});