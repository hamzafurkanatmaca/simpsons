import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    backgroundColor: 'white',
    height: hp('7%'),
    padding: 8,
  },
  icon: {
    fontSize: wp('5%'),
    padding: 2,
  },
  brown: {
    color: 'brown',
  },
  green: {
    color: 'green',
  },
  element: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: wp('10%'),
    height: wp('10%'),
  },
});
