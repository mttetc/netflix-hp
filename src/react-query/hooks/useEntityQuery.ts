import { AxiosResponse } from 'axios';
import { useQuery, UseQueryOptions } from 'react-query';
import { ApiError } from '../types/api';
import { QueryKeyEntity } from '../types/entity';
 
export type QueryParams<Select, ApiRouteParams, Response> = {
  queryParams?: UseQueryOptions<Response, ApiError, Select>;
  params?: ApiRouteParams;
};
 
type UseEntityQueryProps<Select, Response, ApiRouteParams> = {
  key: keyof QueryKeyEntity;
  apiRoute: (params?: ApiRouteParams) => Promise<AxiosResponse<Response>>;
} & QueryParams<Select, ApiRouteParams, Response>;
 
export const useEntityQuery = <Select, Response, ApiRouteParams>({
  key,
  apiRoute,
  params,
  queryParams,
}: UseEntityQueryProps<Select, Response, ApiRouteParams>) =>
  useQuery({
    queryKey: params ? [key, params] : [key],
    queryFn: () => apiWrapper(apiRoute(params)),
    ...queryParams,
  });
 
export const apiWrapper = async <T>(promise: Promise<AxiosResponse<T>>) => {
  const response = await promise;
  return response.data;
};
 