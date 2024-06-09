import { JobDetails, JobDetailsResponse } from '@/types';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_BASE_URL,
  headers: {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY,
    'x-rapidapi-host': process.env.NEXT_PUBLIC_APP_REQUEST_URL,
  },
});

const defaultSearchString = 'Front-end';

export const fetchJobs = async (
  query: string = defaultSearchString,
  page: number,
): Promise<JobDetails[]> => {
  try {
    const response: JobDetailsResponse = (
      await apiClient.get('/search', {
        params: {
          query: query || defaultSearchString,
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

export const fetchJobById = async (jobId: string) => {
  try {
    const response: JobDetailsResponse = (
      await apiClient.get('/job-details', {
        params: {
          job_id: jobId,
        },
      })
    ).data;
    return response.data[0];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error('Error in fetching the jobs');
    }
  }
};
