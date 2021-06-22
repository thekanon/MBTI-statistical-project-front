import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 280,
    padding:"30px",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));
function UserCard(props) {
  const classes = useStyles();
  const info = props.info
  console.log(props)
  return (
    <Card className={classes.root}>
      <CardHeader
        title={info.mbti+"("+info.job+")"}
        subheader={info.Group+" "+info.userName}
      />
      <CardMedia
        className={classes.media}
        image={info.path}
        title={info.userName}
      />
    </Card>
  );
}
export default UserCard;