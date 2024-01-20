import React from 'react';
import { Link } from 'react-router-dom';
import { differenceInYears } from 'date-fns';
import { LayoutMain } from '../../shared/layouts';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Petit1Image from './../../shared/img/Petit 1.0.png';
import Petit2Image from './../../shared/img/Petit 2.0.png';
import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';


export const Home: React.FC = () => {

	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	const calcularIdade = (): number => {
		const dataAtual = new Date();
		return differenceInYears(dataAtual, '2002-03-20');
	};

	return (
		<LayoutMain title='Home'>
			<Box display={smDown ? 'flex' : 'block'} flexDirection={'column'} alignItems={'center'}>

				{/* Nome e Título */}
				<Box>
					<Typography
						variant={smDown ? 'h4' : 'h3'}
						margin={2}
						marginTop={15}
						bgcolor={theme.palette.primary.light}
						borderRadius={2}
						width="fit-content"
						padding={1}
						color={'#ddd'}
						align={smDown ? 'center' : 'inherit'}
					>
						Luiz Henrique
					</Typography>
					<Typography
						variant={smDown ? 'h4' : 'h3'}
						marginLeft={smDown ? 0 : 2}
						paddingLeft={smDown ? 0 : 1}
						color={'#ddd'}
						align={smDown ? 'center' : 'inherit'}
					>
						Desenvolvedor
					</Typography>
					<Typography
						variant={smDown ? 'h4' : 'h3'}
						marginTop={1}
						marginLeft={smDown ? 0 : 2}
						paddingLeft={smDown ? 0 : 1}
						color={'#ddd'}
						align={smDown ? 'center' : 'inherit'}
					>
						Full Stack
					</Typography>
				</Box>

				{/* SubTítulo */}
				<Box>
					<Typography
						variant='body1'
						marginTop={3}
						marginLeft={2}
						paddingLeft={1}
						color={'#ddd'}
						fontWeight={'bold'}
						align={smDown ? 'center' : 'inherit'}
					>
						Olá, possuo {calcularIdade()} anos e desenvolvo aplicações web desde 2023, focado em desenvolver códigos eficientes e limpos.
						<br />
						Sempre buscando garantir a melhor experiência de usuário.
						Esse site foi desenvolvido usando React + MaterialUI + TypeScript
						<br />
						para demonstrar um pouco do meu conhecimento e projetos pessoais.
					</Typography>
				</Box>

				{/* Redes Sociais */}
				<Box margin={4} display={'flex'} gap={3}>
					<a href={'https://github.com/LuHenriSouza'} target="_blank" rel="noopener noreferrer">
						<Button variant='outlined'>
							<GitHubIcon sx={{ mr: 1 }} /> GitHub
						</Button>
					</a>
					<a href={'https://www.linkedin.com/in/luiz-henrique-aparecido-de-souza-699ab91ba'} target="_blank" rel="noopener noreferrer">
						<Button variant='outlined'>
							<LinkedInIcon sx={{ mr: 1 }} /> LinkedIn
						</Button>
					</a>
				</Box>

				{/* Pricipais Projetos */}
				<Box display={'flex'} justifyContent={'center'}>
					<Typography
						variant={smDown ? 'h4' : 'h3'}
						margin={2}
						marginTop={smDown ? 7 : 10}
						bgcolor={theme.palette.primary.light}
						borderRadius={2}
						width="fit-content"
						padding={1}
						color={'#ddd'}
					>
						Pricipais Projetos
					</Typography>
				</Box>

				{/* Títulos, Imagens e Descrição */}
				<Grid container spacing={smDown ? 0 : 10}>
					<Grid item xs={smDown ? 12 : 6} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
						<Typography align='center' variant='h5' m={2}> Petit 1.0</Typography>
						<img src={Petit1Image} alt="" height={smDown ? 300 : 700} style={{ objectFit: 'cover', objectPosition: '0 0', borderRadius: 10, cursor: 'pointer' }} onClick={() => window.open('https://github.com/LuHenriSouza/PetitSystem', '_blank')} />
						<Box minHeight={'110px'} >
							<Typography align='center' variant='body1' m={1} >
								Esse foi meu primeiro projeto, o objetivo era fazer um sistema administrativo
								para a loja que trabalho usando PHP + Laravel + Bootstrap + Livewire.
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={smDown ? 12 : 6} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
						<Typography align='center' variant='h5' m={2}> Petit 2.0</Typography>
						<img src={Petit2Image} alt="" height={smDown ? 300 : 700} style={{ objectFit: 'cover', objectPosition: '0 0', borderRadius: 10, cursor: 'pointer' }} onClick={() => window.open('https://github.com/LuHenriSouza/petit-system-react', '_blank')} />
						<Box minHeight={'110px'} >
							<Typography align='center' variant='body1' m={1} >
								Esse é uma evolução do primeiro projeto e o meu principal, o objetivo
								é fazer o mesmo sistema usando TypeScript + Node + React + MaterialUI e separando o front-end do back-end.
							</Typography>
						</Box>
					</Grid>
				</Grid>

				{/* Ver Todos os Projetos */}
				<Box display={'flex'} justifyContent={'center'}>
					<Link to={'/projetos'}>
						<Button variant='contained'>Ver Todos os Projetos</Button>
					</Link>
				</Box>
			</Box>
		</LayoutMain >
	);
};