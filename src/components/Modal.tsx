import React, { useEffect, useRef, useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { createFocusTrap, FocusTrap as FocusTrapType } from 'focus-trap';

interface ModalProps {
  isOpen: boolean;
  // Called by Modal after the user requests to close (overlay click, close button, Escape).
  // Modal will play exit animation first and then call this to let the manager remove the entry.
  onRequestClose: () => void;
  children: React.ReactNode;
  labelledBy?: string;
  describedBy?: string;
  stackIndex?: number; // used by manager to set zIndex ordering
}

const ensurePortalRoot = () => {
  if (typeof document === 'undefined') return null;
  let root = document.getElementById('modal-root');
  if (!root) {
    root = document.createElement('div');
    root.id = 'modal-root';
    document.body.appendChild(root);
  }
  return root;
};



const Modal: React.FC<ModalProps> = ({ isOpen, onRequestClose, children, labelledBy, describedBy, stackIndex = 0 }) => {
  const portalRoot = ensurePortalRoot();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const trapRef = useRef<FocusTrapType | null>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);
  const [animState, setAnimState] = useState<'entering' | 'open' | 'exiting'>('entering');
  const ANIM_DURATION = 240; // ms, should match CSS

  // begin closing: set anim state to exiting, deactivate focus trap, then call onRequestClose after duration
  const beginClose = useCallback(() => {
    if (animState === 'exiting') return;
    setAnimState('exiting');
    // deactivate trap immediately
      if (trapRef.current) {
      try {
        trapRef.current.deactivate({ returnFocus: false });
      } catch {
        // ignore deactivation errors
      }
    }
    setTimeout(() => {
      try {
        onRequestClose();
      } catch {
        // swallow errors from manager
      }
    }, ANIM_DURATION);
  }, [animState, onRequestClose]);

  useEffect(() => {
    if (!isOpen || typeof document === 'undefined') return;

    let mounted = true;

    // set entering -> open after a tick so CSS transitions run
    requestAnimationFrame(() => {
      if (mounted) setAnimState('open');
    });

    // save last focused element
    lastActiveElementRef.current = document.activeElement as HTMLElement | null;

    // lock scroll
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        // begin exit animation, then call onRequestClose
        beginClose();
      }
    };

    // create and activate focus trap when modal opens
    if (contentRef.current) {
      const trap = createFocusTrap(contentRef.current, {
        fallbackFocus: () => contentRef.current || document.body,
        escapeDeactivates: false, // we handle Escape ourselves
        clickOutsideDeactivates: false, // overlay handles outside clicks
        returnFocusOnDeactivate: false,
      });
      trap.activate();
      trapRef.current = trap;
    }

    document.addEventListener('keydown', onKeyDown);
    return () => {
      mounted = false;
      document.removeEventListener('keydown', onKeyDown);
      // deactivate trap if present
      if (trapRef.current) {
        try {
          trapRef.current.deactivate({ returnFocus: false });
        } catch {
          /* ignore */
        }
      }
      trapRef.current = null;
      document.body.style.overflow = previousOverflow;
      // restore focus
      lastActiveElementRef.current?.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Scroll modal content to top when the modal finishes entering.
  useEffect(() => {
    if (animState !== 'open' || !contentRef.current) return;
    // run on next frame so DOM is fully painted and any inner nodes exist
    requestAnimationFrame(() => {
      try {
        // prefer a scrollable inner element with class `.modal-body` if present,
        // otherwise fall back to the modal content container itself.
        // TypeScript can be conservative about the element type returned from
        // querySelector. Cast to HTMLElement so we can access scrolling APIs.
        const scrollEl = (contentRef.current!.querySelector('.modal-body') ?? contentRef.current!) as HTMLElement;
        if (scrollEl && 'scrollTo' in scrollEl) {
          // smooth behavior on open per user request
          scrollEl.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        } else if (scrollEl) {
          // Fallback assignment with a cast to avoid strict-typing issues in some TS configs
          (scrollEl as any).scrollTop = 0;
        }
      } catch {
        // ignore any runtime errors
      }
    });
  }, [animState]);

  

  if (!isOpen || !portalRoot) return null;

  const zIndexBase = 1000;
  const zIndex = zIndexBase + stackIndex * 10;

  return ReactDOM.createPortal(
    <div
      className={`modal-overlay ${animState === 'open' ? 'open' : ''} ${animState === 'entering' ? 'entering' : ''} ${animState === 'exiting' ? 'exiting' : ''}`}
      onMouseDown={() => beginClose()}
      aria-hidden={false}
      data-modal-overlay
      role="presentation"
      style={{ zIndex }}
    >
      <div
        className={`modal-content ${animState === 'open' ? 'open' : ''} ${animState === 'entering' ? 'entering' : ''} ${animState === 'exiting' ? 'exiting' : ''}`}
        onMouseDown={(e) => e.stopPropagation()}
        ref={contentRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        aria-describedby={describedBy}
        tabIndex={-1}
        style={{ zIndex: zIndex + 1 }}
      >
        {children}
        <button className="modal-close" onClick={() => beginClose()} aria-label="Close">×</button>
      </div>
    </div>,
    portalRoot
  );
};

export default Modal;