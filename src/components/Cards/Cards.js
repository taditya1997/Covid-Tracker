import React from 'react';
import styles from './Cards.module.css';
import CountUp from "react-countup"; 
import cx from "classnames";
import {Card,CardContent, Typography, Grid} from '@material-ui/core'

const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => 
{   
    if(!confirmed)
    {
        return 'Loading...';
    }
    return (
        
        <div className={styles.container}>
        <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
        <CardContent>
        <Typography color="textSecondary" gutterBottom>Infected</Typography>
        <Typography variant="h5"><CountUp start={0} end={confirmed.value} duration={2.5} separator=","/></Typography> 
        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography> 
        <Typography variant="body2">Number Of Active Case Of Covid-19</Typography>
        </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovery)}>
        <CardContent>
        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
        <Typography variant="h5"><CountUp start={0} end={recovered.value} duration={2.8} separator=","/></Typography> 
        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
        <Typography variant="body2">Number Of Recovered People from Covid-19</Typography>
        </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.death)}>
        <CardContent>
        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
        <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={2.9} separator=","/></Typography> 
        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
        <Typography variant="body2">Number Of Deaths from Covid-19</Typography>
        </CardContent>
        </Grid>
        </Grid>
        </div>
    );
};
 
export default Cards;