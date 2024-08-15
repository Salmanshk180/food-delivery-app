import {array, mixed, number, object, string} from 'yup';
export const RecipeValues = {
  name: '',
  foodType: '',
  oneCanHaveIt: [] as string[],
  ingredients: [] as string[],
  hours: '',
  mins: '',
  calories: '',
  protein: '',
  carbs: '',
  fats: '',
  thumbnail: '',
  video: '',
  category: '',
};

export const RecipeSchema = object({
  name: string().required('Recipe name is required'),
  foodType: string()
    .oneOf(['Pure Veg', 'Non Veg'])
    .required('Food type is required'),
  oneCanHaveIt: array()
    .length(1)
    .of(string())
    .required('One can have in is required'),
  ingredients: array().min(1).required('Ingridents is required'),
  mins: string().required('Minutes is required'),
  hours: string().required('Hours is required'),
  calories: string().required('Calories is required'),
  protein: string().required('Protein is required'),
  carbs: string().required('Carbs is required'),
  fats: string().required('Fats is required'),
  thumbnail: mixed().required('Thumbnail is required'),
  video: mixed().required('Video is required'),
  category: string().required('Category is required'),
});
