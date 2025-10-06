import { useContext } from 'react';
import ModalContext from '../components/modal-context';

export const useModalContext = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModalContext must be used inside ModalProvider');
  return ctx;
};

export default useModalContext;
