/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';

import { changeExpression } from './actions';
import { selectExpression } from './selectors';
import reducer from './reducer';
import './styles.css';
import caculatorResult, { isOperator } from './caculate.bus';

/* eslint-disable react/prefer-stateless-function */
export class CaculatorPage extends React.PureComponent {
  drawBoard = () =>
    [
      '(',
      ')',
      '%',
      'AC',
      7,
      8,
      9,
      ':',
      4,
      5,
      6,
      'x',
      1,
      2,
      3,
      '-',
      '0',
      '.',
      '=',
      '+',
    ].map(item => (
      <button
        type="button"
        key={item}
        onClick={this.onPressItemBoard}
        className="item"
      >
        {item}
      </button>
    ));

  onPressItemBoard = e => {
    const key = e.target.innerHTML;
    const { onChangeExpression, expression } = this.props;
    // convert imutable list to array
    let expressionArray = expression.toArray();
    switch (key) {
      case '=':
        expressionArray = caculatorResult(expressionArray);
        break;
      case 'AC':
        expressionArray.pop(key);
        break;
      default: {
        const top = expressionArray[expressionArray.length - 1];
        // if top not operator and key is operand, key should append to top
        // e.g: [12]
        // top = 12
        // key is pressed 9
        // => result: 129 => new array [129]
        if (top && !isOperator(key) && !isOperator(top)) {
          expressionArray.pop();
          expressionArray.push(`${top}${key}`);
        } else {
          // key is operator or top is operator, key should push to stack
          expressionArray.push(key);
        }
        break;
      }
    }
    onChangeExpression(expressionArray);
  };

  render() {
    const { expression } = this.props;
    return (
      <div className="container">
        <input className="result" value={expression.join('')} disabled />
        <div className="board">{this.drawBoard()}</div>
      </div>
    );
  }
}

CaculatorPage.propTypes = {
  expression: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onChangeExpression: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeExpression: exp => dispatch(changeExpression(exp)),
  };
}

const mapStateToProps = createStructuredSelector({
  expression: selectExpression(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'caculator', reducer });

export default compose(
  withReducer,
  withConnect,
)(CaculatorPage);
