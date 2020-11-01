import React, { useState } from 'react'
import Modal from './Modal'

export default function liItem(props) {
    const [modalIsOpen, setmodalIsOpen] = useState(false)
    return (

        modalIsOpen ? (
            <Modal
                title={props.val.name}
                desc={props.val.description}
                photos={props.val.photos}
                id={props.val.id}
                key={props.val.id}
                data={props.data} />
        ) : (
                props.matchedItem !== props.val.name ? (
                    <li onClick={(e) => {
                        e.preventDefault()
                        setmodalIsOpen(true)
                    }}>
                        <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.55945 29L20.8333 1.94032L37.1071 29H4.55945Z" stroke="#87BDBA" strokeWidth="2" />
                            <path d="M21.7784 29L33.9283 8.79745L46.0782 29H21.7784Z" stroke="#87BDBA" strokeWidth="2" />
                        </svg>
                    </li>
                ) : (
                        <li>
                            {/* Active mountain */}
                            <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.8333 0L38.8754 30H2.79113L20.8333 0Z" fill="#87BDBA" />
                                <path d="M33.9283 6.85713L47.8465 30H20.0101L33.9283 6.85713Z" fill="#87BDBA" />
                            </svg>
                        </li>
                    )
            )





    )
}
