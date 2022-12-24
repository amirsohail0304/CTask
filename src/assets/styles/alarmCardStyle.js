import { StyleSheet } from "react-native";

const alarmCardStyle = StyleSheet.create({

    titleText: {
        color: "black",
        fontSize: 18,
        fontWeight: '700',
        opacity: 0.8
    },
    descrpText: {
        color: "black",
        fontSize: 13,
        fontWeight: '400',
        opacity: 0.4,
        marginTop: 5
    },
    textContainer: {
        marginTop: 10
    },
    columnMain: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 12,
        paddingVertical: 12,
        backgroundColor: "gray",
        elevation: 3,
    },
    alarmRowMain: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "white",
        elevation: 3
    },

    columnText: {
        fontSize: 12,
        fontWeight: '500',
        opacity: 0.7,
    },
    columnTextColor: {
        color: "white",
    },
    rowTextColor: {
        color: "black",
    },
    alarmRowColumn: {
        borderRadius: 5,
        backgroundColor: "red",
        overflow: "hidden",
        marginTop: 10
    },
    alarmStatus: {
        height: 10,
        width: 10,
        borderRadius: 10,
        backgroundColor: "green",
        alignSelf: "center"
    }
});

export default alarmCardStyle;
