(function(){
const PMAP=`<svg class="svgmap" viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg" font-family="Noto Sans KR, sans-serif" font-size="13">
<rect width="520" height="380" fill="#f3f6fb"/>
<ellipse cx="260" cy="190" rx="230" ry="165" fill="#e7eefc" stroke="#9fb0de"/>
<path d="M30 230 C120 200, 180 160, 250 185 S 380 230, 490 150" fill="none" stroke="#5b8bd6" stroke-width="10" stroke-linecap="round"/>
<text x="420" y="160" fill="#3a6ab8" font-style="italic">la Seine</text>
<g font-weight="700">
<circle cx="260" cy="60" r="7" fill="#d62839"/><text x="272" y="64">Montmartre · Sacré-Cœur</text>
<circle cx="250" cy="185" r="7" fill="#1d2f6f"/><text x="262" y="205">Notre-Dame · île de la Cité</text>
<circle cx="245" cy="225" r="6" fill="#1d2f6f"/><text x="150" y="250">Quartier latin</text>
<circle cx="215" cy="305" r="7" fill="#d62839"/><text x="227" y="309">Montparnasse</text>
<circle cx="95" cy="200" r="7" fill="#d62839"/><text x="40" y="180">tour Eiffel</text>
<circle cx="140" cy="110" r="7" fill="#1d2f6f"/><text x="60" y="95">Arc de Triomphe</text>
<circle cx="205" cy="160" r="6" fill="#1d2f6f"/><text x="150" y="145">Louvre</text>
<circle cx="330" cy="165" r="6" fill="#1d2f6f"/><text x="340" y="130">le Marais</text>
<circle cx="440" cy="250" r="7" fill="#d62839"/><text x="380" y="285">bois de Vincennes</text>
<circle cx="200" cy="190" r="5" fill="#1d2f6f"/><text x="120" y="222" font-size="11">musée d’Orsay</text>
</g>
<text x="490" y="30" font-weight="800">N ↑</text>
</svg>`;
FC.registerUnit({n:10,title:"À Paris",ko:"파리에서 — 제안하기, 날씨, 위치 말하기",
goals:["제안하고 선호 말하기","대명사 y","날씨 표현","장소의 위치 말하기","on 활용 (일반 주어)"],
sections:[
{type:"dialogue",title:"Visiter Paris",ko:"파리 구경",intro:"Nadia와 Emma가 파리의 카페 테라스에 앉아 오후에 무엇을 할지 이야기합니다.",lines:[
 {s:"Nadia",g:"f",fr:"On pourrait visiter le musée d’Orsay cet après-midi. Qu’est-ce que tu en penses ?",ko:"오늘 오후에 오르세 미술관에 가 볼 수도 있겠다. 어떻게 생각해?"},
 {s:"Emma",g:"f",fr:"Bof… Il fait si beau ! Je préférerais rester dehors. On pourrait plutôt faire une promenade en bateau sur la Seine ?",ko:"글쎄… 날씨가 너무 좋잖아! 밖에 있는 게 더 좋겠어. 차라리 센강 유람선을 타 보는 건 어때?"},
 {s:"Nadia",g:"f",fr:"Bonne idée. Les bateaux partent du pont de l’Alma. On y va en métro ?",ko:"좋은 생각이야. 배는 알마 다리에서 출발해. 거기 지하철로 갈까?"},
 {s:"Emma",g:"f",fr:"Oui. Et ensuite, je voudrais monter à la tour Eiffel. Tu y es déjà allée ?",ko:"응. 그리고 나서 에펠탑에 올라가고 싶어. 너 거기 가 봤어?"},
 {s:"Nadia",g:"f",fr:"Une fois, il y a longtemps ! Mais attention, la météo annonce de l’orage ce soir.",ko:"오래전에 한 번! 그런데 조심해, 일기예보에서 오늘 저녁에 뇌우가 온대."},
 {s:"Emma",g:"f",fr:"Ce n’est pas grave. Hier, il a plu toute la journée à Lyon. Aujourd’hui, il fait vingt-quatre degrés : profitons-en !",ko:"괜찮아. 어제 리옹에선 하루 종일 비가 왔어. 오늘은 24도야. 즐기자!"},
 {s:"Nadia",g:"f",fr:"D’accord ! Et demain, s’il pleut, on ira au musée.",ko:"좋아! 그리고 내일 비가 오면 미술관에 가자."}]},
{type:"notes",title:"Suggérer, préférer, y, la météo",ko:"제안·선호, 대명사 y, 날씨",html:`
<h3>Faire une suggestion — 제안하기</h3>
<ul><li><b class="say">On pourrait aller au cinéma.</b> ~할 수도 있겠다 (pouvoir 조건법)</li><li><b class="say">Si on allait au parc ?</b> ~하는 게 어때?</li><li><b class="say">Tu veux visiter le Louvre ?</b></li></ul>
<h3>Préférer — 선호 말하기</h3><p><b class="say">Je préférerais rester dehors.</b> · <b class="say">J’aimerais mieux aller à la plage.</b> · <b class="say">Bonne idée ! / Pourquoi pas ? / Bof…</b></p>
<h3>Le pronom y — 장소 대명사 (거기에)</h3><p>à / en / dans / chez + 장소를 대신해요. 동사 앞에 놓아요.</p>
<ul><li><b class="say">Tu vas à Paris ? — Oui, j’y vais demain.</b></li><li><b class="say">Tu es allé à la tour Eiffel ? — Oui, j’y suis allé.</b></li><li><b class="say">Non, je n’y vais pas.</b></li><li>근접미래: <b class="say">Je vais y aller.</b></li></ul>
<h3>Le temps qu’il fait — 날씨</h3>
<table><tr><th>오늘</th><th>어제 (복합과거/반과거)</th></tr>
<tr><td class="say">Il fait beau. ☀️</td><td class="say">Il a fait beau.</td></tr><tr><td class="say">Il fait chaud / froid.</td><td class="say">Il a fait chaud.</td></tr>
<tr><td class="say">Il pleut. 🌧️</td><td class="say">Il a plu.</td></tr><tr><td class="say">Il neige. ❄️</td><td class="say">Il a neigé.</td></tr>
<tr><td class="say">Il y a du vent. 🌬️</td><td class="say">Il y a eu du vent.</td></tr><tr><td class="say">Il y a du soleil / des nuages / de l’orage.</td><td class="say">Il y a eu de l’orage.</td></tr>
<tr><td class="say">Il fait vingt-quatre degrés.</td><td class="say">Il a fait dix degrés.</td></tr></table>`},
{type:"dialogue",title:"Où est-ce que ça se trouve ?",ko:"그건 어디에 있어?",intro:"Nadia와 Emma가 노트르담 근처 라탱 지구에서 식사하며 파리의 명소에 대해 이야기합니다.",lines:[
 {s:"Emma",g:"f",fr:"Il est super, ce quartier ! On est où exactement ?",ko:"이 동네 최고다! 정확히 여기가 어디야?"},
 {s:"Nadia",g:"f",fr:"On est dans le Quartier latin, au sud de la Seine. C’est le quartier des étudiants : la Sorbonne se trouve tout près.",ko:"센강 남쪽 라탱 지구야. 학생들의 동네지. 소르본 대학이 바로 근처에 있어."},
 {s:"Emma",g:"f",fr:"Et Montmartre, c’est loin d’ici ?",ko:"그럼 몽마르트르는 여기서 멀어?"},
 {s:"Nadia",g:"f",fr:"Assez loin. C’est au nord de Paris, sur une colline. On peut y aller en métro en vingt minutes.",ko:"꽤 멀어. 파리 북쪽 언덕 위에 있어. 지하철로 20분이면 갈 수 있어."},
 {s:"Emma",g:"f",fr:"Qu’est-ce qu’on peut faire là-bas ?",ko:"거기서는 뭘 할 수 있어?"},
 {s:"Nadia",g:"f",fr:"On peut visiter le Sacré-Cœur, voir les peintres de la place du Tertre et admirer la vue sur tout Paris.",ko:"사크레쾨르 성당을 구경하고, 테르트르 광장의 화가들을 보고, 파리 전체 풍경을 감상할 수 있어."},
 {s:"Emma",g:"f",fr:"Et pour faire du shopping ?",ko:"쇼핑하려면?"},
 {s:"Nadia",g:"f",fr:"Le Marais, à l’est du centre. Il y a plein de petites boutiques et on y mange très bien !",ko:"중심가 동쪽의 마레 지구. 작은 가게들이 많고 음식도 아주 맛있어!"}]},
{type:"notes",title:"Situer un lieu",ko:"장소의 위치 말하기 · 파리 지도",html:PMAP+`
<ul><li><b class="say">Montmartre est au nord de Paris.</b></li><li><b class="say">Le Quartier latin se trouve au sud de la Seine.</b></li><li><b class="say">Le Marais est situé à l’est du centre.</b></li><li><b class="say">La tour Eiffel est à l’ouest.</b></li></ul>
<p>방향: <b class="say">au nord, au sud, à l’est, à l’ouest, au centre, au nord-est…</b></p>
<h3>On = les gens (일반 주어)</h3><p><b class="say">À Montmartre, on peut voir des peintres.</b> · <b class="say">En France, on mange tard.</b></p>`},
{type:"vocab",items:[["on pourrait…","…할 수도 있겠다"],["je préférerais…","…하는 게 더 좋겠어"],["bonne idée !","좋은 생각이야!"],["une promenade en bateau","유람선 타기"],["le métro","지하철"],["la météo","일기예보"],["il fait beau","날씨가 좋다"],["il pleut","비가 온다"],["il neige","눈이 온다"],["il y a du vent","바람이 분다"],["l’orage","뇌우"],["un degré","(온도) 도"],["un quartier","동네, 구역"],["une colline","언덕"],["la vue","전망"],["au nord / au sud","북쪽에 / 남쪽에"],["à l’est / à l’ouest","동쪽에 / 서쪽에"],["se trouver","위치하다"],["là-bas","저기, 거기"],["plein de…","많은 …"]]},
{type:"ex",n:1,title:"On pourrait…",inst:"pouvoir 조건법(on pourrait)으로 제안하세요.",en:"Make suggestions with on pourrait.",example:"manger au restaurant → On pourrait manger au restaurant.",kind:"write",items:[
 {q:"aller au cinéma",a:"On pourrait aller au cinéma."},{q:"visiter le Louvre",a:"On pourrait visiter le Louvre."},{q:"faire une promenade au jardin du Luxembourg",a:"On pourrait faire une promenade au jardin du Luxembourg."},
 {q:"prendre un verre en terrasse",a:"On pourrait prendre un verre en terrasse."},{q:"monter à la tour Eiffel",a:"On pourrait monter à la tour Eiffel."}]},
{type:"ex",n:2,title:"Je préférerais…",inst:"제안에 대해 ‘Je préférerais …’로 다른 것을 하고 싶다고 답하세요.",en:"Say what you'd rather do.",example:"On pourrait sortir prendre un verre. (aller au restaurant) → Je préférerais aller au restaurant.",kind:"write",items:[
 {q:"On pourrait regarder la télé. (aller au théâtre)",a:"Je préférerais aller au théâtre."},{q:"On pourrait prendre le métro. (marcher)",a:"Je préférerais marcher."},
 {q:"On pourrait visiter un musée. (faire du shopping)",a:"Je préférerais faire du shopping."},{q:"On pourrait partir à 7 heures. (partir plus tard)",a:"Je préférerais partir plus tard."},
 {q:"On pourrait manger une pizza. (manger des crêpes)",a:"Je préférerais manger des crêpes."}]},
{type:"ex",n:3,title:"Le pronom y",inst:"y를 사용해 완전한 문장으로 답하세요.",en:"Answer using y.",example:"Vous allez à Paris dimanche ? → Oui, j’y vais dimanche.",kind:"write",items:[
 {q:"Tu vas à la piscine ce soir ? (oui)",a:"Oui, j’y vais ce soir."},{q:"Vous habitez en France ? (oui, je…)",a:"Oui, j’y habite."},
 {q:"Elle travaille à la banque ? (non)",a:"Non, elle n’y travaille pas."},{q:"Tu es allé(e) au Sacré-Cœur ? (oui)",a:"Oui, j’y suis allé.|Oui, j’y suis allée."},
 {q:"Ils vont au Marais demain ? (oui)",a:"Oui, ils y vont demain."},{q:"Tu vas aller à Montmartre ? (oui)",a:"Oui, je vais y aller."}]},
{type:"ex",n:4,title:"Quel temps fait-il ?",inst:"오늘과 어제 날씨를 친구에게 말하세요.",en:"Describe today's and yesterday's weather.",html:"<b>Aujourd’hui :</b> ☀️ soleil, 🌬️ vent, max. 18 °C &nbsp;|&nbsp; <b>Hier :</b> 🌧️ pluie, ❄️ froid, max. 6 °C",kind:"fill",items:[
 {q:"Aujourd’hui, il y a du ___ et il y a du ___ .",a:["soleil","vent"]},{q:"Il ___ dix-huit degrés.",a:["fait"]},{q:"Hier, il a ___ toute la journée.",a:["plu"]},
 {q:"Hier, il a fait ___ : six degrés seulement !",a:["froid"]},{q:"Demain, la météo annonce de l’ ___ . ⛈️",a:["orage"]}]},
{type:"ex",n:5,title:"Où se trouve… ?",inst:"지도를 보고 장소의 위치를 고르세요.",en:"Using the map, say where these places are.",html:PMAP,kind:"choice",items:[
 {q:"Montparnasse",o:["est au nord du centre","se trouve au sud du centre","est à l’est"],a:1},{q:"La tour Eiffel",o:["est à l’ouest","est à l’est","est au nord"],a:0},
 {q:"Le bois de Vincennes",o:["est situé à l’ouest","est situé au sud-est","est situé au nord-ouest"],a:1},{q:"Montmartre",o:["se trouve au nord","se trouve au sud","se trouve au centre"],a:0},
 {q:"Notre-Dame",o:["est au centre, sur une île","est au nord","est à l’ouest"],a:0},{q:"L’Arc de Triomphe",o:["est au sud-est","est au nord-ouest","est à l’est"],a:1}]},
{type:"ex",n:6,title:"C’est un quartier qui…",inst:"예시처럼 문장을 완성하세요.",en:"Make sentences like the example.",example:"Montmartre, c’est un quartier qui se trouve au nord.",kind:"fill",items:[
 {q:"Le Quartier latin, c’est un ___ qui se trouve au sud de la Seine.",a:["quartier"]},{q:"La tour Eiffel, c’est un monument ___ se trouve à l’ouest.",a:["qui"]},
 {q:"Le Louvre, c’est un musée qui ___ situé au centre.",a:["est"]},{q:"Le bois de Vincennes, c’est un parc qui se trouve au ___ .",a:["sud-est"]},
 {q:"Le Marais, c’est un quartier qui se trouve à l’ ___ du centre.",a:["est"]}]},
{type:"ex",n:7,title:"Dans ma ville, on peut…",inst:"우리 동네 관광 안내를 on peut로 하세요.",en:"Explain what your town offers.",example:"visiter le château → On peut visiter le château.",kind:"write",items:[
 {q:"se promener au bord de la rivière",a:"On peut se promener au bord de la rivière."},{q:"faire du vélo dans le parc",a:"On peut faire du vélo dans le parc."},
 {q:"manger des spécialités locales",a:"On peut manger des spécialités locales."},{q:"visiter le musée d’art moderne",a:"On peut visiter le musée d’art moderne."},
 {q:"aller au marché le samedi",a:"On peut aller au marché le samedi."}]},
{type:"reading",title:"Montmartre",ko:"몽마르트르 (각색된 읽기 자료)",html:`<p>Montmartre reste l’un des quartiers les plus visités de Paris. Situé sur une colline au nord de la ville, il offre une vue exceptionnelle depuis les marches du Sacré-Cœur, la grande basilique blanche construite à la fin du XIX<sup>e</sup> siècle.</p><p>Autrefois, Montmartre était un village avec des vignes et des moulins. Au début du XX<sup>e</sup> siècle, des artistes comme Picasso et Modigliani y ont habité, attirés par les loyers bon marché et l’ambiance des cabarets.</p><p>Aujourd’hui, on peut encore voir des peintres sur la place du Tertre, se promener dans les petites rues pavées ou visiter le musée de Montmartre. Conseil : allez-y tôt le matin, avant l’arrivée des touristes !</p>`},
{type:"ex",n:8,title:"Compréhension : Montmartre",inst:"읽기 자료를 읽고 알맞은 답을 고르세요.",en:"Read the text and answer.",kind:"choice",items:[
 {q:"Où se trouve Montmartre ?",o:["sur une colline au nord de Paris","sur une île au centre","au bord de la mer"],a:0},{q:"Le Sacré-Cœur est…",o:["une tour en métal","une basilique blanche","un musée d’art moderne"],a:1},
 {q:"Autrefois, Montmartre était…",o:["un port","un village avec des vignes et des moulins","une université"],a:1},
 {q:"Pourquoi les artistes y ont-ils habité ?",o:["parce que les loyers étaient bon marché","parce qu’il y avait la mer","parce qu’il faisait toujours beau"],a:0},
 {q:"Quel est le conseil du texte ?",o:["y aller tard le soir","y aller tôt le matin","ne pas y aller en été"],a:1}]}
]});
})();
