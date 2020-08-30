import db from '../data/db_controller';

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

// Delete a Recipe
const deleteRecipe = (id, cb) => {
    db.transaction((tx) => {
        tx.executeSql(`DELETE FROM Recipe WHERE id=?`, [id], (_, resultSet) => {
            cb();
        });
    })
}

