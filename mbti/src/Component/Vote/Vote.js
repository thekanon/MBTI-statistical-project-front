
import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

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

    function addVotes(){
        const count = voteCount
        let Votes =[];
    
        for(var i=0;i<count;i++){
            Votes.push( <TextField id="standard-basic" label={"보기"+(i+3)} key={i} className={classes.Votes} />)
        }
        console.log(Votes)
        return Votes
    }
    return <div className={classes.root}>
      <TextField id="standard-basic" label="제목" className={classes.bigVotes} />
      <TextField id="standard-basic" disabled label="상위 설문" className={classes.Votes} />
      <TextField id="standard-basic" disabled label="하위 설문" className={classes.Votes} />
      <TextField id="standard-basic" label="내용" className={classes.bigVotes} />
      <TextField id="standard-basic" label="보기1" className={classes.Votes} />
      <TextField id="standard-basic" label="보기2" className={classes.Votes} />
      {addVotes()}
      {/* <TextField id="filled-basic" label="내용" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      <Button variant="contained" className={classes.addButton} onClick={(e)=>setVoteCount(voteCount + 1)} >보기 추가</Button>
    </div>
}
export default Vote;
