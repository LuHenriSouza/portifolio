import { Box, Button, CircularProgress, Divider, Grid, LinearProgress, Paper, Skeleton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { LayoutMain } from '../../shared/layouts';
import { getProjects, getTotalCommits, IResponse } from './config.tsx';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
export const Projetos: React.FC = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	const [isLoaded, setIsLoaded] = useState(false);
	const [projetos, setProjetos] = useState<IResponse[]>([]);
	const [totalCommits, setTotalCommits] = useState<number[]>([]);

	useEffect(() => {
		const dataFetch = async () => {
			const projetos = await getProjects();
			if (projetos) setProjetos(projetos);

			setIsLoaded(true)

			const commits = await getTotalCommits();
			if (commits) setTotalCommits(commits);

		};
		dataFetch();
	}, [isLoaded])
	return (
		<LayoutMain title='Projetos'>
			<Box display={smDown ? 'flex' : 'block'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
				{/* Título */}
				<Typography
					variant={smDown ? 'h4' : 'h3'}
					margin={2}
					marginTop={10}
					bgcolor={theme.palette.primary.light}
					borderRadius={2}
					width="fit-content"
					padding={1}
					color={'#ddd'}
					align={smDown ? 'center' : 'inherit'}
				>
					Projetos
				</Typography>

				{/* Subtítulo */}
				<Typography
					variant={'body1'}
					margin={2}
					borderRadius={2}
					padding={1}
					color={'#ddd'}
					align={smDown ? 'center' : 'inherit'}
				>
					Essa página é atualizada automaticamente e ordenada por data de acordo com meus projetos no GitHub,<br /> se esta página estiver vazia por favor fazer contato comigo.
				</Typography>
				{/* Projetos */}
				({isLoaded ?
					<Grid container spacing={smDown ? 1 : 3} flexDirection={smDown ? 'column' : 'row'} alignItems={'center'}>
						{projetos.map((pj, index) => (
							<Grid item xs={smDown ? 12 : 3} key={pj.name}>
								<Button href={pj.url}>
									<Box display={'flex'} flexDirection={'column'} gap={1} component={Paper} sx={{ height: 200, width: 310 }} variant='outlined'>
										<Typography variant='h5' align='center' mt={1}>{pj.name}</Typography>
										<Typography variant='h6' align='center' m={1}>{format(pj.created_at, 'dd/MM/yy')}</Typography>
										<Divider sx={{ backgroundColor: '#fff' }} variant='middle' />
										{totalCommits.length > 0 ? (<Typography variant='body1' align='center' m={1}>Total de Commits: {totalCommits[index]}</Typography>) :
											(<Skeleton height={40} variant='text' />)}
									</Box>
								</Button>
							</Grid>
						))}
					</Grid>
					:
					<>
						<LinearProgress />
						{smDown && (<CircularProgress sx={{ backgroundColor: "#fff" }} />)}
					</>
				})

			</Box>
		</LayoutMain>
	);
};