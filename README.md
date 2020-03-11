# AlexisWatson.dev

This project leverages Prismic.io as a data source to build a static website using Gatsby and React.js, and publish it using Netlify.

## Project Structure

The project uses a combination of established Gatsby idioms (./src/templates for dynamic content templates, ./src/pages for pages with static routes, etc.) with Brad Frost's work on Atomic Design (./src/components/presentation). 

Atoms represent fundamental building blocks that cannot be broken up any smaller. Molecules are small, reusable assemblages of atoms, while organisms are larger amalgams of atoms and molecules that represent distinct "sections" of a page. In Prismic parlance, these tend to correspond pretty neatly to "slices." Templates are page-level representations, intended to represent specific page archetypes.

Every presentational component should be a functional component that cares only for rendering a specific output given a set of specific inputs, with the need to track local state notwithstanding (the original implementation was pre-hooks; this will likely be refactored to leverage useState once tests are added). Any massaging of data should happen in Gatsby's representaton of templates and pages, which may (eventually) be abstracted out further into higher-order components and GraphQL fragments if it proves cumbersome.

Given the component-based nature of the project, global styling should be an absolute last resort, though it is included via ./gatsby-browser.js to fix the rendering behavior of some of Gatsby's default containers.

## Configuration

As a point of personal preference, I don't much care for the way Gatsby treats hyphens in CSS class names by default, so I've overridden css-loader's settings to leave them as is. You won't need this configuration in your project unless you're equally insistent upon being able to use hyphens in your CSS class names consistently and unimpeded.

The code that generates Pages and Works can be found alongside of this additional configuration in ./gatsby-node.js.
