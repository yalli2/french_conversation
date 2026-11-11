(function(){
const TREE=`<svg class="svgmap" viewBox="0 0 620 330" xmlns="http://www.w3.org/2000/svg" font-family="Noto Sans KR, sans-serif" font-size="14" font-weight="700">
<g stroke="#9aa6d6" stroke-width="2" fill="none">
<path d="M240 40 H380"/><path d="M310 40 V80 H170 V110"/><path d="M310 80 H450 V110"/>
<path d="M110 130 H230"/><path d="M390 130 H510"/>
<path d="M170 130 V170 H90 V200"/><path d="M170 170 H230 V200"/><path d="M450 130 V200"/>
<path d="M270 220 H290"/><path d="M280 220 V270"/></g>
<g>
<rect x="170" y="22" width="80" height="36" rx="10" fill="#e8edfb"/><text x="210" y="45" text-anchor="middle">Karim</text>
<rect x="370" y="22" width="90" height="36" rx="10" fill="#fde8ea"/><text x="415" y="45" text-anchor="middle">Yasmina</text>
<rect x="60" y="112" width="80" height="36" rx="10" fill="#e8edfb"/><text x="100" y="135" text-anchor="middle">Samir</text>
<rect x="200" y="112" width="80" height="36" rx="10" fill="#fde8ea"/><text x="240" y="135" text-anchor="middle">Claire</text>
<rect x="380" y="112" width="80" height="36" rx="10" fill="#fde8ea"/><text x="420" y="135" text-anchor="middle">Leïla</text>
<rect x="490" y="112" width="80" height="36" rx="10" fill="#e8edfb"/><text x="530" y="135" text-anchor="middle">Paul</text>
<rect x="45" y="202" width="90" height="36" rx="10" fill="#1d2f6f"/><text x="90" y="225" text-anchor="middle" fill="#fff">Nadia</text>
<rect x="190" y="202" width="80" height="36" rx="10" fill="#e8edfb"/><text x="230" y="225" text-anchor="middle">Rayan</text>
<rect x="290" y="202" width="80" height="36" rx="10" fill="#fde8ea"/><text x="330" y="225" text-anchor="middle">Sofia</text>
<rect x="410" y="202" width="80" height="36" rx="10" fill="#fde8ea"/><text x="450" y="225" text-anchor="middle">Inès</text>
<rect x="240" y="272" width="80" height="36" rx="10" fill="#e8edfb"/><text x="280" y="295" text-anchor="middle">Adam</text>
</g>
</svg><p class="muted" style="font-size:13px;text-align:center">Samir et Leïla sont les enfants de Karim et Yasmina. Nadia et Rayan sont les enfants de Samir et Claire. Inès est la fille de Leïla et Paul. Adam est le fils de Rayan et Sofia.</p>`;
FC.registerUnit({n:8,title:"Quel voyage !",ko:"정말 대단한 여행! — 지난 일과 가족 이야기",
goals:["복합과거 (avoir)","12시간제 시각","가족 이야기","소유형용사 mon, ma, mes…","지시형용사 ce, cet, cette, ces"],
sections:[
{type:"dialogue",title:"J’ai oublié ma valise dans le taxi !",ko:"택시에 가방을 두고 내렸어!",intro:"Emma가 파리에 도착해 Nadia를 만납니다. 여행이 계획보다 조금 더 ‘다사다난’했네요. 무슨 일이 있었나요?",lines:[
 {s:"Nadia",g:"f",fr:"Emma ! Enfin ! Tu as fait bon voyage ?",ko:"엠마! 드디어! 여행은 괜찮았어?"},
 {s:"Emma",g:"f",fr:"Bof… Quelle journée ! D’abord, le train a eu une heure de retard.",ko:"별로… 정말 대단한 하루였어! 먼저, 기차가 한 시간 늦었어."},
 {s:"Nadia",g:"f",fr:"Oh non ! Et ta réunion ?",ko:"어머! 그럼 회의는?"},
 {s:"Emma",g:"f",fr:"J’ai pris un taxi à la gare, mais il y a eu des embouteillages. J’ai téléphoné à mes collègues et ils ont commencé sans moi.",ko:"역에서 택시를 탔는데 길이 막혔어. 동료들한테 전화했더니 나 없이 시작했어."},
 {s:"Nadia",g:"f",fr:"Ma pauvre ! Et après ?",ko:"불쌍해라! 그다음엔?"},
 {s:"Emma",g:"f",fr:"Après la réunion, j’ai pris un autre taxi pour venir ici… et j’ai oublié ma valise dans le taxi !",ko:"회의 끝나고 여기 오려고 다른 택시를 탔는데… 택시에 가방을 두고 내렸어!"},
 {s:"Nadia",g:"f",fr:"Ce n’est pas vrai ! Tu as appelé la compagnie de taxis ?",ko:"말도 안 돼! 택시 회사에 전화했어?"},
 {s:"Emma",g:"f",fr:"Oui, et heureusement, le chauffeur a trouvé la valise. Il va la rapporter ce soir, vers neuf heures.",ko:"응, 다행히 기사님이 가방을 찾았대. 오늘 저녁 9시쯤 가져다주실 거야."},
 {s:"Nadia",g:"f",fr:"Ouf ! Bon, tu as mangé ? J’ai préparé un couscous.",ko:"휴! 자, 밥은 먹었어? 쿠스쿠스 만들었어."},
 {s:"Emma",g:"f",fr:"Non, je n’ai rien mangé depuis ce matin. Merci, Nadia, tu es un ange !",ko:"아니, 아침부터 아무것도 못 먹었어. 고마워 나디아, 넌 천사야!"}]},
{type:"notes",title:"Le passé composé avec avoir",ko:"복합과거 (avoir + 과거분사)",html:`
<p>완료된 과거의 일을 말할 때: <b>avoir (현재형) + 과거분사</b></p>
<table><tr><td class="say">j’ai mangé</td><td class="say">nous avons mangé</td></tr><tr><td class="say">tu as mangé</td><td class="say">vous avez mangé</td></tr><tr><td class="say">il / elle a mangé</td><td class="say">ils / elles ont mangé</td></tr></table>
<h3>Le participe passé — 과거분사</h3>
<table><tr><th>규칙</th><th>불규칙 (꼭 외우기!)</th></tr>
<tr><td>-er → <b>-é</b> : manger → <span class="say">mangé</span>, oublier → <span class="say">oublié</span><br>-ir → <b>-i</b> : finir → <span class="say">fini</span>, dormir → <span class="say">dormi</span></td>
<td><span class="say">faire → fait</span> · <span class="say">prendre → pris</span> · <span class="say">avoir → eu</span> · <span class="say">être → été</span> · <span class="say">voir → vu</span> · <span class="say">lire → lu</span> · <span class="say">boire → bu</span> · <span class="say">écrire → écrit</span> · <span class="say">mettre → mis</span> · <span class="say">pouvoir → pu</span> · <span class="say">vouloir → voulu</span> · <span class="say">devoir → dû</span></td></tr></table>
<h3>La négation — 부정</h3><p>ne … pas는 <b>avoir</b>를 감싸요: <b class="say">Je n’ai pas mangé.</b> · <b class="say">Ils n’ont pas fini.</b> · <b class="say">Je n’ai rien mangé.</b></p>
<h3>L’heure (12 h) — 일상 시각 표현</h3>
<table><tr><td class="say" data-say="Il est neuf heures">9 h 00 — Il est neuf heures.</td><td class="say" data-say="Il est neuf heures et quart">9 h 15 — neuf heures et quart</td></tr><tr><td class="say" data-say="Il est neuf heures et demie">9 h 30 — neuf heures et demie</td><td class="say" data-say="Il est dix heures moins le quart">9 h 45 — dix heures moins le quart</td></tr>
<tr><td class="say" data-say="Il est midi">12 h — midi</td><td class="say" data-say="Il est minuit">24 h — minuit</td></tr><tr><td class="say" data-say="Il est trois heures de l'après-midi">15 h — trois heures de l’après-midi</td><td class="say" data-say="Il est huit heures du soir">20 h — huit heures du soir</td></tr></table>`},
{type:"dialogue",title:"Photos de famille",ko:"가족 사진",intro:"Nadia가 Emma에게 가족 사진을 보여 줍니다. 아래 가계도를 보며 들어 보세요.",lines:[
 {s:"Nadia",g:"f",fr:"Regarde, cette photo, c’est l’anniversaire de mon grand-père, Karim. Il a quatre-vingts ans.",ko:"봐, 이 사진은 우리 할아버지 카림의 생신이야. 여든 살이셔."},
 {s:"Emma",g:"f",fr:"Il a l’air en pleine forme ! Et cette dame à côté de lui ?",ko:"아주 건강해 보이신다! 옆에 계신 분은?"},
 {s:"Nadia",g:"f",fr:"C’est ma grand-mère, Yasmina. Et là, ce sont mes parents, Samir et Claire.",ko:"우리 할머니 야스미나야. 그리고 여기는 우리 부모님, 사미르와 클레르."},
 {s:"Emma",g:"f",fr:"Ta mère est française ?",ko:"어머니는 프랑스 분이셔?"},
 {s:"Nadia",g:"f",fr:"Oui, elle est bretonne. Mon père est né en Algérie, mais il habite en France depuis quarante ans.",ko:"응, 브르타뉴 출신이야. 아빠는 알제리에서 태어났지만 프랑스에서 40년째 살고 계셔."},
 {s:"Emma",g:"f",fr:"Et ce jeune homme avec le bébé ?",ko:"아기 안고 있는 이 젊은 남자는?"},
 {s:"Nadia",g:"f",fr:"C’est mon frère, Rayan, avec sa femme Sofia et leur fils Adam. C’est mon neveu, il a un an.",ko:"우리 오빠 라이언이랑 아내 소피아, 그리고 그 아들 아담이야. 내 조카고, 한 살이야."},
 {s:"Emma",g:"f",fr:"Il est adorable ! Et cette fille aux cheveux longs ?",ko:"너무 귀엽다! 그리고 이 긴 머리 여자애는?"},
 {s:"Nadia",g:"f",fr:"C’est ma cousine Inès, la fille de ma tante Leïla et de mon oncle Paul.",ko:"사촌 이네스야. 레일라 이모(고모)와 폴 이모부의 딸이야."}]},
{type:"notes",title:"La famille, les possessifs et les démonstratifs",ko:"가족, 소유형용사, 지시형용사",html:TREE+`
<h3>Les possessifs — 소유형용사 (소유물의 성·수에 맞춤!)</h3>
<table><tr><th></th><th>남성 단수</th><th>여성 단수</th><th>복수</th></tr>
<tr><td>나의</td><td class="say">mon père</td><td class="say">ma mère</td><td class="say">mes parents</td></tr><tr><td>너의</td><td class="say">ton frère</td><td class="say">ta sœur</td><td class="say">tes cousins</td></tr>
<tr><td>그/그녀의</td><td class="say">son oncle</td><td class="say">sa tante</td><td class="say">ses enfants</td></tr><tr><td>우리의</td><td class="say" colspan="2">notre fils / notre fille</td><td class="say">nos amis</td></tr>
<tr><td>당신(들)의</td><td class="say" colspan="2">votre mari / votre femme</td><td class="say">vos photos</td></tr><tr><td>그들의</td><td class="say" colspan="2">leur neveu / leur nièce</td><td class="say">leurs enfants</td></tr></table>
<div class="tip">💡 모음으로 시작하는 여성 명사 앞에서는 ma → <b>mon</b>: <b class="say">mon amie, mon école</b>. sa는 ‘그의’도 ‘그녀의’도 될 수 있어요: Paul et <i>sa</i> femme / Sofia et <i>son</i> mari.</div>
<h3>Les démonstratifs — 이/그/저</h3>
<p><b class="say">ce billet</b> (남성) · <b class="say">cet hôtel, cet ami</b> (남성, 모음·h 앞) · <b class="say">cette photo</b> (여성) · <b class="say">ces enfants</b> (복수)</p>`},
{type:"vocab",items:[["le grand-père / la grand-mère","할아버지 / 할머니"],["les parents","부모님; 친척"],["le père / la mère","아버지 / 어머니"],["le frère / la sœur","형제 / 자매"],["l’oncle / la tante","삼촌 / 이모·고모"],["le cousin / la cousine","사촌"],["le neveu / la nièce","조카"],["le mari / la femme","남편 / 아내"],["le beau-frère / la belle-sœur","처남·매형 / 올케·형수"],["une valise","여행 가방"],["oublier","잊다, 두고 오다"],["avoir du retard","지연되다"],["un embouteillage","교통 체증"],["heureusement","다행히"],["un anniversaire","생일"],["avoir l’air…","…처럼 보이다"],["et quart / et demie","15분 / 30분"],["moins le quart","15분 전"],["midi / minuit","정오 / 자정"],["hier","어제"]]},
{type:"ex",n:1,title:"Au passé composé",inst:"괄호 안 동사를 복합과거로 쓰세요.",en:"Put the verbs in the passé composé.",kind:"fill",items:[
 {q:"J’ ___ (manger) au restaurant.",a:["ai mangé"]},{q:"Il ___ (faire) les courses.",a:["a fait"]},{q:"Nous ___ (jouer) au tennis.",a:["avons joué"]},
 {q:"Vous ___ (prendre) le train ?",a:["avez pris"]},{q:"Elles ___ (voir) un bon film.",a:["ont vu"]},{q:"Tu ___ (finir) tes devoirs ?",a:["as fini"]},{q:"J’ ___ (lire) ce livre.",a:["ai lu"]}]},
{type:"ex",n:2,title:"Les aventures d’Emma",inst:"Emma의 하루를 복합과거로 다시 이야기하세요. (주어: Elle)",en:"Retell Emma's adventures.",kind:"write",items:[
 {q:"prendre un taxi à la gare",a:"Elle a pris un taxi à la gare."},{q:"téléphoner à ses collègues",a:"Elle a téléphoné à ses collègues."},
 {q:"oublier sa valise dans le taxi",a:"Elle a oublié sa valise dans le taxi."},{q:"appeler la compagnie de taxis",a:"Elle a appelé la compagnie de taxis."},
 {q:"ne rien manger depuis le matin",a:"Elle n’a rien mangé depuis le matin."}]},
{type:"ex",n:3,title:"À la forme négative",inst:"연습 1의 문장을 부정문으로 바꾸세요.",en:"Put the sentences from Exercise 1 in the negative.",kind:"write",items:[
 {q:"J’ai mangé au restaurant.",a:"Je n’ai pas mangé au restaurant."},{q:"Il a fait les courses.",a:"Il n’a pas fait les courses."},{q:"Nous avons joué au tennis.",a:"Nous n’avons pas joué au tennis."},
 {q:"Vous avez pris le train ?",a:"Vous n’avez pas pris le train ?"},{q:"Elles ont vu un bon film.",a:"Elles n’ont pas vu de bon film.|Elles n’ont pas vu un bon film."},{q:"J’ai lu ce livre.",a:"Je n’ai pas lu ce livre."}]},
{type:"ex",n:4,title:"La liste de Max",inst:"Max가 상사의 부탁 목록에서 한 일(✔)과 못 한 일(✘)입니다. 복합과거 문장으로 쓰세요 (주어: Il).",en:"Say what Max did and didn't do.",kind:"write",items:[
 {q:"✔ réserver la salle de réunion",a:"Il a réservé la salle de réunion."},{q:"✘ envoyer le rapport",a:"Il n’a pas envoyé le rapport."},
 {q:"✔ téléphoner à M. Dubois",a:"Il a téléphoné à M. Dubois.|Il a téléphoné à monsieur Dubois."},{q:"✘ acheter des enveloppes",a:"Il n’a pas acheté d’enveloppes.|Il n'a pas acheté d'enveloppes"},
 {q:"✔ imprimer les documents",a:"Il a imprimé les documents."},{q:"✘ faire les photocopies",a:"Il n’a pas fait les photocopies."}]},
{type:"ex",n:5,title:"Quelle heure est-il ?",inst:"24시간제 시각을 일상 표현(12시간제)으로 바꾼 것을 고르세요.",en:"How do you say these times with the 12-hour clock?",kind:"choice",items:[
 {q:"14 h 15",o:["deux heures et quart de l’après-midi","quatorze heures moins le quart","deux heures moins le quart"],a:0},
 {q:"9 h 30",o:["neuf heures et quart","neuf heures et demie du matin","dix heures moins la demie"],a:1},
 {q:"20 h 45",o:["huit heures et quart du soir","neuf heures moins le quart du soir","vingt heures moins le quart"],a:1},
 {q:"12 h 00",o:["minuit","midi","douze heures du soir"],a:1},{q:"17 h 10",o:["cinq heures dix de l’après-midi","sept heures dix du soir","cinq heures moins dix"],a:0},
 {q:"23 h 50",o:["onze heures cinquante du matin","minuit moins dix","minuit et dix"],a:1}]},
{type:"ex",n:6,title:"Qui est qui ?",inst:"가계도를 보고 관계를 쓰세요.",en:"Explain who these people are.",html:TREE,example:"Karim et Yasmina → Karim est le mari de Yasmina.",kind:"fill",items:[
 {q:"Samir est le ___ de Nadia.",a:["père"]},{q:"Leïla est la ___ de Nadia.",a:["tante"]},{q:"Inès est la ___ de Nadia.",a:["cousine"]},
 {q:"Adam est le ___ de Nadia.",a:["neveu"]},{q:"Yasmina est la ___ de Rayan.",a:["grand-mère"]},{q:"Sofia est la ___ de Rayan.",a:["femme"]},{q:"Paul est l’ ___ de Rayan.",a:["oncle"]}]},
{type:"ex",n:7,title:"Les possessifs",inst:"해당 인물이 되어 소유형용사로 답하세요.",en:"Use possessive adjectives.",html:TREE,kind:"fill",items:[
 {q:"Vous êtes Karim. Qui est Yasmina ? — C’est ___ femme.",a:["ma"]},{q:"Vous êtes Karim. Qui sont Samir et Leïla ? — Ce sont ___ enfants.",a:["mes"]},
 {q:"Vous êtes Nadia. Qui est Rayan ? — C’est ___ frère.",a:["mon"]},{q:"Nadia parle à Rayan : « Adam, c’est ___ fils ! »",a:["ton"]},
 {q:"Rayan et Sofia : « Adam, c’est ___ fils. »",a:["notre"]},{q:"Leïla et Paul ? Inès est ___ fille.",a:["leur"]},{q:"Inès ? Leïla est ___ mère et Paul est ___ père.",a:["sa","son"]}]},
{type:"ex",n:8,title:"Ce, cet, cette, ces",inst:"ce, cet, cette, ces 중 알맞은 것을 쓰세요.",en:"Fill in with ce, cet, cette, ces.",kind:"fill",items:[
 {q:"Avec ___ billet, vous pouvez prendre ___ train.",a:["ce","ce"]},{q:"___ hôtel est très confortable.",a:["Cet"]},{q:"Tu aimes ___ photo ?",a:["cette"]},
 {q:"___ enfants sont adorables.",a:["Ces"]},{q:"Qui est ___ homme ?",a:["cet"]},{q:"Je voudrais ___ valise rouge.",a:["cette"]}]},
{type:"reading",title:"La famille française aujourd’hui",ko:"오늘날의 프랑스 가족 (각색된 읽기 자료)",html:`<p>La famille française a beaucoup changé en cinquante ans. Le modèle traditionnel — un couple marié avec deux ou trois enfants — existe toujours, mais il n’est plus le seul.</p><p>Aujourd’hui, beaucoup de jeunes préfèrent d’abord terminer leurs études, trouver un emploi stable et profiter de leur liberté. On se marie donc plus tard, vers trente-cinq ans en moyenne, et beaucoup de couples choisissent le PACS, une union civile plus simple que le mariage.</p><p>Il y a aussi plus de familles recomposées : des parents séparés qui vivent avec un nouveau partenaire et les enfants de chacun. Les familles monoparentales, avec un seul parent, sont également plus nombreuses.</p><p>Mais une chose ne change pas : pour la majorité des Français, la famille reste la valeur la plus importante.</p>`},
{type:"ex",n:9,title:"Compréhension écrite",inst:"위 읽기 자료를 읽고 질문에 답하세요.",en:"Read the text and answer.",kind:"choice",items:[
 {q:"Le modèle traditionnel de la famille…",o:["n’existe plus","existe toujours, mais il n’est plus le seul","est le seul modèle aujourd’hui"],a:1},
 {q:"Pourquoi les jeunes se marient-ils plus tard ?",o:["Ils veulent d’abord finir leurs études et trouver un emploi stable.","Le mariage est interdit avant 35 ans.","Ils n’aiment pas les enfants."],a:0},
 {q:"Qu’est-ce que le PACS ?",o:["un examen","une union civile plus simple que le mariage","une famille avec un seul parent"],a:1},
 {q:"Une famille recomposée, c’est…",o:["une famille avec un seul parent","des parents séparés qui vivent avec un nouveau partenaire et les enfants de chacun","des grands-parents qui vivent avec leurs petits-enfants"],a:1},
 {q:"Pour la majorité des Français, la famille est…",o:["moins importante qu’avant","la valeur la plus importante","un modèle dépassé"],a:1}]}
]});
})();
