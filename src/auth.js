import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
// export const USER_KEY = "@";
// export const USER_KEY = "demo";

export const onSignIn = () => AsyncStorage.setItem('@storage-key', 'true');
export const onSignOut = () => AsyncStorage.removeItem('@storage-key')







/*
export const isSignedIn = async () => {
    try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if(value !== null) {
            // value previously stored
        }
    } catch(e) {
        // error reading value
    }
}

*/
export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem('@storage-key')
      .then(res => {
        if (res !== null) {
            console.log(res);
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};
