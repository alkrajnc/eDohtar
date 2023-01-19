
import { AsyncStorageStatic } from '@react-native-async-storage/async-storage'
//export const USER_KEY = "auth-demo-key";
export const USER_KEY = null;

export const onSignIn = () => AsyncStorageStatic.setItem(USER_KEY, "true");

export const onSignOut = () => AsyncStorageStatic.removeItem(USER_KEY);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorageStatic.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};