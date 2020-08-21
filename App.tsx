import React, { useState } from 'react';
import { SafeAreaView, ToastAndroid, ActivityIndicator } from 'react-native';
import UnderlineInput from './src/components/Input/UnderlineInput';
import OrderServiceImpl from './src/services/order/OrderServiceImpl';
import { Order, OrderTracks } from './src/models/Order';
import OrderList from './src/components/Order/OrderList/OrderList';
import IconButton from './src/components/Button/IconButton';
import VerticalContainer from './src/components/VerticalContainer/VerticalContainer';

export default function App() {
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState<string>("");

  const search = async () => {
    if (!code) {
      return ToastAndroid.show("O código deve ser preenchido", ToastAndroid.SHORT);
    }

    try {
      setLoading(true);
      setOrder(null);

      const response = await new OrderServiceImpl()
        .get(code);

      const order = new Order(
        response.code,
        response.tracks.map((res: any) => new OrderTracks(
          res.locale,
          res.status,
          res.trackedAt
        ))
      );

      setOrder(order);

      setLoading(false);
    } catch(_) {
      ToastAndroid.show("Ocorreu um erro ao tentar rastrear o código! Tente novamente", ToastAndroid.SHORT);
      setLoading(false);
    }
  }

  const clear = () => {
    setCode("");
    setOrder(null);
  }

  return (
    <SafeAreaView>
      <VerticalContainer>
        <VerticalContainer 
          style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
          <UnderlineInput
            onSuffixPressed={() => clear()}
            placeholder="Digite o código de rastreio"
            value={code}
            onChange={e => setCode(e.nativeEvent.text)} />
          <IconButton icon="ios-search" onPress={search} />
        </VerticalContainer>
        <>
          {loading && <ActivityIndicator size="large" color="#00B0FF"/>}
          {order?.code && <OrderList order={order}/> }
        </>
      </VerticalContainer>
    </SafeAreaView>
  );
}