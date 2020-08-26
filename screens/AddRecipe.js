import React, { useState, useReducer } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet} from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesome5 } from '@expo/vector-icons';
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import db from '../data/db_controller';
import * as FileSystem from 'expo-file-system';
import Path from 'path';

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
        // on recipe name change
        case 'ON_RECIPE_NAME_CHANGE':
            return { ...state, recipeName: action.recipeName };

        // on recipe name change
        case 'ON_RECIPE_DESC_CHANGE':
            return { ...state, recipeDesc: action.recipeDesc };

        // on recipe duration change
        case 'ON_RECIPE_DURATION_CHANGE':
            return { ...state, recipeDuration: action.recipeDuration };

        // on recipe difficulty change
        case 'ON_RECIPE_DIFFICULTY_CHANGE':
            return { ...state, recipeDifficulty: action.recipeDifficulty };

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
        case 'ADD_INSTRUCTION':
            const instruction = {
                id: uuidv4(),
                instruction: action.instruction,
            };
            return {
                ...state,
                instructions: [
                    ...state.instructions,
                    instruction
                ]
            };
        case 'REMOVE_INSTRUCTION':
            const instructions = [...state.instructions];
            const filteredInstructions = instructions.filter((instruction => instruction.id !== action.id));

            return {
                ...state,
                instructions: filteredInstructions
            };
    }
};

// Ingredient Item Component
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

// Instruction Item Component
const InstructionItem = (props) => (
    <View style={styles.ingredientListItem}>
        <View>
            <Text style={styles.ingredientListItemTitle}>{props.index + 1}. {props.instruction}</Text>
        </View>
        {props.last ? <TouchableOpacity style={styles.ingredientListItemRemove} onPress={props.onRemove}>
            <FontAwesome5
                name="trash-alt"
                size={16}
                color="red" />
        </TouchableOpacity> : null}
    </View>
);

const AddRecipe = (props) => {
    const [ingredientName, setIngredientName] = useState('');
    const [ingredientQty, setIngredientQty] = useState('');
    const [instructionText, setInstructionText] = useState('');
    const [previewImage, setPreviewImage] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);

    const onAddIngredientHandler = () => {
        dispatch({
            type: 'ADD_INGREDIENT',
            name: ingredientName,
            qty: ingredientQty
        });

        // Clear the inputs
        setIngredientName('');
        setIngredientQty('');
    }

    const onAddInstructionHandler = () => {
        dispatch({
            type: 'ADD_INSTRUCTION',
            instruction: instructionText
        });

        // Clear the input
        setInstructionText('');
    };

    const onLoadingPreviewImage = async () => {
        try {
            let result = await launchImageLibraryAsync({
                mediaTypes: MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            // Save the image uri in the state
            if (!result.cancelled) {
                setPreviewImage(result.uri);
            }

            console.log(result);
        } catch (E) {
            console.log(E);
        }
    };

    const onSubmitRecipe = async () => {
        const newPath = `${FileSystem.documentDirectory}${Math.floor(Math.random() * 1000000)}${Path.extname(previewImage)}`;
        const result = await FileSystem.copyAsync({ from: previewImage, to: newPath});
        const info = await FileSystem.getInfoAsync(newPath);
        if(info.exists){
            recordRecipe(newPath);
        }
    };

    // Save the recipe as a record
    const recordRecipe = (previewUri) => {
        db.transaction(tx => {
            tx.executeSql(`
                INSERT INTO Recipe (name, desc, duration, difficulty, ingredients, steps, image_uri) VALUES ( ?, ?, ?, ?, ?, ?, ?);
            `, [state.recipeName, state.recipeDesc, state.recipeDuration, state.recipeDifficulty, JSON.stringify(state.ingredients), JSON.stringify(state.instructions), previewUri],
                (_, { insertId }) => {
                    // If the recipe is added successfully go back
                    if (insertId)
                        props.navigation.navigate('Recipes');
                })
        });
    };

    return (
        <ScrollView style={styles.addRecipeScreen}>
            <View style={styles.addRecipeContainer}>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Recipe Name"
                    placeholderTextColor="#999"
                    maxLength={60}
                    value={state.recipeName}
                    onChangeText={(text) => dispatch({ type: 'ON_RECIPE_NAME_CHANGE', recipeName: text })} />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Recipe Description"
                    placeholderTextColor="#999"
                    maxLength={160}
                    multiline={true}
                    value={state.recipeDesc}
                    onChangeText={(text) => dispatch({ type: 'ON_RECIPE_DESC_CHANGE', recipeDesc: text })} />
                <View style={styles.rowContainer}>
                    <TextInput
                        style={styles.rowTextInputStyle}
                        placeholder="Recipe Duration"
                        placeholderTextColor="#999"
                        maxLength={20}
                        value={state.recipeDuration}
                        onChangeText={(text) => dispatch({ type: 'ON_RECIPE_DURATION_CHANGE', recipeDuration: text })} />
                    <TextInput
                        style={styles.rowTextInputStyle}
                        placeholder="Recipe Difficulty"
                        placeholderTextColor="#999"
                        maxLength={20}
                        value={state.recipeDifficulty}
                        onChangeText={(text) => dispatch({ type: 'ON_RECIPE_DIFFICULTY_CHANGE', recipeDifficulty: text })} />
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
                                    onRemoveIngredient={() => dispatch({ type: 'REMOVE_INGREDIENT', id: ingredient.id })} />)}
                    </View>
                </View>
                {/* Put a divider here */}
                <View style={styles.horizontalDivider} />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Step To Add"
                    placeholderTextColor="#999"
                    maxLength={255}
                    multiline={true}
                    onChangeText={(text) => setInstructionText(text)}
                    value={instructionText} />
                <View style={styles.addIngredientButtonContainer}>
                    <CustomButton
                        title="Add Step"
                        color="#624cab"
                        onPress={onAddInstructionHandler} />
                </View>

                <View style={styles.ingredientsContainer}>
                    <View>
                        <Text style={styles.ingredientsContainerHeading}>Steps</Text>
                    </View>
                    <View style={styles.ingredientsListContainer}>
                        {state.instructions.length === 0 ?
                            <Text>Please add at least an instruction</Text> :
                            state.instructions.map(({ id, instruction }, index) =>
                                <InstructionItem
                                    key={id}
                                    id={id}
                                    index={index}
                                    instruction={instruction}
                                    last={state.instructions.length === (++index)}
                                    onRemove={() => dispatch({ type: 'REMOVE_INSTRUCTION', id: id })} />)}
                    </View>
                </View>
                {/* Put a divider here */}
                <View style={styles.horizontalDivider} />
                <Text style={styles.textHeading}>Recipe Image</Text>
                <View>
                    <ImageBackground resizeMode="contain" style={{ flex: 1, height: 250, justifyContent: 'center' }} source={previewImage ? { uri: previewImage} : require('../assets/no_image_available.png')}>
                        <View style={styles.addIngredientButtonContainer}>
                            {previewImage ?
                                <CustomButton 
                                    title="Remove Image"
                                    color="#dc143c"
                                    onPress={() => setPreviewImage(null)}
                                />
                                : <CustomButton
                                    title="Load Image"
                                    color="#624cab"
                                    onPress={onLoadingPreviewImage} />}
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.addIngredientButtonContainer}>
                    <CustomButton
                        title="Add Recipe"
                        color="#624cab"
                        onPress={onSubmitRecipe} />
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
        alignSelf: 'center',
        marginTop: 20
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