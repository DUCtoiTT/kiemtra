// Mobile App: React Native with Detailed UI and Navigation
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const insights = [
  { id: '1', title: 'Scan new', icon: 'scan', count: 'Scanned 483', screen: 'Scan' },
  { id: '2', title: 'Counterfeits', icon: 'warning', count: 'Counterfeit 32' },
  { id: '3', title: 'Success', icon: 'checkmark-circle', count: 'Checkouts 8' },
  { id: '4', title: 'Directory', icon: 'calendar', count: 'History 26' }
];

const renderInsight = ({ item }, navigation) => (
  <TouchableOpacity
    style={styles.card}
    onPress={() => item.screen ? navigation.navigate(item.screen) : alert(`${item.title} clicked`) }
  >
    <Ionicons name={item.icon} size={40} color='#555' />
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text style={styles.cardCount}>{item.count}</Text>
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <View style={styles.header}>
    <Text style={styles.greeting}>
  Hello 👋 {'\n'} christie doe
</Text>
      <Image source={{ uri: 'kiemtra/assets/Ảnh chụp màn hình 2025-02-21 195515.png' }} style={styles.profileImage} />
    </View>
    <Text style={styles.insightsTitle}>Your Insights</Text>
    <FlatList
      data={insights}
      renderItem={(item) => renderInsight(item, navigation)}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      scrollEnabled={false}
    />
    <Text style={styles.exploreTitle}>Explore More</Text>
    <View style={styles.exploreContainer}>
      <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.exploreImage} />
      <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.exploreImage} />
    </View>
  </ScrollView>
);

const ScanScreen = ({ navigation }) => (
  <View style={[styles.container, { backgroundColor: '#F3E5D7', alignItems: 'center', justifyContent: 'center' }]}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
      <Ionicons name='arrow-back' size={30} color='#333' />
    </TouchableOpacity>
    <View style={styles.scanBox}>
      <Image source={{ uri: 'https://via.placeholder.com/200' }} style={styles.productImage} />
    </View>
    <View style={styles.productInfo}>
      <Ionicons name='cart' size={24} color='#FFA500' />
      <Text style={styles.productName}>Lauren's Orange Juice</Text>
    </View>
  </View>
);
const HistoryScreen = () => (
  <View style={styles.container}>
    <Text style={{ fontSize: 20 }}>History</Text>
  </View>
);
const NotificationScreen = () => (
  <View style={styles.container}>
    <Text style={{ fontSize: 20 }}>Notifications</Text>
  </View>
);
const CartScreen = () => (
  <View style={styles.container}>
    <Text style={{ fontSize: 20 }}>Cart</Text>
  </View>
);
const App = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='Home' component={HomeScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name='home' size={30} color={color} /> }} />
      <Tab.Screen name='Notification' component={NotificationScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name='notifications-outline' size={30} color={color} /> }} />
      <Tab.Screen name='Scan' component={ScanScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name='qr-code' size={30} color={color} /> }} />
      <Tab.Screen name='History' component={HistoryScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name='time-outline' size={30} color={color} /> }} />
      <Tab.Screen name='Cart' component={CartScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name='cart-outline' size={30} color={color} /> }} />
    </Tab.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#f5f5f5', flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  greeting: { 
    fontweight: 'bold',
    fontsize: 30,
    lineheight: 32.34,
    letterspacing: 3,
     },
  profileImage: { width: 50, height: 50, borderRadius: 25 },
  insightsTitle: { fontSize: 18, marginBottom: 10 },
  card: { padding: 20, backgroundColor: '#E9EEF6', borderRadius: 15, width: '45%', alignItems: 'center', marginBottom: 20 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', marginVertical: 5 },
  cardCount: { fontSize: 14, color: '#555' },
  exploreTitle: { fontSize: 18, marginBottom: 10 },
  exploreContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  exploreImage: { width: 100, height: 100, borderRadius: 10 },
  backButton: { position: 'absolute', top: 40, left: 20 },
  scanBox: { width: 300, height: 400, borderWidth: 2, borderColor: '#ccc', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  productImage: { width: 200, height: 300, borderRadius: 20 },
  productInfo: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 10, borderRadius: 15 },
  productName: { marginLeft: 10, fontSize: 18, fontWeight: 'bold' }
});

export default App;
