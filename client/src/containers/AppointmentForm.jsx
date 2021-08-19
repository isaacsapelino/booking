import React, { Fragment, useState, useEffect } from 'react';
import {
    Paper,
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    FormHelperText,
    Divider,
    Box,
    InputAdornment,
    Grid,
} from '@material-ui/core';
import {
    Business,
    LocationCity,
    AccountCircle,
    Phone,
} from '@material-ui/icons';
import {
    KeyboardDatePicker,
    KeyboardTimePicker,
} from "@material-ui/pickers";
import { makeStyles, } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection:'column',
            padding: theme.spacing(3),
            paddingBottom: theme.spacing(5),
            width: theme.spacing(60),
        },
        '& h1' : {
            fontFamily: 'Roboto',
            marginBottom: theme.spacing(0),
        },
        '& p': {
            fontFamily: 'Montserrat',
        },
    },
    formControl: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
    },
    input: {
        root: {
            fontFamily: 'Montserrat',
        }
    },
    dateTime: {
        root: {
            flexGrow: 1,
        }
    }
}))

const validateEmail = (email) => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email.match(regexEmail) ? true : false;
}

function AppointmentForm({agents, books, loadAgents, setBooking, getBookings}) {
    const classes = useStyles();
    const [property, setProperty] = useState('');
    const [propName, setPropName] = useState('');
    const [propLoc, setPropLoc] = useState('');

    const [selectedDate, setDate] = useState(new Date());
    const [selectedTime, setTime] = useState(new Date());
    const [agentName, setAgentName] = useState('');
    const [agentGroup, setAgentGroup] = useState([]);

    useEffect(() => {
        getBookings();
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        const states = {
            propertyName: propName,
            propertyLocation: propLoc,
            property,
            agName: agentName,
            agentsName: agentGroup,
            appointmentDate: selectedDate,
            appointmentTime: selectedTime,
        }
        console.log(states);
        setBooking(states);
    }

    const handleChange = (event) => {
        setProperty(event.target.value);
    }

    const handleAgentGroup = (event) => {
        setAgentGroup(event.target.value);
        
    }

    return (
        <Fragment>
            <div className={classes.root}>
                <Paper elevation={2}>
                    <h1>Appointment</h1>
                    <p>Set your appointments here</p>
                    <Box width={400} mt={4}>
                        <TextField id="standard-basic" label="Property Name" fullWidth inputProps={{
                            
                        }} className={classes.textField} InputProps={{ 
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Business />
                                </InputAdornment>
                            ),
                        }} value={propName} onChange={(event) => setPropName(event.target.value)} />
                    </Box>
                    <Box width={400} mt={1} >
                        <TextField id="standard-basic" label="Property Address" fullWidth InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LocationCity />
                                </InputAdornment>
                            ),
                        }} value={propLoc} onChange={(event) => setPropLoc(event.target.value)} />
                    </Box>
                    <Box width={400} mt={1} mb={1}>
                        <FormControl className={classes.formControl} fullWidth>
                            <InputLabel id="demo-simple-select-label">Type of property</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={property}
                            onChange={handleChange}
                            >
                                <MenuItem value={'Land'}>Land</MenuItem>
                                <MenuItem value={'Building'}>Building</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    
                    <Box width={400}>
                        <TextField id="standard-basic" label="Agent's Name" fullWidth value={agentName} onChange={(event) => setAgentName(event.target.value)} InputProps={{
                            startAdornment: ((
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ))
                        }} />
                    </Box>
                    <Box width={400} mt={1}>
                        <TextField id="standard-basic" label="Phone Number or Email" fullWidth InputProps={{
                            startAdornment: ((
                                <InputAdornment position="start">
                                    <Phone/>
                                </InputAdornment>
                            ))
                        }} />
                    </Box>
                    <Box width={400}>
                        <FormControl className={classes.formControl} fullWidth>
                            <InputLabel id="demo-simple-select-label">Agent's Group</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={agentGroup}
                            onChange={handleAgentGroup}
                            >
                                {agents.success === true ? agents.payload.map(x => (
                                    <MenuItem key={x.id} value={x.id}>{x.agentsName}</MenuItem>
                                )) : console.log(agents.message) }
                            </Select>
                        </FormControl>
                    </Box>
                    <div>
                        <Grid container spacing={6} >
                            <Grid item xs={6}>
                                <Box width={175}>
                                    <KeyboardDatePicker
                                        placeholder="01/01/2021"
                                        clearable
                                        label="Set date"
                                        format="MM/dd/yyyy"
                                        value={selectedDate}
                                        onChange={date => setDate(date)}
                                        minDate={new Date()}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={1}>
                                <Box width={175}>
                                    <KeyboardTimePicker
                                        placeholder="08:00 PM"
                                        clearable
                                        label="Set time"
                                        mask="__:__ _M"
                                        value={selectedTime}
                                        onChange={time => setTime(time)}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                    <Box width={400} mt={4}>
                        <Button variant="contained" color="primary" fullWidth onClick={handleClick}>Submit</Button>
                    </Box>                    
                </Paper>
            </div>
        </Fragment>
    )
}

const mapState = (state) => ({
    agents: state.Agents,
    books: state.Book,
})

const mapDispatch = (dispatch) => ({
    loadAgents: dispatch.Agents.loadAgents,
    setBooking: dispatch.Book.setBooking,
    getBookings: dispatch.Book.getBookings,
})

export default connect(mapState,mapDispatch)(AppointmentForm);
