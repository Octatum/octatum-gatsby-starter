const path = require('path');

function getCleanName(string) {
  return string
    .replace(' ', '_')
    .toLowerCase()
    .replace(/\W/g, '');
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions,
    projectTemplate = path.resolve(`src/templates/project.jsx`);

  return graphql(`
    {
      allSanityProject {
        edges {
          node {
            projectName
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allSanityProject.edges.forEach(({ node }) => {
      const route = getCleanName(node.projectName);

      createPage({
        path: `/proyecto/${route}`,
        component: projectTemplate,
        context: {
          name: node.projectName,
        },
      });
    });
  });
};
