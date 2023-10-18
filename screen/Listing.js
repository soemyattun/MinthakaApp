import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {useRoute} from '@react-navigation/native';
import {numberLists} from './constants';
import {Answers} from './constants';
import Btn from './Btn';

const numColu = 9;
const ListBox = ({navigation}) => {
  const route = useRoute();
  const {questionName, questionNo} = route.params;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.appName}>
          <Text>မင်းသိင်္ခ </Text>
          <Text style={{color: '#000000'}}>/ လက်ထောက်ဗေဒင်</Text>
        </View>

        <View style={styles.containerChild}>
          <Image
            source={require('../src/assets/mintheinkha-logo.png')}
            style={styles.logoImg}
          />

          <Text
            style={{
              color: '#000000',
              fontSize: 20,
              margin: 10,
              marginStart: 120,
            }}>
            လက်ထောက်ဗေဒင်
          </Text>

          <TouchableOpacity>
            <Btn
              containerStyle={{
                backgroundColor: '#2596be',
                width: 310,
                marginHorizontal: 40,
                marginVertical: 10,
              }}
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
          <Text style={styles.questionName}>{questionName}</Text>
        </View>

        <FlatList
          data={numberLists}
          numColumns={numColu}
          keyExtractor={item => item}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  if (item.toString() === '၁') item = 1;
                  if (item.toString() === '၂') item = 2;
                  if (item.toString() === '၃') item = 3;
                  if (item.toString() === '၄') item = 4;
                  if (item.toString() === '၅') item = 5;
                  if (item.toString() === '၆') item = 6;
                  if (item.toString() === '၇') item = 7;
                  if (item.toString() === '၈') item = 8;
                  if (item.toString() === '၉') item = 9;
                  if (item.toString() === '၁၀') item = 10;

                  const res = Answers.find(
                    x => x.answerNo === item && x.questionNo === questionNo,
                  );

                  navigation.navigate('Result', {
                    answerResult: res.answerResult,
                  });
                }}>
                <View style={styles.btnContainer}>
                  <Text style={styles.btnGroup}>{item}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <View style={styles.byName}>
          <Text style={{fontSize: 15}}>made with </Text>
          <Image
            source={require('../src/assets/love.png')}
            style={{width: 20, height: 20}}
          />
          <Text style={{color: '#000000', fontSize: 15, fontWeight: 'bold'}}>
            by SMT
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ListBox;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerChild: {
    backgroundColor: '#ffffff',
  },
  appName: {
    flexDirection: 'row',
    marginRight: 170,
    marginHorizontal: 10,
  },

  logoImg: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginTop: 15,
    marginStart: 160,
  },
  btnContainer: {
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#592c1e',
    height: 30,
    width: 30,
  },
  btnGroup: {
    color: 'white',
  },
  questionName: {
    fontSize: 16,
    lineHeight: 25,
    maxWidth: 340,
    marginStart: 35,
    marginBottom: 20,
    color: 'black',
  },
  byName: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 10,
  },
});
