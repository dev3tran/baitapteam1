import React from 'react';
import { TFlexProps } from './types';
import { FlexStyled } from './styled';

export const Flex = (props: TFlexProps): JSX.Element => {
  const { children, ...rest } = props;
  return <FlexStyled {...rest}>{children}</FlexStyled>;
};
