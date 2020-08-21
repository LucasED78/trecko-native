import React from 'react';
import { View, StyleSheet, StyleProp, TextStyle } from "react-native";

export interface VerticalContainerProps {
  style?: StyleProp<TextStyle>
  children: JSX.Element[] | JSX.Element;
}

const VerticalContainer = (props: VerticalContainerProps) => {
  return (
    <View style={props?.style ?? containerStyles.container}>
      { props.children }
    </View>
  );
}

const containerStyles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: '10%'
  }
})

export default VerticalContainer;