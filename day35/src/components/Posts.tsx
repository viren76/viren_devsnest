import { useState } from "react";
import "../styles/Posts.css";
import { useSelector } from "react-redux";

function Posts() {
  const users = useSelector((state: any) => state.user);
  const [Isliked, setIsliked] = useState<boolean>(false);
  console.log(users.hits);

  return (
    <div className="Posts">
      <div className="stories">
        {users.hits
          ? users.hits.map((person2: any, index: number) => (
              <div key={index} className="story">
                <img src={person2.userImageURL} alt="" />
              </div>
            ))
          : null}
      </div>
      {users.hits
        ? users.hits.map((person: any, index: number) => (
            <div key={index} className="post">
              <div className="Card">
                <div className="title">
                  <h4>{person.user}</h4>
                  <i className="fas fa-ellipsis-v"></i>
                </div>
                <img src={person.userImageURL} alt="" />
                <div className="buttons">
                  <i
                    className={Isliked ? "fas fa-heart fill" : "far fa-heart "}
                    onClick={() => {
                      setIsliked(!Isliked);
                    }}
                  ></i>
                  <i className="far fa-comment"></i>
                  <i className="far fa-paper-plane"></i>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default Posts;
