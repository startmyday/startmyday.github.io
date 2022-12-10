import { useEffect, useState } from "react";

export const useGenerateImageService = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<string | undefined>(undefined);
    const [error, setError] = useState<Error | undefined>(undefined);

    const fetchImage = ({ prompt }: { prompt: string }) => {
        setLoading(true);
        setError(undefined);

        try {
            fetch("https://aliveapi.cyclic.app/generateimage", {
                "headers": {
                    "content-type": "application/json"
                },
                "body": JSON.stringify({
                    prompt, size: '512x512'
                }),
                "method": "POST",
            }).then(async (res) => {
                const response = await res.json();

                if (response.success) {
                    setData(response.data)
                }
            }).finally(() => {
                setLoading(false);
            })
        } catch (error: any) {
            setError(error);
        }
    }

    return {
        loading,
        data,
        error,
        fetchImage,
    }
};