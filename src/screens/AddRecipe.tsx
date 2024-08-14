import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ImagePicker from '../components/ImagePicker/ImagePicker';
import ThumbnailUpload from '../assets/ThumbnailUpload';
import VideoUpload from '../assets/VideoUpload';
import CustomTextField from '../components/CustomTextField/CustomTextField';
import CustomSelect from '../components/CustomSelect/CustomSelect';
import Search from '../assets/Search';
import InputBadge from '../components/InputBadge/InputBadge';

const AddRecipe = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <ImagePicker
          title="Add thumbnail image here"
          icon={<ThumbnailUpload />}
        />
        <ImagePicker title="Add recipe video here" icon={<VideoUpload />} />
        <CustomTextField label="Recipe name" placeHolder="Recipe title" />
        <CustomSelect options={['Pure Veg', 'Non Veg']} label="Food type" />
        <CustomSelect
          options={['Breakfast', 'Lunch', 'Dinner']}
          label="One can have that in"
        />
        <CustomTextField
          label="Add Ingredients"
          placeHolder="Search ingredients"
          inputType="search"
          icon={<Search />}
        />
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Time to cook</Text>
          <View style={{flexDirection: 'row', gap: 17}}>
            <InputBadge placeholder="00" label="Hours" />
            <InputBadge placeholder="00" label="Min" />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Nutritions</Text>
          <View style={{flexDirection: 'row', gap: 17, flexWrap: 'wrap'}}>
            <InputBadge placeholder="Calories" label="Kcal" />
            <InputBadge placeholder="Protein" label="Grm" />
            <InputBadge placeholder="Carbs" label="Grm" />
            <InputBadge placeholder="Fat" label="Grm" />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddRecipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 20,
    gap: 24,
  },
  inputContainer: {
    flex: 1,
    gap: 11,
  },
  text: {
    color: '#18270B',
    fontSize: 16,
    fontWeight: '500',
  },
  buttonContainer: {
    flex: 1,
    elevation: 0.5,
    shadowRadius: 10,
    paddingTop: 16,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  button: {
    flex: 1,
    backgroundColor: '#76BC3F',
    paddingVertical: 9,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },
});
