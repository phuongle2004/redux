// src/screens/ExpenseListScreen.js
import React from 'react';
import { View, Text, FlatList, Button, Pressable, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteExpense } from '../redux/reducer/expenseSlice';

const ExpenseListScreen = ({ navigation }) => {
  const expenses = useSelector((state) => state.expenses.items);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteExpense(id));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text}>{item.description}</Text>
            <Text style={styles.text}>{item.date}</Text>
            <Text style={styles.text}>{item.type}</Text>
            <Text style={[styles.text, { marginBottom: 10 }]}>Amount: ${item.amount}</Text>
            <View style={styles.buttonContainer}>
              <Pressable onPress={() => handleDelete(item.id)} style={[styles.button, { backgroundColor: '#FF4C4C' }]}>
                <Text style={styles.textButton}>Delete</Text>
              </Pressable>
              <Pressable onPress={() => navigation.navigate('EditExpense', { item })} style={[styles.button, { backgroundColor: '#88D66C' }]}>
                <Text style={styles.textButton}>Edit</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
      <Pressable onPress={() => navigation.navigate('AddExpense')} style={[styles.functionButton, { backgroundColor: '#478CCF' }]}>
        <Text style={styles.textButton}>Add Expense</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Statistics')} style={[styles.functionButton, { backgroundColor: '#FFB22C' }]}>
        <Text style={styles.textButton}>Statistics</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Search')} style={[styles.functionButton, { backgroundColor: '#7469B6' }]}>
        <Text style={styles.textButton}>Search</Text>
      </Pressable>
    </ScrollView>
  );
};

export default ExpenseListScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  itemContainer: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 8,
    elevation: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 2,
    alignItems: 'center',
  },
  functionButton: {
    marginBottom: 10,
    paddingVertical: 12,
    borderRadius: 5,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});
