import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from "react-native"

export interface RoundedButtonProps {
  text?: string,
  onPress: ((event: GestureResponderEvent) => void)
}

const RoundedButton = (props: RoundedButtonProps) => {
  return (
    <TouchableOpacity style={style.button} onPress={props.onPress}>
      <Text style={style.text}>
        { props?.text?.toUpperCase() }
      </Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  button: {
    borderRadius: 1000,
    backgroundColor: '#00B0FF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 150
  },
  text: {
    color: 'white',
    letterSpacing: 1
  }
})

export default RoundedButton;