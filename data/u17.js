FC.registerUnit({n:17,title:"On discute de la maison",ko:"집에 대해 의논하기 — 바람·의무와 대명사",
goals:["접속법으로 바람·선호·의무 표현","pendant (~동안)","전치사를 쓰는/안 쓰는 동사","대명사 le, la, les 와 lui, leur"],
sections:[
{type:"dialogue",title:"Coup de foudre",ko:"첫눈에 반하다",intro:"Gérard와 Martine이 Lefèvre 부인의 집에 대해 이야기합니다. 둘 다 반했지만 Gérard는 걱정이 좀 있네요.",lines:[
 {s:"Martine",g:"f",fr:"J’ai vraiment eu le coup de foudre pour cette maison ! Je voudrais qu’on fasse une offre tout de suite.",ko:"그 집에 정말 첫눈에 반했어! 당장 가격 제안을 했으면 좋겠어."},
 {s:"Gérard",g:"m",fr:"Moi aussi, elle me plaît beaucoup. Mais il faut que nous soyons raisonnables. Elle coûte cher.",ko:"나도 아주 마음에 들어. 그런데 신중해야 해. 비싸잖아."},
 {s:"Martine",g:"f",fr:"Nous avons travaillé pendant trente-cinq ans ! On peut se faire plaisir, non ?",ko:"우리 35년 동안 일했잖아! 우리도 즐길 수 있지, 안 그래?"},
 {s:"Gérard",g:"m",fr:"Bien sûr. Mais le toit est vieux. Il faudra le refaire. Je préférerais qu’un artisan le voie avant.",ko:"물론이지. 그런데 지붕이 낡았어. 다시 해야 할 거야. 먼저 기술자가 봤으면 좋겠어."},
 {s:"Martine",g:"f",fr:"D’accord. Tu pourrais téléphoner à ton ami Bruno ? Il est couvreur.",ko:"알았어. 친구 브뤼노한테 전화해 볼래? 지붕 기술자잖아."},
 {s:"Gérard",g:"m",fr:"Bonne idée, je vais lui parler ce soir. Et toi, appelle Mme Garnier et demande-lui si le prix est négociable.",ko:"좋은 생각이야, 오늘 저녁에 그에게 말할게. 당신은 가르니에 씨한테 전화해서 가격 협상이 되는지 물어봐."},
 {s:"Martine",g:"f",fr:"Je l’appelle demain matin. J’aimerais tellement qu’on puisse y passer Noël avec les enfants !",ko:"내일 아침에 전화할게. 거기서 아이들과 크리스마스를 보낼 수 있으면 정말 좋겠다!"}]},
{type:"notes",title:"Le subjonctif",ko:"접속법 — 바람·선호·의무 + que",html:`
<p><b>vouloir que, aimer que, préférer que, il faut que</b> 뒤에서 <b>주어가 다를 때</b> 접속법을 써요.</p>
<p>만드는 법: <b>ils 현재형</b>에서 -ent를 빼고 <b>-e, -es, -e, -ions, -iez, -ent</b></p>
<table><tr><th>partir (ils partent)</th><th>faire</th><th>être</th><th>avoir</th></tr>
<tr><td class="say">que je parte</td><td class="say">que je fasse</td><td class="say">que je sois</td><td class="say">que j’aie</td></tr><tr><td class="say">que tu partes</td><td class="say">que tu fasses</td><td class="say">que tu sois</td><td class="say">que tu aies</td></tr>
<tr><td class="say">qu’il parte</td><td class="say">qu’il fasse</td><td class="say">qu’il soit</td><td class="say">qu’il ait</td></tr><tr><td class="say">que nous partions</td><td class="say">que nous fassions</td><td class="say">que nous soyons</td><td class="say">que nous ayons</td></tr>
<tr><td class="say">que vous partiez</td><td class="say">que vous fassiez</td><td class="say">que vous soyez</td><td class="say">que vous ayez</td></tr><tr><td class="say">qu’ils partent</td><td class="say">qu’ils fassent</td><td class="say">qu’ils soient</td><td class="say">qu’ils aient</td></tr></table>
<p>기타 불규칙: <span class="say">aller → que j’aille</span> · <span class="say">pouvoir → que je puisse</span> · <span class="say">venir → que je vienne</span> · <span class="say">voir → que je voie</span></p>
<div class="tip">💡 주어가 같으면 동사원형: <b class="say">Je veux partir.</b> (내가 떠나고 싶다) ↔ <b class="say">Je veux que tu partes.</b> (네가 떠나길 원한다)</div>
<h3>Pendant — ~동안 (끝난 기간)</h3><p><b class="say">Nous avons travaillé pendant trente-cinq ans.</b> · <b class="say">Il a dormi pendant trois heures.</b></p>`},
{type:"dialogue",title:"L’offre",ko:"가격 제안",intro:"Gérard와 Martine이 Garnier 부동산을 통해 가격을 제안했지만 아직 답이 없습니다. Martine이 Mme Garnier에게 전화합니다.",lines:[
 {s:"Mme Garnier",g:"f",fr:"Agence Garnier, bonjour.",ko:"가르니에 부동산입니다, 안녕하세요."},
 {s:"Martine",g:"f",fr:"Bonjour, madame Garnier, c’est Martine Roussel. Je vous appelle au sujet de notre offre pour la maison de Mme Lefèvre.",ko:"안녕하세요, 가르니에 씨, 마르틴 루셀이에요. 르페브르 부인 집에 대한 저희 제안 때문에 전화드려요."},
 {s:"Mme Garnier",g:"f",fr:"Ah, bonjour madame Roussel ! Je lui ai transmis votre offre hier. Elle veut y réfléchir pendant le week-end.",ko:"아, 안녕하세요 루셀 씨! 어제 그분께 제안을 전달했어요. 주말 동안 생각해 보고 싶대요."},
 {s:"Martine",g:"f",fr:"Je comprends. Vous lui avez dit que nous pouvions signer rapidement ?",ko:"이해해요. 저희가 빨리 계약할 수 있다고 말씀하셨어요?"},
 {s:"Mme Garnier",g:"f",fr:"Oui, je le lui ai expliqué. Mais d’autres clients ont visité la maison. Il faut que vous soyez patients.",ko:"네, 설명해 드렸어요. 하지만 다른 고객들도 집을 봤어요. 인내심을 가지셔야 해요."},
 {s:"Martine",g:"f",fr:"D’accord. Vous nous appelez dès que vous avez une réponse ?",ko:"알겠어요. 답이 오면 바로 저희한테 전화 주실 거죠?"},
 {s:"Mme Garnier",g:"f",fr:"Bien sûr, je vous téléphone lundi au plus tard. Et je vais leur envoyer un e-mail aussi, aux autres clients, pour savoir s’ils sont toujours intéressés.",ko:"물론이죠, 늦어도 월요일에 전화드릴게요. 다른 고객들에게도 아직 관심이 있는지 알아보려고 이메일을 보낼 거예요."},
 {s:"Martine",g:"f",fr:"Merci beaucoup. À lundi, alors !",ko:"정말 감사합니다. 그럼 월요일에요!"}]},
{type:"notes",title:"Compléments directs et indirects",ko:"직접목적어와 간접목적어 대명사",html:`
<table><tr><th>직접 (전치사 없음)</th><th>간접 (à + 사람)</th></tr>
<tr><td>appeler qn, inviter qn, voir qn, aimer qn, aider qn, attendre qn</td><td>parler à qn, téléphoner à qn, écrire à qn, dire à qn, demander à qn, répondre à qn, envoyer à qn, offrir à qn</td></tr>
<tr><td class="say">J’appelle Martine. → Je l’appelle.</td><td class="say">Je téléphone à Martine. → Je lui téléphone.</td></tr>
<tr><td class="say">J’invite mes amis. → Je les invite.</td><td class="say">J’écris à mes amis. → Je leur écris.</td></tr></table>
<table><tr><th></th><th>직접</th><th>간접</th></tr><tr><td>그/그녀</td><td class="say">le / la / l’</td><td class="say">lui</td></tr><tr><td>그들</td><td class="say">les</td><td class="say">leur</td></tr></table>
<div class="tip">💡 주의: 영어와 달리 <b>téléphoner à</b>(간접), <b>attendre</b>(직접), <b>chercher</b>(직접), <b>écouter</b>(직접).</div>`},
{type:"vocab",items:[["avoir le coup de foudre","첫눈에 반하다"],["faire une offre","가격을 제안하다"],["raisonnable","합리적인, 신중한"],["se faire plaisir","자신을 즐겁게 하다"],["le toit","지붕"],["un artisan","기술자, 장인"],["négociable","협상 가능한"],["il faut que…","…해야 한다"],["je voudrais que…","…하기를 바란다"],["pendant","~동안"],["transmettre","전달하다"],["réfléchir","곰곰이 생각하다"],["signer","서명하다"],["être patient","인내심을 갖다"],["dès que","…하자마자"],["au plus tard","늦어도"],["téléphoner à qn","~에게 전화하다"],["parler à qn","~에게 말하다"],["lui / leur","그(녀)에게 / 그들에게"],["intéressé(e)","관심 있는"]]},
{type:"ex",n:1,title:"Le subjonctif",inst:"괄호 속 동사를 접속법으로 쓰세요.",en:"Put the verbs in the subjunctive.",kind:"fill",items:[
 {q:"Il faut que nous ___ (partir) de bonne heure.",a:["partions"]},{q:"Je voudrais que tu ___ (venir) avec moi.",a:["viennes"]},
 {q:"J’aimerais mieux qu’ils ___ (faire) leur travail.",a:["fassent"]},{q:"Il faut que vous ___ (être) patients.",a:["soyez"]},
 {q:"Mes parents veulent que j’ ___ (avoir) de bonnes notes.",a:["aie"]},{q:"Je préfère qu’on ___ (aller) au restaurant.",a:["aille"]},{q:"Il faut que tu ___ (finir) tes devoirs.",a:["finisses"]}]},
{type:"ex",n:2,title:"Infinitif ou que + subjonctif ?",inst:"프랑스어로 번역하세요. 주어가 같은지 다른지 주의하세요!",en:"Translate.",kind:"write",items:[
 {q:"I want you (tu) to come with us.",a:"Je veux que tu viennes avec nous."},{q:"She needs to buy some butter. (il faut que)",a:"Il faut qu’elle achète du beurre."},
 {q:"He would like to go on holiday.",a:"Il voudrait partir en vacances.|Il aimerait partir en vacances.|Il voudrait aller en vacances."},
 {q:"We would like them to stay.",a:"Nous voudrions qu’ils restent.|Nous aimerions qu’ils restent.|On voudrait qu’ils restent."},{q:"I prefer to stay at home.",a:"Je préfère rester à la maison."}]},
{type:"ex",n:3,title:"Annie et son fils",inst:"Annie가 18살 아들에게 말합니다. 괄호의 표현으로 접속법 문장을 쓰세요.",en:"Make Annie talk to her son.",example:"ranger ta chambre (je voudrais que) → Je voudrais que tu ranges ta chambre.",kind:"write",items:[
 {q:"faire la vaisselle (il faut que)",a:"Il faut que tu fasses la vaisselle."},{q:"rentrer avant minuit (je voudrais que)",a:"Je voudrais que tu rentres avant minuit."},
 {q:"être poli avec tes grands-parents (j’aimerais que)",a:"J’aimerais que tu sois poli avec tes grands-parents."},{q:"aller chez le coiffeur (il faudrait que)",a:"Il faudrait que tu ailles chez le coiffeur."},
 {q:"avoir ton permis de conduire (je voudrais que)",a:"Je voudrais que tu aies ton permis de conduire."}]},
{type:"ex",n:4,title:"Pendant",inst:"예시처럼 pendant + 복합과거 문장을 쓰세요.",en:"Make sentences with pendant.",example:"Elle / travailler / vingt ans → Elle a travaillé pendant vingt ans.",kind:"write",items:[
 {q:"Paul / dormir / trois heures",a:"Paul a dormi pendant trois heures."},{q:"Nous / habiter à Tours / dix ans",a:"Nous avons habité à Tours pendant dix ans."},
 {q:"Il / pleuvoir / tout le mois de juillet",a:"Il a plu pendant tout le mois de juillet."},{q:"Je / attendre / une heure",a:"J’ai attendu pendant une heure."},
 {q:"Ils / marcher / deux jours",a:"Ils ont marché pendant deux jours."}]},
{type:"ex",n:5,title:"Direct ou indirect ?",inst:"밑줄 친 목적어를 대신할 대명사를 고르세요.",en:"Direct or indirect object?",kind:"choice",items:[
 {q:"Elle parle <u>à sa sœur</u>.",o:["la","lui"],a:1},{q:"Tu invites <u>Marc</u> ce soir ?",o:["le","lui"],a:0},{q:"J’ai vu <u>les amis de Sandra</u>.",o:["les","leur"],a:0},
 {q:"Nous téléphonons <u>à nos parents</u>.",o:["les","leur"],a:1},{q:"Il attend <u>sa copine</u>.",o:["la","lui"],a:0},{q:"Vous écrivez <u>au directeur</u> ?",o:["le","lui"],a:1}]},
{type:"ex",n:6,title:"Garder le contact",inst:"사람들과 얼마나 자주 연락하나요? 필요하면 à(au, aux)를 쓰고, 필요 없으면 빈칸에 <b>x</b>를 쓰세요.",en:"How often do you contact these people?",example:"J’appelle mes amis tous les jours. (appeler = 직접)",kind:"fill",items:[
 {q:"Je téléphone ___ ma grand-mère le dimanche.",a:["à"]},{q:"J’écris ___ mes cousins à Noël.",a:["à"]},{q:"Je vois ___ mes amis le week-end.",a:["x"]},
 {q:"J’envoie des messages ___ mon frère tous les jours.",a:["à"]},{q:"J’attends ___ mon ami devant le cinéma.",a:["x"]},{q:"Je parle ___ voisins de temps en temps.",a:["aux"]}]},
{type:"ex",n:7,title:"le, la, l’, les, lui ou leur ?",inst:"알맞은 대명사를 쓰세요.",en:"Fill in the gaps.",kind:"fill",items:[
 {q:"J’ai vu Pierre hier et je ___ ai parlé de toi.",a:["lui"]},{q:"J’ai invité Martha à manger. Tu ___ connais ?",a:["la"]},
 {q:"Les enfants vont au lit. Tu vas ___ raconter une histoire ?",a:["leur"]},{q:"Ce gâteau ? Je ___ ai fait moi-même.",a:["l’|l'"]},
 {q:"Mes parents ? Je ___ téléphone tous les soirs.",a:["leur"]},{q:"Ces chaussures ? Je ___ ai achetées en solde.",a:["les"]}]},
{type:"ex",n:8,title:"Coup de foudre pour Bernard",inst:"Bernard가 첫눈에 반한 여성에 대한 계획을 말합니다. 대명사(la / lui)를 사용해 문장을 쓰세요.",en:"Bernard makes plans using pronouns.",example:"inviter au restaurant (je veux) → Je veux l’inviter au restaurant.",kind:"write",items:[
 {q:"téléphoner ce soir (je vais)",a:"Je vais lui téléphoner ce soir."},{q:"offrir des fleurs (je voudrais)",a:"Je voudrais lui offrir des fleurs."},
 {q:"revoir demain (j’aimerais)",a:"J’aimerais la revoir demain."},{q:"écrire un poème (je vais)",a:"Je vais lui écrire un poème."},
 {q:"présenter à mes parents (je veux)",a:"Je veux la présenter à mes parents."}]}
]});
