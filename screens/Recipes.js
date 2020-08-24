import React, {useState, useEffect} from 'react';
import {ScrollView,TouchableNativeFeedback, View, Image, Text, Button, TextInput, StyleSheet, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Components
import SearchInput from '../components/SearchInput';
import RecipeItem from '../components/RecipeItem';
import FloatingButton from '../components/FloatingButton';
import db from '../data/db_controller';

const Recipe = (props) => {
    // Floating Button parameters to hide
    const [initialDragY, setInitialDragY] = useState(0);
    const [currentDragY, setCurrentDragY] = useState(0);
    const [recipes, setRecipes] = useState([]);

    useEffect(()=> {
        console.log("Running Effect!")
        // Check the recipes store in the database!
        db.transaction(tx => {
            tx.executeSql(`
                SELECT name, desc, duration, difficulty FROM Recipe
            `, [], (_, {rows}) => {
                console.log("Uhm")
                const recipesFormatted = rows._array.map(obj => ({
                    title: obj.name,
                    description: obj.desc,
                    metas: [
                        {
                            name: 'Ready In',
                            value: obj.duration
                        },
                        {
                            name: 'Level',
                            value: obj.difficulty
                        }]
                    }
                ));


                console.log("Recipes: ", recipesFormatted);

                setRecipes(recipesFormatted);
            }, (error) => {
                console.log(error);
            });
        })
    }, []);

    return (
        <View style={styles.screen}>
            <SearchInput />
            <FlatList style={styles.screen} 
                data={recipes}
                renderItem={({item}) => <RecipeItem title={item.title} description={item.description} metas={item.metas} onPress={() => props.navigation.navigate('RecipeViewer')} />} 
                keyExtractor={(item, index) => (index + "RecipeItem")}
                onScrollBeginDrag={(e) => setInitialDragY(e.nativeEvent.contentOffset.y)}
                onScroll={(e) => setCurrentDragY(e.nativeEvent.contentOffset.y)} />
            <FloatingButton 
                containerStyle={styles.floatingButtonContainer}
                color="#7189ff"
                onPress={() => props.navigation.navigate('AddRecipe')}
                viewPos={{current: currentDragY, initial: initialDragY}} />
        </View>
        
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#fff',
        flex: 1
    },
    floatingButtonContainer: {
        position: 'absolute', 
        bottom: 20, 
        right: 20
    }
});

export default Recipe;