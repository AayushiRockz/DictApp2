
import React from 'react';
import {Component} from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity, Alert} from 'react-native';
import AppHeader from './AppHeader'
import dictionary from './database';

export default class App extends React.Component {
 constructor(){
   super();
   this.state={
     text:'',
     isSearchPressed:false,
     word:'',
     wordFromData:'',
     definitions:''
   
   }
 }
  // getWord=(word)=>{
  //   var  searchKeyWord=word.toLowerCase()
  //   var url="https://rupinwhitehatjr.github.io/dictionary/"+searchKeyWord+".json"
  //   // console.log(url)
  //   return fetch(url)
  //   .then((data) =>{
  //     if(data.status===200){
  //       return data.json()
  //     }else{
  //       return null
  //     }
  //   })
  //   .then((response)=>{
  //     var responseObject = response

  //     if(responseObject){
  //       var wordData = responseObject.definitions[0]
  //       var definition = wordData.description
  //       var lexicalCategory=wordData.wordtype

  //       this.setState({
  //         "word":this.state.text,
  //         "definition":definition,
  //         "lexicalCategory": lexicalCategory
  //       })
  //     }else{
  //       this.setState({
  //         "word":this.state.text,
  //         "definition":"Not Found"
  //       })
  //     }
  //   })
  // }

  getWord=(text)=>{
    var  text = text.toLowerCase()
    try{
      var word = dictionary[text]["word"]
      var lexicalCategory = dictionary[text]["lexicalCategory"]
      var definition = dictionary[text]["definition"]
      this.setState({
        "word":word,
        "lexicalCategory":lexicalCategory,
        "definition": definition  
      })
    }
    catch(err){
     Alert.alert("SORRY THIS WORD IS NOT THERE IN OUR DATABASE")
     this.setState({
       "text":'',
       "isSearchPressed":false
     })
    }
  
  }
  render(){
    return (
      <View>
        <AppHeader/>
        <TextInput style={styles.inputBox} onChangeText={text=>{
          this.setState({
            text:text,
            isSearchPressed:false,
            word:'Loading...',
            lexicalCategory:'',
            examples:[],
            defination:''
          })
        }} 
          value={this.state.text}/>
  
        <TouchableOpacity style={styles.button}
        onPress={this.getWord}>
          <Text style={styles.anyText}>Search</Text>
          </TouchableOpacity>

          <Text>Word:{""}</Text>
          <Text style={{fontSize:18}}>{this.state.word}</Text>
       
          <Text>Type:{""}</Text>
          <Text style={{fontSize:18}}>{this.state.lexicalCategory}</Text>

          <Text>Definition:{""}</Text>
          <Text style={{fontSize:18}}>{this.state.definition}</Text>


      </View>
    );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox:{
    width:400,
    height:50,
    backgroundColor:'pink',
    borderWidth:5,
    borderColor:'magenta',
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginTop:30
    
  },
  button:{
    width:100,
    height:40,
    backgroundColor:"cyan",
    justifyContent:'center',
    borderColor:'blue',
    borderWidth:2.5,
    alignContent:'center',
    alignItems:'center',
    margin:20,
    alignSelf:'center'
  },
  anyText:{
    fontSize:22,
    fontWeight:'semiBold',
    color:'red'
  }

});
