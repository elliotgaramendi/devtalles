/* eslint-disable react/react-in-jsx-scope */
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {Pressable} from 'react-native';
import {primaryText} from '../styles/styles';
import IonIcon from './IonIcon';

const Menu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <IonIcon name="menu-outline" size={32} color={primaryText} />
        </Pressable>
      ),
    });
  }, [navigation]);

  return <></>;
};

export default Menu;
