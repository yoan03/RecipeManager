import React from 'react';
import {ScrollView,TouchableNativeFeedback, View, Image, Text, Button, TextInput, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Components
import SearchInput from '../components/SearchInput';
import RecipeItem from '../components/RecipeItem';
import FloatingButton from '../components/FloatingButton';

const Recipe = (props) => {
    return (
        <View style={styles.screen}>
            <ScrollView style={styles.screen}>
                <SearchInput />
                <RecipeItem 
                    title="This is my recipe #1"
                    description="A good recipe to enjoy with the family"
                    metas={[{name: 'Ready In', value: '50m'}, {name: 'Level', value: 'Easy'}]}
                    onPress={() => props.navigation.navigate('RecipeViewer')}
                />
                <RecipeItem 
                    title="This is my recipe #1"
                    description="A good recipe to enjoy with the family"
                    metas={[{name: 'Ready In', value: '50m'}, {name: 'Level', value: 'Easy'}]}
                />
                <RecipeItem
                    title="This is my recipe #1"
                    description="A good recipe to enjoy with the family"
                    metas={[{name: 'Ready In', value: '50m'}, {name: 'Level', value: 'Easy'}]}
                />
                <RecipeItem
                    title="This is my recipe #1"
                    description="A good recipe to enjoy with the family"
                    metas={[{name: 'Ready In', value: '50m'}, {name: 'Level', value: 'Easy'}, {name: 'Type', value: 'Mediterranean'}, {name: 'Done', value: '3 Times'}]}
                />
            </ScrollView>
            <FloatingButton 
                containerStyle={styles.floatingButtonContainer}
                color="#7189ff"
                onPress={() => props.navigation.navigate('AddRecipe')} />
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