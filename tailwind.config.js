const defaultTheme = require("tailwindcss/defaultTheme");
const fontFamily = defaultTheme.fontFamily;

fontFamily["sans"] = ["Roboto", "system-ui"];
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: fontFamily,
    extend: {},
  },
  plugins: [],
};
