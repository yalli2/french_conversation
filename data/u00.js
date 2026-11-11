FC.registerUnit({n:0,title:"Prononciation",ko:"발음 가이드 — 알파벳, 악센트, 연음",
goals:["프랑스어 알파벳 읽기","악센트 기호 구별","묵음과 연음(liaison)"],
sections:[
{type:"notes",title:"L’alphabet français",ko:"글자를 눌러 발음을 들어 보세요.",html:`
<div class="alpha" id="alpha">${"A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" ").map(l=>`<button class="say" data-say="${l}">${l}</button>`).join("")}</div>
<div class="tip">💡 이름의 철자를 말할 때 같은 글자가 두 번 나오면 <b class="say">deux</b>를 붙여요: <b class="say" data-say="B, O, deux N, E, T">Bonnet → B-O-deux N-E-T</b></div>
<h3>Les accents — 악센트 기호</h3>
<table><tr><th>기호</th><th>이름</th><th>예</th><th>설명</th></tr>
<tr><td>é</td><td>accent aigu</td><td><b class="say">été, café</b></td><td>항상 [e] — 입을 좁게 “에”</td></tr>
<tr><td>è</td><td>accent grave</td><td><b class="say">mère, très</b></td><td>항상 [ɛ] — 입을 넓게 “에”</td></tr>
<tr><td>ê</td><td>accent circonflexe</td><td><b class="say">fête, forêt</b></td><td>[ɛ] 또는 [e]</td></tr>
<tr><td>ç</td><td>cédille</td><td><b class="say">ça, garçon</b></td><td>a·o·u 앞의 c를 [s]로</td></tr>
<tr><td>ë, ï</td><td>tréma</td><td><b class="say">Noël, naïf</b></td><td>앞 모음과 따로 발음</td></tr></table>
<h3>Sons typiques — 대표적인 소리</h3>
<table><tr><th>철자</th><th>소리</th><th>예</th></tr>
<tr><td>ou</td><td>[u] “우”</td><td><b class="say">vous, rouge</b></td></tr>
<tr><td>u</td><td>[y] “우” 입모양으로 “이”</td><td><b class="say">tu, rue</b></td></tr>
<tr><td>oi</td><td>[wa] “와”</td><td><b class="say">moi, trois</b></td></tr>
<tr><td>au, eau</td><td>[o] “오”</td><td><b class="say">beau, chaud</b></td></tr>
<tr><td>an, en</td><td>[ɑ̃] 비모음</td><td><b class="say">France, enfant</b></td></tr>
<tr><td>on</td><td>[ɔ̃] 비모음</td><td><b class="say">bonjour, maison</b></td></tr>
<tr><td>in, ain, un</td><td>[ɛ̃] 비모음</td><td><b class="say">vin, pain, lundi</b></td></tr>
<tr><td>gn</td><td>[ɲ] “뉴”</td><td><b class="say">montagne, Espagne</b></td></tr>
<tr><td>ch</td><td>[ʃ] “슈”</td><td><b class="say">chat, chocolat</b></td></tr></table>
<h3>Lettres muettes et liaison — 묵음과 연음</h3>
<ul><li>단어 끝 자음은 대부분 읽지 않아요: <b class="say">Paris, petit, vous</b> (예외: c, r, f, l — <b class="say">avec, bonjour, neuf, sel</b>)</li>
<li>h는 소리 나지 않아요: <b class="say">hôtel, homme</b></li>
<li>연음(liaison): 뒤 단어가 모음으로 시작하면 앞 단어의 끝 자음을 이어 읽어요: <b class="say">vous_êtes</b>, <b class="say">les_amis</b>, <b class="say">nous_habitons</b></li></ul>`},
{type:"ex",n:1,title:"Quelle lettre ?",inst:"▶ 버튼을 눌러 들리는 글자를 고르세요.",en:"Listen and choose the letter.",kind:"choice",items:[
 {say:"G",o:["G","J","Z"],a:0},{say:"J",o:["G","J","I"],a:1},{say:"E",o:["A","E","I"],a:1},{say:"I",o:["E","I","Y"],a:1},
 {say:"U",o:["O","U","W"],a:1},{say:"R",o:["R","H","L"],a:0},{say:"Y",o:["I","J","Y"],a:2},{say:"W",o:["V","W","U"],a:1}]},
{type:"ex",n:2,title:"Épelez !",inst:"이름의 철자를 듣고 그 이름을 쓰세요.",en:"Listen to the spelling and write the name.",kind:"write",items:[
 {say:"L, U, C, A, S",a:"Lucas"},{say:"C, H, L, O, E",a:"Chloe|Chloé"},{say:"P, I, E, deux R, E",a:"Pierre",ex:"deux R = RR"},
 {say:"M, A, T, H, I, A, S",a:"Mathias"},{say:"J, U, L, I, E, T, T, E",a:"Juliette"}]},
{type:"ex",n:3,title:"Le son [y] ou [u] ?",inst:"단어를 듣고, 들리는 모음 소리를 고르세요.",en:"Do you hear [y] (tu) or [u] (vous)?",kind:"choice",items:[
 {say:"rue",o:["[y] — tu","[u] — vous"],a:0},{say:"roue",o:["[y] — tu","[u] — vous"],a:1},{say:"dessus",o:["[y] — tu","[u] — vous"],a:0},
 {say:"dessous",o:["[y] — tu","[u] — vous"],a:1},{say:"lune",o:["[y] — tu","[u] — vous"],a:0},{say:"loup",o:["[y] — tu","[u] — vous"],a:1}]},
{type:"ex",n:4,title:"Liaison ou pas ?",inst:"연음(liaison)이 일어나는 표현을 고르세요. ▶로 확인해 보세요.",en:"Is there a liaison?",kind:"choice",items:[
 {say:"vous avez",q:"vous avez",o:["연음 있음 (vou-z-avez)","연음 없음"],a:0},{say:"vous parlez",q:"vous parlez",o:["연음 있음","연음 없음"],a:1},
 {say:"les enfants",q:"les enfants",o:["연음 있음 (lé-z-enfants)","연음 없음"],a:0},{say:"les garçons",q:"les garçons",o:["연음 있음","연음 없음"],a:1},
 {say:"nous habitons",q:"nous habitons",o:["연음 있음 (nou-z-habitons)","연음 없음"],a:0},{say:"deux amis",q:"deux amis",o:["연음 있음 (deu-z-amis)","연음 없음"],a:0}]}
]});
