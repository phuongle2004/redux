// src/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';
import ExpenseListScreen from './src/screens/ExpenseListScreen';
import AddEditExpenseScreen from './src/screens/AddEditExpenseScreen';
import StatisticsScreen from './src/screens/StatisticsScreen';
import SearchScreen from './src/screens/SearchScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ExpenseList">
          <Stack.Screen name="ExpenseList" component={ExpenseListScreen} />
          <Stack.Screen name="AddExpense" component={AddEditExpenseScreen} />
          <Stack.Screen name="EditExpense" component={AddEditExpenseScreen} />
          <Stack.Screen name="Statistics" component={StatisticsScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
