import axios from "axios";
import { ApiError } from "./types/errors";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_PROJECT_URL,
});

api.interceptors.response.use(resolve => resolve, (error) => {
    if (axios.isAxiosError(error)) {
        return Promise.reject({
            data: error.response?.data,
            status: error.status,
        });
    }
    return Promise.reject({
        data: {
            error: {
                message: "Une erreur s'est produite",
                type: "error",
            },
        } as ApiError,
        status: 500,
    });
});