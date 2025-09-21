import style from "./Modal.module.scss";
import { useEffect, useState, useCallback } from "react";
import { PropTypes } from "prop-types";
import clsx from "clsx";

function Modal({
  isOpen,
  onAfterOpen,
  onAfterClose,
  onRequestClose,
  closeTimeoutMS,
  overlayClassName,
  className,
  bodyOpenClassName,
  htmlOpenClassName,
  shouldCloseOnOverlayClick,
  shouldCloseOnEsc,
  children,
}) {
  const [isMounted, setIsMounted] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      setTimeout(() => setIsVisible(true), 10);

      if (onAfterOpen) {
        setTimeout(() => {
          onAfterOpen();
        }, closeTimeoutMS);
      }

      document.body.classList.add(bodyOpenClassName);
      document.documentElement.classList.add(htmlOpenClassName);
    } else if (isMounted) {
      setIsVisible(false);

      setTimeout(() => {
        setIsMounted(false);
        onAfterClose?.();
      }, closeTimeoutMS);

      document.body.classList.remove(bodyOpenClassName);
      document.documentElement.classList.remove(htmlOpenClassName);
    }
  }, [
    isOpen,
    bodyOpenClassName,
    closeTimeoutMS,
    htmlOpenClassName,
    isMounted,
    onAfterClose,
    onAfterOpen,
  ]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape" && shouldCloseOnEsc) {
        onRequestClose?.();
      }
    },
    [shouldCloseOnEsc, onRequestClose]
  );

  useEffect(() => {
    if (isMounted) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMounted, handleKeyDown]);

  if (!isMounted) return null;

  return (
    <div
      className={clsx(
        style.modalOverlay,
        isVisible ? style.open : style.close,
        overlayClassName
      )}
      onClick={(e) => {
        if (shouldCloseOnOverlayClick && e.target === e.currentTarget) {
          onRequestClose?.();
        }
      }}
    >
      <div
        className={clsx(
          style.modalContent,
          isVisible ? style.open : style.close,
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onAfterOpen: PropTypes.func,
  onAfterClose: PropTypes.func,
  onRequestClose: PropTypes.func,
  closeTimeoutMS: PropTypes.number,
  overlayClassName: PropTypes.string,
  className: PropTypes.string,
  bodyOpenClassName: PropTypes.string,
  htmlOpenClassName: PropTypes.string,
  shouldCloseOnOverlayClick: PropTypes.bool,
  shouldCloseOnEsc: PropTypes.bool,
  children: PropTypes.node,
};

export default Modal;
