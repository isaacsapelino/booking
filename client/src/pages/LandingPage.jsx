import React from 'react';
import AppointmentForm from '../containers/AppointmentForm';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';
import background from '../../assets/img/background.png';

const box = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: '1em',
}

const appointmentBox = {
    paddingTop: '1em',
    marginTop: '2em',
    width: '35em',
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: '1em',
    height: '30em',
}

const landing = {
    height: '100vh',
    background: `url(${background}) fixed center`,
    backgroundSize: 'cover',
}

const theme = createTheme();
theme.typography.h2 = {
    fontFamily: 'Roboto',
    fontSize: '3em',
}

theme.typography.body1 = {
    fontFamily: 'Montserrat',
    fontWeight: 50,
    fontSize: '1.2em',
}

const LandingPage = () => {
    return (    
        <div style={landing}>
            <div style={box}>
                <div style={appointmentBox}>
                    <ThemeProvider theme={theme}>
                        <Typography variant="h2">Appointment</Typography>
                        <Typography variant="body1">Set your appointments here</Typography>
                    </ThemeProvider>
                    <AppointmentForm />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
