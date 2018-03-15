import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementCounter, decrementCounter } from '../actions/counterActions';
import { addToList } from '../actions/listActions';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listItem: ''
    };
  }

  handleListItemChange(e) {
    e.preventDefault();

    this.setState({
      listItem: e.target.value
    });
  }

  render() {
    return (
      <div>

        <h1>Home section of the starter</h1>

        <h3>Counter</h3>
        <button onClick={() => this.props.incrementCounter()}>+</button>
        <p>{this.props.counterCurrent}</p>
        <button onClick={() => this.props.decrementCounter()}>-</button>

        <h3>List</h3>
        <ul>
        {
          this.props.listCurrent.map( (item, index) => (
            <li key={index}>{item}</li>
            ))
        }
        </ul>

        <input type="text" value={this.state.listItem} onChange={this.handleListItemChange.bind(this)} />
        <button onClick={() => this.props.addToList(this.state.listItem)}>Add List Item</button>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counterCurrent: state.counterReducer,
    listCurrent: state.listReducer
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  incrementCounter,
  decrementCounter,
  addToList
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);