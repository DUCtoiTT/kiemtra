// Mobile App: React Native with Detailed UI and Navigation
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const insights = [
  { id: '1', title: 'Scan new', icon: 'scan', count: 'Scanned 483', screen: 'Scan', color: '#EAEAFF', iconColor: '#6C63FF' },
  { id: '2', title: 'Counterfeits', icon: 'warning', count: 'Counterfeit 32', color: '#FFEAEA', iconColor: '#FF6363' },
  { id: '3', title: 'Success', icon: 'checkmark-circle', count: 'Checkouts 8', color: '#E7FAF0', iconColor: '#34C759' },
  { id: '4', title: 'Directory', icon: 'calendar', count: 'History 26', color: '#E7F5FE', iconColor: '#007AFF' }
];

const renderInsight = ({ item }, navigation) => (
  <TouchableOpacity
    style={[styles.card, { backgroundColor: item.color }]}
    onPress={() => item.screen ? navigation.navigate(item.screen) : alert(`${item.title} clicked`)}
  >
    <Ionicons name={item.icon} size={40} color={item.iconColor} />
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text style={styles.cardCount}>{item.count}</Text>
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <View style={styles.header}>
  <View style={styles.headerTextContainer}>
    <Text style={styles.greeting}>Hello 👋</Text>
    <Text style={styles.name}>Christie Doe</Text>
  </View>
  <Image source={require('./assets/favicon.png')} style={styles.profileImage} />
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
  </ScrollView>
);

const ScanScreen = ({ navigation }) => (
  <View style={styles.scanContainer}>
    {/* Nút Back */}
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
      <Ionicons name="arrow-back" size={24} color="#6C63FF" />
    </TouchableOpacity>

    {/* Hình ảnh sản phẩm với hiệu ứng quét */}
    <View style={styles.scannerContainer}>
      <Image source={require('./assets/th.jpg')} style={styles.juiceImage} />
      <View style={styles.scannerFrame} />
    </View>

    {/* Hộp thông tin sản phẩm */}
    <View style={styles.productInfo}>
      <Image source={require('./assets/th.jpg')} style={styles.productIcon} />
      <View>
        <Text style={styles.productTitle}>Lauren’s</Text>
        <Text style={styles.productSubtitle}>Orange Juice</Text>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
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
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          height: 80,
          paddingBottom: 10,
          paddingTop: 10,
          borderTopColor: 'transparent',
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 10,
        },
        tabBarActiveTintColor: '#FFA500',
        tabBarInactiveTintColor: '#888'
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name='home' size={30} color={color} /> }} />
      <Tab.Screen name='Notification' component={NotificationScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name='notifications-outline' size={30} color={color} /> }} />
      <Tab.Screen name='Scan' component={ScanScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name='qr-code' size={30} color={color} />,tabBarStyle: { display: "none" } }} />
      <Tab.Screen name='History' component={HistoryScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name='time-outline' size={30} color={color} /> }} />
      <Tab.Screen name='Cart' component={CartScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name='cart-outline' size={30} color={color} /> }} />
    </Tab.Navigator>
  </NavigationContainer>
);
const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20,paddingTop: 40  },
  headerTextContainer: { flexDirection: 'column' }, 
  greeting: { fontSize: 22, fontWeight: 'bold' }, 
  name: { fontSize: 18, fontWeight: 'normal', color: '#333' }, 

  profileImage: { width: 50, height: 50, borderRadius: 25 },
  insightsTitle: { fontSize: 18, marginBottom: 10 },
  card: { 
    padding: 18,  
    borderRadius: 20, 
    width: '48%',  
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15, 
    backgroundColor: '#F4F5F9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3
  },
  cardTitle: { fontSize: 16, fontWeight: 'bold', marginVertical: 5 },
  cardCount: { fontSize: 14, color: '#666' },
  exploreTitle: { fontSize: 18, marginBottom: 10 },
  scanContainer: { flex: 1, backgroundColor: '#F8F8F8', alignItems: 'center', justifyContent: 'center'},
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  scannerContainer: {alignItems: 'center', justifyContent: 'center', marginTop: 60, padding: 20 },
  juiceImage: {width: 220, height: 400, resizeMode: 'contain' },
  scannerFrame: {position: 'absolute', width: 250, height: 420, borderWidth: 3, borderColor: '#FFFFFF', borderRadius: 20, opacity: 0.5 },
  productInfo: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productIcon: { width: 40, height: 40, borderRadius: 10, marginRight: 10 },
  productTitle: { fontSize: 14, color: '#888' },
  productSubtitle: { fontSize: 16, fontWeight: 'bold' },
  addButton: { marginLeft: 'auto', backgroundColor: '#6C63FF', borderRadius: 10, padding: 8 },
});

export default App;

