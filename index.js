function theBeatlesPlay(musicians, instruments){
  const array = []
  for(let i=0; i<musicians.length; i++){
    const string = `${musicians[i]} plays ${instruments[i]}`
    array.push(string)
  }
  return array
}

function johnLennonFacts(facts){
  const i = 0
  while(i<facts.length){
    facts[i] = facts[i] + "!!!"
    i++
  }
  return
}
