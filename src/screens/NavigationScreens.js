import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomePage from "./Welcome/Welcome";
import Login from "./Login/login";
import Navigation from "../Navigation";


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome" component={WelcomePage} options={{headerShown: false}} />


            <Stack.Screen  
            name="Login" component={Login}/>


            <Stack.Screen  
            name="init" component={Navigation} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}