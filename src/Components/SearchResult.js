import React from 'react'
import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarIcon from "@mui/icons-material/Star";



function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total
}) {
    return (   
        <DIV>
            <img src={img} alt="" />
            <FavoriteBorderIcon className="heart"/>

            <div className="searchResult__info">
                <div className="searchResult__infoTop">
                        <p>{location}</p>
                        <h3>{title}</h3>
                        <p>____</p>
                        <p>{description}</p>
                </div>
                <div className="searchResult__infoBottom">

                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__starr" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>

                    <div className='searchResults__price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>

                </div>
            </div>

        </DIV>
    )
}


const DIV=styled.div`   
    width: 80%;   
    display: flex; 
    border-bottom: 1px solid lightgray;
    cursor: pointer;
    transition: opacity .2s; 
    position: relative;
    margin-top: 20px; 

    &:hover {
    opacity: 0.8;
    }

    img{
            height: 200px;
            width: 300px;
            border-radius: 10px;
            overflow: hidden;
    }

    .heart{
        position: absolute;
        top: 1px;
        right: 8px;   

        &:hover{
            fill: red; 
        }
    }

    .searchResult__info{
        margin-left: 10px;
    }

    .searchResult{
        &__infoBottom{
            margin-top: 40px;    
            display: flex;
            justify-content: space-between;
            .searchResult__stars{
                display: flex;    
                align-items:center; 

                .searchResult__starr{
                    color: red;     
                }
            }
            &__price{

            }

        }
    }

    .searchResults__price{
        h2{    
            font-size: 20px;    

        }
    }
`;      


export default SearchResult;
