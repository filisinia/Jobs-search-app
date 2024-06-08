interface Experience {
  no_experience_required: boolean;
  required_experience_in_months: number;
  experience_mentioned: boolean;
  experience_preferred: boolean;
}

export interface JobDetails {
  employer_name: string;
  employer_logo: string;
  employer_website: string;
  employer_company_type: string;
  job_publisher: string;
  job_id: string;
  job_employment_type: string;
  job_title: string;
  job_apply_link: string;
  job_apply_is_direct: boolean;
  job_apply_quality_score: number;
  job_description: string;
  job_is_remote: boolean;
  job_posted_at_timestamp: number;
  job_posted_at_datetime_utc: string;
  job_city: string;
  job_state: string;
  job_country: string;
  job_benefits: null;
  job_google_link: string;
  job_required_experience: Experience;
  job_job_title: string;
  job_min_salary: number;
  job_max_salary: number;
  job_salary_currency: string;
}

type Response = {
  status: 'OK' | 'ERROR';
  request_id: string;
};

export type SearchResponse = Response & {
  parameters: {
    query: string;
    page: number;
    num_pages: number;
  };
  data: JobDetails[];
};

export type JobDetailsResponse = Response & {
  parameters: {
    job_id: string;
    extended_publisher_details: boolean;
  };
  data: JobDetails[];
};

export type UserData = {
  name: string;
  desiredJobTitle: string;
  aboutMe: string;
};
