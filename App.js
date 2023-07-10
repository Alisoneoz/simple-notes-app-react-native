import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { useState } from "react";
import { ScreenType } from "./constants/constants";
import AllNotesScreen from "./screens/AllNotesScreen";
import AddNote from "./screens/AddNote";

export default function App() {
  const [screen, setScreen] = useState(ScreenType.home);
  let content;
  
  if (screen === ScreenType.addNote) {
    content = <AddNote />;
  } else if (screen === ScreenType.allNotes) {
    content = <AllNotesScreen />;
  } else if (screen === ScreenType.home) {
    content = (
      <HomeScreen
        onExit={(data) => {
          setScreen(data);
        }}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
});
