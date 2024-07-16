// src/screens/StatisticsScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const StatisticsScreen = () => {
  const totalIncome = useSelector((state) => state.expenses.totalIncome);
  const totalExpense = useSelector((state) => state.expenses.totalExpense);

  return (
    <View style = {{margin: 20}}>
      <Text style = {{fontSize: 16}}>Khoản thu: {totalIncome}</Text>
      <Text style = {{fontSize: 16}}>Khoản chi: {totalExpense}</Text>
    </View>
  );
};

export default StatisticsScreen;


