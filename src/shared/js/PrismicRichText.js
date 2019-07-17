import React from 'react';
import { RichText, Elements } from 'prismic-reactjs';
import LinkResolver from './LinkResolver';
import Paragraph from '../../components/presentation/atoms/Paragraph';
import StyledLink from '../../components/presentation/atoms/StyledLink';

const propsWithUniqueKey = function(props, key) {
  return Object.assign(props || {}, { key });
};

export const PrismicHTMLSerializer = function(type, element, content, children, key) {
  // @TODO: Refactor the var/switch adapted from the documentation.
  var props = {};
  switch(type) {
 
    case Elements.paragraph:
      props = {className: 'paragraph-class'};
      return React.createElement(Paragraph, propsWithUniqueKey(props, key), children);

    case Elements.hyperlink:
      const targetAttr = element.data.target ? { target: element.data.target } : {};
      const relAttr = element.data.target ? { rel: 'noopener' } : {};
      props = Object.assign({
        href: element.data.url || LinkResolver(element.data)
      }, targetAttr, relAttr);
      return React.createElement(StyledLink, propsWithUniqueKey(props, key), children);
 

    // Return null to stick with the default behavior
    default: 
      return null;
  }
};

export default function PrismicRichText (fieldObj) {
  return RichText.render(fieldObj, LinkResolver, PrismicHTMLSerializer)
}