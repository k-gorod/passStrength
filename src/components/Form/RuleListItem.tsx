import React from 'react';

import { ruleListItem } from './types';

const chooseItemColor = (state: boolean | null) => {
  if (state) return '-success';

  if (state === false) return '-failed';

  return '-default';
};

const RuleListItem: React.FC<ruleListItem> = ({ text, state }) => {
  console.log(chooseItemColor(state));
  return (
    <li className={`ruleItem${chooseItemColor(state)}`}>
      {text}
    </li>
  );
};

export default React.memo(RuleListItem);
