import React from 'react';
import { MedicalExpensesStyled, WrapTitle, Title, Body, Tag, MoneyText, Description, ButtonDetail, Content, Tags } from './styled';
import { TMedicalExpensesProps } from './types';
import { IconFingerPoint, IconHalfArrowRight } from '../../../../atoms/icons';

export const MedicalExpenses = (props: TMedicalExpensesProps): JSX.Element => {
  const { data } = props;
  return (
    <MedicalExpensesStyled>
      <WrapTitle>
        <IconFingerPoint width={'48px'} />
        <Title>
          病気やケガで <br />
          医療費が高額になった時
        </Title>
      </WrapTitle>
      <Body>
        <Tags>
          <Tag>高額療養費制度</Tag>
        </Tags>
        <Content>
          <Description>ひと月あたり自己負担上限額</Description>
          <MoneyText>
            <span>{data}</span>
            万円
          </MoneyText>
          <ButtonDetail as={'a'} href={'#'}>
            詳しくみる
            <IconHalfArrowRight width={'16px'} />
          </ButtonDetail>
        </Content>
      </Body>
    </MedicalExpensesStyled>
  );
};
