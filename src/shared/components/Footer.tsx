import { Box, Button, Container, Grid, Typography, useMediaQuery, useTheme, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
interface IFooterProps {
	children: React.ReactNode;
}

export const Footer: React.FC<IFooterProps> = ({ children }) => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<>
			{children}
			<Box minHeight={300} sx={{ backgroundColor: '#411D98', mt: 10, border: 1 }}>
				<Container maxWidth="xl">

					<Grid container marginTop={12}>
						<Grid item xs={5}>
							<Typography variant='h4' fontWeight={'bold'}>
								Gostou do meu trabalho ?
							</Typography>
							<Typography variant='h5' m={1} fontWeight={'bold'}>
								Vamos conversar!
							</Typography>
							<Typography variant='body1' ml={2}>
								luizhapsouza@gmail.com
							</Typography>
						</Grid>
						<Grid item xs={5}>
							<Typography variant='h6'>Mídia Sociais:</Typography>
							<Box display={'flex'} flexDirection={'column'} gap={1} m={1}>
								<Link href="https://github.com/LuHenriSouza" underline="hover"><GitHubIcon sx={{ mr: 1 }} />GitHub</Link>
								<Link href="https://www.linkedin.com/in/luiz-henrique-aparecido-de-souza-699ab91ba" underline="hover"><LinkedInIcon sx={{ mr: 1 }} />LinkedIn</Link>
							</Box>
						</Grid>
						<Grid item xs={2} display={'flex'} justifyContent={'center'}>
							<Button variant='contained' sx={{ maxHeight: 80 }} onClick={scrollToTop}>Voltar <br />ao Início</Button>
						</Grid>
					</Grid>
				</Container>
			</Box >
		</>
	);
};