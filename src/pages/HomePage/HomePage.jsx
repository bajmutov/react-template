import { useNavigate } from 'react-router-dom';
import Container from 'components/UI/Container';
import Button from 'components/UI/Button';
import { Heading, Text, HeroSection } from './HomePage.styled';

export default function Home() {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate('/');
  };

  return (
    <HeroSection>
      <Container>
        <Heading>It's my template.</Heading>
        <Text>Bakhmutov Oleksandr</Text>
        <Button paddingX={99} paddingY={14} onClick={onHandleClick}>
          Name
        </Button>
      </Container>
    </HeroSection>
  );
}
