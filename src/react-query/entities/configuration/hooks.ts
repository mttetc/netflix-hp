import { QueryParams, useEntityQuery } from "../../hooks/useEntityQuery";
import { ConfigurationApi, getConfiguration } from "../../routes/configuration";
import { Configuration } from "./types";

export const useConfiguration = (params?: QueryParams<Configuration, never, ConfigurationApi>) =>
    useEntityQuery({
        key: 'configuration',
        apiRoute: getConfiguration,
        ...params
    })