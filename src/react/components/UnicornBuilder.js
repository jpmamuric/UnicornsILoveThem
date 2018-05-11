import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/unicorn_actions';
import ColorPicker from './color/ColorPicker';
import AccessoryPicker from './accessories/AccessoryPicker';
import Accessories from './accessories/Accessories';
import PartsPicker from './parts/PartsPicker';
import Parts from './parts/Parts';


const colorsOptions = [
  'black', 'white', 'brown', 'pink', 'purple', 'blue', 'rainbow'
]

class UnicornBuilder extends Component {
  render() {
    const {
      addParts,
      removeParts,
      addAccessory,
      removeAccessory,
      accessories,
      parts,
      color,
      changeColor,
      colorChosen
    } = this.props;

    return (
      <div>
        {/* SELECT UNICORN PARTS */}
        <PartsPicker add={addParts} remove={removeParts} parts={parts}/>

        {/* UNICORN */}
        <div className='unicorn__container'>
          <div className={`unicorn unicorn__color-${color}`}>Unicorn</div>
          <Parts parts={parts} />
          <Accessories accessories={accessories} />
        </div>

        {/* SELECT UNICORN HAIR & ACCESSORIES */}
         <div>
           { !colorChosen
            ? <ColorPicker color={color} colorsOptions={colorsOptions} changeColor={changeColor}/>
          : <AccessoryPicker accessories={accessories} changeColor={changeColor} add={addAccessory} remove={removeAccessory}/>
           }
         </div>
      </div>
    );
  }
}

const mapStateToProps = ({ unicorn }) => {
  const { color, colorChosen, parts, accessories } = unicorn;
  return { color, colorChosen, parts, accessories };
};

export default connect(mapStateToProps, actions)(UnicornBuilder);
