import type { PageLoad } from './$types';
 
export const load = (({ params }) => {
  let data:string[]=params.slug.split(',');
  return {
    name:data[0],
    type:data[1],
    price:Number(data[2])
  };
}) satisfies PageLoad;