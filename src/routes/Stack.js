
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from '../screens/member2/LoginScreen';
import Register from '../screens/member2/RegisterScreen';
import Forgot from '../screens/member2/ForgotPasswordScreen';
import MyAccount from '../screens/member1/MyAccountScreen';
import MyAddress from '../screens/member1/MyAddressScreen';
import EditAddress from '../screens/member1/EditAddressScreen';
import AddAddress from '../screens/member1/AddAddressScreen';
import Home from '../screens/member3/HomeScreen';
import Menu from '../screens/member3/MenuScreen';
import Privacy from '../screens/member3/PrivacyScreen';
import ViewItem from '../screens/member3/ViewItemScreen';
import About from '../screens/member2/AboutScreen';
import BottomNav from '../components/BottomNav';
import OrderList from '../screens/member4/OrderListScreen';
import LeaveFeedback from '../screens/member4/LeaveFeedbackScreen';
import ShoppingCart from '../screens/member4/ShoppingCartScreen';
import Contact from '../screens/member4/ContactScreen';
import ViewCategory from '../screens/member3/ViewCategory'

const App = createSwitchNavigator({

    Login: { screen: Login },
    Home: { screen: Home },
    Menu: { screen: Menu },
    Privacy: { screen: Privacy },
    About: { screen: About },
    ViewItem: { screen: ViewItem },
    Register: { screen: Register },
    Forgot: { screen: Forgot },
    MyAccount: { screen: MyAccount },
    MyAddress: { screen: MyAddress },
    EditAddress: { screen: EditAddress },
    AddAddress: { screen: AddAddress },
    Forgot: { screen: Forgot },
    BottomNav: { screen: BottomNav },
    OrderList: { screen: OrderList },
    LeaveFeedback: { screen: LeaveFeedback },
    ShoppingCart: { screen: ShoppingCart },
    Contact: { screen: Contact },
    ViewCategory: { screen : ViewCategory}

});
export default createAppContainer(App);