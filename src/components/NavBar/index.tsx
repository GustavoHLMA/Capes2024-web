import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  Container,
  TopBar,
  LogoContainer,
  SearchBar,
  Menu,
  MenuItem,
  ButtonBar,
  Banner,
  AccessButton,
  GovNames,
  TextBla
} from './styles';
import { Periodico, Capes, Gov } from '@/assets';

export default function NavBar() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const isActive = (path: string) => router.pathname === path;

  return (
    <Container>
      <TopBar>
        <div>
          <Image src={Gov} alt="Logo do Governo" priority />
          <TextBla>Ministério da Educação / CAPES</TextBla>
        </div>
        <div>
          <GovNames>Órgãos do Governo</GovNames>
          <GovNames>Acesso à Informação</GovNames>
          <GovNames>Legislação</GovNames>
          <GovNames>Acessibilidade</GovNames>
          <button onClick={() => handleNavigation('/login')}>Entrar</button>
        </div>
      </TopBar>

      <LogoContainer>
        <Image src={Capes} alt="Logo CAPES" priority />
        <Image src={Periodico} alt="Logo Periódicos" priority />
        <SearchBar>
          <input type="text" placeholder="O que você está procurando?" />
        </SearchBar>
      </LogoContainer>

      <Menu>
        <MenuItem onClick={() => handleNavigation('/sobre')}>Sobre</MenuItem>
        <MenuItem onClick={() => handleNavigation('/acervo')}>Acervo</MenuItem>
        <MenuItem onClick={() => handleNavigation('/treinamentos')}>
          Treinamentos
        </MenuItem>
        <MenuItem onClick={() => handleNavigation('/informativos')}>
          Informativos
        </MenuItem>
        <MenuItem onClick={() => handleNavigation('/ajuda')}>Ajuda</MenuItem>
        <MenuItem onClick={() => handleNavigation('/meu-espaco')}>
          Meu espaço
        </MenuItem>
      </Menu>

      <Banner>
        <span>
          Você tem acesso ao conteúdo gratuito do Portal de Periódicos da CAPES
        </span>
        <AccessButton onClick={() => handleNavigation('/acesso-cafe')}>
          Acesso CAFe
        </AccessButton>
      </Banner>

      <ButtonBar>
        <button
          onClick={() => handleNavigation('/assistente-de-pesquisa')}
          className={isActive('/assistente-de-pesquisa') ? 'active' : ''}
        >
          Assistente de Pesquisa
        </button>
        <button
          onClick={() => handleNavigation('/revisao')}
          className={isActive('/revisao') ? 'active' : ''}
        >
          Auxiliar de Escrita
        </button>
        <button
          onClick={() => handleNavigation('/educacional')}
          className={isActive('/educacional') ? 'active' : ''}
        >
          Educacional
        </button>
        <button
          onClick={() => handleNavigation('/painel-de-conquistas')}
          className={isActive('/painel-de-conquistas') ? 'active' : ''}
        >
          Painel de Conquistas
        </button>
      </ButtonBar>
    </Container>
  );
}
