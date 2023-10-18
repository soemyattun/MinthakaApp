import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import Btn from './Btn';

const Result = ({navigation}) => {
  const route = useRoute();
  const answerResult = route.params?.answerResult;

  return (
    <View style={styles.container}>
      <View style={{flex: 0.1}}>
        <View style={styles.appName}>
          <Text>မင်းသိင်္ခ </Text>
          <Text style={styles.nameText}>/ လက်ထောက်ဗေဒင်</Text>
        </View>
      </View>

      <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
        <Image
          source={require('../src/assets/mintheinkha-logo.png')}
          style={styles.logoImg}
        />

        <Text style={styles.appNam}>လက်ထောက်ဗေဒင်</Text>

        <Text style={styles.answerText}>{answerResult}</Text>

        <TouchableOpacity>
          <Btn
            containerStyle={{backgroundColor: '#2596be'}}
            textStyle={{
              color: 'white',
              fontSize: 15,
              width: 80,
              paddingHorizontal: 10,
            }}
            btnLabel="နောက်သို့"
            onPress={() => navigation.navigate('First')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.startName}>made with </Text>
        <Image
          source={require('../src/assets/love.png')}
          style={styles.loveIcon}
        />
        <Text style={styles.byName}>by SMT</Text>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f2f6',
  },
  appName: {
    flexDirection: 'row',
    marginRight: 170,
    marginVertical: 15,
  },
  nameText: {
    color: '#000000',
    fontSize: 15,
  },
  logoImg: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginTop: 15,
  },
  appNam: {
    color: '#000000',
    fontSize: 15,
  },
  answerText: {
    fontSize: 15,
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
    lineHeight: 20,
    paddingHorizontal: 60,
    marginBottom: 20,
  },
  startName: {
    fontSize: 15,
  },
  nameContainer: {
    flex: 0.1,
    flexDirection: 'row',
    marginTop: 20,
    fontWeight: 'bold',
  },
  loveIcon: {
    width: 20,
    height: 20,
  },
  byName: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
