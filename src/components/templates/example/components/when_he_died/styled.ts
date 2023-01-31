import styled from 'styled-components';

export const WhenHeDiedStyled = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const WrapTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 27px 17px;
  background: #edf9f5;
  box-shadow: 2px 4px 10px rgba(30, 38, 46, 0.08);

  gap: 12px;
  min-width: 315px;
`;

export const Title = styled.p`
  margin: 0;
  font-family: Zen Maru Gothic;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  color: #262e2c;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.8);
`;

export const Body = styled.div`
  padding: 16px;
  background: #ffffff;
  box-shadow: 2px 4px 10px rgba(30, 38, 46, 0.08);
  width: 100%;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.span`
  font-family: Hiragino Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 100%;
  color: #ba8620;
  background: #fff6e3;
  border-radius: 27px;
  padding: 6px 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 12px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

export const MoneyText = styled.p`
  margin: 0;
  font-family: Zen Maru Gothic;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  text-align: center;
  color: #ba8620;
  & > span {
    font-family: Zen Maru Gothic;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    text-align: center;
    color: #ba8620;
  }
`;

export const Description = styled.p`
  font-family: Hiragino Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 100%;
  text-align: right;
  color: #3b4341;
  margin: 0 10px 0 0;
`;

export const ButtonDetail = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(180deg, #d8ba81 0%, #ab8f5a 100%);
  border: 1px solid #c5b391;
  border-radius: 24px;
  text-decoration: none;
  font-family: Zen Maru Gothic;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
  padding: 0 16px;
  color: #ffffff;
  gap: 12px;
  margin-left: 17px;
  height: 32px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 4px;
  }
`;
