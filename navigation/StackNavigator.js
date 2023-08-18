import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TaskScreen from "../screen/Tasks";
import DetailScreen from "../screen/Details";
import NewTaskScreen from "../screen/NewTasks";

const Stack = createStackNavigator()
const StackNavigator =()=>{
    return(
        <Stack.Navigator initialRouteName="TaskScreen" screenOptions={{headerShown:false}}>
            <Stack.Screen name="TaskScreen" component={TaskScreen}
            ></Stack.Screen>
            <Stack.Screen name="DetailScreen" component={DetailScreen}
            ></Stack.Screen>
            <Stack.Screen name="NewTaskScreen" component={NewTaskScreen}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}
export default StackNavigator