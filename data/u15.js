FC.registerUnit({n:15,title:"Vêtements et chaussures",ko:"옷과 신발 — 쇼핑하고 교환하기",
goals:["lequel / laquelle / lesquels / lesquelles","celui-ci / celle-là …","ne … que (~만)","ça me plaît / ça me va","색깔·소재·사이즈","quelque chose / quelqu’un"],
sections:[
{type:"dialogue",title:"Le bleu me va bien",ko:"파란색이 나한테 잘 어울려요",intro:"Gérard가 Martine에게 선물받은 스웨터를 교환하러 옷 가게에 갑니다.",lines:[
 {s:"Gérard",g:"m",fr:"Bonjour, madame. Je voudrais échanger ce pull, s’il vous plaît. La taille est bonne, mais la couleur ne me plaît pas beaucoup.",ko:"안녕하세요. 이 스웨터를 교환하고 싶어요. 사이즈는 맞는데 색깔이 별로 마음에 안 들어서요."},
 {s:"Vendeuse",g:"f",fr:"Bien sûr, monsieur. Vous avez le ticket de caisse ?",ko:"물론이죠. 영수증 있으세요?"},
 {s:"Gérard",g:"m",fr:"Oui, le voilà. C’est un cadeau de ma femme, mais l’orange, ce n’est vraiment pas pour moi !",ko:"네, 여기요. 아내가 준 선물인데, 주황색은 정말 저랑 안 맞아요!"},
 {s:"Vendeuse",g:"f",fr:"Je comprends. Nous l’avons en bleu marine, en gris et en vert. Lequel vous préférez ?",ko:"이해해요. 남색, 회색, 초록색이 있어요. 어떤 게 더 좋으세요?"},
 {s:"Gérard",g:"m",fr:"Le bleu marine. Le bleu me va bien. Il est en quoi ?",ko:"남색이요. 파란색이 저한테 잘 어울려요. 소재가 뭐예요?"},
 {s:"Vendeuse",g:"f",fr:"En laine et coton. Vous voulez l’essayer ? La cabine est au fond.",ko:"울과 면이에요. 입어 보시겠어요? 탈의실은 안쪽에 있어요."},
 {s:"Gérard",g:"m",fr:"Non merci, c’est la même taille, du L. Je le prends.",ko:"아니요 괜찮아요, 같은 사이즈 L이니까요. 이걸로 할게요."},
 {s:"Vendeuse",g:"f",fr:"Très bien. Vous désirez autre chose ? Nous avons de jolies chemises en lin.",ko:"좋습니다. 다른 건 필요 없으세요? 예쁜 린넨 셔츠도 있어요."},
 {s:"Gérard",g:"m",fr:"Non merci, je n’ai besoin de rien d’autre. Je ne voulais qu’échanger le pull !",ko:"아니요, 다른 건 필요 없어요. 스웨터만 교환하고 싶었어요!"}]},
{type:"notes",title:"Couleurs, matières, tailles, goûts",ko:"색깔·소재·사이즈·취향 표현",html:`
<h3>Les couleurs — 색깔 (형용사: 일치!)</h3>
<p><span class="say">noir / noire</span> · <span class="say">blanc / blanche</span> · <span class="say">vert / verte</span> · <span class="say">gris / grise</span> · <span class="say">bleu / bleue</span> · <span class="say">rouge, jaune, rose</span> · <span class="say">marron, orange</span> (불변) · <span class="say">bleu marine, bleu clair, vert foncé</span> (복합 색은 불변)</p>
<h3>La matière — 소재 (en + 명사)</h3><p><b class="say">un pull en laine, une chemise en coton, une veste en cuir, un pantalon en jean, une robe en soie, une chemise en lin</b></p>
<h3>La taille et la pointure — 사이즈</h3><p>옷: <b class="say">Vous faites quelle taille ? — Je fais du 40 / du M.</b> · 신발: <b class="say">Vous faites quelle pointure ? — Je chausse du 39.</b></p>
<h3>Plaire et aller — 마음에 들다 / 어울리다</h3>
<table><tr><td class="say">Ce pull me plaît.</td><td>이 스웨터가 마음에 든다</td></tr><tr><td class="say">Ces chaussures me plaisent.</td><td>(복수)</td></tr><tr><td class="say">Le bleu me va bien.</td><td>파란색이 나에게 잘 어울린다</td></tr><tr><td class="say">Ça vous va très bien !</td><td>아주 잘 어울리세요!</td></tr></table>
<h3>Ne … que — ~만 (= seulement)</h3><p><b class="say">Je ne voulais qu’échanger le pull.</b> · <b class="say">Elle ne porte que du noir.</b></p>`},
{type:"dialogue",title:"Celles-ci ou celles-là ?",ko:"이거요, 저거요?",intro:"Martine이 구두를 사러 갑니다. 가게에 들어가자 점원이 통화 중입니다.",lines:[
 {s:"Vendeuse",g:"f",fr:"Je vais devoir raccrocher, j’ai quelqu’un dans le magasin. À plus tard ! … Bonjour, madame. Je peux vous aider ?",ko:"끊어야겠다, 가게에 손님이 오셨어. 이따 봐! … 안녕하세요. 도와드릴까요?"},
 {s:"Martine",g:"f",fr:"Oui, je cherche des chaussures confortables pour marcher, mais élégantes.",ko:"네, 걷기 편하면서도 우아한 구두를 찾고 있어요."},
 {s:"Vendeuse",g:"f",fr:"Nous avons ces deux modèles. Lesquelles vous plaisent ?",ko:"이 두 가지 모델이 있어요. 어떤 게 마음에 드세요?"},
 {s:"Martine",g:"f",fr:"Celles-ci, en cuir marron, sont jolies. Mais celles-là, les noires, ont l’air plus confortables.",ko:"이 갈색 가죽 구두가 예쁘네요. 하지만 저 검은색이 더 편해 보여요."},
 {s:"Vendeuse",g:"f",fr:"Vous faites quelle pointure ?",ko:"신발 사이즈가 어떻게 되세요?"},
 {s:"Martine",g:"f",fr:"Du 39. Je peux essayer les deux ?",ko:"39요. 둘 다 신어 봐도 돼요?"},
 {s:"Vendeuse",g:"f",fr:"Bien sûr. Alors ?",ko:"물론이죠. 어떠세요?"},
 {s:"Martine",g:"f",fr:"Les noires sont parfaites, mais les marron sont un peu petites. Vous les avez en 40 ?",ko:"검은색은 딱 맞는데 갈색은 조금 작네요. 40 사이즈 있어요?"},
 {s:"Vendeuse",g:"f",fr:"Désolée, je n’ai plus que du 38 dans ce modèle.",ko:"죄송해요, 이 모델은 이제 38 사이즈밖에 없어요."},
 {s:"Martine",g:"f",fr:"Tant pis. Je prends celles-là, les noires.",ko:"할 수 없죠. 저걸로, 검은색으로 할게요."}]},
{type:"notes",title:"Lequel ? Celui-ci ! Quelque chose, quelqu’un",ko:"의문대명사·지시대명사·부정대명사",html:`
<table><tr><th></th><th>어느 것?</th><th>이것 / 저것</th></tr>
<tr><td>남성 단수</td><td class="say">lequel ?</td><td class="say">celui-ci / celui-là</td></tr><tr><td>여성 단수</td><td class="say">laquelle ?</td><td class="say">celle-ci / celle-là</td></tr>
<tr><td>남성 복수</td><td class="say">lesquels ?</td><td class="say">ceux-ci / ceux-là</td></tr><tr><td>여성 복수</td><td class="say">lesquelles ?</td><td class="say">celles-ci / celles-là</td></tr></table>
<p><b class="say">J’aime ce pantalon. — Lequel ? — Celui-ci, le gris.</b></p>
<h3>Quelque chose / quelqu’un / rien / personne</h3>
<table><tr><td class="say">Vous cherchez quelque chose ?</td><td class="say">Non, je ne cherche rien.</td></tr><tr><td class="say">Il y a quelqu’un ?</td><td class="say">Non, il n’y a personne.</td></tr><tr><td class="say">quelque chose de plus grand</td><td>더 큰 것 (de + 형용사)</td></tr></table>`},
{type:"vocab",items:[["un pull","스웨터"],["une chemise","셔츠"],["un pantalon","바지"],["une jupe","치마"],["une robe","원피스"],["une veste","재킷"],["des chaussures","신발"],["des chaussettes","양말"],["des gants","장갑"],["la taille","(옷) 사이즈"],["la pointure","신발 사이즈"],["essayer","입어/신어 보다"],["la cabine d’essayage","탈의실"],["échanger","교환하다"],["le ticket de caisse","영수증"],["en laine / en cuir","울로 된 / 가죽으로 된"],["ça me plaît","마음에 든다"],["ça me va","어울린다, 맞는다"],["Je peux vous aider ?","도와드릴까요?"],["Tant pis.","할 수 없죠."]]},
{type:"ex",n:1,title:"De quelle couleur ?",inst:"설명을 읽고 색깔을 고르세요.",en:"Guess the meaning of the colours.",kind:"choice",items:[
 {q:"Jaune comme un citron ou le soleil.",o:["노랑","초록","빨강"],a:0},{q:"Rouge comme une tomate.",o:["파랑","빨강","분홍"],a:1},{q:"Vert comme l’herbe.",o:["초록","회색","갈색"],a:0},
 {q:"Blanc comme la neige.",o:["검정","하양","노랑"],a:1},{q:"Gris comme un ciel de pluie.",o:["회색","분홍","주황"],a:0},{q:"Marron comme le chocolat.",o:["갈색","보라","초록"],a:0}]},
{type:"ex",n:2,title:"En quoi ? En quelle couleur ?",inst:"en + 색깔/소재로 문장을 완성하세요. (보기: rouge · cuir · laine · jean · bleu)",en:"Complete with en + colour or material.",kind:"fill",items:[
 {q:"Je n’aime pas beaucoup la couleur de cette jupe. Vous l’avez en ___ ?",a:["rouge|bleu"]},{q:"Il porte souvent un vieux pantalon en ___ .",a:["jean"]},
 {q:"En hiver, je mets un pull en ___ .",a:["laine"]},{q:"Elle a acheté une veste en ___ noir.",a:["cuir"]},{q:"Ce pull existe en vert ou en ___ marine.",a:["bleu"]}]},
{type:"ex",n:3,title:"Traduisez",inst:"프랑스어로 번역하세요.",en:"Say these things in French.",kind:"write",items:[
 {q:"I love red.",a:"J’adore le rouge.|J’aime le rouge."},{q:"I would like black socks.",a:"Je voudrais des chaussettes noires."},
 {q:"I like these gloves. Do you have them in brown?",a:"J’aime ces gants. Vous les avez en marron ?|Ces gants me plaisent. Vous les avez en marron ?"},
 {q:"Can I try this dress on?",a:"Je peux essayer cette robe ?|Est-ce que je peux essayer cette robe ?"},{q:"Blue suits me well.",a:"Le bleu me va bien."}]},
{type:"ex",n:4,title:"Lequel ? Celui-ci !",inst:"lequel 형태와 celui-ci / celui-là 형태를 알맞게 쓰세요.",en:"Fill in with lequel and celui-ci, celui-là, etc.",kind:"fill",items:[
 {q:"— Regarde cette chemise bleue ! Elle me plaît. — Moi, je préfère ___ , la blanche.",a:["celle-là|celle-ci"]},{q:"— J’adore ces chaussures. — ___ ? Les rouges ?",a:["Lesquelles"]},
 {q:"— Tu prends quel pull ? — ___ , le gris.",a:["Celui-ci|Celui-là"]},{q:"— Il y a deux livres sur la table. ___ est à toi ?",a:["Lequel"]},
 {q:"— Ces gants sont trop petits. Essayez ___ .",a:["ceux-ci|ceux-là"]},{q:"— Je cherche une robe pour la fête. — ___ ? La longue ou la courte ?",a:["Laquelle"]}]},
{type:"ex",n:5,title:"Corinne a des goûts de luxe",inst:"ne … que를 사용해 문장을 완성하세요.",en:"Make sentences with ne … que.",example:"Les vacances (faire des croisières) → En vacances, elle ne fait que des croisières.",kind:"write",items:[
 {q:"Les vêtements (porter des robes de créateur)",a:"Elle ne porte que des robes de créateur."},{q:"Les boissons (boire du champagne)",a:"Elle ne boit que du champagne."},
 {q:"Les voitures (conduire des voitures de sport)",a:"Elle ne conduit que des voitures de sport."},{q:"Les hôtels (dormir dans des palaces)",a:"Elle ne dort que dans des palaces."},
 {q:"Les magasins (faire ses courses avenue Montaigne)",a:"Elle ne fait ses courses qu’avenue Montaigne.|Elle ne fait ses courses que avenue Montaigne."}]},
{type:"ex",n:6,title:"Les légendes",inst:"그림(이모지 장면)과 알맞은 설명을 연결하세요.",en:"Pair the captions with the pictures.",kind:"match",
 left:["🚪👀 (quelqu’un frappe à une porte, la maison est vide)","🎰😔 (un homme joue au loto chaque semaine et perd toujours)","👔🙄 (un jeune refuse une cravate dans un magasin)","🎁❓ (une femme montre un paquet mystérieux)","🛋️😴 (un homme ne fait rien sur le canapé)"],
 right:["Il y a quelqu’un ?","Il ne gagne jamais rien, mais il continue à jouer.","Vous n’avez pas quelque chose de plus cool ?","J’ai quelque chose pour toi !","Il ne fait rien de la journée."],a:[0,1,2,3,4]},
{type:"ex",n:7,title:"Traduisez",inst:"quelque chose / quelqu’un / rien / personne를 사용해 번역하세요.",en:"Translate.",kind:"write",items:[
 {q:"I don’t want anything, thank you.",a:"Je ne veux rien, merci."},{q:"He likes no one.",a:"Il n’aime personne."},{q:"Are you looking for something?",a:"Vous cherchez quelque chose ?|Tu cherches quelque chose ?"},
 {q:"Is there anyone here?",a:"Il y a quelqu’un ici ?|Il y a quelqu’un ?|Est-ce qu’il y a quelqu’un ici ?"},{q:"Nobody came.",a:"Personne n’est venu."}]},
{type:"reading",title:"Et si on allait à la brocante ?",ko:"벼룩시장에 가 볼까? (각색된 읽기 자료)",html:`<p>Le week-end, des millions de Français sortent de chez eux pour chiner dans les brocantes et les vide-greniers. Dans presque chaque village, au printemps et en été, on trouve un marché où les particuliers vendent les objets qu’ils n’utilisent plus.</p><p>On y découvre de tout : de la vaisselle ancienne, des jouets en bois, des disques vinyles, des vêtements vintage et parfois des meubles anciens. Les prix sont souvent bas, et on peut toujours négocier.</p><p>Pour Élodie, 34 ans, c’est une vraie passion : « J’ai meublé tout mon appartement avec des objets de brocante. Mon plus beau trésor ? Un miroir du XIX<sup>e</sup> siècle acheté quinze euros ! » Selon elle, il faut arriver très tôt, vers sept heures, pour trouver les meilleures affaires.</p>`},
{type:"ex",n:8,title:"Compréhension : la brocante",inst:"읽기 자료를 읽고 답을 고르세요.",en:"Read the text and answer.",kind:"choice",items:[
 {q:"Qu’est-ce qu’on vend dans un vide-grenier ?",o:["des objets neufs","des objets que les gens n’utilisent plus","seulement de la nourriture"],a:1},
 {q:"Quand y a-t-il beaucoup de brocantes ?",o:["en hiver","au printemps et en été","seulement à Noël"],a:1},{q:"Les prix sont…",o:["fixes et élevés","souvent bas et on peut négocier","toujours gratuits"],a:1},
 {q:"Qu’est-ce qu’Élodie a acheté pour quinze euros ?",o:["un miroir ancien","un disque vinyle","un jouet en bois"],a:0},{q:"Quel est son conseil ?",o:["arriver tôt","arriver le soir","ne jamais négocier"],a:0}]}
]});
