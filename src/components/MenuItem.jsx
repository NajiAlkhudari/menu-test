import React, { useState } from 'react';
import Submenu from './Submenu';

const MenuItem = ({ label, value, icon, submenu }) => {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuVisible(!isSubMenuVisible);
  };

  return (
    <li key={value} onClick={toggleSubMenu}>
      {icon && <span className={`icon ${icon}`} />} {/* Add icon */}
      {label}
      {isSubMenuVisible && submenu && <Submenu items={submenu} />}
    </li>
  );
};

export default MenuItem;
