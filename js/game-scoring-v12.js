/* KOTOBA V1.2 - scoring module
100 / 110 / 120 / 150 XP by streak
Round: +100 XP +20 coins
Perfect: +250 XP +50 coins
Level up: +50 coins
*/
(function(){
  const KEY="kotoba-progress-v12";
  const load=()=>{try{return Object.assign({xp:0,level:1,coins:0},JSON.parse(localStorage.getItem(KEY)||"{}"))}catch(e){return {xp:0,level:1,coins:0}}};
  const save=p=>localStorage.setItem(KEY,JSON.stringify(p));
  const need=l=>500+(l-1)*250;
  const answerXP=streak=>streak>=4?150:streak===3?120:streak===2?110:100;
  const accuracy=(c,t)=>t?Math.round(c/t*100):0;
  let s={total:0,correct:0,wrong:0,streak:0,answerXP:0,roundBonusXP:0,perfectBonusXP:0,coinsEarned:0};
  const progress=load();

  function addXP(amount){
    let n=amount,levels=0;
    while(n>0){
      const room=need(progress.level)-progress.xp;
      if(n<room){progress.xp+=n;n=0}
      else{n-=room;progress.xp=0;progress.level++;progress.coins+=50;levels++}
    }
    return levels;
  }
  window.KotobaScoring={
    startRound(total){s={total,correct:0,wrong:0,streak:0,answerXP:0,roundBonusXP:0,perfectBonusXP:0,coinsEarned:0}},
    answer(ok){
      if(ok){s.correct++;s.streak++;s.answerXP+=answerXP(s.streak)}
      else{s.wrong++;s.streak=0}
      return ok?answerXP(s.streak):0
    },
    finish(){
      s.roundBonusXP=100;s.coinsEarned=20;
      if(s.total>0&&s.correct===s.total){s.perfectBonusXP=250;s.coinsEarned+=50}
      const totalXP=s.answerXP+s.roundBonusXP+s.perfectBonusXP;
      const before=progress.level, levels=addXP(totalXP);
      progress.coins+=s.coinsEarned; save(progress);
      const result={
        total:s.total,correct:s.correct,wrong:s.wrong,
        accuracy:accuracy(s.correct,s.total),
        score:totalXP,answerXP:s.answerXP,
        roundBonusXP:s.roundBonusXP,perfectBonusXP:s.perfectBonusXP,
        xpGained:totalXP,coinsGained:s.coinsEarned+levels*50,
        coins:progress.coins,level:progress.level,
        xp:progress.xp,xpNeeded:need(progress.level),
        levelsGained:levels,beforeLevel:before
      };
      window.dispatchEvent(new CustomEvent("kotoba:round-finished",{detail:result}));
      return result;
    },
    getProgress(){return {...progress}},
    need
  };
})();