import { TouchableOpacity } from "react-native-gesture-handler";
import { HomeNavProps } from "./HomeParamList";
import { Center } from "./Center";
import { Button, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

export const addProductRoute = (Stack: any) => {
  return (
    <>
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen
        name="EditProduct"
        component={EditProduct}
        options={({ route }) => ({
          headerTitle: `Edit: ${route.params.name}`,
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 10 }}>
              <Text style={{ color: "red" }}>Done</Text>
            </TouchableOpacity>
          ),
        })}
      />
    </>
  );
};

function Product({ route, navigation }: HomeNavProps<"Product">) {
  return (
    <Center>
      <Text>{route.params.name}</Text>
      <Button
        title="Edit Product"
        onPress={() =>
          navigation.navigate("EditProduct", {
            name: route.params.name,
          })
        }
      />
    </Center>
  );
}

function EditProduct({ route }: HomeNavProps<"EditProduct">) {
  return (
    <Center>
      <Text>Editing {route.params.name}...</Text>
    </Center>
  );
}
