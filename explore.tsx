
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';
import { View, TextInput, Text, } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Image style={styles.img} source={require('@/assets/images/profile.webp')}/> 
        <Text style={styles.texto}>@bagre</Text>
        <Text style={styles.texto}>I like to play</Text>
      </View>
      <View style={styles.card}>
      <Image style={styles.img} source={require('@/assets/images/profile.webp')}/> 
      <Text style={styles.texto}>@bagre</Text>
        <Text style={styles.texto}>I hate Bruno Henrique more than...</Text>
        
      </View>
      <View style={styles.invisibleCard}></View>
      <View style={styles.footerCard}>
      <View style={styles.cardPublish}>
      <Image style={styles.img} source={require('@/assets/images/profile.webp')}/> 
        <Text style={styles.name}>@bagre</Text>
      <TextInput
        style={styles.input}
        placeholder="Make Your post"
      />
      <button style={styles.button}> publish
      </button>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#4b0082',
    paddingHorizontal: 10,
    justifyContent: 'flex-start'
  },
  card:{
    width:"95%",
    height:205,
    backgroundColor: "#181638",
    borderRadius: 30,
    margin:10,
    padding: 8,
    marginBottom: 10,
    alignItems:'baseline',
    
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
  texto:{
    fontSize: 20,
    color: '#FFFFFF',
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
  name:{
    fontSize: 25,
    color: '#f8f8ff',
    margin:20

  },
  cardPublish:{
    width:"105%",
    height:290,
    backgroundColor: "#181638",
    borderRadius: 30,
    padding:10,
    alignItems:'baseline'
  },
  invisibleCard:{
    margin: 30
  },
  footerCard:{
    alignItems:'center',
    justifyContent: 'center'
  },
  img:{
    width:50,
    height:50,
    borderRadius: 100,
    
  },
});
