export const checkPattern = (regex: RegExp, str: string) => regex.test(str);

export const checkLength = (str: string, [min, max]: [number, number | null]) => {
    if (
        str.length < min && !max
        ||
        str.length < min && max && str.length > max
    ) {
        return false;
    }
    return true;
}

export const Error = (error: string = "Une erreur s'est produite", type: "warning" | "error" = "warning", status: number = 500) => {
    return new Response(JSON.stringify({
        error: {
            message: error,
            type,
        }
    }), {
        headers: { "Content-Type": "application/json" },
        status,
    });
}