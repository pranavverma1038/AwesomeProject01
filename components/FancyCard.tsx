import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>TrendingPlaces</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image style={styles.cardImage}
            source={{
                uri:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
            }}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Nature</Text>
            <Text style={styles.cardLabel}>Shimla</Text>
            <Text style={styles.cardDescription}>Queen Of Hills Shimla at an altitude of 4323 meter from ocean level, here You are in hands of nature</Text>
            <Text style={styles.cardFooter}>Visit Today</Text>
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
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16,
    },
    cardElevated:{
        backgroundColor:"lightgray",
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
        }
    },
    cardImage:{
        height:200,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
    },
    cardTitle:{
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6
    },
    cardFooter:{},
    cardDescription:{
        fontSize:14,
        marginBottom:8,
        flexShrink:1,
        color:'green'
    },
    cardLabel:{
        fontSize:14,
        marginBottom:6,
    }
})