import React, { useState } from 'react';

import { StyleSheet, View, Text } from 'react-native';
import OTPInputView from 'react-native-otp-input-reborn';

export default function App() {
  const [code, setCode] = useState('');
  return (
    <View style={styles.container}>
      <OTPInputView
        pinCount={6}
        // clearInputs
        style={{ width: '80%', height: 200 }}
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },
  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  underlineStyleBase: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#ddd',
    color: '#333',
  },
  underlineStyleHighLighted: {
    borderColor: '#00DAC7',
  },
});
