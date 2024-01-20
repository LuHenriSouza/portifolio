import { Box } from '@mui/material';
import { TopBar } from '../components';

interface ILayoutMainProps {
	children: React.ReactNode;
	title: string;
}

export const LayoutMain: React.FC<ILayoutMainProps> = ({ children, title }) => {
	return (
		<Box>
			<TopBar title={title}/>
			<Box minHeight={70}/>
			{children}
		</Box>
	);
};