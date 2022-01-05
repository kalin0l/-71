import React, { useEffect, useState } from 'react';
import './document.css'


const Document = ({title,content}) => {
   const [disabled,setDisabled] = useState(true);
    
    const handleScroll = (e) => {

        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        console.log(bottom)
        if(bottom){
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }
    

    return (
        <>
        <section>
            <div className='title'>{title}</div>
            <div className='content' onScroll={(e) => handleScroll(e)}>{content}</div>
            <button disabled={disabled}>I agree</button>
        </section>
        </>
    )
}
export default Document;