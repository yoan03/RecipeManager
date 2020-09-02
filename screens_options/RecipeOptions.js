import db from '../data/db_controller';
import { deleteAsync } from 'expo-file-system'

// Constants
export const EDIT_RECIPE = 0;
export const DELETE_RECIPE = 1;

const options = [
    {
        name: 'Edit Recipe',
        value: EDIT_RECIPE
    },
    {
        name: 'Delete Recipe',
        value: DELETE_RECIPE
    }
];

// This will retrieve all options
export const getOptions = () => {
    const result = options.map((value) => value.name);
    return result;
};

// This will run the command with the option
export const runOptionsCommand = (command, recipeId, navigateFunc) => {

    switch (command) {
        case EDIT_RECIPE:
            console.log('Editing Recipe: ', recipeId);
            navigateFunc('AddRecipe');
            break;
        case DELETE_RECIPE:
            console.log('Deleting Recipe: ', recipeId);
            deleteRecipe(recipeId, () => navigateFunc('Recipes'));
            break;
        default:
            console.log('This function doesn\'t exists');
    }
}

// Delete a Recipe along with the preview image
const deleteRecipe = (id, cb) => {
    db.transaction((tx) => {
        tx.executeSql('SELECT image_uri FROM Recipe WHERE id=?;', [id], (tx2, resultSet) => {
            console.log("Starting deletion");
            const imageUri = resultSet.rows._array[0].image_uri;

            if(imageUri)
                deleteAsync(imageUri, { idempotent: true });
            
            tx2.executeSql('DELETE FROM Recipe WHERE id=?;', [id], (_, resultSet) => {
                console.log("Recipe deleted!");
                cb();
            }, (_, error) => {
                console.log(error);
            });
        });


    });
}

