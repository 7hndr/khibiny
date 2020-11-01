import React from 'react'
import LiItem from './LiItem'

export default function Info(props) {

    return (
        <div className='info'>
            <h1 className='aboutTitle'>{props.title}</h1>
            <p className='description'>{props.desc}</p>
            <ul className='switchList'>

                {Object.keys(props.data).map((item) => (
                    <LiItem data={props.data} key={item} val={props.data[item]} matchedItem={props.title} />
                ))}

            </ul>
        </div>
    )
}
