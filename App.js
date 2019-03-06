import React, {Component} from 'react';
import {Platform,Modal, TouchableHighlight,AsyncStorage ,StyleSheet, Button,Dimensions, ScrollView, Text, View, TextInput, TouchableOpacity, Alert, StatusBar, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
type Props = {};
export default class App extends Component<Props> {
 constructor()
  {
    super();
    this.state={
      Text: 'ŞİFRE GİRİN',
      Name: 'ŞİFRE GİRİN',
      renk1: '#f70000',
      renk2: '#f72100',
      renk3: '#f74200',
      Textrenk: '#f2efff',
      ValueHolder2:'',
      modalVisible: false,
      sifrelerVisible: false,
    }
  }
    
GetValueFunction = (ValueHolder) =>{
     
     this.setState({Text : ValueHolder.toString()});
     this.setState({ValueHolder2 : ValueHolder.toString()});

     var val=ValueHolder.toString();
     var no=0;
     if(val!="")
     {
   
      if(val.length<=6)
        no=1;

      if(val.length>6 && (val.match(/[a-z]/) || val.match(/\d+/) || val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)))
        no=2;

     
      if(val.length>6 && ((val.match(/[a-z]/) && val.match(/\d+/)) || (val.match(/\d+/) && val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) || (val.match(/[a-z]/) && val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/))))
        no=3;
     
      if(val.length>6 && val.match(/[a-z]/) && val.match(/\d+/) && val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/))
        no=4;

      if(no==1)
      {
         this.setState({Text : "ÇOK ZAYIF"});
          this.setState({renk1 : '#f70000'});
           this.setState({renk2 : '#f72100'});
            this.setState({renk3 : '#f74200'});
             this.setState({Textrenk : '#f2efff'});
      }

      if(no==2)
      {
          this.setState({Text : "ZAYIF"});
           this.setState({renk1 : '#f70029'});
            this.setState({renk2 : '#f7003e'});
             this.setState({renk3 : '#f70063'});
              this.setState({Textrenk : '#e9ffeb'});
      }

      if(no==3)
      {
          this.setState({Text : "İYİ"});
           this.setState({renk1 : '#00a9f7'});
            this.setState({renk2 : '#00d6f7'});
             this.setState({renk3 : '#00eff7'});
              this.setState({Textrenk : '#08537a'});
      }

      if(no==4)
      {
          this.setState({Text : "GÜÇLÜ"});
           this.setState({renk1 : '#00f773'});
            this.setState({renk2 : '#00f75a'});
             this.setState({renk3 : '#00f74e'});
              this.setState({Textrenk : '#08622a'});
      }
     }

     else
     {
          this.setState({Text : "ŞİFRE GİRİN"});
     }


     }

  alertPage=()=>{
     if(this.state.ValueHolder2!="")
     {
         this.setModalVisible(true);
     }
  } 

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }




  sifreleralertPage=()=>{
      //alert(this.state.sifrelerVisible);
         this.setsifrelerVisible(true);

  } 

  setsifrelerVisible(visible) {
    this.setState({sifrelerVisible: visible});
  }
    
