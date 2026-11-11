FC.registerUnit({n:4,title:"Rencontres",ko:"사람 만나기 — 나와 가족, 취미 이야기",
goals:["자기소개","직업·나이·가족 말하기","취미 이야기","aller, jouer, faire","aimer/adorer/détester + 동사원형"],
sections:[
{type:"dialogue",title:"Faire connaissance (1)",ko:"서로 알아가기 (1)",intro:"호텔 바에서 Emma가 휴가 중인 50대 프랑스인 부부 <b>Gérard</b>와 <b>Martine Roussel</b>을 만납니다. 직업을 어떻게 말하는지 주목하세요.",lines:[
 {s:"Gérard",g:"m",fr:"Bonsoir, madame. Vous êtes en vacances à Valmont ?",ko:"안녕하세요. 발몽에 휴가 오셨어요?"},
 {s:"Emma",g:"f",fr:"Non, je suis ici pour le travail. Je suis architecte.",ko:"아니요, 일 때문에 왔어요. 저는 건축가예요."},
 {s:"Martine",g:"f",fr:"Architecte ! C’est passionnant. Vous travaillez pour une entreprise française ?",ko:"건축가라니! 멋지네요. 프랑스 회사에서 일하세요?"},
 {s:"Emma",g:"f",fr:"Non, pour une agence anglaise. Nous dessinons une nouvelle bibliothèque ici. Et vous, qu’est-ce que vous faites dans la vie ?",ko:"아니요, 영국 사무소예요. 여기에 새 도서관을 설계하고 있어요. 두 분은 무슨 일을 하세요?"},
 {s:"Gérard",g:"m",fr:"Moi, je suis pharmacien. J’ai une petite pharmacie à Tours.",ko:"저는 약사예요. 투르에서 작은 약국을 해요."},
 {s:"Martine",g:"f",fr:"Et moi, je suis professeure de musique dans un collège.",ko:"저는 중학교 음악 선생님이에요."},
 {s:"Emma",g:"f",fr:"Et vous êtes en vacances ici ?",ko:"여기에는 휴가로 오셨어요?"},
 {s:"Gérard",g:"m",fr:"Oui, pour une semaine. Nous adorons la région.",ko:"네, 일주일 동안요. 이 지역을 정말 좋아해요."}]},
{type:"dialogue",title:"Faire connaissance (2)",ko:"서로 알아가기 (2)",intro:"대화가 조금 더 개인적인 이야기로 이어집니다. 이름과 가족 관계를 어떻게 말하나요?",lines:[
 {s:"Gérard",g:"m",fr:"Au fait, je m’appelle Gérard, Gérard Roussel. Et voici ma femme, Martine.",ko:"참, 제 이름은 제라르, 제라르 루셀이에요. 그리고 이쪽은 제 아내 마르틴이에요."},
 {s:"Emma",g:"f",fr:"Enchantée. Moi, c’est Emma Clarke.",ko:"반갑습니다. 저는 엠마 클라크예요."},
 {s:"Martine",g:"f",fr:"Vous êtes mariée, Emma ?",ko:"엠마, 결혼하셨어요?"},
 {s:"Emma",g:"f",fr:"Non, je suis célibataire. Je n’ai pas d’enfants, mais j’ai un chat !",ko:"아니요, 미혼이에요. 아이는 없지만 고양이가 있어요!"},
 {s:"Martine",g:"f",fr:"Nous, nous sommes mariés depuis trente ans. Nous avons deux enfants, un fils et une fille.",ko:"우리는 결혼한 지 30년 됐어요. 아들 하나, 딸 하나가 있어요."},
 {s:"Emma",g:"f",fr:"Ils ont quel âge ?",ko:"몇 살이에요?"},
 {s:"Gérard",g:"m",fr:"Julien a vingt-six ans. Il est cuisinier à Bordeaux. Camille a vingt-deux ans, elle est étudiante en médecine.",ko:"쥘리앵은 26살이에요. 보르도에서 요리사로 일해요. 카미유는 22살인데 의대생이에요."},
 {s:"Emma",g:"f",fr:"Et ils habitent avec vous ?",ko:"자녀들은 두 분과 같이 살아요?"},
 {s:"Martine",g:"f",fr:"Non, plus maintenant. La maison est bien calme !",ko:"아니요, 이제는 아니에요. 집이 아주 조용해요!"}]},
{type:"notes",title:"Se présenter",ko:"자기소개: 이름, 직업, 나이, 가족",html:`
<h3>Le nom — 이름</h3><ul><li><b class="say">Je m’appelle Emma. / Moi, c’est Emma.</b></li><li><b class="say">Comment vous appelez-vous ? / Tu t’appelles comment ?</b></li><li><b class="say">Enchanté(e) !</b> 반갑습니다</li><li><b class="say">Voici ma femme, Martine. / Voici mon mari, Gérard.</b></li></ul>
<h3>La profession — 직업 (관사 없이!)</h3>
<p><b class="say">Je suis architecte.</b> (✕ je suis <s>une</s> architecte) · <b class="say">Qu’est-ce que vous faites dans la vie ?</b></p>
<table><tr><th>남성</th><th>여성</th><th>뜻</th></tr><tr><td class="say">infirmier</td><td class="say">infirmière</td><td>간호사</td></tr><tr><td class="say">pharmacien</td><td class="say">pharmacienne</td><td>약사</td></tr><tr><td class="say">vendeur</td><td class="say">vendeuse</td><td>판매원</td></tr><tr><td class="say">cuisinier</td><td class="say">cuisinière</td><td>요리사</td></tr><tr><td class="say">étudiant</td><td class="say">étudiante</td><td>대학생</td></tr><tr><td class="say">professeur</td><td class="say">professeure</td><td>교사</td></tr><tr><td class="say">médecin, architecte, journaliste</td><td>(같음)</td><td>의사, 건축가, 기자</td></tr></table>
<h3>L’âge — 나이 (avoir를 써요!)</h3><p><b class="say">Tu as quel âge ? — J’ai seize ans.</b> · <b class="say">Il a quel âge ? — Il a vingt-six ans.</b></p>
<h3>La situation de famille — 가족 관계</h3>
<p><b class="say">Je suis marié(e) / célibataire / divorcé(e) / pacsé(e).</b> · <b class="say">J’ai deux enfants. / Je n’ai pas d’enfants.</b></p>
<div class="tip">💡 형용사는 주어의 성·수에 맞춰요: <i>Martine est mariée. Ils sont mariés. Elles sont divorcées.</i></div>`},
{type:"dialogue",title:"Parler loisirs",ko:"여가 활동 이야기",intro:"다음 날 오후, Gérard가 일이 있어 나간 사이 Emma와 Martine이 다시 만납니다. 각자의 취미를 메모해 보세요.",lines:[
 {s:"Martine",g:"f",fr:"Qu’est-ce que vous faites le week-end, Emma ?",ko:"엠마, 주말에는 뭐 하세요?"},
 {s:"Emma",g:"f",fr:"Je fais beaucoup de sport. Je fais du vélo et je joue au tennis le samedi.",ko:"운동을 많이 해요. 자전거를 타고, 토요일에는 테니스를 쳐요."},
 {s:"Martine",g:"f",fr:"Moi, je déteste le sport ! Je préfère la musique, bien sûr. Je joue du piano et je chante dans une chorale.",ko:"저는 운동이 정말 싫어요! 당연히 음악이 더 좋죠. 피아노를 치고 합창단에서 노래해요."},
 {s:"Emma",g:"f",fr:"Et Gérard ?",ko:"제라르는요?"},
 {s:"Martine",g:"f",fr:"Lui, il adore jardiner et il fait de la randonnée. Il va aussi à la pêche avec ses amis.",ko:"그이는 정원 가꾸기를 아주 좋아하고 등산을 해요. 친구들과 낚시도 가요."},
 {s:"Emma",g:"f",fr:"Vous allez souvent au cinéma ?",ko:"영화관에는 자주 가세요?"},
 {s:"Martine",g:"f",fr:"Oui, nous allons au cinéma tous les vendredis. Et j’aime beaucoup lire.",ko:"네, 매주 금요일에 영화관에 가요. 그리고 책 읽는 걸 아주 좋아해요."},
 {s:"Emma",g:"f",fr:"Moi aussi, j’adore lire, surtout des romans policiers !",ko:"저도요, 읽는 거 정말 좋아해요. 특히 추리 소설이요!"}]},
{type:"notes",title:"Aller, faire, jouer",ko:"aller, faire, jouer와 취미 표현",html:`
<table><tr><th>aller (가다)</th><th>faire (하다)</th></tr>
<tr><td class="say">je vais</td><td class="say">je fais</td></tr><tr><td class="say">tu vas</td><td class="say">tu fais</td></tr><tr><td class="say">il / elle va</td><td class="say">il / elle fait</td></tr><tr><td class="say">nous allons</td><td class="say">nous faisons</td></tr><tr><td class="say">vous allez</td><td class="say">vous faites</td></tr><tr><td class="say">ils / elles vont</td><td class="say">ils / elles font</td></tr></table>
<ul><li><b>aller à</b> + 장소: <b class="say">Je vais au cinéma, à la piscine, à l’opéra, aux concerts.</b></li>
<li><b>faire de</b> + 활동/운동: <b class="say">Je fais du vélo, de la natation, de l’escalade, des courses.</b></li>
<li><b>jouer à</b> + 게임/구기 종목: <b class="say">Je joue au tennis, au football, aux cartes.</b></li>
<li><b>jouer de</b> + 악기: <b class="say">Je joue du piano, de la guitare, du violon.</b></li></ul>
<h3>aimer / adorer / détester + 동사원형</h3>
<p><b class="say">J’aime lire.</b> · <b class="say">Il adore jardiner.</b> · <b class="say">Je déteste faire le ménage.</b> · <b class="say">Je n’aime pas cuisiner.</b></p>`},
{type:"vocab",items:[["Enchanté(e)","반갑습니다"],["je m’appelle…","제 이름은 …"],["marié(e)","기혼의"],["célibataire","미혼의"],["divorcé(e)","이혼한"],["un fils / une fille","아들 / 딸"],["un mari / une femme","남편 / 아내"],["les enfants","아이들"],["avoir … ans","…살이다"],["le week-end","주말"],["faire du vélo","자전거 타다"],["faire de la randonnée","등산하다"],["jouer au tennis","테니스 치다"],["jouer du piano","피아노 치다"],["aller à la pêche","낚시하러 가다"],["jardiner","정원을 가꾸다"],["lire","읽다"],["chanter","노래하다"],["souvent","자주"],["tous les vendredis","매주 금요일"]]},
{type:"ex",n:1,title:"Quelle profession ?",inst:"이 사람들의 직업은? 상자에서 골라 쓰세요 (관사 없이). 보기: infirmière · cuisinier · vendeuse · professeur · journaliste · pharmacien",en:"What do these people do?",kind:"fill",items:[
 {q:"Sarah travaille dans un hôpital. Elle est ___ .",a:["infirmière"]},{q:"Louis prépare des plats dans un restaurant. Il est ___ .",a:["cuisinier"]},
 {q:"Inès travaille dans un magasin de vêtements. Elle est ___ .",a:["vendeuse"]},{q:"M. Petit travaille dans un lycée. Il est ___ .",a:["professeur"]},
 {q:"Nina écrit des articles pour un journal. Elle est ___ .",a:["journaliste"]},{q:"Gérard vend des médicaments. Il est ___ .",a:["pharmacien"]}]},
{type:"ex",n:2,title:"La famille",inst:"대화 2를 바탕으로 빈칸을 채우세요.",en:"Answer using Dialogue 2.",kind:"fill",items:[
 {q:"Emma est mariée ? — Non, elle n’est pas ___ . Elle est ___ .",a:["mariée","célibataire"]},{q:"Gérard et Martine sont divorcés ? — Non, ils sont ___ .",a:["mariés"]},
 {q:"Emma a des enfants ? — Non, elle n’a pas d’ ___ .",a:["enfants"]},{q:"Gérard et Martine ont combien d’enfants ? — Ils ont ___ enfants.",a:["deux|2"]},
 {q:"Camille est cuisinière ? — Non, elle est ___ en médecine.",a:["étudiante"]}]},
{type:"ex",n:3,title:"Quel âge ?",inst:"질문에 avoir를 사용해 완전한 문장으로 답하세요.",en:"Answer with avoir.",kind:"write",items:[
 {q:"Julien a quel âge ?",a:"Il a vingt-six ans.|Il a 26 ans."},{q:"Et Camille ? Elle a quel âge ?",a:"Elle a vingt-deux ans.|Elle a 22 ans."},
 {q:"(Léo, 15) Léo a quel âge ?",a:"Il a quinze ans.|Il a 15 ans."},{q:"(Moi, 16) Tu as quel âge ?",a:"J’ai seize ans.|J'ai 16 ans."},
 {q:"(Mes grands-parents, 80) Ils ont quel âge ?",a:"Ils ont quatre-vingts ans.|Ils ont 80 ans."}]},
{type:"ex",n:4,title:"Claude : homme ou femme ?",inst:"Claude는 남자에게도 여자에게도 쓰는 이름이에요. 문장을 보고 Claude가 남자인지 여자인지 고르세요.",en:"Is Claude a man or a woman? How can you tell?",kind:"choice",items:[
 {q:"Claude est infirmière à Lyon.",o:["homme 👨","femme 👩"],a:1,ex:"infirmière (여성형)"},{q:"Claude est marié et a trois enfants.",o:["homme 👨","femme 👩"],a:0,ex:"marié (남성형)"},
 {q:"Claude est très contente de son travail.",o:["homme 👨","femme 👩"],a:1,ex:"contente (여성형)"},{q:"Claude est un excellent cuisinier.",o:["homme 👨","femme 👩"],a:0,ex:"un, cuisinier"},
 {q:"Claude est italienne, mais elle habite à Nice.",o:["homme 👨","femme 👩"],a:1,ex:"italienne, elle"}]},
{type:"ex",n:5,title:"Deux portraits",inst:"두 사람의 프로필을 보고 문장을 완성하세요.",en:"Write about Thomas and Laura.",
 html:"<table><tr><th></th><th>Thomas Leroy</th><th>Laura Benali</th></tr><tr><td>âge</td><td>41 ans</td><td>28 ans</td></tr><tr><td>nationalité</td><td>belge</td><td>française</td></tr><tr><td>ville</td><td>Bruxelles</td><td>Marseille</td></tr><tr><td>profession</td><td>médecin</td><td>journaliste</td></tr><tr><td>famille</td><td>divorcé, 1 fille</td><td>mariée, pas d’enfants</td></tr><tr><td>loisirs</td><td>golf, guitare</td><td>natation, cinéma</td></tr></table>",kind:"fill",items:[
 {q:"Thomas ___ quarante et un ans. Il est ___ et il habite à Bruxelles.",a:["a","belge"]},{q:"Il est ___ . Il est divorcé et il a une ___ .",a:["médecin","fille"]},
 {q:"Il joue ___ golf et il joue ___ guitare.",a:["au","de la"]},{q:"Laura a vingt-huit ans. Elle est ___ et elle habite ___ Marseille.",a:["française","à"]},
 {q:"Elle est journaliste. Elle est ___ , mais elle n’a pas d’ ___ .",a:["mariée","enfants"]},{q:"Elle fait ___ natation et elle va souvent ___ cinéma.",a:["de la","au"]}]},
{type:"ex",n:6,title:"Aller ou faire ?",inst:"aller 또는 faire를 알맞게 활용해 쓰세요.",en:"Aller or faire?",kind:"fill",items:[
 {q:"Pierre ___ de l’exercice tous les jours.",a:["fait"]},{q:"Nous ___ souvent au cinéma.",a:["allons"]},{q:"Vous ___ au théâtre ce soir ?",a:["allez"]},
 {q:"Mes parents ___ du ski en février.",a:["font"]},{q:"Tu ___ tes devoirs maintenant ?",a:["fais"]},{q:"Je ___ à la piscine le mercredi.",a:["vais"]},{q:"Elles ___ au concert samedi.",a:["vont"]}]},
{type:"ex",n:7,title:"Jouer, faire : du, de la, au…",inst:"알맞은 전치사+관사를 쓰세요 (du, de la, de l’, au, à la, aux).",en:"Complete with the right preposition + article.",kind:"fill",items:[
 {q:"Hugo joue ___ football.",a:["au"]},{q:"Nous faisons ___ randonnée.",a:["de la"]},{q:"Elle joue ___ violon.",a:["du"]},{q:"Vous jouez ___ cartes ?",a:["aux"]},
 {q:"Je fais ___ escalade.",a:["de l’|de l'"]},{q:"Ils jouent ___ guitare.",a:["de la"]},{q:"Tu fais ___ judo ?",a:["du"]}]},
{type:"ex",n:8,title:"Qu’est-ce que vous aimez faire ?",inst:"이모티콘에 맞게 aimer / adorer / détester + 동사원형으로 문장을 쓰세요. (❤️❤️ adorer · ❤️ aimer · 💥 détester · 🙁 ne pas aimer)",en:"Say what you like or dislike doing.",kind:"write",items:[
 {q:"❤️❤️ lire",a:"J’adore lire."},{q:"💥 faire le ménage",a:"Je déteste faire le ménage."},{q:"❤️ cuisiner",a:"J’aime cuisiner."},
 {q:"🙁 regarder la télé",a:"Je n’aime pas regarder la télé."},{q:"❤️❤️ voyager",a:"J’adore voyager."},{q:"💥 faire les courses",a:"Je déteste faire les courses."}]},
{type:"ex",n:9,title:"Testez votre mémoire !",inst:"이 단원의 대화를 떠올리며 참/거짓을 고르세요.",en:"Test your memory.",kind:"tf",items:[
 {q:"Gérard est architecte.",a:false,fix:"Gérard est pharmacien. C’est Emma qui est architecte."},{q:"Gérard et Martine habitent à Tours.",a:true},
 {q:"Martine est professeure de musique.",a:true},{q:"Emma a deux enfants.",a:false,fix:"Emma n’a pas d’enfants, mais elle a un chat."},
 {q:"Julien est cuisinier à Bordeaux.",a:true},{q:"Martine adore le sport.",a:false,fix:"Martine déteste le sport ; elle préfère la musique."},{q:"Gérard et Martine vont au cinéma tous les vendredis.",a:true}]}
]});
