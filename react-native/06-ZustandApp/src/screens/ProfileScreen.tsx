/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import {useCounterStore} from '../store/counter.store';
import {useProfileStore} from '../store/profile.store';
import {componentStyles, elementStyles, layoutStyles} from '../styles/styles';

const ProfileScreen = () => {
  const {name, email} = useProfileStore();
  const {count} = useCounterStore();

  return (
    <View style={componentStyles.section}>
      <View style={layoutStyles.container}>
        <Text style={[elementStyles.title, elementStyles.titleIsXS]}>
          {name}
        </Text>
        <Text style={[elementStyles.title, elementStyles.titleIsXS]}>
          {email}
        </Text>
        <Text style={[elementStyles.title, elementStyles.titleIsXS]}>
          Count: {count}
        </Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
