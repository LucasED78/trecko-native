import React from 'react';
import { Order } from "../../models/Order";
import { FlatList } from "react-native";
import OrderSummary from "./OrderSummary";

export interface OrderListProps {
  order: Order
}

const OrderList = (props: OrderListProps) => {
  return (
    <FlatList
    data={props.order.tracks}
    keyExtractor={_ => rand().toString()}
    renderItem={({ item }) => <OrderSummary
      title={item.status}
      date={item.trackedAt}
      description={item.locale} />}
    />
  )
}

const rand = () => Math.floor(Math.random() * new Date().getTime());

export default OrderList;