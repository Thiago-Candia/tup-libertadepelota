export default function MatchCard({ match }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
      <p>{new Date(match.fixture.date).toLocaleDateString()}</p>

      <div className="grid grid-cols-3 items-center text-center">
        <div className="flex flex-col items-center gap-3 min-w-0">
          <img src={match.teams.home.logo} className="w-16 h-16" alt="local" />
          <h3 className="font-bold uppercase text-sm md:text-base truncate max-w-full">
            {match.teams.home.name}
          </h3>
        </div>

        <div className="text-center">
          <span className="font-bold">
            {match.goals.home} - {match.goals.away}
          </span>
        </div>

      <div className="flex flex-col items-center gap-3 min-w-0">
          <img src={match.teams.away.logo} className="w-16 h-16" alt="visitante" />
          <h3 className="font-bold uppercase text-sm md:text-base truncate max-w-full">
            {match.teams.away.name}
          </h3>
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-400 space-y-1">
        <p>Árbitro: {match.fixture.referee || "No informado"}</p>
        <p>Estadio: {match.fixture.venue.name || "No informado"}</p>
      </div>
    </div>
  )
}