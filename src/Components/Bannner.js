import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import {Button} from '@mui/material';
import Search from '../Components/Search';
// import Background from './../assets/banner-background.webp';

import './Bannner.css';   

function Home() {

    const[showSearch,setShowSearch]=useState(false);


    return (   
        <Banner className="banner">
            <div className="banner__search"> 
                  {showSearch && <Search/>}
                  <Button variant='outlined' onClick={()=>setShowSearch(!showSearch)}>{showSearch ? "hide":"Search Date"}</Button>
            </div>
            <div className="banner__info">
                <h1>                
                Get out and stretch your imagination
                </h1>
                <h5>
                Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <button>
                    Explore Nerby 
                </button>
            </div>
        </Banner>
    )
}


const Banner=styled.div`   
    width: 100%;             

    .banner{

        &__search{ 
            Button{
                background: #fff;   
                outline: none;   
                /* border :none;     */
                width: 100%;     
                display: flex;
                align-items: center;   
                &:active{                
                    /* background: var(--color-primary); */

                }
            }
        }

        &__info{
            color: #fff;          
            background-color:#000;
            padding-top: 25vh;
            padding-left: 50px;
            padding-right: 50px;
            padding-bottom:40px;   
            width: 30%;     
 

            h5{
                margin-top: 20px;
                font-weight: 300;  
            }
            
            button{ 
                background-color: var(--color-primary);
                margin-top: 10px;         
            }


        }
    }
`;      


export default Home;
