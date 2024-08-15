import {Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import RecipeImage from '../../assets/RecipeImage.png';
import ClientImage from '../../assets/ClientImage.png';
import FeedImage from '../../assets/FeedImage.png';
import DietImage from '../../assets/DietImage.png';
import SupplementImage from '../../assets/SupplementImage.png';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../types';
interface Props {
  onSheetClose: () => void;
}
const AddFormsList = ({onSheetClose}: Props) => {
  const data = [
    {
      id: '1',
      name: 'Recipe',
      path: 'AddRecipe' as const,
      image: RecipeImage,
    },
    {
      id: '2',
      name: 'Client',
      path: 'AddRecipe' as const,
      image: ClientImage,
    },
    {
      id: '3',
      name: 'Feed',
      path: 'AddRecipe' as const,
      image: FeedImage,
    },
    {
      id: '4',
      name: 'Diet Template',
      path: 'AddRecipe' as const,
      image: DietImage,
    },
    {
      id: '5',
      name: 'Supplement Template',
      path: 'AddRecipe' as const,
      image: SupplementImage,
    },
  ];
  const navigation = useNavigation<StackNavigation>();
  return (
    <FlatList
      data={data}
      style={{flex: 1}}
      contentContainerStyle={{flex: 1, gap: 11, paddingVertical: 10}}
      renderItem={({item}) => (
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            gap: 12,
            borderBottomWidth: 0.5,
            borderColor: '#EBEBEB',
            alignItems: 'center',
            paddingVertical: 5,
            paddingBottom: 10,
          }}
          onPress={() => {
            navigation.navigate(item.path);
            setTimeout(() => {
              onSheetClose();
            }, 2000);
          }}>
          <Image source={item.image} />
          <Text style={{color: '#000', fontSize: 20, fontWeight: 500}}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default AddFormsList;
