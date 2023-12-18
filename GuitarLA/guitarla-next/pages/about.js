import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/about.module.css';

export default function Nosotros() {
  return (
    <Layout
        title={'About Us'}
        description={'About Us, GuitarLA, instrument store'}
    >
        <main className='contenedor'>
          <h1 className='heading'>About Us</h1>

          <div className={styles.contenido}>

            <Image src={"/img/nosotros.jpg"} width={1000} height={800} alt='Image about us'/>

            <div>

              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend tortor a nisl feugiat pretium. Morbi porta nulla sit amet pretium cursus. Morbi ornare eros sed lectus convallis, quis fermentum turpis eleifend. Curabitur vitae interdum nulla. Donec mollis elit porttitor enim sagittis, quis aliquam felis faucibus. Suspendisse convallis nunc egestas magna convallis, sit amet dignissim massa pharetra. Suspendisse efficitur dolor ac quam rutrum, mattis sagittis elit mollis. Sed sodales metus vitae nunc tempor, quis sagittis orci vulputate. Quisque tempus euismod turpis at porta. Sed euismod ac tortor at interdum. Nulla enim ex, facilisis eu nisl at, placerat aliquet eros. Aenean ex nisl, efficitur vitae est ut, facilisis suscipit velit.
              </p>
            </div>
          </div>
        </main>
    </Layout>
  )
}