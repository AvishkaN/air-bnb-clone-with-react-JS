import React from 'react'
import styled from 'styled-components';

function CardEx({src,title,description,price}) {
    return (   
        <CARD>
                <img src={src} alt="" />
                <div className="card__info">
                    <h2>{title}</h2>
                    <h4>{description}</h4>
                    <h3>{price}</h3>
                </div>
        </CARD>
    )
}


const CARD=styled.div`   
    width: 50%;        
    margin: 50px;           
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 6px 18px -9px rgba(0, 0, 0, 0.75);
    transition: transform 100ms ease-in;
    cursor: pointer;

    &:hover {
        transform: scale(1.07);
    }

    img{
        height: 200px;
        min-width: 300px;   
        width: 100%;     
        overflow-y: hidden;
    }

    .card__info{
        margin-top: -9px;
        border-radius: 10px;
        padding: 20px;
        padding-top: 20px;
        border: 1;
        h2{
            font-size: 18px;
            font-weight: 600;
        }
        h4{
            font-size: 14px;
            font-weight: 300;   
            margin-top: 8px;
            margin-bottom: 8px;
        }
    }
`;      


export default CardEx;
