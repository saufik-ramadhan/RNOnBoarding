import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = (props: string) => {
  const [state1, setState1] = useState<any>();

  useEffect(() => {
    // do something
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar />
        <View>
          <Text>Text {props}</Text>
          <Button title="BUTTON" onPress={() => {}} />
          <TextInput keyboardType="email-address" />
          <TouchableOpacity>
            <View></View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

class App2 extends React.Component<string, any> {
  componentWillMount() {}
  componentDidMount() {
    // do something
  }
  componentWillUnmount() {}
  constructor(props: string) {
    super(props);

    this.state = {
      state1: '',
    };
  }

  render() {
    return <View />;
  }
}

export default App;
