import React from 'react';
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {commentUpdate} from "./redux/actions";

const SingleComment = ({ data }) => {
    const [commentText, setCommentText] = useState('')
    const dispatch = useDispatch()
    const { text, id } = data

    useEffect(() => {
        if (text) {
            setCommentText(text)
        }
    }, [text])

    const handleInput = (e) => {
        setCommentText(e.target.value)
    }

    const handleUpdate = (e) => {
        e.preventDefault()
            dispatch(commentUpdate(commentText, id))
    }

    return (
                <form className='comments-item' onSubmit={handleUpdate}>
                    <div className='comments-item-delete'>&times;</div>
                    <input type="text" value={commentText} onChange={handleInput}/>
                    <input type="submit" hidden/>
                </form>
    );
};

export default SingleComment;