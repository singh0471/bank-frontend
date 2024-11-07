import React from 'react';
import Pagination from './pagination';
import SizeBar from '../SizeBar';



const Table = ({ data, setLimit }) => {
    
    console.log(data);

    
    const headers = Object.keys(data[0]); 

    const rows = data.map(item => Object.values(item)); 

    return (
        
      <div>
        <Pagination></Pagination>
        <SizeBar setLimit={setLimit}/>
        <table border="1">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th> 
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
};

export default Table;


// import React, { useEffect, useState } from 'react';
// import { handleSubmit } from '../controller/handleSubmit';
// import { getAllusers } from '../service/user';
// import Table from '../sharedComponents/Table';

// const Login = () => {
//     const [userName, setUserName] = useState('');
//     const [password, setPassword] = useState('');
//     const [user, setUser] = useState([]);
//     const [limit, setLimit] = useState(3);
//     const [offset, setOffset] = useState(0); 

    
//     const fetchUsers = async () => {
//         try {
//             const response = await getAllusers(limit, offset); 
//             if (response && response.data) {
//                 setUser(response.data); 
//             }
//         } catch (error) {
//             console.error("Error fetching users:", error);
//         }
//     };

//    useEffect(() =>{
//       fetchUsers();
//    } , [limit , offset])

//     return (
//         <div>
//             <form onSubmit={(e) => handleSubmit(e, userName, password)}>
//                 <div className="form-group">
//                     <label htmlFor="username">Username</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="username"
//                         placeholder="Enter username"
//                         value={userName}
//                         onChange={(e) => setUserName(e.target.value)}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Password</label>
//                     <input
//                         type="password"
//                         className="form-control"
//                         id="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>

//             <button onClick={fetchUsers} className="btn btn-info">Get Users</button>

            
//             {user.length > 0 && <Table data={user} setLimit={setLimit} setOffset={setOffset} fetchUsers={fetchUsers} limit={limit} offset={offset} />}
//         </div>
//     );
// };

// export default Login;