import React from 'react';
import { Switch } from 'react-native';
import { useTheme } from '../utils/ManageThemeProvider';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.backgroundAlt};
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: ${props => props.theme.text};
`;

const Home: React.FC = () => {
	const theme = useTheme();

	return (
		<Container>
			<Title>Theme Light/Dark</Title>
			<Switch
				value={theme.mode === 'dark'}
				onValueChange={value => theme.setMode(value ? 'dark' : 'light')}
			/>
		</Container>
	);
}

export default Home;