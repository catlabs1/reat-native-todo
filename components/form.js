import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View, Text } from "react-native";

export default function Form({ addHandler }) {
    const [text, setValue] = useState("");

    const onChange = (text) => {
        setValue(text);
    };

    return (
        <View style={styles.formview}>
            <TextInput
                style={styles.input}
                placeholder="Напишите сюда задачу"
                onChangeText={onChange}
            />
            <Button
            style={styles.addbutton}
                onPress={() => addHandler(text)}
                title="Добавить задачу"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    formview: {
        width: "320px",
        margin: "auto",
        marginTop: "16px",
        marginBottom: "0",
    },

    input: {
        padding: 10,
        border: "1px solid #c4c4c4",
        margin: "auto",
        marginBottom: "8px",
        marginTop: "8px",
        width: "320px",
        borderRadius: 6,
    },
    addbutton: {
        // width: "320px",
        borderRadius: 10,
        textAlign: "center",
    }
});
