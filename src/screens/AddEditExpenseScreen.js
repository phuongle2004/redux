// src/screens/AddEditExpenseScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { addExpense, updateExpense } from '../redux/reducer/expenseSlice';

const AddEditExpenseScreen = ({ route, navigation }) => {
  const [title, setTitle] = useState(route.params?.item?.title || '');
  const [description, setDescription] = useState(route.params?.item?.description || '');
  const [date, setDate] = useState(route.params?.item?.date || '');
  const [type, setType] = useState(route.params?.item?.type || '');
  const [amount, setAmount] = useState(route.params?.item?.amount || '');

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const expense = {
      id: route.params?.item?.id || Date.now(),
      title,
      description,
      date,
      type,
      amount: parseFloat(amount),
    };
    if (route.params?.item) {
      dispatch(updateExpense(expense));
    } else {
      dispatch(addExpense(expense));
    }
    navigation.goBack();
  };

  return (
    <View style = {{marginHorizontal: 20, marginTop: 20}}>
      <Text>Tiêu đề</Text>
      <TextInput style = {styles.input} value={title} onChangeText={setTitle} />
      <Text>Mô tả</Text>
      <TextInput style = {styles.input} value={description} onChangeText={setDescription} />
      <Text>Ngày</Text>
      <TextInput style = {styles.input} value={date} onChangeText={setDate} />
      <Text>Loại</Text>
      <TextInput style = {styles.input} value={type} onChangeText={setType} />
      <Text>Số tiền</Text>
      <TextInput style = {styles.input} value={amount} onChangeText={setAmount} keyboardType="numeric" />
      <Pressable title="Save" onPress={handleSubmit} style = {styles.button}>
        <Text style = {styles.textButton}>Save</Text>
      </Pressable>
    </View>
  );
};

export default AddEditExpenseScreen;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    height: 42,
  },
  button: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#478CCF',
    borderRadius: 5,
    elevation: 2,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
  },
})
