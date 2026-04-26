import { Link } from "react-router-dom";
import { LOGIN } from "../../services/consts";
import { createPortal } from "react-dom";
import { useState } from "react";

function ExitModal({ setOpen }) {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setOpen(false);
        }, 300);
    };

    return createPortal(
        <section className={`exit-modal ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
            <div className={`modal-back ${isClosing ? 'closing' : ''}`} onClick={(e) => e.stopPropagation()}>
                <div className="m-ex-title text-heading-lg">
                    Вы точно хотите выйти?
                </div>
                <div className="exit-buttons">
                    <Link to={LOGIN} type="button" className='exit-button text-heading-lg'>Да</Link>
                    <button className='exit-button-menu text-heading-lg' onClick={handleClose}>Нет</button>
                </div>
            </div>
        </section>,
        document.body
    )
}

export default ExitModal;