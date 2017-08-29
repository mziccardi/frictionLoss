import React from 'react';
import KeyboardSpacer from 'react-native-keyboard-spacer'
import { StyleSheet, Text, View, Picker, Button, TextInput} from 'react-native';


class App extends React.Component {
  constructor(){
    super()
    this.state={
      diameter:'',
      gpm:'',
      length:''
    }
  }

  debugger(){
    console.log(this.state.diameter)
    console.log(this.state.gpm)
  }

  calculateLoss(){
    let c = this.state.diameter
    let q = Math.pow((this.state.gpm / 100),2)
    let l = (this.state.length/100)
    console.log(l)
  }

  render() {
    return (
      <View style={styles.app}>
        <View style={styles.title}>
          <Text>FRICTION LOSS</Text>
        </View>
        <View style ={styles.pickerContainer}>
          <Picker
            selectedValue={this.state.diameter}
            onValueChange={(value)=>this.setState({diameter:value})}>
            <Picker.Item  label="3/4 inch" value= '1100' />
            <Picker.Item  label="1 inch" value="150" />
            <Picker.Item  label="1 1/4 inch" value="80" />
            <Picker.Item  label="1 1/2 inch" value="24" />
            <Picker.Item  label="1 3/4 inch" value="15.5" />
            <Picker.Item  label="2 inch" value="8" />
            <Picker.Item  label="2 1/2 inch" value="2" />
            <Picker.Item  label="3 inch" value="0.677" />
            <Picker.Item  label="3 1/2 inch" value="0.34" />
            <Picker.Item  label="4 inch" value="0.2" />
            <Picker.Item  label="4 1/2 inch" value="0.1" />
            <Picker.Item  label="5 inch" value="0.08" />
            <Picker.Item  label="6 inch" value="0.05" />
          </Picker>
        </View>
          <View style={styles.inputContainer}>
           <TextInput
            placeholder='Gallons Per Minute'
            style={styles.input}
            onChangeText={(gpm)=> this.setState({gpm})}
            keyboardType='default'
            returnKeyType='done'
            value={this.state.gpm}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
             placeholder='Length of Hose (feet)'
             style={styles.input}
             onChangeText={(length)=> this.setState({length})}
             keyboardType='default'
             returnKeyType='done'
             value={this.state.lenght}
             />
          </View>
         <Button
           title='debugger'
           onPress={(e)=>this.calculateLoss(e)}
         />
         <KeyboardSpacer/>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    // flex:1,
    // color:'black',
  },
  title:{
    paddingTop:30,
    // textAlign:'center',
    alignItems:'center',
    marginBottom:10,
    // justifyContent:'center',
  },
  pickerContainer:{
    // paddingTop:15,
    // alignItems:'center',
    backgroundColor:'lightgrey',
    height:200,
    paddingBottom:50,
    // marginTop:25
  },
  inputContainer:{
    borderWidth:1,
    borderColor:'#000000',
    // marginTop:25,
  },
  input:{
    textAlign:'center',
    height:60,
  },
});


export default App
