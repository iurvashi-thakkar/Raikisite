import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import modalCard from '../Assets/Dummy card .png';

const ModalPopup = (isOpen) => {
    const [modalIsOpen, setModalIsOpen] = useState(true);

    const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });

    const closeModal = () => {
        setModalIsOpen(false);
        document.body.classList.remove('modal-open');
    }
    useEffect(() => {
        if (isOpen) {
            setModalIsOpen(true);
            document.body.classList.add('modal-open');
        }
    }, [isOpen]);


    function handleImgLoad(event) {
        const imgWidth = event.target.naturalWidth;
        const imgHeight = event.target.naturalHeight;
        setImgDimensions({ width: imgWidth, height: imgHeight });
    }
    const modalWidth = Math.min(imgDimensions.width, window.innerWidth * 0.9);

    return (
        <>
            <Modal isOpen={modalIsOpen} style={{
                content: {
                    // width: modalWidth,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    overflow: 'hidden',
                    position: 'relative',
                    width: modalWidth
                }
            }}>
                <img src={modalCard} onLoad={handleImgLoad} style={{ display: 'block', width: 'auto', height: 'auto', maxHeight: 'calc(100vh - 120px)' }}></img>
                <button onClick={closeModal} style={{
                    position: 'absolute', // Set the position to absolute
                    top: '0px', // Adjust the top property to position the button
                    right: '10px', // Adjust the right property to position the button
                    zIndex: '1' // Add a higher z-index to the button to position it above the modal content
                }}>X</button>
            </Modal>

        </>

    )
}

export default ModalPopup
