import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  textInput: {
    backgroundColor: 'white',
    width: wp('90%'),
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: wp('1%'),
    padding:5
  },
  label: {
    color: 'black',
  },
  container:{
      marginBottom:hp('1%')
  }
});
