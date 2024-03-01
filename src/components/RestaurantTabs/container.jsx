import { RestaurantTabs } from "./component";

export const RestaurantTabsContainer = ({isRestaurantsLoaded, ...props}) => {
  return !isRestaurantsLoaded ? <div>Loading...</div> : <RestaurantTabs {...props} />;
}
