import React, {useState} from 'react';
import {
  TouchableHighlight,
  Button,
  StyleSheet,
  View,
  Dimensions,
  Text,
  TextInput,
} from 'react-native';
import DatePicker from 'react-native-datepicker';

function FloatingFilter(props) {
  const [visibility, setVisibility] = useState(false);

  return (
    <View>
      {visibility ? (
        <View style={styles.dialogBox}>
          <Text>Filters</Text>
          <View style={styles.line}>
            <Text style={styles.title}>Language: </Text>
            <TextInput
              onChangeText={props.setLanguage}
              value={props.language}
              maxLength={2}
              style={styles.language}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.line}>
            <Text style={styles.title}>Release Year : </Text>
            <DatePicker
              style={{width: 200}}
              date={props.date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              onDateChange={props.setDate}
            />
          </View>
          {console.log(props.language)}
        </View>
      ) : (
        <></>
      )}
      <TouchableHighlight style={styles.filter}>
        <Button
          title={'+'}
          onPress={() => {
            console.log('Clicked');
            setVisibility(!visibility);
          }}
        />
      </TouchableHighlight>
      <Button
        title={'Clear Filter'}
        onPress={() => {
          props.setLanguage('');
          props.setDate(null);
        }}
        style={styles.clearButton}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 14,
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 5,
  },
  filter: {
    position: 'absolute',
    bottom: 25,
    right: 5,
    height: 50,
    width: 50,
  },
  clearButton: {
    position: 'relative',
    margin: 50,
  },
  dialogBox: {
    position: 'absolute',
    bottom: Dimensions.get('screen').height * 0.12,
    left: Dimensions.get('screen').width - Dimensions.get('screen').width * 0.9,
    width: Dimensions.get('screen').width * 0.8,
    height: Dimensions.get('screen').height * 0.2,
    opacity: 1,
    backgroundColor: '#fff',
    borderColor: 'grey',
    borderWidth: 1,
    flex: 1,
    alignItems: 'center',
  },
  language: {
    color: '#000',
    backgroundColor: '#fff',
    borderColor: 'grey',
    borderWidth: 1,
    width: '40%',
    height: 40,
  },
});
export default FloatingFilter;
