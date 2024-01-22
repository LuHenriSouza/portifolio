import { Routes, Route } from 'react-router-dom';
import { Home, Projetos } from '../pages';

export const AppRoutes = () => {
	return (
		<Routes>
			{/* Rotas mais específicas primeiro */}
			<Route path="/projetos" element={<Projetos />} />
			<Route path="/" element={<Home />} />
		</Routes>
	);
};
