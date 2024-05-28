import { usestate } from 'react-native';
import {View, text, TouchableOpacity, TextInput, FlatList, Image, StyleSheet, SafeAreaView} from
'react-native';
import ListItem from '.src/components/ListItem'
import styles from './src/constants/styles'
import { SeforOtario} from './src/lib/toxicity';


const FlatListComponent = () => {

const [isLoading, setIsLoading] = useState(false)

const[ValorText, setValorText]  = useState('');

const [items, setItems] = useState([]);
const [textIsToxic, setTextIsToxic] = useState(false)

const adicionarItem = async () => {

     setIsLoading(true)

     if (ValorText.trim() !== '' ){


        const {predictions} = await SeforOtario(valorText) 

        console.log(predictions);

        let textIsToxicVar = false

        predictions.map(prediction =>{
            const match = prediction.results[0].match

            console.log(prediction.label, match);

            if(match == true) {
                textIsToxicVar = true
            }
        })

         console.log("> textIsToxicVar", textIsToxicVar);

         if(textIsToxicVar){
            setTextIsToxic(textIsToxicVar)
            setIsLoading(false)
            return
         }

         setItems([...items, valorText]);
         
         setValorText('');
         setIsLoading(false)
    } 
}
};


if(textIsToxic) {
    return(
        <safeAreaView style={estilos.container}></safeAreaView>>
        <view style={estilos.quadradoUsuario}></view>
            <view style={estilos.usuInfo}></view>  
              <Image source={require('./src/assets/banido.jpeg')} style={estilos.UsuIcone} />
              <text style={estilos.textoUsuario}>@banido</text>
              </view>
              <text style={estilos.textoAdicional}>You were banned</text>
              <text style={[estilos.textoAdicional, estilos.textoEspacado, estilos.textoVermelho]}></text>
              </view>
              </safeAreaView>
    )
}

 return (
  <><view style={styles.container}></view><FlatList
         data={items}
         renderItem={({ item }) => <ListItem item={item} />}
         keyExtractor={(index) => index.toString()}

         ListEmptyComponent={<view style={require(';/src/assets/emoji.png')} style={styles.emoji} />
             ,
             <text style={styles.textosListaVazia}> Nothing here yet</text>} /></>