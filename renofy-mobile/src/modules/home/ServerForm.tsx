import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {useConfig} from '../../shared-hooks/useConfig';

export const ServerForm = () => {
  const [storedServerAddr, setStoredServerAddr] = useConfig(state => [
    state.serverAddr,
    state.setServerAddr,
  ]);

  const [serverAddr, setServerAddr] = useState('');

  const handleSubmit = async () => {
    setStoredServerAddr(serverAddr);
  };

  // Auto set serverAddr state
  useEffect(() => {
    if (typeof storedServerAddr !== 'undefined' && storedServerAddr !== null) {
      setServerAddr(storedServerAddr);
    }
  }, [storedServerAddr]);

  return (
    <View style={styles.container}>
      {/* Input server address */}
      <Input
        label="Server Address"
        value={serverAddr}
        onChangeText={setServerAddr}
        placeholder="Ex: 192.168.43.116:8082"
        onSubmitEditing={handleSubmit}
        style={styles.input}
        autoCompleteType="none"
      />

      {/* Cancel button */}
      <Button
        title="Save"
        onPress={handleSubmit}
        disabled={
          typeof storedServerAddr === 'undefined' ||
          storedServerAddr === serverAddr
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flexBasis: 200,
    flexShrink: 1,
  },
});
