import { NavigationContainer } from "@react-navigation/native";
// import * as SecureStore from "expo-secure-store";
import React from "react";
import { connect } from "react-redux";

import * as actionTypes from "@/constants/index";
import AppNavigator from "./AppNavigation";
import AuthNavigator from "./AuthenNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const RootNavigation = (props) => {
  const { userToken } = props;
  React.useEffect(() => {
    let userToken;
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      try {
        // userToken = await SecureStore.getItemAsync("userToken");
        // userToken = "aaaaâ"
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      // props.restoreToken(userToken);
    };

    bootstrapAsync();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {props.userToken ? (
          <Stack.Screen
            name="App"
            component={AppNavigator}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen
            name="Auth"
            component={AuthNavigator}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const mapStateToProp = (store) => {
  // select
  return {
    // userToken: store.auth.userToken,
    userToken: "a",
  };
};
// const mapDispatchToProp = (dispatch) => { // useDispatch
//   return {
//     restoreToken: (userToken) => {
//       dispatch({ type: actionTypes.actionTypes.authTypes.RESTORE_TOKEN, token: userToken });
//     },
//   };
// };

export default connect(mapStateToProp)(RootNavigation);
