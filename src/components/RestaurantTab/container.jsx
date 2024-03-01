import { Tab } from "../Tab/component";

export const RestaurantTabContainer = ({restaurantName, ...props}) => {

	return restaurantName
		? <Tab {...props} title={restaurantName}/>
		: null;
}
