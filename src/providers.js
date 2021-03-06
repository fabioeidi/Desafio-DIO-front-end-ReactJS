import React from "react";
import App from "./App";
import { ResetCSS } from "./global/resetCSS";
import GithubProvider from "./providers/github-provider";

const Providers = () => {
  return(
    <main>
      <GithubProvider>
        <App />
        <ResetCSS />
      </GithubProvider>
    </main>
  );
}

export default Providers;