import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputOption from './InputOption'
import useInput from '../../Hooks/useInput'
import useOption from '../../Hooks/useOption'

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
    addButton : {
        width:"90%",
        background: 'linear-gradient(45deg, #444444 30%, #211b1b 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgb(13 12 12 / 30%)',
        color: 'white',
        height: 48,
        padding: '0 30px',        
    },
    bigVotes : {
        width:"300px"
    },
    Votes : {
        width:"60%"
    }
}));
function Vote(props) {
    const classes = useStyles()
    const [voteCount, setVoteCount] = React.useState(0);

    const inputTitle = useInput("");
    const inputUpperVote = useInput("");
    const inputLowerVote = useInput("");
    const inputDescription = useInput("");

    const inputOption  = []

    inputOption.push(useInput(""));
    inputOption.push(useInput(""));    
    // let [, ] = React.useState(["",""]);

    function createVote( ){
        console.log(inputTitle.value)
        console.log(inputUpperVote.value)
        console.log(inputLowerVote.value)
        console.log(inputDescription.value)
        console.log(inputOption)
    }

    const getOptionData = () =>{
        console.log("option")
    }

    function addVotes(){
        const count = voteCount
        let Votes =[];

        for(var i=0;i<count;i++){
            Votes.push(<InputOption key={"inputOpt"+(i+2)} className={classes} voteCount={i+2} value={""} />)
        }
        console.log(Votes)
        return Votes
    }
    return <div className={classes.root}>
      <TextField id="inputTitle" label="제목" className={classes.bigVotes} {...inputTitle}></TextField>
      <TextField id="inputUpperVote" disabled label="상위 설문" className={classes.Votes} {...inputUpperVote}></TextField>
      <TextField id="inputLowerVote" disabled label="하위 설문" className={classes.Votes} {...inputLowerVote}></TextField>
      <TextField id="inputDescription" label="내용" className={classes.bigVotes} {...inputDescription} ></TextField>
      <InputOption className={classes} key={"inputOpt"+(0)} voteCount={0} change={getOptionData} />
      <InputOption className={classes} key={"inputOpt"+(1)} voteCount={1} change={getOptionData} />
      {addVotes()}
      {/* <TextField id="filled-basic" label="내용" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      <Button variant="contained" className={classes.addButton} onClick={()=>setVoteCount(voteCount + 1)} >보기 추가</Button>
      <Button variant="contained" className={classes.addButton} onClick={()=>createVote( )} >제출</Button>
    </div>
}
export default Vote;
