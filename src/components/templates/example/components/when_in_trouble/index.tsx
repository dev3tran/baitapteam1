import React from 'react';
import { WhenInTroubleStyled, WrapTitle, Title, Body, Tag, MoneyText, Description, ButtonDetail, Content, Tags } from './styled';
import { TWhenInTroubleProps } from './types';
import { IconAccessibility, IconHalfArrowRight } from '../../../../atoms/icons';

export const WhenInTrouble = (props: TWhenInTroubleProps): JSX.Element => {
  const { data } = props;
  return (
    <WhenInTroubleStyled>
      <WrapTitle>
        <IconAccessibility width={'48px'} />
        <Title>障害状態になった時</Title>
      </WrapTitle>
      <Body>
        <Tags>
          <Tag>障害基礎年金</Tag>
          <Tag>障害厚生年金</Tag>
        </Tags>
        <Content>
          <Description>障害等級2級の場合、ひと月あたり</Description>
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
    </WhenInTroubleStyled>
  );
};
