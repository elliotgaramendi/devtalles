/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import CustomButton from '../components/CustomButton';
import useCalculator from '../hooks/useCalculator';
import {
  componentStyles,
  layoutStyles,
  styles,
  utilStyles,
} from '../styles/styles';

const Calculator = () => {
  const {
    formula,
    prevNumber,
    buildNumber,
    clearNumber,
    toggleSign,
    delNumber,
    addOperation,
    subtractOperation,
    multiplyOperation,
    divideOperation,
    calculateResult,
  } = useCalculator();

  return (
    <View style={[componentStyles.section, styles.mTopAuto]}>
      <View style={[layoutStyles.container, utilStyles.dFlex, utilStyles.gap4]}>
        <View>
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={styles.mainResult}>
            {formula}
          </Text>
          <Text adjustsFontSizeToFit numberOfLines={1} style={styles.subResult}>
            {formula !== prevNumber && prevNumber}
          </Text>
        </View>
        <View
          style={[utilStyles.dFlex, utilStyles.aItemsCenter, utilStyles.gap4]}>
          <View style={[layoutStyles.flexbox, utilStyles.gap4]}>
            <CustomButton
              handlePress={clearNumber}
              content="C"
              contentBlack
              type="buttonIsNeutral300"
            />
            <CustomButton
              handlePress={toggleSign}
              content="+/-"
              contentBlack
              type="buttonIsNeutral300"
            />
            <CustomButton
              handlePress={delNumber}
              handleLongPress={clearNumber}
              content="del"
              contentBlack
              type="buttonIsNeutral300"
            />
            <CustomButton
              handlePress={() => divideOperation()}
              content="/"
              contentBlack
              type="buttonIsPrimary"
            />
          </View>
          <View style={[layoutStyles.flexbox, utilStyles.gap4]}>
            <CustomButton
              handlePress={() => buildNumber('7')}
              content="7"
              type="buttonIsNeutral900"
            />
            <CustomButton
              handlePress={() => buildNumber('8')}
              content="8"
              type="buttonIsNeutral900"
            />
            <CustomButton
              handlePress={() => buildNumber('9')}
              content="9"
              type="buttonIsNeutral900"
            />
            <CustomButton
              handlePress={() => multiplyOperation()}
              content="*"
              contentBlack
              type="buttonIsPrimary"
            />
          </View>
          <View style={[layoutStyles.flexbox, utilStyles.gap4]}>
            <CustomButton
              handlePress={() => buildNumber('4')}
              content="4"
              type="buttonIsNeutral900"
            />
            <CustomButton
              handlePress={() => buildNumber('5')}
              content="5"
              type="buttonIsNeutral900"
            />
            <CustomButton
              handlePress={() => buildNumber('6')}
              content="6"
              type="buttonIsNeutral900"
            />
            <CustomButton
              handlePress={() => subtractOperation()}
              content="-"
              contentBlack
              type="buttonIsPrimary"
            />
          </View>
          <View style={[layoutStyles.flexbox, utilStyles.gap4]}>
            <CustomButton
              handlePress={() => buildNumber('1')}
              content="1"
              type="buttonIsNeutral900"
            />
            <CustomButton
              handlePress={() => buildNumber('2')}
              content="2"
              type="buttonIsNeutral900"
            />
            <CustomButton
              handlePress={() => buildNumber('3')}
              content="3"
              type="buttonIsNeutral900"
            />
            <CustomButton
              handlePress={() => addOperation()}
              content="+"
              contentBlack
              type="buttonIsPrimary"
            />
          </View>
          <View style={[layoutStyles.flexbox, utilStyles.gap4]}>
            <CustomButton
              handlePress={() => buildNumber('0')}
              content="0"
              type="buttonIsNeutral900"
              doubleWidth
            />
            <CustomButton
              handlePress={() => buildNumber('.')}
              content="."
              type="buttonIsNeutral900"
            />
            <CustomButton
              handlePress={calculateResult}
              content="="
              contentBlack
              type="buttonIsPrimary"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Calculator;
