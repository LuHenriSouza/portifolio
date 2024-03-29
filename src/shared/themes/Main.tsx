import { createTheme } from '@mui/material';
import { cyan } from '@mui/material/colors';

export const MainTheme = createTheme({
    palette: {
        primary: {
            main: '#512da8',
            dark: '#6200ea',
            light: '#411d98',
            contrastText: '#efefef',

        },
        secondary: {
            main: '#6200ea',
            dark: cyan[800],
            light: cyan[500],
            contrastText: '#efefef',

        },
        background: {
            paper: '#210d78',
            default: '#070421',
        },
        info: {
            main: '#eee',
            light: '#6200ea',
            dark: '#411d98',
            contrastText: '#242105',
        },
        text: {
            primary: '#ddd'
        },
    },
    typography: {
        allVariants: {
            color: '#fff'
        }
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#ccc',
                    '&:hover': {
                        textDecoration: 'underline',
                        color: '#fff',
                    },
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                root: {
                    color: "#fff"
                },
                paper: {
                    backgroundColor: "#512da8",
                    color: "#fff",
                }
            }
        }
    }
});