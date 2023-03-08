import useScrollToTop from '../../hooks/useScrollToTop';
import useTitle from '../../hooks/useTitle';
import { defaultTitle, pageTitle } from '../../utils/constants/title-page';

const Rules = () => {
  useScrollToTop();
  useTitle(`${pageTitle.rulesPage} - ${defaultTitle}`);
  return (
    <div className="document">
      <div className="document-content">
        <h2>Legal</h2>
        <h1 className="color-secondary mt-2 font-500">Betting Rule</h1>
        <h1 className="mt-2 font-600">OSDBB Betting Rule</h1>
        <p>
          The general settlement rules set out here are
          subject to modification at any time at our sole discretion.
        </p>
        <h2 className="color-astronaut-blue mt-2 font-600">Betting Deadlines</h2>
        <p>
          - Pre-match bets can be accepted up to the time indicated.
          When a match has been started, players cannot make a bet on that match.
        </p>
        <p>
          - If a bet, for whatever reasons, is accepted
          after the start of a match. We reserve the right to give the lose result to that bet.
        </p>
        <h2 className="color-astronaut-blue mt-2 font-600">Data Errors</h2>
        <p>
          We reserve the right to edit a match where there were
          obvious errors concerning the entry of information.
          <p>Eg: a mistaken inversion of teams, handicap, bet amount, . . .</p>
        </p>
        <h2 className="color-astronaut-blue mt-2 font-600">General Rules</h2>
        <p>
          - The list dates and times of matches are purely informational, we can not guarantee accuracy.
        </p>
        <p>
          - Each match has a fixed bet amount. Players can not decide how much they want to bet on a match.
        </p>
        <p>
          - We allow players to have a credit account, the debt will be paid monthly at the end of the month.
          We also allow players to give an upfront payment before the deadline.
        </p>
        <p>
          - There are 3 options to bet:
          <span className="font-600"> HomeTeam</span>,
          <span className="font-600"> AwayTeam</span> and
          <span className="font-600"> Draw</span>.
        </p>
        <p>
          - Players can not cancel a bet if they have chosen 1 of 3 options but they can change the option
          <span className="font-600"> before the start time</span>.
        </p>
        <p>
          - Match results will be announced when the status of the match turns into ended. The results are calculated based on score and handicap.
        </p>
        <p>
          - Debt is calculated automatically based on the result of the match which they bet.
          If the bet is lose, debt will be added exactly with the bet amount of that match.
        </p>
        <p>
          - If a match is not completed within 24 hours of its officially planned starting time,
          then all bets on that match will be canceled.
        </p>
      </div>
    </div>
  );
};

export default Rules;
