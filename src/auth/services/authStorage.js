import * as Keychain from 'react-native-keychain';

export const savetoken = async (token) => {
    await Keychain.setGenericPassword('auth' , token);  
};

export const getToken = async () => {
    const credentials = await Keychain.getGenericPassword;
    return credentials ? credentials.password : null;
}

export const removeToken = async () => {
  await Keychain.resetGenericPassword();
};

