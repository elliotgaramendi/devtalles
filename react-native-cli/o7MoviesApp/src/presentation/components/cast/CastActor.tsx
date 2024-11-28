/* eslint-disable react/react-in-jsx-scope */
import { Image, View } from 'react-native';
import { MovieCast } from '../../../core/entities/movie.entity';
import { elementStyles } from '../../../styles/styles';

interface Props {
  actor: MovieCast;
}

const CastActor = ({ actor }: Props) => {
  return (
    <View>
      <Image
        source={{ uri: actor.avatar }}
        style={[elementStyles.image, elementStyles.imageIsCardTitle]}
      />
    </View>
  );
};

export default CastActor;
