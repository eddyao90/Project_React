import { useContext, useEffect, useState } from "react";
import { createComment, deleteComment, getComments } from "../../services/CommentService";
import AuthContext from '../../contexts/AuthContext';
import './Comment.css';
import Icon from '@mdi/react';
import { mdiDeleteForever } from '@mdi/js';

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
                <form className="form-style" onSubmit={handleOnSubmit}>
                    
                        <h1>Leave a message to your friend here:</h1>
                        <textarea className="form-control-comment" id="comment" name="comment" rows="2" value={newComment} onChange={handleOnChange}></textarea>
                        <button className="btn btn-primary" data-bs-toggle="button" type="submit">Post It!</button>
                       
                    
                </form>

            }
            {
                comments?.length > 0 &&
                comments.map(comment => (
                    <div className="comments-all">
                    <div key={ comment.id }>
                    <div className="notepad">
  <div className="top"></div>
  <div className="paper" contentEditable="true">
  <h4 className="username-comment">{ comment.user.username } said:</h4><br/>
  { comment.comment }
  </div>
</div>
                        {
                            currentUser.id === comment.user.id &&
                            

                            <button onClick={() => handleDeleteComment(comment.id)} className="btn btn-delete">
                            <Icon path={mdiDeleteForever} size={1} />
                            <span>Delete</span>
                            </button>
                        }
                
                 
                    </div>
                    </div>

                    
                ))
            }
        </div>
    )
}