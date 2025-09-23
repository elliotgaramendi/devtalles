import { Image, Pressable } from 'react-native';

interface Props {
  id: number;
  poster: string;
  smallPoster?: boolean;
}

const MoviePoster = ({ id, poster, smallPoster = false }: Props) => {
  return (
    <Pressable className="p-2 shadow-sm shadow-sky-500 active:opacity-90">
      <Image
        source={{ uri: poster }}
        className="rounded-2xl"
        style={{
          width: smallPoster ? 90 : 160,
          height: smallPoster ? 140 : 256,
        }}
      />
    </Pressable>
  );
};
export default MoviePoster;