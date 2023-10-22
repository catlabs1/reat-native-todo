import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        padding: 20,
        textAlign: "center",
        backgroundColor: "#4169e1",
    },
    text: {
        fontWeight: "600",
        margin: "auto",
        color: "#ffffff",
        fontSize: "16px"
    },
});