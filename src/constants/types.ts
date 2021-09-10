import { NavigatorScreenParams } from "@react-navigation/native";
import { InputProps } from "react-native-elements";

export type AccountStackParamList = {
  Home: { screen: keyof AccountStackParamList };
  CreateAccount: undefined;
};

export type CardStackParamList = {
  Home: { screen: keyof CardStackParamList };
  CreateCard: undefined;
};

export type DrawerParamList = {
  Accounts: NavigatorScreenParams<AccountStackParamList>;
  Cards: NavigatorScreenParams<CardStackParamList>;
  "Generate Password": undefined;
  "Test Password": undefined;
};

export type CustomInputProps = InputProps & {
  label: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  controllerValue?: string;
  isRequired?: boolean;
  controllerOnChange: (e: string) => void;
};

export type CardData = {
  id: number;
  uuid: string;
  name: string;
  type: string;
  number: number;
  date_created: string;
};

export type BaseCriteria = {
  hasUppercaseChars: boolean;
  hasLowercaseChars: boolean;
  hasNumbers: boolean;
  hasSpecialChars: boolean;
};

export type ExtendedCriteria = BaseCriteria & {
  isLengthShort: boolean;
  isLengthAve: boolean;
  isLengthLong: boolean;
  hasMixedChars: boolean;
};

export type PasswordFormData = BaseCriteria & {
  length: number;
};

export type PasswordTestResult = {
  score: number;
  strength: number;
  criteria: ExtendedCriteria;
};
