import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/unicorn_actions';
import UnicornBuilder from './UnicornBuilder';

const Landing = ({ readyToBuild, userReady }) => (
  <div className='landing'>
    {
      !readyToBuild
      ? <div onClick={userReady} className="castle"> Castle </div>
      : <UnicornBuilder />
    }
  </div>
);

const mapsStateToProps = ({ unicorn }) => {
  const { readyToBuild } = unicorn;
  return { readyToBuild };
}


export default connect(mapsStateToProps, actions)(Landing);
