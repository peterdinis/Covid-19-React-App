import { QueryClient } from '@tanstack/react-query'
import { queryCache } from './cache/queryCache';

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

 export const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: twentyFourHoursInMs,
    },
  },
  logger: {
    log: (...args) => {
     console.log(...args);
     console.log("Log info")
    },
    warn: (...args) => {
      console.log(...args);
      console.log("Warn info")
    },
    error: (...args) => {
      console.log(...args);
      console.log("Error info")
    },
  }
})