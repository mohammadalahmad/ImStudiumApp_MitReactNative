import { StyleSheet } from 'react-native';

export default StyleSheet.create({
 

    menu: {
      
        alignItems: 'center', //Horizontal Alignment
        justifyContent: "center", //Vertical Alignment
  
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    input: {
      height: 40,
      width: "100%",
      margin: 5,
      borderWidth: 1,
      color: '#000',
      fontSize:15,
      paddingLeft: 5,
      backgroundColor: '#fff',
      borderColor: "#FF9933",
      paddingLeft: 20,
      borderRadius: 10,
       
    },
    buttonStyle:{
      borderRadius: 10,
      backgroundColor: "#FF9933",
      height: 60,
      width: "50%",
      margin:5,
      borderColor: "#fff",
      borderWidth:1,
      alignSelf:"center",
      justifyContent: 'center', 
     
    },
    TextStyle: {
    alignSelf:"center",
    color: "green",
    fontSize: 20,
    fontWeight: 'bold'
    },TextStyle1: {
      alignSelf:"center",
      color: "red",
      fontSize: 20,
      fontWeight: 'bold'
      },

    FaecherEinfuegen1: {
      borderWidth: 2 , 
      borderRadius: 10,  
      backgroundColor: "white", 
      flexDirection: 'row',    
      alignItems: 'baseline' 
       
      },
      FaecherEinfuegen2: {
        flex: 0.9,    
        flexDirection: 'column' 
         
        },
        FaecherEinfuegenText: {
          fontSize:25,   
          marginLeft:5, 
          margin:5,  
          justifyContent: 'center'
           
          },
          FaecherEinfuegen3: {
            flex: 0.9,    
            flexDirection: 'column' 
             
            },
            FaecherEinfuegen4: {
            
              justifyContent: 'flex-start', 
              alignItems: 'flex-start' ,
              flexDirection: 'row',
              },
            MenuScreen2: {
              marginLeft: 10,
              marginRight: 10,
              fontWeight: 'bold',
                 flexDirection: 'row',
                 justifyContent: 'center', 
                 alignItems: 'center',
                 backgroundColor: '#FFF', 
                 height: 60,
                 borderRadius: 10,
                 backgroundColor: "#FF9933",
                 borderColor: "#fff",
                 borderWidth:1,
         
                 
             },tinyLogo: {
              width: 30,
              height: 30,
              margin:15,
            },
            
            container: {
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              marginTop:50,
               
            },

            container1: {
              flex: 1,
              justifyContent: 'flex-start',
              marginTop:50,
 
            },
            HomeScreen: {
              backgroundColor: "#DFDFE6",
             flex:1,
              alignItems: 'center', //Horizontal Alignment
              justifyContent: "center",
              //Vertical Alignment
          },
          MenuScreen1: {
            flex: 1, 
            backgroundColor: '#e67300', 
            justifyContent: "center", //Vertical Alignment
             
          },   

           MenuScreen: {
            flexDirection: 'row',
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor: '#FFF', 
            height: 80,
            
        },
        Behalter: {
          flex: 1, 
           margin: 2,
            
           
        },
         
        
        Texteinfügen: {
          fontWeight: "600",
          paddingTop:15,
          paddingBottom:15,
          alignSelf:"center",
          color: "#FF0000",
          fontSize: 15,
        
        },
        buttoneinfügen1:{
        borderRadius: 10,
        backgroundColor: "#FFF",
        alignSelf: "stretch",
        height: 30,
        margin:5,
        borderColor: "#FF9933",
        borderWidth:2,
        padding: 10,
        alignItems: 'center',  
        justifyContent: "center",
        width: 130,
        
        
        }, 
        item: {
             
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 14,
      
        borderRadius: 10,
        backgroundColor: "#FFF",
        height: 5,
        borderColor: "#FF9933",
        borderWidth:1,
        
        },
        item1: {
             
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 18,
          width:120,
          borderRadius: 10,
          backgroundColor: "#FFF",
          height: 5,
          borderColor: "#FF9933",
          borderWidth:1,
          
          },

        tinyLogo: {
          width: 40,
          height: 40,
          margin:15,
        },

        buttonGPlusStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: "#FFF",
          borderWidth:2,
          borderColor: "#FF9933",
          height: 65,
          borderRadius: 10,
          margin: 5,
        },
        buttonFacebookStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#485a96',
          borderWidth: 0.5,
          borderColor: '#fff',
          height: 40,
          borderRadius: 5,
          margin: 5,
        },
        buttonImageIconStyle: {
          padding: 10,
          margin: 5,
          height:  35,
          width: 35,
          resizeMode: 'stretch',
        },
        buttonTextStyle: {
            fontWeight: "600",
            color: "#F5A431",
          marginBottom: 4,
          marginLeft: 10,
          fontSize: 30,
        },
        buttonIconSeparatorStyle: {
          backgroundColor: '#F5A431',
          width: 1,
          height: 40,
        },
        TextFirebase: {
          marginLeft:20,
          marginRight:20, 
     
          padding:5, 
          fontSize: 24,
          color: '#c4463d',    
          backgroundColor: '#FFF',    
          borderWidth: 1,
          borderColor: "#FF9933", 
          borderRadius: 10,
        },
  
        ScrollView: {
            marginBottom:30,                 
        }, 
        title: {
          fontSize: 15,
          fontWeight: 'bold',
        },
         deletepunkte: {
         alignItems: 'flex-end',
         marginLeft:75,
         justifyContent: "flex-end",
         flexDirection: 'row', 
         fontSize:20,
         fontWeight: 'bold',
        
        
        },
         bearbeitenpunkte: {
         alignItems: 'flex-end',
          
        }


        
  }); 


  //Quelle https://snack.expo.io/kU4Bj5h9r
  