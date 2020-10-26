import React from 'react'
import {Spinner} from 'react-bootstrap'

const Loader = () => {
    return (
        <Spinner animation='border' role='status' style={{width:'100px',height:'100px',margin:'auto',display:'block'}}>
            <soan class='sr-only'></soan>
        </Spinner>
    )
}

export default Loader
