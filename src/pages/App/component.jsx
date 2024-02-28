import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Layout } from '../../components/Layout/component'
import { RestaurantContainer } from '../../components/Restaurant/container'
import { RestaurantTabsContainer } from '../../components/RestaurantTabs/container'
import { useGetRestaurantsQuery } from '../../services/api'
import { Login } from '../Login/component'
import { NotFoundPage } from '../NotFound/component'

export const App = () => {
	const [activeRestaurantId, setActiveRestaurantId] = useState();
	const {data: restaurants, isSuccess: isRestaurantsLoaded} = useGetRestaurantsQuery();

  useEffect(() => {
		restaurants && setActiveRestaurantId(restaurants[0].id);
	}, [restaurants]);

	return (
		<Layout>
			<BrowserRouter>
				<Routes>
					<Route index element={<Login />} />
					<Route path='/restaurants' element={
						<>
							<RestaurantTabsContainer
								isRestaurantsLoaded={isRestaurantsLoaded}
								restaurants={restaurants}
								activeRestaurantId={activeRestaurantId}
								onTabClick={setActiveRestaurantId}
							/>
							<Outlet />
						</>
					}>
						<Route index element={<Navigate to={restaurants && restaurants[0].id} />} />
						<Route path=':restaurantId' element={activeRestaurantId && <RestaurantContainer />} />
					</Route>
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</Layout>
	)
}
