import {StyleSheet, Text, View} from 'react-native';

const Details = (): JSX.Element => {
  return (
    <View>
      <Text>Details</Text>
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

export default Details;
