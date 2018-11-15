import React from 'react';
import ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import { create } from 'react-test-renderer';
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('snapshot', () => {
  const c = create(<App />);
  expect(c.toJSON()).toMatchSnapshot();
});

test('shows modal when toggleModal is called', () => {
  const component = create(<App />);
  const instance = component.getInstance();

  expect(instance.state.showModal).toBe(false);
  instance.toggleModal();
  expect(instance.state.showModal).toBe(true);
});

it('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = TestUtils.renderIntoDocument(<App labelOn="On" labelOff="Off" />);

  const checkboxNode = ReactDOM.findDOMNode(checkbox);

  // Verify that it's Off by default
  expect(checkboxNode.textContent).toEqual('Toggle MenuOff');

  // Simulate a click and verify that it is now On
  TestUtils.Simulate.change(TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input'));
  expect(checkboxNode.textContent).toEqual('Toggle MenuOn');
});
