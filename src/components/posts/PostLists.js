import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  usePostsSelector,
  getPostsError,
  getPostsStatus,
  fetchPosts,
} from "../../reducers/postsSlice";
import Post from "./Post";

const PostLists = () => {
  const posts = useSelector(usePostsSelector);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  const dispatch = useDispatch();

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let content;
  if (postsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
     content = orderedPosts.map((post) => <Post key={post.id} post={post}/> );
  } else if (postsStatus === "failed") {
    content = <p>{postsError}</p>;
  }
  return (
    <section>
      <h2>Post Lists</h2>
      {content}
    </section>
  );
};

export default PostLists;
