import chai from 'chai';
import jsdom from 'mocha-jsdom';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import MDButton from 'src/MDButton';

const expect = chai.expect;

describe('MDButton', () => {

  jsdom();

  it('should render correctly', () => {
    const mdButton = TestUtils.renderIntoDocument(<MDButton />);
    const mdButtonNode = ReactDOM.findDOMNode(mdButton);
    // TODO - this test is weak
    expect(mdButtonNode).to.be.not.null;
  });

});
