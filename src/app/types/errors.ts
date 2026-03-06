export type ApiError = {
    error: {
        message: string;
        type: "warning" | "error";
    }
}