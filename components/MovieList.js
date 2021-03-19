import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  Image,
  ImageBackground,
  Alert,
  TouchableHighlight,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import FloatingFilter from './FloatingFilter';

function MovieList(props) {
  if (typeof props.list !== 'undefined' && props.list.length > 0) {
    const [language, setLanguage] = useState('en');
    const [date, setDate] = useState(null);
    let temp = props.list;
    let getFilter = () => {
      if (language.length == 2) {
        temp = props.list.filter(x => x.original_language == language);
      }
      if (date != null) {
        return temp.filter(x => {
          return (
            new Date(x.release_date.substr(0, 4)) > new Date(date.substr(0, 4))
          );
        });
      } else {
        return temp;
      }
    };
    return (
      <>
        <FlatList
          data={getFilter()}
          renderItem={item => {
            return (
              <View style={styles.listItem}>
                <Text style={styles.title}>{item.item.title}</Text>
                <View style={styles.data}>
                  <Image
                    style={styles.image}
                    source={{
                      uri:
                        'https://image.tmdb.org/t/p/w185' +
                        item.item.poster_path,
                    }}
                  />
                  <View style={styles.data2}>
                    <Text>{'Released on: ' + item.item.release_date}</Text>
                    <Text>{'Language : ' + item.item.original_language}</Text>
                    {item.item.adult ? (
                      <Text>Rating: adults Only</Text>
                    ) : (
                      <Text>Rating: All </Text>
                    )}
                  </View>
                </View>
                <Text style={styles.overview}>
                  {item.item.overview.substr(0, 250) + '...'}
                </Text>
              </View>
            );
          }}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
        />
        <FloatingFilter
          language={language}
          setLanguage={setLanguage}
          date={date}
          setDate={setDate}
        />
      </>
    );
  } else {
    return (
      <>
        <Text>No Movies Found</Text>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  data2: {
    flexShrink: 1,
  },
  data: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 5,
  },
  title: {
    fontSize: 18,
    alignSelf: 'center',
    paddingBottom: 5,
  },
  listItem: {
    padding: 5,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 15,
    marginBottom: 5,
    flex: 1 / 2,
  },
  overview: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default MovieList;
