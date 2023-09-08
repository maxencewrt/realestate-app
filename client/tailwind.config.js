const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {      
      borderRadius: {
      'yes': '1rem', // Vous pouvez ajuster la valeur selon votre préférence
      },
    },
  },
  plugins: [],
});