import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '05/03/2024', receipt: 600 },
    { date: '06/03/2024', receipt: 3000 },
    { date: '07/03/2024', receipt: 1000 },
    { date: '08/03/2024', receipt: 1500 },
    { date: '09/03/2024', receipt: 400 },
    { date: '10/03/2024', receipt: 200 },
    { date: '11/03/2024', receipt: 2000 },
  ])
})
