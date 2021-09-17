import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

let state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 21},
        {id: 2, message: "It's my first post", likesCount: 11}
    ],
}

test('length of posts should be incremented', () => {
    let action = addPostActionCreator('it-kamasutra')

    let newState = profileReducer(state, action)

    expect( newState.posts.length).toBe(3)
})

test('length of posts should be decremented', () => {

    let action = deletePost(1)
    let newState = profileReducer(state, action)

    expect( newState.posts.length).toBe(1)
})

