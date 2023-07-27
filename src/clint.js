import sanityClient from '@sanity/client';
import imagUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:'thx3pjf4',
    dataset:'production',
    apiVersion:'2022-02-01',
    useCdn:true,
    token:'skbjnLz7tu180oBsGvNpKj5uNxI3X34I8OhyuTLXpRKyuXQFEm8KyUhADw6bLzB5ioKuXCl0PnYyBYp1aGqEgotie6Ea5pPumktBHZPGRJbwHlVRvoCFjXM5zIviFCi5nBiIsHxaJMJPysFeAbcfXYjIG3AdBSpBOaR1IRaxe9BiYB4LBSVo',
});

const builder = imagUrlBuilder(client);


export const urlFor = (source)=>builder.image(source);