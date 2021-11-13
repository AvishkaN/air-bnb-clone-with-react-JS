import React from 'react'
import styled from 'styled-components';

function Footer() {
    return (   
        <DIV>
            <p>© 2020 Airbnb clone! No rights reserved - this is a demo!</p>
            <p>Privacy · Terms · Sitemap · Company Details</p>

        </DIV>
    )
}


const DIV=styled.div`   
    width: 100%;   
    color: #000;  
    text-align: center;  
    padding: 20px;
    background-color: #f7f7f7;


    p{
        padding: 5px;
        font-size: 14px;
    }
`;      


export default Footer;
