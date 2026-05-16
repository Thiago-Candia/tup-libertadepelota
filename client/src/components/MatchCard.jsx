import { formatMatchDate } from "../utils/formatDate";

export default function MatchCard({ match }) {
  return (
    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
      <p>
        {formatMatchDate(match.fixture.date)}
      </p>

      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center gap-2 justify-start">
          <img src={match.teams.home.logo} className="w-6 h-6" alt="local" />
          <span>{match.teams.home.name}</span>
        </div>

        <div className="text-center">
          <span className="font-bold">
            {match.goals.home} - {match.goals.away}
          </span>
        </div>


        <div className="flex items-center gap-2 justify-end">
          <span>{match.teams.away.name}</span>
          <img src={match.teams.away.logo} className="w-6 h-6" alt="visitante" />
        </div>
      </div>

      <p>Árbitro: {match.fixture.referee}</p>
      <p>Estadio: {match.fixture.venue.name}</p>
    </div>
  )
}