/**
 * Compatibility wrapper around Prismic's Link helper.
 */

import { Link } from 'prismic-reactjs';
import LinkResolver from './LinkResolver';

export const LinkTypes = {
  'Link.web': 'External',
  'Link.image': 'Image',
  'Link.document': 'Document',
  'Link.file': 'File'
};

// Prismic's Link.url() checks for a link_type of 'Document'.
// But GraphQL gives us a _linkType of 'Link.document'.
// Rather than perform transformations on each query, we can use
// a simple dictionary and transform the field object ourselves,
// without the need to pass around a resolver.
export default function PrismicLinkURL(linkObj) {
  // Append the proper link_type so the Link helper recognizes it.
  const link = { link_type: LinkTypes[linkObj._linkType], ...linkObj };
  return Link.url(link, LinkResolver);
}