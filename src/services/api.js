import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Reviews'],
  keepUnusedDataFor: 100, // время жизни кэша
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/',
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => ({
        url: 'restaurants',
      })
    }),
    getDishes: builder.query({
      query: (restaurantId) => ({
        url: `dishes?restaurantId=${restaurantId}`,
      })
    }),
    getUsers: builder.query({
      query: () => ({
        url: 'users',
      })
    }),
    getReviews: builder.query({
      query: (restaurantId) => ({
        url: `reviews?restaurantId=${restaurantId}`,
      }),
      providesTags: (result, _, restaurantId) => (result || [])
      .map(({id}) => ({type: 'Review', id}))
      .concat({type: 'Review', id: restaurantId}, {type: 'Review', id: 'ALL'}),
    }),
    postReview: builder.mutation({
      query: ({restaurantId, newReview}) => ({
        url: `review/${restaurantId}`,
        method: 'POST',
        body: newReview,
      }),
      invalidatesTags: (result, _, {restaurantId}) => [
        {type: 'Review', id: restaurantId},
      ]
    }),
  })
});

export const {
  useGetRestaurantsQuery,
  useGetDishesQuery,
  useLazyGetDishesQuery,
  useGetUsersQuery,
  useGetReviewsQuery,
  usePostReviewMutation
} = api;
