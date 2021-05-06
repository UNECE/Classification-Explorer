import React, { Component } from 'react';
import { sparqlConnect } from '../sparql/configure-sparql';
import { LOADING, FAILED } from 'sparql-connect';
import ItemCorrespondences from './item-correspondences';

class SelectItemOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '',
    };
    this.handleChange = () => {
      this.setState({ selectedItem: this.refs.refSelectItem.value });
    };
  }

  render() {
    if (this.props.loaded === LOADING)
      return <span>loading items for {this.props.classificationId}</span>;
    if (this.props.loaded === FAILED)
      return (
        <span>Failed loading results for {this.props.classificationId}</span>
      );

    if (this.state.selectedItem === '') {
      console.log('aucune selection');

      return (
        <span>
          <label>Select an item from {this.props.classificationCode}:</label>
          <select
            onChange={this.handleChange}
            value={this.state.selectedItem}
            ref="refSelectItem"
          >
            {this.props.items.map(({ item, code, label }) => (
              <option value={item} key={item}>
                {code} - {label} - ({item})
              </option>
            ))}
          </select>
          <br />
        </span>
      );
    } else {
      console.log('un selectedItem : -' + this.state.selectedItem + '-');
      const hash = this.state.selectedItem + '||' + this.props.correspondence;
      return (
        <span>
          <label>Select an item from {this.props.classificationCode}:</label>
          <select
            onChange={this.handleChange}
            value={this.state.selectedItem}
            ref="refSelectItem"
          >
            {this.props.items.map(({ item, code, label }) => (
              <option value={item} key={item}>
                {code} - {label} - ({item})
              </option>
            ))}
          </select>
          <br />
          <ItemCorrespondences
            item={this.state.selectedItem}
            classification={this.props.classificationId}
            hash={hash}
          />
        </span>
      );
    }
  }
}
export default sparqlConnect.classificationItems(SelectItemOptions);
