import React from 'react';

import { Progress } from 'reactstrap';

import { colors } from './constants';
import { IPassStrengthBar } from './types';

const PassStrengthBar: React.FC<IPassStrengthBar> = ({ text, barState }) => (
  <Progress
    className="my-2"
    value={barState}
    color={colors[barState]}
    max={3}
    style={{
      height: '5px',
    }}
  >
    {text}
  </Progress>
);

export default React.memo(PassStrengthBar);
