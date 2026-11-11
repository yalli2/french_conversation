FC.registerUnit({n:7,title:"Planifier un voyage d’affaires",ko:"출장 계획하기 — 기차 예약과 비교",
goals:["savoir, pouvoir, vouloir, devoir","24시간제 시각","비교하기 (plus / moins / aussi … que)","형용사의 위치와 일치","est-ce que 의문문"],
sections:[
{type:"dialogue",title:"Lyon – Paris",ko:"리옹 – 파리",intro:"몇 달 뒤, 리옹에 있는 Emma가 파리 출장을 계획합니다. 여행사에 전화를 겁니다.",lines:[
 {s:"Agent",g:"m",fr:"Agence Horizon, bonjour !",ko:"오리종 여행사입니다, 안녕하세요!"},
 {s:"Emma",g:"f",fr:"Bonjour, monsieur. Je dois aller à Paris jeudi prochain pour une réunion. Est-ce que vous pouvez m’aider ?",ko:"안녕하세요. 다음 주 목요일에 회의 때문에 파리에 가야 해요. 도와주실 수 있나요?"},
 {s:"Agent",g:"m",fr:"Bien sûr. Vous voulez prendre l’avion ou le train ?",ko:"물론이죠. 비행기를 타시겠어요, 기차를 타시겠어요?"},
 {s:"Emma",g:"f",fr:"Je ne sais pas. Qu’est-ce qui est le plus pratique ?",ko:"모르겠어요. 뭐가 더 편해요?"},
 {s:"Agent",g:"m",fr:"Le TGV, sans hésiter. Il est aussi rapide que l’avion, et il est moins cher. En plus, il arrive au centre de Paris.",ko:"망설일 것 없이 TGV죠. 비행기만큼 빠르고 더 싸요. 게다가 파리 중심가에 도착해요."},
 {s:"Emma",g:"f",fr:"Parfait. Ma réunion commence à quatorze heures. À quelle heure est-ce qu’il y a un train ?",ko:"좋아요. 회의는 14시에 시작해요. 몇 시에 기차가 있나요?"},
 {s:"Agent",g:"m",fr:"Il y a un TGV direct à 9 h 04, qui arrive à Paris-Gare de Lyon à 11 h 02. Il y a aussi un train à 9 h 34, mais il est plus long : vous devez changer à Dijon.",ko:"9시 4분에 직행 TGV가 있고 파리 리옹역에 11시 2분에 도착해요. 9시 34분 기차도 있지만 디종에서 갈아타야 해서 더 오래 걸려요."},
 {s:"Emma",g:"f",fr:"Je préfère le train direct. Le billet coûte combien ?",ko:"직행이 좋겠어요. 표는 얼마예요?"},
 {s:"Agent",g:"m",fr:"Soixante-huit euros en seconde classe. Vous voulez un aller-retour ?",ko:"2등석은 68유로입니다. 왕복으로 하시겠어요?"},
 {s:"Emma",g:"f",fr:"Non, un aller simple. Je vais rester à Paris pour le week-end.",ko:"아니요, 편도로요. 주말 동안 파리에 머물 거예요."}]},
{type:"notes",title:"Savoir, pouvoir, vouloir, devoir",ko:"조동사처럼 쓰는 동사 + 동사원형",html:`
<table><tr><th></th><th>savoir (알다/할 줄 알다)</th><th>pouvoir (할 수 있다)</th><th>vouloir (원하다)</th><th>devoir (해야 하다)</th></tr>
<tr><td>je</td><td class="say">sais</td><td class="say">peux</td><td class="say">veux</td><td class="say">dois</td></tr>
<tr><td>tu</td><td class="say">sais</td><td class="say">peux</td><td class="say">veux</td><td class="say">dois</td></tr>
<tr><td>il/elle/on</td><td class="say">sait</td><td class="say">peut</td><td class="say">veut</td><td class="say">doit</td></tr>
<tr><td>nous</td><td class="say">savons</td><td class="say">pouvons</td><td class="say">voulons</td><td class="say">devons</td></tr>
<tr><td>vous</td><td class="say">savez</td><td class="say">pouvez</td><td class="say">voulez</td><td class="say">devez</td></tr>
<tr><td>ils/elles</td><td class="say">savent</td><td class="say">peuvent</td><td class="say">veulent</td><td class="say">doivent</td></tr></table>
<p><b class="say">Je sais nager.</b> (능력: 배워서 앎) · <b class="say">Je ne peux pas nager aujourd’hui, j’ai mal au bras.</b> (가능성) · <b class="say">Tu veux venir ?</b> · <b class="say">Je dois partir.</b></p>
<h3>L’heure officielle (24 h) — 24시간제</h3>
<p>기차·비행기·TV 시간표는 24시간제: <b class="say" data-say="neuf heures quatre">9 h 04</b> · <b class="say" data-say="quatorze heures">14 h 00</b> · <b class="say" data-say="dix-huit heures trente">18 h 30</b> · <b class="say" data-say="vingt-trois heures quarante-cinq">23 h 45</b></p>
<h3>La comparaison — 비교</h3>
<table><tr><td>더 ~한</td><td class="say">Le train est plus pratique que l’avion.</td></tr><tr><td>덜 ~한</td><td class="say">Le train est moins cher que l’avion.</td></tr><tr><td>만큼 ~한</td><td class="say">Le TGV est aussi rapide que l’avion.</td></tr><tr><td>예외</td><td class="say">bon → meilleur : Ce café est meilleur.</td></tr></table>`},
{type:"dialogue",title:"Projets de week-end",ko:"주말 계획",intro:"Emma는 출장에 즐거움도 더하려고 합니다. 파리에 사는 친구 <b>Nadia</b>에게 전화합니다.",lines:[
 {s:"Nadia",g:"f",fr:"Allô ?",ko:"여보세요?"},
 {s:"Emma",g:"f",fr:"Salut Nadia, c’est Emma ! Je viens à Paris jeudi. Est-ce que tu es libre ce week-end ?",ko:"안녕 나디아, 엠마야! 목요일에 파리에 가. 이번 주말에 시간 있어?"},
 {s:"Nadia",g:"f",fr:"Super ! Oui, je suis libre. Tu veux dormir chez moi ? J’ai un nouvel appartement, petit mais très lumineux.",ko:"좋아! 응, 시간 있어. 우리 집에서 잘래? 새 아파트로 이사했는데 작지만 아주 밝아."},
 {s:"Emma",g:"f",fr:"Avec plaisir ! Il est où, ton appartement ?",ko:"좋지! 네 아파트 어디야?"},
 {s:"Nadia",g:"f",fr:"Dans le Marais, dans une vieille rue très jolie. Tu arrives à quelle heure ?",ko:"마레 지구, 아주 예쁜 오래된 거리에 있어. 몇 시에 도착해?"},
 {s:"Emma",g:"f",fr:"Ma réunion finit vers dix-huit heures. Je peux être chez toi à dix-neuf heures trente.",ko:"회의가 18시쯤 끝나. 19시 30분에 너희 집에 갈 수 있어."},
 {s:"Nadia",g:"f",fr:"Parfait. Samedi, on peut aller voir une belle exposition au Grand Palais. Et dimanche, il y a un grand marché aux puces.",ko:"좋아. 토요일엔 그랑 팔레에 멋진 전시 보러 갈 수 있고, 일요일엔 큰 벼룩시장이 있어."},
 {s:"Emma",g:"f",fr:"Génial ! À jeudi, alors !",ko:"최고야! 그럼 목요일에 봐!"}]},
{type:"notes",title:"Les adjectifs et les questions",ko:"형용사의 위치·일치와 질문하는 법",html:`
<h3>Place des adjectifs — 형용사 위치</h3>
<p>대부분 명사 <b>뒤</b>: <b class="say">un appartement lumineux, une voiture anglaise</b>. 짧고 자주 쓰는 형용사는 명사 <b>앞</b>: <b>grand, petit, beau, joli, bon, mauvais, nouveau, vieux, jeune</b> — <b class="say">un petit appartement, une jolie rue</b>.</p>
<table><tr><th>남성</th><th>남성 (모음 앞)</th><th>여성</th></tr><tr><td class="say">beau</td><td class="say">bel</td><td class="say">belle</td></tr><tr><td class="say">nouveau</td><td class="say">nouvel</td><td class="say">nouvelle</td></tr><tr><td class="say">vieux</td><td class="say">vieil</td><td class="say">vieille</td></tr></table>
<p><b class="say">un nouvel appartement, une belle exposition, un vieil ami</b></p>
<h3>Trois façons de poser une question</h3>
<table><tr><td>억양</td><td class="say">Tu arrives quand ?</td></tr><tr><td>est-ce que</td><td class="say">Quand est-ce que tu arrives ?</td></tr><tr><td>도치 (격식)</td><td class="say">Quand arrives-tu ?</td></tr></table>
<p>의문사: <b>où</b> (어디), <b>quand</b> (언제), <b>à quelle heure</b> (몇 시에), <b>comment</b> (어떻게), <b>combien</b> (얼마나), <b>pourquoi</b> (왜), <b>qu’est-ce que</b> (무엇을)</p>`},
{type:"vocab",items:[["un voyage d’affaires","출장"],["une réunion","회의"],["le TGV","고속열차"],["un billet","표"],["un aller simple","편도"],["un aller-retour","왕복"],["changer à…","…에서 갈아타다"],["direct","직행의"],["rapide","빠른"],["cher","비싼"],["pratique","편리한"],["la seconde classe","2등석"],["libre","한가한, 비어 있는"],["lumineux","밝은"],["une exposition","전시회"],["un marché aux puces","벼룩시장"],["Allô ?","여보세요?"],["avec plaisir","기꺼이"],["vers 18 h","18시쯤"],["À jeudi !","목요일에 봐!"]]},
{type:"ex",n:1,title:"Un enfant de trois ans…",inst:"세 살 아이에 대한 문장입니다. 참/거짓을 고르세요.",en:"True or false? A three-year-old child…",kind:"tf",items:[
 {q:"… sait conduire une voiture.",a:false,fix:"Il ne sait pas conduire."},{q:"… peut regarder des dessins animés.",a:true},{q:"… doit aller au lit tôt.",a:true},
 {q:"… sait lire le journal.",a:false,fix:"Il ne sait pas lire le journal."},{q:"… veut souvent jouer.",a:true},{q:"… peut voyager seul en avion.",a:false,fix:"Il ne peut pas voyager seul."}]},
{type:"ex",n:2,title:"Désolé, je dois…",inst:"초대를 받았지만 갈 수 없어요. devoir를 사용해 핑계를 대세요.",en:"Make excuses using devoir.",example:"Vous voulez jouer au golf demain ? (aller à Paris) → Je ne peux pas. Je dois aller à Paris.",kind:"write",items:[
 {q:"Tu veux aller au cinéma ce soir ? (travailler)",a:"Je ne peux pas. Je dois travailler.|Désolé, je ne peux pas. Je dois travailler.|Désolée, je ne peux pas, je dois travailler."},
 {q:"Vous voulez dîner avec nous samedi ? (rendre visite à ma grand-mère)",a:"Je ne peux pas. Je dois rendre visite à ma grand-mère.|Désolé, je ne peux pas. Je dois rendre visite à ma grand-mère."},
 {q:"Tu veux faire du vélo dimanche ? (réviser mes examens)",a:"Je ne peux pas. Je dois réviser mes examens.|Désolé, je ne peux pas. Je dois réviser mes examens."},
 {q:"Vous voulez prendre un café ? (partir à la gare)",a:"Je ne peux pas. Je dois partir à la gare.|Désolé, je ne peux pas. Je dois partir à la gare."},
 {q:"Tu veux venir à la plage ? (garder mon petit frère)",a:"Je ne peux pas. Je dois garder mon petit frère.|Désolé, je ne peux pas. Je dois garder mon petit frère."}]},
{type:"ex",n:3,title:"L’horaire des trains",inst:"▶ 안내 방송의 시각을 듣고 시간표에서 맞는 시각을 고르세요.",en:"Listen to the times and choose.",
 html:"<table><tr><th>TGV n°</th><th>6604</th><th>6612</th><th>6620</th></tr><tr><td>Lyon Part-Dieu</td><td>09:04</td><td>12:34</td><td>17:56</td></tr><tr><td>Dijon</td><td>—</td><td>14:15</td><td>—</td></tr><tr><td>Paris Gare de Lyon</td><td>11:02</td><td>15:47</td><td>19:58</td></tr></table>",kind:"choice",items:[
 {say:"Le TGV six mille six cent quatre part de Lyon à neuf heures quatre.",o:["9:04","9:14","19:04"],a:0},{say:"Il arrive à Paris à onze heures deux.",o:["11:12","11:02","12:02"],a:1},
 {say:"Le train de midi part à douze heures trente-quatre.",o:["12:24","2:34","12:34"],a:2},{say:"Il arrive à Dijon à quatorze heures quinze.",o:["14:15","4:15","14:50"],a:0},
 {say:"Le dernier TGV part à dix-sept heures cinquante-six.",o:["17:46","17:56","7:56"],a:1},{say:"Il arrive à Paris à dix-neuf heures cinquante-huit.",o:["19:58","9:58","19:48"],a:0}]},
{type:"ex",n:4,title:"Corrigez !",inst:"대화 1에 따르면 다음 문장들은 틀렸어요. 맞는 비교 문장을 고르세요.",en:"Choose the correct comparison.",kind:"choice",items:[
 {q:"« L’avion est moins cher que le train. »",o:["L’avion est plus cher que le train.","L’avion est aussi cher que le train."],a:0},
 {q:"« Le train de 9 h 34 est aussi rapide que le train de 9 h 04. »",o:["Le train de 9 h 34 est moins rapide que le train de 9 h 04.","Le train de 9 h 34 est plus rapide."],a:0},
 {q:"« Le TGV est plus lent que l’avion. »",o:["Le TGV est aussi rapide que l’avion.","Le TGV est moins rapide que la voiture."],a:0},
 {q:"« L’avion est plus pratique que le TGV. »",o:["Le TGV est plus pratique que l’avion.","L’avion est aussi pratique que le TGV."],a:0},
 {q:"« Le train direct est plus long. »",o:["Le train direct est moins long / plus court.","Le train direct est aussi long."],a:0}]},
{type:"ex",n:5,title:"Quel adjectif ?",inst:"괄호 안에서 문장에 맞는 형용사 형태를 고르세요.",en:"Choose the adjective form that fits.",kind:"choice",items:[
 {q:"Ils ont une voiture ___ .",o:["nouveau","anglaise","grande"],a:1,ex:"grande는 명사 앞에 와야 해요: une grande voiture"},{q:"C’est un ___ hôtel.",o:["bel","beau","belle"],a:0},
 {q:"Nadia a un ___ appartement.",o:["nouveau","nouvel","nouvelle"],a:1},{q:"Elle habite dans une ___ rue.",o:["vieux","vieil","vieille"],a:2},
 {q:"C’est une exposition ___ .",o:["intéressante","intéressant","intéressants"],a:0},{q:"Mes amis sont très ___ .",o:["sympathique","sympathiques","sympathiquee"],a:1}]},
{type:"ex",n:6,title:"Posez la question",inst:"대답을 보고 질문을 만드세요. est-ce que를 쓰거나 억양 의문문으로 써도 돼요 (tu 사용).",en:"Write the question for each answer.",example:"Je rentre à Paris vendredi. → Tu rentres à Paris quand ? / Quand est-ce que tu rentres à Paris ?",kind:"write",items:[
 {q:"J’arrive à 19 h 30.",a:"Tu arrives à quelle heure ?|À quelle heure est-ce que tu arrives ?|À quelle heure tu arrives ?|À quelle heure arrives-tu ?"},
 {q:"J’habite dans le Marais.",a:"Tu habites où ?|Où est-ce que tu habites ?|Où habites-tu ?|Où tu habites ?"},
 {q:"Je pars lundi.",a:"Tu pars quand ?|Quand est-ce que tu pars ?|Quand pars-tu ?|Quand tu pars ?"},
 {q:"Le billet coûte 68 euros.",a:"Le billet coûte combien ?|Combien est-ce que le billet coûte ?|Combien coûte le billet ?"},
 {q:"Oui, je suis libre samedi.",a:"Tu es libre samedi ?|Est-ce que tu es libre samedi ?|Es-tu libre samedi ?"}]},
{type:"ex",n:7,title:"Lyon – Nice",inst:"리옹에서 니스로 가려고 해요. est-ce que를 사용한 질문을 완성하세요.",en:"Prepare questions with est-ce que.",kind:"fill",items:[
 {q:"À quelle heure ___ ___ le train part pour Nice ?",a:["est-ce","que"]},{q:"À quelle heure est-ce ___ il arrive à Nice ?",a:["qu’|qu'"]},
 {q:"___ je dois changer de train ? — Oui, à Marseille.",a:["Est-ce que"]},
 {q:"Où est-ce que je ___ changer ? (devoir)",a:["dois"]},{q:"Combien est-ce ___ coûte un aller-retour ?",a:["que"]}]}
]});
