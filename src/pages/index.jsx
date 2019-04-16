import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Contact from '../page-components/Home/Contact';
import Footer from '../components/Footer';
import PageSection from '../page-components/Home/PageSection';

const text = {
  header: 'Modify this as much as you want!',
  about: `Plus there's always Markdown for you to write stuff down.
  
  _Italics_, **bold**, and ~~strikethrough~~ shenanigans are on the ready and at your disposal.`,
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
    <PageSection text={text} />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
