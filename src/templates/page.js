import React, { Component } from 'react';
import { graphql } from 'gatsby';
import NetlifyForm from '../components/presentation/organisms/NetlifyForm';
import ParagraphSection from '../components/presentation/organisms/ParagraphSection';
import Page from '../components/presentation/templates/Page';

export const query = graphql`
  query PageQuery($uid: String) {
    prismic {
      allPages(uid: $uid) {
        edges {
          node {
            title
            body {
              ... on PRISMIC_PageBodyNetlify_form {
                type
                primary {
                  name
                  method
                  form_title
                  form_copy
                  form_closing
                  action
                }
                fields {
                  label
                  name
                  required
                  type
                  value
                }
              }
              ... on PRISMIC_PageBodyParagraph {
                type
                primary {
                  paragraph_title
                  paragraph_copy
                }
              }
            }
          }
        }
      }
    }
  }  
`;

export default class ContactContainer extends Component {
    render() {
        const doc = this.props.data.prismic.allPages.edges[0].node;
        const { title, body } = doc;
        // @TODO: Refactor strategies.
        const paragraphStrategy = (section) => (
            (section.type === 'paragraph') ? <ParagraphSection title={section.primary.paragraph_title} paragraphs={section.primary.paragraph_copy} /> : null
        );
        const netlifyFormStrategy = (section) => (
            (section.type === 'netlify_form') ? <NetlifyForm title={section.primary.form_title} copy={section.primary.form_copy} name={section.primary.name} method={section.primary.method} closing={section.primary.form_closing} fields={section.fields} action={section.primary.action} /> : null
        );
        const sectionStrategies = {
            'paragraph': paragraphStrategy,
            'netlify_form': netlifyFormStrategy
        }
        return (
            <Page title={title[0].text}>
                {body.map(section => (sectionStrategies[section.type](section)))} 
            </Page>
        );
    }
}