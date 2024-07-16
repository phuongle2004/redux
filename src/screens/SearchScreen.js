// src/screens/SearchScreen.js
import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const expenses = useSelector((state) => state.expenses.items);
  const filteredExpenses = expenses.filter((expense) => 
    expense.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style = {{margin: 20}}>
      <TextInput
        placeholder="Search by title"
        value={searchTerm}
        onChangeText={setSearchTerm}
        style = {styles.input}
      />
      <FlatList
        data={filteredExpenses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.date}</Text>
            <Text>{item.type}</Text>
            <Text>{item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    height: 42,
  },
})
