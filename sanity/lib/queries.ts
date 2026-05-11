import { groq } from 'next-sanity'

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage { asset->{ url }, alt },
    categories[]->{ title },
    author->{ name, image { asset->{ url } } }
  }
`

export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage { asset->{ url }, alt },
    categories[]->{ title },
    author->{ name, image { asset->{ url } } },
    body,
    seoTitle,
    seoDescription
  }
`

export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)] { "slug": slug.current }
`