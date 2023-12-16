import Link from 'next/link';
import Layout from '../components/layout';

export default function Nosotros() {
  return (
    <Layout
        title={'About Us'}
    >
        <Link href='/'>A Inicio</Link>
    </Layout>
  )
}