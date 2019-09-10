import React from 'react';
import { createStackNavigator } from 'react-navigation';

import List from '../screens/List';
import Article from '../screens/Article';
import Profile from '../screens/Profile';
import More from '../screens/More'

export default createStackNavigator(
  {
    List,
    Article,
    Profile,
    More
  },
  {
    initialRouteName: "List",
  }
);