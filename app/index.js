import { SafeAreaView, Text, View, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { COLORS, FONT } from "../constant/theme";
import InputField from "./components/Inputfield/InputField";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerShadowVisible: false,
          headerTitle: "Income Tax Calculator",
          headerTitleStyle: { color: COLORS.white, fontFamily: FONT.bold },
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
          }}
        >
          <Text>Hello, World 🍀</Text>
        </View>
        <InputField />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
