import { useCallback } from 'react';
import { useModalContext } from './modal-context-hook';

//Controls for opening and closing modals and confirm dialogs

export const useModal = () => {
  const { show, hide, showAsync } = useModalContext();

  const openModal = useCallback((node: React.ReactNode, opts?: { labelledBy?: string; describedBy?: string }) => show(node, opts), [show]);
  const closeModal = useCallback((id?: number) => hide(id), [hide]);
  const openConfirm = useCallback((render: (resolve: (v?: unknown) => void) => React.ReactNode) => {
    return showAsync ? showAsync(render) : Promise.resolve(undefined);
  }, [showAsync]);

  return { openModal, closeModal, openConfirm };
};

export default useModal;
