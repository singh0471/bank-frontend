import React, { useState,useEffect } from 'react';
import { handleRequest } from '../Controller/handleController';
import { getAllusers } from '../Service/user';
import Table from '../sharedComponents/table/Table.js';

const Login = () => {
    const [userName, setUserName] = useState('username');
    const [password, setPassword] = useState('password');
    const [user, setUser] = useState([]);
    const [limit, setLimit] = useState(3);
    const [page,setPage] = useState(1);

    const fetchUsers = async () => {
        try {
            const response = await getAllusers(limit);
            if (response && response.data) {
                setUser(response.data);
            }
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };
       useEffect(() =>{
      fetchUsers();
   } , [limit])


    return (
        <div>
            <form onSubmit={(e) => handleRequest(e, userName, password)}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <button onClick={fetchUsers} className="btn btn-info">Get Users</button>


            {user.length > 0 && <Table data={user} setLimit={setLimit} setPage={setPage} />}
        </div>
    );
};

export default Login;