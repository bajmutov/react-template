import { useNavigate } from 'react-router-dom';
import Container from 'components/UI/Container';
import Button from 'components/UI/Button';
import { Heading, Text, HeroSection } from './HomePage.styled';
import icon from 'assets/svg/sprite.svg';

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
        <Button
          fill={'red'}
          paddingX={99}
          paddingY={14}
          onClick={onHandleClick}
        >
          <svg width="24" height="24">
            <use href={`${icon}#heart`}></use>
          </svg>
          Name
        </Button>
      </Container>
    </HeroSection>
  );
}
