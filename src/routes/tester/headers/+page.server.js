/** @type {import('./$types').PageServerLoad} */
export async function load({ request }) {
    return {
        headers: Array.from(request.headers.entries())
    };
};