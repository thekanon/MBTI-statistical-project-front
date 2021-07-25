import React, { Component } from 'react';
import UserList from '../Component/User/UserList'
import data from "../Component/Manager/test.json"
class userListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileArr: [],
            profile: [{"title":"asdfasdfasdfasd","description":"11123123"},{"title":"asdfasdfasdfasd","description":"11123123"},{"title":"asdfasdfasdfasd","description":"11123123"}],
        }
    }    
    callAPI = async (name) => {
        let response = await (await fetch('http://118.36.152.77:4001/searchProfile?name='+name)).json()
        await (this.setState({ profile: response }));
        this.state.profileArr.push(this.state.profile)
        console.log(this.state.profileArr)
        return this.state.profile[0]
    }
    componentDidMount() {
        console.log(data)
        data.map(el => {
            console.log(el.user)
            this.callAPI(el.user)
        })
        // this.callAPI("전지현")
    }

    render() {
        const profileList = this.state.profile.map(el => {
            return <li>{el.title} : {el.description}</li>
        })
        return (
        <>
            {"aaa"}
            <ul>{profileList}</ul>
            {/* {console.log(this.callAPI())} */}
            {/* <UserList>asdf</UserList> */}
        </>
        )
    }
}

export default userListPage;