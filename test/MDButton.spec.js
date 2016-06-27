import expect from 'expect';
import expectJSX from 'expect-jsx';

import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import MDButton from 'src/MDButton';

expect.extend(expectJSX);

describe('MDButton', () => {

  it('should render a button with text as children', () => {
    const renderer = createRenderer();
    renderer.render(
      <MDButton>
        text
      </MDButton>
    );
    const actualElement = renderer.getRenderOutput();
    expect(actualElement.type).toEqual('button');
    expect(actualElement.props.children).toEqual('text')
  });

  it('should fire action function if specified', () => {
    let clicked = false;
    const onClick = () => { clicked = true };
    const renderer = createRenderer();
    renderer.render(
      <MDButton
        onClick={onClick}
      />
    );
    const actualElement = renderer.getRenderOutput();
    actualElement.props.onClick();
    expect(clicked).toEqual(true);
  });

  it('should render a link button if href is specified', () => {
    const renderer = createRenderer();
    renderer.render(
      <MDButton
        href="#"
      />
    );
    const actualElement = renderer.getRenderOutput();
    expect(actualElement.type).toEqual('a');
  })

});
