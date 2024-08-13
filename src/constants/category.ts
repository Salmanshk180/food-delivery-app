import RawSalmonToast from '../assets/RawSalmonToast.png';
import AgilioOlioPasta from '../assets/AgilioOlioPasta.png';
import FEED1 from '../assets/Feed1.png';
import FEED2 from '../assets/Feed2.png';
import FEED3 from '../assets/Feed3.png';
import FEED4 from '../assets/Feed4.png';
export const CATEGORIES = [
  {text: 'Dinner'},
  {text: 'Non-Veg'},
  {text: 'Breakfast'},
  {text: 'Vegetarian'},
  {text: 'Snacks'},
  {text: 'Dessert'},
  {text: 'Drinks'},
  {text: 'Appetizers'},
];
export const FEEDS = [
  {text: 'For you'},
  {text: 'Vegan'},
  {text: 'Nutrition'},
  {text: 'Weight loss'},
  {text: 'Snacks'},
  {text: 'Dessert'},
  {text: 'Drinks'},
  {text: 'Appetizers'},
];

export const RECIPES = [
  {
    id: 1,
    name: 'Raw salmon toast',
    time: 15,
    isVeg: false,
    image: RawSalmonToast,
    nutritions: [
      {title: 'Calories', value: 500},
      {title: 'Protein', value: '36 gm'},
      {title: 'Carbs', value: '200 gm'},
      {title: 'Fat', value: '25 gm'},
    ],
    canHaveItIn: ['Breakfast', 'Lunch'],
    ingredients: [
      'Salmon',
      'Bread',
      'Cheese',
      'Salt',
      'Lemon',
      'Pepper',
      'Parsley',
    ],
  },
  {
    id: 2,
    name: 'Aglio olio pasta',
    time: 15,
    isVeg: true,
    image: AgilioOlioPasta,
    nutritions: [
      {title: 'Calories', value: 500},
      {title: 'Protein', value: '36 gm'},
      {title: 'Carbs', value: '200 gm'},
      {title: 'Fat', value: '25 gm'},
    ],
    canHaveItIn: ['Breakfast', 'Lunch'],
    ingredients: [
      'Salmon',
      'Bread',
      'Cheese',
      'Salt',
      'Lemon',
      'Pepper',
      'Parsley',
    ],
  },
  {
    id: 3,
    name: 'Raw salmon toast',
    time: 15,
    isVeg: false,
    image: RawSalmonToast,
    nutritions: [
      {title: 'Calories', value: 500},
      {title: 'Protein', value: '36 gm'},
      {title: 'Carbs', value: '200 gm'},
      {title: 'Fat', value: '25 gm'},
    ],
    canHaveItIn: ['Breakfast', 'Lunch'],
    ingredients: [
      'Salmon',
      'Bread',
      'Cheese',
      'Salt',
      'Lemon',
      'Pepper',
      'Parsley',
    ],
  },
  {
    id: 4,
    name: 'Raw salmon toast',
    time: 15,
    isVeg: false,
    image: RawSalmonToast,
    nutritions: [
      {title: 'Calories', value: 500},
      {title: 'Protein', value: '36 gm'},
      {title: 'Carbs', value: '200 gm'},
      {title: 'Fat', value: '25 gm'},
    ],
    canHaveItIn: ['Breakfast', 'Lunch'],
    ingredients: [
      'Salmon',
      'Bread',
      'Cheese',
      'Salt',
      'Lemon',
      'Pepper',
      'Parsley',
    ],
  },
  {
    id: 5,
    name: 'Raw salmon toast',
    time: 15,
    isVeg: false,
    image: RawSalmonToast,
    nutritions: [
      {title: 'Calories', value: 500},
      {title: 'Protein', value: '36 gm'},
      {title: 'Carbs', value: '200 gm'},
      {title: 'Fat', value: '25 gm'},
    ],
    canHaveItIn: ['Breakfast', 'Lunch'],
    ingredients: [
      'Salmon',
      'Bread',
      'Cheese',
      'Salt',
      'Lemon',
      'Pepper',
      'Parsley',
    ],
  },
];

export const FEEDSDATA = [
  {
    id: 1,
    text: 'How to calculate nutrition value for...',
    image: FEED1,
    time: 10,
    date: '1 day ago',
  },
  {
    id: 2,
    text: 'How to calculate nutrition value for...',
    image: FEED2,
    time: 10,
    date: '1 day ago',
  },
  {
    id: 3,
    text: 'How to calculate nutrition value for...',
    image: FEED3,
    time: 10,
    date: '1 day ago',
  },
  {
    id: 4,
    text: 'How to calculate nutrition value for...',
    image: FEED4,
    time: 10,
    date: '1 day ago',
  },
  {
    id: 5,
    text: 'How to calculate nutrition value for...',
    image: FEED1,
    time: 10,
    date: '1 day ago',
  },
  {
    id: 6,
    text: 'How to calculate nutrition value for...',
    image: FEED2,
    time: 10,
    date: '1 day ago',
  },
  {
    id: 7,
    text: 'How to calculate nutrition value for...',
    image: FEED3,
    time: 10,
    date: '1 day ago',
  },
  {
    id: 8,
    text: 'How to calculate nutrition value for...',
    image: FEED4,
    time: 10,
    date: '1 day ago',
  },
];

export enum TIME_TO_MAKE {
  TenMin = '10 Min',
  FifteenMin = '15 Min',
  TwentyMin = '20 Min',
  OneHour = '1:00 Hr',
}
export enum FOOD_TYPE {
  PureVeg = 'Pure Veg',
  NonVeg = 'Non Veg',
}
export enum CAN_HAVE_IN {
  Breakfast = 'Breakfast',
  Lunch = 'Lunch',
  Dinner = 'Dinner',
}

export const ConsultationData = [
  {id: '1', date: '22 May, 2023'},
  {id: '2', date: '13 Mar, 2023'},
  {id: '3', date: '10 Jan, 2023'},
  {id: '4', date: '11 May, 2023'},
  {id: '5', date: '11 May, 2023'},
  {id: '6', date: '11 May, 2023'},
];
