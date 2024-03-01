import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { RestaurantTabContainer } from '../RestaurantTab/container';

export const RestaurantTabs = ({
	restaurants,
	onTabClick,
	activeRestaurantId,
}) => {

	return (
		<div className={classNames('display-flex', 'margin-t-3')}>
			{restaurants?.length > 0 &&
				restaurants.map((restaurant) => (
					<div key={restaurant.id} className={classNames('margin-l-2')}>
						<NavLink to={restaurant.id}>
							<RestaurantTabContainer
								restaurantName={restaurant.name}
								onClick={() => onTabClick(restaurant.id)}
								isActive={restaurant.id === activeRestaurantId}
							/>
						</NavLink>
					</div>
				))}
		</div>
	)
}
