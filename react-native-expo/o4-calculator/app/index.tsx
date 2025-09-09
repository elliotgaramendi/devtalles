import { Text, View } from "react-native";

import AppButton from "@/components/AppButton";
import { componentStyles, elementStyles, layoutStyles, utilsStyles } from "@/styles/styles";

const HomeScreen = () => {
  return (
    <View style={componentStyles.hero}>
      <View style={[layoutStyles.container, utilsStyles.aItemsCenter, utilsStyles.jContentEnd, utilsStyles.gap4]}>
        <View style={[utilsStyles.aItemsEnd, utilsStyles.widthSm]}>
          <Text
            style={[elementStyles.title, elementStyles.title_3xl]}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            5 x 8
          </Text>
          <Text
            style={[elementStyles.title, utilsStyles.cSecondaryText]}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            40
          </Text>
        </View>
        <View style={[utilsStyles.fDirectionRow, utilsStyles.fWrap, utilsStyles.jContentCenter, utilsStyles.gap4, utilsStyles.widthSm]}>
          <AppButton
            type="button_secondary"
            content="C"
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={() => { }}
          />
          <AppButton
            type="button_secondary"
            content="+/-"
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={() => { }}
          />
          <AppButton
            type="button_secondary"
            content="del"
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={() => { }}
          />
          <AppButton
            type="button_primary"
            content="/"
            contentStyles={[elementStyles.title, elementStyles.title_2xs, utilsStyles.cLightPrimaryText]}
            onPress={() => { }}
          />
          <AppButton
            type="button_secondaryBg"
            content="7"
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={() => { }}
          />
          <AppButton
            type="button_secondaryBg"
            content="8"
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={() => { }}
          />
          <AppButton
            type="button_secondaryBg"
            content="9"
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={() => { }}
          />
          <AppButton
            type="button_primary"
            content="*"
            contentStyles={[elementStyles.title, elementStyles.title_2xs, utilsStyles.cLightPrimaryText]}
            onPress={() => { }}
          />
          <AppButton
            type="button_secondaryBg"
            content="4"
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={() => { }}
          />
          <AppButton
            type="button_secondaryBg"
            content="5"
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={() => { }}
          />
          <AppButton
            type="button_secondaryBg"
            content="6"
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={() => { }}
          />
          <AppButton
            type="button_primary"
            content="-"
            contentStyles={[elementStyles.title, elementStyles.title_2xs, utilsStyles.cLightPrimaryText]}
            onPress={() => { }}
          />
          <AppButton
            type="button_secondaryBg"
            content="1"
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={() => { }}
          />
          <AppButton
            type="button_secondaryBg"
            content="2"
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={() => { }}
          />
          <AppButton
            type="button_secondaryBg"
            content="3"
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={() => { }}
          />
          <AppButton
            type="button_primary"
            content="+"
            contentStyles={[elementStyles.title, elementStyles.title_2xs, utilsStyles.cLightPrimaryText]}
            onPress={() => { }}
          />
          <AppButton
            type="button_secondary"
            content="."
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={() => { }}
          />
          <AppButton
            type="button_secondaryBg"
            content="0"
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={() => { }}
          />
          <AppButton
            type="button_secondary"
            content="."
            contentStyles={[elementStyles.title, elementStyles.title_2xs]}
            onPress={() => { }}
          />
          <AppButton
            type="button_primary"
            content="="
            contentStyles={[elementStyles.title, elementStyles.title_2xs, utilsStyles.cLightPrimaryText]}
            onPress={() => { }}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;