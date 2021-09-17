import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../../common/FormControls/FormsControls";

class MyPosts extends React.Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('kpaso')
    }

    render() {

        let postData = this.props.posts
            .map(p => <Post message={p.message} likesCount={p.likesCount}/>)

        let newPostElement = React.createRef();

        /*let onAddPost = () => {
            props.addPost();
        }*/

        let addPost = (value) => {
            this.props.addPost(value.newPostMessage)
        }

        return (
            <div className={s.postsAll}>
                <h3>My posts</h3>
                <PostsFormRedux onSubmit={addPost}/>
                <div className={s.posts}>
                    {postData}
                </div>
            </div>
        )
    }
}

const maxLength10=maxLengthCreator(10)

  const PostsForm = (props) => {
      return <form onSubmit={props.handleSubmit}>
          <Field component={Textarea} name={'newPostMessage'}
                 validate={[required, maxLength10]}/>
          {/*<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>*/}
          <button>Add post</button>
          <button>Remove post</button>
      </form>
  }
const PostsFormRedux = reduxForm({form: 'postsForm'})(PostsForm)

export default MyPosts;