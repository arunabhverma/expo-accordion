import React, { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";
import AccordionItem from "@/components/AccordionItem";
import { ACCORDION_DATA } from "@/mock";
import { STATE_TYPE } from "@/types";

const Main = () => {
  const [state, setState] = useState<STATE_TYPE>({
    activeIndex: null,
  });

  const onToggle = (index: number) => {
    setState((prev) => ({
      ...prev,
      activeIndex: prev.activeIndex === index ? null : index,
    }));
  };

  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1a42e634-f588-40e9-941b-60cf3f20aa39/dflzkpn-5cf9b61b-0e85-4dfb-868e-0e8bca0ec3f8.jpg/v1/fill/w_1280,h_720,q_75,strp/abstract_macbook_wallpaper_by_wallswiftnet_dflzkpn-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMWE0MmU2MzQtZjU4OC00MGU5LTk0MWItNjBjZjNmMjBhYTM5XC9kZmx6a3BuLTVjZjliNjFiLTBlODUtNGRmYi04NjhlLTBlOGJjYTBlYzNmOC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CkAtwyLDj08LA-y1S6lqMVN_jyo1NgzEQFbaq2Dtslo",
      }}
    >
      <Animated.FlatList
        data={ACCORDION_DATA}
        renderItem={({ item, index }) => (
          <AccordionItem
            item={item}
            index={index}
            onToggle={onToggle}
            openIndex={state.activeIndex}
          />
        )}
        contentContainerStyle={styles.contentContainerStyle}
        itemLayoutAnimation={LinearTransition}
        style={styles.listContainer}
        keyExtractor={(i) => i.id}
      />
    </ImageBackground>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainerStyle: {
    flexGrow: 1,
    gap: 10,
    justifyContent: "center",
  },
  listContainer: {
    width: "85%",
  },
});
