import React from 'react';
import { WhenYouCantWorkStyled, WrapTitle, Title, ContentError, TitleError, WrapError, WrapTitleError } from './styled';
import { IconHatMoney } from '../../../../atoms/icons';
import { IconExclamation } from '../../../../atoms/icons';

export const WhenYouCantWorkError = (): JSX.Element => {
  return (
    <WhenYouCantWorkStyled>
      <WrapTitle>
        <IconHatMoney width={'48px'} />
        <Title>働けなくなった時</Title>
      </WrapTitle>
      <WrapError>
        <WrapTitleError>
          <IconExclamation width={'20px'} />
          <TitleError>保障の対象外です</TitleError>
        </WrapTitleError>
        <ContentError>
          入力内容と本シミュレーションの算出条件を考慮すると、対象外の可能性が高いです。
          ご家族の詳細情報やお住いの市区町村などの条件により、対象になる場合もあります。
          より正確な情報は、日本年金機構や加入している協会けんぽ又は健康保険組合等でご確認下さい。
        </ContentError>
      </WrapError>
    </WhenYouCantWorkStyled>
  );
};
