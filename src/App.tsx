import { AppRoutes } from './routes';
import { Container } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { AppThemeProvider } from './shared/contexts';
import { Footer } from './shared/components';


export const App = () => {

  return (
    <AppThemeProvider>
      <Footer>
        <Container maxWidth="xl">
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </Container>
      </Footer>
    </AppThemeProvider>
  )
}