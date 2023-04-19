import { useContext, useEffect, useState } from "react";
import { createComment, deleteComment, getComments } from "../../services/CommentService";
import AuthContext from '../../contexts/AuthContext';

export default function Comments({ id }) {
    const [update, setUpdate] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState([]);
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        if(currentUser) {
            getComments(currentUser.id)
            .then(res => {
                console.log(res)
                let reversed = res.reverse();
                setComments(reversed)
            })
            .catch(err => console.log(err))
        }
    }, [currentUser, update])

    const handleOnChange = (e) => {
        const { value } = e.target;
        setNewComment(value);
    }
    
    const handleOnSubmit = (e) => {
        e.preventDefault();

        if(currentUser) {
            let infoToSend = {
                id: currentUser.id,
                comment: newComment
            }
            createComment(infoToSend)
            .then(res => setUpdate(!update))
            .catch(err => console.log(err))
        }

        setNewComment('');
    }

    const handleDeleteComment = (id) => {
        deleteComment(id)
        .then(res => {
            let filtered = comments.filter(comment => comment.id !== id);
            setComments(filtered)
        })
        .catch(err => console.log(err))
    }
    
    return(
        <div className="Comments">
            {
                currentUser &&
                <form onSubmit={handleOnSubmit}>
                    <div className="mb-3">
                        <label htmlFor="comment" className="form-label">hey comment here</label>
                        <textarea className="form-control" id="comment" name="comment" rows="2" value={newComment} onChange={handleOnChange}></textarea>
                    </div>
                        <button type="submit">Submit</button>

                </form>
            }
            {
                comments?.length > 0 &&
                comments.map(comment => (
                    <div key={ comment.id }>
                        <h4>{ comment.user.username }</h4>
                        <p>{ comment.comment }</p>
                        {
                            currentUser.id === comment.user.id &&
                            <p onClick={() => handleDeleteComment(comment.id)}>APAGAR</p>
                        }
                    </div>
                ))
            }
        </div>
    )
}