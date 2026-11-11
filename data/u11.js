FC.registerUnit({n:11,title:"Problèmes de santé",ko:"건강 문제 — 아픈 곳 말하고 조언하기",
goals:["대명동사 더 알기","아픈 곳·건강 문제 말하기","depuis (~이래로, ~동안)","조언하기 (tu devrais / vous devriez)","명령법 (vous)"],
sections:[
{type:"dialogue",title:"Gérard ne va pas bien",ko:"제라르의 몸 상태가 좋지 않아요",intro:"4과에서 만난 Gérard가 몸이 좋지 않습니다. 동료 <b>Thierry</b>가 조언을 해 줍니다.",lines:[
 {s:"Thierry",g:"m",fr:"Ça ne va pas, Gérard ? Tu as l’air fatigué.",ko:"제라르, 괜찮아? 피곤해 보여."},
 {s:"Gérard",g:"m",fr:"Je suis épuisé. Je dors mal depuis deux semaines. Je me réveille à trois heures du matin et je ne me rendors pas.",ko:"완전히 지쳤어. 2주째 잠을 잘 못 자. 새벽 3시에 깨서 다시 잠들지 못해."},
 {s:"Thierry",g:"m",fr:"Tu travailles trop. Tu te couches à quelle heure ?",ko:"일을 너무 많이 해서 그래. 몇 시에 자?"},
 {s:"Gérard",g:"m",fr:"Vers minuit. Et je me lève à six heures pour ouvrir la pharmacie.",ko:"자정쯤. 그리고 약국 문을 열려고 6시에 일어나."},
 {s:"Thierry",g:"m",fr:"Ce n’est pas assez ! Tu devrais te coucher plus tôt. Et tu bois combien de cafés par jour ?",ko:"그건 충분하지 않아! 더 일찍 자야 해. 그리고 커피는 하루에 몇 잔 마셔?"},
 {s:"Gérard",g:"m",fr:"Cinq ou six… Et en plus, j’ai mal au dos depuis lundi.",ko:"대여섯 잔… 게다가 월요일부터 허리가 아파."},
 {s:"Thierry",g:"m",fr:"Tu devrais boire moins de café et faire un peu de sport. Et tu devrais aller chez le médecin !",ko:"커피를 덜 마시고 운동을 좀 해야겠다. 그리고 병원에 가 봐야 해!"},
 {s:"Gérard",g:"m",fr:"Tu as raison. Je vais prendre rendez-vous.",ko:"네 말이 맞아. 진료 예약을 할게."}]},
{type:"notes",title:"Avoir mal, avoir l’air, depuis, conseiller",ko:"아픈 곳, ~처럼 보이다, depuis, 조언",html:`
<h3>Avoir mal à … — ~가 아프다</h3>
<table><tr><td class="say">J’ai mal à la tête.</td><td>머리</td><td class="say">J’ai mal au dos.</td><td>등/허리</td></tr><tr><td class="say">J’ai mal à la gorge.</td><td>목</td><td class="say">J’ai mal au ventre.</td><td>배</td></tr><tr><td class="say">J’ai mal aux dents.</td><td>이</td><td class="say">J’ai mal à l’oreille.</td><td>귀</td></tr><tr><td class="say">J’ai mal aux pieds.</td><td>발</td><td class="say">Je me suis cassé la jambe.</td><td>다리가 부러졌다</td></tr></table>
<p>기타: <b class="say">J’ai de la fièvre. J’ai un rhume. Je tousse. Je suis enrhumé.</b></p>
<h3>Avoir l’air + 형용사 — ~해 보이다</h3><p><b class="say">Tu as l’air fatigué.</b> · <b class="say">Elle a l’air contente.</b></p>
<h3>Depuis — ~이래로 / ~째 (지금도 계속!)</h3>
<p>프랑스어는 <b>현재형 + depuis</b>를 써요: <b class="say">Je dors mal depuis deux semaines.</b> (2주째 잘 못 자고 있다) · <b class="say">Il habite ici depuis 2019.</b></p>
<h3>Donner un conseil — 조언 (devoir 조건법)</h3>
<table><tr><td class="say">je devrais</td><td class="say">nous devrions</td></tr><tr><td class="say">tu devrais</td><td class="say">vous devriez</td></tr><tr><td class="say">il / elle devrait</td><td class="say">ils / elles devraient</td></tr></table>
<p><b class="say">Tu devrais te reposer.</b> · <b class="say">Vous devriez arrêter de fumer.</b> (대명동사는 대명사도 바꿔요: te reposer / vous reposer)</p>`},
{type:"dialogue",title:"Chez le médecin",ko:"병원에서",intro:"Gérard가 의사를 찾아갑니다. 의사가 명령법으로 지시를 내립니다.",lines:[
 {s:"Médecin",g:"f",fr:"Bonjour, monsieur Roussel. Asseyez-vous. Qu’est-ce qui ne va pas ?",ko:"안녕하세요, 루셀 씨. 앉으세요. 어디가 안 좋으세요?"},
 {s:"Gérard",g:"m",fr:"J’ai mal au dos depuis une semaine, et je dors très mal.",ko:"일주일째 허리가 아프고, 잠을 잘 못 자요."},
 {s:"Médecin",g:"f",fr:"Vous avez fait un effort particulier ? Vous avez porté quelque chose de lourd ?",ko:"특별히 무리하셨어요? 무거운 걸 드셨나요?"},
 {s:"Gérard",g:"m",fr:"Oui, j’ai porté des cartons de médicaments à la pharmacie.",ko:"네, 약국에서 약 상자를 날랐어요."},
 {s:"Médecin",g:"f",fr:"Bon. Allongez-vous là, s’il vous plaît… Respirez profondément… Ça fait mal ici ?",ko:"자. 여기 누우세요… 깊이 숨 쉬세요… 여기 아프세요?"},
 {s:"Gérard",g:"m",fr:"Aïe ! Oui, très mal.",ko:"아야! 네, 많이 아파요."},
 {s:"Médecin",g:"f",fr:"Ce n’est pas grave, c’est musculaire. Prenez ces médicaments trois fois par jour, pendant une semaine. Ne portez rien de lourd et reposez-vous.",ko:"심각하지 않아요, 근육 문제예요. 이 약을 일주일 동안 하루 세 번 드세요. 무거운 건 들지 마시고 쉬세요."},
 {s:"Gérard",g:"m",fr:"Et pour le sommeil ?",ko:"잠은요?"},
 {s:"Médecin",g:"f",fr:"Buvez moins de café, surtout après midi, et faites de la marche le soir. Revenez me voir dans dix jours.",ko:"커피를 덜 드시고, 특히 정오 이후엔 드시지 마세요. 저녁엔 산책을 하시고요. 열흘 뒤에 다시 오세요."}]},
{type:"notes",title:"L’impératif (vous)",ko:"명령법 (vous 형태)",html:`
<p>vous 현재형에서 주어 vous를 빼면 돼요: <b>vous prenez → <span class="say">Prenez !</span></b></p>
<table><tr><td class="say">Respirez !</td><td>숨 쉬세요</td></tr><tr><td class="say">Buvez beaucoup d’eau !</td><td>물을 많이 드세요</td></tr><tr><td class="say">Faites du sport !</td><td>운동하세요</td></tr><tr><td class="say">Ne fumez pas !</td><td>담배 피우지 마세요</td></tr><tr><td class="say">Reposez-vous !</td><td>쉬세요 (대명동사: 동사-vous)</td></tr><tr><td class="say">Ne vous inquiétez pas !</td><td>걱정하지 마세요 (부정)</td></tr></table>
<p>불규칙: <b class="say">Soyez patient !</b> (être) · <b class="say">Ayez confiance !</b> (avoir)</p>`},
{type:"vocab",items:[["la tête","머리"],["le dos","등, 허리"],["le ventre","배"],["la gorge","목(구멍)"],["les dents","이"],["la jambe","다리"],["le bras","팔"],["le pied","발"],["avoir mal à…","…가 아프다"],["la fièvre","열"],["un rhume","감기"],["tousser","기침하다"],["épuisé(e)","녹초가 된"],["dormir mal","잠을 잘 못 자다"],["un médicament","약"],["prendre rendez-vous","예약하다"],["le médecin","의사"],["Qu’est-ce qui ne va pas ?","어디가 안 좋으세요?"],["Ce n’est pas grave.","심각하지 않아요."],["trois fois par jour","하루 세 번"]]},
{type:"ex",n:1,title:"Il a l’air…",inst:"상황을 보고 avoir l’air + 형용사로 알맞은 것을 고르세요.",en:"Comment using avoir l'air.",example:"Michel vient de faire 40 km à vélo. → Il a l’air épuisé.",kind:"choice",items:[
 {q:"Léa vient de gagner un concours.",o:["Elle a l’air contente.","Elle a l’air triste.","Elle a l’air malade."],a:0},
 {q:"Paul a 39 de fièvre et il tousse.",o:["Il a l’air en forme.","Il a l’air malade.","Il a l’air content."],a:1},
 {q:"Les enfants attendent le bus depuis une heure sous la pluie.",o:["Ils ont l’air ravis.","Ils ont l’air énervés.","Ils ont l’air reposés."],a:1},
 {q:"Marie revient de trois semaines de vacances.",o:["Elle a l’air reposée.","Elle a l’air épuisée.","Elle a l’air stressée."],a:0},
 {q:"Hugo a un examen important demain et il n’a pas révisé.",o:["Il a l’air calme.","Il a l’air stressé.","Il a l’air fatigué de dormir."],a:1}]},
{type:"ex",n:2,title:"La journée de Sophie",inst:"Sophie의 하루입니다. 괄호 속 대명동사를 현재형으로 쓰세요.",en:"Use reflexive verbs to describe Sophie's day.",kind:"fill",items:[
 {q:"Sophie ___ (se réveiller) à 6 h 30.",a:["se réveille"]},{q:"Elle ___ (se lever) tout de suite.",a:["se lève"]},{q:"Elle ___ (se doucher) et elle ___ (s’habiller).",a:["se douche","s’habille|s'habille"]},
 {q:"Le soir, elle ___ (se reposer) devant la télé.",a:["se repose"]},{q:"Elle ___ (se coucher) à 22 heures.",a:["se couche"]}]},
{type:"ex",n:3,title:"Et vous ?",inst:"Léo가 자신의 생활을 이야기합니다. 괄호 속 정보로 대명동사 문장을 쓰세요 (Je…).",en:"Answer with reflexive verbs.",kind:"write",items:[
 {q:"Tu te lèves à quelle heure en semaine ? (7 h)",a:"Je me lève à sept heures.|Je me lève à 7 heures.|Je me lève à 7 h."},
 {q:"Tu te couches à quelle heure ? (22 h 30)",a:"Je me couche à vingt-deux heures trente.|Je me couche à 22 h 30.|Je me couche à dix heures et demie."},
 {q:"Et le week-end dernier, tu t’es levé à quelle heure ? (10 h)",a:"Je me suis levé à dix heures.|Je me suis levé à 10 heures.|Je me suis levé à 10 h."},
 {q:"Tu t’es couché tard samedi ? (oui, à minuit)",a:"Oui, je me suis couché à minuit."}]},
{type:"ex",n:4,title:"Tu devrais… / Vous devriez…",inst:"devoir 조건법을 사용해 조언하세요. (괄호 안의 tu / vous를 따르세요)",en:"Give advice using devoir.",example:"Je suis stressé. (tu – se reposer) → Tu devrais te reposer.",kind:"write",items:[
 {q:"J’ai mal aux dents. (tu – aller chez le dentiste)",a:"Tu devrais aller chez le dentiste."},{q:"Je tousse beaucoup. (vous – arrêter de fumer)",a:"Vous devriez arrêter de fumer."},
 {q:"Je suis toujours fatigué. (tu – se coucher plus tôt)",a:"Tu devrais te coucher plus tôt."},{q:"J’ai grossi. (vous – faire du sport)",a:"Vous devriez faire du sport."},
 {q:"J’ai de la fièvre. (tu – prendre un médicament)",a:"Tu devrais prendre un médicament."}]},
{type:"ex",n:5,title:"Depuis",inst:"depuis를 사용해 프랑스어로 번역하세요 (현재형!).",en:"Translate using depuis.",kind:"write",items:[
 {q:"He has been working in France for seven years.",a:"Il travaille en France depuis sept ans.|Il travaille en France depuis 7 ans."},
 {q:"She has been looking after the children since last week. (s’occuper des enfants)",a:"Elle s’occupe des enfants depuis la semaine dernière."},
 {q:"They have been on holiday for two weeks. (être en vacances)",a:"Ils sont en vacances depuis deux semaines.|Elles sont en vacances depuis deux semaines.|Ils sont en vacances depuis 2 semaines."},
 {q:"I have had a headache since this morning.",a:"J’ai mal à la tête depuis ce matin."},{q:"We have been learning French for a year.",a:"Nous apprenons le français depuis un an.|On apprend le français depuis un an."}]},
{type:"ex",n:6,title:"Cause et conséquence",inst:"왼쪽 문장과 논리적으로 이어지는 결과를 연결하세요.",en:"Match each statement with its logical result.",kind:"match",
 left:["Je me suis cassé la jambe.","J’ai mal à la tête.","Il s’est cassé le bras droit.","Elle a mal au dos.","J’ai mal à la gorge.","Il a mal aux dents."],
 right:["Je ne peux pas marcher.","Je ne supporte pas le bruit.","Il ne peut pas écrire.","Elle ne peut pas jouer au golf.","Je ne peux pas parler.","Il ne peut pas manger de chocolat."],a:[0,1,2,3,4,5],sayLeft:true},
{type:"ex",n:7,title:"Docteur, j’ai un problème…",inst:"의사가 되어 명령법(vous)으로 지시하세요.",en:"Give Christian instructions using the imperative.",kind:"fill",items:[
 {q:"CHRISTIAN : Je suis très fatigué. — DOCTEUR : ___ (se coucher) de bonne heure.",a:["Couchez-vous"]},{q:"CHRISTIAN : Je dors très mal. — DOCTEUR : ___ (faire) un peu d’exercice.",a:["Faites"]},
 {q:"CHRISTIAN : Je bois beaucoup de café. — DOCTEUR : ___ (boire) du thé ou de l’eau.",a:["Buvez"]},{q:"CHRISTIAN : Je fume dix cigarettes par jour. — DOCTEUR : Ne ___ (fumer) plus !",a:["fumez"]},
 {q:"CHRISTIAN : J’ai mal au dos. — DOCTEUR : ___ (prendre) ces comprimés.",a:["Prenez"]},{q:"CHRISTIAN : Je suis inquiet. — DOCTEUR : Ne ___ ___ (s’inquiéter) pas !",a:["vous","inquiétez"]}]}
]});
