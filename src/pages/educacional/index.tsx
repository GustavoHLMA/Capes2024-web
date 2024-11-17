import React, { useState } from 'react';
import Image from 'next/image';
import ferramentas from '../assets/Ferramentas inteligentes de pesquisa.png';
import busca from '../assets/Busca otimizada em repositórios virtuais.png';
import comoutilizar from '../assets/Como utilizar nosso assistente virtual.png';
import caixadepesquisa from '../assets/busca_caixa.svg';
import robo from '../assets/robo.svg';
import lapis from '../assets/lapis.svg';
import lupa from '../assets/lupa.svg';
import setaEsquerda from '../assets/seta_esquerda.svg';
import setaDireita from '../assets/seta_direita.svg';
import caixasFooter from '../assets/caixasfooter.svg';
import {
  EducacionalStyled,
  Header,
  Section,
  Card,
  Carousel,
  RelatedSection
} from './styles';
import NavBar from '@/components/NavBar';

const Educacional: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems = [
    {
      id: 1,
      src: ferramentas,
      alt: 'Ferramentas inteligentes de pesquisa',
      title: 'Ferramentas inteligentes de pesquisa'
    },
    {
      id: 2,
      src: busca,
      alt: 'Busca otimizada em repositórios virtuais',
      title: 'Busca otimizada em repositórios virtuais'
    },
    {
      id: 3,
      src: comoutilizar,
      alt: 'Como utilizar nosso assistente virtual',
      title: 'Como utilizar nosso assistente virtual'
    }
  ];

  // Funções de navegação do carrossel
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <EducacionalStyled>
      <NavBar />
      {/* Cabeçalho */}
      <Header>
        <h1>Educacional</h1>
        <div className="underline"></div>
        <div className="search-container">
          <Image
            src={caixadepesquisa}
            alt="Ícone de lupa"
            width={24}
            height={24}
            className="search-icon"
          />
          <input
            type="text"
            placeholder="O que você deseja aprender hoje?"
            className="search-input"
          />
        </div>
      </Header>

      {/* Introdução */}
      <Section>
        <p>
          Aqui é seu portal de acesso a vários{' '}
          <strong>conteúdos em vídeo</strong> explicando como usar diferentes
          plataformas e lidar com as mais diversas situações da sua{' '}
          <strong>jornada de trabalho</strong>. Caso você prefira, são
          disponibilizados também treinamentos do Portal de Periódicos da CAPES:
          on-line, gratuitos, interativos e em tempo real! Basta acessar a
          página de <a href="#">calendário</a>.
        </p>
      </Section>

      {/* Carrossel */}
      <Carousel>
        <button className="carousel-nav prev" onClick={handlePrev}>
          <Image src={setaEsquerda} alt="Anterior" width={48} height={48} />
        </button>
        <div className="carousel-container">
          <Image
            src={carouselItems[currentIndex].src}
            alt={carouselItems[currentIndex].alt}
            width={600}
            height={400}
          />
          <h3>{carouselItems[currentIndex].title}</h3>
        </div>
        <button className="carousel-nav next" onClick={handleNext}>
          <Image src={setaDireita} alt="Próximo" width={48} height={48} />
        </button>
      </Carousel>

      {/* Sessão de ajuda */}
      <Section>
        <h2>Ainda precisa de ajuda?</h2>
        <div className="underline"></div>
        <p>
          Nosso portal oferece diferentes formas de suporte! Entenda as opções e
          descubra como podemos te ajudar:{' '}
        </p>
        <div className="cards-row" style={{ display: 'flex', gap: '16px' }}>
          <Card className="assistente-card">
            <Image src={robo} alt="Ícone assistente" width={48} height={48} />
            <h3>Assistente virtual</h3>
            <p>
              Explicar como funciona o assistente virtual e dar exemplos de
              situações em que ele pode ser utilizado.
            </p>
          </Card>
          <Card className="assistente-card">
            <Image src={lapis} alt="Ícone assistente" width={48} height={48} />
            <h3>Treinamento</h3>
            <p>
              Acompanhe treinamentos e aproveite nossas ferramentas para
              melhorar sua produtividade.
            </p>
          </Card>
          <Card className="assistente-card">
            <Image src={lupa} alt="Ícone assistente" width={48} height={48} />
            <h3>Busca avançada</h3>
            <p>
              Aprenda a otimizar suas pesquisas e encontrar informações mais
              rapidamente.
            </p>
          </Card>
        </div>
      </Section>

      {/* Assuntos relacionados */}
      <RelatedSection>
        <h2>Assuntos relacionados</h2>
        <div className="related-content">
          <p>
            Você está na página do calendário oficial de treinamentos do Portal
            de Periódicos da CAPES <br></br> e ainda pode acessar os tutoriais
            dos conteúdos em <strong>Materiais de apoio</strong>.<br></br>
          </p>
          <p>
            Outra opção é visualizar seus certificados em{' '}
            <strong>Meus treinamentos</strong>, <br></br> assim como as turmas
            nas quais está inscrito ou já participou.
          </p>
          <Image src={caixasFooter} alt="Imagem relacionada" width={1190} />
        </div>
      </RelatedSection>
    </EducacionalStyled>
  );
};

export default Educacional;
