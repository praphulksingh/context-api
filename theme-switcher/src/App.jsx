
import { useEffect,useState } from 'react';
import './App.css'
import { ThemeProvider } from './context/ThemeContext';
import ThemeBtn from './compononts/ThemeBtn';
import Card from './compononts/Card';

function App() {
const [themeMode,setThemeMode]=useState('light') 

const darkMode=()=>{
  setThemeMode('dark')
}
const lightMode=()=>{
  setThemeMode('light')
}
//used to remove and add className
useEffect(() => {
  document.querySelector('html').classList.remove('light','dark')
  document.querySelector('html').classList.add(themeMode)

},[themeMode])

  return (
    <>
      <ThemeProvider value={{themeMode,darkMode,lightMode}}>
       
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card/>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App
