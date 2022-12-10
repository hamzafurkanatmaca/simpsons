import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  btn: {
    backgroundColor: '#2E86DE',
    borderRadius:wp('1%'),
    height:hp('5%'),
    width:wp('90%'),
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center'
  },
  text: {
      color:'white'
  },
});
