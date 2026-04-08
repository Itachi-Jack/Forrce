import Toast from 'react-native-toast-message';

export const showErrorToast = (title, message) => {
  Toast.show({
    type: 'error',
    text1: title,
    text2: message,
    position: 'top',   // 👈 TOP
    topOffset: 60,     // 👈 distance from top (status bar safe)
    visibilityTime: 3000,
  });
};