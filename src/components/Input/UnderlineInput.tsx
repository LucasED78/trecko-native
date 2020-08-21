import React, { useState } from 'react';
import { TextInput, StyleSheet, StyleProp, TextStyle, NativeSyntheticEvent, TextInputChangeEventData, View, GestureResponderEvent, TouchableOpacity } from "react-native"
import { Ionicons } from '@expo/vector-icons';

export interface InputProps {
  placeholder?: string;
  value?: string;
  style?: StyleProp<TextStyle>
  onChange: ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void)
  onSuffixPressed?: ((e: GestureResponderEvent) => void)
  suffixIcon?: string
}

const UnderlineInput = (props: InputProps) => {
  const [focus, setFocus] = useState(false);

  const focusedBorderColor = focus ? '#00B0FF' : '#e1edf2';

  return (
    <View style={inputStyle.container}>
        <TextInput
        onChange={props.onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{...inputStyle.input, borderColor: focusedBorderColor}}
        value={props.value}
        placeholder={props.placeholder?.toUpperCase()}
        autoCapitalize = 'characters' />

      <TouchableOpacity style={inputStyle.suffixIcon} onPress={props.onSuffixPressed}>
        <Ionicons
          name={props?.suffixIcon ?? "md-close-circle-outline"} 
          size={24} 
          color="black" />
      </TouchableOpacity>
    </View>
  );
}

const inputStyle = StyleSheet.create({
  input: {
    flex: 1,
    marginRight: 5,
    borderColor: '#e1edf2',
    borderBottomWidth: 1,
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: '300',
    color: 'black'
  },
  container: {
    position: 'relative',
    display: 'flex',
    flex: 1,
    justifyContent: 'center'
  },
  suffixIcon: {
    position: 'absolute',
    right: 20
  }
})

export default UnderlineInput;