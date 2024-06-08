import { JobDetails, JobDetailsResponse } from '@/types';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_BASE_URL,
  headers: {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY,
    'x-rapidapi-host': process.env.NEXT_PUBLIC_APP_REQUEST_URL,
  },
});

export const fetchJobs = async (
  query = 'Front-end',
  page = 1,
): Promise<JobDetails[]> => {
  try {
    const response: JobDetailsResponse = (
      await apiClient.get<JobDetailsResponse>('/search', {
        params: {
          query: query,
          page: page,
        },
      })
    ).data;
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error('Error in fetching the jobs');
    }
  }
};
