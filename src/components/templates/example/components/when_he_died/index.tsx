import React from 'react';
import { WhenHeDiedStyled, WrapTitle, Title, Body, Tags, Tag, MoneyText, Description, ButtonDetail, Content } from './styled';
import { TWhenHeDiedProps } from './types';
import { IconAngel, IconHalfArrowRight } from '../../../../atoms/icons';

export const WhenHeDied = (props: TWhenHeDiedProps): JSX.Element => {
  const { data } = props;
  return (
    <WhenHeDiedStyled>
      <WrapTitle>
        <IconAngel width={'48px'} />
        <Title>亡くなった時</Title>
      </WrapTitle>
      <Body>
        <Tags>
          <Tag>遺族基礎年金</Tag>
          <Tag>遺族厚生年金</Tag>
        </Tags>
        <Content>
          <Description>ひと月あたり</Description>
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
    </WhenHeDiedStyled>
  );
};
