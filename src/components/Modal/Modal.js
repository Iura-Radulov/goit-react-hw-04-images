import { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Madal.module.css';

const Modal = ({ closeModal, largeImage }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };
  return (
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>
        <img className={s.Image} src={largeImage} alt="choosed foto" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
};
export default Modal;
