import React from "react";
import { BsGrid3X3 } from "react-icons/bs";
import { RiFolderUserLine } from "react-icons/ri";

function PostsNav() {
  return (
    <div className="posts-nav">
      <div id="active">
        <span>
          <BsGrid3X3 />
        </span>
        <span>POSTS</span>
      </div>
      <div>
        <span>
          <RiFolderUserLine />
        </span>
        <span>TAGGED</span>
      </div>
    </div>
  );
}
export default PostsNav;
