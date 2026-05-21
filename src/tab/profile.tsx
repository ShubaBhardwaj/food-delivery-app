import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileDrawer from '../drawer/profile.drawer';
import Setting from '../drawer/setting';
import Help from '../drawer/help';
import Logout from '../drawer/logout';

const Drawer = createDrawerNavigator();

function ProfileScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={ProfileDrawer} />
      <Drawer.Screen name="Settings" component={Setting} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}

export default ProfileScreen;