import { useEffect } from "react";
import { useState } from "react";
import CommentCard from "./Cards/CommentCard";
const CommentsApi = 'https://jsonplaceholder.typicode.com/comments';

const Comments = () => {
    const [comments, setComments] = useState([]);
    const fetchComments = async () => {
        try {
            const res = await fetch(CommentsApi);
            const data = await res.json();
            console.log(data);
            setComments(data);
            
        } catch (error) {
            console.log(error);
        }
      
        
    }
    useEffect(() => {
        fetchComments();
    },[])
    return (
        <>
            <h1>This is comment section</h1>
            {
                <table>
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>PostId</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CommentCard comments={comments}/>

                    </tbody>
                </table>
            }

        
        </>
    )
 }

export default Comments;