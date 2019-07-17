/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

// Override css-loader configuration to leave class names as is.
const cssLoaderRe = /\/css-loader\//;
const targetFile = '.module.css';

const processRule = rule => {
  if (rule.oneOf) {
    return {
      ...rule,
      oneOf: rule.oneOf.map(processRule),
    };
  }

  if (!rule.test.test(targetFile)) {
    return rule;
  }

  if (Array.isArray(rule.use)) {
    return {
      ...rule,
      use: rule.use.map(use => {
        if (!cssLoaderRe.test(use.loader)) {
          return use;
        }

        return {
          ...use,
          options: {
            ...use.options,
            camelCase: 'asIs',
          },
        }
      }),
    };
  }

  return rule;
}

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const config = getConfig();

  const newConfig = {
    ...config,
    module: {
      ...config.module,
      rules: config.module.rules.map(processRule),
    },
  };

  actions.replaceWebpackConfig(newConfig);
}

// Generate pages for works.
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
      graphql(`
      {
        prismic {
          works: allWorks {
            edges {
              node {
                title
                _meta {
                  uid
                }
              }
            }
          }
          pages: allPages {
            edges {
              node {
                title
                _meta {
                  uid
                }
              }
            }
          }
        }
      }
      `).then(result => {
        result.data.prismic.works.edges.forEach(({ node }) => {
          createPage({
            path: `works/${node._meta.uid}`,
            component: path.resolve('./src/templates/works/work.js'),
            context: {
              uid: `${node._meta.uid}`
            }
          });
        });
        result.data.prismic.pages.edges.forEach(({ node }) => {
          createPage({
            path: `${node._meta.uid}`,
            component: path.resolve('./src/templates/page.js'),
            context: {
              uid: `${node._meta.uid}`
            }
          });
        });
        resolve();
      });
    });
  };