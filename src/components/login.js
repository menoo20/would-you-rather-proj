import React from 'react'
import {_getUsers} from '../_DATA'

class Login extends React.Component {
    state = {
        users: [],
    }
    componentDidMount() {
       this.fetchUsers()
    }

    fetchUsers = () => {
        _getUsers()
        .then(data => this.setState({users: data}))
    }
    render() {
        const {users} = this.state;
        return (
            <div>
                <select>
                    {Object.keys(users).map(key => {
                        return (
                            <option key={key} value={key}>{users[key].name}</option>
                        )
                    })}
                </select>
            
            </div>
                

            
        )
    }
}


export default Login