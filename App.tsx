import React from "react";
import {
  View,
  Text,
  SafeAreaView
} from 'react-native'
import FlatCards from "./components/FlatCards";
import ElevatedCards from "./components/ElevatedCards";
import FancyCard from "./components/FancyCard";



function App(){
    return (
    <SafeAreaView>
      <View>
        <FlatCards/>
        <ElevatedCards/>
        <FancyCard/>
      </View>
    </SafeAreaView>
    )
}


export default App;