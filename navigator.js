import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import RecipesScreen from './screens/Recipes';
import AddRecipeScreen from  './screens/AddRecipe';
import RecipeViewerScreen from './screens/RecipeViewer';

const StackNavigator = createStackNavigator();

// Navigator Screen
const Navigator = (props) => {
    return (
        <NavigationContainer>
            <StackNavigator.Navigator>
                <StackNavigator.Screen 
                    name='Recipes' 
                    component={RecipesScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: '#624cab'
                        },
                        headerTintColor: "#fff"
                    }}  />
                <StackNavigator.Screen 
                    name='AddRecipe' 
                    component={AddRecipeScreen}
                    options={{
                        title: "Add New Recipe",
                        headerStyle: {
                            backgroundColor: '#624cab'
                        },
                        headerTintColor: "#fff"
                    }} />
                <StackNavigator.Screen 
                    name='RecipeViewer' 
                    component={RecipeViewerScreen}
                    options={{
                        title: "Recipe Viewer",
                        headerStyle: {
                            backgroundColor: '#624cab'
                        },
                        headerTintColor: "#fff"
                    }} />
            </StackNavigator.Navigator>
        </NavigationContainer>
    )
};

export default Navigator;