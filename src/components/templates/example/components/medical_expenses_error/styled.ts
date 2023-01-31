import styled from 'styled-components';

export const MedicalExpensesStyled = styled.div`
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

export const WrapError = styled.div`
  background: #91b3a9;

  padding: 12.5px 16px;
`;

export const WrapTitleError = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 12px;
`;

export const TitleError = styled.p`
  font-family: Zen Maru Gothic;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: #ffffff;
`;

export const ContentError = styled.p`
  font-family: Hiragino Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 150%;
  color: #ffffff;
`;
