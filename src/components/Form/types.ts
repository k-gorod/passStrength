export interface IPassStrengthBar {
  text?: string,
  barState: number
}

export type RuleStateType = boolean | null;

export interface IRules {
  longEnough?: RuleStateType,
  oneUpperCase?: RuleStateType,
  oneLowerCase?: RuleStateType,
  oneNumber?: RuleStateType,
}

export interface IPassRules {
  rules: IRules
  isOpen: boolean
}

export interface ruleListItem {
  text: string,
  state: RuleStateType
}

export interface IEye {
  isOpen: boolean
  onClick: () => void
}
