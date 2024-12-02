// app/components/AppProvider.js
"use client";

import { OktoProvider, BuildType } from "okto-sdk-react";
import { createContext, useState, useContext } from "react";
import AuthProvider from "./AuthProvider";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [apiKey, setApiKey] = useState("your-api-key-here"); // Set your actual API key
  const [buildType, setBuildType] = useState(BuildType.SANDBOX);

  return (
    <AuthProvider>
      <AppContext.Provider
        value={{ apiKey, setApiKey, buildType, setBuildType }}
      >
        <OktoProvider apiKey={apiKey} buildType={buildType}>
          {children}
        </OktoProvider>
      </AppContext.Provider>
    </AuthProvider>
  );
}

export const useAppContext = () => useContext(AppContext);
