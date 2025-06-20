import { Text as NativeText, View, Image, StyleSheet, Pressable,  Dimensions } from 'react-native';
import Text from './Text'

import theme from '../theme';

const RepositoryItem = ({repositories, index}) => {
const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    itemContainer: {
    flexDirection: 'row',  // image and text side by side
    alignItems: 'flex-start',
    marginBottom: 20,
    marginLeft: 15
  },
  
  textContainer: {
   flex: 1, // takes remaining space
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 2,
  },
  label: {
    backgroundColor: '#0366d6',
    paddingHorizontal: 10, // 10 px padding left/right
    paddingVertical: 4,    // 10 px total: ~4 above/below + line height
    borderRadius: 4,
    fontSize: 12,
    overflow: 'hidden', // makes sure background trims to text size
    color: 'white'
  },
  container: {
    flex: 1,
  },
  tinyLogo: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 8,
  },
  logo: {
    width: 66,
    height: 58,
  },
  lang: {

    color: '#FFFFFF'

  },
  lbox:{
        backgroundColor: theme.colors.primary,
    paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
  },
  fbox: {
     flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: screenWidth / 4, // 25% of the screen
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    
   
  },

});
    console.log("reps,  index",repositories, index )
return(
<>
<View style={styles.itemContainer}>
<Image
        style={styles.tinyLogo}
        source={{
          uri: repositories.ownerAvatarUrl,
        }}
      />
      <View style={styles.textContainer}>
    <Text color="textPrimary" fontSize="subheading" fontWeight="bold"> full name: {repositories.fullName}</Text>
    <NativeText> description: {repositories.description}</NativeText>
    
    <Text style={styles.label} fontSize="subheading" fontWeight="bold">  {repositories.language}</Text>
    
    </View>
    </View>
    <View style={styles.fbox}>
    <Text style={styles.item} color="textPrimary" fontSize="subheading" fontWeight="bold">  {repositories.stargazersCount}</Text>
    <Text  style={styles.item} color="textPrimary" fontSize="subheading" fontWeight="bold">  {repositories.forksCount}</Text>
    <Text  style={styles.item} color="textPrimary" fontSize="subheading" fontWeight="bold">  {repositories.reviewCount}</Text>
    <Text  style={styles.item} color="textPrimary" fontSize="subheading" fontWeight="bold">  {repositories.ratingAverage}</Text>


     <NativeText style={styles.item}> stars: </NativeText>
    <NativeText  style={styles.item}> forks: </NativeText>
    <NativeText  style={styles.item}> reviews: </NativeText>
    <NativeText  style={styles.item}> rating: </NativeText>
    </View>
</>
)


}

export default RepositoryItem