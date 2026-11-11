(function(){
const MAP = `<svg class="svgmap" viewBox="0 0 660 430" xmlns="http://www.w3.org/2000/svg" font-family="Noto Sans KR, sans-serif" font-size="12">
<rect width="660" height="430" fill="#eef3ea"/>
<!-- streets -->
<rect x="185" y="0" width="34" height="430" fill="#fff" stroke="#c9cfdc"/>
<rect x="445" y="0" width="34" height="430" fill="#fff" stroke="#c9cfdc"/>
<rect x="0" y="105" width="660" height="34" fill="#fff" stroke="#c9cfdc"/>
<rect x="0" y="300" width="660" height="34" fill="#fff" stroke="#c9cfdc"/>
<rect x="219" y="139" width="226" height="161" fill="#dfe9d6"/>
<text x="202" y="60" transform="rotate(-90 202 60)" text-anchor="middle" fill="#55607a" font-size="11">avenue Foch</text>
<text x="462" y="250" transform="rotate(-90 462 250)" text-anchor="middle" fill="#55607a" font-size="11">rue Pasteur</text>
<text x="90" y="126" text-anchor="middle" fill="#55607a" font-size="11">rue de la Gare</text>
<text x="570" y="321" text-anchor="middle" fill="#55607a" font-size="11">boulevard Saint-Michel</text>
<text x="332" y="225" text-anchor="middle" fill="#3f6b2f" font-weight="700">place de la Liberté</text>
<g font-weight="700">
<rect x="225" y="345" width="210" height="60" rx="8" fill="#1d2f6f"/><text x="330" y="380" fill="#fff" text-anchor="middle">🏨 Hôtel Les Mimosas (vous êtes ici)</text>
<rect x="90" y="40" width="85" height="55" rx="8" fill="#fff" stroke="#1d2f6f"/><text x="132" y="72" text-anchor="middle">🏦 banque</text>
<rect x="250" y="250" width="80" height="42" rx="8" fill="#fff" stroke="#1d2f6f"/><text x="290" y="276" text-anchor="middle">📮 poste</text>
<rect x="340" y="150" width="95" height="45" rx="8" fill="#fff" stroke="#1d2f6f"/><text x="387" y="177" text-anchor="middle">🏛️ mairie</text>
<rect x="490" y="35" width="150" height="60" rx="8" fill="#fff" stroke="#1d2f6f"/><text x="565" y="62" text-anchor="middle">ℹ️ office de</text><text x="565" y="80" text-anchor="middle">tourisme</text>
<rect x="490" y="240" width="110" height="50" rx="8" fill="#fff" stroke="#1d2f6f"/><text x="545" y="270" text-anchor="middle">💊 pharmacie</text>
<rect x="60" y="345" width="115" height="55" rx="8" fill="#fff" stroke="#1d2f6f"/><text x="117" y="377" text-anchor="middle">🎬 cinéma</text>
<rect x="490" y="345" width="115" height="55" rx="8" fill="#fff" stroke="#1d2f6f"/><text x="547" y="377" text-anchor="middle">☕ café du Port</text>
<rect x="250" y="40" width="160" height="55" rx="8" fill="#fff" stroke="#1d2f6f"/><text x="330" y="72" text-anchor="middle">🏰 château · musée</text>
<rect x="60" y="160" width="115" height="55" rx="8" fill="#fff" stroke="#1d2f6f"/><text x="117" y="192" text-anchor="middle">🍽️ restaurant</text>
</g>
<text x="640" y="420" text-anchor="end" fill="#55607a">N ↑</text>
</svg>`;
FC.registerUnit({n:2,title:"Dans la ville",ko:"시내에서 — 시설 묻기와 길 찾기",
goals:["호텔 시설 묻기","길 묻고 안내하기","avoir 와 il y a","명사의 성","un/une, le/la","숫자 60–1000"],
sections:[
{type:"dialogue",title:"Il y a un ascenseur ?",ko:"엘리베이터가 있나요?",intro:"Emma가 방에서 내려와 프런트 직원에게 몇 가지를 물어봅니다. Emma가 묻는 두 가지 방식을 찾아보세요.",lines:[
 {s:"Emma",g:"f",fr:"Excusez-moi, monsieur. Il y a une imprimante dans l’hôtel ?",ko:"실례합니다. 호텔에 프린터가 있나요?"},
 {s:"Réceptionniste",g:"m",fr:"Oui, madame. Il y a une imprimante au rez-de-chaussée, à côté du salon.",ko:"네. 1층 라운지 옆에 프린터가 있습니다."},
 {s:"Emma",g:"f",fr:"Parfait. Et vous avez le wifi dans les chambres ?",ko:"좋네요. 그리고 객실에 와이파이가 있나요?"},
 {s:"Réceptionniste",g:"m",fr:"Bien sûr. Le code est sur la carte de votre chambre.",ko:"물론이죠. 비밀번호는 객실 카드에 있어요."},
 {s:"Emma",g:"f",fr:"Merci. Il y a un bar aussi ?",ko:"감사합니다. 바도 있나요?"},
 {s:"Réceptionniste",g:"m",fr:"Non, nous n’avons pas de bar, mais il y a un café très sympa en face de l’hôtel.",ko:"아니요, 바는 없지만 호텔 맞은편에 아주 괜찮은 카페가 있어요."},
 {s:"Emma",g:"f",fr:"Et le petit-déjeuner, c’est où ?",ko:"그럼 아침 식사는 어디서 하나요?"},
 {s:"Réceptionniste",g:"m",fr:"Dans la salle à manger, au premier étage, de sept heures à dix heures.",ko:"2층 식당에서, 7시부터 10시까지입니다."}]},
{type:"notes",title:"Avoir, il y a, le genre des noms",ko:"avoir, il y a, 명사의 성",html:`
<h3>Le verbe avoir — 가지다</h3>
<table><tr><td class="say">j’ai</td><td class="say">nous avons</td></tr><tr><td class="say">tu as</td><td class="say">vous avez</td></tr><tr><td class="say">il / elle a</td><td class="say">ils / elles ont</td></tr></table>
<h3>Demander un service — 시설 묻기</h3>
<ul><li><b class="say">Il y a une piscine ?</b> 수영장이 있나요? (il y a = ~이 있다)</li><li><b class="say">Vous avez un parking ?</b> 주차장 있으세요?</li><li>부정: <b class="say">Il n’y a pas de piscine.</b> / <b class="say">Nous n’avons pas de parking.</b> (부정문에서 un/une → de)</li></ul>
<h3>Masculin ou féminin ? — 명사의 성</h3>
<p>모든 명사는 남성 또는 여성이에요. 관사와 함께 외우세요!</p>
<table><tr><th></th><th>남성</th><th>여성</th></tr>
<tr><td>부정관사 (a)</td><td class="say">un bar, un restaurant</td><td class="say">une piscine, une banque</td></tr>
<tr><td>정관사 (the)</td><td class="say">le bar, le restaurant</td><td class="say">la piscine, la banque</td></tr>
<tr><td>모음·h 앞</td><td colspan="2" class="say">l’hôtel, l’imprimante, l’ascenseur</td></tr></table>
<h3>Les étages — 층</h3>
<p>프랑스의 <b class="say">rez-de-chaussée</b> = 한국의 1층, <b class="say">premier étage</b> = 2층, <b class="say">deuxième étage</b> = 3층 …</p>
<p>서수: premier/première, deuxième, troisième, quatrième, cinquième …</p>`},
{type:"dialogue",title:"Pour aller à l’office de tourisme ?",ko:"관광 안내소에 어떻게 가나요?",intro:"Emma가 호텔을 나와 행인에게 길을 묻습니다. 아래 지도를 보며 들어 보세요.",lines:[
 {s:"Emma",g:"f",fr:"Pardon, madame. Pour aller à l’office de tourisme, s’il vous plaît ?",ko:"실례합니다. 관광 안내소에 어떻게 가나요?"},
 {s:"Passante",g:"f",fr:"L’office de tourisme ? C’est facile. Vous tournez à droite et vous allez tout droit jusqu’à la rue Pasteur.",ko:"관광 안내소요? 쉬워요. 오른쪽으로 돌아서 파스퇴르 거리까지 쭉 가세요."},
 {s:"Emma",g:"f",fr:"À la pharmacie ?",ko:"약국 있는 데까지요?"},
 {s:"Passante",g:"f",fr:"Voilà. Là, vous prenez la rue Pasteur à gauche et vous continuez jusqu’à la rue de la Gare.",ko:"맞아요. 거기서 왼쪽으로 파스퇴르 거리로 들어가 기차역 거리까지 계속 가세요."},
 {s:"Emma",g:"f",fr:"Et ensuite ?",ko:"그다음에는요?"},
 {s:"Passante",g:"f",fr:"Ensuite, l’office de tourisme est au coin, sur votre droite.",ko:"그러면 관광 안내소가 모퉁이 오른쪽에 있어요."},
 {s:"Emma",g:"f",fr:"C’est loin ?",ko:"멀어요?"},
 {s:"Passante",g:"f",fr:"Non, c’est à cinq minutes à pied, à quatre cents mètres environ.",ko:"아니요, 걸어서 5분, 400미터 정도예요."},
 {s:"Emma",g:"f",fr:"Merci beaucoup, madame !",ko:"정말 감사합니다!"},
 {s:"Passante",g:"f",fr:"Je vous en prie. Bonne journée !",ko:"천만에요. 좋은 하루 보내세요!"}]},
{type:"notes",title:"Demander et indiquer le chemin",ko:"길 묻기와 안내하기 · 지도",html:`${MAP}
<h3>Demander — 묻기</h3>
<ul><li><b class="say">Pardon, pour aller à la gare, s’il vous plaît ?</b></li><li><b class="say">Excusez-moi, je cherche la poste.</b></li><li><b class="say">Où est la banque, s’il vous plaît ?</b></li><li><b class="say">C’est loin ? — Non, c’est à deux cents mètres.</b></li></ul>
<h3>Indiquer — 안내하기</h3>
<table><tr><td class="say">tournez à gauche / à droite</td><td>왼쪽/오른쪽으로 도세요</td></tr><tr><td class="say">allez tout droit</td><td>쭉 가세요</td></tr><tr><td class="say">prenez la première rue à droite</td><td>첫 번째 길에서 오른쪽으로 가세요</td></tr><tr><td class="say">continuez jusqu’à la place</td><td>광장까지 계속 가세요</td></tr><tr><td class="say">traversez la place</td><td>광장을 건너세요</td></tr><tr><td class="say">au coin de la rue</td><td>길모퉁이에</td></tr><tr><td class="say">en face de / à côté de / entre … et …</td><td>맞은편에 / 옆에 / ~와 ~ 사이에</td></tr></table>
<div class="tip">💡 à + le = <b>au</b> (au cinéma), à + les = <b>aux</b>, à la (à la gare), à l’ (à l’hôtel). de + le = <b>du</b> (à côté du café).</div>
<h3>Les nombres de 60 à 1000</h3>
<table><tr><td><b>60</b> <span class="say">soixante</span></td><td><b>70</b> <span class="say">soixante-dix</span></td><td><b>71</b> <span class="say">soixante et onze</span></td><td><b>75</b> <span class="say">soixante-quinze</span></td></tr>
<tr><td><b>80</b> <span class="say">quatre-vingts</span></td><td><b>81</b> <span class="say">quatre-vingt-un</span></td><td><b>90</b> <span class="say">quatre-vingt-dix</span></td><td><b>99</b> <span class="say">quatre-vingt-dix-neuf</span></td></tr>
<tr><td><b>100</b> <span class="say">cent</span></td><td><b>200</b> <span class="say">deux cents</span></td><td><b>350</b> <span class="say">trois cent cinquante</span></td><td><b>1000</b> <span class="say">mille</span></td></tr></table>`},
{type:"vocab",items:[["une piscine","수영장"],["un parking","주차장"],["un ascenseur","엘리베이터"],["une imprimante","프린터"],["le rez-de-chaussée","(한국식) 1층"],["un étage","층"],["la mairie","시청"],["la poste","우체국"],["la banque","은행"],["la gare","기차역"],["la pharmacie","약국"],["l’office de tourisme","관광 안내소"],["une rue","거리"],["une place","광장"],["à gauche","왼쪽에"],["à droite","오른쪽에"],["tout droit","똑바로"],["loin / près","먼 / 가까운"],["en face de","~의 맞은편에"],["à côté de","~의 옆에"]]},
{type:"ex",n:1,title:"Un ou une ?",inst:"호텔 지배인이 손님에게 시설을 설명합니다. un 또는 une를 쓰세요.",en:"The manager describes the hotel. Write un or une.",kind:"fill",items:[
 {q:"Dans notre hôtel, il y a ___ piscine chauffée.",a:["une"]},{q:"Il y a aussi ___ restaurant gastronomique.",a:["un"]},{q:"Nous avons ___ salle de sport au sous-sol.",a:["une"]},
 {q:"Il y a ___ parking gratuit derrière l’hôtel.",a:["un"]},{q:"Nous avons ___ jardin et ___ terrasse.",a:["un","une"]},{q:"Il y a ___ ascenseur et ___ imprimante.",a:["un","une"]}]},
{type:"ex",n:2,title:"Il y a… ? Vous avez… ?",inst:"손님이 되어 시설이 있는지 물어보세요. 괄호 안의 표현을 사용하세요.",en:"Ask for the amenities using il y a / vous avez.",kind:"write",items:[
 {q:"piscine (il y a)",a:"Il y a une piscine ?|Est-ce qu’il y a une piscine ?|Il y a une piscine, s’il vous plaît ?"},{q:"bar (vous avez)",a:"Vous avez un bar ?|Est-ce que vous avez un bar ?"},
 {q:"restaurant (il y a)",a:"Il y a un restaurant ?|Est-ce qu’il y a un restaurant ?"},{q:"parking (vous avez)",a:"Vous avez un parking ?|Est-ce que vous avez un parking ?"},
 {q:"ascenseur (il y a)",a:"Il y a un ascenseur ?|Est-ce qu’il y a un ascenseur ?"},{q:"Réponse négative : « Non, … pas de piscine. » (il y a)",a:"Non, il n’y a pas de piscine.|Non, il n'y a pas de piscine"}]},
{type:"ex",n:3,title:"C’est à quel étage ?",inst:"표를 보고 ‘C’est au … étage / au rez-de-chaussée’로 답하세요.",en:"Answer using the table of floors.",
 html:"<table><tr><th>Étage</th><th>Services</th></tr><tr><td>3<sup>e</sup></td><td>salon de coiffure · terrasse</td></tr><tr><td>2<sup>e</sup></td><td>salle de sport · sauna</td></tr><tr><td>1<sup>er</sup></td><td>salle à manger · salle de réunion</td></tr><tr><td>RDC</td><td>réception · bar · boutique</td></tr><tr><td>sous-sol</td><td>parking · piscine</td></tr></table>",
 example:"Le salon de coiffure, c’est où ? → C’est au troisième étage.",kind:"write",items:[
 {q:"La salle de sport, c’est où ?",a:"C’est au deuxième étage.|Au deuxième étage."},{q:"La salle à manger, c’est où ?",a:"C’est au premier étage.|Au premier étage."},
 {q:"Le bar, c’est où ?",a:"C’est au rez-de-chaussée.|Au rez-de-chaussée."},{q:"La terrasse, c’est où ?",a:"C’est au troisième étage.|Au troisième étage."},
 {q:"La piscine, c’est où ?",a:"C’est au sous-sol.|Au sous-sol."},{q:"La salle de réunion, c’est où ?",a:"C’est au premier étage.|Au premier étage."}]},
{type:"ex",n:4,title:"Demander le chemin",inst:"길을 물어보세요. 빈칸에 au / à la / à l’ / aux 를 쓰세요.",en:"Ask the way: au, à la, à l’, aux.",html:MAP,kind:"fill",items:[
 {q:"Pardon, pour aller ___ gare, s’il vous plaît ?",a:["à la"]},{q:"Excusez-moi, pour aller ___ cinéma ?",a:["au"]},{q:"Pour aller ___ office de tourisme, s’il vous plaît ?",a:["à l’|à l'"]},
 {q:"Je voudrais aller ___ mairie.",a:["à la"]},{q:"Pour aller ___ château, c’est loin ?",a:["au"]},{q:"Nous allons ___ magasins de la rue Pasteur.",a:["aux"]}]},
{type:"ex",n:5,title:"C’est loin ?",inst:"▶ 대답을 듣고 거리를 숫자로 쓰세요 (미터 또는 분).",en:"Listen and write the distance in figures.",example:"La poste, c’est loin ? — Non, c’est à cent mètres. → 100",kind:"write",items:[
 {say:"La poste, c’est loin ? Non, c’est à cinquante mètres.",a:"50"},{say:"La gare ? C’est à huit cents mètres.",a:"800"},{say:"La pharmacie ? C’est à deux cent cinquante mètres.",a:"250"},
 {say:"Le château ? C’est à quatre-vingts mètres.",a:"80"},{say:"La plage ? C’est à quinze minutes à pied.",a:"15"},{say:"Le musée ? C’est à soixante-dix mètres.",a:"70"}]},
{type:"ex",n:6,title:"Pour aller à la banque",inst:"지도를 보고 호텔에서 은행까지 가는 길 안내를 완성하세요. (보기: tournez · allez · prenez · gauche · droite · coin)",en:"Complete the directions from the hotel to the bank.",html:MAP,kind:"fill",items:[
 {q:"En sortant de l’hôtel, vous ___ à gauche.",a:["tournez"]},{q:"Vous ___ tout droit jusqu’à l’avenue Foch.",a:["allez|continuez"]},
 {q:"Vous ___ l’avenue Foch à droite.",a:["prenez"]},{q:"Vous passez devant le restaurant, sur votre ___ .",a:["gauche"]},
 {q:"La banque est au ___ de l’avenue Foch et de la rue de la Gare.",a:["coin"]}]},
{type:"ex",n:7,title:"Où est-ce ?",inst:"지도를 보고 맞는 설명을 고르세요.",en:"Look at the map and choose the correct description.",html:MAP,kind:"choice",items:[
 {q:"La poste est…",o:["en face de l’hôtel","à côté de la gare","à côté de la banque"],a:0},
 {q:"Le cinéma est…",o:["sur la rue Pasteur","sur le boulevard Saint-Michel, à l’angle de l’avenue Foch","en face de la pharmacie"],a:1},
 {q:"Pour aller du café du Port à la pharmacie, …",o:["vous traversez le boulevard Saint-Michel","vous prenez l’avenue Foch","vous allez à la gare"],a:0},
 {q:"La mairie est…",o:["sur la place de la Liberté","à côté du cinéma","rue de la Gare, à gauche de la banque"],a:0},
 {q:"Le château est…",o:["au sud de l’hôtel","entre l’avenue Foch et la rue Pasteur, au nord de la rue de la Gare","à côté du café du Port"],a:1}]},
{type:"ex",n:8,title:"Les rues et la place",inst:"지도를 보고 알맞은 장소 이름을 고르세요.",en:"Name the streets and the square.",html:MAP,kind:"choice",items:[
 {q:"En sortant de l’hôtel, vous êtes sur…",o:["la rue de la Gare","le boulevard Saint-Michel","l’avenue Foch"],a:1},
 {q:"La pharmacie est au coin du boulevard Saint-Michel et de…",o:["la rue Pasteur","l’avenue Foch","la place de la Liberté"],a:0},
 {q:"La banque est sur…",o:["la rue Pasteur","la rue de la Gare","le boulevard Saint-Michel"],a:1},
 {q:"Entre la poste et la mairie, il y a…",o:["la place de la Liberté","le cinéma","la gare"],a:0},
 {q:"Le restaurant est sur…",o:["l’avenue Foch","la rue Pasteur","la rue de la Gare"],a:0}]},
{type:"ex",n:9,title:"Les grands nombres (bonus)",inst:"▶ 숫자를 듣고 아라비아 숫자로 쓰세요.",en:"Listen and write the numbers.",kind:"write",items:[
 {say:"soixante-douze",a:"72"},{say:"quatre-vingt-cinq",a:"85"},{say:"quatre-vingt-dix-sept",a:"97"},{say:"cent quarante",a:"140"},{say:"trois cent soixante-quinze",a:"375"},{say:"six cent quatre-vingts",a:"680"},{say:"mille",a:"1000"}]}
]});
})();
