import React, { Component } from 'react';
import { graphql } from "gatsby"
import FullSection from '../components/presentation/organisms/HomePageHeroSection';
import CTASection from '../components/presentation/organisms/CTASection';
import ParagraphSection from '../components/presentation/organisms/ParagraphSection';
import LogoSetSection from '../components/presentation/organisms/LogoSetSection';
import Page from '../components/presentation/templates/Page';

export const query = graphql`
{
  prismic {
    allHome_pages(first: 1) {
      edges {
        node {
          title
          lede
          hook
          hero_image
          logos {
            logo
          }
          _linkType
          body {
            ... on PRISMIC_Home_pageBodyParagraph {
              primary {
                paragraph_title
                paragraph_copy
              }
              type
            }
            ... on PRISMIC_Home_pageBodyLogo_set {
              fields {
                logo_set_logo_link {
                  ... on PRISMIC__ExternalLink {
                    _linkType
                    url
                  }
                  ... on PRISMIC__ImageLink {
                    _linkType
                    name
                    url
                    size
                  }
                  ... on PRISMIC__FileLink {
                    _linkType
                    name
                    url
                    size
                  }
                  ... on PRISMIC_Page {
                    _linkType
                    _meta {
                      id
                      uid
                    }
                  }
                  __typename
                }
                logo_set_logo_image1
              }
              type
            }
            ... on PRISMIC_Home_pageBodyCta {
              primary {
                cta_title
                cta_hook
                cta_prompt
                cta_link_url {
                  ... on PRISMIC__ExternalLink {
                    _linkType
                    url
                  }
                  ... on PRISMIC__ImageLink {
                    _linkType
                    name
                    url
                    size
                  }
                  ... on PRISMIC__FileLink {
                    _linkType
                    name
                    url
                    size
                  }
                  ... on PRISMIC_Page {
                    _linkType
                    _meta {
                      id
                      uid
                    }
                  }
                  __typename
                }
                cta_link_text
              }
              type
            }
            __typename
          }
        }
      }
    }
  }
}
`;

export default class HomeContainer extends Component {
    render() {
        const doc = this.props.data.prismic.allHome_pages.edges[0].node;
        const { title, lede, hook, hero_image, logos, body } = doc;
        // @TODO: Factor strategies out.
        const paragraphStrategy = (section) => (
          (section.type === 'paragraph') ? <ParagraphSection title={section.primary.paragraph_title} paragraphs={section.primary.paragraph_copy} /> : null
        );
        const ctaStrategy = (section) => {
          return ((section.type === 'cta') ? <CTASection title={section.primary.cta_title} hook={section.primary.cta_hook} prompt={section.primary.cta_prompt} cta={section.primary.cta_link_text} to={section.primary.cta_link_url} />  : null);
        };
        const logosetStrategy = (section) => (
          (section.type === 'logo_set') ? <LogoSetSection logos={section.fields} /> : null
        );
        const sectionStrategies = {
          'cta': ctaStrategy,
          'logo_set': logosetStrategy,
          'paragraph': paragraphStrategy
        }

        return (
            <Page>
                <FullSection 
                  heading={title[0].text}
                  subhead={lede[0].text}
                  photo={hero_image}
                  logos={logos}
                  hook={hook} 
                />
                {body.map(section => (sectionStrategies[section.type](section)))} 
            </Page>
        );
    }
}