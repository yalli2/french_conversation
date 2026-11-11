FC.registerUnit({n:6,title:"Faire ses courses",ko:"장보기 — 필요한 것 사고 계산하기",
goals:["필요한 것 말하기","부분관사 du / de la / de l’ / des","물건 위치 묻기","식료품 어휘","수량 표현","계산하기"],
sections:[
{type:"dialogue",title:"Au supermarché",ko:"슈퍼마켓에서",intro:"Gérard와 Martine이 브르타뉴의 원룸에 도착해 슈퍼마켓에서 기본적인 장을 봅니다. ‘~이 필요하다’는 두 가지 표현을 찾아보세요.",lines:[
 {s:"Martine",g:"f",fr:"Bon, qu’est-ce qu’il nous faut ? Il n’y a rien dans le studio.",ko:"자, 뭐가 필요하지? 원룸에 아무것도 없어."},
 {s:"Gérard",g:"m",fr:"Il nous faut du café, du lait, du sucre et du pain pour demain matin.",ko:"내일 아침에 먹을 커피, 우유, 설탕, 빵이 필요해."},
 {s:"Martine",g:"f",fr:"Et on a besoin de dentifrice. J’ai oublié le nôtre à Tours.",ko:"그리고 치약도 필요해. 우리 걸 투르에 두고 왔어."},
 {s:"Gérard",g:"m",fr:"On prend aussi de la confiture et de l’huile d’olive ?",ko:"잼하고 올리브유도 살까?"},
 {s:"Martine",g:"f",fr:"Oui. Et des pâtes, du riz et de l’eau minérale. Mais où est l’eau ?",ko:"응. 그리고 파스타, 쌀, 생수도. 그런데 물은 어디 있지?"},
 {s:"Gérard",g:"m",fr:"Pardon, madame, l’eau minérale, c’est où, s’il vous plaît ?",ko:"실례합니다, 생수는 어디 있나요?"},
 {s:"Employée",g:"f",fr:"Allée sept, à côté des jus de fruits.",ko:"7번 통로, 과일주스 옆에 있어요."},
 {s:"Martine",g:"f",fr:"Et les fruits et légumes ? — Non, on va les acheter au marché demain. Ils sont plus frais !",ko:"과일과 채소는? — 아냐, 내일 시장에서 사자. 더 신선하니까!"}]},
{type:"notes",title:"Les articles partitifs et le besoin",ko:"부분관사와 ‘필요하다’ 표현",html:`
<h3>Du, de la, de l’, des — 부분관사 (‘약간의’)</h3>
<p>셀 수 없는 것의 <b>일부 양</b>을 말할 때 써요.</p>
<table><tr><td>남성</td><td class="say">du pain, du lait, du café</td></tr><tr><td>여성</td><td class="say">de la confiture, de la viande</td></tr><tr><td>모음 앞</td><td class="say">de l’eau, de l’huile</td></tr><tr><td>복수</td><td class="say">des pâtes, des œufs</td></tr></table>
<div class="tip">💡 부정문에서는 모두 <b>de / d’</b>: <b class="say">J’ai du lait. → Je n’ai pas de lait.</b> · <b class="say">Il y a de l’eau. → Il n’y a pas d’eau.</b></div>
<h3>Exprimer le besoin — 필요 표현</h3>
<ul><li><b class="say">Il me faut du pain.</b> / <b class="say">Il nous faut des œufs.</b> (il faut + 대명사)</li><li><b class="say">J’ai besoin de lait.</b> / <b class="say">On a besoin d’huile.</b> (avoir besoin de + 관사 없는 명사)</li></ul>
<h3>Demander où sont les choses</h3>
<p><b class="say">Pardon, où est le rayon des fromages ?</b> · <b class="say">Les yaourts, c’est où ?</b> · <b class="say">Où sont les biscuits, s’il vous plaît ?</b></p>`},
{type:"dialogue",title:"Au marché",ko:"시장에서",intro:"다음 날 아침, 두 사람은 많은 프랑스인처럼 시장에서 신선한 식품을 삽니다. 과일·채소 가판대입니다.",lines:[
 {s:"Marchand",g:"m",fr:"Bonjour, madame ! Qu’est-ce que je vous sers ?",ko:"안녕하세요, 손님! 뭘 드릴까요?"},
 {s:"Martine",g:"f",fr:"Bonjour. Je voudrais un kilo de tomates et une livre de fraises, s’il vous plaît.",ko:"안녕하세요. 토마토 1킬로와 딸기 500그램 주세요."},
 {s:"Marchand",g:"m",fr:"Voilà. Et avec ça ?",ko:"여기 있습니다. 그리고 또요?"},
 {s:"Martine",g:"f",fr:"Une salade et trois courgettes. Elles sont de la région ?",ko:"상추 한 포기와 주키니 3개요. 이 지역 거예요?"},
 {s:"Marchand",g:"m",fr:"Oui, tout est bio et de Bretagne. Vous voulez des pommes ? Elles sont délicieuses.",ko:"네, 전부 유기농이고 브르타뉴산이에요. 사과도 드릴까요? 아주 맛있어요."},
 {s:"Martine",g:"f",fr:"Non merci, j’en ai encore. C’est tout. Combien je vous dois ?",ko:"아니요, 아직 있어요. 이게 다예요. 얼마예요?"},
 {s:"Marchand",g:"m",fr:"Alors… ça fait onze euros quarante.",ko:"자… 11유로 40센트입니다."},
 {s:"Martine",g:"f",fr:"Voilà vingt euros.",ko:"여기 20유로요."},
 {s:"Marchand",g:"m",fr:"Et voilà votre monnaie : huit euros soixante. Merci et bonne journée !",ko:"거스름돈 8유로 60센트입니다. 감사합니다, 좋은 하루 되세요!"}]},
{type:"notes",title:"Quantités et prix",ko:"수량과 가격",html:`
<table><tr><td class="say">un kilo de pommes</td><td>사과 1kg</td></tr><tr><td class="say">une livre de fraises</td><td>딸기 500g</td></tr><tr><td class="say">deux cents grammes de jambon</td><td>햄 200g</td></tr><tr><td class="say">un litre de lait</td><td>우유 1리터</td></tr><tr><td class="say">une bouteille d’eau</td><td>물 한 병</td></tr><tr><td class="say">un paquet de biscuits</td><td>과자 한 봉지</td></tr><tr><td class="say">une boîte de thon</td><td>참치 한 캔</td></tr><tr><td class="say">une douzaine d’œufs</td><td>달걀 12개</td></tr><tr><td class="say">un pot de confiture</td><td>잼 한 병</td></tr><tr><td class="say">une tranche de jambon</td><td>햄 한 조각</td></tr></table>
<div class="tip">💡 수량 표현 뒤에는 관사 없이 <b>de / d’</b>: un kilo <b>de</b> tomates (✕ des tomates).</div>
<h3>Payer — 계산</h3>
<ul><li><b class="say">C’est combien ? / Ça fait combien ? / Combien je vous dois ?</b></li><li><b class="say">Ça fait onze euros quarante.</b> (11,40 €)</li><li><b class="say">Je peux payer par carte ?</b> · <b class="say">Vous avez de la monnaie ?</b></li></ul>`},
{type:"vocab",items:[["le pain","빵"],["le lait","우유"],["le sucre","설탕"],["la confiture","잼"],["l’huile d’olive","올리브유"],["les pâtes","파스타"],["le riz","쌀"],["l’eau minérale","생수"],["le dentifrice","치약"],["la viande","고기"],["le poisson","생선"],["les fruits et légumes","과일과 채소"],["une livre","500그램"],["un kilo","1킬로"],["une douzaine","12개"],["une allée / un rayon","통로 / 코너"],["Et avec ça ?","그리고 또요?"],["C’est tout.","그게 다예요."],["la monnaie","거스름돈, 잔돈"],["bio","유기농의"]]},
{type:"ex",n:1,title:"Dans le chariot",inst:"카트에 이미 담은 물건들입니다. 부분관사(du, de la, de l’, des)를 쓰세요.",en:"Complete with partitive articles.",kind:"fill",items:[
 {q:"Ils ont ___ lait, ___ café et ___ sucre.",a:["du","du","du"]},{q:"Ils ont ___ confiture et ___ huile d’olive.",a:["de la","de l’|de l'"]},
 {q:"Ils ont ___ pâtes, ___ riz et ___ eau minérale.",a:["des","du","de l’|de l'"]},{q:"Ils ont aussi ___ dentifrice et ___ chocolat.",a:["du","du"]},
 {q:"Ils n’ont pas ___ fruits.",a:["de"]}]},
{type:"ex",n:2,title:"Il nous faut… / On a besoin de…",inst:"Martine이 되어 장보기 목록을 말하세요. 괄호의 표현을 쓰세요.",en:"Say what you need: il nous faut / on a besoin de.",example:"beurre (il nous faut) → Il nous faut du beurre.",kind:"write",items:[
 {q:"beurre (il nous faut)",a:"Il nous faut du beurre."},{q:"beurre (on a besoin de)",a:"On a besoin de beurre.|Nous avons besoin de beurre."},
 {q:"farine (il nous faut)",a:"Il nous faut de la farine."},{q:"œufs (on a besoin de)",a:"On a besoin d’œufs.|Nous avons besoin d’œufs.|On a besoin d'oeufs"},
 {q:"eau (il nous faut)",a:"Il nous faut de l’eau."},{q:"yaourts (il nous faut)",a:"Il nous faut des yaourts."}]},
{type:"ex",n:3,title:"C’est où ?",inst:"프랑스 슈퍼마켓에서 직원에게 물건이 어디 있는지 물어보세요. (단수: Où est … ? / 복수: Où sont … ?)",en:"Ask where things are.",kind:"write",items:[
 {q:"l’eau minérale",a:"Où est l’eau minérale ?|Pardon, où est l’eau minérale, s’il vous plaît ?|L’eau minérale, c’est où ?|Où est l’eau minérale, s’il vous plaît ?"},
 {q:"les biscuits",a:"Où sont les biscuits ?|Pardon, où sont les biscuits, s’il vous plaît ?|Les biscuits, c’est où ?|Où sont les biscuits, s’il vous plaît ?"},
 {q:"le pain",a:"Où est le pain ?|Pardon, où est le pain, s’il vous plaît ?|Le pain, c’est où ?|Où est le pain, s’il vous plaît ?"},
 {q:"les fromages",a:"Où sont les fromages ?|Pardon, où sont les fromages, s’il vous plaît ?|Les fromages, c’est où ?|Où sont les fromages, s’il vous plaît ?"},
 {q:"la confiture",a:"Où est la confiture ?|Pardon, où est la confiture, s’il vous plaît ?|La confiture, c’est où ?|Où est la confiture, s’il vous plaît ?"}]},
{type:"ex",n:4,title:"Logique ou absurde ?",inst:"말이 되는 수량이면 Vrai(논리적), 말이 안 되면 Faux(엉터리)를 고르세요. « J’aimerais… »",en:"Spot the nonsense quantities.",kind:"tf",items:[
 {q:"une livre de pommes",a:true},{q:"dix grammes d’oranges",a:false,fix:"un kilo d’oranges"},{q:"deux litres de parfum",a:false,fix:"un flacon de parfum"},
 {q:"une bouteille de lait",a:true},{q:"une douzaine d’œufs",a:true},{q:"un paquet de soupe chaude",a:false,fix:"un bol / une assiette de soupe"},{q:"une tranche de jambon",a:true}]},
{type:"ex",n:5,title:"Au marché",inst:"장보기 목록을 보고 상인과의 대화를 완성하세요.",en:"Complete the conversation at the stalls.",html:"🛒 <b>Liste :</b> 1 kg de pommes de terre · 500 g de cerises · 6 œufs · 2 tranches de saumon · 1 bouquet de persil",kind:"fill",items:[
 {q:"— Bonjour ! Je voudrais un ___ de pommes de terre, s’il vous plaît.",a:["kilo"]},{q:"— Et avec ça ? — Une ___ de cerises.",a:["livre"]},
 {q:"— Vous avez des œufs ? — Oui, une ___ ou six ? — Six, s’il vous plaît.",a:["douzaine"]},{q:"(Chez le poissonnier) — Deux ___ de saumon, s’il vous plaît.",a:["tranches"]},
 {q:"— C’est ___ ? — Oui, c’est tout. Ça fait combien ?",a:["tout"]}]},
{type:"ex",n:6,title:"J’en ai… je n’en ai pas !",inst:"예시처럼 ‘J’ai du …’를 ‘Je n’ai pas de …’로 바꾸세요.",en:"Say you have it, then that you don't.",example:"J’ai de la bière. → Je n’ai pas de bière.",kind:"write",items:[
 {q:"J’ai du fromage.",a:"Je n’ai pas de fromage."},{q:"J’ai de la farine.",a:"Je n’ai pas de farine."},{q:"J’ai de l’huile.",a:"Je n’ai pas d’huile."},
 {q:"J’ai des œufs.",a:"Je n’ai pas d’œufs.|Je n'ai pas d'oeufs"},{q:"J’ai du sel.",a:"Je n’ai pas de sel."},{q:"J’ai de l’eau.",a:"Je n’ai pas d’eau."}]},
{type:"ex",n:7,title:"C’est combien ?",inst:"▶ 가격을 듣고 숫자로 쓰세요 (소수점은 쉼표, 예: 11,40).",en:"Listen and write the prices.",kind:"write",items:[
 {say:"dix-sept euros cinquante",a:"17,50|17.50"},{say:"quatre euros quatre-vingts",a:"4,80|4.80"},{say:"cinquante-huit euros",a:"58|58,00"},
 {say:"cent cinquante euros quatre-vingt-dix",a:"150,90|150.90"},{say:"deux euros soixante-quinze",a:"2,75|2.75"},{say:"trente-trois euros vingt",a:"33,20|33.20"}]},
{type:"ex",n:8,title:"Questions et réponses",inst:"질문과 알맞은 대답을 연결하세요.",en:"Pair each question with its answer.",kind:"match",
 left:["Combien je vous dois ?","Vous avez des cerises ?","Et avec ça ?","Vous avez de la monnaie ?","Je peux payer par carte ?","Elles sont de la région ?"],
 right:["Ça fait douze euros, madame.","Oui, j’en ai. Vous en voulez combien ?","C’est tout, merci.","Désolé, j’ai seulement un billet de cinquante.","Bien sûr, voilà le terminal.","Oui, elles viennent de Bretagne."],a:[0,1,2,3,4,5],sayLeft:true}
]});
