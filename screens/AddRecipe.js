import React, { useState, useReducer } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesome5 } from '@expo/vector-icons';

// components
import CustomButton from '../components/CustomButton';

const initialState = {
    recipeName: '',
    recipeDesc: '',
    recipeDuration: '',
    recipeDifficulty: '',
    ingredients: [],
    instructions: []
};

const reducer = (state, action) => {
    switch (action.type) {
        // Add ingredient
        case 'ADD_INGREDIENT':
            const ingredient = {
                id: uuidv4(),
                name: action.name,
                qty: action.qty
            };
            return {
                ...state,
                ingredients: [
                    ...state.ingredients,
                    ingredient
                ]
            };
        case 'REMOVE_INGREDIENT':
            const ingredients = [...state.ingredients];
            const filteredIngredients = ingredients.filter((ingredient => ingredient.id !== action.id));

            return {
                ...state,
                ingredients: filteredIngredients
            };
    }
};

// Ingredient Item Components
const IngredientItem = (props) => (
    <View style={styles.ingredientListItem}>
        <View>
            <Text style={styles.ingredientListItemTitle}> • {props.name} - {props.qty}</Text>
        </View>
        <TouchableOpacity style={styles.ingredientListItemRemove} onPress={props.onRemoveIngredient}>
            <FontAwesome5
                name="trash-alt"
                size={16}
                color="red" />
        </TouchableOpacity>
    </View>
);


const AddRecipe = (props) => {
    const [ingredientName, setIngredientName] = useState('');
    const [ingredientQty, setIngredientQty] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);

    const onAddIngredientHandler = () => {
        dispatch({
            type: 'ADD_INGREDIENT',
            name: ingredientName,
            qty: ingredientQty
        });
        setIngredientName('');
        setIngredientQty('');
    }

    return (
        <ScrollView style={styles.addRecipeScreen}>
            <View style={styles.addRecipeContainer}>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Recipe Name"
                    placeholderTextColor="#999"
                    maxLength={60} />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Recipe Description"
                    placeholderTextColor="#999"
                    maxLength={160}
                    multiline={true} />
                <View style={styles.rowContainer}>
                    <TextInput
                        style={styles.rowTextInputStyle}
                        placeholder="Recipe Duration"
                        placeholderTextColor="#999"
                        maxLength={20} />
                    <TextInput
                        style={styles.rowTextInputStyle}
                        placeholder="Recipe Difficulty"
                        placeholderTextColor="#999"
                        maxLength={20} />
                </View>
                {/* Put a divider here */}
                <View style={styles.horizontalDivider} />
                <View style={styles.rowContainer}>
                    <TextInput
                        style={styles.ingredientTextInputStyle}
                        placeholder="Ingredients to add"
                        placeholderTextColor="#999"
                        maxLength={30}
                        value={ingredientName}
                        returnKeyType="next"
                        onChangeText={(text) => setIngredientName(text)} />
                    <TextInput
                        style={styles.rowTextInputStyle}
                        placeholder="Qty"
                        placeholderTextColor="#999"
                        maxLength={20}
                        value={ingredientQty}
                        onChangeText={(text) => setIngredientQty(text)} />
                </View>
                <View style={styles.addIngredientButtonContainer}>
                    <CustomButton
                        title="Add Ingredient"
                        color="#624cab"
                        onPress={onAddIngredientHandler} />
                </View>
                <View style={styles.ingredientsContainer}>
                    <View>
                        <Text style={styles.ingredientsContainerHeading}>Ingredients</Text>
                    </View>
                    <View style={styles.ingredientsListContainer}>
                       {state.ingredients.length === 0 ? <Text>Please add ingredients</Text> :
                       state.ingredients.map((ingredient) => 
                       <IngredientItem 
                            key={ingredient.id} 
                            name={ingredient.name} 
                            qty={ingredient.qty}
                            onRemoveIngredient={() => dispatch({type: 'REMOVE_INGREDIENT', id: ingredient.id})} />)} 
                    </View>
                </View>
                {/* Put a divider here */}
                <View style={styles.horizontalDivider} />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Step To Add"
                    placeholderTextColor="#999"
                    maxLength={255}
                    multiline={true} />
                <View style={styles.addIngredientButtonContainer}>
                    <CustomButton
                        title="Add Step"
                        color="#624cab" />
                </View>

                <View style={styles.ingredientsContainer}>
                    <View>
                        <Text style={styles.ingredientsContainerHeading}>Steps</Text>
                    </View>
                    <View style={styles.ingredientsListContainer}>
                        <View style={styles.ingredientListItem}>
                            <View>
                                <Text style={styles.ingredientListItemTitle}>1. Put a pot in medium/low heat.</Text>
                            </View>
                        </View>
                        <View style={styles.ingredientListItem}>
                            <View>
                                <Text style={styles.ingredientListItemTitle}>2. Put rice when the water begins to Evaporate.</Text>
                            </View>
                        </View>
                        <View style={styles.ingredientListItem}>
                            <View>
                                <Text style={styles.ingredientListItemTitle}>3. Simmer for 15 Minutes.</Text>
                            </View>
                            <TouchableOpacity style={styles.ingredientListItemRemove}>
                                <FontAwesome5
                                    name="trash-alt"
                                    size={16}
                                    color="red" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/* Put a divider here */}
                <View style={styles.horizontalDivider} />
                <Text style={styles.textHeading}>Recipe Image</Text>
                <View>
                    <ImageBackground resizeMode="contain" style={{ flex: 1, height: 250, justifyContent: 'center' }} source={require('../assets/no_image_available.png')}>
                        <View style={styles.addIngredientButtonContainer}>
                            <CustomButton
                                title="Load Image"
                                color="#624cab" />
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.addIngredientButtonContainer}>
                    <CustomButton
                        title="Add Recipe"
                        color="#624cab" />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    addRecipeScreen: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        flex: 1
    },
    addRecipeContainer: {
        paddingVertical: 20
    },
    textInputStyle: {
        backgroundColor: '#ededed',
        paddingVertical: 10,
        fontSize: 18,
        borderRadius: 4,
        margin: 10,
        paddingLeft: 10
    },
    rowTextInputStyle: {
        backgroundColor: '#ededed',
        paddingVertical: 10,
        fontSize: 18,
        borderRadius: 4,
        margin: 10,
        paddingLeft: 10,
        flex: 1
    },
    ingredientTextInputStyle: {
        backgroundColor: '#ededed',
        paddingVertical: 10,
        fontSize: 18,
        borderRadius: 4,
        margin: 10,
        paddingLeft: 10,
        flex: 3
    },
    rowContainer: {
        flexDirection: 'row'
    },
    horizontalDivider: {
        borderColor: '#eee',
        borderTopWidth: 2,
        marginHorizontal: 10
    },
    addIngredientButtonContainer: {
        width: '50%',
        height: 50,
        alignSelf: 'center'
    },
    ingredientsContainer: {
        margin: 10
    },
    ingredientsContainerHeading: {
        fontWeight: 'bold',
        fontSize: 22,
        paddingLeft: 10
    },
    ingredientsListContainer: {
        backgroundColor: '#ededed',
        borderRadius: 4,
        padding: 10
    },
    ingredientListItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 3
    },
    ingredientListItemTitle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    ingredientListItemRemove: {
        marginRight: 10
    },
    textHeading: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        paddingVertical: 10
    }
});

export default AddRecipe;