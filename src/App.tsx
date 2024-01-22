import { AppRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Footer, SideBar } from './shared/components';
import { Container, useMediaQuery, useTheme } from '@mui/material';
import { AppDrawerProvider, AppThemeProvider } from './shared/contexts';


export const App = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <AppThemeProvider>
      {smDown ? (
        <AppDrawerProvider>
          <BrowserRouter>
            <SideBar>
              <Footer>
                <Container maxWidth="xl">
                  <AppRoutes />
                </Container>
              </Footer>
            </SideBar>
          </BrowserRouter>
        </AppDrawerProvider>
      )
        :
        (
          <AppDrawerProvider>
            <BrowserRouter>
                <Footer>
                  <Container maxWidth="xl">
                    <AppRoutes />
                  </Container>
                </Footer>
            </BrowserRouter>
          </AppDrawerProvider>
        )
      }

    </AppThemeProvider>
  )
}