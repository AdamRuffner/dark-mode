import React from 'react';
import useLocalStorage from './UseLocalStorage';

const  useDarkMode = () => {
    const [enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled');

    const prefersDarkMode = usePrefersDarkMode();

    const enabled = 
    typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode

    return [enabled, setEnabledState];
}

export default useDarkMode;