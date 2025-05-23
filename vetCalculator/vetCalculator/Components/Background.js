// Importa o React, necessário para criar componentes
import React from 'react';
// Importa LinearGradient do Expo para criar o fundo com gradiente
import { LinearGradient } from 'expo-linear-gradient';

// Componente de fundo com gradiente linear
const Background = ({ children }) => {
  return (
    <LinearGradient
      colors={['#ee0060', '#e15d43', '#d77bbd']}
      locations={[0, 0.55, 1]}
      style={{ flex: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

// Exporta o componente como padrão
export default Background;