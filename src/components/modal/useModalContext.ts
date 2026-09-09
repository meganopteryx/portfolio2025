import { useContext } from 'react';
import ModalContext from './ModalContext';

export const useModalContext = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModalContext must be used inside ModalProvider');
  return ctx;
};

export default useModalContext;
