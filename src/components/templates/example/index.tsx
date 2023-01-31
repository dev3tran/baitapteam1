import React from 'react';
import { useDisClosure } from '../../organims/modal_amount_insurance/hooks';
import { Modal } from '../../organims/modal_amount_insurance';
import { images } from '../../../assets/images';
import { WhenHeDied } from './components/when_he_died';
import { WhenHeDiedError } from './components/when_he_died_error';
import { MedicalExpenses } from './components/medical_expenses';
import { MedicalExpensesError } from './components/medical_expenses_error';
import { WhenYouCantWork } from './components/when_you_cant_work';
import { WhenYouCantWorkError } from './components/when_you_cant_work_error';
import { WhenInTrouble } from './components/when_in_trouble';
import { WhenInTroubleError } from './components/when_in_trouble_error';
import { WhenAChildIsBorn } from './components/when_a_child_is_born';
import { WhenAChildIsBornError } from './components/when_a_child_is_born_error';
import { ModalBody, ModalHead, Title } from './styled';

export const Example = () => {
  const { isOpen, onOpen, onClose } = useDisClosure();
  const data = {
    whenHeDied: 16,
    medicalExpenses: 11,
    whenYouCantWork: 20,
    whenInTrouble: 20,
    whenAChildIsBorn: 294,
  };

  return (
    <div>
      <button onClick={onOpen}>Modal</button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalHead>
          <img alt={'girl-left'} src={images.girlRaiseHandMoney} height={'101px'} />
          <Title>あなたが公的保険で受け取れる金額</Title>
          <img alt={'boy-right'} src={images.boyRaiseHandMoney} height={'101px'} />
        </ModalHead>
        <ModalBody>
          {data.whenHeDied ? <WhenHeDied data={data.whenHeDied} /> : <WhenHeDiedError />}
          {data.medicalExpenses ? <MedicalExpenses data={data.medicalExpenses} /> : <MedicalExpensesError />}
          {data.whenYouCantWork ? <WhenYouCantWork data={data.whenYouCantWork} /> : <WhenYouCantWorkError />}
          {data.whenInTrouble ? <WhenInTrouble data={data.whenInTrouble} /> : <WhenInTroubleError />}
          {data.whenAChildIsBorn ? <WhenAChildIsBorn data={data.whenAChildIsBorn} /> : <WhenAChildIsBornError />}
        </ModalBody>
      </Modal>
    </div>
  );
};
