import React from 'react';
import renderer, { ReactTestRendererJSON, ReactTestRendererNode } from 'react-test-renderer';
import OrderSummary from '../OrderSummary';

describe('<OrderSummary />', () => {
  it('Renders the correct number of children', () => {
    const tree = renderer.create(<OrderSummary title="The title" date="01/01/2015" description="My description" />)
      .toJSON() as ReactTestRendererJSON
      

    expect(tree.children?.length).toBe(3)
  })

  it("It renders the correct props", () => {
    const tree = renderer.create(<OrderSummary title="The title" date="01/01/2015" description="My description" />)
      .toJSON() as ReactTestRendererJSON;

    const [title, date, description] = tree.children as ReactTestRendererJSON[];

    console.log(title);
    

    expect(title.children).toContain("The title")
    expect(date.children).toContain("01/01/2015")
    expect(description.children).toContain("My description")
  })
});