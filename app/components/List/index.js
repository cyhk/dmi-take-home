/**
 * List component
 *
 * Generates a list from an array passed in as a prop
 *
 * Props:
 *   items: [ item1, ...]
 */

import React from 'react';
import PropTypes from 'prop-types';
import Ul from './Ul';
import ListItem from '../ListItem';

const List = props => {
  const listItems = props.items.map((item, index, array) => (
    <ListItem key={`item-${array.length - index}`}>{item}</ListItem>
  ));

  return <Ul>{listItems}</Ul>;
};

List.propTypes = {
  items: PropTypes.array,
};

export default List;
