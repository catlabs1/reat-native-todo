import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ListItem({ el, deleteHandler }) {
    return (
        <TouchableOpacity onPress={() => deleteHandler(el.key)}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 16,
        textAlign: "center",
        borderRadius: 6,
        backgroundColor: "#fafafa",
        borderWidth: 1,
        marginTop: 20,
        width: "40%",
        // marginLeft: "20%",
        margin: "auto",
    },
});