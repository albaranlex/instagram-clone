import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { ImBubble } from "react-icons/im";

function Images(props) {
  const { counter } = props;
  const setCounter = counter.map((obj) => {
    const { id, title, likes, comments, image } = obj;
    return (
      <div key={id} className="images-container">
        <div className="img-wrap">
          <img src={image} alt={title} />
          <div className="hover-img">
            <span className="heart">
              <BsFillHeartFill />
            </span>
            <span className="likes-counter">
              <strong>{likes}</strong>
            </span>
            <span className="comment">
              <ImBubble />
            </span>
            <span className="comments-counter">
              <strong>{comments}</strong>
            </span>
          </div>
        </div>
      </div>
    );
  });
  return <div className="item-wrap">{setCounter}</div>;
}

export default Images;
