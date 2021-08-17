import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'

import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25vw',
        },
    },
    formControl: {
        marginTop: theme.spacing(-1),
        marginBottom: theme.spacing(2),
    }
}));

const AppointmentForm = () => {
    const appointmentFormStyle = useStyles();
    const [state, setState] = useState({
        appointmentName: '',
        place: ''
    })
    const [property, setProperty] = useState('');
    const handleChange = (event) => {
        setProperty(event.target.value);
    }
    return (
        <div>
            <form className={appointmentFormStyle.root} noValidate autoComplete="off">
                <TextField id="standard-basic" inputProps={{
                            style: {fontSize: '1em', fontFamily: 'Montserrat'}
                    }} placeholder="Property Name" variant="standard" helperText="What's the name of property?" />
                
                <TextField id="standard-basic" inputProps={{
                            style: {fontSize: '1em', fontFamily: 'Montserrat'}
                        }} placeholder="Location of property" variant="standard" helperText="Where's the address of the property?" />
                <FormControl className={appointmentFormStyle.formControl}>
                    <InputLabel htmlFor="property-type">Type of property</InputLabel>
                    <Select
                        native
                        value={property}
                        onChange={handleChange}
                        inputProps={{
                            name: 'property',
                            id: 'property-type'
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={"Land"}>Land</option>
                        <option value={"Building"}>Building</option>
                    </Select>
                </FormControl>
                <TextField id="standard-basic" inputProps={{
                            style: {fontSize: '1em', fontFamily: 'Montserrat'}
                        }} placeholder="Agent's Name" variant="standard" />
                <FormControl>
                    <Button variant="contained" color="primary">
                            Submit
                    </Button>
                </FormControl>
            </form>
        </div>
    );
}

export default AppointmentForm;
