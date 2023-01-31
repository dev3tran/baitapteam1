import React from 'react';

import { useInputForm } from './hooks';
import { InputStyled } from './styled';
import { TInputFormProps } from './types';

const Component = (props: ReturnType<typeof useInputForm>): JSX.Element => {
  const { value, onChange } = props;

  return <InputStyled value={value} onChange={onChange} />;
};

export const InputForm = (props: TInputFormProps): JSX.Element => {
  return <Component {...useInputForm(props)} />;
};
