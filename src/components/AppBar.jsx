import {Text, View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    
    justifyContent: 'left',
     
    flexDirection: 'row',
    alignItems: 'flex-start',
    rowGap: 10,
    columnGap: 15,
    marginBottom: 20,
    height: 90,
    zIndex: 10
    
    // ...
  },
  text:{
    color: '#FFFFFF',
    fontWeight: 'bold',
   
    fontSize: 20,
    
    paddingHorizontal: 10, // 10 px padding left/right
    paddingVertical: 4,    // 10 px total: ~4 above/below + line height
    borderRadius: 4,
   
    overflow: 'hidden', // makes sure background trims to text size
    color: 'white'
  
  }
  // ...
});

const AppBar = () => {
  return( <View style={styles.container}>
    
        <Link to="/">
        <Text style={styles.text}>Repositories</Text>
        </Link>
        <Link to="/signin">
          <Text style={styles.text}>Sign in</Text>
        </Link>
    
  </View>)
};

export default AppBar;