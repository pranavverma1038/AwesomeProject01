import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
        <Text style={styles.headingText}>Flat cards</Text>
      <View style={styles.container}>
            <View style={[styles.card, styles.cardOne]}>
                    <Text style={styles.cardText}>Red</Text>
            </View>
            <View style={[styles.card, styles.cardTwo]}>
                    <Text style={styles.cardText}>Blue</Text>
            </View>
            <View style={[styles.card, styles.cardThree]}>
                    <Text style={styles.cardText}>Green</Text>
            </View>
            
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:17
    },
    container:{
        flexDirection: 'row', 
        paddingHorizontal: 8,
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:100,
        width:100,
        borderRadius:4,
        margin:8

    },
    cardOne:{
        backgroundColor:'red',
        color: 'white',
    },
    cardTwo:{
        backgroundColor:'lightblue'
    },
    cardThree:{
        backgroundColor:'lightgreen'
    },
    cardText:{
        color:'white'
    }
})