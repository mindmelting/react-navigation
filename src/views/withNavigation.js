/* @flow */

import * as React from 'react';
import propTypes from 'prop-types';
import hoistStatics from 'hoist-non-react-statics';

import type {
  NavigationScreenProp,
  NavigationState,
  NavigationAction,
} from '../TypeDefinition';

type Context = {
  navigation: NavigationScreenProp<NavigationState, NavigationAction>,
};

type InjectedProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationAction>,
};

export default function withNavigation<T: {}>(
  Component: React.ComponentType<T & InjectedProps>
) {
  const componentWithNavigation = (props: T, { navigation }: Context) => (
    <Component {...props} navigation={navigation} />
  );

  componentWithNavigation.displayName = `withNavigation(${Component.displayName ||
    Component.name})`;

  componentWithNavigation.contextTypes = {
    navigation: propTypes.object.isRequired,
  };

  return hoistStatics(componentWithNavigation, Component);
}
