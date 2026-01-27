import React, {
    createContext,
    useState,
    useEffect,
    ReactNode,
} from "react";
import Cookies from "js-cookie";

/**
 * Tipe data untuk Auth Context
 */
interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Default value context
 * (dipakai hanya untuk typing, bukan value sebenarnya)
 */
export const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);

/**
 * Props untuk AuthProvider
 */
interface AuthProviderProps {
    children: ReactNode;
}

/**
 * Auth Provider
 */
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
        !!Cookies.get("token")
    );

    useEffect(() => {
        const handleTokenChange = () => {
            setIsAuthenticated(!!Cookies.get("token"));
        };

        window.addEventListener("storage", handleTokenChange);

        return () => {
            window.removeEventListener("storage", handleTokenChange);
        };
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};
