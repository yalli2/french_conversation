(function(){
const RECIPE=`<b>Gratin de courgettes (pour 4 personnes)</b><br>4 courgettes · 3 œufs · 20 cl de crème · 100 g de fromage râpé · sel, poivre<br><ol style="margin:6px 0 0 18px;padding:0">
<li>Préchauffer le four à 200 degrés.</li><li>Laver les courgettes et les couper en rondelles.</li><li>Faire cuire les courgettes dans une poêle pendant 10 minutes.</li><li>Battre les œufs avec la crème. Saler et poivrer.</li><li>Mettre les courgettes dans un plat et verser le mélange dessus.</li><li>Ajouter le fromage et faire cuire 25 minutes au four.</li></ol>`;
FC.registerUnit({n:14,title:"Un week-end passé à cuisiner",ko:"요리하며 보낸 주말 — 레시피와 대명사",
goals:["명령법으로 지시하기 (tu / nous / vous)","직접목적 대명사 le, la, les","대명사 en","요리 관련 표현"],
sections:[
{type:"dialogue",title:"Une ratatouille réussie",ko:"성공적인 라타투이",intro:"Gérard와 Martine이 친구 <b>Sophie</b>와 <b>Marc</b>를 바비큐에 초대했습니다. Martine이 Sophie에게 라타투이 만드는 법을 설명합니다.",lines:[
 {s:"Sophie",g:"f",fr:"Qu’est-ce que tu prépares de bon ?",ko:"뭐 맛있는 거 만들어?"},
 {s:"Martine",g:"f",fr:"Une ratatouille. C’est facile, je te montre ! D’abord, lave les légumes : les tomates, les courgettes, l’aubergine et les poivrons.",ko:"라타투이. 쉬워, 보여 줄게! 먼저 채소를 씻어. 토마토, 주키니, 가지, 피망."},
 {s:"Sophie",g:"f",fr:"Je les épluche ?",ko:"껍질을 벗겨?"},
 {s:"Martine",g:"f",fr:"Non, ne les épluche pas. Coupe-les en morceaux. Et l’oignon, coupe-le finement.",ko:"아니, 벗기지 마. 조각으로 잘라. 그리고 양파는 잘게 썰어."},
 {s:"Sophie",g:"f",fr:"Et l’huile d’olive, je la mets quand ?",ko:"올리브유는 언제 넣어?"},
 {s:"Martine",g:"f",fr:"Maintenant. Fais chauffer l’huile dans la cocotte et fais revenir l’oignon et l’ail.",ko:"지금. 냄비에 기름을 데우고 양파와 마늘을 볶아."},
 {s:"Sophie",g:"f",fr:"Ça sent déjà bon ! Et ensuite ?",ko:"벌써 냄새 좋다! 그다음엔?"},
 {s:"Martine",g:"f",fr:"Ajoute les légumes, un peu de thym et de laurier. Sale, poivre, et laisse cuire à feu doux pendant une heure.",ko:"채소를 넣고 타임과 월계수 잎을 조금 넣어. 소금, 후추 치고 약불에서 한 시간 동안 익혀."},
 {s:"Sophie",g:"f",fr:"Une heure ! Il faut être patient…",ko:"한 시간이나! 인내심이 필요하네…"},
 {s:"Martine",g:"f",fr:"Oui, mais c’est encore meilleur le lendemain. Goûte-la demain, tu verras !",ko:"응, 그런데 다음 날 더 맛있어. 내일 먹어 봐, 알게 될 거야!"}]},
{type:"notes",title:"L’impératif et les pronoms le, la, les",ko:"명령법과 직접목적 대명사",html:`
<h3>L’impératif — 명령법 (tu / nous / vous)</h3>
<table><tr><th>tu</th><th>nous (~하자)</th><th>vous</th></tr><tr><td class="say">Lave !</td><td class="say">Lavons !</td><td class="say">Lavez !</td></tr><tr><td class="say">Coupe !</td><td class="say">Coupons !</td><td class="say">Coupez !</td></tr><tr><td class="say">Fais !</td><td class="say">Faisons !</td><td class="say">Faites !</td></tr><tr><td class="say">Prends !</td><td class="say">Prenons !</td><td class="say">Prenez !</td></tr></table>
<div class="tip">💡 -er 동사의 tu 명령형은 <b>-s가 빠져요</b>: tu laves → <b>Lave !</b> · tu manges → <b>Mange !</b></div>
<h3>Le, la, l’, les — 직접목적 대명사 (그것을/그를)</h3>
<p>동사 <b>앞</b>에 놓아요: <b class="say">Tu prends le sel ? — Oui, je le prends.</b> · <b class="say">La nappe, je la mets sur la table.</b> · <b class="say">Les légumes, je les coupe.</b></p>
<table><tr><td>긍정 명령</td><td>동사 뒤 + 하이픈</td><td class="say">Coupe-les ! Mets-la ! Goûte-le !</td></tr><tr><td>부정 명령</td><td>동사 앞</td><td class="say">Ne les épluche pas !</td></tr><tr><td>복합과거</td><td>과거분사가 대명사와 일치</td><td class="say">Les valises ? Je les ai prises.</td></tr></table>
<h3>Recettes — 요리 표현</h3>
<p><b class="say">laver, éplucher, couper en morceaux / en rondelles, faire chauffer, faire cuire, faire revenir, ajouter, mélanger, verser, saler, poivrer, à feu doux</b></p>`},
{type:"dialogue",title:"Comment allumer un barbecue",ko:"바비큐 불 피우는 법",intro:"Gérard와 Marc가 바비큐를 준비합니다. 대명사 en에 주목하세요.",lines:[
 {s:"Marc",g:"m",fr:"Il est génial, ton barbecue ! Tu l’as construit toi-même ?",ko:"네 바비큐 그릴 멋지다! 직접 만든 거야?"},
 {s:"Gérard",g:"m",fr:"Oui, avec un ami bricoleur. J’en avais assez des petits barbecues du supermarché.",ko:"응, 손재주 좋은 친구랑. 슈퍼마켓 작은 그릴은 질렸거든."},
 {s:"Marc",g:"m",fr:"Tu as du charbon ?",ko:"숯 있어?"},
 {s:"Gérard",g:"m",fr:"Oui, j’en ai acheté un grand sac. Passe-moi les allumettes, s’il te plaît.",ko:"응, 큰 자루로 하나 샀어. 성냥 좀 건네줘."},
 {s:"Marc",g:"m",fr:"Les voilà. Et les saucisses, tu en as combien ?",ko:"여기. 그리고 소시지는 몇 개 있어?"},
 {s:"Gérard",g:"m",fr:"J’en ai douze, et il y a aussi des brochettes de poulet.",ko:"열두 개 있어. 닭꼬치도 있고."},
 {s:"Marc",g:"m",fr:"Douze ? On n’est que quatre ! On en a trop.",ko:"열두 개? 우리 넷밖에 없는데! 너무 많아."},
 {s:"Gérard",g:"m",fr:"Ne t’inquiète pas, on n’en a jamais trop ! Bon, attends un peu : les braises doivent être bien rouges avant de mettre la viande.",ko:"걱정 마, 많아서 나쁠 건 없어! 자, 조금 기다려. 고기 올리기 전에 숯이 완전히 빨갛게 되어야 해."}]},
{type:"notes",title:"Le pronom en",ko:"대명사 en — ‘그것(의 일부)을’",html:`
<p><b>du / de la / des + 명사</b>, 또는 <b>숫자·수량 + 명사</b>를 대신해요.</p>
<ul><li><b class="say">Tu as du pain ? — Oui, j’en ai.</b></li><li><b class="say">Tu as des œufs ? — Non, je n’en ai pas.</b></li><li><b class="say">Tu as combien de saucisses ? — J’en ai douze.</b> (숫자는 뒤에 남겨요)</li><li><b class="say">Il y a beaucoup de légumes ? — Oui, il y en a beaucoup.</b></li><li>명령: <b class="say">Prends-en ! / N’en prends pas !</b></li></ul>`},
{type:"vocab",items:[["une recette","레시피"],["les légumes","채소"],["une courgette","주키니"],["une aubergine","가지"],["un poivron","피망"],["un oignon","양파"],["l’ail","마늘"],["laver","씻다"],["éplucher","껍질을 벗기다"],["couper en morceaux","조각으로 자르다"],["faire cuire","익히다"],["faire chauffer","데우다"],["ajouter","넣다, 추가하다"],["à feu doux","약불에서"],["le four","오븐"],["une poêle","프라이팬"],["goûter","맛보다"],["le charbon","숯"],["des allumettes","성냥"],["une saucisse","소시지"]]},
{type:"ex",n:1,title:"Expliquez la recette",inst:"레시피의 동사원형을 on + 현재형으로 바꿔 친구에게 설명하세요.",en:"Explain the recipe using the present tense.",html:RECIPE,kind:"fill",items:[
 {q:"On ___ le four à 200 degrés.",a:["préchauffe"]},{q:"On ___ les courgettes et on les ___ en rondelles.",a:["lave","coupe"]},
 {q:"On ___ cuire les courgettes dans une poêle.",a:["fait"]},{q:"On ___ les œufs avec la crème.",a:["bat"]},
 {q:"On ___ les courgettes dans un plat et on ___ le mélange dessus.",a:["met","verse"]},{q:"On ___ le fromage.",a:["ajoute"]}]},
{type:"ex",n:2,title:"Que remplacent les pronoms ?",inst:"레시피를 다시 보고 대명사가 무엇을 가리키는지 고르세요.",en:"What do the pronouns replace?",html:RECIPE,kind:"choice",items:[
 {q:"On le préchauffe à 200 degrés.",o:["le four","le fromage","le plat"],a:0},{q:"On les coupe en rondelles.",o:["les œufs","les courgettes","les personnes"],a:1},
 {q:"On les bat avec la crème.",o:["les courgettes","les œufs","les rondelles"],a:1},{q:"On la verse sur les courgettes.",o:["la crème (le mélange)","la poêle","la recette"],a:0},
 {q:"On l’ajoute à la fin.",o:["le fromage","le four","le sel et le poivre"],a:0}]},
{type:"ex",n:3,title:"le, la, l’ ou les ?",inst:"빈칸에 le, la, l’, les를 쓰세요.",en:"Fill in with le, la, l’ or les.",kind:"fill",items:[
 {q:"Tu mets le sel quand ? — Je ___ mets maintenant.",a:["le"]},{q:"Où est la nappe ? — Tu ___ trouveras dans le buffet.",a:["la"]},
 {q:"Où est-ce que tu achètes tes fruits ? — Je ___ achète au marché.",a:["les"]},{q:"Tu connais Sophie ? — Oui, je ___ connais bien.",a:["la"]},
 {q:"Tu regardes le match ce soir ? — Non, je ne ___ regarde pas.",a:["le"]},{q:"Et l’huile ? — Je ___ ajoute à la fin.",a:["l’|l'"]}]},
{type:"ex",n:4,title:"Oui, je l’ai fait !",inst:"복합과거 + 대명사로 답하세요. 과거분사 일치에 주의!",en:"Answer using pronouns in the passé composé.",example:"Tu as pris les valises ? → Oui, je les ai prises.",kind:"write",items:[
 {q:"Tu as vu ce documentaire hier soir ?",a:"Oui, je l’ai vu."},{q:"Tu as acheté la crème ?",a:"Oui, je l’ai achetée."},
 {q:"Vous avez lavé les tomates ?",a:"Oui, je les ai lavées.|Oui, nous les avons lavées."},{q:"Tu as invité tes amis ?",a:"Oui, je les ai invités."},
 {q:"Tu as fini la ratatouille ?",a:"Oui, je l’ai finie."}]},
{type:"ex",n:5,title:"Le pronom en",inst:"en을 사용해 답하세요.",en:"Answer using en.",example:"Vous avez du pain ? → Oui, j’en ai.",kind:"write",items:[
 {q:"Tu as du charbon ? (oui)",a:"Oui, j’en ai."},{q:"Vous avez des enfants ? (oui, deux)",a:"Oui, j’en ai deux.|Oui, nous en avons deux."},
 {q:"Tu bois du café ? (non)",a:"Non, je n’en bois pas."},{q:"Il y a des tomates ? (oui, beaucoup)",a:"Oui, il y en a beaucoup."},
 {q:"Tu veux de la tarte ? (oui, un peu)",a:"Oui, j’en veux un peu."},{q:"Elle a acheté des fleurs ? (non)",a:"Non, elle n’en a pas acheté."}]},
{type:"ex",n:6,title:"On n’en a jamais assez !",inst:"백만장자가 되어 en + 수량으로 답하세요.",en:"Answer as a multi-millionaire.",example:"Vous avez combien de paires de chaussures ? (200) → J’en ai deux cents.",kind:"fill",items:[
 {q:"Vous avez combien de voitures ? — J’ ___ ai douze.",a:["en"]},{q:"Vous avez des maisons ? — Oui, j’en ___ cinq : à Paris, à Nice…",a:["ai"]},
 {q:"Vous avez des employés ? — Oui, j’en ai ___ (beaucoup).",a:["beaucoup"]},{q:"Vous avez combien de chevaux ? — J’en ai ___ (20).",a:["vingt|20"]},
 {q:"Vous avez des soucis ? — Non, je n’ ___ ai pas !",a:["en"]}]},
{type:"ex",n:7,title:"À l’impératif !",inst:"예시처럼 명령법 + 대명사로 바꾸세요 (tu).",en:"Transform into the imperative.",example:"La serviette ? Tu la mets dans l’assiette. → Mets-la dans l’assiette.",kind:"write",items:[
 {q:"Les verres ? Tu les mets sur la table.",a:"Mets-les sur la table."},{q:"Le pain ? Tu le coupes.",a:"Coupe-le."},
 {q:"La salade ? Tu la laves.",a:"Lave-la."},{q:"Les légumes ? Tu ne les épluches pas.",a:"Ne les épluche pas."},
 {q:"Du sel ? Tu en ajoutes un peu.",a:"Ajoutes-en un peu.",ex:"en 앞에서는 발음을 위해 -s가 다시 붙어요: Ajoutes-en, Manges-en."}]},
{type:"ex",n:8,title:"La recette à l’impératif",inst:"연습 1의 레시피를 tu 명령법으로 다시 쓰세요.",en:"Do Exercise 1 again with the imperative.",html:RECIPE,kind:"write",items:[
 {q:"1. préchauffer le four à 200 degrés",a:"Préchauffe le four à 200 degrés."},{q:"2. laver les courgettes et les couper en rondelles",a:"Lave les courgettes et coupe-les en rondelles."},
 {q:"3. faire cuire les courgettes 10 minutes",a:"Fais cuire les courgettes 10 minutes.|Fais cuire les courgettes dix minutes.|Fais cuire les courgettes pendant 10 minutes."},
 {q:"4. battre les œufs avec la crème",a:"Bats les œufs avec la crème.|Bats les oeufs avec la crème."},{q:"6. ajouter le fromage",a:"Ajoute le fromage."}]}
]});
})();
