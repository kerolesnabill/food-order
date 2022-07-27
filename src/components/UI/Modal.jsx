import ReactDOM from "react-dom";

const Backdrop = ({ onClose }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-40 bg-[#000000bf]"
      onClick={onClose}
    />
  );
};

const ModalOverlay = ({ children }) => {
  return (
    <div className="fixed block top-[20vh] left-[5%] w-11/12 bg-neutral-700 p-4 rounded-2xl shadow-2xl shadow-neutral-500 z-50 transition-all ease-out md:w-[40rem] md:left-[calc(50%-20rem)]">
      <div>{children}</div>
    </div>
  );
};

const Modal = ({ onClose, children }) => {
  const ElementID = document.getElementById("overlays");

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, ElementID)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        ElementID
      )}
    </>
  );
};

export default Modal;
