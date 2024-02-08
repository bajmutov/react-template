import { ReactComponent as IconInstagram } from 'assets/svg/instagram.svg';
import sprite from 'assets/svg/sprite.svg';
import { SVG } from './Icon.styled';

export default function Icon({ name, size = 24 }) {
  if (name === 'instagram') return <IconInstagram width={size} height={size} />;
  return (
    <SVG>
      <use href={sprite + '#' + name} width={size} height={size}></use>
    </SVG>
  );
}
