import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  background: {
    width: wp('100%'),
    alignSelf: 'center',
    flex: 1,
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
  },
});

export default styles;
