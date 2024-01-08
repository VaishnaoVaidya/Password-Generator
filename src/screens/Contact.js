import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useIsFocused} from '@react-navigation/native';

const Contact = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [contactList, setContactList] = useState({});
  useEffect(() => {
    getData();
  }, [isFocused]);

  const getData = async () => {
    const contactsS = await AsyncStorage.getItem('CONTACT');
    setContactList(JSON.parse(contactsS));
  };

  const deleteContact = async (index) => {
    const  tempData = contactList;

    const selectedData = tempData.filter((item, ind)=> {
      return ind != index
    });
    setContactList(selectedData)
    await AsyncStorage.setItem('CONTACT', JSON.stringify(selectedData));
  }

  const logout = async () => {
    await AsyncStorage.setItem('EMAIL', "");
    await AsyncStorage.setItem('MOBILE', "");
    await AsyncStorage.setItem('PASSWORD', "");
    navigation.navigate('Login');
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={contactList}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '90%',
                height: 80,
                alignSelf: 'center',
                borderRadius: 10,
                marginTop: 10,
                borderWidth: 1,
                flexDirection: 'column',
                alignItems: 'flex-start',
                paddingLeft: 20,
              }}>
              <TouchableOpacity
                style={{
                  width: 60,
                  height: 30,
                  backgroundColor: 'green',
                  position: 'absolute',
                  borderRadius: 50,
                  top: 5,
                  right: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text  style={{color: '#fff'}}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 60,
                  height: 30,
                  backgroundColor: 'red',
                  position: 'absolute',
                  borderRadius: 50,
                  bottom: 5,
                  right: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={()=>{
                  deleteContact(index)
                }}>
                <Text  style={{color: '#fff'}}>Delete</Text>
              </TouchableOpacity>
              {/* <Text>{item.name.toUpperCase()}</Text> */}
              <Text style={{marginTop: 10}}>Name: {item.name}</Text>
              <Text>Email: {item.email}</Text>
              <Text>Mobile: {item.mobile}</Text>
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={{
          width: 200,
          height: 50,
          backgroundColor: 'black',
          position: 'absolute',
          borderRadius: 30,
          bottom: 10,
          right: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('AddContact');
        }}>
        <Text style={{color: '#fff'}}>Add New Contact</Text>
      </TouchableOpacity>
       <TouchableOpacity
        style={{
          width: 140,
          height: 50,
          backgroundColor: 'black',
          position: 'absolute',
          borderRadius: 30,
          bottom: 10,
          left: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          logout();
        }}>
        <Text style={{color: '#fff'}}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Contact;
