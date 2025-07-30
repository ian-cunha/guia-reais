import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Gestão Centralizada e Inteligente',
    Svg: require('@site/static/img/feature_management.svg').default,
    description: (
      <>
        Tenha controle total dos seus imóveis, clientes e negócios em uma única
        plataforma. Visualize tudo em tempo real, do painel de controle ao mapa.
      </>
    ),
  },
  {
    title: 'Marketing e Vendas Automatizados',
    Svg: require('@site/static/img/feature_marketing.svg').default,
    description: (
      <>
        Crie seu site de imóveis em minutos e integre seus anúncios com os
        maiores portais. Gerencie seu funil de vendas e não perca oportunidades.
      </>
    ),
  },
  {
    title: 'Mobilidade e Atendimento Premium',
    Svg: require('@site/static/img/feature_mobile.svg').default,
    description: (
      <>
        Use nosso aplicativo para ter tudo na palma da mão. Atenda clientes
        via WhatsApp, compartilhe imóveis e gerencie roteiros de visitas.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}