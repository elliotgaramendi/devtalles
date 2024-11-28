/* eslint-disable react/react-in-jsx-scope */
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Formatter } from '../../../config/helpers/formatter';
import { MovieCast, MovieDetails } from '../../../core/entities/movie.entity';
import { componentStyles, elementStyles, layoutStyles, utilStyles } from '../../../styles/styles';
import CastActor from '../cast/CastActor';

interface Props {
  movie: MovieDetails;
  movieCast: MovieCast[];
}

const MovieDetail = ({ movie, movieCast }: Props) => {
  const { description, budget } = movie;

  return (
    <View style={componentStyles.section}>
      <View style={[layoutStyles.container, utilStyles.gap2]}>
        <View>
          <Text style={[elementStyles.title, elementStyles.titleIsXS]}>History</Text>
          <Text style={elementStyles.text}>{description}</Text>
        </View>
        <View>
          <Text style={[elementStyles.title, elementStyles.titleIsXS]}>Budget</Text>
          <Text style={elementStyles.text}>{Formatter.currency(budget)}</Text>
        </View>
        <View>
          <Text style={[elementStyles.title, elementStyles.titleIsXS]}>Actors</Text>
          <FlatList
            data={movieCast}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <CastActor actor={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[utilStyles.gap2, utilStyles.p2]}
          />
        </View>
      </View>
    </View>
  );
};

export default MovieDetail;
