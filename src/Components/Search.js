import React from 'react'
import styled from 'styled-components';
import  './Search.css';      

import PeopleIcon from '@mui/icons-material/People';
import {Button} from '@mui/material';


import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from "react-date-range";
import { useState } from 'react';
import { useHistory } from 'react-router-dom/';



function Search() {
    
    const[startDate,setStartDate]=useState(new Date());
    const[endDate,setEndDate]=useState(new Date());
    const history=useHistory();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
      };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }


    return (   
        <DIV>
            <div className="search">
                <DateRangePicker className="DateRangePicker" ranges={[selectionRange]} onChange={handleSelect}/>
                <h2>
                    Number of guests <PeopleIcon />
                </h2>
                <input min={0} defaultValue={2} type="number" />
                <Button className="button"
                    onClick={()=>history.push('/search')}
                >Search Airbnb</Button>
            </div>
        </DIV>
    )
}


const DIV=styled.div`   
    /* width: 100%;   
    background: green;
    
    .DateRangePicker{
        background: red;   
        width: 100%;    
    } */
`;            


export default Search;
