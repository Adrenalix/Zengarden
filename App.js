import React from "react";
import Main from "./components/mainpage.js";
import Detail from "./components/detailspage.js";
import Zengarden from "./components/zengarden.js";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function CustomHeaderTitle({ title }) {
  return (
      <Text style={{ fontWeight: 'bold', fontSize: 44, marginTop: 20, color:"white" }}>
          {title}
      </Text>
  );
}

//obj stack helps to navigate
const Stack = createNativeStackNavigator();

export default function App() {
return (
  <NavigationContainer>
     <Stack.Navigator screenOptions={{
      headerTitleAlign:'center',
      headerTransparent: true,
      headerStyle:{
        backgroundColor: "transparent",
      },
      headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 44,
        },
    }}>
      <Stack.Screen name="Home" component={Main} options={{headerTitle: () => <CustomHeaderTitle title="Welcome" />}}/>
      <Stack.Screen name="Details" component={Detail} options={{headerTitle: () => <CustomHeaderTitle title="Details" />}}/>
      <Stack.Screen name="Zengarden" component={Zengarden} options={{headerTitle: () => <CustomHeaderTitle title="Zengarden" />}}/>
     </Stack.Navigator>
  </NavigationContainer>
)
}
