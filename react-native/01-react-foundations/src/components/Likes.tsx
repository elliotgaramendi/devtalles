import { useState } from "react";

const Likes = () => {
  const [likes, setLikes] = useState<number>(0);

  const increaseLikesBy = (value: number) => {
    setLikes(likes + value);
  };

  return (
    <div>
      <h5>Likes: {likes}</h5>
      <div>
        <button onClick={() => increaseLikesBy(1)}>👍</button>
        <button onClick={() => increaseLikesBy(-1)}>👎</button>
      </div>
    </div>
  );
};

export default Likes;