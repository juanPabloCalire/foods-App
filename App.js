
import { useFonts } from 'expo-font';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { Provider } from 'react-redux';
import store from './src/store'
//db
import {init} from './src/db'

init()
  .then(() => console.log("Database initialized"))
  .catch((err) => {
    console.log("Data base fail connect");
    console.log(err.message);
  });

  
export default function App() {
  const [fontsLoaded] = useFonts({
    ComfortaaLight: require('./src/assets/fonts/Comfortaa-Light.ttf'),
    ComfortaaRegular: require('./src/assets/fonts/Comfortaa-Regular.ttf'),
    ComfortaaMedium: require('./src/assets/fonts/Comfortaa-Medium.ttf'),
    ComfortaaSemiBold: require('./src/assets/fonts/Comfortaa-SemiBold.ttf'),
    ComfortaaBold: require('./src/assets/fonts/Comfortaa-Bold.ttf')
  })
  if(!fontsLoaded){return null}
  return (
    <Provider store={store}>
      <BottomTabNavigator />
    </Provider>
  );
}


