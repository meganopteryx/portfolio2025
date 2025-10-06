import React from 'react';
import useModal from '../../hooks/useModal';
import ConfirmDialog from './ConfirmDialog';

export const ModalExample: React.FC = () => {
  const { openModal, closeModal, openConfirm } = useModal();

  const openSimple = () => {
    openModal(
      <div className="modal-body">
          <h2 className="modal-title">Simple Modal</h2>
          <p className="project-description">This is a simple modal opened via openModal.</p>
          <div className="modal-actions">
            <button className="modal-btn modal-btn-outline" onClick={() => closeModal()}>Close</button>
          </div>
      </div>
    );
  };

  const openPromiseConfirm = async () => {
    const result = await openConfirm((resolve) => (
      <ConfirmDialog
        message="Do you want to proceed?"
        onConfirm={() => resolve(true)}
        onCancel={() => resolve(false)}
      />
    ));
    // result will be true/false
    alert(`Confirm result: ${String(result)}`);
  };

  return (
    <div className="modal-actions">
      <button className="modal-btn modal-btn-primary" onClick={openSimple}>Open simple modal</button>
      <button className="modal-btn modal-btn-outline" onClick={openPromiseConfirm}>Open confirm (promise)</button>
    </div>
  );
};

export default ModalExample;
