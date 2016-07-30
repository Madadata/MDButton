/* eslint-disable no-undef */
import expect from 'expect';
import expectJSX from 'expect-jsx';

import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import MDButton from 'src/MDButton'; // eslint-disable-line import/no-unresolved

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
    expect(actualElement.props.children).toEqual('text');
  });

  it('should fire action function if specified', () => {
    let clicked = false;
    const onClick = () => { clicked = true; };
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
  });

  it('should render a button typed button if not type is specified', () => {
    const renderer = createRenderer();
    renderer.render(<MDButton />);
    const actualElement = renderer.getRenderOutput();
    expect(actualElement.props.type).toEqual('button');
  });

  it('should render a typed button if type is specified', () => {
    const renderer = createRenderer();
    renderer.render(
      <MDButton
        type="submit"
      />
    );
    const actualElement = renderer.getRenderOutput();
    expect(actualElement.props.type).toEqual('submit');
  });

  it('should render a disabled button if isDisabled is true', () => {
    const renderer = createRenderer();
    renderer.render(
      <MDButton
        isDisabled
      />
    );
    const actualElement = renderer.getRenderOutput();
    expect(actualElement.props.disabled).toBe(true);
  });

  it('should render a button with given width and height', () => {
    const renderer = createRenderer();
    renderer.render(
      <MDButton
        height={100}
        width={200}
      />
    );

    const actualElement = renderer.getRenderOutput();
    expect(actualElement.props.style).toInclude({ width: 200, height: 100 });
  });
});
