import React from 'react';
import {
  Box,
  Typography,
  CircularProgress,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DownloadIcon from '@mui/icons-material/CloudDownload';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Gamificacao: React.FC = () => {
  const progress = 75; // Progresso do gráfico rosca
  const missionsCompleted = 9; // Quantidade de missões completadas

  return (
    <Box
      sx={{
        backgroundColor: '#fbfbfb',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 3,
        width: '100%',
        minHeight: '100vh'
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1200px',
          marginBottom: 3
        }}
      >
        {/* Foto do Usuário */}
        <Avatar
          src="https://via.placeholder.com/200"
          alt="Foto do usuário"
          sx={{
            width: 200,
            height: 200,
            borderRadius: 2,
            marginRight: 2
          }}
        />

        {/* Informações do Usuário */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              color: '#000000',
              marginBottom: 5
            }}
          >
            RUAN SANTOS
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: '#938A8A',
              marginBottom: 2,
              marginTop: -5
            }}
          >
            Mestrando em Ciência da Informação
          </Typography>

          {/* Barra de Progresso */}
          <Box
            sx={{
              width: 700,
              height: 10,
              backgroundColor: '#D9D9D9',
              borderRadius: 4,
              overflow: 'hidden'
            }}
          >
            <Box
              sx={{
                width: '40%',
                height: '100%',
                backgroundColor: '#1A8DC3'
              }}
            />
          </Box>
        </Box>

        {/* Caixa de Pontos */}
        <Box
          sx={{
            width: 150,
            height: 60,
            backgroundColor: '#1A8DC3',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              sx={{
                width: 30,
                height: 30,
                backgroundColor: 'white',
                marginRight: 1
              }}
            >
              <EditIcon sx={{ color: '#1A8DC3' }} />
            </Avatar>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: 'white'
                }}
              >
                65
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'white'
                }}
              >
                PONTOS
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Estatísticas de Artigos */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '50%',
          maxWidth: '700px',
          marginBottom: 3
        }}
      >
        {[
          { icon: <CheckCircleIcon />, label: 'Artigos lidos', value: 3 },
          { icon: <DownloadIcon />, label: 'Artigos baixados', value: 8 },
          { icon: <ShareIcon />, label: 'Artigos compartilhados', value: 2 }
        ].map((stat, index) => (
          <Box
            key={index}
            sx={{
              textAlign: 'center',
              flex: 1,
              maxWidth: '120px'
            }}
          >
            <Avatar
              sx={{
                margin: '0 auto',
                backgroundColor: '#F5F5F5',
                width: 50,
                height: 50
              }}
            >
              {React.cloneElement(stat.icon, {
                sx: { color: '#1A8DC3', fontSize: 30 }
              })}
            </Avatar>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                marginTop: 1
              }}
            >
              {stat.value}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#938A8A'
              }}
            >
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Missões e Gráfico de Rosca */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1200px'
        }}
      >
        {/* Gráfico de Rosca */}
        <Box
          sx={{
            width: 250,
            height: 250,
            backgroundColor: '#1A8DC3',
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 2
          }}
        >
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <CircularProgress
              variant="determinate"
              value={100}
              size={120}
              thickness={4.5}
              sx={{
                color: 'white'
              }}
            />
            <CircularProgress
              variant="determinate"
              value={progress}
              size={120}
              thickness={4.5}
              sx={{
                position: 'absolute',
                color: '#1C1C5E'
              }}
            />
            <Typography
              variant="h5"
              component="div"
              sx={{
                position: 'absolute',
                color: 'white',
                fontWeight: 'bold'
              }}
            >
              {missionsCompleted}
            </Typography>
          </Box>

          <Typography
            variant="h6"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              marginTop: 2
            }}
          >
            Missões cumpridas
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: '#D1D1D1'
            }}
          >
            MENSAL
          </Typography>
        </Box>

        {/* Missões da Semana */}
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: 2,
            padding: 2,
            width: '450px',
            height: '250px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            marginRight: 2
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'semibold',
              color: '#4A4747',
              marginBottom: 2
            }}
          >
            Missões da semana
          </Typography>
          <List>
            {[
              { label: 'Leia 1 artigo no portal', points: '+20' },
              { label: 'Faça o download de 1 artigo', points: '+10' },
              { label: 'Compartilhe 1 artigo', points: '+35' },
              { label: 'Entre no Portal por 5 dias', points: '+45' }
            ].map((mission, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: '#1A8DC3' }} />
                </ListItemIcon>
                <ListItemText
                  primary={mission.label}
                  primaryTypographyProps={{
                    sx: { color: '#2C2B2B', fontWeight: 'regular' }
                  }}
                />
                <Typography sx={{ color: '#E24443', fontWeight: 'bold' }}>
                  {mission.points}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Progressão Semanal */}
        <Box
          sx={{
            width: 300,
            height: 100,
            backgroundColor: '#1A8DC3',
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 2,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
            marginTop: '50px'
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: 'white',
              marginBottom: 1
            }}
          >
            Progressão Semanal
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: '0 8px'
            }}
          >
            {[0, 1, 2, 3, 4].map((step, index) => (
              <React.Fragment key={index}>
                <MenuBookIcon
                  sx={{
                    fontSize: 32,
                    color: index < 2 ? '#1C1C5E' : '#FFFFFF'
                  }}
                />
                {index < 4 && (
                  <Box
                    sx={{
                      width: 20,
                      height: 2,
                      backgroundColor: '#FFFFFF'
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Gamificacao;
