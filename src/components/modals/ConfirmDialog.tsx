import React from 'react';

interface ConfirmDialogProps {
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ message = 'Are you sure?', onConfirm, onCancel }) => {
  return (
    <div style={{ padding: '1rem', maxWidth: 420 }}>
      <h3>{message}</h3>
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
        <button onClick={onConfirm} style={{ background: '#0366d6', color: 'white' }}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default ConfirmDialog;
