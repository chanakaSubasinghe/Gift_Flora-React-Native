
import { createAppContainer , createSwitchNavigator} from 'react-navigation'
import Login from '../screens/member2/LoginScreen'
import Register from '../screens/member2/RegisterScreen'
import Forgot from '../screens/member2/ForgotPasswordScreen'



const App = createSwitchNavigator({
    Login: { screen: Login },
    Register: { screen: Register },
    Forgot : { screen : Forgot}
});
export default createAppContainer(App);