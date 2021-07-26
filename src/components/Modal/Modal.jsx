import "./Modal.css";

const Modal = ({ url, setSelectedURL }) => {
  return (
    // clicking outside the modal closes it
    <div className="modal-wrapper" onClick={() => setSelectedURL(null)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={url} alt="" />
      </div>
    </div>
  );
};

export default Modal;
