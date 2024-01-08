import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {
  myFetchDeleteRequest,
  myFetchGetRequest,
  myFetchPatchRequest,
  myFetchPostRequest,
  myFetchPutRequest,
} from '../ApisRequest/MyFetchApiRequest';
import {
  MyAxiosGetRequest,
  MyAxiosPatchRequest,
  MyAxiosPostRequest,
  MyAxiosPutRequest,
} from '../ApisRequest/MyAxiosRequests';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Splash() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  useEffect(() => {
    setTimeout(() => {
      checkLogin()
      navigation.navigate('Login');
    }, 3000);
    // getData();
  }, [isFocused]);

  const checkLogin = async () => {
    const email = await AsyncStorage.getItem('EMAil');
    const mobile = await AsyncStorage.getItem('MOBILE');
    const password = await AsyncStorage.getItem('PASSWORD');
    if (
      email !== null ||
      mobile !== null 
    ) {
      console.log(email, mobile);
      navigation.navigate('Main');
    }else{
      navigation.navigate('Login');
    }

  };

  const getData = async () => {
    // const res = await myFetchGetRequest();
    const data1 = {
      title: 'fkimxmaoo',
      body: 'baamomxar',
      //     userId: 1
    };
    const data2 = {
      title: 'fkimxmiijiaoo',
    };
    const res1 = await myFetchPostRequest(data1);
    const res = await myFetchPatchRequest(1, data2);
    //     console.log('data' , res, res1);

    const delres = await myFetchDeleteRequest(2);
    // console.log('data', delres);

    await MyAxiosGetRequest()
      .then(res => {
        //     console.log(res.data);
      })
      .catch(error => {
        //     console.log(error);
      });
    //
    await MyAxiosPutRequest(100, {title: 'vebnian', desc: 'nwdna', id: 100})
      .then(res => {
        // console.log(res);
      })
      .catch(err => {
        // console.log(err);
      });
  };

  // await MyAxiosPatchRequest(100, {title: 'vebnian'})
  // .then(res => {
  //         console.log(res);
  // })
  // .catch(err => {
  //         console.log(err);
  // });
  //   };
  // console.log("vaishnao");

  return (
    <View style={styles.container}>
      <Image source={require('../images/logo.png')} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  logo: {
    width: 200,
    height: 200,
    // color: 'white',
    // textAlign: 'center',
  },
});
