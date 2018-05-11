import React from 'react';

const AccessoryPicker = ({ changeColor }) => {
  // const controls = [
  //   { label: 'Hair', type: 'b_tomato' },
  //   { label: 'Tail', type: 'a_lettuce' },
  //   { label: 'Hooves', type: 'c_cheese' },
  //   { label: 'Horn', type: 'd_meat' },
  // ]

  return (
    <div>
      <div> choose accessory </div>
      <div className='accessory__undo' onClick={()=>changeColor('white', false)}>undo</div>
    </div>
  )
}

export default AccessoryPicker;
