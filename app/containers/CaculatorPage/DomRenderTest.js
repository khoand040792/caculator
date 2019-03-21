import React from 'react';
import PropTypes from 'prop-types';

class DomRenderTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  handleClick() {
    const { username, password } = this.state;
    this.props.onSubmit({ username, password });
  }

  changeInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { username, password } = this.state;
    return (
      <React.Fragment>
        <input value={username} onChange={this.changeInput} name="username" />
        <input value={password} onChange={this.changeInput} name="password" />
        <button type="button" onClick={this.handleClick}>
          login
        </button>
      </React.Fragment>
    );
  }
}

DomRenderTest.propTypes = {
  onSubmit: PropTypes.func,
};

export default DomRenderTest;
