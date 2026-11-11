FC.registerUnit({n:5,title:"Projets de vacances",ko:"휴가 계획 — 앞으로의 일 말하기",
goals:["aller + 동사원형 (근접미래)","on 과 nous","savoir / connaître","나라 이름 앞 en / au / aux","달·계절 앞 en / au","partir · rentrer + 날짜"],
sections:[
{type:"dialogue",title:"Projets de vacances",ko:"휴가 계획",intro:"Gérard와 Martine이 남은 휴가 동안 무엇을 할지 Emma에게 이야기합니다. 미래를 말하는 두 가지 형태(on va… / nous allons…)를 찾아보세요.",lines:[
 {s:"Emma",g:"f",fr:"Qu’est-ce que vous allez faire après Valmont ?",ko:"발몽 다음에는 뭐 하실 거예요?"},
 {s:"Gérard",g:"m",fr:"On va rentrer à Tours pour deux ou trois jours. Ensuite, on va louer un petit studio en Bretagne, près de Saint-Malo.",ko:"투르에 2~3일 돌아갈 거예요. 그다음에 생말로 근처 브르타뉴에 작은 원룸을 빌릴 거예요."},
 {s:"Martine",g:"f",fr:"Nous allons y passer tout le mois de juillet. J’adore la mer !",ko:"거기서 7월 한 달을 보낼 거예요. 저는 바다가 정말 좋아요!"},
 {s:"Emma",g:"f",fr:"La Bretagne, je ne connais pas. C’est beau ?",ko:"브르타뉴는 가 본 적이 없어요. 예뻐요?"},
 {s:"Gérard",g:"m",fr:"Magnifique ! Il y a des plages, des petits ports, des crêperies… Et vous, vous allez prendre des vacances cet été ?",ko:"아름다워요! 해변, 작은 항구, 크레프 가게들이 있어요… 엠마는 이번 여름에 휴가 가세요?"},
 {s:"Emma",g:"f",fr:"Oui, en août, je vais aller au Portugal avec ma sœur. Nous partons le 3 août et nous rentrons le 17.",ko:"네, 8월에 언니와 포르투갈에 갈 거예요. 8월 3일에 떠나서 17일에 돌아와요."},
 {s:"Martine",g:"f",fr:"Vous savez parler portugais ?",ko:"포르투갈어 할 줄 아세요?"},
 {s:"Emma",g:"f",fr:"Non, pas du tout ! Mais ma sœur connaît très bien Lisbonne.",ko:"아니요, 전혀요! 하지만 언니가 리스본을 아주 잘 알아요."},
 {s:"Gérard",g:"m",fr:"Et ce week-end ? On va visiter le château de Valmont. Vous venez avec nous ?",ko:"그럼 이번 주말은요? 우리는 발몽 성을 구경할 거예요. 같이 갈래요?"},
 {s:"Emma",g:"f",fr:"Merci, mais je vais louer une voiture et visiter la côte.",ko:"고마워요, 하지만 저는 차를 빌려서 해안을 둘러볼 거예요."}]},
{type:"notes",title:"Le futur proche, on, savoir / connaître",ko:"근접미래, on, savoir / connaître",html:`
<h3>Aller + infinitif — 곧 ~할 것이다</h3>
<p><b class="say">Je vais louer une voiture.</b> · <b class="say">Nous allons partir en août.</b> · 부정: <b class="say">Je ne vais pas travailler demain.</b></p>
<h3>On = nous (구어)</h3>
<p>일상 회화에서는 <b>nous</b> 대신 <b>on</b>을 많이 써요. 동사는 3인칭 단수(il)와 같은 형태!</p>
<p><b class="say">Nous allons à la plage. = On va à la plage.</b> · <b class="say">Nous partons demain. = On part demain.</b></p>
<h3>Savoir ou connaître ? — 둘 다 ‘알다’</h3>
<table><tr><th>savoir</th><th>connaître</th></tr><tr><td>사실·정보, <b>savoir + 동사원형</b> (~할 줄 알다)</td><td>사람·장소·작품을 (경험으로) 알다</td></tr>
<tr><td class="say">Je sais nager. Tu sais où est la gare ?</td><td class="say">Je connais Paris. Tu connais Lucie ?</td></tr>
<tr><td class="say">je sais, tu sais, il sait, nous savons, vous savez, ils savent</td><td class="say">je connais, tu connais, il connaît, nous connaissons, vous connaissez, ils connaissent</td></tr></table>
<h3>Pays, mois, saisons — 나라·달·계절 앞 전치사</h3>
<table><tr><td>여성 나라 (-e로 끝남)</td><td class="say">en France, en Italie, en Espagne, en Corée</td></tr>
<tr><td>남성 나라</td><td class="say">au Portugal, au Japon, au Canada, au Maroc</td></tr><tr><td>복수 나라</td><td class="say">aux États-Unis, aux Pays-Bas</td></tr><tr><td>도시</td><td class="say">à Lisbonne, à Tokyo</td></tr>
<tr><td>달</td><td class="say">en juillet, en août, en décembre</td></tr><tr><td>계절</td><td class="say">en été, en automne, en hiver — mais au printemps</td></tr></table>
<h3>Partir / rentrer + date</h3><p><b class="say">Je pars le 3 août et je rentre le 17.</b> · partir: je pars, tu pars, il part, nous partons, vous partez, ils partent</p>`},
{type:"dialogue",title:"Location de voitures",ko:"렌터카",intro:"Emma가 주말 동안 차를 빌리러 렌터카 회사에 갑니다.",lines:[
 {s:"Emma",g:"f",fr:"Bonjour, monsieur. Je voudrais louer une voiture pour le week-end, s’il vous plaît.",ko:"안녕하세요. 주말 동안 차를 빌리고 싶어요."},
 {s:"Employé",g:"m",fr:"Oui, madame. Quel modèle est-ce que vous voulez ? Une petite voiture ?",ko:"네. 어떤 차종을 원하세요? 소형차요?"},
 {s:"Emma",g:"f",fr:"Oui, une petite voiture, c’est parfait. C’est combien ?",ko:"네, 소형차면 딱 좋아요. 얼마예요?"},
 {s:"Employé",g:"m",fr:"C’est quarante-cinq euros par jour, avec l’assurance et le kilométrage illimité.",ko:"보험과 무제한 주행 포함해서 하루 45유로입니다."},
 {s:"Emma",g:"f",fr:"Et l’essence ?",ko:"기름값은요?"},
 {s:"Employé",g:"m",fr:"L’essence n’est pas comprise. Vous partez quand ?",ko:"기름값은 포함되어 있지 않아요. 언제 출발하세요?"},
 {s:"Emma",g:"f",fr:"Je pars samedi matin et je rentre dimanche soir.",ko:"토요일 아침에 출발해서 일요일 저녁에 돌아와요."},
 {s:"Employé",g:"m",fr:"Très bien. J’ai besoin de votre permis de conduire et de votre passeport.",ko:"좋습니다. 운전면허증과 여권이 필요합니다."},
 {s:"Emma",g:"f",fr:"Voilà. J’aimerais aussi un GPS, s’il vous plaît. Je ne connais pas la région.",ko:"여기요. 내비게이션도 있으면 좋겠어요. 이 지역을 잘 몰라서요."}]},
{type:"vocab",items:[["les vacances","휴가 (항상 복수)"],["louer","빌리다, 임대하다"],["un studio","원룸"],["la mer","바다"],["une plage","해변"],["la côte","해안"],["partir","떠나다"],["rentrer","돌아오다/가다"],["l’été","여름"],["l’hiver","겨울"],["le printemps","봄"],["l’automne","가을"],["je voudrais…","…하고 싶어요(공손)"],["j’aimerais…","…하면 좋겠어요"],["par jour","하루에"],["l’assurance","보험"],["l’essence","휘발유"],["compris","포함된"],["le permis de conduire","운전면허증"],["savoir / connaître","알다"]]},
{type:"ex",n:1,title:"Le futur proche",inst:"대화 1을 다시 읽고 aller + 동사원형으로 빈칸을 채우세요.",en:"Fill in the gaps with aller + infinitive.",kind:"fill",items:[
 {q:"Gérard et Martine ___ ___ deux ou trois jours à Tours. (passer)",a:["vont","passer"]},{q:"Ensuite, ils ___ ___ un petit studio en Bretagne. (louer)",a:["vont","louer"]},
 {q:"En août, Emma ___ ___ au Portugal. (aller)",a:["va","aller"]},{q:"Ce week-end, Gérard et Martine ___ ___ le château. (visiter)",a:["vont","visiter"]},
 {q:"Et nous, nous ___ ___ à la plage demain. (aller)",a:["allons","aller"]}]},
{type:"ex",n:2,title:"Vrai ou faux ?",inst:"참/거짓을 고르세요. 거짓 문장은 정답 확인 후 ne … pas로 고친 문장을 보세요.",en:"True or false? Correct with ne … pas.",kind:"tf",items:[
 {q:"Gérard et Martine vont rentrer à Tours.",a:true},{q:"Ils vont louer un studio en Provence.",a:false,fix:"Ils ne vont pas louer un studio en Provence, mais en Bretagne."},
 {q:"Emma connaît la Bretagne.",a:false,fix:"Emma ne connaît pas la Bretagne."},{q:"Emma sait parler portugais.",a:false,fix:"Emma ne sait pas parler portugais."},
 {q:"Emma va partir au Portugal avec sa sœur.",a:true},{q:"Emma va visiter le château ce week-end.",a:false,fix:"Emma ne va pas visiter le château ; elle va visiter la côte."}]},
{type:"ex",n:3,title:"en, au, aux, à, le ?",inst:"빈칸에 en, au, aux, à 중 알맞은 것을 쓰세요.",en:"Fill in the gaps (en, au, aux, à).",kind:"fill",items:[
 {q:"Marc est toujours en voyage ! Il va ___ Italie ___ hiver,",a:["en","en"]},{q:"normalement ___ janvier. ___ printemps, il préfère aller ___ Japon.",a:["en","Au","au"]},
 {q:"Il reste un mois ___ Tokyo. ___ été, il va ___ États-Unis",a:["à","En","aux"]},
 {q:"et ___ automne, il rentre ___ France, ___ Lyon.",a:["en","en","à"]},{q:"Et toi ? Tu vas ___ Portugal ou ___ Espagne ?",a:["au","en"]}]},
{type:"ex",n:4,title:"On…",inst:"on을 사용해 긍정으로 답하세요.",en:"Answer using on.",example:"Vous allez à Paris ? → Oui, on va à Paris.",kind:"write",items:[
 {q:"Vous allez à la plage ?",a:"Oui, on va à la plage."},{q:"Vous travaillez en France ?",a:"Oui, on travaille en France."},
 {q:"Vous partez en août ?",a:"Oui, on part en août."},{q:"Vous connaissez la Bretagne ?",a:"Oui, on connaît la Bretagne."},
 {q:"Vous allez louer une voiture ?",a:"Oui, on va louer une voiture."},{q:"Vous faites du vélo le dimanche ?",a:"Oui, on fait du vélo le dimanche."}]},
{type:"ex",n:5,title:"Je voudrais… j’aimerais…",inst:"단어를 순서대로 눌러 문장을 만드세요.",en:"Build the sentences.",kind:"order",items:[
 {w:"Je / voudrais / prendre / des / vacances / en / octobre",a:"Je voudrais prendre des vacances en octobre"},{w:"J’aimerais / louer / une / maison / au / Portugal",a:"J’aimerais louer une maison au Portugal"},
 {w:"Nous / voudrions / visiter / les / châteaux / de / la / Loire",a:"Nous voudrions visiter les châteaux de la Loire"},{w:"Tu / voudrais / aller / à / Londres / en / hiver / ?",a:"Tu voudrais aller à Londres en hiver ?"},
 {w:"Elle / aimerait / partir / au / printemps",a:"Elle aimerait partir au printemps"}]},
{type:"ex",n:6,title:"Je pars… je rentre…",inst:"올해 프랑스 여행 일정입니다. ‘Je pars le … et je rentre le …’ 형식으로 쓰세요 (숫자는 아라비아 숫자로).",en:"Say when you leave and come back.",example:"25/04 → 02/05 : Je pars le 25 avril et je rentre le 2 mai.",kind:"write",items:[
 {q:"12/02 → 19/02",a:"Je pars le 12 février et je rentre le 19 février.|Je pars le 12 février et je rentre le 19."},
 {q:"1/05 → 8/05",a:"Je pars le 1er mai et je rentre le 8 mai.|Je pars le premier mai et je rentre le 8 mai.|Je pars le 1er mai et je rentre le 8.|Je pars le 1 mai et je rentre le 8 mai."},
 {q:"30/06 → 14/07",a:"Je pars le 30 juin et je rentre le 14 juillet."},{q:"21/10 → 3/11",a:"Je pars le 21 octobre et je rentre le 3 novembre."},
 {q:"20/12 → 2/01",a:"Je pars le 20 décembre et je rentre le 2 janvier."}]},
{type:"ex",n:7,title:"Location de voitures",inst:"렌터카 요금표를 보고 질문에 답하세요.",en:"Read the rental information and answer.",
 html:"<b>AUTO-SOLEIL — Tarifs</b><table><tr><th>Catégorie</th><th>1 jour</th><th>3 jours</th><th>1 semaine</th></tr><tr><td>A — petite voiture</td><td>45 €</td><td>120 €</td><td>250 €</td></tr><tr><td>B — voiture familiale</td><td>70 €</td><td>190 €</td><td>390 €</td></tr></table>Assurance et kilométrage illimité compris. Essence non comprise. Âge minimum : 21 ans. Permis de conduire depuis 2 ans minimum.",kind:"choice",items:[
 {q:"Une petite voiture pour trois jours coûte…",o:["45 €","120 €","190 €"],a:1},{q:"Une voiture familiale pour une semaine coûte…",o:["250 €","390 €","190 €"],a:1},
 {q:"Est-ce que l’essence est comprise ?",o:["Oui","Non"],a:1},{q:"Est-ce que l’assurance est comprise ?",o:["Oui","Non"],a:0},
 {q:"Léa a 19 ans. Elle peut louer une voiture ?",o:["Oui","Non, l’âge minimum est 21 ans"],a:1}]},
{type:"ex",n:8,title:"Savoir ou connaître ? (bonus)",inst:"savoir 또는 connaître의 알맞은 형태를 쓰세요.",en:"Savoir or connaître?",kind:"fill",items:[
 {q:"Tu ___ nager ?",a:["sais"]},{q:"Vous ___ Marie ? C’est ma cousine.",a:["connaissez"]},{q:"Je ne ___ pas où est la gare.",a:["sais"]},
 {q:"Nous ___ bien la Bretagne.",a:["connaissons"]},{q:"Ils ___ jouer du piano.",a:["savent"]},{q:"Elle ___ un bon restaurant près d’ici.",a:["connaît"]}]}
]});
