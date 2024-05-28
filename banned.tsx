
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
      <Text style={styles.subtext}>You where banned</Text>
      <View style={styles.space}></View>
      <Text style={styles.msg}>"I hate Bruno Henrique more than..."</Text>
          </View>
          <View style={styles.invisible}>
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
    justifyContent: 'center'
  },
  card:{
    width:"100%",
    height:380,
    backgroundColor: "#181638",
    borderRadius: 50,
    marginBottom: -530,
    padding: 20,
    alignItems: 'baseline',
    

  },
  name:{
    fontSize: 22,
    color: '#f8f8ff',
    margin:20

  },

  img:{
    width:50,
    height:50,
    borderRadius: 100,
    
  },
  invisible:{
    margin:300
  },
  subtext:{
    color: '#f0f8ff',
    fontSize: 22
  },
  msg:{
    color:'#a52a2a',
    fontSize: 28
  },
  space:{
    margin:25
  }
});
