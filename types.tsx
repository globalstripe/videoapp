/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

// export type RootStackParamList = {
//   Root: undefined;
//   NotFound: undefined;
// };

// export type BottomTabParamList = {
//   TabOne: undefined;
//   TabTwo: undefined;
// };

export type TabOneParamList = {
  TabOneScreen: undefined;
};

// export type TabTwoParamList = {
//   TabTwoScreen: undefined;
// };


//

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Coming_Soon: undefined;
  Search: undefined;
  Downloads: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
  MovieDetailsScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type TabThreeParamList = {
  TabTwoScreen: undefined;
};

export type TabFourParamList = {
  TabTwoScreen: undefined;
};

export type SettingsParamList = {
  SettingsScreen: undefined;
};

export type Episode = {
  id: string,
  title: string,
  poster: string,
  duration: string,
  plot: string,
  video: string,
}

