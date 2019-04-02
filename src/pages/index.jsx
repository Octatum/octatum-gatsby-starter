import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Projects from '../page-components/Home/Projects';
import Contact from '../page-components/Home/ContactForm';
import Footer from '../components/Footer';
import Nosotros from '../page-components/Home/Nosotros';

const description = `Para nosotros, las _páginas web_ son un punto de encuentro donde se genera una comunidad alrededor de los usuarios, de forma **atemporal** y sin fronteras, desde la comodidad de su hogar, mientras viajan en el transporte público, durante la espera antes de alguna cita, o en sus ratos libres. Por eso, ayudamos a nuestros clientes a crear nuevas experiencias en internet, acompañandolos en un proceso tanto **creativo** como **técnico**.`;

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
    <Projects />
    <Nosotros description={description} />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
