import React, {useState} from 'react';
import {ScrollView,TouchableNativeFeedback, View, Image, Text, Button, TextInput, StyleSheet, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Components
import SearchInput from '../components/SearchInput';
import RecipeItem from '../components/RecipeItem';
import FloatingButton from '../components/FloatingButton';

const Recipe = (props) => {
    // Floating Button parameters to hide
    const [initialDragY, setInitialDragY] = useState(0);
    const [currentDragY, setCurrentDragY] = useState(0);


    const data = [
        {
            title: "This is my recipe #1",
            description: "A good recipe to enjoy with the family",
            metas: [
                {
                    name: "Ready In",
                    value: "50m"
                },
                {
                    name: "Level",
                    value: "Easy"
                }
            ]
        },
        {
            title: "This is my recipe #1",
            description: "A good recipe to enjoy with the family",
            metas: [
                {
                    name: "Ready In",
                    value: "50m"
                },
                {
                    name: "Level",
                    value: "Easy"
                }
            ]
        },
        {
            title: "This is my recipe #1",
            description: "A good recipe to enjoy with the family",
            metas: [
                {
                    name: "Ready In",
                    value: "50m"
                },
                {
                    name: "Level",
                    value: "Easy"
                }
            ]
        },
        {
            title: "This is my recipe #1",
            description: "A good recipe to enjoy with the family",
            metas: [
                {
                    name: "Ready In",
                    value: "50m"
                },
                {
                    name: "Level",
                    value: "Easy"
                }
            ]
        },
        {
            title: "This is my recipe #1",
            description: "A good recipe to enjoy with the family",
            metas: [
                {
                    name: "Ready In",
                    value: "50m"
                },
                {
                    name: "Level",
                    value: "Easy"
                }
            ]
        }
    ];

    return (
        <View style={styles.screen}>
            <SearchInput />
            <FlatList style={styles.screen} 
                data={data}
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