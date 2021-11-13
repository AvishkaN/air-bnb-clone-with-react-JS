import React from 'react'
import styled from 'styled-components';
import Logo from '../assets/airBnb-logo.png';

import Search from '@mui/icons-material/Search';        
import LanguageIcon from '@mui/icons-material/Language';  
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from 'react-router-dom';
import {Avatar} from '@mui/material';

function Header() {
    return (  
        <HeaderDIV>     
            <div className="header__left">
                <Link to="/">
                <img src={Logo} alt="" />
                </Link>
            </div>

            <div className="header__center">
                <input type="text" />
                <Search/>   
            </div>

            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon/>
                <ExpandMoreIcon/> 
                <Avatar/>
            </div>
        </HeaderDIV>
    )
}

const HeaderDIV=styled.div`
    display: flex;   
    width: 100%;      
    align-items: center;
    justify-content: space-between;  
    position: sticky;
    z-index:1000;
    top: 0;


    .header{   
        &__left{
            img{
                height: 100px;  
                margin-left: 20px;
                object-fit: contain;   
            }
        }

        &__center{
            display: flex;
            flex: 1;     
            align-items: center; 
            max-width: fit-content;
            padding: 10px;
            border: 1px solid lightgray; 
            border-radius: 999px;
            
            input{   
                padding: 10px;
                border: none;  

                &:focus{        
                    outline: none;   
                }
            }
        } 
        &__right{   

            display: flex;
            align-items: center; 
            justify-content: space-between;
            margin-right: 40px;          

            &>*{
                margin-right: 5px;   
                cursor: pointer;       
            }
        }
    }
`;      



export default Header;
