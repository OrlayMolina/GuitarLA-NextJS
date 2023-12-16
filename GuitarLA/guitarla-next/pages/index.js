import Link from 'next/link';
import Layout from '../components/layout';

export default function Home() {
  return (
    <>
      <Layout
        title={'Home'}
        description={'GuitarLA - Music blog, guitar sales and more'}
      >
        <h1>Hello world!</h1>

        <Link href='/about'>About Us</Link>
      </Layout>
    </>
  );
}
