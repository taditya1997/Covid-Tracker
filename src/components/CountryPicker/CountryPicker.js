import React, { useEffect,useState } from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../Api';

const CountryPicker = ({handleCountryChange}) =>
{

    const[fetchedCountry,setFetchedCountry]=useState([]);
    useEffect(()=>
    {
        const fetchedCountries= async()=>
        {
            setFetchedCountry(await fetchCountries());
        }
        fetchedCountries();
    },[setFetchedCountry])
    console.log(fetchedCountry);
    return (
        
        <FormControl >
         <NativeSelect defaultValue="" onChange={(event)=>handleCountryChange(event.target.value)}>
         <option value="global">
         Global
         </option>
         {fetchedCountry.map((country,i)=><option key={i} value={country}>{country}</option>)}
         </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;