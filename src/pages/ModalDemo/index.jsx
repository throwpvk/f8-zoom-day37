import style from "./ModalDemo.module.scss";
import Modal from "../../components/Modal";
import { useState } from "react";

function ModalDemo() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [animOpen, setAnimOpen] = useState(false);
  const [noOverlayCloseOpen, setNoOverlayCloseOpen] = useState(false);
  const [noEscCloseOpen, setNoEscCloseOpen] = useState(false);
  const [customClassOpen, setCustomClassOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Modal Demo Page</h1>

      {/* 1. Basic Modal */}
      <button onClick={() => setBasicOpen(true)}>Open Basic Modal</button>
      <Modal
        isOpen={basicOpen}
        onRequestClose={() => setBasicOpen(false)}
        closeTimeoutMS={0}
        overlayClassName={style.overlay}
        className={style.content}
        bodyOpenClassName="modal-open"
        htmlOpenClassName="modal-open"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <h2>Basic Modal</h2>
        <p>Đây là modal cơ bản.</p>
        <button onClick={() => setBasicOpen(false)}>Đóng</button>
      </Modal>

      {/* 2. Modal với Animation */}
      <button onClick={() => setAnimOpen(true)}>Open Animated Modal</button>
      <Modal
        isOpen={animOpen}
        onRequestClose={() => setAnimOpen(false)}
        closeTimeoutMS={300}
        overlayClassName={style.overlay}
        className={style.content}
        bodyOpenClassName="modal-open"
        htmlOpenClassName="modal-open"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <h2>Animated Modal</h2>
        <p>Đây là modal có animation (300ms).</p>
        <button onClick={() => setAnimOpen(false)}>Đóng</button>
      </Modal>

      {/* 3. Modal không đóng khi click overlay */}
      <button onClick={() => setNoOverlayCloseOpen(true)}>
        Open Modal (No Overlay Close)
      </button>
      <Modal
        isOpen={noOverlayCloseOpen}
        onRequestClose={() => setNoOverlayCloseOpen(false)}
        closeTimeoutMS={300}
        overlayClassName={style.overlay}
        className={style.content}
        bodyOpenClassName="modal-open"
        htmlOpenClassName="modal-open"
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={true}
      >
        <h2>No Overlay Close Modal</h2>
        <p>Click overlay không đóng modal này.</p>
        <button onClick={() => setNoOverlayCloseOpen(false)}>Đóng</button>
      </Modal>

      {/* 4. Modal không đóng khi nhấn Esc */}
      <button onClick={() => setNoEscCloseOpen(true)}>
        Open Modal (No Esc Close)
      </button>
      <Modal
        isOpen={noEscCloseOpen}
        onRequestClose={() => setNoEscCloseOpen(false)}
        closeTimeoutMS={300}
        overlayClassName={style.overlay}
        className={style.content}
        bodyOpenClassName="modal-open"
        htmlOpenClassName="modal-open"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={false}
      >
        <h2>No Esc Close Modal</h2>
        <p>Nhấn phím Escape sẽ không đóng modal này.</p>
        <button onClick={() => setNoEscCloseOpen(false)}>Đóng</button>
      </Modal>

      {/* 5. Modal với custom className */}
      <button onClick={() => setCustomClassOpen(true)}>
        Open Custom Styled Modal
      </button>
      <Modal
        isOpen={customClassOpen}
        onRequestClose={() => setCustomClassOpen(false)}
        closeTimeoutMS={300}
        overlayClassName={style.customOverlay}
        className={style.customContent}
        bodyOpenClassName="modal-open"
        htmlOpenClassName="modal-open"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <h2>Custom Styled Modal</h2>
        <p>Modal này có style riêng bằng custom className.</p>
        <button onClick={() => setCustomClassOpen(false)}>Đóng</button>
      </Modal>

      {/* 6. Modal với callbacks */}
      <button onClick={() => setCallbackOpen(true)}>Open Callback Modal</button>
      <Modal
        isOpen={callbackOpen}
        onAfterOpen={() => console.log("Modal đã mở")}
        onAfterClose={() => console.log("Modal đã đóng")}
        onRequestClose={() => setCallbackOpen(false)}
        closeTimeoutMS={300}
        overlayClassName={style.overlay}
        className={style.content}
        bodyOpenClassName="modal-open"
        htmlOpenClassName="modal-open"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <h2>Callback Modal</h2>
        <p>Mở/đóng modal này sẽ log ra console.</p>
        <button onClick={() => setCallbackOpen(false)}>Đóng</button>
      </Modal>
    </div>
  );
}

export default ModalDemo;
