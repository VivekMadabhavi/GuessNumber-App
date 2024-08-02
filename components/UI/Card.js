import { StyleSheet, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return(
  <View style={styles.card}>{children}</View>
);
};

export default Card;

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 24,
        padding: 15,
        marginTop: 36,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        justifyContent: "center",
        alignItems: "center",
      },
});
