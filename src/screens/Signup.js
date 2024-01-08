import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  // const handleSubmit = () => {
  //   const userData = {
  //     name: name,
  //     email,
  //     mobile,
  //     password,
  //   };
  //   if(name && email && password && mobile) {
  //     axios
  //     .post('http://192.168.229.183:5004/register', userData)
  //     .then(res =>{ console.log('res,data')
  //     if(res.data.status=="ok"){
  //       Alert.alert("Registered successfully")
  //     }else{
  //       Alert.alert(JSON.stringify(res.data))
  //     }
  //   })
  //     .catch(err => console.log(err))
  //   }else{
  //     Alert.alert("Fill mandatory fields")
  //   }
  // };

  const saveRegistration = async () => {
    try {
      await AsyncStorage.setItem('NAME', name);
      await AsyncStorage.setItem('EMAIL', email);
      await AsyncStorage.setItem( 'MOBILE', mobile);
      await AsyncStorage.setItem('PASSWORD', password);
      navigation.navigate('Contact');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        placeholder="Enter Name"
        style={[styles.input, {marginTop: 50}]}
        value={name}
        onChangeText={txt => setName(txt)}
      />
      <TextInput
        placeholder="Enter Email"
        style={[styles.input, {marginTop: 20}]}
        value={email}
        onChangeText={txt => setEmail(txt)}
      />
      <TextInput
        placeholder="Enter Mobile"
        keyboardType={'number-pad'}
        style={[styles.input, {marginTop: 20}]}
        value={mobile}
        onChangeText={txt => setMobile(txt)}
      />
      <TextInput
        placeholder="Enter Password"
        style={[styles.input, {marginTop: 20}]}
        value={password}
        onChangeText={txt => setPassword(txt)}
      />
      <TextInput
        placeholder="Enter Confirm Password"
        style={[styles.input, {marginTop: 20}]}
        value={confirmPassword}
        onChangeText={txt => setConfirmPassword(txt)}
      />
      <TouchableOpacity
        style={styles.btn}
        // onPress={() =>
        //   {
        //   if (validate()) {
        //     registerUser();
        //   } else {
        //     Alert.alert('Please Enter Correct Data');
        //   }
        // }}
        onPress={() => saveRegistration()}>
        <Text style={styles.btnText}>Sign up</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', justifyContent: 'center', }}>
      <Text
        style={styles.orLogin}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        Already have an account?
      </Text>
        <Text
          style={[styles.orLogin,{color: '#74B9FF', textDecorationLine: 'none', marginLeft: 5}]}>
         LOGIN
        </Text>
      </View>

     
    </View>
  );
};

export default Signup;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    color: 'black',
    alignSelf: 'center',
    marginTop: 100,
    fontWeight: '600',
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,

    alignSelf: 'center',
    paddingLeft: 20,
  },
  btn: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: '#6A89CC',
  },
  btnText: {
    color: 'white',
    fontSize: 20,
  },
  orLogin: {
    alignSelf: 'center',
    marginTop: 50,
    fontSize: 20,
    textDecorationLine: 'underline',
    fontWeight: '600',
    color: 'black',
  },
});
