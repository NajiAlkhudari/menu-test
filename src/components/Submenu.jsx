import React from 'react';

const Submenu = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.value}> {item.icon}{item.label}</li>
    ))}
  </ul>
);

export default Submenu;
