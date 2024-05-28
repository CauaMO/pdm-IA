
import { Image, StyleSheet, Platform } from 'react-native';
import { TextInput } from "react-native";
import { View, Text} from 'react-native';
import { Button } from 'react-native';
import { CryEmoji } from '@/components/CryEmoji';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { isUsernameValid } from '@IA.tsx';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      <View style={styles.card}>
      <Image style={styles.img} source={require('@/assets/images/profile.webp')}/> 
      <Text style={styles.name}>@bagre</Text>
      <TextInput
        style={styles.input}
        placeholder="Make Your post"
        isUsernameValid='@IA.tsx'
      />
      <button style={styles.button}> publish
      </button>
          </View>
          <View style={styles.emoji}>
          <ThemedView style={styles.titleContainer}>
        <CryEmoji />
      </ThemedView>
      <ThemedText type="title">nothing here yet</ThemedText>
      

      </View>
      
    </View>
    
 
)}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },

  container:{
    flex: 1,
    backgroundColor: '#4b0082',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  card:{
    width:"105%",
    height:290,
    backgroundColor: "#181638",
    borderRadius: 50,
    marginBottom: -530,
    padding: 20,
    alignItems: 'baseline',

  },
  input:{ 
    height: 50,
    fontSize: 25,
    color: '#d3d3d3',
  },
  emoji:{
    justifyContent:'center',
    alignItems:'center'
  },
  name:{
    fontSize: 25,
    color: '#f8f8ff',
    margin:20

  },
  button:{
    height:45,
    width:280,
    borderRadius:30,
    color: '#FFFFFF',
    backgroundColor: "#a52a2a",
    fontSize: 20,
    margin: 20
  },
  invisibleCard:{
    margin: 50
  },
  img:{
    width:50,
    height:50,
    borderRadius: 100,
    
  },
 
});
