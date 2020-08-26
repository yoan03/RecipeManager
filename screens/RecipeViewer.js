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
                            source={recipeInfo.imagePreview ? { uri: recipeInfo.imagePreview} : require('../assets/no_image_available.png')}
                            style={styles.image} />
                    </View>
                    <View style={styles.metaDataContainer}>
                        <View style={styles.metaDataItem}>
                            <Text style={styles.metaDataLabel}>Ready In:</Text><Text style={styles.metaDataValue}>30 Minutes</Text>
                        </View>
                        <View style={styles.metaDataItem}>
                            <Text style={styles.metaDataLabel}>Level:</Text><Text style={styles.metaDataValue}>Beginner</Text>
                        </View>
                        <View style={styles.metaDataItem}>
                            <Text style={styles.metaDataLabel}>Done:</Text><Text style={styles.metaDataValue}>2 Times</Text>
                        </View>
                        <View style={styles.metaDataItem}>
                            <Text style={styles.metaDataLabel}>Next Level:</Text><Text style={styles.metaDataValue}>10</Text>
                        </View>
                    </View>

                    <View style={styles.headingContainer}>
                        <Text style={styles.headingText}>Ingredients</Text>
                    </View>
                    <View style={styles.dataContainer}>
                        <View style={styles.row}>
                            <Text style={styles.bullet}>•</Text><Text style={styles.regularFont}>2 Cups of Rice</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.bullet}>•</Text><Text style={styles.regularFont}>1 Bag of Mixed Vegetable</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.bullet}>•</Text><Text style={styles.regularFont}>1 tsp of Salt</Text>
                        </View >
                        <View style={styles.row}>
                            <Text style={styles.bullet}>•</Text><Text style={styles.regularFont}>1 tsp of Garlic Salt</Text>
                        </View>
                    </View>
                    <View style={styles.headingContainer}>
                        <Text style={styles.headingText}>Instructions</Text>
                    </View>
                    <View style={styles.recipeDataContainer}>
                        <View style={styles.row}>
                            <Text style={styles.bullet}>1. </Text><Text style={styles.regularFont}>Put a pot in medium/low heat. </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.bullet}>2. </Text><Text style={styles.regularFont}>Put rice when the water begins to Evaporate.</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.bullet}>3. </Text><Text style={styles.regularFont}>Simmer for 15 Minutes. </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.bullet}>4. </Text><Text style={styles.regularFont}>Add the rest of ingredients and simmer for another 15 Minutes.</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.bullet}>5. </Text><Text style={styles.regularFont}>Taste if good then it's done.</Text>
                        </View>
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