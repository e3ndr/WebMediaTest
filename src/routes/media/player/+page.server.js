/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
    return Object.fromEntries(url.searchParams.entries());
};