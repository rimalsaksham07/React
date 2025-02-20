import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  thememode: "light",
  darktheme: () => {},
  lighttheme: () => {},
});
// export ThemeContext nai garek oho esma
// theme context banako ya samma ta 
// aba context banayepaxii provider banayera wrap ni garnu p aryo ni ta 


// aba ya dekhi chai provider banako 
// themeprovider lai aba tyo mathi bata ako context lai lera provider banako 
export const ThemeProvider = ThemeContext.Provider
// ya provider banyo 


// ya aba hamle custom hook banauna khojeko  
// use theme bhanne euta function banako jasle le chai themecontext lai use garxa 
export default function useTheme(){
    return useContext(ThemeContext)
}
// k k value default present huna ko lagi yo cai
