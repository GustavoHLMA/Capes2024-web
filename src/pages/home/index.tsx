import React, { useState } from 'react';
import Image from 'next/image';
import treinamento from '../assets/treinamento_CAPES.png';
import pesquisa from '../assets/pesquisa_ciencia.png';
import bioquimica from '../assets/bioquimica.png';
import cientistas from '../assets/15_cientistas_mulheres.png';
import {
  Container,
  Header,
  Section,
  CardContainer,
  Card,
  Line
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      {/* Header / Carrossel */}
      <Header>
        <div className="carousel">
          <div className="arrow left-arrow">
            {/* Espaço para o SVG da seta esquerda */}
          </div>
          <div className="slides">
            <div className="slide">
              <div className="content">
                <h1>CAPES E ACS</h1>
                <p>
                  Esclareça suas dúvidas sobre a taxa de processamento do artigo
                </p>
                <button>Clique aqui</button>
              </div>
              <div className="image-placeholder">{/* Imagem 1 */}</div>
            </div>
            <div className="slide">
              <div className="content">
                <h1>Outro Título</h1>
                <p>Descrição da segunda imagem no carrossel</p>
                <button>Saiba mais</button>
              </div>
              <div className="image-placeholder">{/* Imagem 2 */}</div>
            </div>
            <div className="slide">
              <div className="content">
                <h1>Mais Informações</h1>
                <p>Descrição da terceira imagem no carrossel</p>
                <button>Veja agora</button>
              </div>
              <div className="image-placeholder">{/* Imagem 3 */}</div>
            </div>
          </div>
          <div className="arrow right-arrow">
            {/* Espaço para o SVG da seta direita */}
          </div>
        </div>
      </Header>

      {/* Treinamentos */}
      <Section style={{ backgroundColor: '#003087', color: '#fff' }}>
        <div className="text-content">
          <h2>Treinamentos</h2>
          <Line style={{ backgroundColor: '#F16421', width: '80px' }} />
          <p>Quer aprender a pesquisar no Portal de Periódicos da CAPES?</p>
          <p>
            Participe dos treinamentos e otimize sua busca. As inscrições são
            gratuitas e as turmas oferecidas por área do conhecimento, para um
            melhor aproveitamento dos conteúdos.
          </p>
          <button>Acesso ao calendário</button>
        </div>
        <div className="image-placeholder">
          <Image src={treinamento} alt="Treinamento CAPES" />
        </div>
      </Section>

      {/* Informativos */}
      <Section style={{ backgroundColor: '#fafafa' }}>
        <div className="text-content">
          <h2>Informativos</h2>
          <Line style={{ backgroundColor: '#F16421', width: '80px' }} />
        </div>
        <CardContainer>
          {/* Card 1 */}
          <Card>
            <div className="image-placeholder">
              <Image src={pesquisa} alt="Pesquisa Ciência" />
            </div>
            <h3>
              Pesquisas em Ciências de Alimentos são destaques em publicação
            </h3>
            <p>
              Textos constam do Journal of Food Science e são resultados de
              estudos realizados no Brasil, Argentina...
            </p>
            <span>14/11/2024</span>
            <button>Ler mais</button>
          </Card>
          {/* Card 2 */}
          <Card>
            <div className="image-placeholder">
              <Image src={cientistas} alt="15 cientistas mulheres" />
            </div>
            <h3>CAPES e Elsevier premiam 15 cientistas mulheres</h3>
            <p>
              São três vencedoras em cada região do País, em relação às áreas,
              são focos de Exatas...
            </p>
            <span>07/11/2024</span>
            <button>Ler mais</button>
          </Card>
          {/* Card 3 */}
          <Card>
            <div className="image-placeholder">
              <Image src={bioquimica} alt="Bioquímica" />
            </div>
            <h3>
              Treinamento discute publicação de artigo na Biochemical Society
            </h3>
            <p>
              Evento promovido pela PortlandPress acontece quinta-feira às
              11h...
            </p>
            <span>05/11/2024</span>
            <button>Ler mais</button>
          </Card>
        </CardContainer>
      </Section>
    </Container>
  );
};

export default Home;
