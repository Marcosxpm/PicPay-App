import React, { Component } from "react";
import { View, Dimensions,ScrollView, StyleSheet} from "react-native";
import Rechage from "../Activities//recharge";
import BusList from "../Activities/bud";
import UberList from "../Activities/uber"
import TvList from "../Activities/tv";
import BoletList from "../Activities/bolet";
import CardList from "../Activities/cartao.js";
import PayPix from "../Activities/pix";
import PlayStoreList from "../Activities/playstore";
import Ifood from "../Activities/ifood";
import Cripto from "../Activities/cripto";
export default class ScrollViewHorizontal  extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return(
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{
                    flex:1,
                    flexDirection: 'row',
                    marginRight: 15,
                    marginBottom: 10,
                }}>
                    <Rechage/>
                    <Cripto/>
                    <BoletList />
                    <CardList />
                    <PayPix />
                    <PlayStoreList />
                    <Ifood/>
                    <UberList />
                    <BusList />
                    <TvList />
                </View>
            </ScrollView>
        );

    }
}