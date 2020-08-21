import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { Order, OrderTracks } from '../../../../models/Order';
import OrderList from '../OrderList';

describe('<OrderList />', () => {
  it('Renders the correct length of tracks', () => {
    const order = new Order(
      "ABCH239HDBR",
      [
        new OrderTracks(
          "barueri / sp",
          "objeto encaminhado",
          new Date().toLocaleString()
        ),
        new OrderTracks(
          "barueri / sp",
          "objeto encaminhado",
          new Date().toLocaleString()
        )
      ]
    )

    const tree = renderer.create(<OrderList order={order} />).toJSON() as ReactTestRendererJSON;

    expect(tree.props.data.length).toBe(2);
  })
})