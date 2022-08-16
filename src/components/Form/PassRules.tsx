import React from 'react';

import { List, Collapse } from 'reactstrap';

import RuleListItem from './RuleListItem';
import { IPassRules } from './types';

const initilalRulesState: IPassRules = {
  rules: {
    longEnough: null,
    oneUpperCase: null,
    oneLowerCase: null,
    oneNumber: null,
  },
  isOpen: false,
};

const PassRules: React.FC<IPassRules> = ({
  rules,
  isOpen,
} = initilalRulesState) => (
  <Collapse isOpen={isOpen}>
    <List className="my-3">
      {
        Object.entries(rules).map(([key, state]) => (
          <RuleListItem text={key} state={state} />
        ))
      }
    </List>
  </Collapse>

);

export default React.memo(PassRules);
