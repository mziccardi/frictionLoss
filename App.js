import React from 'react';
import { StyleSheet, Text, View, Picker, Button, TextInput} from 'react-native';


class App extends React.Component {
  constructor(){
    super()
    this.state={
      diameter:'',
      gpm:'',
    }
  }

  debugger(){
    console.log(this.state.diameter)
    console.log(this.state.gpm)
  }
  render() {
    return (
      <View style={styles.container}>
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
           <TextInput
            placeholder='Gallons Per Minute'
            style={styles.input}
            onChangeText={(gpm)=> this.setState({gpm})}
            keyboardType='default'
            returnKeyType='done'
            value={this.state.gpm}
            />
         <Button
           title='debugger'
           onPress={(e)=>this.debugger(e)}
         />
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    // color:'black',
  },
  input:{
    backgroundColor:'magenta',
    height:60
  },
});


export default App