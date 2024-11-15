import useCounter from "../hooks/useCounter";

const Likes = () => {
  const { likes, increaseLikesBy } = useCounter({ initialValue: 0 });

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