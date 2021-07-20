import React from 'react'
import {_getUsers} from '../_DATA'
import DashBoard from './dashboard'
class Login extends React.Component {
    state = {
        users: [],
        currentUser: "none",
    }
    componentDidMount() {
       this.fetchUsers()
    }

    fetchUsers = () => {
        _getUsers()
        .then(data => this.setState({users: data}))
    }

    handleChangeUser = (e) => {
        this.setState({
            currentUser: e.target.value,
        })
    }

    render() {
        const {users, currentUser} = this.state;
        return (
            <div>
                <select value={currentUser} onChange={this.handleChangeUser}>
                    <option key="none" value="none">none</option>
                    {Object.keys(users).map(key => {
                        return (
                            <option key={key} value={users[key].name}>{users[key].name}</option>
                        )
                    })}
                </select>
                
                {currentUser === "none"? (""): (<DashBoard/>)}
                
            </div>
                

            
        )
    }
}


export default Login