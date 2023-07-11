import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import React, { useState } from "react";

const AddNote = () => {
  const [enteredText, setEnteredText] = useState("");
  const handleChange = (val) => {
    setEnteredText(val);
  };
  const handleClick = () => {
    console.log(enteredText);
  };
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Add Note</Text>
        <View>
          <TextInput onChangeText={handleChange} style={styles.input} />
        </View>
        <Button onPress={handleClick} title="Add" />
      </View>
    </View>
  );
};

export default AddNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    backgroundColor: "#f5f5f5",
    padding: 25,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    marginVertical: 20,
    width: "100%",
    borderBottomWidth: 2,
    fontSize: 16,
    padding: 10,
  },
});
