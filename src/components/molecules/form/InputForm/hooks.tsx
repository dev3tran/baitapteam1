import { ChangeEvent, useCallback, useState } from 'react';
import { TInputFormProps } from './types';
import { formatMoney } from './utlis';
import { DEFAULT_INPUT_VALUE } from './contants';

export const useInputForm = (props: TInputFormProps) => {
  const { value: defaultValue, ...rest } = props;

  const [value, setValue] = useState(defaultValue ?? DEFAULT_INPUT_VALUE);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = formatMoney(e.target.value);

    setValue(newValue);
  }, []);

  return {
    value,
    onChange,
    ...rest,
  };
};
