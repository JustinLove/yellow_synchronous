require(['shared/gw_faction_2'], function(faction) {
  faction.color[0] = [244,244,31]
  faction.teams.forEach(function(team) {
    team.boss.minions.forEach(function(minion) {
      minion.color[0] = [244,244,31]
    })
  })
})
