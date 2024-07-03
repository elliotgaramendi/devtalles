/* eslint-disable react/react-in-jsx-scope */
import {Image, View} from 'react-native';
import {componentStyles, elementStyles, layoutStyles} from '../styles/styles';

interface Props {
  url?: string;
}

const Advertisement = ({url}: Props) => {
  return (
    <View style={componentStyles.section}>
      <View style={layoutStyles.container}>
        <Image
          source={{
            uri: url,
          }}
          style={elementStyles.imgIsAdvertisement}
        />
      </View>
    </View>
  );
};

export default Advertisement;
