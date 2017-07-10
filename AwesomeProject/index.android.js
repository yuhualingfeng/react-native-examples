/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component }  from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput
} from 'react-native';
// import $ from 'jquery';
export default class AwesomeProject extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'state',
      text:'',
      lists:[]
    }
  }
  componentDidMount(){
    this.getMoviesFromApiAsync();
  }
  getMoviesFromApiAsync() {
    // return fetch('https://facebook.github.io/react-native/movies.json')
    return fetch('http://blog.csdn.net/u012620506/svc/GetCategoryArticleList?id=6379482&type=foot')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({lists:responseJson});
        //return responseJson;
      })
      .catch((error) => {
        //console.error(error);
      });
  }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    let dataElements = this.state.lists.map(function(v,i){
      // return <Text key={i}>{v.title+':'+v.releaseYear}</Text>;
      return <Text key={i}>{v.username}</Text>;
    });
    return (

      <View style={{padding: 10}}>
        <Text style={styles.welcome}>yuhualingfeng,welcom to React Native</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
        {dataElements}
      </View>

     

    );
  }
}

AwesomeProject.defaultProps = {
  name:'fsdf'
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'flex-start',
    // backgroundColor: 'blue',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'red'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

      // ###example 1
      // <ScrollView style={styles.container}>
      //   <Image source={pic} style={{width: 193, height: 110}}/>
      //   <Text style={styles.welcome}>
      //     yuhualingfeng,Welcome to React Native!{this.props.name}{this.state.name}
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit index.android.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text><Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text><Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text><Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text><Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text><Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text><Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text><Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text><Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text><Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text><Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text><Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text><Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text><Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text><Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text><Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text><Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text><Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text><Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text><Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text>
      // </ScrollView>
      // 
      // ###example 2
      /* <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        
      }}>
        <ScrollView style={{flex:1}}>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Text style={styles.welcome}>
          yuhualingfeng,Welcome to React Native!{this.props.name}{this.state.name}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text><Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text><Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text><Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text><Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text><Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text><Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text><Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text><Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text><Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text><Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text><Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text><Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text><Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text><Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text><Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text><Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text><Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text><Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text><Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </ScrollView>
        <View style={{height:50,flexDirection:'row'}}>
          <View style={{width: 50,flex:1, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50,flex:1, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50,flex:1, height: 50, backgroundColor: 'steelblue'}} />
        </View>
      </View>*/
      


