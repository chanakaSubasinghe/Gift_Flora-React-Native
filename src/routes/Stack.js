
import { createAppContainer , createSwitchNavigator} from 'react-navigation'
import Login from '../screens/member2/LoginScreen'
import Register from '../screens/member2/RegisterScreen'
import Forgot from '../screens/member2/ForgotPasswordScreen'
import Home from '../screens/member3/HomeScreen'
import Menu from '../screens/member3/MenuScreen'
import Privacy from '../screens/member3/PrivacyScreen'
import ViewItem from '../screens/member3/ViewItemScreen'
import About from '../screens/member2/AboutScreen'
import BottomNav from '../components/BottomNav'



const App = createSwitchNavigator({

    Login: { screen: Login },
    Home : {screen : Home},
    Menu : {screen: Menu},
    Privacy: {screen : Privacy},
    About : {screen : About},
    ViewItem : {screen : ViewItem},
    Register: { screen: Register },
    Forgot : { screen : Forgot},
    BottomNav : {screen :BottomNav}
    
});
export default createAppContainer(App);