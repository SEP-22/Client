import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    projectId: "xs1ie7",
    baseUrl: "http://127.0.0.1:5173/",
    setupNodeEvents(on, config) {},
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
