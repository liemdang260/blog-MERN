import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions'
import * as api from '../../api'

function* fetchsPostSaga(action) {
    try {
        const posts = yield call(api.fetchPosts);
        yield put(actions.getPosts.getPostSuccess(posts));
    } catch (error) {
        console.log(error);
        yield put(action.getPosts.getPostFailure(error));
    }

}

function* createPostSaga(action) {
    try {
        const posts = yield call(api.createPosts, action.payload);
        yield put(actions.createPost.createPostSuccess(posts.data));
    } catch (error) {
        console.log(error);
        yield put(action.createPost.createPostFailure(error));
    }

}

function* updatePostSaga(action) {
    try {
        const updatedPosts = yield call(api.updatePosts, action.payload);
        yield put(actions.updatePost.updatePostSuccess(updatedPosts.data));
    } catch (error) {
        console.log(error);
        yield put(action.updatePost.updatePostFailure(error));
    }

}

function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchsPostSaga)
    yield takeLatest(actions.createPost.createPostRequest, createPostSaga)
    yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga)
}

export default mySaga;