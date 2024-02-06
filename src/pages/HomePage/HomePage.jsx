import Container from 'components/UI/Container';
import { Heading, Text, HeroSection } from './HomePage.styled';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate('/');
  };

  return (
    <HeroSection>
      <Container>
        <Heading>
          Looking for a vehicle? You’re at the right place. Our company is the
          only rental company I’ve never had an issue with. Seriously… they’ve
          turned me into a lifelong client.
        </Heading>
        <Text>
          Premium vehicles without premium prices. We have over 222,000 rental
          vehicles in our fleet, which hosts models from some of the best car
          manufacturers in the world, including German favorites such as BMW,
          Mercedes, Audi and more.
        </Text>
        <Button paddingX={99} paddingY={14} onClick={onHandleClick}>
          Name
        </Button>
      </Container>
    </HeroSection>
  );
}
