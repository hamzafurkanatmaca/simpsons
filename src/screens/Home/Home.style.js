import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  AddButton: {
    alignSelf: 'center',
    marginTop:hp('76%'),
    position:'absolute'
  },
  icon: {
    fontSize: wp('10%'),
    color:'#2E86DE'
  },
});
