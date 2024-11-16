import { Container, SimpleButton1 } from './styles';
import SimpleButton from '@/components/SimpleButton';
import { useRouter } from 'next/router';

export default function Teste() {
  const router = useRouter();
  return (
    <Container>
      <h1
        style={{
          color: 'green',
          fontSize: '34rem'
        }}
      >
        teste
      </h1>
      <SimpleButton value="Hello World" />
      <div
        style={{
          backgroundColor: 'red'
        }}
      >
        <p> olá</p>
      </div>
      <SimpleButton1
        onClick={() => {
          router.push('/home');
        }}
      >
        Teste
      </SimpleButton1>
    </Container>
  );
}
