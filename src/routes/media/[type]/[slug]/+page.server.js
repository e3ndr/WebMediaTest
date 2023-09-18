import { redirect } from '@sveltejs/kit';

import mediaIndexes from '$lib/media/index.mjs';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    try {
        const { type, slug } = params;

        const module = mediaIndexes[type][slug];

        if (!module) {
            throw new redirect(302, "/");
        }

        return (await module()).default;
    } catch (e) {
        return {
            status: 500,
            error: new Error(e)
        };
    }
};