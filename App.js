import React from 'react';
import { StyleSheet } from 'react-native';
import Navigator from './navigator';
import db from './data/db_controller';

// Run initialization for the database
db.transaction((tx) => {
  tx.executeSql(`
      CREATE TABLE if not exists Recipe (
          id integer PRIMARY KEY,
          name varchar(255),
          desc varchar(255),
          duration varchar(255),
          difficulty varchar(255),
          ingredients text,
          steps text,
          image_uri varchar(255)
      );

      CREATE TABLE if not exists Gallery (
          id integer PRIMARY KEY,
          desc varchar(255),
          recipeId integer
        );
        
      CREATE TABLEif not exists  Notes (
          id integer PRIMARY KEY,
          note text,
          dateWritten datetime,
          recipeId integer
      );
        
      ALTER TABLE Gallery ADD FOREIGN KEY (recipeId) REFERENCES Recipe (id);
      
      ALTER TABLE Notes ADD FOREIGN KEY (recipeId) REFERENCES Recipe (id);
  `);
});

export default function App() {
  return (
    <Navigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
