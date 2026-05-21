import { createDrawerNavigator } from '@react-navigation/drawer';
import Setting from '../drawer/setting';
import Logout from '../drawer/logout';
import Help from '../drawer/help';
import Myorder from '../drawer/myorder';
import ProfileDrawer from '../drawer/profile.drawer';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={ProfileDrawer} />
      <Drawer.Screen name="My Order" component={Myorder} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}

const ProfileScreen = () => {
  return <MyDrawer />;
};

export default ProfileScreen;