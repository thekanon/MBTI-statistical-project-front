import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Input } from '@material-ui/core';
import useInput from './../../Hooks/useInput'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            display: "Grid",
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
        },
    },    
    Votes : {
        width:"60%"
    }
}));
function InputOption(props) {
    const classes = useStyles();
    const inputOption = useInput("");
    console.log(inputOption)
    return <div className={classes.root}>
        <TextField id="standard-basic" label={"보기"+(props.voteCount+1)} className={classes.Votes} {...props} {...inputOption} ></TextField>
    </div>
}

export default InputOption;
