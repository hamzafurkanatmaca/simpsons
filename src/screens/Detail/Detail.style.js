import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  img: {
    width: wp('60%'),
    height: wp('60%'),
  },
  name: {
    fontWeight: 'bold',
    fontSize: hp('3%'),
  },
  job: {
    fontSize: hp('2%'),
  },
  description: {
    fontSize: hp('1.8%'),
    padding:10
  },
});
