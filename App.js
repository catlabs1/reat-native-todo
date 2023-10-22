import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Header from "./components/header";
import ListItem from "./components/list";
import Form from "./components/form";

export default function App() {
    const [listOfItems, setListOfItems] = useState([
        { text: "Приготовить овсянку", key: "1" },
        { text: "Утренняя зарядка", key: "2" },
        { text: "Купить увлажнитель", key: "3" },
    ]);

    const addHandler = (text) => {
      setListOfItems((list) => {
        return [
          { text: text, key: Math.random().toString(36).substring(7) },
          ...list,
        ];
      });
    };

    const deleteHandler = (key) => {
      setListOfItems((list) => {
        return list.filter((listOfItems) => listOfItems.key != key);
      });
    };

    return (
        <View style={styles.header}>
            <Header />
            <Form style={styles.form} addHandler={addHandler}/>
            <Text style={styles.textTasks}>Ваши задачи</Text>
            <View>
                <FlatList
                    data={listOfItems}
                    renderItem={({ item }) => <ListItem el={item} deleteHandler={deleteHandler}/>}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
    },
    form: {
      display: "block",
      width: "320px",
      margin: "auto",
    },
    textTasks: {
      fontSize: "20px",
      fontWeight: "600",
      marginTop: "20px",
      marginBottom: "0px",
      marginLeft: "auto",
      marginRight: "auto",
    }
});




// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
