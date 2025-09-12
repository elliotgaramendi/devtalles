import { Text, View } from "react-native";

import AppButton from "@/components/AppButton";
import useCalculator from "@/hooks/useCalculator";
import { componentStyles, elementStyles, layoutStyles, utilsStyles } from "@/styles/styles";

const HomeScreen = () => {
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
    calculateResult
  } = useCalculator();

  return (
    <View style={componentStyles.hero}>
      <View style={[layoutStyles.container, utilsStyles.aItemsCenter, utilsStyles.jContentEnd, utilsStyles.gap4]}>
        <View style={[utilsStyles.aItemsEnd, utilsStyles.widthSm]}>
          <Text
            style={[elementStyles.title, elementStyles.title_3xl]}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            {formula}
          </Text>
          <Text
            style={[elementStyles.title, utilsStyles.cSecondaryText]}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            {formula !== prevNumber && formula.includes(' ') === true && prevNumber}
          </Text>
        </View>
        <View style={[utilsStyles.fDirectionRow, utilsStyles.fWrap, utilsStyles.jContentCenter, utilsStyles.gap4, utilsStyles.widthSm]}>
          <AppButton
            type="button_secondary"
            content="C"
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={clearNumber}
          />
          <AppButton
            type="button_secondary"
            content="+/-"
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={toggleSign}
          />
          <AppButton
            type="button_secondary"
            content="del"
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={delNumber}
          />
          <AppButton
            type="button_primary"
            content="/"
            contentStyles={[elementStyles.title, elementStyles.title_2xs, utilsStyles.cLightPrimaryText]}
            onPress={divideOperation}
          />
          <AppButton
            type="button_secondaryBg"
            content="7"
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={() => buildNumber("7")}
          />
          <AppButton
            type="button_secondaryBg"
            content="8"
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={() => buildNumber("8")}
          />
          <AppButton
            type="button_secondaryBg"
            content="9"
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={() => buildNumber("9")}
          />
          <AppButton
            type="button_primary"
            content="*"
            contentStyles={[elementStyles.title, elementStyles.title_2xs, utilsStyles.cLightPrimaryText]}
            onPress={multiplyOperation}
          />
          <AppButton
            type="button_secondaryBg"
            content="4"
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={() => buildNumber("4")}
          />
          <AppButton
            type="button_secondaryBg"
            content="5"
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={() => buildNumber("5")}
          />
          <AppButton
            type="button_secondaryBg"
            content="6"
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={() => buildNumber("6")}
          />
          <AppButton
            type="button_primary"
            content="-"
            contentStyles={[elementStyles.title, elementStyles.title_2xs, utilsStyles.cLightPrimaryText]}
            onPress={subtractOperation}
          />
          <AppButton
            type="button_secondaryBg"
            content="1"
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={() => buildNumber("1")}
          />
          <AppButton
            type="button_secondaryBg"
            content="2"
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={() => buildNumber("2")}
          />
          <AppButton
            type="button_secondaryBg"
            content="3"
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={() => buildNumber("3")}
          />
          <AppButton
            type="button_primary"
            content="+"
            contentStyles={[elementStyles.title, elementStyles.title_2xs, utilsStyles.cLightPrimaryText]}
            onPress={addOperation}
          />
          <AppButton
            type="button_secondary"
            content="."
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={() => buildNumber(".")}
          />
          <AppButton
            type="button_secondaryBg"
            content="0"
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={() => buildNumber("0")}
          />
          <AppButton
            type="button_secondary"
            content="."
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={() => buildNumber(".")}
          />
          <AppButton
            type="button_primary"
            content="="
            contentStyles={[elementStyles.title, elementStyles.title_2xs, utilsStyles.cLightPrimaryText]}
            onPress={calculateResult}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
