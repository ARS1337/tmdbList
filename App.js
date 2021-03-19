import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image, Alert} from 'react-native';
import MovieList from './components/MovieList';
import getData from './components/fetchh';
import SearchBar from './components/SearchBar';

//implement seazrch, a floating filter button and display using flatlist

const App = () => {
  let [list, setList] = useState([]);
  const [text, onChangeText] = React.useState('Search...');

  useEffect(() => {
    getData(
      '/discover/movie?api_key=7ba1c2f1e41171dea1127d4aa8237c9d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
    ).then(r => {
      setList(r.results);
    });
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <View>
        <SearchBar
          onChangeText={onChangeText}
          text={text}
          searchMovies={() => {
            searchMovies(text, setList);
          }}
        />
        <MovieList list={list} />
      </View>
    </SafeAreaView>
  );
};

let searchMovies = (text, setList) => {
  getData(
    `/search/movie?api_key=7ba1c2f1e41171dea1127d4aa8237c9d&language=en-US&query=${text}&page=1&include_adult=false`,
  )
    .then(r => {
      console.log('serchMovies noerror');
      if (typeof r.results !== 'undefined' && r.results.length > 0) {
        setList(r.results);
      } else {
        {
          Alert.alert('No Movies Found! Try Searching Something Else');
        }
      }
    })
    .catch(e => {
      console.log('serchMovies error');
      console.log(e);
      Alert.alert('An error occured ' + e);
    });
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    flex: 1,
    paddingBottom: 100,
  },
  image: {
    width: '100%',
    height: '70%',
  },
});

export default App;
