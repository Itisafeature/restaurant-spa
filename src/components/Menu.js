import React from 'react';
import '../Menu.css';

const Menu = () => {
  return (
    <div className="menu-div">
      <h1 className="menu-header">Our Menu</h1>
      <p className="menu-info">
        Pellentesque quis elit dapibus lacus sodales convallis. Nunc dictum quam
        urna, vitae hendrerit ante auctor eu. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Etiam rutrum nisl
        id massa feugiat malesuada. Vestibulum in porttitor purus. Nullam
        porttitor sagittis arcu ut tincidunt. Morbi nec sapien justo. Praesent
        nec suscipit massa, id porta neque. Vestibulum vel venenatis mauris, sed
        sagittis dui. Etiam hendrerit gravida sem. Nulla facilisi.
      </p>
      <img className="menu" src="menu.jpg" />
    </div>
  );
};

export default Menu;
