import { AxiosError } from "axios";

export type ApiError = AxiosError<any>;

export type PaginatedApiResponse<T> = {
    results: T;
    page: number;
    total_results: number;
    total_pages: number;
} 