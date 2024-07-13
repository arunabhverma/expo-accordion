import React from "react";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import CustomBlurView from "./CustomBlurView";
import { ACCORDION_RENDER_ITEM_TYPE } from "@/types";
import { useTheme } from "@react-navigation/native";

const AccordionItem = ({
  item,
  index,
  onToggle,
  openIndex,
}: ACCORDION_RENDER_ITEM_TYPE) => {
  const theme = useTheme();
  const tint = useColorScheme();

  const isOpened = openIndex === index;
  const bgColor =
    tint === "dark" ? "rgba(0,0,0,0.3)" : "rgba(255, 255, 255, 0.6)";
  const textColor =
    tint === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0,0,0,0.8)";

  const animatedRotateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: isOpened ? withSpring("90deg") : withSpring("0deg"),
        },
      ],
    };
  });

  return (
    <Animated.View layout={LinearTransition} style={styles.accordionContainer}>
      <CustomBlurView />
      <Animated.View
        layout={LinearTransition}
        onTouchEndCapture={() => onToggle(index)}
        style={[
          styles.accordionHeader,
          {
            backgroundColor: bgColor,
          },
        ]}
      >
        <View style={styles.accordionHeaderLeft}>
          <Ionicons name={item.icon} size={20} color={theme.colors.text} />
          <Text
            style={[
              styles.titleStyle,
              {
                color: textColor,
              },
            ]}
          >
            {item.title}
          </Text>
        </View>
        <Animated.View
          layout={LinearTransition.springify()}
          style={animatedRotateStyle}
        >
          <Ionicons name="chevron-forward" size={18} color={textColor} />
        </Animated.View>
      </Animated.View>
      {isOpened && (
        <Animated.View
          style={styles.contentContainer}
          layout={LinearTransition}
          entering={FadeIn}
          exiting={FadeOut}
        >
          <Text style={[styles.contentText, { color: textColor }]}>
            {item.content}
          </Text>
        </Animated.View>
      )}
    </Animated.View>
  );
};

export default AccordionItem;

const styles = StyleSheet.create({
  accordionContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  accordionHeaderLeft: {
    gap: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  accordionHeader: {
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "500",
  },
  contentContainer: {
    padding: 10,
    paddingBottom: 20,
  },
  contentText: {
    fontSize: 18,
  },
});
