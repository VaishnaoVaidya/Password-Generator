import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useContext} from 'react';
// import { AuthContext } from '../context/authContext';
import {useNavigation} from '@react-navigation/native';
// import Loader from '../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {

  //global state
  // const [state, setState] = useContext(AuthContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const getData = async () => {
    const email = await AsyncStorage.getItem('EMAil');
    const mobile = await AsyncStorage.getItem('MOBILE');
    const password = await AsyncStorage.getItem('PASSWORD');
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Enter Email"
        style={[styles.input, {marginTop: 100}]}
        value={email}
        onChangeText={txt => setEmail(txt)}
      />

      <TextInput
        placeholder="Enter Password"
        style={[styles.input, {marginTop: 20}]}
        value={password}
        onChangeText={txt => setPassword(txt)}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          getData()
        }}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', justifyContent: 'center', }}>
      <Text
          style={styles.orLogin}
          onPress={() => {
            navigation.navigate('Signup');
        }}>
          Don't have an account?
        </Text>
          <Text
            style={[
              styles.orLogin,
              {color: '#74B9FF', textDecorationLine: 'none'},
            ]}
            onPress={() => {
              navigation.navigate('Signup');
          }}>
            {' '}
            SIGNUP
          </Text>
      </View>
       
        {/* <Loader visible={visible} /> */}
    </View>
  );
};

export default Login;
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
