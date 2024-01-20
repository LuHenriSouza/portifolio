import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';


interface ITopBarProps{
	title: string;
}

export const TopBar: React.FC<ITopBarProps> = ({title}) => {
	return (
		<AppBar component="nav">
			<Toolbar>
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
					// sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
					sx={{ml:40}}
				>
					{title}
				</Typography>
			</Toolbar>
		</AppBar>
	);
};