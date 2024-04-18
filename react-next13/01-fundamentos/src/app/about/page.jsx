import TitlePage from '@/components/pagesComponents/TitlePage';
import { Children } from 'react';


const About = ({Children}) => {
  return (
    <>
      <TitlePage title="About" />
      {Children}
    </>
  );
};

export default About;

