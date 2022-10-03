import { HomeButton } from 'components/button/HomeButton';
import { HomeTemplate } from 'components/templates/HomeTemplate';

export function HomePage() {
  return (
    <HomeTemplate title="Hang Man">
      <HomeButton title="Start" />
    </HomeTemplate>
  );
}
