
// FLEX ÖRNEĞİ 

import React from 'react';
import {SafeAreaView, View,Text,Image, StyleSheet,TextInput, ImageBackground} from 'react-native'


const App = () => {

  return (
    <SafeAreaView>

        
        <View style ={styles.head}>
          <Text style = {{fontSize : 40 , fontWeight : "bold",}}>News</Text>
        </View>     


        <View style ={styles.title1}>
            <Image style = {{width: 380, height: 220 }}  source={require("./img/4.png")}/>                  
            <Text style = {{fontSize : 10}}>Bulls Exit BitMEX Bitcoin Furures Market</Text>
            <Text style = {{fontSize : 13,fontWeight : "bold"}}>Bulls Exit BitMEX Bitcoin Furures Market</Text>
            <Text style = {{fontSize : 11}}> Since the announcement from U.S. regulators, BitMEX has witnessed an outflow of more than 40,000 bitcoins, currently worth more than $422 million.</Text>
        </View>

        <View style ={styles.title2}>
            <Image style = {{width: 380, height: 170 }}  source={require("./img/11.jpeg")}/>                 
            <Text style = {{fontSize : 13,fontWeight : "bold"}}>Coinbase customers can now dodge a bank</Text>
            <Text style = {{fontSize : 11}}> New update form Coinbase quickens the transmutation of crypto into fiat. Coinbase has unveiled a faster way for its customers to move digital currencies out of crypto and into their bank accounts.</Text>
        </View>

        <View style ={styles.title3}>
        <Image style = {{width: 380, height: 100 }}  source={require("./img/s1.png")}/>                 
            
        </View>
      
     
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  head : {
      justifyContent : "center", 
      alignItems : "flex-start",
      marginLeft : 10
    },
    title1 : {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        margin : 3,
        padding : 3,
    },
    title2 : {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        margin : 3,
        padding : 3,
      },
      
    title3 : {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        margin : 3,
        padding : 6,       
      }
})