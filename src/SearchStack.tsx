import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Center } from "./Center";
import { FlatList, Button } from "react-native";
import faker from "faker";
import { addProductRoute } from "./addProductRoute";

interface SearchStackProps {}
const Stack = createStackNavigator();

function Search({ navigation }) {
  const [show, setShow] = React.useState(false);
  return (
    <Center>
      <Button
        title="Search products"
        onPress={() => {
          setShow(true);
        }}
      />
      {show && (
        <FlatList
          style={{ width: "100%" }}
          data={Array.from(Array(50), () => faker.commerce.product())}
          renderItem={({ item }) => {
            return (
              <Button
                title={item}
                onPress={() => {
                  navigation.navigate("Product", {
                    name: item,
                  });
                }}
              />
            );
          }}
          keyExtractor={(product, id) => product + id}
        />
      )}
    </Center>
  );
}
export const SearchStack: React.FC<SearchStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
      {addProductRoute(Stack)}
    </Stack.Navigator>
  );
};
