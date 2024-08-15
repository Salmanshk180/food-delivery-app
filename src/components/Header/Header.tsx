import {
  View,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
  Image,
} from 'react-native';
import React from 'react';
import Back from '../../assets/Back';
import {useNavigation} from '@react-navigation/native';
interface Props {
  title: string;
  isBack?: boolean;
  icon?: React.ReactNode;
  image?: ImageSourcePropType;
  backIcon?: React.ReactNode;
}
const Header = ({title, isBack = false, icon, image, backIcon}: Props) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: '#fff',
        width: '100%',
        borderBottomColor: '#76BC3F',
        borderBottomWidth: 1,
        paddingVertical: 14,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {(isBack || backIcon) &&   (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
        {backIcon ??  <Back />}
        </TouchableOpacity>
      )}
 
      <Text
        style={{
          color: '#303030',
          fontSize: 20,
          fontWeight: '800',
          textAlign: (isBack || backIcon) ? 'center' : 'left',
          flex: 1,
        }}>
        {title}
      </Text>
      {icon}
      {image && <Image source={image} />}
    </View>
  );
};

export default Header;
