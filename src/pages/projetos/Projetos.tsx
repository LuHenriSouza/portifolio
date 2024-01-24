import { Alert, Box, Button, CircularProgress, Divider, Grid, LinearProgress, Paper, Skeleton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { getProjects, getCommits, IResponse } from './config.tsx';
import { LayoutMain } from '../../shared/layouts';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';


export const Projetos: React.FC = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	const [isLoaded, setIsLoaded] = useState(false);
	const [projetos, setProjetos] = useState<IResponse[]>([]);
	const [projectCommits, setProjectCommits] = useState<{ [key: string]: number | undefined }>({});
	const [NA, setNA] = useState(false);
	useEffect(() => {
		const dataFetch = async () => {
			try {
				const projetos = await getProjects();
				projetos ? setProjetos(projetos) : setNA(true);

			} catch (e) {
				console.error(e);

			} finally {
				setIsLoaded(true);
			}
		};
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		dataFetch();
	}, [isLoaded])

	const fetchCommits = async (name: string) => {
		try {
			const result = await getCommits(name);
			setProjectCommits((prevCommits) => ({
				...prevCommits,
				[name]: result,
			}));
		} catch (error) {
			console.error(`Error fetching commits for ${name}:`, error);
		}
	}

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
					A lista a seguir é atualizada automaticamente de acordo com meus projetos públicos no GitHub.
				</Typography>
				{/* Projetos */}
				{isLoaded ?
					<Grid container spacing={smDown ? 1 : 3} flexDirection={smDown ? 'column' : 'row'} alignItems={'center'}>
						{projetos.map((pj) => {
							fetchCommits(pj.name);
							return (
								<Grid item xs={smDown ? 12 : 3} key={pj.name}>
									<Button href={pj.url}>
										<Box display={'flex'} flexDirection={'column'} gap={1} component={Paper} sx={{ height: 260, width: 310 }} variant='outlined'>
											<Typography variant='h5' align='center' mt={1}>{pj.name}</Typography>
											<Typography variant='h6' align='center' mb={1}>{format(pj.created_at, 'dd / MM / yy')}</Typography>

											<Divider sx={{ backgroundColor: '#fff' }} variant='middle' />

											<Typography variant='h6' align='center' m={1}>{pj.language ? pj.language : 'banner'}</Typography>

											<Divider sx={{ backgroundColor: '#fff' }} variant='middle' />

											{projectCommits[pj.name] ?
												(
													<Typography variant='body1' align='center' m={1}>Total de Commits: {projectCommits[pj.name]}</Typography>
												)
												:
												(
													<Skeleton height={40} variant='text' />
												)
											}
										</Box>
									</Button>
								</Grid>
							)
						}
						)}
					</Grid>
					:
					<>
						<LinearProgress />
						{smDown && (<CircularProgress sx={{ color: "#fff" }} />)}
					</>
				}
				{isLoaded && NA && (
					<Alert severity='error' sx={{ mt: 3 }}>Erro ao listar projetos! Verifique o token de acesso!</Alert>
				)}

			</Box>
		</LayoutMain>
	);
};