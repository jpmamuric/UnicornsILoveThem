import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/unicorn_actions';
import ColorPicker from './ColorPicker';
import AccessoryPicker from './AccessoryPicker';
import PartsPicker from './PartsPicker';

const colorsOptions = [
  'black', 'white', 'brown', 'pink', 'purple', 'blue', 'rainbow'
]

class UnicornBuilder extends Component {
  render() {
    const {
      addAccessories,
      removeAccessories,
      accessories,
      color,
      changeColor,
      colorChosen
    } = this.props;

    return (
      <div>

        <PartsPicker add={addAccessories} remove={removeAccessories} accessories={accessories}/>

        <div className='unicorn__container'>
          <div className={`unicorn unicorn__color-${color}`}>
            Unicorn
          </div>
          { accessories.hair ? <div className='unicorn__accessory unicorn__accessory-hair'>hair</div> : null }
          { accessories.tail ? <div  className='unicorn__accessory unicorn__accessory-tail'>tail</div> : null }
          { accessories.hooves ? <div className='unicorn__accessory unicorn__accessory-hooves' >hooves</div> : null }
          { accessories.horn ? <div className='unicorn__accessory unicorn__accessory-horn'>horn</div> : null }
        </div>


         <div>
           { !colorChosen
            ? <ColorPicker color={color} colorsOptions={colorsOptions} changeColor={changeColor}/>
            : <AccessoryPicker changeColor={changeColor} />
           }
         </div>
      </div>
    );
  }
}

const mapStateToProps = ({ unicorn }) => {
  const { color, colorChosen, accessories } = unicorn;
  return { color, colorChosen, accessories };
};

export default connect(mapStateToProps, actions)(UnicornBuilder);
