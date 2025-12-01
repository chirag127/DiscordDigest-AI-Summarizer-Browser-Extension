import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Onboarding } from "@/src/features/onboarding/Onboarding";
import { isOnboardingComplete } from "@/src/features/onboarding/utils";
import { Settings } from "@/src/features/settings/Settings";
import "./style.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    isOnboardingComplete().then((complete) => {
      setIsComplete(complete);
      setLoading(false);
    });
  }, []);

  if (loading) return null;

  if (!isComplete) {
    return <Onboarding onComplete={() => setIsComplete(true)} />;
  }

  return <Settings />;
};

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
