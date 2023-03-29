import type { LayoutLoad } from './$types';
 
export const load = (async({url}) => {
    return {
        currentPath: url.pathname,
      };
}) satisfies LayoutLoad;