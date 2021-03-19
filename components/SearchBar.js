import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Dimensions,
} from 'react-native';

function SearchBar(props) {
  console.log(props.text);
  return (
    <>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={props.onChangeText}
          value={props.text}
          placeholder={'sdfsfsfsfdsf'}
        />
        <Button
          title={'Search For Movies'}
          style={styles.input}
          onPress={props.searchMovies}></Button>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  input: {
    color: '#000',
    borderColor: '#fff',
    borderWidth: 1,
  },
  searchButton: {},
});
export default SearchBar;
