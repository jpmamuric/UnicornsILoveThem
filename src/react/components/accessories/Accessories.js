import React from 'react';

const Accessories = ({ accessories }) => accessories.map(accessory => (
    <div
      key={accessory.type}
      className={`accessory__item accessory__item-${accessory.className}`}>
        {accessory.type}
    </div>
));

export default Accessories;
