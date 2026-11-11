FC.registerUnit({n:1,title:"Premiers contacts",ko:"첫 만남 — 인사하고 나를 소개하기",
goals:["인사 표현","동사 être","규칙 -er 동사","ne … pas 부정문","quel / quelle 의문문","숫자 0–60","국적 형용사"],
sections:[
{type:"dialogue",title:"Dans le taxi",ko:"택시 안에서",g:"",intro:"아일랜드 사람 <b>Emma Clarke</b>가 프랑스의 작은 도시 Valmont에 도착해 택시를 타고 호텔로 갑니다. 그녀에 대해 무엇을 알 수 있나요?",lines:[
 {s:"Emma",g:"f",fr:"Bonjour, monsieur. L’hôtel Les Mimosas, s’il vous plaît.",ko:"안녕하세요. 미모사 호텔로 가 주세요."},
 {s:"Chauffeur",g:"m",fr:"Les Mimosas ? D’accord, madame. Vous êtes anglaise ?",ko:"미모사 호텔이요? 알겠습니다. 영국 분이세요?"},
 {s:"Emma",g:"f",fr:"Non, je suis irlandaise, mais j’habite en Angleterre.",ko:"아니요, 저는 아일랜드 사람이에요. 하지만 영국에 살아요."},
 {s:"Chauffeur",g:"m",fr:"À Londres ?",ko:"런던에요?"},
 {s:"Emma",g:"f",fr:"Non, je travaille à Londres, mais j’habite à Oxford.",ko:"아니요, 런던에서 일하지만 옥스퍼드에 살아요."},
 {s:"Chauffeur",g:"m",fr:"Vous parlez très bien français !",ko:"프랑스어를 아주 잘하시네요!"},
 {s:"Emma",g:"f",fr:"Merci, c’est gentil !",ko:"고마워요, 친절하시네요!"},
 {s:"Chauffeur",g:"m",fr:"Voilà, nous sommes arrivés. Ça fait onze euros, madame.",ko:"자, 도착했습니다. 11유로입니다."},
 {s:"Emma",g:"f",fr:"Voilà. Merci beaucoup, monsieur. Au revoir !",ko:"여기요. 정말 감사합니다. 안녕히 계세요!"},
 {s:"Chauffeur",g:"m",fr:"Au revoir, et bon séjour !",ko:"안녕히 가세요, 즐거운 여행 되세요!"}]},
{type:"notes",title:"Saluer et parler de sa nationalité",ko:"인사하기와 국적 말하기",html:`
<h3>Les salutations — 인사</h3>
<table><tr><th>표현</th><th>언제?</th></tr>
<tr><td><b class="say">Bonjour, monsieur. / Bonjour, madame.</b></td><td>낮 인사 (만날 때)</td></tr>
<tr><td><b class="say">Bonsoir !</b></td><td>저녁 인사 (만날 때·헤어질 때 모두)</td></tr>
<tr><td><b class="say">Salut, Léa !</b></td><td>친한 사이 (만날 때·헤어질 때)</td></tr>
<tr><td><b class="say">Au revoir !</b></td><td>헤어질 때</td></tr>
<tr><td><b class="say">S’il vous plaît. — Merci.</b></td><td>부탁할 때 / 감사할 때</td></tr></table>
<div class="tip">💡 프랑스에서는 가게에 들어가고 나올 때 <b class="say">Bonjour</b>, <b class="say">Merci, au revoir</b>를 꼭 말해요. 존칭 <i>monsieur / madame</i>를 영어보다 훨씬 자주 씁니다.</div>
<h3>La nationalité — 국적 (남성 / 여성)</h3>
<table><tr><th>남성</th><th>여성</th><th>뜻</th></tr>
<tr><td class="say">Je suis français.</td><td class="say">Je suis française.</td><td>프랑스인</td></tr>
<tr><td class="say">Je suis anglais.</td><td class="say">Je suis anglaise.</td><td>영국인</td></tr>
<tr><td class="say">Je suis irlandais.</td><td class="say">Je suis irlandaise.</td><td>아일랜드인</td></tr>
<tr><td class="say">Je suis coréen.</td><td class="say">Je suis coréenne.</td><td>한국인</td></tr>
<tr><td class="say">Je suis italien.</td><td class="say">Je suis italienne.</td><td>이탈리아인</td></tr>
<tr><td class="say">Je suis allemand.</td><td class="say">Je suis allemande.</td><td>독일인</td></tr>
<tr><td class="say">Je suis espagnol.</td><td class="say">Je suis espagnole.</td><td>스페인인 (발음 같음)</td></tr>
<tr><td class="say">Je suis suisse.</td><td class="say">Je suis suisse.</td><td>스위스인 (-e로 끝나면 그대로)</td></tr></table>
<div class="tip">💡 국적 형용사는 소문자로 써요: <i>il est français</i>. 나라 이름(<i>la France</i>)과 “~사람”이라는 명사(<i>un Français</i>)만 대문자입니다. 언어 이름도 소문자: <i>le français, le coréen</i>.</div>
<h3>Le verbe être — ~이다</h3>
<table><tr><td class="say">je suis</td><td class="say">nous sommes</td></tr><tr><td class="say">tu es</td><td class="say">vous êtes</td></tr><tr><td class="say">il / elle est</td><td class="say">ils / elles sont</td></tr></table>
<p><i>elles</i>는 여성만 있는 그룹, <i>ils</i>는 남성이 한 명이라도 있으면 씁니다.</p>`},
{type:"notes",title:"Les verbes en -er, les questions, ne … pas",ko:"-er 동사, 의문문, 부정문",html:`
<h3>Les verbes réguliers en -er — 규칙 동사</h3>
<p>어미 <b>-er</b>를 떼고 인칭 어미를 붙여요. <i>travaille, travailles, travaillent</i>은 발음이 같습니다.</p>
<table><tr><th colspan="2">travailler (일하다)</th></tr>
<tr><td class="say">je travaille</td><td class="say">nous travaillons</td></tr><tr><td class="say">tu travailles</td><td class="say">vous travaillez</td></tr><tr><td class="say">il / elle travaille</td><td class="say">ils / elles travaillent</td></tr></table>
<p>같은 방식: <b class="say">habiter</b> 살다 · <b class="say">parler</b> 말하다 · <b class="say">aimer</b> 좋아하다 · <b class="say">écouter</b> 듣다 · <b class="say">regarder</b> 보다 · <b class="say">téléphoner</b> 전화하다 · <b class="say">arriver</b> 도착하다</p>
<p>모음이나 h 앞에서 je → j’ : <b class="say">j’habite, j’aime</b></p>
<h3>à + 도시 / en + 나라</h3>
<p><b class="say">J’habite en France, à Lyon, mais je travaille en Suisse.</b></p>
<h3>Poser une question — 질문하기</h3>
<p>가장 쉬운 방법은 문장 끝을 올려 말하는 것(억양 의문문)이에요: <b class="say" data-say="Vous êtes français ?">Vous êtes français ? ↗</b></p>
<p><b>quel / quelle + est …?</b> “~은 무엇인가요?” (명사가 여성이면 quelle)</p>
<ul><li><b class="say">Quel est votre nom ?</b> 이름이 뭐예요?</li><li><b class="say">Quelle est votre adresse ?</b> 주소가 뭐예요?</li><li><b class="say">Quel est votre numéro de téléphone ?</b> 전화번호가 뭐예요?</li><li><b class="say">Quelle est votre profession ?</b> 직업이 뭐예요?</li></ul>
<p>철자 묻기: <b class="say">Comment ça s’écrit ?</b> / <b class="say">Vous pouvez épeler, s’il vous plaît ?</b></p>
<h3>Ne … pas — 부정문</h3>
<p>동사를 ne와 pas 사이에 넣어요. 모음 앞에서 ne → n’.</p>
<ul><li><b class="say">Je ne suis pas anglaise.</b></li><li><b class="say">Emma n’habite pas en Irlande.</b></li></ul>`},
{type:"dialogue",title:"À l’hôtel",ko:"호텔에서",intro:"Emma가 호텔 프런트에서 체크인합니다.",lines:[
 {s:"Emma",g:"f",fr:"Bonsoir, monsieur. J’ai une réservation pour trois nuits.",ko:"안녕하세요. 3박 예약을 했어요."},
 {s:"Réceptionniste",g:"m",fr:"Quel est votre nom, s’il vous plaît, madame ?",ko:"성함이 어떻게 되시죠?"},
 {s:"Emma",g:"f",fr:"Emma Clarke.",ko:"엠마 클라크예요."},
 {s:"Réceptionniste",g:"m",fr:"Comment ça s’écrit ?",ko:"철자가 어떻게 되나요?"},
 {s:"Emma",g:"f",fr:"C-L-A-R-K-E. C’est un nom irlandais.",ko:"C-L-A-R-K-E. 아일랜드 이름이에요."},
 {s:"Réceptionniste",g:"m",fr:"Ah, vous n’êtes pas anglaise, alors !",ko:"아, 그럼 영국 분이 아니시군요!"},
 {s:"Emma",g:"f",fr:"Non, je ne suis pas anglaise, je suis irlandaise.",ko:"네, 영국인이 아니라 아일랜드인이에요."},
 {s:"Réceptionniste",g:"m",fr:"Un instant… Je ne trouve pas votre nom… Ah si, voilà ! Excusez-moi. Signez ici, s’il vous plaît.",ko:"잠시만요… 성함이 안 보이네요… 아, 여기 있네요! 죄송합니다. 여기 서명해 주세요."},
 {s:"Emma",g:"f",fr:"Quelle est la date aujourd’hui ?",ko:"오늘이 며칠이죠?"},
 {s:"Réceptionniste",g:"m",fr:"Nous sommes le 14, madame. Votre chambre est la 23, au deuxième étage.",ko:"14일입니다. 방은 3층 23호입니다."}]},
{type:"notes",title:"Les nombres de 0 à 60",ko:"숫자 0–60 (눌러서 들어 보세요)",html:`
<table>${[[0,"zéro"],[1,"un / une"],[2,"deux"],[3,"trois"],[4,"quatre"],[5,"cinq"],[6,"six"],[7,"sept"],[8,"huit"],[9,"neuf"],[10,"dix"],[11,"onze"],[12,"douze"],[13,"treize"],[14,"quatorze"],[15,"quinze"],[16,"seize"],[17,"dix-sept"],[18,"dix-huit"],[19,"dix-neuf"],[20,"vingt"],[21,"vingt et un"],[22,"vingt-deux"],[30,"trente"],[31,"trente et un"],[40,"quarante"],[50,"cinquante"],[60,"soixante"]].reduce((a,x,i)=>a+(i%4===0?'<tr>':'')+`<td><b>${x[0]}</b> <span class="say">${x[1]}</span></td>`+(i%4===3?'</tr>':''),'')}</table>
<div class="tip">💡 프랑스 전화번호는 10자리를 두 자리씩 끊어 읽어요: <b class="say" data-say="zéro quatre, soixante, vingt-deux, trente-sept, quinze">04 60 22 37 15</b> → zéro quatre, soixante, vingt-deux, trente-sept, quinze</div>`},
{type:"vocab",items:[["bonjour","안녕하세요"],["bonsoir","안녕하세요(저녁)"],["salut","안녕(친구)"],["au revoir","안녕히 계세요/가세요"],["merci beaucoup","정말 감사합니다"],["s’il vous plaît","부탁합니다"],["c’est gentil","친절하시네요"],["bon séjour !","즐거운 체류 되세요!"],["une réservation","예약"],["une nuit","하룻밤"],["une chambre","방, 객실"],["le premier étage","2층(한국식)"],["un nom","이름, 성"],["une adresse","주소"],["la profession","직업"],["épeler","철자를 말하다"],["habiter","살다"],["travailler","일하다"],["parler","말하다"],["aujourd’hui","오늘"]]},
{type:"ex",n:1,title:"Le verbe être",inst:"빈칸에 être 동사의 알맞은 형태를 쓰세요.",en:"Fill in the gaps with the correct form of être.",kind:"fill",items:[
 {q:"Vous ___ française ? — Non, je ___ belge.",a:["êtes","suis"]},{q:"Ils ___ irlandais.",a:["sont"]},{q:"Le Figaro ___ un journal français.",a:["est"]},
 {q:"Nous ___ coréens, mais nous habitons à Paris.",a:["sommes"]},{q:"Tu ___ italienne ?",a:["es"]},{q:"Elle ___ espagnole.",a:["est"]},{q:"Marie et Léa ___ suisses.",a:["sont"]}]},
{type:"ex",n:2,title:"Quelle nationalité ?",inst:"질문에 ‘Non, il/elle est …’ 형식으로 답하세요.",en:"Answer about each person's nationality.",example:"Victor Hugo est anglais ? → Non, il est français.",kind:"write",items:[
 {q:"Taylor Swift est française ?",a:"Non, elle est américaine.|Non elle est americaine"},{q:"Mozart est italien ? (autrichien)",a:"Non, il est autrichien."},
 {q:"Sophie Marceau est allemande ?",a:"Non, elle est française."},{q:"Son Heung-min est japonais ?",a:"Non, il est coréen."},
 {q:"Penélope Cruz est italienne ?",a:"Non, elle est espagnole."},{q:"Albert Einstein est russe ?",a:"Non, il est allemand."}]},
{type:"ex",n:3,title:"Qui est Emma ?",inst:"대화를 다시 보고 Emma에 대한 질문에 완전한 문장으로 답하세요.",en:"Answer in full sentences about Emma.",kind:"write",items:[
 {q:"Elle est anglaise ?",a:"Non, elle est irlandaise.|Non, elle n’est pas anglaise, elle est irlandaise.|Non, elle n'est pas anglaise."},
 {q:"Elle habite à Londres ?",a:"Non, elle habite à Oxford.|Non, elle n’habite pas à Londres, elle habite à Oxford.|Non, elle n'habite pas à Londres."},
 {q:"Elle travaille à Oxford ?",a:"Non, elle travaille à Londres.|Non, elle ne travaille pas à Oxford, elle travaille à Londres.|Non, elle ne travaille pas à Oxford."},
 {q:"Elle parle français ?",a:"Oui, elle parle français.|Oui, elle parle très bien français.|Oui, elle parle bien français."},
 {q:"Sa chambre est la 32 ?",a:"Non, sa chambre est la 23.|Non, c’est la 23."}]},
{type:"ex",n:4,title:"Épeler des noms",inst:"▶ 철자를 듣고 어떤 이름인지 고르세요. 그리고 직접 소리 내어 철자를 말해 보세요.",en:"Listen to the spelling and identify the name.",kind:"choice",items:[
 {say:"C, L, A, R, K, E",o:["Clarck","Clarke","Klarke"],a:1},{say:"M, O, Z, A, R, T",o:["Mozart","Mosart","Mozard"],a:0},
 {say:"G, L, A, S, G, O, W",o:["Glasgo","Glasgow","Glascow"],a:1},{say:"W, I, L, L, I, A, M, S",o:["Wiliams","Williams","Willyams"],a:1},
 {say:"V, A, L, M, O, N, T",o:["Valmon","Valmond","Valmont"],a:2}]},
{type:"ex",n:5,title:"Les nombres",inst:"▶ 숫자를 듣고 아라비아 숫자로 쓰세요.",en:"Listen and write the number in figures.",kind:"write",items:[
 {say:"vingt-six",a:"26"},{say:"sept",a:"7"},{say:"dix-huit",a:"18"},{say:"trente-quatre",a:"34"},{say:"cinquante",a:"50"},
 {say:"quarante-sept",a:"47"},{say:"treize",a:"13"},{say:"quinze euros",a:"15"},{say:"vingt et un euros",a:"21"},{say:"soixante",a:"60"}]},
{type:"ex",n:6,title:"Questions et réponses",inst:"질문과 알맞은 대답을 연결하세요.",en:"Match each question with its answer.",kind:"match",
 left:["Quel est votre nom, s’il vous plaît ?","Comment ça s’écrit ?","Quelle est votre adresse ?","Quel est votre numéro de téléphone ?","Quelle est votre profession ?"],
 right:["14 rue des Lilas, Valmont","Madame Garnier","04 60 22 37 15","G-A-R-N-I-E-R","Je suis professeur."],a:[1,3,0,2,4],sayLeft:true},
{type:"ex",n:7,title:"La fiche de Paul Martin",inst:"카드의 정보를 묻는 질문을 quel / quelle 로 완성하세요.",en:"Ask for the information on the card.",
 html:"<b>Nom :</b> Paul Martin · <b>Nationalité :</b> suisse · <b>Adresse :</b> 8 place du Marché, Genève · <b>Tél. :</b> 06 41 33 52 18 · <b>Profession :</b> photographe",kind:"fill",items:[
 {q:"___ est votre nom ? — Paul Martin.",a:["Quel"]},{q:"___ est votre nationalité ? — Je suis suisse.",a:["Quelle"]},{q:"___ est votre adresse ? — 8 place du Marché, à Genève.",a:["Quelle"]},
 {q:"___ est votre numéro de téléphone ? — C’est le 06 41 33 52 18.",a:["Quel"]},{q:"___ est votre profession ? — Je suis photographe.",a:["Quelle"]}]},
{type:"ex",n:8,title:"C’est vrai ? Mettez au négatif",inst:"Emma가 자신에 대해 말합니다. 사실이 아닌 문장을 ne … pas 부정문으로 바꾸세요. (Emma: irlandaise, habite à Oxford, travaille à Londres, parle anglais et français, n’est pas journaliste)",en:"Turn the inaccurate statements into negative sentences.",kind:"write",items:[
 {q:"Je suis française.",a:"Je ne suis pas française."},{q:"J’habite à Lyon.",a:"Je n’habite pas à Lyon."},{q:"Je travaille à Paris.",a:"Je ne travaille pas à Paris."},
 {q:"Je parle espagnol.",a:"Je ne parle pas espagnol."},{q:"Je suis journaliste.",a:"Je ne suis pas journaliste."}]}
]});
