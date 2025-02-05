import { SearchState } from "@/pages/SearchPage";
import { Restaurant, RestaurantSearchResponse } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetRestaaurant = (restaurantId?: string) => {
    const getMyRestaurantByIdRequest = async (): Promise<Restaurant> => {
        ;

        const response = await fetch(`${API_BASE_URL}/api/restaurant/${restaurantId}`);

        if (!response.ok) {
            throw new Error("Failed to get restaurant");
        }

        return response.json();
    };

    const { data: restaurant, isLoading } = useQuery(
        "fetchRestaurant",
        getMyRestaurantByIdRequest,
        { enabled: !!restaurantId }
    );

    return { restaurant, isLoading };
};

export const useSearchRestaurants = (searchSate: SearchState, city?: string) => {
    const params = new URLSearchParams();
    params.set("searchQuery", searchSate.searchQuery);
    params.set("page", searchSate.page.toString());
    params.set("selectedCuisines", searchSate.selectedCuisines.join(","));
    params.set("sortOption", searchSate.sortOption);

    const createSearchRequest = async (): Promise<RestaurantSearchResponse> => {
        const response = await fetch(
            `${API_BASE_URL}/api/restaurant/search/${city}?${params.toString()}`
        );

        if (!response.ok) {
            throw new Error("Failed to get restaurant");
        }

        return response.json();
    };

    const { data: results, isLoading } = useQuery(
        ['useSearchRestaurants', searchSate],
        createSearchRequest,
        { enabled: !!city }
    );

    return { results, isLoading };
};

