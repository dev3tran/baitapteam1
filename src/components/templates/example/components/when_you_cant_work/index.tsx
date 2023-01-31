import React from 'react';
import { WhenYouCantWorkStyled, WrapTitle, Title, Body, Tag, MoneyText, TextDescription, ButtonDetail, Content, Tags } from './styled';
import { TWhenYouCantWorkProps } from './types';
import { IconHalfArrowRight, IconHatMoney } from '../../../../atoms/icons';

export const WhenYouCantWork = (props: TWhenYouCantWorkProps): JSX.Element => {
  const { data } = props;
  return (
    <WhenYouCantWorkStyled>
      <WrapTitle>
        <IconHatMoney width={'48px'} />
        <Title>働けなくなった時</Title>
      </WrapTitle>
      <Body>
        <Tags>
          <Tag>傷病手当金</Tag>
        </Tags>
        <Content>
          <TextDescription>ひと月あたり</TextDescription>
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
    </WhenYouCantWorkStyled>
  );
};
