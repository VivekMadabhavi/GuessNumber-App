import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Title from '../components/UI/Title'
import PrimaryButton from '../components/UI/PrimaryButton'

const Over = ({roundsNumber,userNumber,onStartNewGame}) => {
  return (
    <View style={{alignItems:'center',gap:40,justifyContent:'center',padding:100}}>
      <Title>Game Over !</Title>
      <Text>your phone needed <Text>{roundsNumber} </Text>rounds to guess the number <Text>{userNumber}</Text></Text>
      <PrimaryButton onPresses={onStartNewGame}>start new game</PrimaryButton>
    </View>
  )
}

export default Over

const styles = StyleSheet.create({})