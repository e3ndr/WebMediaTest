import mediaIndexes from '$lib/media/index.mjs';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const data = {
        mediaIndexes: {}
    };

    for (const [category, indexes] of Object.entries(mediaIndexes)) {
        data.mediaIndexes[category] = [];

        for (const indexModule of Object.values(indexes)) {
            data.mediaIndexes[category].push((await indexModule()).default);
        }
    }

    return data;
};