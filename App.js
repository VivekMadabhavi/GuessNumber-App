import { StyleSheet, Text, View, ImageBackground ,SafeAreaView} from "react-native";
import React from "react";
import Start from "./screens/Start";
import { useState } from "react";
import Game  from "./screens/Game";
import Colors from "./constants/colors";
import Over from "./screens/Over";
import { LinearGradient } from "expo-linear-gradient";

const App = () => {
  const [userNumber,setUserNumber] = useState();
  const [guessRounds,setGuessRounds] = useState(0);
  const [gameIsOver,setGameIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler () {
    setUserNumber(null);
    setGameIsOver(0);
    
  }


  let screen =<Start onPickNumber={pickedNumberHandler}/>;

  if (userNumber) {
    screen = <Game userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if (gameIsOver && userNumber) {
    screen = <Over userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>
  }

  
  
  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/dice.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroudImage}
      >
        <SafeAreaView style={styles.rootScreen}>
        {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroudImage:{
    opacity:0.15
  }
});
