import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Questions} from './NumberList';

const First = ({navigation}) => {
  const [filterQuestion, setFilterQuestion] = useState(Questions);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.appName}>
          <Text>မင်းသိင်္ခ </Text>
          <Text style={{color: '#000000'}}>/ လက်ထောက်ဗေဒင်</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Second')}>
          <Image
            source={require('../src/assets/mintheinkha-logo.png')}
            style={styles.logoImg}
          />
        </TouchableOpacity>
        <Text style={styles.logoName}>လက်ထောက်ဗေဒင်</Text>

        <View
          style={{
            borderWidth: 0.2,
            borderRadius: 5,
            paddingVertical: 10,
            paddingRight: 25,
          }}>
          <View>
            <Text style={styles.knowText}>
              သိလိုသော မေးခွန်းအား ရှာဖွေပါ...
            </Text>
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              style={{width: 300}}
              onChangeText={text => {
                if (!text) {
                  setFilterQuestion(Questions);
                  return;
                }
                setFilterQuestion(
                  filterQuestion.filter(item =>
                    item.questionName.includes(text),
                  ),
                );
              }}
            />
            <Image
              source={require('../src/assets/down-arrow.png')}
              style={styles.downImg}
            />
          </View>
        </View>
      </View>

      <FlatList
        data={filterQuestion}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                padding: 10,
                borderWidth: 0.2,
                borderRadius: 1,
                width: 350,
                paddingEnd: 60,
                marginStart: 20,
              }}
              onPress={() => {
                navigation.navigate('Hello', {
                  questionName: item.questionName,
                  questionNo: item.questionNo,
                });
              }}>
              <Text style={{color: '#583937', paddingHorizontal: 5}}>
                {item.questionNo}
              </Text>

              <Text style={styles.item}>{item.questionName}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.questionNo.toString()}
      />
    </SafeAreaView>
  );
};

export default First;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '',
  },
  appName: {
    flexDirection: 'row',
    marginRight: 170,
  },
  logoImg: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },
  logoName: {
    color: '#000000',
    fontSize: 20,
    marginTop: 5,
    marginVertical: 5,
  },
  knowText: {
    marginRight: 10,
    color: '#000000',
    marginBottom: 3,
    paddingHorizontal: 20,
  },
  inputGroup: {
    borderWidth: 0.6,
    width: 320,
    height: 40,
    borderRadius: 4,
    flexDirection: 'row',
    marginTop: 1,
    marginLeft: 25,
  },
  downImg: {
    width: 12,
    height: 12,
    marginTop: 15,
  },
  item: {
    marginVertical: 5,
    fontSize: 15,
    color: '#583937',
  },
});
