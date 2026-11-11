FC.registerUnit({n:13,title:"Rendez-vous et invitations",ko:"약속과 초대 — 미래와 가정 말하기",
goals:["단순미래 (futur simple)","조건법 (conditionnel)","si + 현재 / si + 반과거","약속 잡기와 초대에 답하기"],
sections:[
{type:"dialogue",title:"Rendez-vous",ko:"약속 잡기",intro:"Emma가 일 때문에 다시 리옹에 갑니다. 친구 <b>Luc Fabre</b>를 만나려고 그의 사무실에 전화합니다.",lines:[
 {s:"Emma",g:"f",fr:"Allô, est-ce que je pourrais parler à monsieur Fabre, s’il vous plaît ?",ko:"여보세요, 파브르 씨와 통화할 수 있을까요?"},
 {s:"Secrétaire",g:"f",fr:"C’est de la part de qui ?",ko:"누구시라고 전해 드릴까요?"},
 {s:"Emma",g:"f",fr:"Emma Clarke. Je suis une amie.",ko:"엠마 클라크예요. 친구예요."},
 {s:"Secrétaire",g:"f",fr:"Ne quittez pas, je vous le passe.",ko:"끊지 말고 기다리세요, 연결해 드릴게요."},
 {s:"Luc",g:"m",fr:"Emma ! Quelle surprise ! Tu es où ?",ko:"엠마! 이게 웬일이야! 어디야?"},
 {s:"Emma",g:"f",fr:"À Londres, mais je serai à Lyon la semaine prochaine pour mon travail. On pourrait se voir ?",ko:"런던이야. 그런데 다음 주에 일 때문에 리옹에 갈 거야. 만날 수 있을까?"},
 {s:"Luc",g:"m",fr:"Avec plaisir ! Tu arriveras quand ?",ko:"좋지! 언제 도착해?"},
 {s:"Emma",g:"f",fr:"J’arriverai mardi soir et je repartirai vendredi. Mercredi, je serai chez des clients toute la journée.",ko:"화요일 저녁에 도착해서 금요일에 다시 떠나. 수요일에는 하루 종일 고객사에 있을 거야."},
 {s:"Luc",g:"m",fr:"Et jeudi midi ? On pourrait déjeuner ensemble. Je viendrai te chercher à ton hôtel.",ko:"그럼 목요일 점심은? 같이 점심 먹을 수 있겠다. 호텔로 데리러 갈게."},
 {s:"Emma",g:"f",fr:"Jeudi, c’est parfait. S’il fait beau, on mangera en terrasse !",ko:"목요일 완벽해. 날씨가 좋으면 테라스에서 먹자!"}]},
{type:"notes",title:"Le futur simple",ko:"단순미래",html:`
<p>동사원형(-re는 e 빼고) + <b>-ai, -as, -a, -ons, -ez, -ont</b></p>
<table><tr><th>arriver</th><th>partir</th><th>prendre</th></tr><tr><td class="say">j’arriverai</td><td class="say">je partirai</td><td class="say">je prendrai</td></tr><tr><td class="say">tu arriveras</td><td class="say">tu partiras</td><td class="say">tu prendras</td></tr><tr><td class="say">il arrivera</td><td class="say">il partira</td><td class="say">il prendra</td></tr><tr><td class="say">nous arriverons</td><td class="say">nous partirons</td><td class="say">nous prendrons</td></tr><tr><td class="say">vous arriverez</td><td class="say">vous partirez</td><td class="say">vous prendrez</td></tr><tr><td class="say">ils arriveront</td><td class="say">ils partiront</td><td class="say">ils prendront</td></tr></table>
<p>불규칙 어간: <b class="say">être → ser-</b> · <b class="say">avoir → aur-</b> · <b class="say">aller → ir-</b> · <b class="say">faire → fer-</b> · <b class="say">venir → viendr-</b> · <b class="say">pouvoir → pourr-</b> · <b class="say">vouloir → voudr-</b> · <b class="say">voir → verr-</b> · <b class="say">devoir → devr-</b></p>
<h3>Si + présent → futur (실현 가능한 조건)</h3><p><b class="say">S’il fait beau, on mangera en terrasse.</b> · <b class="say">Si tu viens, je serai content.</b></p>`},
{type:"dialogue",title:"Une invitation",ko:"초대",intro:"Emma가 리옹에서 고객을 방문합니다. 그중 한 명인 <b>Olivier</b>가 커피를 마시자고 합니다.",lines:[
 {s:"Olivier",g:"m",fr:"Vous avez le temps de prendre un café ?",ko:"커피 한잔할 시간 있으세요?"},
 {s:"Emma",g:"f",fr:"Volontiers, mais pas longtemps. J’ai encore un rendez-vous à seize heures.",ko:"기꺼이요, 하지만 오래는 못 있어요. 16시에 약속이 하나 더 있어요."},
 {s:"Olivier",g:"m",fr:"Dites-moi, ma femme et moi, nous organisons un petit dîner samedi soir. Ça vous ferait plaisir de venir ?",ko:"저기, 아내와 제가 토요일 저녁에 조촐한 저녁 식사를 하는데요. 오시면 어떨까요?"},
 {s:"Emma",g:"f",fr:"C’est très gentil, mais je rentre à Londres vendredi.",ko:"정말 친절하시네요, 하지만 금요일에 런던으로 돌아가요."},
 {s:"Olivier",g:"m",fr:"Quel dommage ! Si vous restiez jusqu’à dimanche, vous pourriez visiter le vieux Lyon avec nous.",ko:"아쉽네요! 일요일까지 계시면 저희와 리옹 구시가지를 구경하실 수 있을 텐데요."},
 {s:"Emma",g:"f",fr:"J’adorerais ! Si je n’avais pas de réunion lundi, je resterais avec plaisir.",ko:"정말 좋겠어요! 월요일에 회의만 없으면 기꺼이 남을 텐데요."},
 {s:"Olivier",g:"m",fr:"La prochaine fois, alors ! Vous nous préviendrez quand vous reviendrez ?",ko:"그럼 다음에요! 다시 오실 때 알려 주실 거죠?"},
 {s:"Emma",g:"f",fr:"Promis ! Je vous enverrai un message.",ko:"약속해요! 메시지 보낼게요."}]},
{type:"notes",title:"Le conditionnel et si + imparfait",ko:"조건법 — 공손함, 소망, 가정",html:`
<p>미래 어간 + 반과거 어미 <b>-ais, -ais, -ait, -ions, -iez, -aient</b></p>
<table><tr><td class="say">je voudrais</td><td class="say">je pourrais</td><td class="say">je serais</td><td class="say">j’aurais</td></tr><tr><td class="say">tu aimerais</td><td class="say">tu devrais</td><td class="say">il ferait</td><td class="say">nous irions</td></tr></table>
<ul><li>공손한 부탁: <b class="say">Est-ce que je pourrais parler à M. Fabre ?</b></li><li>소망: <b class="say">J’aimerais visiter Lyon.</b></li><li>조언: <b class="say">Tu devrais te reposer.</b></li></ul>
<h3>Si + imparfait → conditionnel (현재 사실과 반대/상상)</h3>
<p><b class="say">Si je gagnais au loto, je ferais le tour du monde.</b> · <b class="say">Si j’avais le temps, je resterais.</b></p>
<h3>Si + imparfait ? — 제안</h3><p><b class="say">Si on allait au cinéma ?</b> (영화 보러 가는 게 어때?)</p>
<h3>Répondre à une invitation</h3>
<table><tr><td>수락</td><td class="say">Avec plaisir ! / Volontiers ! / C’est une bonne idée !</td></tr><tr><td>거절</td><td class="say">C’est gentil, mais je ne suis pas libre. / Désolé(e), je ne peux pas.</td></tr></table>`},
{type:"vocab",items:[["un rendez-vous","약속; 예약"],["C’est de la part de qui ?","누구시라고 전할까요?"],["Ne quittez pas.","끊지 말고 기다리세요."],["passer quelqu’un","(전화를) 바꿔 주다"],["se voir","서로 만나다"],["la semaine prochaine","다음 주"],["venir chercher","데리러 오다"],["déjeuner","점심 먹다"],["volontiers","기꺼이"],["organiser un dîner","저녁 식사를 열다"],["Ça vous ferait plaisir ?","(…하면) 좋으시겠어요?"],["Quel dommage !","아쉽네요!"],["prévenir","미리 알리다"],["promis !","약속해!"],["la prochaine fois","다음번"],["gagner au loto","복권에 당첨되다"],["faire le tour du monde","세계 일주하다"],["un client","고객"],["libre","한가한"],["si…","만약 …라면"]]},
{type:"ex",n:1,title:"Le futur simple",inst:"괄호 속 동사를 단순미래로 쓰세요.",en:"Put the verbs in the simple future.",kind:"fill",items:[
 {q:"Nous ___ (venir) l’année prochaine.",a:["viendrons"]},{q:"Il ___ (partir) tout seul.",a:["partira"]},{q:"Tu ___ (faire) la vaisselle ?",a:["feras"]},
 {q:"Je ___ (être) à Lyon mardi.",a:["serai"]},{q:"Vous ___ (avoir) le temps ?",a:["aurez"]},{q:"Elles ___ (aller) à la plage.",a:["iront"]},{q:"On ___ (pouvoir) déjeuner ensemble.",a:["pourra"]}]},
{type:"ex",n:2,title:"La voyante",inst:"점술가가 되어 친구의 미래를 tu와 단순미래로 예언하세요.",en:"Play the fortune-teller.",kind:"write",items:[
 {q:"rencontrer l’homme / la femme de ta vie",a:"Tu rencontreras l’homme de ta vie.|Tu rencontreras la femme de ta vie."},{q:"avoir trois enfants",a:"Tu auras trois enfants.|Tu auras 3 enfants."},
 {q:"habiter dans une grande maison",a:"Tu habiteras dans une grande maison."},{q:"faire le tour du monde",a:"Tu feras le tour du monde."},
 {q:"être très célèbre",a:"Tu seras très célèbre."},{q:"devenir médecin",a:"Tu deviendras médecin."}]},
{type:"ex",n:3,title:"Au conditionnel",inst:"상황에 맞는 조건법 문장을 고르세요.",en:"Respond using the conditional.",example:"J’ai mal aux dents. (donner un conseil) → Tu devrais aller chez le dentiste.",kind:"choice",items:[
 {q:"Vous voulez parler au directeur. (poliment)",o:["Je veux parler au directeur !","Est-ce que je pourrais parler au directeur ?"],a:1},
 {q:"Ton ami est très stressé. (donner un conseil)",o:["Tu devrais prendre des vacances.","Tu prendras des vacances."],a:0},
 {q:"Vous rêvez de voir le Japon. (exprimer un désir)",o:["J’aimerais aller au Japon.","Je suis allé au Japon."],a:0},
 {q:"Au café. (commander poliment)",o:["Je voudrais un thé, s’il vous plaît.","Je veux un thé."],a:0},
 {q:"Proposer une sortie à une amie.",o:["On pourrait aller au concert ?","On a pu aller au concert."],a:0}]},
{type:"ex",n:4,title:"Juliette et Thomas cherchent un moment",inst:"두 사람의 일정표를 보고 대화를 완성하세요.",en:"Recreate their conversation from their diaries.",
 html:"<table><tr><th></th><th>lundi</th><th>mardi</th><th>mercredi</th><th>jeudi</th><th>vendredi</th></tr><tr><td><b>Juliette</b></td><td>réunion (matin)</td><td>libre</td><td>cours de yoga (soir)</td><td>dentiste (midi)</td><td>libre</td></tr><tr><td><b>Thomas</b></td><td>libre</td><td>voyage à Nantes</td><td>libre (midi)</td><td>libre</td><td>libre (soir)</td></tr></table>",kind:"fill",items:[
 {q:"THOMAS : On pourrait se voir mardi ? — JULIETTE : Non, toi, tu ___ (être) à Nantes !",a:["seras"]},
 {q:"JULIETTE : Et jeudi midi ? — THOMAS : Toi, tu ___ (aller) chez le dentiste !",a:["iras"]},
 {q:"THOMAS : Mercredi midi, je ___ (être) libre. — JULIETTE : Moi aussi, mon cours de yoga est le soir.",a:["serai"]},
 {q:"JULIETTE : Alors on ___ (déjeuner) ensemble mercredi !",a:["déjeunera"]},
 {q:"THOMAS : Et vendredi soir, on ___ (pouvoir) aussi aller au cinéma.",a:["pourra"]}]},
{type:"ex",n:5,title:"À une condition !",inst:"조건에 따라 대답하세요: si + 현재, 주절은 단순미래.",en:"Make sentences: si + present → future.",example:"Je viendrai avec vous à la campagne s’il fait beau.",kind:"fill",items:[
 {q:"Je ___ (venir) à ta fête si je finis mon travail.",a:["viendrai"]},{q:"S’il ___ (pleuvoir), nous resterons à la maison.",a:["pleut"]},
 {q:"Si tu ___ (avoir) le temps, tu m’appelleras ?",a:["as"]},{q:"Nous ___ (aller) à la plage s’il fait chaud.",a:["irons"]},
 {q:"Si vous ___ (être) fatigués, on rentrera tôt.",a:["êtes"]}]},
{type:"ex",n:6,title:"Si je gagnais au loto…",inst:"si + 반과거 → 조건법 문장을 완성하세요.",en:"Imagine what you would do if you won the lottery.",example:"Si je gagnais au loto, je partirais en vacances.",kind:"fill",items:[
 {q:"Si je gagnais au loto, j’ ___ (acheter) une maison au bord de la mer.",a:["achèterais"]},{q:"Si je gagnais au loto, je ___ (faire) le tour du monde.",a:["ferais"]},
 {q:"Si je ___ (gagner) au loto, je ne travaillerais plus.",a:["gagnais"]},{q:"Si j’ ___ (avoir) beaucoup d’argent, j’aiderais ma famille.",a:["avais"]},
 {q:"Si nous étions riches, nous ___ (aller) à Tahiti.",a:["irions"]}]},
{type:"ex",n:7,title:"Si on… ?",inst:"si + 반과거로 제안하세요 (on 사용).",en:"Make a suggestion using si + imparfait.",kind:"write",items:[
 {q:"Il pleut. Qu’est-ce qu’on va faire ? (aller au cinéma)",a:"Si on allait au cinéma ?"},{q:"Je travaille trop, je suis stressé. (partir en week-end)",a:"Si on partait en week-end ?"},
 {q:"J’ai faim ! (manger une pizza)",a:"Si on mangeait une pizza ?"},{q:"Il fait beau aujourd’hui. (faire un pique-nique)",a:"Si on faisait un pique-nique ?"},
 {q:"On s’ennuie… (jouer aux cartes)",a:"Si on jouait aux cartes ?"}]},
{type:"ex",n:8,title:"Vous vous souvenez ?",inst:"이 단원의 대화를 떠올리며 알맞은 시제(현재·미래·조건법·반과거)로 쓰세요.",en:"Fill in with the right tense.",kind:"fill",items:[
 {q:"Emma : « Est-ce que je ___ (pouvoir) parler à M. Fabre ? »",a:["pourrais"]},{q:"Emma : « Je ___ (être) à Lyon la semaine prochaine. »",a:["serai"]},
 {q:"Emma : « S’il fait beau, on ___ (manger) en terrasse ! »",a:["mangera"]},{q:"Olivier : « Si vous ___ (rester) jusqu’à dimanche, vous pourriez visiter le vieux Lyon. »",a:["restiez"]},
 {q:"Emma : « Si je n’avais pas de réunion, je ___ (rester) avec plaisir. »",a:["resterais"]},{q:"Emma : « Je vous ___ (envoyer) un message. »",a:["enverrai"]}]}
]});
