FC.registerUnit({n:18,title:"Négociations",ko:"협상 — 남의 말 전하기와 격식 표현",
goals:["간접화법 (dire que, demander si…)","격식 있는 호칭과 표현","자동응답 메시지 남기기","격식 이메일 쓰기"],
sections:[
{type:"dialogue",title:"On négocie",ko:"협상하기",intro:"Martine이 직장에 있는 Gérard에게 전화해 Lefèvre 부인이 제안을 거절했다고 전합니다.",lines:[
 {s:"Martine",g:"f",fr:"Gérard ? C’est moi. Je viens d’avoir Mme Garnier au téléphone. Elle dit que Mme Lefèvre a refusé notre offre.",ko:"제라르? 나야. 방금 가르니에 씨와 통화했어. 르페브르 부인이 우리 제안을 거절했대."},
 {s:"Gérard",g:"m",fr:"Je m’en doutais. Qu’est-ce qu’elle a dit exactement ?",ko:"그럴 줄 알았어. 정확히 뭐라고 했대?"},
 {s:"Martine",g:"f",fr:"Elle dit que le prix est trop bas et qu’un autre couple est intéressé. Mais elle ajoute qu’elle préfère vendre à des gens qui aiment vraiment la maison.",ko:"가격이 너무 낮고 다른 부부도 관심이 있대. 하지만 집을 정말 좋아하는 사람들에게 파는 게 더 좋다고 덧붙였대."},
 {s:"Gérard",g:"m",fr:"C’est plutôt bon signe ! Je pense qu’on peut monter un peu. Dix mille euros de plus, par exemple ?",ko:"꽤 좋은 신호네! 조금 올려도 될 것 같아. 예를 들어 만 유로 더?"},
 {s:"Martine",g:"f",fr:"Mme Garnier m’a demandé si nous pouvions aller jusqu’à cinq mille. Elle pense que Mme Lefèvre acceptera.",ko:"가르니에 씨가 우리가 오천까지 올릴 수 있는지 물어봤어. 르페브르 부인이 받아들일 거라고 생각한대."},
 {s:"Gérard",g:"m",fr:"Cinq mille, c’est raisonnable. Et le toit ? Bruno m’a dit qu’il fallait le refaire.",ko:"오천이면 합리적이야. 그런데 지붕은? 브뤼노가 다시 해야 한다고 했어."},
 {s:"Martine",g:"f",fr:"Je lui ai expliqué. Elle va demander à Mme Lefèvre si elle peut participer aux frais.",ko:"그것도 설명했어. 르페브르 부인에게 비용을 일부 부담할 수 있는지 물어본대."},
 {s:"Gérard",g:"m",fr:"Parfait. Rappelle-la et dis-lui que nous sommes d’accord.",ko:"좋아. 그분께 다시 전화해서 우리가 동의한다고 말해 줘."}]},
{type:"notes",title:"Le discours indirect",ko:"간접화법 — 다른 사람의 말 전하기",html:`
<table><tr><th>직접화법</th><th>간접화법 (현재)</th></tr>
<tr><td class="say">« Le prix est trop bas. »</td><td class="say">Elle dit que le prix est trop bas.</td></tr>
<tr><td class="say">« Je suis fatigué. »</td><td class="say">Il dit qu’il est fatigué.</td></tr>
<tr><td class="say">« Vous venez ? »</td><td class="say">Il demande si nous venons.</td></tr>
<tr><td class="say">« Où habitez-vous ? »</td><td class="say">Elle demande où nous habitons.</td></tr>
<tr><td class="say">« Qu’est-ce que tu veux ? »</td><td class="say">Il demande ce que je veux.</td></tr>
<tr><td class="say">« Appelez-moi ! »</td><td class="say">Elle nous demande de l’appeler.</td></tr></table>
<div class="tip">💡 인칭과 소유형용사도 바뀌어요: « <b>Je</b> vends <b>ma</b> maison » → Elle dit qu’<b>elle</b> vend <b>sa</b> maison. 전달 동사가 과거면 시제도 바뀌어요: Elle <b>a dit</b> qu’elle <b>était</b> fatiguée.</div>`},
{type:"dialogue",title:"On va signer !",ko:"계약하게 됐어요!",intro:"Gérard와 Martine의 자동응답 안내 메시지가 나오고, Mme Garnier가 메시지를 남깁니다.",lines:[
 {s:"Gérard",g:"m",fr:"Bonjour, vous êtes bien chez Gérard et Martine Roussel. Nous ne sommes pas disponibles pour le moment. Laissez-nous un message après le bip et nous vous rappellerons dès que possible. Merci !",ko:"안녕하세요, 제라르와 마르틴 루셀의 집입니다. 지금은 전화를 받을 수 없습니다. 삐 소리 후 메시지를 남겨 주시면 최대한 빨리 연락드리겠습니다. 감사합니다!"},
 {s:"Mme Garnier",g:"f",fr:"Bonjour, monsieur et madame Roussel, ici Hélène Garnier, de l’agence Garnier. J’ai une excellente nouvelle : Mme Lefèvre accepte votre nouvelle offre !",ko:"안녕하세요, 루셀 부부님, 가르니에 부동산의 엘렌 가르니에입니다. 아주 좋은 소식이 있어요. 르페브르 부인이 새 제안을 받아들였어요!"},
 {s:"Mme Garnier",g:"f",fr:"Elle accepte aussi de payer la moitié des travaux du toit. Je vous propose de signer le compromis de vente jeudi prochain, à dix heures, à l’agence.",ko:"지붕 공사비의 절반도 부담하겠대요. 다음 주 목요일 10시에 사무소에서 매매 예약 계약서에 서명하시는 게 어떨까요?"},
 {s:"Mme Garnier",g:"f",fr:"Pourriez-vous me confirmer votre présence ? Vous pouvez me joindre au 02 47 61 38 05. Je vous prie d’agréer mes salutations distinguées… pardon, c’est l’habitude des lettres ! Félicitations et à bientôt !",ko:"참석 여부를 확인해 주시겠어요? 02 47 61 38 05로 연락 주세요. 정중한 인사를 드리며… 죄송해요, 편지 쓰던 습관이네요! 축하드려요, 곧 뵙겠습니다!"}]},
{type:"notes",title:"Le français formel",ko:"격식 있는 프랑스어 — 전화·이메일·편지",html:`
<h3>Au téléphone / sur le répondeur</h3>
<ul><li><b class="say">Vous êtes bien chez…</b> · <b class="say">Laissez un message après le bip sonore.</b></li><li><b class="say">Ici Hélène Garnier, de l’agence Garnier.</b></li><li><b class="say">Pourriez-vous me rappeler au …</b> · <b class="say">Vous pouvez me joindre au …</b></li></ul>
<h3>Dans un e-mail ou une lettre formelle</h3>
<table><tr><th>시작</th><td class="say">Madame, Monsieur, / Chère Madame, / Monsieur le Directeur,</td></tr>
<tr><th>본문</th><td class="say">Je vous remercie de votre devis. · Je vous écris au sujet de… · Je souhaiterais savoir si… · Pourriez-vous m’indiquer…</td></tr>
<tr><th>맺음</th><td class="say">Dans l’attente de votre réponse, … · Cordialement, · Je vous prie d’agréer, Madame, Monsieur, l’expression de mes salutations distinguées.</td></tr></table>`},
{type:"vocab",items:[["refuser une offre","제안을 거절하다"],["se douter de","짐작하다"],["négocier","협상하다"],["monter (le prix)","(가격을) 올리다"],["accepter","받아들이다"],["les frais","비용"],["participer à","참여하다, 분담하다"],["le compromis de vente","매매 예약 계약"],["signer","서명하다"],["une bonne nouvelle","좋은 소식"],["disponible","(시간이) 되는"],["laisser un message","메시지를 남기다"],["le bip sonore","삐 소리"],["rappeler","다시 전화하다"],["joindre qn","~에게 연락이 닿다"],["un devis","견적서"],["Cordialement","(이메일 맺음말) 진심으로"],["dès que possible","가능한 한 빨리"],["Félicitations !","축하합니다!"],["Je vous remercie de…","…에 감사드립니다"]]},
{type:"ex",n:1,title:"Leurs propres mots",inst:"간접화법 문장을 보고 원래 한 말(직접화법)을 쓰세요.",en:"Find the speakers' own words.",example:"Bernard dit qu’il est fatigué. → « Je suis fatigué. »",kind:"write",items:[
 {q:"Martine dit qu’elle adore cette maison.",a:"J’adore cette maison."},{q:"Paul dit qu’il part en vacances demain.",a:"Je pars en vacances demain."},
 {q:"Ils disent qu’ils sont d’accord.",a:"Nous sommes d’accord.|On est d’accord."},{q:"Elle demande si tu viens ce soir.",a:"Tu viens ce soir ?|Est-ce que tu viens ce soir ?"},
 {q:"Il demande où nous habitons.",a:"Où habitez-vous ?|Où est-ce que vous habitez ?|Vous habitez où ?"}]},
{type:"ex",n:2,title:"Rapportez !",inst:"다음 말을 간접화법으로 전하세요 (현재).",en:"Report the following words.",kind:"write",items:[
 {q:"« Il pleut tous les jours. » → Elle dit…",a:"Elle dit qu’il pleut tous les jours."},{q:"« Pierre part en vacances ? » → Elle demande…",a:"Elle demande si Pierre part en vacances."},
 {q:"« Je vends ma maison. » → Mme Lefèvre dit…",a:"Mme Lefèvre dit qu’elle vend sa maison.|Madame Lefèvre dit qu’elle vend sa maison."},
 {q:"« Vous pouvez signer jeudi ? » → Mme Garnier demande… (nous)",a:"Mme Garnier demande si nous pouvons signer jeudi.|Madame Garnier demande si nous pouvons signer jeudi."},
 {q:"« Qu’est-ce que vous voulez ? » → Il demande… (nous)",a:"Il demande ce que nous voulons."}]},
{type:"ex",n:3,title:"Votre message de répondeur",inst:"Gérard의 메시지를 모델로 자신의 자동응답 메시지를 완성하세요.",en:"Record your own voicemail message.",kind:"fill",items:[
 {q:"Bonjour, vous êtes bien ___ Léa Martin.",a:["chez"]},{q:"Je ne suis pas ___ pour le moment.",a:["disponible"]},
 {q:"___ -moi un message après le bip,",a:["Laissez"]},{q:"et je vous ___ dès que possible.",a:["rappellerai"]},{q:"Merci et à ___ !",a:["bientôt"]}]},
{type:"ex",n:4,title:"Un e-mail formel",inst:"Paul Dupré가 부엌 공사 견적을 보낸 Duras 씨에게 답장을 씁니다. 빈칸에 알맞은 격식 표현을 쓰세요.",en:"Fill in the gaps in Paul's email.",kind:"fill",items:[
 {q:"___ , (인사: 남성에게)",a:["Monsieur"]},{q:"Je vous ___ de votre devis pour la rénovation de ma cuisine.",a:["remercie"]},
 {q:"Je ___ savoir si les travaux peuvent commencer en mars. (souhaiter, 조건법)",a:["souhaiterais"]},{q:"___ -vous m’indiquer la durée des travaux ? (pouvoir, 조건법)",a:["Pourriez"]},
 {q:"Dans l’ ___ de votre réponse,",a:["attente"]},{q:"___ , Paul Dupré (맺음말)",a:["Cordialement"]}]},
{type:"reading",title:"La campagne française séduit les étrangers",ko:"프랑스 시골에 매료된 외국인들 (각색된 읽기 자료)",html:`<p>Ce n’est pas une invasion, mais le phénomène surprend beaucoup de Français. Depuis une vingtaine d’années, de nombreux Britanniques, Belges et Néerlandais achètent des maisons dans les campagnes françaises, en particulier en Dordogne, en Bretagne et en Normandie.</p><p>Pourquoi ? D’abord, les prix : avec le prix d’un petit appartement à Londres ou à Amsterdam, on peut acheter une grande maison avec un jardin. Ensuite, la qualité de vie : le calme, la nature, la bonne cuisine et un climat plus doux.</p><p>Dans certains villages, ces nouveaux habitants ont sauvé des écoles et des commerces qui allaient fermer. Mais tout le monde n’est pas content : certains habitants disent que les prix de l’immobilier ont trop augmenté et que les jeunes de la région ne peuvent plus acheter de maison.</p>`},
{type:"ex",n:5,title:"Compréhension écrite",inst:"읽기 자료를 읽고 답을 고르세요.",en:"Read the text and answer.",kind:"choice",items:[
 {q:"Qui achète des maisons dans les campagnes françaises ?",o:["surtout des Britanniques, des Belges et des Néerlandais","seulement des Américains","des Parisiens uniquement"],a:0},
 {q:"Dans quelles régions en particulier ?",o:["en Dordogne, en Bretagne et en Normandie","à Paris et à Lyon","en Corse seulement"],a:0},
 {q:"Pourquoi achètent-ils en France ?",o:["parce que les maisons sont plus chères","pour les prix et la qualité de vie","pour travailler dans les usines"],a:1},
 {q:"Quel est un effet positif ?",o:["Des écoles et des commerces ont été sauvés.","Les villages sont devenus plus bruyants.","Les prix ont baissé."],a:0},
 {q:"Quel est le problème pour les jeunes de la région ?",o:["Ils ne trouvent pas de travail à Londres.","Les prix ont augmenté et ils ne peuvent plus acheter.","Ils ne parlent pas anglais."],a:1}]}
]});
