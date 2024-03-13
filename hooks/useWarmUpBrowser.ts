import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';

// Used to warm up browser for login, boosts perfomance noticably for Android
export const useWarmUpBrowser = () => {
    useEffect(() => {
        void WebBrowser. warmUpAsync();
        return () => {
            void WebBrowser.coolDownAsync();
        };
    }, []);
};