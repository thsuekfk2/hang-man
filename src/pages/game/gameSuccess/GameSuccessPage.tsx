import { HomeButton } from 'components/button/HomeButton';
import { HomeTemplate } from 'components/templates/HomeTemplate';

export function GameSuccessPage() {
  return (
    <HomeTemplate title="Hang Man rescue">
      <HomeButton title="ReStart" />
    </HomeTemplate>
  );
}
