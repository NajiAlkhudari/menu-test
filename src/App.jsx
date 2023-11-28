import React from 'react';
import Menu from './components/Menu';
import "./App.scss"


const App = () => {
  const menuItems = [
    { label: 'Home', value: 'home', icon: 'home-icon' },
    {
      label: 'FrontEnd',
      value: 'frontend',
      icon: 'services-icon',
      submenu: [
        { label: 'React js ', value: 'reactjs', icon: 'webdev-icon' },
        { label: 'Angular', value: 'angular', icon: 'design-icon' },
      ],
    },
    { label: 'BackEnd', value: 'about', icon: 'about-icon' },
    { label: 'Full Stack', value: 'contact', icon: 'contact-icon' },
  ];

  return (
    <div className="container">
      <Menu menuItems={menuItems} />
    </div>
  );
};

export default App;
