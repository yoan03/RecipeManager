import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

// Screens
import RecipesScreen from './screens/Recipes';
import AddRecipeScreen from  './screens/AddRecipe';
import RecipeViewerScreen from './screens/RecipeViewer';
import RecipeGalleryScreen from './screens/RecipeGallery';
import RecipeNotesScreen from './screens/RecipeNotes';

const StackNavigator = createStackNavigator();
const TabNavigator = createBottomTabNavigator();

// Default screen options
const defaultScreenOptions = {
    headerStyle: {
        backgroundColor: '#624cab'
    },
    headerTintColor: "#fff"
};

// Main Navigator Screen
const Navigator = (props) => {
    const TabRecipeViewerNavigator = () => (
        <TabNavigator.Navigator
            tabBarOptions={{
                inactiveBackgroundColor: '#624cab',
                activeBackgroundColor: '#624cab',
                activeTintColor: '#aaa',
                inactiveTintColor: '#fff',
                labelStyle: {
                    fontSize: 14
                }
            }}
            >
            <TabNavigator.Screen 
                name="RecipeViewer"
                component={RecipeViewerScreen}
                options={{
                    title: 'Recipe',
                    tabBarIcon: ({color}) => <MaterialCommunityIcons name="book-open" size={24} color={color} />,
                    ...defaultScreenOptions
                }}
                
                />
            <TabNavigator.Screen 
                name="RecipeGallery"
                component={RecipeGalleryScreen}
                options={{
                    title: 'Gallery',
                    tabBarIcon: ({color}) => <MaterialCommunityIcons name="camera" size={24} color={color} />,
                    ...defaultScreenOptions
                }}
                />
            <TabNavigator.Screen 
                name="RecipeNotes"
                component={RecipeNotesScreen}
                options={{
                    title: 'Notes',
                    tabBarIcon: ({color}) => <MaterialCommunityIcons name="note-text" size={24} color={color} />,
                    ...defaultScreenOptions
                }}
                />
        </TabNavigator.Navigator>
    );

    return (
        <NavigationContainer>
            <StackNavigator.Navigator>
                <StackNavigator.Screen 
                    name='Recipes' 
                    component={RecipesScreen}
                    options={defaultScreenOptions}  />
                <StackNavigator.Screen 
                    name='AddRecipe' 
                    component={AddRecipeScreen}
                    options={{
                        title: "Add New Recipe",
                        ...defaultScreenOptions
                    }} />
                <StackNavigator.Screen 
                    name='RecipeViewer' 
                    component={TabRecipeViewerNavigator}
                    options={{
                        title: "Recipe Viewer",
                        ...defaultScreenOptions
                    }} />
            </StackNavigator.Navigator>
        </NavigationContainer>
    )
};

export default Navigator;