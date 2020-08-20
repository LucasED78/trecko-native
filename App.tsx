import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import UnderlineInput from './src/components/Input/UnderlineInput';
import RoundedButton from './src/components/Button/RoundedButton';
import OrderTitle from './src/components/Order/OrderTitle';
import OrderDescription from './src/components/Order/OrderDescription';

export default function App() {
  return (
    <SafeAreaView>
      <UnderlineInput placeholder="Digite o código de rastreio" />
      <RoundedButton text="rastrear" onPress={() => {}} />
      <OrderTitle title="objeto entregue ao destinatário" />
      <OrderDescription description="12/05/2020 ás 10:00:00" />
      <OrderDescription description="12/05/2020 ás 10:00:00" />
    </SafeAreaView>
  );
}