// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {RouteComponentProps} from 'react-router';
import {IS_WEB} from '../utils/UI';

export type BaseNavigationProps = NativeStackScreenProps<any> &
  RouteComponentProps;

export const RouteName = {
  HomePage: 'HomePage',
  DetailPage: 'DetailPage',
};

export const navigate = (props: any, name: string, param?: any) => {
  IS_WEB
    ? props.history.push(`/${name}`, {param})
    : props.navigation.navigate(RouteName.DetailPage, {param});
};

export const goBack = (props: any) => {
  IS_WEB ? props.history.goBack() : props.navigation.goBack();
};
