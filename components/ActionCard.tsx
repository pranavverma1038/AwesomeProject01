import { StyleSheet, Text, View,Image,TouchableOpacity,Linking } from 'react-native'
import React from 'react'


export default function ActionCard() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }

  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                Whats new in Javascript ES - 6
            </Text>
        </View>
        <Image
        style={styles.cardImage}
        source={{
            uri:'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80'
        }}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                Nestled in the heart of Rajasthan, Jaipur is a city that blends royal heritage with vibrant modern life, offering an unforgettable experience through its colorful bazaars, majestic palaces, and timeless traditions.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={()=>{openWebsite("https://www.tripadvisor.in/")}}>
                <Text style={styles.footerContainerText}>Read More</Text>
            </TouchableOpacity>
            
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:17,

    },
    card:{
        width:350,
        height:390,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16,
    },
    elevatedCard:{
        backgroundColor:'orange',
        elevation:3,
        shadowOffset:{
            height:1,
            width:1,
        },
        shadowColor:'#333',
        shadowOpacity:0.4
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        fontSize:16,
        fontWeight:'600'
    },
    cardImage:{
        height:190
    },
    bodyContainer:{
        padding:10,
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    footerContainerText:{
        backgroundColor:'white',
        borderRadius:6,
        padding:10,
        color:'blue'
    },
})