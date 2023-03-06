import { createTheme } from '@mui/material/styles';


const customTheme = createTheme({
  palette: {
    background:{
     default: '#3a99f0'
    },
    primary: {
      light:"#f27a41",
      main: "#e36022",
      dark: "#c24408",
    },
    secondary: {
     // main: "#d45113",
        main:"#ffffff",
        dark:"#fefefe",
    },
    success: {
      light: "#76e072",
      main: "#50d14b",
      dark: "#2bad4e",
      contrastText: "#ffff",
    },
  },
  typography:{
    fontFamily: 'sans-serif',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    
  },

  shape: {
    borderRadius: 10,
  },

  

  components:{

    

    MuiButton: {
      styleOverrides: {
        root: {
          //borderRadius: 10,
          fontWeight: 'bold',
          textTransform: 'upperCase',
          padding: '10px 40px',
          
        },

        outlined:{
          '&:hover': {
            backgroundColor: '#ffffff',
            color: '#3a99f0',
            boxShadow: 'initial',
          }
        },
      },
    },


  }
    
  

});






export default customTheme;