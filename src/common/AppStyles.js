import { StyleSheet } from "react-native";
import Colors from "./Colors";

export const Styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingEnd: 20,
        paddingStart: 20,
        backgroundColor: Colors.AppBackground
    },
    screenHeading1: {
        color: Colors.AppText,
        fontSize: 20
    },
    normalText: {
        color: Colors.AppText
    },
    inputText: {
        paddingEnd: 10,
        paddingStart: 10,
        borderWidth: 1,
        borderRadius: 7,
        color: Colors.AppText,
        borderColor: 'white',
    },
    commonButton: {
        padding: 14,
        marginTop: 20,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.ButtonBg
    }
})