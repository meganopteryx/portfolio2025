import React, { createContext, useCallback, useMemo, useState } from 'react';
import Modal from './Modal';

type ModalContent = React.ReactNode;

interface StackEntry {
  id: number;
  content: ModalContent;
  labelledBy?: string;
  describedBy?: string;
}

interface ModalManager {
  show: (content: ModalContent, opts?: { labelledBy?: string; describedBy?: string }) => number; // returns id
  hide: (id?: number) => void; // hide top or specific
  showAsync: (renderer: (resolve: (v?: unknown) => void) => React.ReactNode) => Promise<unknown>;
  stack: StackEntry[];
}

const ModalContext = createContext<ModalManager | undefined>(undefined);

let idCounter = 1;

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stack, setStack] = useState<StackEntry[]>([]);

  const show = useCallback((content: ModalContent, opts?: { labelledBy?: string; describedBy?: string }) => {
    const id = idCounter++;
    const entry: StackEntry = { id, content, labelledBy: opts?.labelledBy, describedBy: opts?.describedBy };
    setStack((s) => [...s, entry]);
    return id;
  }, []);

  const hide = useCallback((id?: number) => {
    setStack((s) => {
      if (s.length === 0) return s;
      if (typeof id === 'number') return s.filter((e) => e.id !== id);
      // pop top
      const copy = s.slice(0, -1);
      return copy;
    });
  }, []);

  const showAsync = useCallback((renderer: (resolve: (v?: unknown) => void) => React.ReactNode) => {
    return new Promise<unknown>((resolve) => {
      const wrapped = renderer((value?: unknown) => {
        // remove the entry associated with this resolve (top)
        hide();
        resolve(value);
      });
      show(wrapped);
    });
  }, [hide, show]);

  const value = useMemo(() => ({ show, hide, showAsync, stack }), [show, hide, showAsync, stack]);

  return (
    <ModalContext.Provider value={value}>
      {children}
      {/* Render the stack: each modal gets a stackIndex (0 = bottom). */}
      {stack.map((entry, idx) => (
        // Pass a close callback that the Modal will call after finishing its exit animation
        <Modal key={entry.id} isOpen={true} onRequestClose={() => hide(entry.id)} labelledBy={entry.labelledBy} describedBy={entry.describedBy} stackIndex={idx}>
          {entry.content}
        </Modal>
      ))}
    </ModalContext.Provider>
  );
};

export default ModalContext;
