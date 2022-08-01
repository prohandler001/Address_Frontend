import React from 'react';
import {View,Text, StyleSheet, Image} from "react-native";
import MapView from 'react-native-maps';
import AddressTopProfile from '../components/AddressTopProfile';
import GoogleSearch from '../components/GoogleSearch';
import MenuBar from '../components/MenuBar';
import SearchEngin from "../components/SearchEngin";



const AddressProfile = ({navigation, route}) => {

    console.log(route.params);
    
  return (
    <View style={styles.mainContainer}>
        <MenuBar    />
        <View style={styles.searchContainer}>
            <SearchEngin   />
        </View>
        <View style={styles.topcontainer}>

            <View style={styles.leftContaier}>
                <Image
                source={ require("../assets/dex.jpg")  
                //{uri:route.params.Logo}
            }
                style={styles.leftImage}
                />
            </View>

            <View style={styles.rightcontainer}>
                <View>
                    <Text style={styles.CompanyName}>
                        {route.params.CompanyName}
                    </Text>
                </View>
                <View>
                    <Text style={styles.otherDetails}>
                        {route.params.PhoneNumber}
                    </Text>
                    <Text style={styles.otherDetails}>
                        {route.params.LocationName}
                    </Text>
                    <Text style={styles.otherDetails}>
                        {route.params.LandMark}
                    </Text>
                    <Text style={styles.category}>
                        {route.params.ListingCategory}
                    </Text>
                    <Text style={styles.otherDetails}>
                        {route.params.Zip}
                    </Text>
                    <Text style={styles.email}>
                        {route.params.Email}
                    </Text>
                </View>
            </View>
        </View>

        <View style={styles.bottomContainer}>
            <MapView style={styles.mapsContainer}   />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        justifyContent:'center',
        //marginTop:10
    },
    topcontainer:{
        marginTop:20,
        marginLeft:10,
        marginRight:10,
        flexDirection:'row'
    },
    leftImage:{
        width:170,
        height:150,
        borderRadius:150
    },
    searchContainer:{
        marginTop:5
    },
    rightcontainer:{
        marginLeft:10
    },
    CompanyName:{
        fontSize:20,
        fontWeight:'bold'
    },
    category:{
        color:'red'
    },
    otherDetails:{
        fontWeight:'300'
    },
    email:{
        color:'blue'
    },
    mapsContainer:{
        height:400,
        width:415,
        marginTop:10,
        marginBottom:10
    },
    bottomContainer:{
        marginTop:20,
        marginLeft:10,
        marginRight:10,
        borderTopWidth:2,
        borderTopColor:'black',
        borderBottomColor:'black',
        borderBottomWidth:2
    }
})
export default AddressProfile;