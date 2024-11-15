/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, Text, View} from 'react-native';
import {
  componentStyles,
  elementStyles,
  layoutStyles,
  lightPrimaryText,
  primaryColor,
  secondaryColor,
  size,
  utilStyles,
  whiteColor,
} from '../styles/styles';

const Skills = () => {
  return (
    <View style={componentStyles.section}>
      <View style={layoutStyles.container}>
        <View
          style={[
            layoutStyles.flexbox,
            layoutStyles.flexboxIsAutoFit,
            utilStyles.gap2,
          ]}>
          <Text style={[elementStyles.badge, styles.flexItemIs1]}>HTML</Text>
          <Text style={[elementStyles.badge, styles.flexItemIs2]}>CSS</Text>
          <Text style={[elementStyles.badge, styles.flexItemIs3]}>
            JavaScript
          </Text>
          <Text style={[elementStyles.badge, styles.flexItemIs1]}>React</Text>
          <Text style={[elementStyles.badge, styles.flexItemIs2]}>
            React Native
          </Text>
          <Text style={[elementStyles.badge, styles.flexItemIs3]}>UI</Text>
          <Text style={[elementStyles.badge, styles.flexItemIs1]}>UX</Text>
          <Text style={[elementStyles.badge, styles.flexItemIs2]}>Figma</Text>
          <Text style={[elementStyles.badge, styles.flexItemIs3]}>Git</Text>
          <Text style={[elementStyles.badge, styles.flexItemIs1]}>AI</Text>
          <Text style={[elementStyles.badge, styles.flexItemIs2]}>Testing</Text>
        </View>
      </View>
    </View>
  );
};

export default Skills;

const styles = StyleSheet.create({
  flexItemIs1: {
    paddingVertical: size * 2,
    backgroundColor: whiteColor,
    color: lightPrimaryText,
  },
  flexItemIs2: {
    alignSelf: 'center',
    backgroundColor: primaryColor,
    color: lightPrimaryText,
  },
  flexItemIs3: {
    paddingVertical: size * 2,
    backgroundColor: secondaryColor,
  },
});
