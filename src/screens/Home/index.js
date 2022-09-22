import React from "react";
import { StyleSheet, View, ScrollView, Dimensions, StatusBar } from "react-native";
import Balance from "../../components/Balance/Balance";
import Banner1 from "../../components/Banner/Banner1";
import Banner2 from "../../components/Banner/banner2";
import ContainerBanner from "../../components/Banner/container";
import Input from "../../components/BarSeach";
import InitPerfil from "../../components/InitPerfil/initperfil";
import Slide from "../../components/ScrollViewHorizontal";
import ScrollViewSectionsHorizontal from "../../components/ScrollViewHorizontal/sectionsHorizontal";


let screenWidth = Dimensions.get('window').width;
export default function Home () {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#278763" barStyle='light-content'/>
            <ScrollView>

            <View style={styles.init}>
            <InitPerfil />

        <View style={styles.flex2}>
            <Balance/>
            <ScrollViewSectionsHorizontal />
    </View>

    </View>

    <View style={styles.flex3}>
        <Input />

        <Slide />
        <ContainerBanner/>
        <Banner1 />
        <Banner2/>

</View>
</ScrollView>
</View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flexDirection: "column",
        backgroundColor: "#278763",
        height: '100%',
    },
    init: {
        width: "auto",
        height: "auto",
        backgroundColor: "#278763"
    },
    flex2: {
        flex: 1,
        flexDirection: 'column',
        height:180,
        backgroundColor: "#278763",
        borderTopColor: "#2D5E4B",
        borderTopWidth: 0.5,
        marginLeft: 20,
        marginRight: 20,
    },
    flex3: {
        backgroundColor: "#fff",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        width: screenWidth,

    },
    Text: {
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10,
    }
});