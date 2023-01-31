import React from 'react';
import { ModalContent, ModalBackGround, ModalContainer } from './styled';
import { TModalProps } from './types';

export const Modal = (props: TModalProps) => {
  const { isOpen, onClose, children } = props;

  if (!isOpen) {
    return <></>;
  }

  return (
    <>
      <ModalBackGround />
      <ModalContainer onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>{children}</ModalContent>
      </ModalContainer>
    </>
  );
};
