import React from 'react';
import { View,Image, Text,TouchableOpacity, Linking} from 'react-native';
import styles from './styles';
import logoImg from '../../assets/logo.png';
import { Feather} from '@expo/vector-icons';
import {useNavigation,useRoute} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

export default function Detail(){
    const route = useRoute();
    const incident = route.params.incident;
    const navigation = useNavigation();
    const message= 'Olá quero ajudar'
    function navigateBack(){
        navigation.goBack();
    }
    function sendMail(){
        MailComposer.composeAsync({
            subject: 'heroi do caso',
            recipients:['josy@hotimail.com'],
            body: message,

        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=84999714563text${message}`)
    }
    return(
        <View style= {styles.container}>
        <View style={styles.header}>
            <Image source={logoImg}></Image>
            <TouchableOpacity onPress={navigateBack}>
       
            <Feather name= "arrow-left" color='#e02041'></Feather>
        </TouchableOpacity>
            </View>

         <View style ={ styles.incident}>
        <Text style={ [styles.incidentProperty, {marginTop:0}]}>Ong: </Text>
        <Text style={ styles.incidentValue}> Apad</Text>

        <Text style={ [styles.incidentProperty, {marginTop:0}]}>Caso: </Text>
        <Text style={ styles.incidentValue}> gato pisado</Text>

        <Text style={ [styles.incidentProperty, {marginTop:0}]}>Valor: </Text>
        <Text style={ styles.incidentValue}> 3000</Text>
</View>

<View style={styles.contactBox}>
<Text style={styles.herotitle}>Salve o dia</Text>
<Text style={styles.herotitle}>Seja o heroi desse caso</Text>

<Text style={styles.herodescrition}>Entre em contato</Text>

<View style={styles.actions}>
<TouchableOpacity style = { styles.action} onPress={sendWhatsapp}>  
   <Text style={styles.actionTex}>Whatsapp</Text>       
        </TouchableOpacity>    
        <TouchableOpacity style = { styles.action} onPress={sendMail}>  
   <Text style={styles.actionTex}>Email</Text>       
        </TouchableOpacity>   
</View>
</View>
        </View>
    );
   
}