import React from 'react';
import '../Menu.css';

const Menu = () => {
  return (
    <>
      <h1 id="menu" className="menu-header">
        Our Menu
      </h1>
      <div className="menu-div">
        <p className="menu-info">
          Pellentesque quis elit dapibus lacus sodales convallis. Nunc dictum
          quam urna, vitae hendrerit ante auctor eu. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Etiam rutrum nisl id massa feugiat malesuada. Vestibulum in porttitor
          purus. Nullam porttitor sagittis arcu ut tincidunt. Morbi nec sapien
          justo. Praesent nec suscipit massa, id porta neque. Vestibulum vel
          venenatis mauris, sed sagittis dui. Etiam hendrerit gravida sem. Nulla
          facilisi.
          <br />
          <br />
          Praesent fringilla odio nec nunc feugiat blandit. Suspendisse potenti.
          Fusce ante justo, egestas ut justo in, viverra luctus nisl. Nunc
          laoreet quis est eget commodo. Curabitur ut tempus massa. Nunc tempor
          tempus purus non pharetra. Sed ut iaculis sapien. Aenean sollicitudin
          eu mauris eu malesuada. Nunc venenatis ultrices nulla, dictum pulvinar
          mi viverra eget. Aenean et dui molestie, varius magna et, bibendum
          justo. Duis vitae turpis id justo imperdiet rutrum. Nullam ornare
          sodales nibh, quis condimentum libero venenatis eu. Sed faucibus
          ultricies ante eu lacinia. Pellentesque ultricies velit diam, finibus
          faucibus tortor tempus a. Ut diam sem, vehicula aliquet odio at,
          facilisis rhoncus est.
        </p>
        <img className="menu" src="menu.jpg" alt="menu" />
      </div>
    </>
  );
};

export default Menu;
