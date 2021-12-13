import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ServerForm} from './ServerForm';

export const HomeScreen = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.container}>
        <ServerForm />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 15,
  },
});
