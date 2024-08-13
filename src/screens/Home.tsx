import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Logo from '../assets/Logo';
import Notification from '../assets/Notification';
import Goal from '../assets/Goal';
import {ConsultationData} from '../constants/category';
import {useState} from 'react';
import FEMALE1 from '../assets/Female1.png';
import FEMALE2 from '../assets/Female2.png';
import FEMALE3 from '../assets/Female3.png';
export function Home() {
  const [selectedDate, setSelectedDate] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
        <Notification />
      </View>
      <View style={styles.statistics}>
        <Text style={[styles.greetings, {paddingHorizontal: 20}]}>
          Hello! John 👋
        </Text>
        <View style={[styles.goalCard, {marginHorizontal: 20}]}>
          <Goal />
          <View style={{gap: 2}}>
            <Text style={{fontSize: 18, fontWeight: '900', color: '#18270B'}}>
              Goals for nutrition counseling
            </Text>
            <Text style={{color: '#303030', fontSize: 16, fontWeight: '500'}}>
              Lorem ipsum dolor sit amet, adipis cing
            </Text>
          </View>
        </View>
        <View style={{gap: 12}}>
          <Text style={styles.greetings}>Consultation wise photos</Text>
          <FlatList
            data={ConsultationData}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{gap: 8, paddingHorizontal: 20}}
            renderItem={item => (
              <TouchableOpacity
                activeOpacity={0.6}
                style={[
                  styles.badge,
                  {
                    backgroundColor:
                      item.item.date === selectedDate ? '#76BC3F' : '#fff',
                    borderWidth: item.item.date === selectedDate ? 0 : 1,
                  },
                ]}
                onPress={() => {
                  setSelectedDate(item.item.date);
                }}>
                <Text
                  style={[
                    {
                      color: item.item.date === selectedDate ? '#fff' : '#000',
                      fontSize: 14,
                      fontWeight: '500',
                    },
                  ]}>
                  {item.item.date}
                </Text>
              </TouchableOpacity>
            )}
          />
          <FlatList
            data={[FEMALE1, FEMALE2, FEMALE3, FEMALE1, FEMALE2, FEMALE3]}
            contentContainerStyle={{gap: 11, paddingHorizontal: 20}}
            horizontal
            renderItem={item => (
              <Image
                source={item.item}
                borderRadius={11}
                style={{width: 125, height: 168}}
              />
            )}
          />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{color: '#303030', fontWeight: '800', fontSize: 18}}>
            Notes:
            <Text style={{fontSize: 16, fontWeight: '500'}}>
              Patient needs to reduce daily calorie intake and increase
              consumption Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nulla at tenetur ad distinctio velit. Ipsam eius suscipit
              deserunt quibusdam, expedita totam cum incidunt ea commodi iure
              reiciendis sint voluptatum vero, quasi quidem repudiandae
              consequuntur animi, molestias dicta magnam? Quisquam, eius.
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 16,
    gap: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  greetings: {
    color: '#303030',
    fontSize: 20,
    fontWeight: '900',
    paddingHorizontal: 20,
  },
  statistics: {
    gap: 16,
  },
  goalCard: {
    backgroundColor: '#F1F8EC',
    padding: 12,
    borderRadius: 12,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
  },
  badge: {
    borderRadius: 50,
    borderColor: '#838383',
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
});
