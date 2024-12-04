import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image, Alert } from 'react-native';

// Sample posts data
const postsData = [
  {
    id: '1',
    user: 'hdsay904a',
    time: '1 hour ago',
    postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    comments: 6,
  },
  {
    id: '2',
    user: 'anonymous',
    time: '9 hours ago',
    postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    comments: 23,
  },
];

const Homepage = ({ navigation }) => {
  const [postText, setPostText] = useState('');

  const handlePost = () => {
    if (!postText) {
      Alert.alert('Empty Post', 'Please write something to post.');
      return;
    }
    console.log('New post:', postText);
    setPostText(''); // Clear input after posting
  };

  const handleLogout = () => {
    Alert.alert('Logged Out', 'You have logged out successfully.');
    navigation.navigate('Login'); // Adjust navigation based on your setup
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/bmc.png')} style={styles.logo} />
        <Text style={styles.appName}>SafeSpace</Text>
        <View style={styles.profileContainer}>
          <Text style={styles.profileName}>kcir-dor</Text>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Post Section */}
      <View style={styles.postContainer}>
        <TextInput
          style={styles.postInput}
          placeholder="What's on your mind?"
          value={postText}
          onChangeText={setPostText}
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.postButton} onPress={handlePost}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>

      {/* News and Updates */}
      <View style={styles.newsContainer}>
        <Text style={styles.newsTitle}>News and Updates</Text>

        {/* FlatList to render posts */}
        <FlatList
          data={postsData}
          renderItem={({ item }) => (
            <View style={styles.postCard}>
              <Text style={styles.postUser}>{item.user} • {item.time}</Text>
              <Text style={styles.postText}>{item.postText}</Text>
              <Text style={styles.commentCount}>Comments: {item.comments}</Text>
              <TouchableOpacity style={styles.replyButton}>
                <Text style={styles.replyButtonText}>Reply</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 40,
    height: 40,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    color: '#fff',
    marginRight: 10,
  },
  logoutText: {
    color: '#e63946',
  },
  postContainer: {
    marginBottom: 20,
  },
  postInput: {
    backgroundColor: '#444',
    color: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  postButton: {
    backgroundColor: '#e63946',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  newsContainer: {
    backgroundColor: '#444',
    padding: 20,
    borderRadius: 10,
  },
  newsTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  postCard: {
    backgroundColor: '#555',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  postUser: {
    color: '#fff',
    fontWeight: 'bold',
  },
  postText: {
    color: '#fff',
    marginTop: 10,
  },
  commentCount: {
    color: '#aaa',
    marginTop: 10,
  },
  replyButton: {
    marginTop: 10,
    backgroundColor: '#f1c40f',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  replyButtonText: {
    color: '#fff',
  },
});

export default Homepage;
