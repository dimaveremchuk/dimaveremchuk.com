import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const SEO = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="icon" href={seo.image} type="image/png" sizes="any" />
      {/* <link rel="icon" href="data:image/svg+xml,<svg width='512' height='512' viewBox='0 0 512 512' fill='none' xmlns='http://www.w3.org/2000/svg'>
<rect width='512' height='512' rx='128' fill='#078CE9'/>
<path d='M216.392 403.107L160.503 135.7L398.163 272.054L282.902 307.549C279.232 308.679 276.079 311.063 273.99 314.283L216.392 403.107Z' fill='black' stroke='white' stroke-width='16.6973'/>
</svg>" /> */}
      {/* <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" /> */}
      {children}
    </>
  )
}