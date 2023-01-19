import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Component} from "react";
// export const USER_KEY = "@";
// export const USER_KEY = "demo";

export const onSignIn = () => AsyncStorage.setItem('@storage-key', 'true');
export const onSignOut = () => AsyncStorage.removeItem('@storage-key')

export class authUser extends Component {
    constructor(props) {
                super(props);
                this.state = {text: ''};
        this.state = {pass: ''};
        this.state = {
            data: [],
            isLoading: true,
        };
        }
    async auth() {
        try {
            const response = await fetch('http://109.182.70.39/users', {
                method: 'POST',
                mode: 'CORS',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: {
                    user: "${this.state.text}",
                    pass: "${this.state.pass}"
                }});
            const json = await response.json();
            this.setState({data: json.movies});
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({isLoading: false});
        }
    }

    componentDidMount() {
        this.getMovies();
    }
}






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
