import React, { Fragment, useEffect } from 'react';
import backgroundImage from '../../assets/img/background.png';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppointmentForm
} from '../containers';

import { connect } from 'react-redux';

const landingLayouts = makeStyles( (theme) => ({
    root: {
        '& > *': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '3em',
        }
    },
}));

function LandingPage({agents, loadAgents}) {
    
    // if (Object.keys(agents).length === 0) {
    //     useEffect(() => {
    //         loadAgents();
    //         console.log(agents);
    //          }, [Object.keys(agents).length === 0]);
    // }

    useEffect(() => {
        console.log("Executed");
        loadAgents();
    }, [])

    const classes = landingLayouts();

    const landingStyles = {
        background: `url(${backgroundImage}) fixed center`,
        backgroundSize: 'cover',
        height: '105vh',
    }

    return (
        <Fragment>
            <div style={landingStyles} >
                <div className={classes.root}>
                    <Container maxWidth="lg">
                        <AppointmentForm />
                    </Container>       
                </div>         
            </div>
        </Fragment>
    )
}

const mapState = (state) => ({
    agents: state.Agents,
})

const mapDispatch = (dispatch) => ({
    loadAgents: dispatch.Agents.loadAgents,
})

export default connect(mapState, mapDispatch)(LandingPage);