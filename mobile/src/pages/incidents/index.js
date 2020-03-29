import React,{useState, useEffect} from 'react';
import { view,FlatList, Image,Text, TouchableOpacity} from 'react-native';
import {useNavigation, } from '@react-navigation/native';
import { Feather} from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';


export default function Incidents(){
   
    const [incidents,setIncidents]=useState([]);
    const [total,setTotal]=useState(0);
    const navigation = useNavigation();
   
    function navigateToDetail(incident){
        navigation.navigate('Detail',{incident});
    }
    async function loadIncidents(){
        const response= await api.get('incidents');
        setIncidents(response.data);
        setTotal(response.headers[x-Total-Count]);
    }
    useEffect(()=>{
       loadIncidents();
    } ,[])

    return (
        <View style= {styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}></Image>
                <Text style= {styles.headerText}>   
    Total de <Text style = { styles.headerTextBold}> {total}casos </Text>
                </Text>
            </View>
            <Text style={styles.title}>Bem-Vindo!</Text>
            <Text style ={styles.descrition}>Escolha um </Text>

<FlatList style={styles.incidentList}
    data={incidents}
    keyExtractor={incident=>String(incident.id)}
    renderItem={({item: incident})=>(
        <View style ={ styles.incident}>
        <Text style={ styles.incidentProperty}>Ong: </Text>
        <Text style={ styles.incidentValue}> {incident.name}</Text>

        <Text style={ styles.incidentProperty}>Caso: </Text>
        <Text style={ styles.incidentValue}> {incident.title}</Text>

        <Text style={ styles.incidentProperty}>Valor: </Text>
    <Text style={ styles.incidentValue}> {Intl.NumberFormat('pt-Br' ,{style:'currency' ,currency: 'BRL'}).format(incident.value)}</Text>
        <TouchableOpacity 
        style={styles.detailsbutton} onPress={()=>navigateToDetail()}>
            <Text style={styles.detailsbuttontext}>
                Ver mais Detalhes
                </Text>
        </TouchableOpacity>
        </View>

    )}
/>
    </View>
        
    );
}