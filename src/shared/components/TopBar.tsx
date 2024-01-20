import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Divider, IconButton, Stack, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';


interface ITopBarProps {
	title: string;

}


const navItems = [
	{
		name: 'Início',
		path: '/'
	},
	{
		name: 'Projetos',
		path: '/projetos'
	},
];


export const TopBar: React.FC<ITopBarProps> = ({ title }) => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	return (
		<AppBar component="nav">
			<Toolbar>
				<Box display={'flex'} justifyContent={smDown ? 'space-between' : 'space-around'} width={'100%'}>
					<Box>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							sx={{ mr: 2, display: { sm: 'none' } }}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
						>
							{title}
						</Typography>
					</Box>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						<Stack
							direction="row"
							divider={<Divider orientation="vertical" flexItem sx={{ backgroundColor: "rgb(255,255,255,0.5)" }} />}
							spacing={2}
						>
							{navItems.map((item, index) => (
								<Link key={index} to={item.path}>
									<Button sx={{ color: '#fff' }}>
										{item.name}
									</Button>
								</Link>
							))}
						</Stack>
					</Box>
				</Box>
			</Toolbar>
		</AppBar>
	);
};