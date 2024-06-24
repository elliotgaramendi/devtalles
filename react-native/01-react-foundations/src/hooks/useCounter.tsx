import { useState } from "react";

interface Options {
  initialValue?: number;
}

const useCounter = ({ initialValue = 0 }: Options) => {
  const [likes, setLikes] = useState<number>(initialValue);

  const increaseLikesBy = (value: number) => {
    const newValue = likes + value;
    if (newValue < 0) return
    setLikes(likes + value);
  };

  return {
    likes,
    increaseLikesBy
  };
};

export default useCounter;