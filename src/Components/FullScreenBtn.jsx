import React from 'react'

export default function FullScreenBtn(props) {
    return (
        <>
            {
                props.fullScreenisOn ? (
                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M53 29L41 29L41 17" stroke="white" strokeWidth="6" strokeLinejoin="round" />
                        <path d="M17 41L29 41L29 53" stroke="white" strokeWidth="6" strokeLinejoin="round" />
                        <path d="M17 29L29 29L29 17" stroke="white" strokeWidth="6" strokeLinejoin="round" />
                        <path d="M53 41L41 41L41 53" stroke="white" strokeWidth="6" strokeLinejoin="round" />
                    </svg>
                ) : (
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0083 3H26.1882V13.1799" stroke="white" strokeWidth="6" strokeLinejoin="round" />
                            <path d="M13.1799 3H3.00006V13.1799" stroke="white" strokeWidth="6" strokeLinejoin="round" />
                            <path d="M16.0081 26.1875L26.1879 26.1875L26.1879 16.0076" stroke="white" strokeWidth="6" strokeLinejoin="round" />
                            <path d="M13.1797 26.1875L2.99981 26.1875L2.99981 16.0076" stroke="white" strokeWidth="6" strokeLinejoin="round" />
                        </svg>
                    )
            }
        </>
    )
}
