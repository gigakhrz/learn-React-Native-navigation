import {StyleSheet, Text, View} from 'react-native';

const Home = (): JSX.Element => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'black',
  },
});

export default Home;
