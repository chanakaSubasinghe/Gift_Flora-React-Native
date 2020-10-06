
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Login from '../screens/member2/LoginScreen'
import Register from '../screens/member2/RegisterScreen'
import Forgot from '../screens/member2/ForgotPasswordScreen'
import MyAccount from '../screens/member1/MyAccountScreen'
import MyAddress from '../screens/member1/MyAddressScreen'
import EditAddress from '../screens/member1/EditAddressScreen'
import AddAddress from '../screens/member1/AddAddressScreen'


const App = createSwitchNavigator({
    Login: { screen: Login },
    Register: { screen: Register },
    Forgot: { screen: Forgot },
    MyAccount: { screen: MyAccount },
    MyAddress: { screen: MyAddress },
    EditAddress: { screen: EditAddress },
    AddAddress: { screen: AddAddress }
});
export default createAppContainer(App);