import {Button, StyleSheet, Text, View} from 'react-native';

// navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate('Details', {productId: '21'})}
      />
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
    fontSize: 18,
  },
});

export default Home;
