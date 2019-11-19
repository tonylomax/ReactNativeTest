import React from "react";
import { Button, View, Text, TextInput } from "react-native";
import { createAppContainer, NavigationActions } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";

import NewPage from "./NewPage";

function HomeScreen() {
  const [value, onChangeText] = React.useState("Placeholder");
  const { navigate } = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <TextInput
        style={{
          height: 40,
          minWidth: 200,
          borderColor: "gray",
          borderWidth: 1
        }}
        onChangeText={text => onChangeText(text)}
        value={value}
      ></TextInput>

      <Button
        title="Go to NewPage"
        onPress={() => {
          navigate("NewPage", (test = value));
        }}
      />
    </View>
  );
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  NewPage: {
    screen: NewPage
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
