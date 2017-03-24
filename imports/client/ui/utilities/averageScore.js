export function averageScore(data,type,format){
  const {competencies, achievements, summary} = data
  let competenciesScore = 0
  let achievementsScore = 0
  let summaryScore = 0
  for(var prop in competencies[type]){
    Number.isInteger(competencies[type][prop]) ? competenciesScore += competencies[type][prop] : ''
  }
  for(var prop in achievements[type]){
    Number.isInteger(achievements[type][prop]) ? achievementsScore += achievements[type][prop] : ''
  }
  for(var prop in summary[type]){
    Number.isInteger(summary[type][prop]) ? summaryScore += summary[type][prop] : ''
  }
competenciesScore = competenciesScore/4
achievementsScore = achievementsScore/3
score = ((competenciesScore + achievementsScore + summaryScore)/3).toFixed(1)
if (format =="percent") {
  return score/5*100
}
return score
}
