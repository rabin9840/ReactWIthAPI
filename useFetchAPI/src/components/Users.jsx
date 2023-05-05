import { useState } from "react";
import { useEffect } from "react";
import UserCard from "./Cards/UserCard";
const UserApi = 'https://jsonplaceholder.typicode.com/users';



const Users = () => {
    const [users, setUsers] = useState([]);
    const fetchUser = async () => {
        // fetch(UserApi)
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
            
        // })
        // .catch(error => { console.error(error); })
        try {
            const res = await fetch(UserApi);
            const usersData = await res.json();
            setUsers(usersData);
            
        } catch (error) {
            console.error(error);   
        }
    }
    
 
    useEffect(() => { 
         fetchUser();
    }, [])
    
    return (
        
            <div>
                <h1>This is Users section</h1>
                {
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <UserCard users={users} />
                    </tbody>
                </table>
               
            }
            </div>
           
 
    )
}

export default Users;