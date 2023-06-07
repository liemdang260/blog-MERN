import React from 'react'
import { Grid } from '@material-ui/core'
import Post from './Post'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../../redux/actions'
import { postsState$ } from '../../redux/selectors'

export default function PostList() {

    const dispatch = useDispatch();
    const posts = useSelector(postsState$)


    React.useEffect(() => {
        dispatch(action.getPosts.getPostsRequest())
    }, [dispatch]);
    return (
        <Grid container spacing={2} alignItems='stretch'>
            {posts.map(post =>
                <Grid item xs={12} sm={6}>
                <Post key={post._id} post={post} />
                </Grid>)}
                
        </Grid>
    )
}