
import { useState } from "react";

interface Options {
  initialValue?: number;
}

const useFollow = ({ initialValue = 0 }: Options) => {
  const [followers, setFollowers] = useState<number>(initialValue);

  const increaseFollowersBy = (value: number) => {
    const newValue = followers + value;
    if (newValue < 0) return
    setFollowers(newValue);
  };

  return {
    followers,
    increaseFollowersBy
  };
};

export default useFollow;