import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

const Input = ({
  label,
  value,
  onChangeTextInput,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        autoCapitalize="none"
        value={value}
        onChangeText={onChangeTextInput}
        placeholder={placeholder}
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  textInput: {
    color: '#007aff',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  label: {
    marginTop: 8,
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
});

export {Input};
