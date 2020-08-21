import React from 'react';
import { Text, StyleSheet } from 'react-native';

export interface OrderDescription {
  description: string
}

const OrderDescription = (props: OrderDescription) => {
  return <Text style={style.description}>
    { props.description }
  </Text>
}

const style = StyleSheet.create({
  description: {
    color: '#707070',
    fontSize: 16,
    marginVertical: 0.5
  }
})

export default OrderDescription;