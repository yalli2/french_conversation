FC.registerUnit({n:12,title:"Souvenirs",ko:"추억 — 옛날 이야기하기",
goals:["반과거(imparfait)","반과거 vs 복합과거","parce que / à cause de","비교: plus / moins / aussi / autant (de)","meilleur / mieux"],
sections:[
{type:"dialogue",title:"Nos toutes premières vacances",ko:"우리의 첫 번째 휴가",intro:"Gérard와 Martine이 주말여행을 떠납니다. 짙은 안개 속에서 운전하며 이야기를 나누는 장면입니다.",lines:[
 {s:"Martine",g:"f",fr:"Il y a vraiment beaucoup de brouillard. On pourrait peut-être s’arrêter dans un hôtel ?",ko:"안개가 정말 짙네. 호텔에서 좀 쉬어 갈까?"},
 {s:"Gérard",g:"m",fr:"Tu as raison. Tu te souviens de nos premières vacances ? Il faisait le même temps.",ko:"맞아. 우리 첫 휴가 기억나? 그때도 날씨가 똑같았잖아."},
 {s:"Martine",g:"f",fr:"Oh oui ! C’était en décembre, on avait vingt ans. On partait dans les Alpes avec la vieille voiture de ton père.",ko:"아 그럼! 12월이었고, 우리는 스무 살이었지. 네 아버지의 낡은 차를 타고 알프스로 가는 길이었어."},
 {s:"Gérard",g:"m",fr:"Elle n’avait pas de chauffage et il faisait moins cinq degrés !",ko:"난방도 안 되는 차였는데 영하 5도였지!"},
 {s:"Martine",g:"f",fr:"Et à cause du brouillard, on roulait à trente kilomètres à l’heure. Soudain, la voiture est tombée en panne.",ko:"그리고 안개 때문에 시속 30킬로로 달리고 있었는데, 갑자기 차가 고장 났어."},
 {s:"Gérard",g:"m",fr:"On a marché deux kilomètres dans la neige parce qu’il n’y avait pas de téléphone portable à l’époque !",ko:"그 시절엔 휴대전화가 없어서 눈 속을 2킬로나 걸었지!"},
 {s:"Martine",g:"f",fr:"Et on a trouvé une petite auberge. La patronne nous a préparé une soupe délicieuse.",ko:"그리고 작은 여관을 찾았어. 여주인이 맛있는 수프를 만들어 줬지."},
 {s:"Gérard",g:"m",fr:"C’était le meilleur repas de ma vie ! Regarde, il y a un hôtel là-bas. On s’arrête ?",ko:"내 인생 최고의 식사였어! 봐, 저기 호텔이 있다. 쉬어 갈까?"}]},
{type:"notes",title:"L’imparfait",ko:"반과거 — 과거의 배경·묘사·습관",html:`
<p>만드는 법: <b>nous 현재형</b>에서 -ons를 빼고 어미 <b>-ais, -ais, -ait, -ions, -iez, -aient</b> (예외: être → ét-)</p>
<table><tr><th>parler (nous parlons)</th><th>faire (nous faisons)</th><th>être</th></tr>
<tr><td class="say">je parlais</td><td class="say">je faisais</td><td class="say">j’étais</td></tr><tr><td class="say">tu parlais</td><td class="say">tu faisais</td><td class="say">tu étais</td></tr>
<tr><td class="say">il parlait</td><td class="say">il faisait</td><td class="say">il était</td></tr><tr><td class="say">nous parlions</td><td class="say">nous faisions</td><td class="say">nous étions</td></tr>
<tr><td class="say">vous parliez</td><td class="say">vous faisiez</td><td class="say">vous étiez</td></tr><tr><td class="say">ils parlaient</td><td class="say">ils faisaient</td><td class="say">ils étaient</td></tr></table>
<h3>Imparfait ou passé composé ?</h3>
<table><tr><th>반과거 (배경·진행·습관·묘사)</th><th>복합과거 (사건·완료된 행동)</th></tr>
<tr><td class="say">Il faisait froid. On roulait lentement.</td><td class="say">Soudain, la voiture est tombée en panne.</td></tr>
<tr><td class="say">Quand j’étais petit, je jouais au foot tous les jours.</td><td class="say">Un jour, je me suis cassé la jambe.</td></tr></table>
<h3>Parce que / à cause de — ~ 때문에</h3>
<p><b>parce que + 문장</b>: <b class="say">On a marché parce qu’il n’y avait pas de téléphone.</b><br><b>à cause de + 명사</b>: <b class="say">On roulait lentement à cause du brouillard.</b> (de + le = du)</p>`},
{type:"dialogue",title:"De bons souvenirs",ko:"좋은 추억",intro:"호텔 방에서 Gérard와 Martine이 TV 인터뷰를 봅니다. 90대 할아버지 <b>Henri Vidal</b>이 옛날과 오늘을 비교합니다.",lines:[
 {s:"Journaliste",g:"f",fr:"Monsieur Vidal, vous êtes né en 1932. Vous avez donc vu beaucoup de changements !",ko:"비달 씨, 1932년에 태어나셨으니 많은 변화를 보셨겠네요!"},
 {s:"Henri",g:"m",fr:"Oh oui ! Quand j’étais jeune, la vie était plus difficile. On travaillait plus et on avait moins de vacances.",ko:"그럼요! 젊었을 때는 삶이 더 힘들었어요. 일은 더 많이 하고 휴가는 더 적었죠."},
 {s:"Journaliste",g:"f",fr:"Vous partiez en vacances ?",ko:"휴가는 떠나셨어요?"},
 {s:"Henri",g:"m",fr:"Rarement. On allait chez mes grands-parents, à la campagne. On voyageait moins souvent et moins vite qu’aujourd’hui.",ko:"드물게요. 시골의 조부모님 댁에 갔어요. 요즘보다 덜 자주, 덜 빠르게 여행했죠."},
 {s:"Journaliste",g:"f",fr:"Est-ce que c’était mieux avant ?",ko:"예전이 더 좋았나요?"},
 {s:"Henri",g:"m",fr:"Pas forcément. Aujourd’hui, on vit plus longtemps et on soigne mieux les maladies. Mais avant, les gens se parlaient davantage.",ko:"꼭 그렇진 않아요. 요즘은 더 오래 살고 병도 더 잘 고치죠. 하지만 예전에는 사람들이 서로 더 많이 이야기했어요."},
 {s:"Journaliste",g:"f",fr:"Et la cuisine ?",ko:"음식은요?"},
 {s:"Henri",g:"m",fr:"Ah, la cuisine de ma mère était bien meilleure que les plats tout prêts du supermarché !",ko:"아, 우리 어머니 음식이 슈퍼마켓 완제품보다 훨씬 맛있었죠!"}]},
{type:"notes",title:"Comparer",ko:"비교하기 — 형용사·부사·명사·동사",html:`
<table><tr><th></th><th>더</th><th>덜</th><th>같게</th></tr>
<tr><td>형용사/부사</td><td class="say">plus difficile (que)</td><td class="say">moins vite (que)</td><td class="say">aussi souvent (que)</td></tr>
<tr><td>명사</td><td class="say">plus de vacances</td><td class="say">moins de travail</td><td class="say">autant de temps</td></tr>
<tr><td>동사</td><td class="say">on travaillait plus</td><td class="say">on mange moins</td><td class="say">je travaille autant</td></tr></table>
<div class="tip">💡 불규칙: <b>bon → meilleur</b> (형용사: <span class="say">un meilleur dessert</span>) / <b>bien → mieux</b> (부사: <span class="say">on soigne mieux</span>, <span class="say">c’est mieux</span>)</div>`},
{type:"vocab",items:[["un souvenir","추억"],["le brouillard","안개"],["s’arrêter","멈추다"],["se souvenir de","~을 기억하다"],["à l’époque","그 당시에"],["tomber en panne","고장 나다"],["rouler","(차가) 달리다"],["une auberge","여관"],["soudain","갑자기"],["quand j’étais petit(e)","어렸을 때"],["rarement","드물게"],["la campagne","시골"],["la vie","삶"],["avant / aujourd’hui","예전에 / 오늘날"],["parce que","~ 때문에 (+문장)"],["à cause de","~ 때문에 (+명사)"],["plus / moins","더 / 덜"],["autant (de)","같은 만큼"],["meilleur(e)","더 좋은"],["mieux","더 잘"]]},
{type:"ex",n:1,title:"L’imparfait",inst:"괄호 속 동사를 반과거로 쓰세요.",en:"Put the verbs in the imparfait.",kind:"fill",items:[
 {q:"Nous ___ (venir) de manger.",a:["venions"]},{q:"Il ___ (partir) en vacances tous les étés.",a:["partait"]},{q:"Quand j’ ___ (être) petit, j’ ___ (habiter) à la campagne.",a:["étais","habitais"]},
 {q:"Vous ___ (faire) du sport ?",a:["faisiez"]},{q:"Ils ___ (avoir) une vieille voiture.",a:["avaient"]},{q:"Tu ___ (prendre) le bus pour aller à l’école ?",a:["prenais"]},{q:"Il ___ (faire) très froid.",a:["faisait"]}]},
{type:"ex",n:2,title:"Imparfait ou passé composé ?",inst:"문맥에 맞게 반과거 또는 복합과거로 쓰세요.",en:"Imparfait or passé composé?",kind:"fill",items:[
 {q:"C’ ___ (être) en juin. Nous ___ (rentrer) de vacances.",a:["était","rentrions"]},{q:"Il ___ (faire) très chaud et nous ___ (rouler) sur l’autoroute.",a:["faisait","roulions"]},
 {q:"Soudain, un camion ___ (s’arrêter) devant nous.",a:["s’est arrêté|s'est arrêté"]},{q:"Mon mari ___ (freiner) très fort.",a:["a freiné"]},
 {q:"Heureusement, personne n’ ___ (être) blessé.",a:["a été"]},{q:"Nous ___ (avoir) très peur !",a:["avons eu"]}]},
{type:"ex",n:3,title:"Racontez leurs premières vacances",inst:"대화 1을 바탕으로 이야기를 완성하세요.",en:"Retell Gérard and Martine's first holiday.",kind:"fill",items:[
 {q:"C’ ___ en décembre. Gérard et Martine ___ vingt ans.",a:["était","avaient"]},{q:"Ils ___ dans les Alpes avec la voiture du père de Gérard.",a:["partaient"]},
 {q:"La voiture n’ ___ pas de chauffage et il ___ moins cinq degrés.",a:["avait","faisait"]},{q:"Soudain, la voiture ___ ___ en panne.",a:["est","tombée"]},
 {q:"Ils ___ marché deux kilomètres dans la neige.",a:["ont"]}]},
{type:"ex",n:4,title:"Parce que ou à cause de ?",inst:"원인을 연결하는 알맞은 표현을 고르세요.",en:"Link facts and causes.",kind:"choice",items:[
 {q:"Il est resté au lit toute la journée ___ la grippe.",o:["parce que","à cause de"],a:1},{q:"Elle est partie tôt ___ elle avait un rendez-vous chez un client.",o:["parce qu’","à cause de"],a:0},
 {q:"Le match a été annulé ___ la pluie.",o:["parce que","à cause de"],a:1},{q:"Nous sommes arrivés en retard ___ il y avait des embouteillages.",o:["parce qu’","à cause des"],a:0},
 {q:"L’avion n’a pas décollé ___ brouillard.",o:["parce que","à cause du"],a:1},{q:"Je ne suis pas sorti ___ j’étais fatigué.",o:["parce que","à cause de"],a:0}]},
{type:"ex",n:5,title:"Traduisez",inst:"비교 표현을 써서 번역하세요.",en:"Translate.",kind:"write",items:[
 {q:"Life is harder.",a:"La vie est plus difficile."},{q:"We travel more easily.",a:"Nous voyageons plus facilement.|On voyage plus facilement."},
 {q:"I work as quickly.",a:"Je travaille aussi vite.|Je travaille aussi rapidement."},{q:"My dessert is better.",a:"Mon dessert est meilleur."},
 {q:"I go on holiday less often.",a:"Je pars en vacances moins souvent.|Je vais en vacances moins souvent."},{q:"It’s better. (c’est…)",a:"C’est mieux."}]},
{type:"ex",n:6,title:"Plus, moins, autant (de)",inst:"plus, moins, autant, de 중 알맞게 쓰세요.",en:"Fill in the blanks.",kind:"fill",items:[
 {q:"Il a perdu 5 kilos. Il fait ___ sport et il mange ___ .",a:["plus de","moins"]},{q:"Il est beaucoup moins fatigué. Il travaille toujours ___ , mais il se repose un peu ___ .",a:["autant","plus"]},
 {q:"En ville, il y a ___ voitures qu’à la campagne.",a:["plus de"]},{q:"Mon frère et moi, nous avons ___ de livres : cent chacun !",a:["autant"]},
 {q:"Aujourd’hui, on écrit ___ lettres qu’avant : on envoie des messages !",a:["moins de"]}]},
{type:"ex",n:7,title:"Avant et maintenant",inst:"1950년대와 오늘날을 비교하는 문장을 고르세요.",en:"Compare life in the 1950s with today.",example:"Dans les années 50, on avait moins de vacances. Aujourd’hui, on a plus de temps libre.",kind:"choice",items:[
 {q:"la télévision",o:["Dans les années 50, peu de gens avaient la télévision.","Dans les années 50, on regardait plus la télévision qu’aujourd’hui."],a:0},
 {q:"les voyages",o:["Aujourd’hui, on voyage moins loin.","Aujourd’hui, on voyage plus souvent et plus loin."],a:1},
 {q:"le téléphone",o:["Avant, on écrivait plus de lettres.","Avant, on envoyait plus de SMS."],a:0},
 {q:"la santé",o:["Aujourd’hui, on vit plus longtemps.","Aujourd’hui, on vit moins longtemps."],a:0},
 {q:"le travail",o:["Dans les années 50, on travaillait moins d’heures.","Dans les années 50, on travaillait plus d’heures par semaine."],a:1}]},
{type:"ex",n:8,title:"Deux hôtels",inst:"두 호텔 광고를 비교해 알맞은 답을 고르세요.",en:"Compare the two hotel ads.",
 html:"<table><tr><th></th><th>Hôtel du Parc ★★★</th><th>Hôtel Raymond ★★</th></tr><tr><td>chambres</td><td>25</td><td>60</td></tr><tr><td>chambre simple</td><td>85 €</td><td>65 €</td></tr><tr><td>chambre double</td><td>110 €</td><td>80 €</td></tr><tr><td>petit-déjeuner</td><td>compris</td><td>12 €</td></tr><tr><td>distance du centre</td><td>2 km</td><td>200 m</td></tr><tr><td>piscine</td><td>oui</td><td>non</td></tr></table>",kind:"choice",items:[
 {q:"Quel hôtel est le plus grand ?",o:["l’hôtel du Parc","l’hôtel Raymond"],a:1},{q:"L’hôtel Raymond est…",o:["plus cher que l’hôtel du Parc","moins cher que l’hôtel du Parc"],a:1},
 {q:"Quel hôtel est plus près du centre ?",o:["l’hôtel du Parc","l’hôtel Raymond"],a:1},{q:"À l’hôtel du Parc, le petit-déjeuner…",o:["est compris","coûte 12 €"],a:0},
 {q:"Pour nager, il vaut mieux choisir…",o:["l’hôtel du Parc","l’hôtel Raymond"],a:0},{q:"L’hôtel du Parc a ___ chambres que l’hôtel Raymond.",o:["plus de","moins de","autant de"],a:1}]}
]});
