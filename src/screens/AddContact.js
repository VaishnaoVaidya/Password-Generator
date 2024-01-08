import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
let contacts = []
const AddContact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const navigation = useNavigation();

    const saveContact = async () => {
        let tempContact = [];
        contacts = [];
        let x  = JSON.parse(await AsyncStorage.getItem('CONTACT'));
        tempContact = x;
        tempContact.map(item => {
            contacts.push(item)
        });
        contacts.push({name: name, mobile: mobile, email: email });
        await AsyncStorage.setItem('CONTACT', JSON.stringify(contacts));
        navigation.goBack();
    }
  return (
    <View style={{flex: 1}}>
      <TextInput
        placeholder="Enter Name"
        style={{
          width: '90%',
          height: 50,
          borderWidth: 0.5,
          borderRadius: 10,
          alignSelf: 'center',
          paddingLeft: 20,
          marginTop: 150,
        }}
        value={name}
        onChangeText={txt => setName(txt)}
      />
      <TextInput
        placeholder="Enter Email"
        style={{
          width: '90%',
          height: 50,
          borderWidth: 0.5,
          borderRadius: 10,
          alignSelf: 'center',
          paddingLeft: 20,
          marginTop: 20,
        }}
        value={email}
        onChangeText={txt => setEmail(txt)}
      />
      <TextInput
        placeholder="Enter Mobile"
        style={{
          width: '90%',
          height: 50,
          borderWidth: 0.5,
          borderRadius: 10,
          marginTop: 20,
          alignSelf: 'center',
          paddingLeft: 20,
        }}
        keyboardType='number-pad'
        value={mobile}
        onChangeText={txt => setMobile(txt)}
      />

      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          borderRadius: 10,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
          backgroundColor: '#6A89CC',
        }}
        onPress={() => {
            saveContact()
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Save Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddContact;
