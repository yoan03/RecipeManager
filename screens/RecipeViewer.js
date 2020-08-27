import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import db from '../data/db_controller';

const RecipeViewer = (props) => {
    console.log(props.route);
    const { recipeId } = props.route.params;
    const [recipeInfo, setRecipeInfo] = useState(null);

    useEffect(() => {
        if (recipeId) {
            // Fetch recipe info
            db.transaction(tx => {
                tx.executeSql(`SELECT * FROM Recipe WHERE id=?`, [recipeId], (_, result) => {
                    const formattedRecipe = {
                        title: result.rows._array[0].name,
                        desc: result.rows._array[0].desc,
                        difficulty: result.rows._array[0].difficulty,
                        duration: result.rows._array[0].duration,
                        ingredients: JSON.parse(result.rows._array[0].ingredients),
                        instructions: JSON.parse(result.rows._array[0].steps),
                        imagePreview: result.rows._array[0].image_uri
                    };
                    console.log(formattedRecipe);
                    setRecipeInfo(formattedRecipe);
                })
            },
                (error) => {
                    console.error(error);
                })
        }
    }, [recipeId]);


    return (
        <ScrollView>
            {recipeInfo &&
                <>
                    <View style={styles.imageContainer}>
                        <Image
                            resizeMode='contain'
                            source={recipeInfo.imagePreview ? { uri: recipeInfo.imagePreview } : require('../assets/no_image_available.png')}
                            style={styles.image} />
                    </View>
                    <View style={styles.metaDataContainer}>
                        <View style={styles.metaDataItem}>
                            <Text style={styles.metaDataLabel}>Ready In:</Text><Text style={styles.metaDataValue}>{recipeInfo.duration}</Text>
                        </View>
                        <View style={styles.metaDataItem}>
                            <Text style={styles.metaDataLabel}>Level:</Text><Text style={styles.metaDataValue}>{recipeInfo.difficulty}</Text>
                        </View>
                    </View>

                    <View style={styles.headingContainer}>
                        <Text style={styles.headingText}>Ingredients</Text>
                    </View>
                    <View style={styles.dataContainer}>
                        {recipeInfo.ingredients.map(ingredient => (
                            <View style={styles.row}>
                                <Text style={styles.bullet}>• </Text><Text style={styles.regularFont}>{ingredient.name} • {ingredient.qty}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={styles.headingContainer}>
                        <Text style={styles.headingText}>Instructions</Text>
                    </View>
                    <View style={styles.recipeDataContainer}>
                        {recipeInfo.instructions.map((instruction, index) => (
                            <View style={styles.row}>
                                <Text style={styles.bullet}>{index+1}. </Text><Text style={styles.regularFont}>{instruction.instruction}</Text>
                            </View>
                        ))}
                    </View>
                </>
            }
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#aaa',
        borderWidth: 1,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#000'
    },
    image: {
        width: 500,
        height: 200
    },
    metaDataContainer: {
        alignItems: 'center'
    },
    recipeDataContainer: {
        marginHorizontal: 20,
        marginBottom: 30
    },
    metaDataItem: {
        flexDirection: 'row'
    },
    metaDataLabel: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingRight: 5
    },
    metaDataValue: {
        fontSize: 18
    },
    headingContainer: {
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#758ecd',
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 5,
        borderRadius: 4
    },
    headingText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    row: {
        flexDirection: 'row'
    },
    bullet: {
        fontWeight: 'bold',
        fontSize: 18
    },
    regularFont: {
        fontSize: 18
    },
    dataContainer: {
        marginHorizontal: 20
    }
});

export default RecipeViewer;