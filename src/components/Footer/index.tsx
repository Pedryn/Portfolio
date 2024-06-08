import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ContainerFooter, Text } from './styles';

interface Props {
    toggleTheme(): void;
}

const Footer: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <ContainerFooter>
            <Text>
                © 2024 | Pedro Henrique de Souza
            </Text>
        </ContainerFooter>
    );
}

export default Footer;