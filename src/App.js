import React from "react";
import {fetchData} from './Api';
import styles from './App.module.css';
import {Cards,CountryPicker,Chart} from "./components";
import Corona from '../src/coronavirus-logo/Corona.jpg';
class App extends React.Component
{
  state={
    data:{},
    country:"",
  }
  async componentDidMount()
  {
    const fetchedData=await fetchData();
    this.setState({data:fetchedData
    })
  }
  handleCountryChange= async(country)=>
  {
   const fetchedData= await fetchData(country);
   this.setState({data:fetchedData,country:country})
  }
  render()
  {
    const { data, country } = this.state
    return(
      <div className={styles.container} >
      <img className={styles.image} src={Corona} alt="COVID-19" />
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    )
  }
}

export default App;