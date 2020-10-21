import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Feed1153677Navigator from '../features/Feed1153677/navigator';
import Messaging4153676Navigator from '../features/Messaging4153676/navigator';
import SignIn25153675Navigator from '../features/SignIn25153675/navigator';
import UserProfile6153674Navigator from '../features/UserProfile6153674/navigator';
import Dashboard17153673Navigator from '../features/Dashboard17153673/navigator';
import ArticleList153641Navigator from '../features/ArticleList153641/navigator';
import ArticleList153640Navigator from '../features/ArticleList153640/navigator';
import ArticleList153639Navigator from '../features/ArticleList153639/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Feed1153677: { screen: Feed1153677Navigator },
Messaging4153676: { screen: Messaging4153676Navigator },
SignIn25153675: { screen: SignIn25153675Navigator },
UserProfile6153674: { screen: UserProfile6153674Navigator },
Dashboard17153673: { screen: Dashboard17153673Navigator },
ArticleList153641: { screen: ArticleList153641Navigator },
ArticleList153640: { screen: ArticleList153640Navigator },
ArticleList153639: { screen: ArticleList153639Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
