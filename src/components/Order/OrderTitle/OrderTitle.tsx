import React from 'react';
import { Text, StyleSheet } from 'react-native';

export interface OrderTitleProps {
  title?: string
}

const OrderTitle = (props: OrderTitleProps) => {
  return (
    <Text style={style.title}>
      { props?.title }
    </Text> 
  )
}

const style = StyleSheet.create({
  title: {
    color: '#00B0FF',
    marginVertical: 0.5,
    fontSize: 24
  }
})

export default OrderTitle;