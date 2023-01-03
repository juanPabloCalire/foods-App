
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryBreadScreen from "../screens/CategoryBreadScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import BreadDetailsScreen from '../screens/BreadDetailsScreen'
import { COLORS } from "../constants/colors"

const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
    return (
        
        <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
                headerStyle: { backgroundColor: COLORS.primary },
                headerTintColor: COLORS.secondary,
                headerTitleStyle: { fontFamily: 'ComfortaaBold', fontSize:30, color:'black',  },
            }}
            >
                <Stack.Screen
                    name='Categories'
                    component={CategoriesScreen}
                    options={{ title: "Your Burger" }}
                    
                />
                <Stack.Screen
                    name='Bread'
                    component={CategoryBreadScreen}
                    options={({ route }) => ({ title: route.params.name, })}
                />
                <Stack.Screen
                    name='Details'
                    component={BreadDetailsScreen}
                    options={({ route }) => ({ title: route.params.name })}
                />
            </Stack.Navigator>

        
    );
};


