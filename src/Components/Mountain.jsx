import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Modal from './Modal'
import BackBtn from './BackBtn'
// import Fade from 'react-reveal/Fade'

function Mountain(props) {
    const [menuIsVisible, setMenuIsVisible] = useState(true)
    const [modalIsOpen, setmodalIsOpen] = useState(false)
    function openModal() {
        setmodalIsOpen(true)
    }
    function closeModal() {
        setmodalIsOpen(false)
    }
    let iconS = props.position

    return (
        <div>
            {menuIsVisible && (
                <div className='mountainItem' style={iconS} onClick={openModal}>
                    <img src={props.icon} alt={props.title} />
                    <h1 className='mountainName'>{props.title}</h1>
                </div >
            )}
            <CSSTransition
                in={modalIsOpen}
                timeout={250}
                classNames="option"
                unmountOnExit
                onEnter={() => setMenuIsVisible(false)}
                onExited={() => setMenuIsVisible(true)}
            >
                <div>
                    <Modal {...props} />
                    <button className='backBtn' onClick={(e) => { e.preventDefault(); closeModal() }}>
                        <BackBtn />
                    </button>
                </div>
            </CSSTransition>
        </div>
    )
}


export default Mountain
