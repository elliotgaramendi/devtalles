/* eslint-disable react/react-in-jsx-scope */
import { ActivityIndicator, View } from 'react-native';
import { layoutStyles, primaryColor, utilStyles } from '../../../styles/styles';

const ScreenLoader = () => {
  return (
    <View style={[layoutStyles.flexbox, layoutStyles.flexboxIsCenter, utilStyles.flex1]}>
      <ActivityIndicator
        size="large"
        color={primaryColor}
      />
    </View>
  );
};

export default ScreenLoader;
