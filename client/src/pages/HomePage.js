import React from 'react';
import { Container, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import Header from '../component/Header'
import PostList from '../component/PostList'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { showModal } from '../redux/actions';
import CreatePostModal from '../component/CreatePostModal'

export default function HomePage() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const openCreatePostModal = React.useCallback(() => {
        dispatch(showModal());
    }, [dispatch])
    return (
        <Container maxWidth='lg' >
            <Header />
            <PostList />
            <CreatePostModal/>
            <Fab color='primary' className={classes.fab} onClick={openCreatePostModal}>
            <AddIcon />
            </Fab>

        </Container >
    )
}
//
//<AddIcon/>