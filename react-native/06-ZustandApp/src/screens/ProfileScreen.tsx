/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import {useProfileStore} from '../store/profile.store';
import {componentStyles, elementStyles, layoutStyles} from '../styles/styles';

const ProfileScreen = () => {
  const {name, email} = useProfileStore();

  return (
    <View style={componentStyles.section}>
      <View style={layoutStyles.container}>
        <Text style={[elementStyles.title, elementStyles.titleIsXS]}>
          {name}
        </Text>
        <Text style={[elementStyles.title, elementStyles.titleIsXS]}>
          {email}
        </Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
