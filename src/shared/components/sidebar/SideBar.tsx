import { Box, Button, Divider, Drawer, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useDrawerContext } from "../../contexts";
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
interface ISideBarProps {
	children: React.ReactNode;
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

export const SideBar: React.FC<ISideBarProps> = ({ children }) => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

	const [active, setActive] = useState('');

	const local = useLocation();

	useEffect(() => {
		setActive(local.pathname);
	}, [setActive, local]);

	return (
		<>
			<Drawer open={isDrawerOpen} variant={'temporary'} onClose={toggleDrawerOpen}>
				<Box width={theme.spacing(30)} height="100%" display="flex" flexDirection="column">
					<Box height={100} display={'flex'} justifyContent={'center'} alignItems={'center'}>
						<Typography align="center">
							Portifolio
						</Typography>
					</Box>
					<Divider variant="middle" sx={{ backgroundColor: "rgba(255,255,255,0.4)", mb: 4 }} />
					{navItems.map((item) => (
						<Link to={item.path} style={{ textDecoration: 'none' }} onClick={toggleDrawerOpen}>
							<Button
								color='info'
								sx={{
									alignItems: 'center',
									borderRadius: 2,
									display: 'flex',
									justifyContent: 'flex-start',
									my: '4px',
									py: '0px',
									textAlign: 'left',
									width: '93%',
									...(active == item.path && {
										backgroundColor: 'rgba(255, 255, 255, 0.04)',
									}),
									'&:hover': {
										backgroundColor: 'rgba(255, 255, 255, 0.05)',
									},
									ml: 1
								}}
							>
								<Box
									component="span"
									sx={{
										color: 'rgba(255, 255, 255, 0.5)',
										flexGrow: 1,
										fontSize: 16,
										fontWeight: 600,
										lineHeight: '35px',
										whiteSpace: 'nowrap',
										textTransform: 'none',
										ml: 1,
										...(active == item.path && {
											color: 'rgb(255, 255, 255, 1)'
										})
									}}
								>
									{item.name}
								</Box>
							</Button>
						</Link>
					))}
				</Box>
			</Drawer >
			<Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(30)}>
				{children}
			</Box>
		</>
	);
};