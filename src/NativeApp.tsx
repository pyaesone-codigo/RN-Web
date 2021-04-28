import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import HomePage from './page/HomePage';
import DetailPage from './page/DetailPage';
import {RouteName} from './navigation';

const Stack = createNativeStackNavigator();
const NativeApp = () => {
  console.log(Platform.OS);
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name={RouteName.HomePage} component={HomePage} />
          <Stack.Screen name={RouteName.DetailPage} component={DetailPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default NativeApp;
