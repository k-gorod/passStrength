import React, { useState } from 'react';

import { Button, Input } from 'reactstrap';

import { initialRules } from './constants';
import EyeIcon from './EyeIcon';

import './index.scss';
import PassRules from './PassRules';
import PassStrengthBar from './PassStrengthBar';
import { IRules } from './types';

const Form: React.FC = () => {
  const [barState, setBarState] = useState<number>(0);

  const [inputValue, setInputValue] = useState<string>('');

  const [rulesVisible, setRulesVisible] = useState<boolean>(false);

  const [rulesState, setRulesState] = useState<IRules>(initialRules);

  const [passIsVisivle, setPassIsVisivle] = useState<boolean>(false);

  const buttonHandleClick = () => {
    setBarState((prev) => (prev === 3 ? 0 : prev + 1));
    setPassIsVisivle((prev) => !prev);
  };

  const shouldRulesBeVisible = (value: string) => {
    if (value.length > 0 && !rulesVisible) {
      setRulesVisible(true);
    } else if (value.length === 0 && rulesVisible) {
      setRulesVisible(false);
    }
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    shouldRulesBeVisible(value);

    setRulesState((prev) => ({ ...prev, longEnough: value.length >= 8 })); //

    setInputValue(value);
  };

  return (
    <div
      className="app_from form"
    >
      <Button
        onClick={buttonHandleClick}
      >
        Click
      </Button>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        type={passIsVisivle ? 'text' : 'password'}
      >
        <EyeIcon isOpen={passIsVisivle} onClick={() => { console.log('EyeIcon clicked'); }} />
      </Input>
      <PassRules rules={rulesState} isOpen={rulesVisible} />
      <PassStrengthBar barState={barState} />
    </div>
  );
};

export default Form;
