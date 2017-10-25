import React from 'react';

export default props => {
  console.log(props);
  return (
    <li>
      <h3>{props.searchTerm}</h3>
      <img src={props.image} alt="" />
      <p>{props.time}</p>
      <button onClick={() => props.removeSearchItem(props.index)}>
        delete
      </button>
    </li>
  );
};
