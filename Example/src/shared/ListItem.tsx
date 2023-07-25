import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  testID?: string;
}

export const ListItem = ({ title, onPress, testID }: Props): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress} testID={testID}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  title: {
    color: 'black',
  },
  chevron: {
    fontWeight: 'bold',
    color: 'black',
  },
});