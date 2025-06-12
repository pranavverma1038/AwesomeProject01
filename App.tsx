import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView
} from 'react-native'
import FlatCards from "./components/FlatCards";
import ElevatedCards from "./components/ElevatedCards";
import FancyCard from "./components/FancyCard";
import ActionCard from "./components/ActionCard";



function App(){
    return (
    
    <SafeAreaView>
      <ScrollView>
      <View>
        <FlatCards/>
        <ElevatedCards/>
        <FancyCard/>
        <ActionCard/>
      </View>
      </ScrollView>
    </SafeAreaView>
   
    )
}


export default App;