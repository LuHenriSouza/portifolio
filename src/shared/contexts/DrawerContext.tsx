import { createContext, useCallback, useState, useContext } from 'react';


interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}
interface IAppDrawerProps {
    children: React.ReactNode;
}

const DrawerContext = createContext({} as IDrawerContextData);

// eslint-disable-next-line react-refresh/only-export-components
export const useDrawerContext = () => {
    return useContext(DrawerContext);
}

export const AppDrawerProvider: React.FC<IAppDrawerProps> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(old => !old);
    }, []);

    return (
        <DrawerContext.Provider value={{isDrawerOpen, toggleDrawerOpen}}>
            {children}
        </DrawerContext.Provider>
    );
}