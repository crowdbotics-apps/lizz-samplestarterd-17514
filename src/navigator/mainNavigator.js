import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings54530Navigator from '../features/Settings54530/navigator';
import Settings54528Navigator from '../features/Settings54528/navigator';
import SignIn254526Navigator from '../features/SignIn254526/navigator';
import ArticleList54397Navigator from '../features/ArticleList54397/navigator';
import ArticleList54396Navigator from '../features/ArticleList54396/navigator';
import ArticleList54395Navigator from '../features/ArticleList54395/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Settings54530: { screen: Settings54530Navigator },
Settings54528: { screen: Settings54528Navigator },
SignIn254526: { screen: SignIn254526Navigator },
ArticleList54397: { screen: ArticleList54397Navigator },
ArticleList54396: { screen: ArticleList54396Navigator },
ArticleList54395: { screen: ArticleList54395Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
