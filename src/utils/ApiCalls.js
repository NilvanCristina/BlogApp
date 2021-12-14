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

export default useCustomFetchDataBlogUrl;

export async function asyncHandleContact(first_name, last_name, email, subject, message) {

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
                subject,
                message
            }),
        });

        return await request.json();

    } catch (error) {

        throw new Error(error);
    }
}

export async function asyncHandleEmail(email) {

    try {
        const request = await fetch(urlRequests.fetchDataNewsletterUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
            }),
        });

        return await request.json();

    } catch (error) {

        throw new Error(error);
    }
}