render() {
  let screenWidth = Dimensions.get('window').width;
  let screenHeight = Dimensions.get('window').height;
  return (
     <ScrollView
     pagingEnabled={true}
     horizontal={true}
     showsHorizontalScrollIndicator={true}
     ref={(node) => this.scroll = node}>



   <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor:'#0c0c0c',width:screenWidth,}}>
   <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[this.state.renk1, this.state.renk2, this.state.renk3]} style={styles.linearGradient}>
                 
                  <TouchableOpacity style={{marginTop:30}} onPress={() => { this.scroll.scrollTo({ x: screenWidth }) }} >
                     <Image style={{width: 33,  height: 33, marginTop:15, justifyContent: 'center',alignItems: 'center',alignSelf: 'stretch', opacity:0.3, }}   source={require('./src/image/shield.png')}/>
                  </TouchableOpacity>

      <StatusBar     backgroundColor="rgba(0, 0, 0, 0.2)"    translucent    animated={true}    />    

      <Text style={{textAlign: 'center',padding:15,marginBottom: 5,marginTop: 80,fontSize: 40,fontFamily: 'sans-serif-medium', opacity:0.95,fontWeight: 'bold',color: this.state.Textrenk}}> { this.state.Text } </Text>
    
      <TextInput
        placeholder="Password"
        returnKeyType='go'
        secureTextEntry
        autoCorrect={false}    
        password={true}
        onChangeText={ ValueHolder => this.GetValueFunction(ValueHolder) }
        style={{ textAlign: 'center',    fontSize: 60,   fontFamily: 'Cochin', opacity:0.5, fontWeight: 'bold',}}
      />

         <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center',}} onPress={this.alertPage}>
                     <Image style={{width: 33,  height: 33, marginTop:10, justifyContent: 'center',alignItems: 'center',alignSelf: 'stretch', opacity:0.3, }}   source={require('./src/image/add.png')}/>
         </TouchableOpacity>

   <TouchableOpacity style={{marginTop: 'auto',bottom:0,}} onPress={this.myfun}>
       <Text style={{ textAlign: 'center',padding:9,marginTop: 'auto',bottom:0,fontSize: 15,fontStyle:'italic', fontFamily: 'sans-serif-medium', fontWeight: 'bold',opacity:0.2, color: "#000"}}> V. Yasin ÇELİKBAŞ </Text>
   </TouchableOpacity>

       
            <View style={{width: '80%', height: '80%', position: this.state.modalVisible ? 'absolute' : 'relative', display: this.state.modalVisible ? 'flex' : 'none', borderRadius: 12, backgroundColor:'#fff'}}> 
               <View style={{flexDirection: 'row',}}>
                  
                  <Text style={{textAlign: 'center',padding:12, fontStyle:'italic', marginBottom: 5, fontSize: 27,fontFamily: 'sans-serif-medium', opacity:0.95,fontWeight: 'bold',color: this.state.renk3}}> { this.state.Text } </Text>
 
                  <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center',right:12, marginLeft:'auto',  }}  onPress={() => {this.setModalVisible(!this.state.modalVisible);}}>
                       <Image style={{width: 27,  height: 27, opacity:0.6, }}   source={require('./src/image/close.png')}/>
                  </TouchableOpacity>

                </View>
                <View style={{flex:1, flexDirection: 'column', padding:15,}}>
                  <View style={{flex:1, flexDirection: 'column',}}>
                    <Text style={{ fontSize: 13,fontFamily: 'sans-serif-medium', fontStyle:'italic', opacity:0.95,fontWeight: 'bold',marginLeft:0, color: this.state.renk3}}>Name:</Text> 
                    <TextInput
                      placeholder=""
                      returnKeyType='go'
                      autoCorrect={false}    
                      onChangeText={(text) => this.setState({Name:text})}
                      style={{fontSize: 17, fontWeight: 'bold', borderBottomWidth:2, bottom:-5,  borderColor: this.state.renk3,}}
                    />

                     <Text style={{ fontSize: 13,fontFamily: 'sans-serif-medium',marginTop:15, fontStyle:'italic', opacity:0.95,fontWeight: 'bold',marginLeft:0, color: this.state.renk3}}>Password:</Text> 
                    <TextInput
                      placeholder="Password Selected"
                      returnKeyType='go'
                      autoCorrect={false}  
                       editable={false}   
                      onChangeText={(text) => this.setState({Name:text})}
                      style={{fontSize: 17, fontWeight: 'bold', borderBottomWidth:2, bottom:-5,  borderColor: this.state.renk3,}}
                    />

                 

                  <TouchableOpacity  style={{backgroundColor:this.state.renk3,padding:10,alignItems: 'center', marginTop:'auto', bottom:0, justifyContent: 'center', alignSelf: 'stretch',borderRadius: 100,}}
                     onPress={() => {this.setModalVisible(!this.state.modalVisible);}}>
                      <Text  style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}> Password Save </Text> 
                    </TouchableOpacity>

                  </View>
               

                 
                </View>
            </View>
            
        
         <View style={{width: '80%', height: '80%', position: this.state.sifrelerVisible ? 'absolute' : 'relative', display: this.state.sifrelerVisible ? 'flex' : 'none', borderRadius: 12, backgroundColor:'#fff'}}> 
               <View style={{flexDirection: 'row',}}>
                  
                  <Text style={{textAlign: 'center',padding:12, fontStyle:'italic', marginBottom: 5, fontSize: 27,fontFamily: 'sans-serif-medium', opacity:0.95,fontWeight: 'bold',color: this.state.renk3}}> Password </Text>
 

                     <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center',right:12, marginLeft:'auto',  }}  onPress={() => {this.setsifrelerVisible(!this.state.sifrelerVisible);}}>
                       <Image style={{width: 27,  height: 27, opacity:0.6, }}   source={require('./src/image/close.png')}/>
                  </TouchableOpacity>
                </View>
          </View>


   </LinearGradient>
   </View>
  
    <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor:'#0c0c0c',width:screenWidth,}}>
   <Button title="Screen 1" onPress={() => { this.scroll.scrollTo({ x: 0 }) }} />
   </View>

    </ScrollView>
               
       );
     }
   }

const styles = StyleSheet.create(
{ input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  MainContainerAna: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  backgroundColor:'#0c0c0c',
  },
   MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch', 
  },
  TextInputStyle:{
    textAlign: 'center',
    height: 50,
    width: '90%'
  },  


});