import React, { Component } from 'react';
import { graphql } from 'gatsby';
import WorkHighlightSection from '../../components/presentation/organisms/WorkHighlightSection';
import CTASection from '../../components/presentation/organisms/CTASection';
import LogoSetSection from '../../components/presentation/organisms/LogoSetSection';
import ParagraphSection from '../../components/presentation/organisms/ParagraphSection';
import StatisticSection from '../../components/presentation/organisms/StatisticSection';
import ImageParagraphSection from '../../components/presentation/organisms/ImageParagraphSection';
import Page from '../../components/presentation/templates/Page';
import SEO from '../../shared/js/components/SEO';

export const query = graphql`
  query WorkQuery($uid: String) {
    prismic {
      allWorks(uid: $uid) {
        edges {
          node {
            title
            organization
            year
            lede
            hook
            hero_image
            body {
              ... on PRISMIC_WorkBodyCta {
                primary {
                  cta_title
                  cta_hook
                  cta_prompt
                  cta_link_url {
                    ... on PRISMIC__ImageLink {
                      url
                      size
                      name
                    }
                    ... on PRISMIC__FileLink {
                      url
                      size
                      name
                    }
                    ... on PRISMIC__ExternalLink {
                      url
                    }
                    _linkType
                    ... on PRISMIC_Page {
                      _linkType
                      _meta {
                        id
                        uid
                      }
                    }
                  }
                  cta_link_text
                }
                type
              }
              ... on PRISMIC_WorkBodyLogo_set {
                fields {
                  logo_set_logo_image1
                }
                type
              }
              ... on PRISMIC_WorkBodyParagraph {
                primary {
                  paragraph_title
                  paragraph_copy
                }
                type
              }
              ... on PRISMIC_WorkBodyStatistic {
                primary {
                  statistic_title
                  statistic_copy
                  statistic_value
                  statistic_label
                  statistic_style
                  statistic_side
                }
                type
              }
              ... on PRISMIC_WorkBodyImage_paragraph {
                primary {
                  image_paragraph_title
                  image_paragraph_copy
                  image_paragraph_image
                  image_side
                }
                type
              }
            }
          }
        }
      }
    }
  }    
`;

export default class WorkContainer extends Component {
    render() {
        const doc = this.props.data.prismic.allWorks.edges[0].node;
        const { title, organization, year, lede, hook, hero_image, body } = doc;

        // @TODO: Factor strategies out.
        const paragraphStrategy = (section) => (
            (section.type === 'paragraph') ? <ParagraphSection title={section.primary.paragraph_title} paragraphs={section.primary.paragraph_copy} /> : null
        );
        const ctaStrategy = (section) => (
            (section.type === 'cta') ? <CTASection title={section.primary.cta_title} hook={section.primary.cta_hook} prompt={section.primary.cta_prompt} cta={section.primary.cta_link_text} to={section.primary.cta_link_url} />  : null
        );
        const logosetStrategy = (section) => (
            (section.type === 'logo_set') ? <LogoSetSection logos={section.fields} /> : null
        );
        const imageParagraphStrategy = (section) => (
            (section.type === 'image_paragraph') ? <ImageParagraphSection title={section.primary.image_paragraph_title} copy={section.primary.image_paragraph_copy} image={section.primary.image_paragraph_image} side={section.primary.image_side} /> : null
        );
        const statisticStrategy = (section) => (
            (section.type === 'statistic') ? <StatisticSection side={section.primary.statistic_side} title={section.primary.statistic_title} copy={section.primary.statistic_copy} value={section.primary.statistic_value} label={section.primary.statistic_label} style={section.primary.statistic_style} /> : null
            );
        const sectionStrategies = {
            'cta': ctaStrategy,
            'logo_set': logosetStrategy,
            'paragraph': paragraphStrategy,
            'image_paragraph': imageParagraphStrategy,
            'statistic': statisticStrategy
        }
        return (
            <Page>
                <SEO title={`${title[0].text} Case Study`} />
                <WorkHighlightSection 
                    title={title[0].text}
                    org={organization[0].text}
                    image={hero_image}
                    date={year}
                    hook={lede[0].text}
                    copy={hook[0].text}
                />
                {/* Body content. */}
                {body && body.map(section => (sectionStrategies[section.type](section)))}
            </Page>
        );
    }
}