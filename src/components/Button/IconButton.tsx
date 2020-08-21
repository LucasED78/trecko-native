import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, TouchableOpacity, GestureResponderEvent } from 'react-native';

export interface IconButton {
  icon: string;
  onPress: ((event: GestureResponderEvent) => void);
}

const IconButton = (props: IconButton) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container} >
        <Ionicons name={props.icon} size={30} color="white" />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#00B0FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    borderRadius: 10
  }
})

export default IconButton;