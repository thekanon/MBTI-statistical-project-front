import React from 'react';
import UserCard from './UserCard'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%'
    },
    card:{
        padding:"15px",
    }
}));
function selectUsers(){
    const users = [
        {
            userName:	"J-HOPE"
            ,mbti:	"ESFJ"
            ,sex:	"male"
            ,birth:	"19940218"
            ,job:	"singer"
            ,realName:	 "Jeong Hoseok"
            ,Nationality:	"Korea"
            ,Height:	 "177cm,"
            ,Weight:	 "59kg"
            ,Blood:	  "TypeA"
            ,Foot:	 "265mm"
            ,Group:	"BTS"
            ,Religion:	"NoReligion"
            ,Hobby:	"Dance"
            ,path:"/image/User/bts/JHOPE.png"
        },
        {
            userName:	"Jin"
            ,mbti:	"INTP"
            ,sex:	"male"
            ,birth:	"19921204"
            ,job:	"singer"
            ,realName:	"Kim Seokjin" 
            ,Nationality:	"Korea"
            ,Height:	"178.3cm"
            ,Weight:	"60kg"
            ,Blood:	"TypeO"
            ,Foot:	"265mm"
            ,Group:	"BTS"
            ,Religion:	"NoReligion"
            ,Hobby:	"SuperMario"            
            ,path:"/image/User/bts/jin.png"
        },
        {
            userName:	"suga"
            ,mbti:	"INTP"
            ,sex:	"male"
            ,birth:	"19930309"
            ,job:	"singer"
            ,realName:	"Min Yunki" 
            ,Nationality:	"Korea"
            ,Height:	"174cm"
            ,Weight:	"58kg"
            ,Blood:	"TypeO"
            ,Foot:	"265mm"
            ,Group:	"BTS"
            ,Religion:	"NoReligion"
            ,Hobby:	"Basketball"
            ,path:"/image/User/bts/suga.png"
        },
        {
            userName:	"RM",
            mbti:	"ENFP",
            sex:	"male",
            birth:	"19940912",
            job:	"singer",
            realName:	"Kim Namjun", 
            Nationality:	"Korea",
            Height:	"174cm",
            Weight:	"70kg",
            Blood:	"TypeA",
            Group:	"BTS",
            Religion:	"NoReligion",
            Hobby:	"Walk",            
            path:"/image/User/bts/RM.png",
        },
        {
            userName:	"Jimin"
            ,mbti:	"ENFJ"
            ,sex:	"male"
            ,birth:	"19951013"
            ,job:	"singer"
            ,realName:	"Park Jimin"
            ,Nationality:	"Korea"
            ,Height:	"174cm"
            ,Weight:	"58kg"
            ,Blood:	"TypeA"
            ,Foot:	"265mm"
            ,Group:	"BTS"
            ,Religion:	"NoReligion"
            ,Hobby:	"dance"
            ,path:"/image/User/bts/Jimin.png"
        },
        {
            userName:	"V"
            ,mbti:	"ENFP"
            ,sex:	"male"
            ,birth:	"19951230"
            ,job:	"singer"
            ,realName:	"Kim Taehyung" 
            ,Nationality:	"Korea"
            ,Height:	"174cm"
            ,Weight:	"63kg"
            ,Blood:	"TypeAB"
            ,Foot:	"275mm"
            ,Group:	"BTS"
            ,Religion:	"NoReligion"
            ,Hobby:	"Taking pictures" 
            ,path:"/image/User/bts/V.png"
        },
        {
            userName:	"Jungkook"
            ,mbti:	"ISFP"
            ,sex:	"male"
            ,birth:	"19970901"
            ,job:	"singer"
            ,realName:	"Jun Jungkook"
            ,Nationality:	"Korea"
            ,Height:	"178cm"
            ,Weight:	"66kg"
            ,Blood:	"TypeA"
            ,Foot:	"275mm"
            ,Group:	"BTS"
            ,Religion:	"NoReligion"
            ,Hobby:	"Drawing"
            ,path:"/image/User/bts/jungkook.png"
        }
    ]
    return users
}
function Users(props) {
    const classes = useStyles();
    const users = selectUsers()
    return <div className={classes.root}>
        <UserCard
            info={users[0]}
        />
        <UserCard
            info={users[1]}
        />
        <UserCard
            info={users[2]}
        />
        <UserCard
            info={users[3]}
        />
        <UserCard
            info={users[4]}
        />
        <UserCard
            info={users[5]}
        />
        <UserCard
            info={users[6]}
        />
    </div>
}
export default Users;