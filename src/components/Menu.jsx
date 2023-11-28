import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ menuItems }) => (
  <ul>
    {menuItems.map((menuItem) => (
      <MenuItem key={menuItem.value} {...menuItem} />
    ))}
  </ul>
);

export default Menu;
