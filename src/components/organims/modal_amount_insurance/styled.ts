import styled from 'styled-components';

export const ModalBackGround = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(26, 55, 47, 0.8);
`;

export const ModalContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  justify-content: center;
  align-items: flex-start;
  overflow: auto;
`;

export const ModalContent = styled.div`
  margin: auto;
  max-width: 855px;
  padding: 0 24px 24px;
  background: #91c5b6;
  box-shadow: 2px 4px 10px rgba(30, 38, 46, 0.08);
  border-radius: 12px;
`;
