import { AppRoutes } from './routes';
import { Container } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { AppThemeProvider } from './shared/contexts';


export const App = () => {

  return (
    <AppThemeProvider>
      <Container maxWidth="xl">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Container>
    </AppThemeProvider>
  )
}