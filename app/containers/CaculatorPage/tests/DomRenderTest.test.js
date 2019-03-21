import React from 'react';
import { mount } from 'enzyme';
import DomRenderTest from '../DomRenderTest';

describe('<DomRenderTest />', () => {
  let renderComponent;
  beforeEach(() => {
    renderComponent = mount(<DomRenderTest onSubmit={() => {}} />);
  });

  it('shoud setstate when change input tag', () => {
    const input = renderComponent.find('input[name="username"]');
    const evt = { target: { name: 'username', value: 'abc' } };
    input.prop('onChange')(evt);

    const state = renderComponent.state();
    const expectedValue = evt.target.value;

    expect(state.username).toEqual(expectedValue);
  });

  it('should call onSubmit props with correctly param', () => {
    const onSubmit = jest.fn();

    // change state
    renderComponent.setState({
      username: 'abdddc',
      password: '',
    });

    // simulate action
    const button = renderComponent.find('button');
    button.prop('onClick')();

    expect(onSubmit).toBeCalledWith({ username: 'abdddc', password: '' });
  });
});
