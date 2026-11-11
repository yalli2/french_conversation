FC.registerUnit({n:3,title:"Manger et boire",ko:"먹고 마시기 — 주문하고 취향 말하기",
goals:["음식·음료 주문","좋아하는 것과 싫어하는 것","요리에 대해 묻기","moi, toi, lui…","tu 와 vous","명사의 복수와 des / les"],
sections:[
{type:"reading",title:"Menu à 22 euros",ko:"브라세리 ‘Le Petit Zinc’의 오늘의 메뉴",g:"m",html:`<div style="text-align:center;border:2px double #1d2f6f;border-radius:12px;padding:14px;max-width:440px;margin:auto">
<b>BRASSERIE LE PETIT ZINC</b><br><i>Menu à 22 euros</i><br><br><b>Entrées</b><br>Salade du jardin<br>Soupe à l’oignon<br>Six escargots de Bourgogne<br><br><b>Plats</b><br>Poulet rôti, frites maison<br>Pavé de saumon, riz aux légumes<br>Omelette aux champignons<br><br><b>Desserts</b><br>Crème brûlée<br>Tarte aux pommes<br>Plateau de fromages</div>`},
{type:"dialogue",title:"Déjeuner entre amis",ko:"친구들과 점심 식사",intro:"Emma가 프랑스 친구 <b>Lucie</b>, <b>Hugo</b>와 브라세리에서 점심을 먹습니다. 22유로 정식을 고르네요. 각자 무엇을 주문하나요?",lines:[
 {s:"Serveur",g:"m",fr:"Bonjour, messieurs-dames. Vous avez choisi ?",ko:"안녕하세요, 손님들. 고르셨나요?"},
 {s:"Lucie",g:"f",fr:"Oui, on prend le menu à vingt-deux euros. Moi, je voudrais la soupe à l’oignon.",ko:"네, 22유로 정식으로 할게요. 저는 양파 수프 주세요."},
 {s:"Emma",g:"f",fr:"Qu’est-ce que c’est, la salade du jardin ?",ko:"‘정원 샐러드’는 뭐예요?"},
 {s:"Serveur",g:"m",fr:"C’est une salade verte avec des tomates, des radis, des carottes et des œufs durs.",ko:"토마토, 래디시, 당근, 삶은 달걀이 들어간 그린 샐러드예요."},
 {s:"Emma",g:"f",fr:"Très bien, une salade du jardin pour moi, s’il vous plaît.",ko:"좋아요, 저는 정원 샐러드로 주세요."},
 {s:"Hugo",g:"m",fr:"Et pour moi, les escargots. J’adore ça !",ko:"저는 달팽이 요리요. 정말 좋아해요!"},
 {s:"Lucie",g:"f",fr:"Beurk ! Moi, je n’aime pas du tout les escargots.",ko:"윽! 저는 달팽이 정말 싫어요."},
 {s:"Serveur",g:"m",fr:"Et comme plat ?",ko:"메인 요리는요?"},
 {s:"Emma",g:"f",fr:"Le saumon, s’il vous plaît. J’aime beaucoup le poisson.",ko:"연어 주세요. 생선을 아주 좋아해요."},
 {s:"Hugo",g:"m",fr:"Moi aussi, je prends le saumon. Et toi, Lucie ?",ko:"나도 연어로 할게. 너는, 뤼시?"},
 {s:"Lucie",g:"f",fr:"Moi, je préfère le poulet, avec des frites.",ko:"나는 감자튀김 곁들인 닭고기가 더 좋아."},
 {s:"Serveur",g:"m",fr:"Et comme boisson ?",ko:"음료는요?"},
 {s:"Hugo",g:"m",fr:"Une carafe d’eau et une bouteille de jus de pomme, s’il vous plaît.",ko:"물 한 병(카라프)과 사과주스 한 병 주세요."}]},
{type:"notes",title:"Aimer, préférer, commander",ko:"좋아함 표현과 주문 표현",html:`
<h3>Dire ce qu’on aime — 취향 말하기</h3>
<table><tr><td>❤️❤️</td><td class="say">J’adore le chocolat.</td></tr><tr><td>❤️</td><td class="say">J’aime beaucoup le poisson.</td></tr><tr><td>🙂</td><td class="say">J’aime bien les tomates.</td></tr><tr><td>🙁</td><td class="say">Je n’aime pas beaucoup le café.</td></tr><tr><td>😖</td><td class="say">Je n’aime pas du tout les escargots.</td></tr><tr><td>💥</td><td class="say">Je déteste les huîtres.</td></tr><tr><td>⚖️</td><td class="say">J’aime le thé, mais je préfère le café.</td></tr></table>
<div class="tip">💡 취향을 말할 때는 항상 <b>정관사 le / la / l’ / les</b>를 써요: <i>J’aime <b>le</b> fromage</i> (치즈라는 것 전체). préférer: je préf<b>è</b>re, tu préf<b>è</b>res, il préf<b>è</b>re, nous préférons, vous préférez, ils préf<b>è</b>rent.</div>
<h3>Commander — 주문하기</h3>
<ul><li><b class="say">Je voudrais un café, s’il vous plaît.</b></li><li><b class="say">Pour moi, une salade.</b></li><li><b class="say">Je prends le menu à vingt-deux euros.</b></li><li><b class="say">Qu’est-ce que c’est, le croque-monsieur ?</b> (이게 뭐예요?)</li><li><b class="say">L’addition, s’il vous plaît !</b> (계산서 주세요)</li></ul>
<h3>Le pluriel — 복수</h3>
<table><tr><th>단수</th><th>복수</th></tr><tr><td class="say">un œuf, une tomate</td><td class="say">des œufs, des tomates</td></tr><tr><td class="say">le gâteau, la pomme</td><td class="say">les gâteaux, les pommes</td></tr></table>
<p>대부분 <b>-s</b>를 붙이지만 발음은 바뀌지 않아요. -eau → <b>-eaux</b>.</p>
<h3>Les pronoms toniques — 강세형 대명사</h3>
<table><tr><td class="say">moi</td><td class="say">toi</td><td class="say">lui / elle</td></tr><tr><td class="say">nous</td><td class="say">vous</td><td class="say">eux / elles</td></tr></table>
<p><b class="say">Moi, je prends le poulet. Et toi ?</b> — <b class="say">Pour lui, un café.</b> — <b class="say">Moi aussi ! / Moi non plus.</b></p>`},
{type:"dialogue",title:"Au café",ko:"카페에서",intro:"오후에 Emma와 친구들이 카페에 들러 음료를 마십니다. tu와 vous가 어떻게 쓰이는지 주목하세요.",lines:[
 {s:"Emma",g:"f",fr:"Ouf, quelle chaleur ! J’ai soif et je suis fatiguée.",ko:"휴, 너무 덥다! 목마르고 피곤해."},
 {s:"Hugo",g:"m",fr:"On s’assoit en terrasse ? Qu’est-ce que tu prends, Emma ?",ko:"테라스에 앉을까? 엠마, 뭐 마실래?"},
 {s:"Emma",g:"f",fr:"Je prends une limonade bien fraîche. Et toi ?",ko:"아주 시원한 레모네이드 마실래. 너는?"},
 {s:"Hugo",g:"m",fr:"Moi, un café. Lucie, tu prends un café aussi ?",ko:"나는 커피. 뤼시, 너도 커피 마실래?"},
 {s:"Lucie",g:"f",fr:"Non, pas de café. Je voudrais une glace à la fraise.",ko:"아니, 커피는 됐어. 딸기 아이스크림 먹고 싶어."},
 {s:"Serveuse",g:"f",fr:"Bonjour ! Qu’est-ce que vous prenez ?",ko:"안녕하세요! 뭘로 드릴까요?"},
 {s:"Hugo",g:"m",fr:"Une limonade, un café et une glace à la fraise, s’il vous plaît.",ko:"레모네이드 하나, 커피 하나, 딸기 아이스크림 하나 주세요."},
 {s:"Serveuse",g:"f",fr:"Désolée, nous n’avons plus de glace à la fraise. Il y a vanille, chocolat ou citron.",ko:"죄송해요, 딸기 아이스크림이 다 떨어졌어요. 바닐라, 초콜릿, 레몬이 있어요."},
 {s:"Lucie",g:"f",fr:"Alors, au chocolat, s’il vous plaît.",ko:"그럼 초콜릿으로 주세요."},
 {s:"Hugo",g:"m",fr:"C’est moi qui paie aujourd’hui !",ko:"오늘은 내가 낼게!"}]},
{type:"notes",title:"Tu ou vous ? Le verbe prendre",ko:"tu와 vous, 동사 prendre",html:`
<h3>Tu ou vous ?</h3>
<table><tr><th>tu</th><th>vous</th></tr><tr><td>친구, 가족, 아이, 같은 또래 학생</td><td>처음 만난 어른, 점원, 선생님, 직장 상사 (존칭) — 그리고 <b>여러 사람</b>에게 말할 때</td></tr>
<tr><td class="say">Tu prends un café ?</td><td class="say">Vous prenez un café, madame ?</td></tr></table>
<h3>Le verbe prendre — 먹다/마시다/타다/잡다</h3>
<table><tr><td class="say">je prends</td><td class="say">nous prenons</td></tr><tr><td class="say">tu prends</td><td class="say">vous prenez</td></tr><tr><td class="say">il / elle prend</td><td class="say">ils / elles prennent</td></tr></table>
<h3>à / de dans les noms de plats</h3>
<ul><li>맛·재료: <b class="say">une glace à la vanille, une tarte aux pommes, un sandwich au jambon</b></li><li>내용물·원료: <b class="say">un jus d’orange, une tasse de thé, une carafe d’eau</b></li></ul>`},
{type:"vocab",items:[["une entrée","전채"],["un plat","메인 요리"],["un dessert","디저트"],["une boisson","음료"],["le poisson","생선"],["le poulet","닭고기"],["les frites","감자튀김"],["un œuf","달걀"],["le fromage","치즈"],["les escargots","달팽이 요리"],["une carafe d’eau","물 한 병(무료 수돗물)"],["un jus de pomme","사과주스"],["une glace","아이스크림"],["l’addition","계산서"],["avoir soif","목마르다"],["avoir faim","배고프다"],["adorer","아주 좋아하다"],["détester","싫어하다"],["préférer","더 좋아하다"],["Qu’est-ce que c’est ?","이게 뭐예요?"]]},
{type:"ex",n:1,title:"La salade du jardin",inst:"웨이터가 설명한 샐러드 재료를 복수형으로 쓰세요.",en:"Complete with the ingredients in the plural.",kind:"fill",items:[
 {q:"C’est une salade verte avec des ___ (tomate),",a:["tomates"]},{q:"des ___ (radis) et des ___ (carotte),",a:["radis","carottes"]},{q:"et des ___ (œuf) durs.",a:["œufs|oeufs"]},
 {q:"Dans le menu, il y a des ___ (escargot) et des ___ (frite).",a:["escargots","frites"]},{q:"Pour le dessert, il y a des ___ (gâteau).",a:["gâteaux"]}]},
{type:"ex",n:2,title:"Vrai ou faux ?",inst:"대화 1을 다시 읽고 참/거짓을 고르세요. (정답 확인 시 수정된 문장이 보여요)",en:"True or false? Check the corrections.",kind:"tf",items:[
 {q:"Lucie n’aime pas les escargots.",a:true},{q:"Emma prend la soupe à l’oignon.",a:false,fix:"Emma prend la salade du jardin."},
 {q:"Hugo adore les escargots.",a:true},{q:"Emma n’aime pas le poisson.",a:false,fix:"Emma aime beaucoup le poisson."},
 {q:"Lucie prend le saumon.",a:false,fix:"Lucie prend le poulet avec des frites."},{q:"Ils prennent une bouteille de vin.",a:false,fix:"Ils prennent une carafe d’eau et du jus de pomme."}]},
{type:"ex",n:3,title:"J’aime… je n’aime pas…",inst:"이모티콘을 보고 취향을 말하는 문장을 쓰세요. (❤️❤️ adorer · ❤️ aimer beaucoup · 😖 ne pas aimer du tout · 💥 détester)",en:"Say what you like or dislike.",kind:"write",items:[
 {q:"❤️❤️ le chocolat",a:"J’adore le chocolat."},{q:"😖 le poisson",a:"Je n’aime pas du tout le poisson."},{q:"❤️ les tomates",a:"J’aime beaucoup les tomates."},
 {q:"💥 le café",a:"Je déteste le café."},{q:"❤️❤️ la pizza",a:"J’adore la pizza."},{q:"😖 les huîtres",a:"Je n’aime pas du tout les huîtres."}]},
{type:"ex",n:4,title:"Qu’est-ce que vous préférez ?",inst:"두 음식 중 앞의 것은 좋아하지만 뒤의 것을 더 좋아한다고 말하세요.",en:"Say you like the first but prefer the second.",example:"le thé / le café → J’aime le thé, mais je préfère le café.",kind:"write",items:[
 {q:"les escargots / les huîtres",a:"J’aime les escargots, mais je préfère les huîtres.|J'aime les escargots mais je préfère les huîtres"},
 {q:"le poulet / le poisson",a:"J’aime le poulet, mais je préfère le poisson."},{q:"la bière / le vin",a:"J’aime la bière, mais je préfère le vin."},
 {q:"les pommes / les fraises",a:"J’aime les pommes, mais je préfère les fraises."},{q:"le fromage / le dessert",a:"J’aime le fromage, mais je préfère le dessert."}]},
{type:"ex",n:5,title:"Qu’est-ce que c’est ?",inst:"모르는 요리에 대해 ‘Qu’est-ce que c’est, …?’로 물어보고, 알맞은 설명을 고르세요.",en:"Ask what these dishes are and pick the explanation.",kind:"choice",items:[
 {q:"Qu’est-ce que c’est, un croque-monsieur ?",o:["un sandwich chaud au jambon et au fromage","un poisson grillé","une glace à la vanille"],a:0},
 {q:"Qu’est-ce que c’est, une assiette de crudités ?",o:["des légumes crus en salade","de la viande crue","un dessert au chocolat"],a:0},
 {q:"Qu’est-ce que c’est, un steak tartare ?",o:["du bœuf cru haché","une tarte aux fruits","une soupe froide"],a:0},
 {q:"Qu’est-ce que c’est, une crème brûlée ?",o:["une entrée au fromage","un dessert à la vanille avec du sucre caramélisé","une boisson chaude"],a:1},
 {q:"Qu’est-ce que c’est, une quiche lorraine ?",o:["une tarte salée aux œufs, à la crème et aux lardons","un vin d’Alsace","une salade de fruits"],a:0}]},
{type:"ex",n:6,title:"Le verbe prendre",inst:"대화의 빈칸에 prendre의 알맞은 형태를 쓰세요.",en:"Fill in with the correct forms of prendre.",kind:"fill",items:[
 {q:"SERVEUR : Messieurs-dames, qu’est-ce que vous ___ ?",a:["prenez"]},{q:"CLARA : Je ___ un chocolat chaud, s’il vous plaît.",a:["prends"]},
 {q:"CLARA : Et toi, Théo, tu ___ un thé ?",a:["prends"]},{q:"THÉO : Non, nous ___ toujours un café le matin.",a:["prenons"]},
 {q:"SERVEUR : Et les enfants, ils ___ quelque chose ?",a:["prennent"]},{q:"CLARA : Oui, ma fille ___ un jus d’orange.",a:["prend"]}]},
{type:"ex",n:7,title:"Tu ou vous ?",inst:"상황에 맞는 표현을 고르세요.",en:"Choose the right form for each situation.",kind:"choice",items:[
 {q:"À ton meilleur ami :",o:["Tu prends un café ?","Vous prenez un café ?"],a:0},{q:"Au serveur que tu ne connais pas :",o:["Tu as une table pour deux ?","Vous avez une table pour deux ?"],a:1},
 {q:"À ta petite sœur :",o:["Tu aimes la glace ?","Vous aimez la glace ?"],a:0},{q:"À ton professeur :",o:["Tu travailles à Paris ?","Vous travaillez à Paris ?"],a:1},
 {q:"À deux amis en même temps :",o:["Tu venez ?","Vous venez ?"],a:1},{q:"Réponse à « Ça va, et toi ? » :",o:["Oui, et vous ?","Oui, et toi ?"],a:1}]},
{type:"ex",n:8,title:"à, au, aux, de, d’ ?",inst:"빈칸에 à, au, à la, aux, de, d’ 중 알맞은 것을 쓰세요.",en:"Fill in with à, au, à la, aux, de or d’.",kind:"fill",items:[
 {q:"un sirop ___ menthe",a:["à la"]},{q:"une glace ___ vanille",a:["à la"]},{q:"une tarte ___ pommes",a:["aux"]},{q:"un jus ___ orange",a:["d’|d'"]},
 {q:"une tasse ___ thé",a:["de"]},{q:"un sandwich ___ jambon",a:["au"]},{q:"une carafe ___ eau",a:["d’|d'"]},{q:"un gâteau ___ chocolat",a:["au"]}]}
]});
