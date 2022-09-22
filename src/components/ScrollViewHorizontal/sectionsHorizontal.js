import React, { Component } from "react";
import { View, Dimensions, ScrollView} from "react-native";
import Pix from "../Sections/pix";
import Qrcode from "../Sections/qrcode";
import PayBolet from "../Sections/paybolet";
import PayPerson from "../Sections/payperson";
import RechargeMobile from "../Sections/rechargemobile";
import CardTranport from "../Sections/cardTranport";
import PayLocations from "../Sections/paylocations";
import DemandPeople from "../Sections/demandPeople";
import Crypto from "../Sections/cripto";
import OpenFinance from "../Sections/openFinance";
export default class ScrollViewSectionsHorizontal  extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return(
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{
                    flex:1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Pix/>
                    <Qrcode />
                   <PayBolet />
                    <PayPerson />
                    <RechargeMobile/>
                   <CardTranport/>
                    <PayLocations/>
                    <DemandPeople/>
                    <Crypto/>
                    <OpenFinance/> 
                </View>
            </ScrollView>
        );

    }
}