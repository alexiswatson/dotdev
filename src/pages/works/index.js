import React, { Component } from 'react';
import { graphql } from "gatsby"
import WorksList from '../../components/presentation/molecules/WorksList';
import ParagraphSection from '../../components/presentation/organisms/ParagraphSection';

import Page from '../../components/presentation/templates/Page';

export const query = graphql`
{
    prismic {
      allWorks_lists(first: 1) {
        edges {
          node {
            title
            copy
          }
        }
      }
      allWorks {
        edges {
          node {
            hero_image
            title
            teaser
            awards {
              awards_image
            }
            _meta {
              uid
            }
          }
        }
      }
    }
}  
`;

export default class WorksContainer extends Component {
    render() {
        const docs = this.props.data.prismic;
        const worksList = docs.allWorks_lists.edges[0];
        const { title, copy } = worksList.node;
        const works = docs.allWorks.edges;
        return (
            <Page title={title[0].text}>
              <ParagraphSection copy={copy} />
              <WorksList works={works} />
            </Page>
        );
    }
}