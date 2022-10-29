import { Helmet as Title } from 'react-helmet-async';

interface HelmetProps {
  title: string;
}

const Helmet = ({ title }: HelmetProps) => {
  return (
    <Title>
      <title>Shopzilla | {title}</title>
    </Title>
  );
};

export default Helmet;
