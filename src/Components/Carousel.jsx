import React, { useState } from 'react'
import FullScreenBtn from './FullScreenBtn'
import { CSSTransition } from 'react-transition-group'


export default function Carousel(props) {
    const [fullScreenisOn, setfullScreenisOn] = useState(false)
    function fullScreenToogle() {
        setfullScreenisOn(!fullScreenisOn)
        if (fullScreenisOn) {
            document.querySelector('.carousel').style.width = '110rem'
            document.querySelector('.carousel').style.zIndex = '10'
        } else {
            document.querySelector('.carousel').style.width = '192rem'
            document.querySelector('.carousel').style.zIndex = '100'
        }
    }
    return (
        <CSSTransition
            in={true}
            appear={true}
            timeout={3000}
            enter={true}
            exit={true}
            unmountOnExit={true}
            classNames="option"
        >
            <div className='carousel'>
                <div className='carouselTrack'>
                    {props.photos.map((link) => (
                        <img key={props.photos.indexOf(link)} src={link} alt={props.title} />
                    ))
                    }
                </div>
                <div className='carouselDots'>
                    {props.photos.map((link) => (
                        <button className={(props.photos.indexOf(link) == 0) ? 'activeDot carouselDotsItem' : 'carouselDotsItem'} key={props.photos.indexOf(link)} onClick={(e) => {
                            e.preventDefault()
                            let offset = 0
                            const slideIndex = props.photos.indexOf(link)
                            const dots = document.querySelectorAll('.carouselDotsItem')
                            dots.forEach(item => item.classList.remove('activeDot'))
                            dots[slideIndex].classList.add('activeDot')
                            if (slideIndex === 0) {
                                offset = 0
                            } else {
                                offset = 192 * slideIndex
                            }
                            document.querySelector('.carouselTrack').style.transform = `translateX(${-offset}rem)`
                        }} />
                    ))}
                </div>
                <button className='CarouselFullScreenToggler' onClick={fullScreenToogle}>
                    <FullScreenBtn fullScreenisOn={fullScreenisOn} />
                </button>
            </div>
        </CSSTransition>
    )
}
