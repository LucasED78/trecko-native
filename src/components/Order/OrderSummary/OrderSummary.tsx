import React from 'react';
import OrderTitle from '../OrderTitle/OrderTitle';
import OrderDescription from '../OrderDescription/OrderDescription';
import { View } from 'react-native';

export interface OrderSummaryProps {
  title: string;
  date: string;
  description: string;
}

const OrderSummary = (props: OrderSummaryProps) => {
  return (
    <View style={{ marginVertical: 5 }}>
      <OrderTitle title={props.title} />
      <OrderDescription description={props.date} />
      <OrderDescription description={props.description} />
    </View>
  )
}

export default OrderSummary;