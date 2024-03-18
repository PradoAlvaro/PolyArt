import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Caneca', amount: 10 },
    { product: 'Agenda', amount: 15 },
    { product: 'Mousepad', amount: 17 },
    { product: 'Sacola', amount: 16 },
    { product: 'Caderno', amount: 18 },
  ])
})
