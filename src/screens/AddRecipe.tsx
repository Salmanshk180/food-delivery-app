import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {ChangeEvent, useState} from 'react';
import ImagePickers from '../components/ImagePicker/ImagePicker';
import ThumbnailUpload from '../assets/ThumbnailUpload';
import VideoUpload from '../assets/VideoUpload';
import CustomTextField from '../components/CustomTextField/CustomTextField';
import CustomSelect from '../components/CustomSelect/CustomSelect';
import Search from '../assets/Search';
import InputBadge from '../components/InputBadge/InputBadge';
import {useFormik} from 'formik';
import {RecipeSchema, RecipeValues} from '../formik/Recipe';
import Close from '../assets/Close';
import ImagePicker from 'react-native-image-crop-picker';
import Video from 'react-native-video';

const AddRecipe = () => {
  const [ingredient, setIngredient] = useState<string>('');
  const formik = useFormik({
    initialValues: RecipeValues,
    validationSchema: RecipeSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  const handleFoodType = (value: string) => {
    formik.setFieldValue('foodType', value);
  };
  const handleIngredientChange = (e: string | ChangeEvent<any>): void => {
    setIngredient(e.toString());
  };
  const handleAddIngredients = () => {
    if (ingredient.trim() === '') {
      return;
    }
    formik.setFieldValue('ingredients', [
      ...formik.values.ingredients,
      ingredient,
    ]);
    setIngredient('');
  };

  const handleRemoveIngredient = (value: string) => {
    formik.setFieldValue(
      'ingredients',
      formik.values.ingredients.filter(item => item !== value),
    );
  };

  const handleOneCanHaveIt = (value: string) => {
    if (formik.values.oneCanHaveIt.includes(value)) {
      const filteredData = formik.values.oneCanHaveIt.filter(
        (text: string) => text.toLowerCase() !== value.toLowerCase(),
      );
      formik.setFieldValue('oneCanHaveIt', filteredData);
    } else {
      formik.setFieldValue('oneCanHaveIt', [
        ...formik.values.oneCanHaveIt,
        value,
      ]);
    }
  };

  const handleThumbnail = async () => {
    const image = await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    });
    formik.setFieldValue('thumbnail', image.path);
  };
  const handleVideo = async () => {
    const video = await ImagePicker.openPicker({
      width: 300,
      height: 400,
      mediaType: 'video',
    });
    formik.setFieldValue('video', video.path);
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        {formik.values.thumbnail ? (
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image
              source={{uri: formik.values.thumbnail}}
              style={{width: '100%', height: 146}}
              resizeMode="contain"
            />
          </View>
        ) : (
          <ImagePickers
            title="Add thumbnail image here"
            icon={<ThumbnailUpload />}
            onPress={handleThumbnail}
          />
        )}
        {formik.values.video ? (
          <View style={{flex: 1, alignItems: 'center'}}>
            <Video
              source={{uri: formik.values.video}}
              style={{width: '100%', height: 231}}
              controls
              resizeMode="contain"
            />
          </View>
        ) : (
          <ImagePickers
            title="Add recipe video here"
            icon={<VideoUpload />}
            onPress={handleVideo}
          />
        )}
        <CustomTextField
          label="Recipe name"
          placeHolder="Recipe title"
          value={formik.values.name}
          handleChange={formik.handleChange('name')}
          handleBlur={formik.handleBlur('name')}
        />
        <CustomSelect
          options={['Pure Veg', 'Non Veg']}
          label="Food type"
          value={formik.values.foodType}
          handleChange={handleFoodType}
        />
        <CustomSelect
          options={['Breakfast', 'Lunch', 'Dinner']}
          label="One can have that in"
          value={formik.values.oneCanHaveIt}
          handleChange={handleOneCanHaveIt}
        />
        <CustomTextField
          label="Add Ingredients"
          placeHolder="Search ingredients"
          value={ingredient}
          icon={<Search />}
          handleChange={handleIngredientChange}
          handleBlur={formik.handleBlur('ingredients')}
          onKeyDown={handleAddIngredients}
        />
        {formik.values.ingredients.length > 0 && (
          <View>
            <FlatList
              horizontal
              data={formik.values.ingredients}
              contentContainerStyle={{gap: 12}}
              renderItem={({item}) => (
                <View style={styles.ingeredientBadges}>
                  <Text style={{color: '#1F3210'}}>{item}</Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => handleRemoveIngredient(item)}>
                    <Close />
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        )}
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Time to cook</Text>
          <View style={{flexDirection: 'row', gap: 17}}>
            <InputBadge
              placeholder="00"
              label="Hours"
              keyboardType="numeric"
              value={formik.values.hours}
              handleChange={formik.handleChange('hours')}
              handleBlur={formik.handleBlur('hours')}
            />
            <InputBadge
              placeholder="00"
              label="Min"
              keyboardType="numeric"
              value={formik.values.mins}
              handleChange={formik.handleChange('mins')}
              handleBlur={formik.handleBlur('mins')}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Nutritions</Text>
          <View style={styles.inputBadgeContainer}>
            <InputBadge
              placeholder="Calories"
              label="Kcal"
              keyboardType="numeric"
              value={formik.values.calories}
              handleChange={formik.handleChange('calories')}
              handleBlur={formik.handleBlur('calories')}
            />
            <InputBadge
              placeholder="Protein"
              label="Grm"
              keyboardType="numeric"
              value={formik.values.protein}
              handleChange={formik.handleChange('protein')}
              handleBlur={formik.handleBlur('protein')}
            />
          </View>
          <View style={styles.inputBadgeContainer}>
            <InputBadge
              placeholder="Carbs"
              label="Grm"
              keyboardType="numeric"
              value={formik.values.carbs}
              handleChange={formik.handleChange('carbs')}
              handleBlur={formik.handleBlur('carbs')}
            />
            <InputBadge
              placeholder="Fat"
              label="Grm"
              keyboardType="numeric"
              value={formik.values.fats}
              handleChange={formik.handleChange('fats')}
              handleBlur={formik.handleBlur('fats')}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          disabled={!(formik.isValid && formik.dirty)}
          onPress={() => formik.handleSubmit()}
          role="button">
          <View
            style={[
              styles.button,
              {opacity: !(formik.isValid && formik.dirty) ? 0.7 : 1},
            ]}>
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
  inputBadgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    gap: 17,
  },
  ingeredientBadges: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#76BC3F',
    backgroundColor: '#F5FFEE',
    paddingVertical: 12,
    paddingHorizontal: 15,
    gap: 12,
    flex: 1,
    borderRadius: 5,
  },
});
