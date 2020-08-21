import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import OrderTitle from '../OrderTitle';

describe('<OrderTitle />', () => {
  it('Renders the correct title', () => {
    const tree = renderer.create(<OrderTitle title="This is the order title" />).toJSON() as ReactTestRendererJSON;

    expect(tree.children).toContain("This is the order title");
  });
});