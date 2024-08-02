import { StyleSheet, Text, TextInput, View, Alert } from "react-native";
import React from "react";
import { useState } from "react";
import Colors from "../constants/colors";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
//import InstructionText from "../components/UI/instructionText";

const Start = ({onPickNumber}) => {
  const [enterNumber, setenterNumber] = useState("");
  function numberInputHandler(enterText) {
    setenterNumber(enterText);
  }
  function resetInputHandler() {
    setenterNumber('');
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enterNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "number should be between 1 to 99",[{text:'okay',style:'destructive',onPress:resetInputHandler}]);
      return;
    }
    onPickNumber(chosenNumber);
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
    <Card>
      <Text>Enter a Number</Text>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enterNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.bottonContainer}>
          <PrimaryButton onPresses={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.bottonContainer}>
          <PrimaryButton onPresses={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </Card></View>
  );
};

export default Start;

const styles = StyleSheet.create({
  rootContainer: {
    flex:1,
    marginTop:100,
    alignItems:'center',

  },
  
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  bottonContainer: {
    flex: 1,
  },
  
    
  
});
