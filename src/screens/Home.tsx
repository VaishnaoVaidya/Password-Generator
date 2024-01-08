import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import BouncyCheckbox from 'react-native-bouncy-checkbox'

// form validation
import * as Yup from 'yup'
import {Formik} from 'formik'

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'Should be min of 4 characters')
  .max(16, 'Should be max of 16 characters')
  .required('Length is required')
})


export default function Home() {

  const [password , setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatePasswordString = (passwordLength : number) => {
    let characterList = ''

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '~`!@#$%^&*()_-+={[}]|\:;"<,>.?/';

    if (upperCase) {
      characterList += upperCaseChars
    }
    if (lowerCase) {
      characterList += lowerCaseChars
    }
  if (numbers) {
      characterList += digitChars
    }
  if (symbols) {
      characterList += specialChars
    }

    const passwordResult = createPassword(characterList, passwordLength)

    setPassword(passwordResult)
    setIsPassGenerated(false)
  }

  const createPassword = (characters : string, passwordLength: number) => {
    let result = ''
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }
    return result;
    console.log("vaishnao");
    
  }

  const resetPasswordState = () => {
    setPassword('')
    setIsPassGenerated(false)
    setLowerCase(true)
    setUpperCase(false)
    setNumbers(false)
    setSymbols(false)
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
       initialValues={{ passwordLength: '' }}
       validationSchema={passwordSchema}
       onSubmit={ values =>{
        console.log(values);
        generatePasswordString((+values.passwordLength)) 
       }}
     >
       {({
         values,
         errors,
         touched,
         isValid,
         handleChange,
         handleSubmit,
         handleReset,
         /* and other goodies */
       }) => (
         <>
         <View style={styles.inputWrapper}>
          <View style={styles.inputColumn}>
            <Text style={styles.heading}>Password Length</Text>
            {touched.passwordLength && errors.passwordLength && (
              <Text style={styles.errorText}>
                {errors.passwordLength}
              </Text>
            )}   
          </View>
          <TextInput
            style={styles.inputStyle}
            value={values.passwordLength}
            onChangeText={handleChange('passwordLength')}
            placeholder='Ex. 8'
            keyboardType='numeric'
            />
         </View>
         <View style={styles.inputWrapper}>
          <Text style={styles.heading}>Include LowerCase</Text>
          <BouncyCheckbox
          disableBuiltInState
          isChecked={lowerCase}
          onPress={()=> setLowerCase(!lowerCase)}
          fillColor='#6A89CC'
          />
         </View>
         <View style={styles.inputWrapper}>
          <Text style={styles.heading}>Include UpperCase</Text>
          <BouncyCheckbox
          disableBuiltInState
          isChecked={upperCase}
          onPress={()=> setUpperCase(!upperCase)}
          fillColor='#F4C724'
          />
         </View>
         <View style={styles.inputWrapper}>
          <Text style={styles.heading}>Include Numbers</Text>
          <BouncyCheckbox
          disableBuiltInState
          isChecked={numbers}
          onPress={()=> setNumbers(!numbers)}
          fillColor='#586776'
          />
         </View>
         <View style={styles.inputWrapper}>
          <Text style={styles.heading}>Include Symbols</Text>
          <BouncyCheckbox
          disableBuiltInState
          isChecked={symbols}
          onPress={()=> setSymbols(!symbols)}
          fillColor='#6AB04A'
          />
         </View>
         <View style={styles.formActions}>
          <TouchableOpacity
          disabled={!isValid}
          onPress={() => handleSubmit}
          style={styles.primaryBtn}
          >
            <Text style={styles.primaryBtnTxt}>Generate Password</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => {
            handleReset()
            resetPasswordState()
          }}
          >
            <Text style={styles.secondaryBtnTxt}>Reset</Text>
          </TouchableOpacity>
         </View>
         </>
       )}
     </Formik>
        </View>
        {isPassGenerated ? (
          <View style={[styles.card, styles.cardEleveted]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text style={styles.description}>Long Press To Copy</Text>
            <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
          </View>
        ) : null }
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  appContainer: {

  },
  formContainer: {},
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingVertical: 16
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,    
  },
  inputColumn: {
    
  },
  heading: {
    fontSize: 16,
  },
  errorText: {
    width: 110,
    height: 60,
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    paddingStart: 18,
    backgroundColor: '#6A89CC',
    borderRadius: 6
  },
  inputStyle: {
    paddingVertical: 5,
    marginStart: 12,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderStyle: 'solid',
    backgroundColor: "#2B2B52",
    color: '#EAF0F1',
    borderRadius: 5
  },
  formActions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryBtn: {
    padding: 24
  },
  primaryBtnTxt: {
    width: 110,
    height: 60,
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    paddingStart: 18,
    backgroundColor: '#6A89CC',
    borderRadius: 6
  },
  secondaryBtnTxt: {
    width: 110,
    height: 60,
    fontSize: 15,
    fontWeight: 'bold',
    padding: 20,
    paddingStart: 35,
    backgroundColor: '#758AA2',
    borderRadius: 5
  },
  card: {
    width: 390,
    paddingTop: 26,
    paddingStart: 15,
    height: 150,
    backgroundColor: '#EAF0F1',
    borderRadius: 8
  },
  cardEleveted: {
   
  },
  subTitle: {
    color: "#0A3D62"
  },
  description: {
    color: "#0A3D62"
  },
  generatedPassword: {
    color: "#0A3D62",
    fontSize: 30,
    paddingTop: 20,
    paddingStart: 40,
    fontWeight: "bold"
  },

})