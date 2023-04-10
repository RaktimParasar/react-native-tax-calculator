import { SafeAreaView, Text, View, ScrollView } from "react-native";
import { Stack } from "expo-router";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: {},
          headerShadowVisible: false,
          headerTitle: "",
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
