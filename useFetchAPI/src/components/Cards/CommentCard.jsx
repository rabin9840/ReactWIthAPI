/* eslint-disable react/prop-types */
const CommentCard = ({comments}) => {
    return (
        <>
            {
                comments.slice(0,50).map((currenComment) => {
                    const { postId, id, name, email, body } = currenComment;
                    return (
                        <>
                            <tr key={id}>
                            <td>{ id}</td>
                            <td>{ postId}</td>
                            <td>{ name}</td>
                            <td>{ email}</td>
                            <td>{ body}</td>
                            </tr>
                        </>
                    )
                })

            }
        </>
    )
    
}

export default CommentCard;