import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight +20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
       },

       incident:{
        paddingTop: 24,
        borderRadius:8,
        marginBottom: 16,
        backgroundColor:'#FFF',
        marginTop:48,
    },
    incidentProperty:{
        fontSize:16,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24,
    },
    incidentValue:{
        marginTop:8,
        fontSize:15,
        
        color:'#737380',
    },
    contactBox:{
        paddingTop: 24,
        borderRadius:8,
        marginBottom: 16,
        backgroundColor:'#FFF',
        marginTop:48,
    },
    herotitle:{
        fontWeight: 'bold',
        fontSize:20,
        lineHeight:30,
        color:'#13131a',
    },
    herodescrition:{
        fontSize:15,
        color: '#737380',
        marginTop:16,
    },
    actions:{
        flexDirection:'row',
        marginTop:16,
        justifyContent: 'space-between',
    },
    action:{
        backgroundColor: '#e02041',
        borderRadius:8,
        height:50,
        width:'48%',
        justifyContent:'center',
        alignItems:'center',
    },
    actionTex:{
        color:'#FFF',
        fontSize:15,
        fontWeight:'bold',
    }

})