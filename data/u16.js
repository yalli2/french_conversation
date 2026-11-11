(function(){
const PLAN=`<svg class="svgmap" viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" font-family="Noto Sans KR, sans-serif" font-size="13" font-weight="700">
<rect x="10" y="10" width="500" height="280" fill="#fff" stroke="#1d2f6f" stroke-width="3"/>
<text x="260" y="30" text-anchor="middle" fill="#55607a" font-size="12">1er étage</text>
<rect x="20" y="40" width="160" height="100" fill="#fde8ea" stroke="#999"/><text x="100" y="95" text-anchor="middle">🛏️ chambre 1</text>
<rect x="180" y="40" width="140" height="100" fill="#e8f4fb" stroke="#999"/><text x="250" y="95" text-anchor="middle">🛁 salle de bains</text>
<rect x="320" y="40" width="180" height="100" fill="#fde8ea" stroke="#999"/><text x="410" y="95" text-anchor="middle">🛏️ chambre 2</text>
<line x1="10" y1="150" x2="510" y2="150" stroke="#1d2f6f" stroke-width="3"/>
<text x="260" y="170" text-anchor="middle" fill="#55607a" font-size="12">rez-de-chaussée</text>
<rect x="20" y="180" width="160" height="100" fill="#fff6dc" stroke="#999"/><text x="100" y="235" text-anchor="middle">🍳 cuisine</text>
<rect x="180" y="180" width="140" height="100" fill="#eef3ea" stroke="#999"/><text x="250" y="225" text-anchor="middle">🚪 entrée</text><text x="250" y="245" text-anchor="middle" font-size="11">escalier</text>
<rect x="320" y="180" width="180" height="100" fill="#e8edfb" stroke="#999"/><text x="410" y="235" text-anchor="middle">🛋️ salon</text>
</svg>`;
FC.registerUnit({n:16,title:"On cherche une maison",ko:"집 구하기 — 의견 말하고 집 둘러보기",
goals:["관계대명사 qui, que, où","의견 말하기","quand + 미래","il y a (~전에) / dans (~후에)","위치 전치사","trop (de) / assez (de)"],
sections:[
{type:"dialogue",title:"On cherche",ko:"집을 찾고 있어요",intro:"Gérard와 Martine이 더 작은 집을 사려고 합니다. 미리 찾아본 매물들에 대해 이야기합니다.",lines:[
 {s:"Gérard",g:"m",fr:"Regarde celle-là : « Maison de caractère rénovée, cuisine équipée, jardin de 500 m² ». Qu’est-ce que tu en penses ?",ko:"이것 좀 봐: ‘개성 있는 리모델링 주택, 주방 설비 완비, 500㎡ 정원’. 어떻게 생각해?"},
 {s:"Martine",g:"f",fr:"Je trouve qu’elle est trop loin de la ville. Et un jardin de 500 m², c’est trop de travail pour nous.",ko:"시내에서 너무 먼 것 같아. 그리고 500㎡ 정원은 우리한테 일이 너무 많아."},
 {s:"Gérard",g:"m",fr:"Tu as raison. Et celle-ci ? C’est la maison que l’agence nous a proposée hier.",ko:"맞아. 그럼 이건? 어제 부동산에서 우리한테 추천한 집이야."},
 {s:"Martine",g:"f",fr:"Celle qui est près de la rivière ? À mon avis, elle est parfaite. Il y a deux chambres, et c’est le quartier où habite ma sœur.",ko:"강 근처에 있는 집? 내 생각엔 완벽해. 방이 두 개고, 언니가 사는 동네야."},
 {s:"Gérard",g:"m",fr:"Oui, mais il n’y a pas assez de place pour mon atelier.",ko:"응, 그런데 내 작업실을 위한 공간이 충분하지 않아."},
 {s:"Martine",g:"f",fr:"Il y a un garage ! Bon, on pourrait la visiter. Mme Garnier, l’agente immobilière, peut nous la montrer dans deux jours.",ko:"차고가 있잖아! 자, 한번 보러 가자. 부동산 중개인 가르니에 씨가 이틀 후에 보여 줄 수 있대."},
 {s:"Gérard",g:"m",fr:"D’accord. Et quand nous aurons vendu notre maison de Tours, nous chercherons un bon artisan pour les travaux.",ko:"좋아. 그리고 투르 집을 팔고 나면 공사할 좋은 기술자를 찾자."}]},
{type:"notes",title:"Qui, que, où — et donner son avis",ko:"관계대명사와 의견 말하기",html:`
<table><tr><th>관계대명사</th><th>역할</th><th>예</th></tr>
<tr><td><b>qui</b></td><td>주어 (뒤에 동사)</td><td class="say">C’est la maison qui est près de la rivière.</td></tr>
<tr><td><b>que / qu’</b></td><td>직접목적어 (뒤에 주어+동사)</td><td class="say">C’est la maison que l’agence nous a proposée.</td></tr>
<tr><td><b>où</b></td><td>장소·시간</td><td class="say">C’est le quartier où habite ma sœur.</td></tr></table>
<h3>Donner son opinion — 의견 말하기</h3>
<ul><li><b class="say">Je trouve que c’est trop cher.</b></li><li><b class="say">Je pense que c’est une bonne idée.</b></li><li><b class="say">À mon avis, elle est parfaite.</b></li><li><b class="say">Qu’est-ce que tu en penses ?</b></li><li><b class="say">Je suis d’accord / Je ne suis pas d’accord.</b></li><li><b class="say">C’est génial ! / C’est nul ! / Ce n’est pas mal.</b></li></ul>
<h3>Quand + futur</h3><p>프랑스어는 미래의 일에 대해 quand 뒤에도 <b>미래형</b>을 써요: <b class="say">Quand nous serons à la retraite, nous voyagerons.</b></p>`},
{type:"dialogue",title:"On visite",ko:"집 둘러보기",intro:"Mme Garnier를 통해 찾은 집을 보러 갑니다. 집주인인 은퇴한 여성 <b>Simone Lefèvre</b>가 맞이합니다.",lines:[
 {s:"Mme Lefèvre",g:"f",fr:"Bonjour ! Entrez, je vous en prie. Voici l’entrée. À gauche, il y a la cuisine, et à droite, le salon.",ko:"안녕하세요! 들어오세요. 여기가 현관이에요. 왼쪽에 부엌이, 오른쪽에 거실이 있어요."},
 {s:"Martine",g:"f",fr:"Oh, le salon est très lumineux ! Il y a une cheminée ?",ko:"와, 거실이 아주 밝네요! 벽난로도 있어요?"},
 {s:"Mme Lefèvre",g:"f",fr:"Oui, à côté de la fenêtre. Je l’ai fait installer il y a cinq ans.",ko:"네, 창문 옆에요. 5년 전에 설치했어요."},
 {s:"Gérard",g:"m",fr:"Et à l’étage ?",ko:"위층은요?"},
 {s:"Mme Lefèvre",g:"f",fr:"Il y a deux chambres et une salle de bains. La salle de bains est entre les deux chambres, juste au-dessus de l’entrée.",ko:"침실 두 개와 욕실 하나가 있어요. 욕실은 두 침실 사이, 현관 바로 위에 있어요."},
 {s:"Martine",g:"f",fr:"Pourquoi est-ce que vous vendez ? Elle est magnifique !",ko:"왜 파세요? 너무 멋진데요!"},
 {s:"Mme Lefèvre",g:"f",fr:"Elle est trop grande pour moi toute seule. Je vais m’installer chez ma fille, à Nantes, dans deux mois.",ko:"저 혼자 살기엔 너무 커서요. 두 달 후에 낭트에 사는 딸 집으로 들어가요."},
 {s:"Gérard",g:"m",fr:"Je comprends. Et le garage, il est où ?",ko:"이해해요. 차고는 어디 있어요?"},
 {s:"Mme Lefèvre",g:"f",fr:"Derrière la maison, au fond du jardin. Venez, je vais vous le montrer.",ko:"집 뒤, 정원 안쪽에 있어요. 오세요, 보여 드릴게요."}]},
{type:"notes",title:"Il y a, dans, prépositions, trop / assez",ko:"시간 표현과 위치 전치사",html:PLAN+`
<h3>Il y a / dans</h3><table><tr><td class="say">Je l’ai fait installer il y a cinq ans.</td><td>5년 <b>전에</b> (과거)</td></tr><tr><td class="say">Je vais déménager dans deux mois.</td><td>2달 <b>후에</b> (미래)</td></tr></table>
<h3>Les prépositions de lieu — 위치 전치사</h3>
<p><span class="say">sur</span> 위에 · <span class="say">sous</span> 아래에 · <span class="say">devant</span> 앞에 · <span class="say">derrière</span> 뒤에 · <span class="say">à côté de</span> 옆에 · <span class="say">entre … et …</span> 사이에 · <span class="say">en face de</span> 맞은편에 · <span class="say">au-dessus de</span> 바로 위에 · <span class="say">au-dessous de</span> 바로 아래에 · <span class="say">au fond de</span> 안쪽에 · <span class="say">à gauche de / à droite de</span></p>
<h3>Trop (de) / assez (de)</h3>
<p><b class="say">La maison est trop grande.</b> · <b class="say">Il y a trop de travail.</b> · <b class="say">Il n’y a pas assez de place.</b> · <b class="say">Elle est assez lumineuse.</b></p>`},
{type:"vocab",items:[["une maison","집"],["une agence immobilière","부동산 중개소"],["un agent immobilier","부동산 중개인"],["rénové(e)","리모델링한"],["équipé(e)","설비를 갖춘"],["un jardin","정원"],["une chambre","침실"],["le salon","거실"],["la cuisine","부엌"],["la salle de bains","욕실"],["une cheminée","벽난로"],["le garage","차고"],["à l’étage","위층에"],["déménager","이사하다"],["la place","공간"],["les travaux","공사"],["à mon avis","내 생각에는"],["Je trouve que…","…라고 생각해요"],["trop / assez","너무 / 충분히"],["il y a … / dans …","… 전에 / … 후에"]]},
{type:"ex",n:1,title:"Qui, que ou où ?",inst:"빈칸에 qui, que(qu’), où를 쓰세요.",en:"Fill in the gaps with qui, que or où.",kind:"fill",items:[
 {q:"— Vous connaissez Mme Garnier ? — Oui, c’est une femme ___ j’aime beaucoup.",a:["que"]},{q:"C’est elle ___ dirige la nouvelle agence immobilière.",a:["qui"]},
 {q:"L’agence est dans la rue ___ il y a la boulangerie.",a:["où"]},{q:"C’est la maison ___ nous avons visitée hier.",a:["que"]},
 {q:"Le monsieur ___ habite à côté est très gentil.",a:["qui"]},{q:"Tours est la ville ___ je suis né.",a:["où"]}]},
{type:"ex",n:2,title:"Une seule phrase",inst:"두 문장을 qui, que, où로 연결하세요.",en:"Combine the two sentences.",example:"Versailles est un château. Il se trouve près de Paris. → Versailles est un château qui se trouve près de Paris.",kind:"write",items:[
 {q:"J’ai une sœur. Elle habite à Nantes.",a:"J’ai une sœur qui habite à Nantes.|J'ai une soeur qui habite à Nantes"},{q:"C’est un film. J’adore ce film.",a:"C’est un film que j’adore."},
 {q:"Voici le restaurant. Nous avons dîné dans ce restaurant.",a:"Voici le restaurant où nous avons dîné."},{q:"C’est une maison. Elle a un grand jardin.",a:"C’est une maison qui a un grand jardin."},
 {q:"Paris est une ville. Je visite souvent cette ville.",a:"Paris est une ville que je visite souvent."}]},
{type:"ex",n:3,title:"Votre opinion",inst:"자연스러운 의견 표현을 고르세요.",en:"Give your views.",example:"l’énergie solaire → Je trouve que c’est bien.",kind:"choice",items:[
 {q:"Les voitures électriques ?",o:["Je trouve que c’est une bonne idée.","Je trouve que bonne idée.","Je pense c’est bien."],a:0},
 {q:"Les devoirs le week-end ?",o:["À mon avis, c’est trop.","À mon avis que c’est trop.","Mon avis, trop."],a:0},
 {q:"— Tu aimes ce film ? — Oui, ___",o:["je le trouve génial !","je trouve que génial.","il me pense bien."],a:0},
 {q:"Pour être d’accord :",o:["Je suis d’accord avec toi.","J’ai d’accord avec toi.","Je fais d’accord."],a:0},
 {q:"Pour demander l’opinion de quelqu’un :",o:["Qu’est-ce que tu en penses ?","Qu’est-ce que tu penses en ?","Tu penses quoi de en ?"],a:0}]},
{type:"ex",n:4,title:"Quand + futur",inst:"보기의 동사를 단순미래로 써서 문장을 완성하세요. (보기: avoir · être · aller · gagner)",en:"Finish the sentences with quand + future.",kind:"fill",items:[
 {q:"Il achètera une nouvelle maison quand il ___ assez d’argent.",a:["aura"]},{q:"Nadine visitera le Louvre quand elle ___ à Paris.",a:["ira|sera"]},
 {q:"Quand nous ___ un jardin, nous planterons des arbres fruitiers.",a:["aurons"]},{q:"Quand je ___ grand, je serai architecte.",a:["serai"]},
 {q:"Quand ils ___ au loto, ils feront le tour du monde.",a:["gagneront"]}]},
{type:"ex",n:5,title:"Dans ou il y a ?",inst:"dans 또는 il y a를 쓰세요.",en:"Fill in with dans or il y a.",kind:"fill",items:[
 {q:"Je suis prêt ___ cinq minutes.",a:["dans"]},{q:"Il est parti ___ une heure.",a:["il y a"]},{q:"___ vingt mille ans, il n’y avait pas de villes.",a:["Il y a"]},
 {q:"Mme Lefèvre va déménager ___ deux mois.",a:["dans"]},{q:"J’ai commencé le français ___ un an.",a:["il y a"]},{q:"Le train part ___ dix minutes : dépêche-toi !",a:["dans"]}]},
{type:"ex",n:6,title:"Où sont les pièces ?",inst:"집 평면도를 보고 알맞은 위치를 고르세요.",en:"Look at the plan and choose.",html:PLAN,kind:"choice",items:[
 {q:"La salle de bains est…",o:["entre les deux chambres","sous la cuisine","à côté du salon"],a:0},{q:"La salle de bains est ___ l’entrée.",o:["au-dessus de","au-dessous de","derrière"],a:0},
 {q:"La cuisine est ___ la chambre 1.",o:["au-dessous de","au-dessus de","en face de"],a:0},{q:"Le salon est…",o:["à gauche de l’entrée","à droite de l’entrée","au premier étage"],a:1},
 {q:"La chambre 2 est…",o:["au-dessus du salon","au-dessus de la cuisine","au rez-de-chaussée"],a:0}]},
{type:"ex",n:7,title:"Ils se plaignent !",inst:"프랑스 사람들은 불평을 잘하기로 유명하죠. assez (de) 또는 trop (de)를 쓰세요.",en:"Fill in with assez (de) or trop (de).",kind:"fill",items:[
 {q:"J’ai ___ travail et pas ___ vacances !",a:["trop de","assez de"]},{q:"Il y a ___ voitures en ville, c’est pollué.",a:["trop de"]},
 {q:"Ce café n’est pas ___ chaud.",a:["assez"]},{q:"Les loyers sont ___ chers à Paris.",a:["trop"]},{q:"Je n’ai pas ___ temps pour faire du sport.",a:["assez de"]}]},
{type:"ex",n:8,title:"Deux annonces",inst:"두 광고를 읽고, Gérard와 Martine(2명, 은퇴 준비, 정원 일은 조금만, 작업실 필요, 시내 근처 선호)에게 어떤 집이 맞는지 판단하세요.",en:"Read the two ads and give your opinion.",
 html:"<b>A —</b> Grande ferme à 25 km de la ville. 6 chambres, 3 salles de bains, terrain de 2 hectares, piscine. 520 000 €<br><br><b>B —</b> Maison de ville près de la rivière, à 5 minutes du centre. 2 chambres, salon avec cheminée, jardin de 150 m², garage. 280 000 €",kind:"choice",items:[
 {q:"La maison A a…",o:["trop de chambres pour eux","pas assez de chambres"],a:0},{q:"Le terrain de la maison A, c’est…",o:["trop de travail","pas assez grand"],a:0},
 {q:"La maison B est…",o:["trop loin du centre","assez près du centre"],a:1},{q:"Pour l’atelier de Gérard, la maison B a…",o:["un garage","une piscine"],a:0},
 {q:"À votre avis, quelle maison leur convient ?",o:["la maison A","la maison B"],a:1}]}
]});
})();
