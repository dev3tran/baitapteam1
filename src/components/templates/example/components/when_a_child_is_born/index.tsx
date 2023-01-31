import React from 'react';
import { WhenAChildIsBornStyled, WrapTitle, Title, Body, Tag, MoneyText, Description, ButtonDetail, Content, Tags } from './styled';
import { TWhenAChildIsBornProps } from './types';
import { IconChildPaint, IconHalfArrowRight } from '../../../../atoms/icons';

export const WhenAChildIsBorn = (props: TWhenAChildIsBornProps): JSX.Element => {
  const { data } = props;
  return (
    <WhenAChildIsBornStyled>
      <WrapTitle>
        <IconChildPaint width={'48px'} />
        <Title>子どもが生まれる時</Title>
      </WrapTitle>
      <Body>
        <Tags>
          <Tag>出産育児一時金</Tag>
          <Tag>出産手当金</Tag>
          <Tag>育児休業給付金</Tag>
        </Tags>
        <Content>
          <Description>すべての合計で</Description>
          <MoneyText>
            最大
            <span>{data}</span>
            万円
          </MoneyText>
          <ButtonDetail as={'a'} href={'#'}>
            詳しくみる
            <IconHalfArrowRight width={'16px'} />
          </ButtonDetail>
        </Content>
      </Body>
    </WhenAChildIsBornStyled>
  );
};
