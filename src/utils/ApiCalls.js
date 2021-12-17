import urlRequests from "./RequestsForApi.js";
import useCustomFetch  from "./ApiCustomHook.js";

const useCustomFetchDataBlogUrl = () => {
    const  {
        error: serverErrorBlogUrl,
        data: apiDataBlogUrl,
        isLoading: isLoadingBlogUrl,
    } = useCustomFetch(urlRequests.fetchDataBlogUrl);

    return { isLoadingBlogUrl, serverErrorBlogUrl, apiDataBlogUrl }
}

export async function asyncHandleContact(first_name, last_name, email, message) {

    try {
        const request = await fetch(urlRequests.fetchDataContactUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                message
            }),
        });

        return await request.json();

    } catch (error) {

        throw new Error(error);
    }
}

export async function asyncHandleNewsletter(user_email) {

    try {
        const request = await fetch(urlRequests.fetchDataNewsletterUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_email,
            }),
        });

        return await request.json();

    } catch (error) {

        throw new Error(error);
    }
}

export {
    useCustomFetchDataBlogUrl
};