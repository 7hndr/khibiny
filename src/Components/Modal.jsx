import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Info from './Info'
import Carousel from './Carousel'

function Modal(props) {
    const [fullScreenisOn, setfullScreenisOn] = useState(false)
    return (
        <div className='modal'>
            <Info title={props.title} desc={props.desc} data={props.data} />
            <Carousel photos={props.photos} fullScreenisOn={fullScreenisOn} setfullScreenisOn={setfullScreenisOn} />
        </div>
    )
}

Modal.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    photos: PropTypes.array,
    id: PropTypes.number
}

export default Modal