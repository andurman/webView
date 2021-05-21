/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, View, Button} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  const [url, setUrl] = useState('');
  const [webViewUrl, setWebViewUrl] = useState('');

  const setValue = () => {
    setWebViewUrl(url);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flexDirection: 'row', padding: 10}}>
        <TextInput
          style={{flex: 1, borderWidth: 0.3}}
          onChangeText={value => setUrl(value)}
          value={url}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Url giriniz."
        />
        <Button onPress={setValue} title="Tamam" style={{margin: 5}} />
      </View>
      <View style={{flex: 1}}>
        {webViewUrl !== '' && (
          <WebView
            mediaPlaybackRequiresUserAction={false}
            allowsInlineMediaPlayback={true}
            startInLoadingState={true}
            source={{
              uri: webViewUrl,
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default App;
