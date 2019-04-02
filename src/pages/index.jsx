import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import WithImageGrid from '../page-components/Home/WithImageGrid';
import Contact from '../page-components/Home/Contact';
import Footer from '../components/Footer';
import PageSection from '../page-components/Home/PageSection';

const text = {
  about: `Plus there's always Markdown for you to write stuff down. _Italics_, **bold**, and ~~strikethrough~~ shenanigans are on the ready and at your disposal.`,
  moreText: `So enjoy yourself, shouldn't take too long to get used to~.`,
};

const IndexPage = () => (
  <Layout>
    <SEO
      keywords={[
        `Octatum`,
        `Web development`,
        `Desarrollo web`,
        'gatsby',
        'react',
      ]}
    />
    <WithImageGrid />
    <PageSection text={text} />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
