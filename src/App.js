import React from 'react'
import data from './Data.json'
import Mountain from './Components/Mountain'
import { CSSTransition } from 'react-transition-group'

const list = data.list

function App() {
    return (
        <CSSTransition
            in={true}
            appear={true}
            timeout={300}
            classNames='option'>
            <main>
                {Object.keys(list).map((mountain) => (
                    <Mountain
                        key={list[mountain].id}
                        id={list[mountain].id}
                        title={list[mountain].name}
                        desc={list[mountain].description}
                        photos={list[mountain].photos}
                        icon={list[mountain].icon}
                        position={list[mountain].position}
                        data={list}
                    />
                ))}
            </main>
        </CSSTransition>
    )
}
export default App
