import { HomeButton } from 'components/button/HomeButton';
import { HomeTemplate } from 'components/templates/HomeTemplate';

export function GameOverPage() {
  return (
    <HomeTemplate title="Hang Man GameOver">
      <HomeButton title="Restart" />
    </HomeTemplate>
  );
}
