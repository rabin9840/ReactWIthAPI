/* eslint-disable react/prop-types */
const UserCard = ({ users }) => {
    return (
        <>
            {
                 users.map((currentUsers) => {
                    
                    const { id, name, email } = currentUsers;
                    return (
                        <>    
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td> {email}</td>
                            </tr>  
                        </>
                    )
                })
            }
        </>
    )

    
}

export default UserCard;