# Ecommerce Demo - AKVA - Live Story customized

This demo is an enhanced version of [AKVA][standard-akva] demo, powered by Sanity + Hydrogen and [Live Story](https://livestory.nyc). This demo is compatible with `@shopify/hydrogen ~= 2023.10.2`.

<img src="https://user-images.githubusercontent.com/209129/173065853-77b26be2-dd15-4b4d-8164-850e70247b88.png" width="1000" />

[Demo][hydrogen-sanity-demo] | [Sanity Connect for Shopify][sanity-connect] | [Live Story doc](https://livestory.nyc/documentation)

# About

## About the storefront

AKVA is the customized [Hydrogen][hydrogen-github] starter that presents a real-world example of how Sanity and Structured Content can elevate your custom Shopify storefronts, with the further enhancements taken by Live Story. This is an enhanced version demonstrating some additional features such as enhanced structured content for products and the addition of a "guide" content type, all of which lead to richer PDPs (Product Display Pages). 

This demo also features an embedded version of our pre-configured Studio and [Sanity Connect for Shopify][sanity-connect], which syncs products and collections from your Shopify storefront to your Sanity dataset.

This starter showcases a few patterns you can adopt when creating your own custom storefronts. Use Sanity, Hydrogen and Live Story to delight customers with rich, shoppable editorial experiences that best tell your story.

## About the Studio

This studio is based on our [Shopify Studio][standard-studio] template, which has a [number of features][standard-studio-features]. In addition to this, we've modelled some additional content as detailed above, inlcuding Live Story.

# Fetching Sanity data

This demo comes with a custom `useSanityQuery` hook that allows you to query your Sanity dataset directly from server components.

```js
// MyServerComponent.server.jsx
import useSanityQuery from "./hooks/useSanityQuery";

const QUERY = `*[_type == 'page' && slug.current == $slug]`;
const PARAMS = { slug: "about" };

export default function MyServerComponent() {
  const { data, error } = useSanityQuery({
    // Required
    query: QUERY, // QUERY must be updated to fetch Live Story blocks too
    // Optional
    params: PARAMS,
    // Optional: pass through any useQuery options
    options: {
      preload: false,
    },
  });
  return <div>{JSON.stringify(data)}</div>;
}
```

[The hook itself][use-sanity-query-hook] is super lightweight - it uses our official [`@sanity/client`][sanity-js-client] library wrapped in a Hydrogen [`useQuery`][hydrogen-use-query] hook to make it suspense-friendly. That's it!

# Live Story data integration
This example shows contents that include Live Story models.

### 1. Live Story main script
In order to load Live Story contents successfully, you need to update the `<head>` content inside your `root.tsx` inside your storefront like the following, updating livestory script with your brand name `{BRAND}`


```javascript
<head>
  <script
    nonce={nonce}
    src="https://code.jquery.com/jquery-3.7.0.min.js"
  />
  <script
    nonce={nonce}
    src="https://assets.livestory.io/dist/livestory-{BRAND}.min.js"
  />
  <script
    nonce={nonce}
    dangerouslySetInnerHTML={{
      __html: `
        window.$ls = window.$ls || function(){(window.$ls.q=window.$ls.q||[]).push(arguments)};
      `,
    }}
  />
</head>
```

### 2. Integrate Live Story in Sanity Studio
You can easily integrate Live Story contents in you pre-existing Studio models.
Simply import Live Story document, module and objects, and use them in your models.

```javascript
import { LiveStoryDocument, LiveStoryObject, LiveStoryModuleStudio } from 'livestory-sanity-sdk/studio'
```

You find the example of utilization inside `packages/sanity/src/schema/index.ts`

After integrated Live Story, you can model your contents and inlude them wherever within your pre-existing components in your Studio


### 3. Use Live Story in your Hydrogen storefront
After updated your queries to fetch Live Story data, with the `livestory-sanity-sdk` SDK, you can use pre-built components and use them in your storefront to show your content designed in Live Story.

```javascript
import LiveStorySanity from "livestory-sanity-sdk";

<LiveStorySanity.Storefront.LiveStory
  value={page.liveStoryHP}
  language={language}
/>
```

# Getting started

## Requirements:

- Node.js version 16.5.0 or higher
- Npm

## Installation

These installation instructions assume you have already installed and configured [Sanity Connect][sanity-connect] on your Shopify store.

1.  Duplicate the `.env.example` file to `.env` and replace the values to point to your Sanity project's `dataset` and `projectId`, and your Shopify storefront's `storeDomain` and `storefrontToken`. Use [Shopify's Headless app][shopify-headless-app] to manage tokens for the Storefront API.

2.  Install dependencies and start the development server

    ```bash
    npm install
    npm run dev
    ```

3.  Visit the development environment running at http://localhost:3000.

## Previewing a production build

To run a local preview of your Hydrogen app in an environment similar to Oxygen, build your Hydrogen app and then run `yarn preview`:

```bash
npm run build
npm run preview
```

## Building for production

```bash
npm run build
```

Then, you can run a local `server.js` using the production build with:

```bash
npm run serve
```

## Deployment

See [Hydrogen's documentation on deployment][hydrogen-framework-deployment]

# License

This repository is published under the [MIT][license] license.

[standard-akva]: https://github.com/sanity-io/hydrogen-sanity-demo
[standard-studio]: https://github.com/sanity-io/sanity-shopify-studio
[standard-studio-features]: https://github.com/sanity-io/sanity-shopify-studio/blob/main/docs/features.md
[about]: https://demo-ecommerce.sanity.build/pages/about
[hydrogen-sanity-demo]: https://demo-ecommerce.sanity.build/
[hydrogen-github]: https://github.com/Shopify/hydrogen
[hydrogen-framework]: https://shopify.dev/api/hydrogen/framework
[hydrogen-framework-deployment]: https://shopify.dev/custom-storefronts/hydrogen/deployment
[hydrogen-product-components]: https://shopify.dev/api/hydrogen/components/product-variant
[hydrogen-use-query]: https://shopify.dev/api/hydrogen/hooks/global/usequery
[shopify-headless-app]: https://apps.shopify.com/headless
[license]: https://github.com/sanity-io/sanity/blob/next/LICENSE
[sanity-connect]: https://www.sanity.io/docs/sanity-connect-for-shopify
[sanity-js-client]: https://www.sanity.io/docs/js-client
[sanity-portable-text]: https://www.sanity.io/guides/introduction-to-portable-text
[sanity-structured-content-patterns]: https://www.sanity.io/guides/structured-content-patterns-for-e-commerce
[shopify-storefront-api]: https://shopify.dev/api/storefront
[shopify-analytics]: https://shopify.dev/api/hydrogen/components/framework/shopifyanalytics
[use-sanity-query-hook]: ./src/hooks/useSanityQuery.ts
