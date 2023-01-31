import styled from 'styled-components';

export const ModalHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 19.83px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Title = styled.p`
  font-family: Zen Maru Gothic;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
