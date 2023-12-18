import Link from 'next/link';
import Layout from '../components/layout';
import GuitarsList from '../components/guitars-list';

export default function Store() {
  return (
    <Layout
        title={'Store'}
        description={'Virtual store, sale of guitars, instruments, GuitarLA'}
    >
        <main className='contenedor'>
          <h1 className='heading'>Our Collection</h1>

          <GuitarsList
          />
        </main>
    </Layout>
  )
}