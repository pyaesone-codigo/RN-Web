// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {RouteComponentProps} from 'react-router';
import {Platform} from 'react-native';

export type BaseNavigationProps = NativeStackScreenProps<any> &
  RouteComponentProps;

export const RouteName = {
  HomePage: 'HomePage',
  DetailPage: 'DetailPage',
};

export const navigate = (props: any) => {
  Platform.OS === 'web'
    ? props.history.push(`/${RouteName.DetailPage}`)
    : props.navigation.navigate(RouteName.DetailPage);
};
