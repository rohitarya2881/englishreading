// ╔══════════════════════════════════════════════════════════════════╗
// ║  GRAMMAR DATA FILE                                              ║
// ║  Naya grammar chapter add karna ho toh:                        ║
// ║  1. Sahi folder ke chapters[] mein ek object push karo         ║
// ║  2. Fields: id, title, subtitle, tag, tagClass, type,          ║
// ║     desc, note, ruleCard{cls,html}, chips{cls,words[]}, paras[] ║
// ╚══════════════════════════════════════════════════════════════════╝

const GRAMMAR_DATA = [

  {
    id:"infinitives", label:"Infinitives", color:"#e8c07d", dot:"t1", type:"folder",
    chapters:[
      {
        id:"how-to-v1", title:"how to + V1", subtitle:'"The Boy Who Wanted to Change His Life"',
        tag:"Section 1", tagClass:"t1", type:"grammar",
        desc:`Words like <b>know, explain, learn, discover, teach, ask, show, wonder, remember, forget</b> — always followed by <b class="h1">how to + V1</b>.`,
        note:`<b>📌 Yaad rakho:</b> Yeh words kisi <b>method ya tarika</b> batane ke liye use hote hain. Jab bhi "karne ka tarika" batana ho — yahi words aayenge.`,
        ruleCard:{cls:"r1", html:`<b>RULE:</b> know / explain / learn / discover / teach / ask / show / wonder / remember / forget → <b>how to + V1</b><br>✅ She <b>taught him how to speak</b> &nbsp;|&nbsp; He <b>forgot how to write</b>`},
        chips:{cls:"t1", words:["know","explain","learn","discover","teach","ask","show","wonder","remember","forget"]},
        paras:[
          {n:"¶ 1", text:`Aryan was a young man from a small town. He did not <span class="h1">know how to speak</span> English confidently. One day, his teacher <span class="h1">explained how to construct</span> sentences properly, and Aryan finally felt a spark inside him.`},
          {n:"¶ 2", text:`He went to the library and began to <span class="h1">learn how to use</span> grammar books on his own. There, he <span class="h1">discovered how to find</span> patterns in the language — something no one had shown him before.`},
          {n:"¶ 3", text:`His elder sister Meera <span class="h1">taught him how to read</span> English newspapers every morning. He <span class="h1">asked her how to pronounce</span> difficult words, and she <span class="h1">showed him how to break</span> words into syllables.`},
          {n:"¶ 4", text:`Some nights Aryan lay awake and <span class="h1">wondered how to become</span> truly fluent. He always <span class="h1">remembered how to start</span> — with small steps. But in stress, he would <span class="h1">forget how to apply</span> the rules he had studied. Still, he never stopped.`},
        ]
      },
      {
        id:"to-v1", title:"to + V1", subtitle:'"The Decision"',
        tag:"Section 2", tagClass:"t2", type:"grammar",
        desc:`Words like <b>want, try, decide, agree, refuse, prefer, manage, wish, dare, love…</b> — take a simple <b class="h2">to + V1</b>. No object in between.`,
        note:`<b>📌 Trick:</b> Yeh words apni <b>khud ki feeling ya irada</b> batate hain. Subject khud kuch karna chahta hai — to + V1 aayega.`,
        ruleCard:{cls:"r2", html:`<b>RULE:</b> attempt / afford / begin / want / try / decide / refuse / agree / prefer / manage / wish / dare / love / like / need / intend / continue / neglect / pretend / consent / endeavor / hesitate / bother / beg / choose / care / mean / offer / prepare / proceed / desire → <b>to + V1</b><br>✅ He <b>decided to join</b> &nbsp;|&nbsp; She <b>refused to admit</b>`},
        chips:{cls:"t2", words:["attempt","afford","begin","bother","beg","choose","care","consent","dare","continue","endeavor","intend","hesitate","love","like","wish","want","manage","mean","offer","need","prefer","prepare","pretend","neglect","try","proceed","refuse","agree","decide","desire"]},
        paras:[
          {n:"¶ 5", text:`The next morning, Aryan <span class="h2">decided to join</span> a spoken English class in the city. He could not <span class="h2">afford to waste</span> more time, and he <span class="h2">began to prepare</span> his bag the night before. He <span class="h2">wanted to change</span> his life, and he <span class="h2">intended to do</span> it seriously this time.`},
          {n:"¶ 6", text:`On the first day, he <span class="h2">attempted to speak</span> in front of the class. His voice shook. He <span class="h2">tried to stay</span> calm, but his hands trembled. He had <span class="h2">chosen to face</span> his fear, and he was not going to run.`},
          {n:"¶ 7", text:`The teacher smiled. She <span class="h2">offered to help</span> him after class. Aryan <span class="h2">agreed to stay</span> back. He <span class="h2">begged her to give</span> him extra practice sentences. She <span class="h2">consented to spend</span> thirty extra minutes with him every day.`},
          {n:"¶ 8", text:`Some classmates <span class="h2">pretended to be</span> better than they were. They <span class="h2">refused to admit</span> their mistakes. But Aryan <span class="h2">cared to improve</span> genuinely — he never <span class="h2">hesitated to ask</span> even the simplest questions. He <span class="h2">preferred to learn</span> slowly and correctly.`},
          {n:"¶ 9", text:`Weeks passed. He <span class="h2">continued to practice</span> every night. He <span class="h2">endeavored to read</span> at least one article daily. He <span class="h2">managed to finish</span> an entire English novel in three weeks. He had <span class="h2">neglected to celebrate</span> small wins before — now he did.`},
          {n:"¶ 10", text:`He <span class="h2">wished to speak</span> at a public event someday. He <span class="h2">desired to inspire</span> other students. He <span class="h2">dared to dream</span> big, and he <span class="h2">needed to believe</span> in himself first. He did not <span class="h2">bother to listen</span> to those who doubted him.`},
          {n:"¶ 11", text:`He <span class="h2">meant to call</span> his father that evening. He <span class="h2">liked to share</span> his progress with family. He <span class="h2">loved to write</span> in his diary each night. He <span class="h2">prepared to speak</span> at the class event next Friday.`},
        ]
      },
      {
        id:"obj-to-v1", title:"Object + to + V1", subtitle:'"People Who Shaped Him"',
        tag:"Section 3", tagClass:"t3", type:"grammar",
        desc:`Words like <b>allow, advise, warn, tell, encourage, forbid, persuade, urge…</b> — need an <b>object</b> before <b class="h3">to + V1</b>.`,
        note:`<b>📌 Trick:</b> Yeh words <b>doosre ko</b> kuch karne ke liye kehte hain ya rokte hain. Beech mein object (him/her/them) zaroor aata hai.`,
        ruleCard:{cls:"r3", html:`<b>RULE:</b> allow / advise / compel / encourage / expect / forbid / instruct / invite / oblige / order / permit / persuade / request / tell / warn / teach / tempt / urge / show / remind → <b>Object + to + V1</b><br>✅ She <b>told him to trust</b> &nbsp;|&nbsp; They <b>warned him not to waste</b>`},
        chips:{cls:"t3", words:["allow","advise","compel","encourage","expect","forbid","instruct","invite","oblige","order","permit","persuade","request","tell","warn","teach","tempt","urge","show","remind"]},
        paras:[
          {n:"¶ 12", text:`The teacher <span class="h3">encouraged Aryan to speak</span> louder. She <span class="h3">advised him to record</span> his voice. She <span class="h3">instructed the class to practice</span> in pairs. She <span class="h3">reminded Aryan to submit</span> his assignment on time.`},
          {n:"¶ 13", text:`His principal <span class="h3">invited Aryan to represent</span> the school. Aryan's mother <span class="h3">urged him to accept</span> the opportunity. His father <span class="h3">warned him not to waste</span> this chance. Everyone <span class="h3">expected him to do</span> well.`},
          {n:"¶ 14", text:`Meera <span class="h3">taught him to stay</span> confident under pressure. She <span class="h3">told him to trust</span> his preparation. She <span class="h3">persuaded him to wear</span> his formal shirt.`},
          {n:"¶ 15", text:`The rules <span class="h3">forbade participants to use</span> notes on stage. The organizer <span class="h3">permitted each student to speak</span> for five minutes. The pressure <span class="h3">compelled Aryan to revise</span> his speech one last time.`},
          {n:"¶ 16", text:`The lights <span class="h3">tempted him to close</span> his eyes. The silence <span class="h3">obliged him to begin</span>. The judge <span class="h3">wanted him to continue</span> — she was impressed.`},
          {n:"¶ 17", text:`The judge <span class="h3">ordered her assistant to note</span> Aryan's name. She <span class="h3">allowed him to ask</span> one question. Aryan <span class="h3">requested her to suggest</span> good books. She <span class="h3">urged him to never stop</span> reading.`},
        ]
      },
      {
        id:"bare-inf", title:"Bare Infinitive", subtitle:'"The Day He Won"',
        tag:"Section 4", tagClass:"t4", type:"grammar",
        desc:`Words like <b>make, let, hear, see, watch, feel, notice, bid, have, help</b> — use verb <b class="h4">without "to"</b>.`,
        note:`<b>📌 Trick:</b> Yeh sab <b>sensory ya causative</b> verbs hain — dekhna, sunna, mehsoos karna, ya kisi se karwana. Inke baad "to" kabhi nahi aata.`,
        ruleCard:{cls:"r4", html:`<b>RULE:</b> make / help / feel / see / notice / watch / hear / let / bid / have → <b>Bare Infinitive (no "to")</b><br>✅ He <b>heard him speak</b> &nbsp;|&nbsp; She <b>let him choose</b> &nbsp;|&nbsp; They <b>made him promise</b>`},
        chips:{cls:"t4", words:["make","help","feel","see","notice","watch","hear","let","bid","have"]},
        paras:[
          {n:"¶ 18", text:`Aryan won second place. The whole hall <span class="h4">heard him speak</span> with genuine emotion. His teacher <span class="h4">watched him walk</span> onto the stage. She could <span class="h4">see his hands tremble</span> slightly, but his voice was strong.`},
          {n:"¶ 19", text:`His mother <span class="h4">felt her eyes fill</span> with tears. His father <span class="h4">noticed him smile</span> — a real, full smile — for the first time in months. His brother <span class="h4">watched him receive</span> the trophy and clapped loudly.`},
          {n:"¶ 20", text:`That night, Meera <span class="h4">let him choose</span> the movie. His success <span class="h4">made everyone feel</span> proud. His journey <span class="h4">helped his family know</span> that hard work truly pays.`},
          {n:"¶ 21", text:`Aryan's father <span class="h4">had him sit</span> beside him at breakfast. He <span class="h4">made Aryan promise</span> to keep learning. His teacher had <span class="h4">helped him discover</span> not just English, but himself.`},
          {n:"¶ 22", text:`The principal <span class="h4">bid everyone rise</span> to applaud Aryan. He <span class="h4">felt the room go</span> quiet. He could <span class="h4">hear his own heart beat</span> with joy. He had built this — word by word, day by day.`},
        ]
      },
    ]
  },

  {
    id:"gerunds", label:"Gerunds", color:"#c9a84c", dot:"t5", type:"folder",
    chapters:[
      {
        id:"gerund-list", title:"Gerund (V+ing)", subtitle:'"A New College, A New Aryan"',
        tag:"Section 5", tagClass:"t5", type:"grammar",
        desc:`These words are <b>always followed by V+ing</b>: admit, enjoy, risk, stop, miss, fancy, regret, suggest, consider, imagine, hate, love, like, prefer, mind, finish, escape, endure, contemplate, appreciate, detest, resist, delay, deny, forgive, mention, postpone, start, defer, propose, practice, anticipate, pardon, excuse, resent.`,
        note:`<b>📌 Trick:</b> Inhe yaad karne ka asan tarika — yeh sab <b>feelings ya reactions</b> express karte hain. Jab feeling ho, gerund aata hai!`,
        ruleCard:{cls:"r5", html:`<b>RULE:</b> admit / like / dislike / mind / love / appreciate / detest / resist / delay / deny / forgive / mention / enjoy / postpone / stop / start / defer / prefer / finish / risk / propose / escape / suggest / consider / practice / imagine / anticipate / hate / regret / endure / contemplate / fancy / miss / pardon / excuse / resent → <b>V+ing</b><br>✅ He <b>enjoyed reading</b> &nbsp;|&nbsp; She <b>suggested going</b>`},
        chips:{cls:"t5", words:["admit","like","dislike","mind","love","appreciate","detest","resist","delay","deny","forgive","mention","enjoy","postpone","stop","start","defer","prefer","finish","risk","propose","escape","suggest","consider","practice","imagine","anticipate","hate","regret","endure","contemplate","fancy","miss","pardon","excuse","resent"]},
        paras:[
          {n:"¶ 23", text:`Aryan joined college and <span class="h5">admitted feeling</span> nervous. He had always <span class="h5">disliked speaking</span> in crowds, but he <span class="h5">started practicing</span> every morning in front of the mirror.`},
          {n:"¶ 24", text:`Sahil <span class="h5">suggested going</span> to the debate club. Aryan <span class="h5">considered joining</span> but <span class="h5">postponed deciding</span> for a week. He could not <span class="h5">imagine standing</span> before fifty students yet. He <span class="h5">anticipated feeling</span> embarrassed.`},
          {n:"¶ 25", text:`Sahil said, "Do you <span class="h5">mind listening</span> to me?" He <span class="h5">proposed making</span> a deal. Aryan <span class="h5">liked the idea of pushing</span> himself. He <span class="h5">appreciated Sahil's encouraging</span> him without pressure.`},
          {n:"¶ 26", text:`Professor Kapoor asked, "Can anyone <span class="h5">deny that reading</span> shapes the mind?" Aryan <span class="h5">enjoyed answering</span> questions like this. He could not <span class="h5">resist sharing</span> his opinion.`},
          {n:"¶ 27", text:`A senior <span class="h5">mentioned having</span> seen Aryan at last year's competition. Aryan <span class="h5">missed competing</span> on that stage again. He <span class="h5">contemplated entering</span> this year's national event. He <span class="h5">fancied winning</span> the gold trophy someday.`},
          {n:"¶ 28", text:`He <span class="h5">regretted not joining</span> the club earlier. He <span class="h5">hated wasting</span> time. He <span class="h5">detested making</span> excuses. He <span class="h5">resented having ignored</span> opportunities. But today he <span class="h5">stopped blaming</span> himself and <span class="h5">finished writing</span> his application.`},
          {n:"¶ 29", text:`He <span class="h5">preferred competing</span> to simply watching. He <span class="h5">risked losing</span> the first round. He could <span class="h5">endure failing</span> once. He could not <span class="h5">escape facing</span> his fear. The professor <span class="h5">excused him leaving</span> early. Aryan <span class="h5">pardoned himself for delaying</span> so long.`},
          {n:"¶ 30", text:`Sahil <span class="h5">loved motivating</span> people. He <span class="h5">deferred telling</span> Aryan the full plan. Aryan <span class="h5">appreciated him not rushing</span> things. He <span class="h5">resented being treated</span> like a child — but Sahil never did that.`},
        ]
      },
    ]
  },

  {
    id:"as-rules", label:"AS Rules", color:"#58a6ff", dot:"t6", type:"folder",
    chapters:[
      {
        id:"as-group", title:'"as" Group', subtitle:'"The Competition — Part 1"',
        tag:"Section 6", tagClass:"t6", type:"grammar",
        desc:`treat, regard, view, describe, portray, perceive, recognize, refer, use, employ, depict, respect, define, see → <b class="h6">as + noun</b>`,
        note:`<b>📌 Trick:</b> Yeh sab words kisi cheez ko <b>define karte hain ya batate hain</b> — isliye "as" aata hai taaki comparison ya identity ho sake.`,
        ruleCard:{cls:"r6", html:`<b>RULE:</b> treat / define / regard / describe / respect / depict / portray / view / recognize / refer / use / employ / perceive / see → <b>as + noun</b><br>✅ They <b>regarded him as</b> a hero &nbsp;|&nbsp; She <b>described it as</b> difficult`},
        chips:{cls:"t6", words:["treat","define","regard","describe","respect","depict","portray","view","recognize","refer","use","employ","perceive","see"]},
        paras:[
          {n:"¶ 31", text:`The judges <span class="h6">regarded Aryan as</span> a talented speaker. The audience <span class="h6">perceived him as</span> confident. His teacher had always <span class="h6">treated him as</span> a serious student.`},
          {n:"¶ 32", text:`Journalists <span class="h6">portrayed Aryan as</span> a rising voice. One reporter <span class="h6">referred to him as</span> "a student who defied all odds." Everyone <span class="h6">recognized his effort as</span> genuine.`},
          {n:"¶ 33", text:`The college <span class="h6">employed him as</span> a student mentor. His professor had often <span class="h6">used his essays as</span> examples in class.`},
        ]
      },
      {
        id:"no-as-group", title:'NO "as" Group', subtitle:'"The Competition — Part 2"',
        tag:"Section 7", tagClass:"t7", type:"grammar",
        desc:`elect, name, call, declare, crown, appoint, consider, make, choose, label, dub, find, think, proclaim → direct noun. <b class="h7">No "as"</b>!`,
        note:`<b>📌 Trick:</b> Yeh sab words kisi ko <b>ek title ya role dete hain directly</b> — "as" ki zaroorat nahi. Seedha noun aata hai.`,
        ruleCard:{cls:"r7", html:`<b>RULE:</b> elect / name / think / consider / call / make / choose / appoint / declare / crown / proclaim / label / dub / find → <b>direct noun (no "as")</b><br>✅ They <b>elected him president</b> (NOT "as president")`},
        chips:{cls:"t7", words:["elect","name","think","consider","call","make","choose","appoint","declare","crown","proclaim","label","dub","find"]},
        paras:[
          {n:"¶ 34", text:`The panel <span class="h7">declared Aryan</span> the winner. The committee <span class="h7">elected him</span> Student Ambassador. They <span class="h7">named him</span> the best speaker under twenty-five.`},
          {n:"¶ 35", text:`The crowd <span class="h7">called him</span> a champion. The principal <span class="h7">appointed him</span> head of the English Society. The judges <span class="h7">found him</span> exceptionally well-prepared. His peers <span class="h7">considered him</span> an inspiration.`},
          {n:"¶ 36", text:`A journalist <span class="h7">dubbed him</span> "the Voice of the Valley." The media <span class="h7">labelled him</span> a prodigy. His mother simply <span class="h7">thought him</span> the best son in the world.`},
        ]
      },
    ]
  },

  {
    id:"reflexive", label:"Reflexive Pronouns", color:"#3fb950", dot:"t8", type:"folder",
    chapters:[
      {
        id:"reflexive-req", title:"Reflexive Required", subtitle:'"After the Victory"',
        tag:"Section 8", tagClass:"t8", type:"grammar",
        desc:`enjoy, avail, absent, pride, adjust, reconcile, acquit, amuse, resign, avenge, exert, apply, adapt — must use <b class="h8">reflexive pronoun</b>.`,
        note:`<b>📌 Trick:</b> Yeh words kisi <b>baahari object ke bina adhoore lagte hain</b> — jab koi object nahi hai sentence mein, toh "himself/herself" aana hi chahiye.`,
        ruleCard:{cls:"r8", html:`<b>RULE:</b> enjoy / avail / absent / pride / adjust / reconcile / acquit / amuse / resign / avenge / exert / apply / adapt → <b>reflexive pronoun required</b><br>✅ He <b>availed himself of</b> the chance &nbsp;|&nbsp; She <b>absented herself from</b> the meeting`},
        chips:{cls:"t8", words:["enjoy","avail","absent","pride","adjust","reconcile","acquit","amuse","resign","avenge","exert","apply","adapt"]},
        paras:[
          {n:"¶ 37", text:`After winning, Aryan truly <span class="h8">enjoyed himself</span> at the celebration. He <span class="h8">availed himself of</span> every opportunity. He <span class="h8">applied himself to</span> learning new skills. He <span class="h8">adapted himself to</span> the demands of college life.`},
          {n:"¶ 38", text:`He <span class="h8">prided himself on</span> never missing a session. He <span class="h8">exerted himself</span> when things got hard. He <span class="h8">adjusted himself to</span> the new environment. He <span class="h8">amused himself with</span> word games late at night.`},
          {n:"¶ 39", text:`A rival accused him unfairly. Aryan <span class="h8">acquitted himself of</span> all charges gracefully. He did not seek to <span class="h8">avenge himself</span>. Instead, he <span class="h8">reconciled himself to</span> the situation. There were days he <span class="h8">resigned himself to</span> rest. Once he <span class="h8">absented himself from</span> a seminar.`},
        ]
      },
      {
        id:"no-reflexive", title:"No Reflexive", subtitle:'"What He Never Said"',
        tag:"Section 9", tagClass:"t9", type:"grammar",
        desc:`keep, stop, turn, qualify, bathe, move, rest, hide — <b>NO reflexive pronoun</b>. They work alone.`,
        note:`<b>📌 Common Mistake:</b> Log aksar "hid himself" ya "rested himself" bol dete hain — yeh GALAT hai. Yeh words apne aap complete hain.`,
        ruleCard:{cls:"r9", html:`<b>RULE:</b> keep / stop / turn / qualify / bathe / move / rest / hide → <b>NO reflexive pronoun</b><br>✅ She <b>hid behind</b> the wall (NOT "hid herself") &nbsp;|&nbsp; He <b>rested on</b> the bench`},
        chips:{cls:"t9", words:["keep","stop","turn","qualify","bathe","move","rest","hide"]},
        paras:[
          {n:"¶ 40", text:`Aryan never said "hid himself." He simply <span class="h9">hid behind</span> his books when he needed quiet. He would <span class="h9">rest on</span> the bench near the garden. He would <span class="h9">stop at</span> the bookshop on his way home. He would <span class="h9">keep walking</span> no matter how tired. He would <span class="h9">turn toward</span> the window when he needed to think.`},
        ]
      },
    ]
  },

  {
    id:"special-rules", label:"Special Rules", color:"#d2a8ff", dot:"ta", type:"folder",
    chapters:[
      {
        id:"no-possessive", title:"No Possessive (Rule 21)", subtitle:'"Letters and Goodbyes"',
        tag:"Section 10", tagClass:"ta", type:"grammar",
        desc:`separation, excuse, mention, favour, pardon, leave, report, sight — <b>NO possessive</b> before them. Use "the X of" instead.`,
        note:`<b>📌 Rule 21:</b> Kabhi mat kaho "his mention" ya "her sight" — hamesha "the mention of his name" ya "the sight of her" bolna sahi hai.`,
        ruleCard:{cls:"ra", html:`<b>RULE 21:</b> separation / excuse / mention / favour / pardon / leave / report / sight → <b>No possessive</b><br>✅ <b>The mention of</b> his name (NOT "his mention") &nbsp;|&nbsp; <b>The sight of</b> blood`},
        chips:{cls:"ta", words:["separation","excuse","mention","favour","pardon","leave","report","sight"]},
        paras:[
          {n:"¶ 41", text:`When the semester ended, Rohan had to leave for another city. <span class="ha">The separation of</span> the two friends was difficult. Nobody had expected it so soon.`},
          {n:"¶ 42", text:`Aryan wrote: "<span class="ha">The pardon of</span> any mistake I made is all I ask." Not "your pardon" — <span class="ha">the pardon of</span> a mistake. Grammar, even in emotion.`},
          {n:"¶ 43", text:`The professor said: "<span class="ha">The mention of</span> Aryan's name will always bring pride to this institution." Not "his mention" — <span class="ha">the mention of</span> his name.`},
          {n:"¶ 44", text:`The letter read: "Please do us <span class="ha">the favour of</span> attending." He took <span class="ha">the leave of</span> his warden respectfully. He submitted <span class="ha">the report of</span> his achievements on time.`},
          {n:"¶ 45", text:`At the interview, <span class="ha">the sight of</span> the panel made him nervous for a second. But only for a second. He breathed. He walked in. He was ready.`},
        ]
      },
      {
        id:"perfect-tense", title:"Perfect Tense Triggers (Rule 29)", subtitle:'"What He Has Become"',
        tag:"Section 11", tagClass:"tb", type:"grammar",
        desc:`ever, never, yet, already, just now, until now, always, occasionally, often, lately, recently, so far, up to now — <b>always trigger Perfect Tense</b>.`,
        note:`<b>📌 Rule 29:</b> In words ka dikhna matlab ek hi cheez — <b>has/have/had + V3</b>. Yeh words dekho toh automatically perfect tense laga do.`,
        ruleCard:{cls:"rb", html:`<b>RULE 29:</b> ever / never / yet / already / just now / until now / always / occasionally / often / lately / recently / so far / up to now → <b>Perfect Tense required</b><br>✅ He has <b>never</b> failed &nbsp;|&nbsp; She has <b>recently</b> joined`},
        chips:{cls:"tb", words:["ever","never","yet","already","just now","until now","always","occasionally","often","lately","recently","so far","up to now"]},
        paras:[
          {n:"¶ 46", text:`"Have you <span class="hb">ever</span> spoken at a national event?" Aryan smiled. "Yes, I have." He had <span class="hb">never</span> felt so prepared for a question in his life.`},
          {n:"¶ 47", text:`"Have you submitted your documents <span class="hb">yet</span>?" "I have <span class="hb">already</span> submitted them." "I see you have <span class="hb">just now</span> received your award certificate." "Yes, <span class="hb">just now</span>," he confirmed.`},
          {n:"¶ 48", text:`"What have you achieved <span class="hb">so far</span>?" Aryan said, "<span class="hb">Up to now</span>, I have won three competitions. <span class="hb">Until now</span>, I have never taken a shortcut. I have <span class="hb">always</span> believed in doing things the right way."`},
          {n:"¶ 49", text:`"Have you <span class="hb">recently</span> started anything new?" "Yes — I have <span class="hb">lately</span> been writing a grammar guide. I have <span class="hb">occasionally</span> conducted free workshops. I have <span class="hb">often</span> thought about how language can change lives."`},
          {n:"¶ 50", text:`"We have <span class="hb">now</span> made our decision." A pause. "You have earned this scholarship, Aryan. What you have done <span class="hb">up to the present</span> is remarkable." Aryan walked out into the afternoon sun. Word by word. Rule by rule. Day by day.`},
        ]
      },

      {
        id:"prep-basics",
        title:"Preposition — Position Rules",
        subtitle:'"Where Things Are"',
        tag:"Preposition 1", tagClass:"t6", type:"grammar",
        desc:`<b>on/in/at/over/above/under/beneath/across/through/along</b> — position aur location ke rules. Yeh SSC mein sabse common preposition questions hain.`,
        note:`<b>📌 Key Rules:</b><br>
• <b>on</b> — chair/stool/bench/sofa/farm/platform/bike/scooter/foot<br>
• <b>in</b> — bed/armchair/car/city/country/office/restaurant/hotel/tree (living)<br>
• <b>under</b> — tree (shade se nahi), arrest<br>
• <b>over</b> — blanket/fan/bridge (same bank), covering<br>
• <b>across</b> — bridge (joining two sides), river, railway line<br>
• <b>through</b> — tunnel/forest/inside se guzarna<br>
• <b>along</b> — road ke saath saath chalna<br>
• <b>above</b> — danger level, floats (no contact)<br>
• <b>beneath/underneath</b> — bricks ke neeche chhupna<br>
• <b>in the South</b> — ek hi desh ke andar (Indira Point is in the South of India)<br>
• <b>to the South</b> — alag desh (Sri Lanka is to the South of India)`,
        ruleCard:{cls:"r6", html:`<b>POSITION RULES (SSC Frequently Asked):</b><br>
✅ Sit <b>on</b> the chair/stool/bench/sofa &nbsp;|&nbsp; Sit <b>in</b> the bed/armchair<br>
✅ Sit <b>under</b> the tree &nbsp;|&nbsp; Sit <b>in</b> the shade of the tree<br>
✅ Bridge <b>over</b> the river (same bank) &nbsp;|&nbsp; Bridge <b>across</b> the river (joining two villages)<br>
✅ Passed <b>through</b> the tunnel &nbsp;|&nbsp; Walked <b>along</b> the road<br>
✅ Water <b>above</b> danger level &nbsp;|&nbsp; Snake hiding <b>beneath/underneath</b> the bricks<br>
✅ Indira Point is <b>in</b> the South of India &nbsp;|&nbsp; Sri Lanka is <b>to</b> the South of India<br>
✅ Came <b>by</b> car/bus/air &nbsp;|&nbsp; Came <b>on</b> foot/bike/scooter &nbsp;|&nbsp; Live <b>in</b> trees/nests`},
        chips:{cls:"t6", words:["on","in","under","over","across","through","along","above","beneath","in the South","to the South","by","at"]},
        paras:[
          {n:"Rule 1", text:`<b class="h6">On vs In (Seating):</b> He is sitting <span class="h6">on</span> the chair / stool / bench / sofa. BUT — He is sitting <span class="h6">in</span> the bed / armchair. <br><br><b>Trick:</b> Jab surface pe baitho → <b>on</b>. Jab andar/ghira hua feel ho → <b>in</b>.`},
          {n:"Rule 2", text:`<b class="h6">Under vs In (Tree):</b> He is sitting <span class="h6">under</span> the tree. BUT — He is sitting <span class="h6">in</span> the shade of the tree. <br><br><b>Trick:</b> Tree ke neeche = under. Shade ke andar = in the shade.`},
          {n:"Rule 3", text:`<b class="h6">Over vs Across (Bridge):</b> A bridge was built <span class="h6">over</span> the river. (same bank se dikhna) — A bridge was built <span class="h6">across</span> the river joining the two villages. (dono kinare jod rahi hai) <br><br><b>Trick:</b> Over = upar se. Across = ek side se doosri side tak.`},
          {n:"Rule 4", text:`<b class="h6">Through:</b> The train passed <span class="h6">through</span> the tunnel. He ran <span class="h6">through</span> the dense forest to his village. <br><br><b class="h6">Along:</b> He walked <span class="h6">along</span> the road. Trees are planted <span class="h6">along</span> the roads. <br><br><b>Trick:</b> Through = andar se guzarna. Along = saath saath chalna.`},
          {n:"Rule 5", text:`<b class="h6">Above vs Beneath:</b> The rivers are flowing <span class="h6">above</span> the danger level. (koi contact nahi — just higher than) — The snake is hiding <span class="h6">beneath/underneath</span> the bricks. <br><br><b>Trick:</b> Above = higher position, no contact. Beneath = pressed under something.`},
          {n:"Rule 6", text:`<b class="h6">In the South vs To the South:</b> Indira Point is <span class="h6">in</span> the South of India. (India ke andar hi hai) — Sri Lanka is <span class="h6">to</span> the South of India. (alag desh, India se bahar) <br><br><b>Trick:</b> Same country/region mein = in. Alag country = to.`},
          {n:"Rule 7", text:`<b class="h6">By/On (Transport):</b> I came <span class="h6">by</span> car / bus / air / flight. (vehicle ka naam) — I came <span class="h6">on</span> foot / on a bike / on a scooter. (body ya 2-wheeler) <br><br><b>Trick:</b> 4-wheeler/enclosed vehicle = by. Foot/2-wheeler = on.`},
          {n:"Rule 8", text:`<b class="h6">At/In (Place):</b> I am <span class="h6">at</span> home / at the station / at platform 8. (specific point) — I am <span class="h6">in</span> my office / in Delhi / in India. (inside a space/city/country) <br><br><b>Trick:</b> At = ek point pe. In = kisi jagah ke andar.`},
          {n:"Rule 9", text:`<b class="h6">Into (Enter + Agreement):</b> He entered <span class="h6">×</span> the hall. (enter ke baad koi preposition nahi — place ke liye) — They entered <span class="h6">into</span> an agreement / pact / alliance. (abstract noun ke saath into aata hai) <br><br><b>Trick:</b> Enter + place = no preposition. Enter + abstract noun = into.`},
          {n:"Rule 10", text:`<b class="h6">Upto / Towards / Before / Against:</b><br>
He climbed <span class="h6">upto</span> that branch. (limit tak)<br>
The bus is heading <span class="h6">towards</span> the town. (direction mein)<br>
Don't lean <span class="h6">against</span> the wall. (ke khilaaf/support lena)<br>
The matter is <span class="h6">beyond</span> the jurisdiction. (ke bahar) / <span class="h6">within</span> jurisdiction. (ke andar)`},
        ]
      },

      {
        id:"prep-confusing",
        title:"Confusing Preposition Pairs",
        subtitle:'"The Pairs That Trick Everyone"',
        tag:"Preposition 2", tagClass:"t7", type:"grammar",
        desc:`<b>between/among, by/with, beside/besides, before/in front of, die of/from/in/for, differ with/from, compare to/with, made of/from</b> — yeh pairs SSC mein baar baar aate hain.`,
        note:`<b>📌 Most Common Mistakes:</b><br>
• "between" → 2 ke beech &nbsp;|&nbsp; "among" → 2 se zyada ke beech<br>
• "by" → doer ke saath &nbsp;|&nbsp; "with" → instrument/weapon ke saath<br>
• "beside" → bagin mein &nbsp;|&nbsp; "besides" → ke alawa<br>
• "die of" → disease/hunger &nbsp;|&nbsp; "die from" → exhaustion &nbsp;|&nbsp; "die in" → place/accident &nbsp;|&nbsp; "die for" → kisi ke liye<br>
• "made of" → form nahi badlta &nbsp;|&nbsp; "made from" → form badal jaata hai`,
        ruleCard:{cls:"r7", html:`<b>CONFUSING PAIRS (SSC Trap Questions):</b><br>
✅ <b>between</b> India and China &nbsp;|&nbsp; <b>among</b> all developed nations<br>
✅ Killed <b>by</b> his servant <b>with</b> a knife (by=doer, with=weapon)<br>
✅ He sat <b>beside</b> me &nbsp;|&nbsp; <b>Besides</b> being foolish, he is egoist too<br>
✅ Died <b>of</b> cancer/hunger &nbsp;|&nbsp; Died <b>from</b> exhaustion &nbsp;|&nbsp; Died <b>in</b> Delhi/accident &nbsp;|&nbsp; Died <b>for</b> motherland<br>
✅ Table is made <b>of</b> wood (form same) &nbsp;|&nbsp; Curd is made <b>from</b> milk (form changes)<br>
✅ Compare A <b>to</b> B (completely different) &nbsp;|&nbsp; Compare A <b>with</b> B (almost same)<br>
✅ Differ <b>from</b> (alag hona) &nbsp;|&nbsp; Differ <b>with</b> (disagree karna)`},
        chips:{cls:"t7", words:["between","among","amid","by","with","beside","besides","before","in front of","die of","die from","die for","made of","made from","compare to","compare with","differ from","differ with"]},
        paras:[
          {n:"Rule 1", text:`<b class="h7">Between vs Among vs Amid:</b><br>
<span class="h7">Between</span> = 2 ke beech → There are trade agreements <span class="h7">between</span> India and China.<br>
<span class="h7">Among</span> = 2 se zyada ke beech → Trade agreements <span class="h7">among</span> all developed nations.<br>
<span class="h7">In between</span> = location batane ke liye → MP is located <span class="h7">in between</span> Gujarat, Maharashtra and UP.<br>
<span class="h7">Amid</span> = uncountable/plural noun dono ke saath → The bill was passed <span class="h7">amid</span> pandemonium. (during) &nbsp;|&nbsp; He came <span class="h7">amid</span> heavy rains.`},
          {n:"Rule 2", text:`<b class="h7">By vs With (Doer vs Weapon):</b><br>
<span class="h7">By</span> = doer (kaam karne wala) → He was killed <span class="h7">by</span> his servant.<br>
<span class="h7">With</span> = instrument/weapon (hathiyaar) → He was killed with a knife.<br>
Complete sentence: He was killed <span class="h7">by</span> his servant <span class="h7">with</span> a knife.<br>
<br>Write <span class="h7">with</span> a pen (instrument) / <span class="h7">in</span> ink (material). <br><b>Trick:</b> Person = by. Cheez/hathiyaar = with/in.`},
          {n:"Rule 3", text:`<b class="h7">Beside vs Besides:</b><br>
<span class="h7">Beside</span> = bagin mein, ke paas → He sat <span class="h7">beside</span> me.<br>
<span class="h7">Besides</span> = ke alawa (apart from) → <span class="h7">Besides</span> being foolish, he is egoist too.<br>
<span class="h7">Except</span> = ke alawa (that person was absent) → <span class="h7">Except</span> Ram, everyone came. (Ram absent tha)<br>
<span class="h7">Besides</span> = ke alawa (that person also came) → <span class="h7">Besides</span> Ram, everyone came. (Ram bhi aaya, late aaya)`},
          {n:"Rule 4", text:`<b class="h7">Die of / from / in / for:</b><br>
<span class="h7">Die of</span> = disease ya hunger se → He died <span class="h7">of</span> cancer. / He died <span class="h7">of</span> hunger.<br>
<span class="h7">Die from</span> = exhaustion/reason given → He died <span class="h7">from</span> exhaustion.<br>
<span class="h7">Die in</span> = place ya accident → He died <span class="h7">in</span> harness. / He was killed <span class="h7">in</span> an accident.<br>
<span class="h7">Die for</span> = kisi ke liye marna → Soldiers die <span class="h7">for</span> their motherland.<br>
<b>Note:</b> Unnatural death = "killed", natural = "died".`},
          {n:"Rule 5", text:`<b class="h7">Made of vs Made from:</b><br>
<span class="h7">Made of</span> = form nahi badlta → The table is made <span class="h7">of</span> wood. / Shoes are made <span class="h7">of</span> leather.<br>
<span class="h7">Made from</span> = form badal jaata hai → Curd is made <span class="h7">from</span> milk. / Bread is made <span class="h7">from</span> wheat.<br>
<b>Trick:</b> Wood → wooden table (form same → <b>of</b>). Milk → curd (form changes → <b>from</b>).`},
          {n:"Rule 6", text:`<b class="h7">Compare to vs Compare with:</b><br>
<span class="h7">Compare to</span> = completely different cheezein → Life is compared <span class="h7">to</span> a journey. / Doctors are compared <span class="h7">to</span> gods.<br>
<span class="h7">Compare with</span> = almost same cheezein → Compare Jio <span class="h7">with</span> Airtel. / Compare this book <span class="h7">with</span> that one.<br>
<b>Trick:</b> Totally different = to. Same category = with.`},
          {n:"Rule 7", text:`<b class="h7">Differ from vs Differ with:</b><br>
<span class="h7">Differ from</span> = alag hona → Amphibians differ <span class="h7">from</span> reptiles.<br>
<span class="h7">Differ with</span> = disagree karna → I differ <span class="h7">with</span> you on this issue.<br>
<br><b class="h7">Home Rule (Common Mistake):</b><br>
I go <span class="h7">×</span> home. (verb of motion + home = no preposition, home = adverb)<br>
He goes <span class="h7">to</span> Ram's home. (possessive noun ke saath "to" aata hai)<br>
I am <span class="h7">at</span> home. (ghar par hona)`},
          {n:"Rule 8", text:`<b class="h7">Senior/Junior/Prefer/Marry (Tricky ones):</b><br>
Senior <span class="h7">to</span> him (NOT "than") → She is senior <span class="h7">to</span> him.<br>
Better <span class="h7">than</span> → She is better <span class="h7">than</span> him. BUT senior <span class="h7">to</span> him.<br>
Marry: Active = no preposition → Ram married <span class="h7">×</span> Sita.<br>
Passive = "to" → Ram was married <span class="h7">to</span> Sita.<br>
<br><b class="h7">Deal in / Deal with / Deal out:</b><br>
Deal <span class="h7">in</span> = business → He deals <span class="h7">in</span> garments.<br>
Deal <span class="h7">with</span> = handle → I can deal <span class="h7">with</span> any problem. (NOT "Cope up with" ❌ → "Cope with" ✅)<br>
Deal <span class="h7">out</span> = distribute → The timetable has been dealt <span class="h7">out</span>.`},
        ]
      },

      {
        id:"prep-no-prep",
        title:"Verbs — No Preposition in Active Voice",
        subtitle:'"The List That Saves Marks"',
        tag:"Preposition 3", tagClass:"t3", type:"grammar",
        desc:`SSC mein yeh ek common trap hai — log <b>galat preposition lagate hain</b> un verbs ke baad jo Active Voice mein koi preposition nahi lete. Yeh list yaad kar lo.`,
        note:`<b>📌 Golden Rule:</b> Neeche diye gaye verbs Active Voice mein <b>seedha object lete hain</b> — beech mein koi preposition nahi. <br>Lekin agar yahi verb <b>Noun ban jaaye</b> toh preposition aa sakta hai.<br>Example: <b>attack ×</b> her (verb) BUT <b>attack on</b> her (noun)`,
        ruleCard:{cls:"r3", html:`<b>NO PREPOSITION IN ACTIVE VOICE:</b><br>
❌ He accompanied <b>with</b> me → ✅ He accompanied <b>×</b> me<br>
❌ He stressed <b>on</b> it → ✅ He stressed <b>×</b> it | BUT: He laid stress <b>on</b> it (noun)<br>
❌ Discuss <b>about</b> → ✅ Discuss <b>×</b> | ❌ Describe <b>about</b> → ✅ Describe <b>×</b><br>
❌ Attack <b>on</b> her (verb) → ✅ Attack <b>×</b> her | BUT: An attack <b>on</b> her (noun)<br>
❌ Resemble <b>like</b> → ✅ Resemble <b>×</b> | ❌ Board <b>on</b> → ✅ Board <b>×</b><br>
❌ Demand <b>for</b> → ✅ Demand <b>×</b> | BUT: demand <b>for</b> (noun)<br>
❌ Reach <b>at/to</b> + place → ✅ Reach <b>×</b> Delhi | BUT: Reach <b>at</b> a conclusion`},
        chips:{cls:"t3", words:["accompany ×","stress ×","emphasise ×","discuss ×","describe ×","attack ×","resemble ×","board ×","demand ×","consider ×","comprise ×","enter ×","reach × (place)","reach at (conclusion)","control ×","investigate ×"]},
        paras:[
          {n:"Group 1", text:`<b class="h3">Mental/Communication Verbs (No Prep):</b><br>
Discuss <span class="h3">×</span> the problem ✅ &nbsp;|&nbsp; Describe <span class="h3">×</span> the scene ✅<br>
Consider <span class="h3">×</span> him my brother ✅ &nbsp;|&nbsp; Tell <span class="h3">×</span> him ✅<br>
Order <span class="h3">×</span> food ✅ &nbsp;|&nbsp; Demand <span class="h3">×</span> his rights ✅<br>
<b>BUT</b> (noun form): He laid <span class="h3">stress on</span> it ✅ | He laid <span class="h3">emphasis on</span> it ✅ | <span class="h3">Demand for</span> referendum ✅`},
          {n:"Group 2", text:`<b class="h3">Physical Action Verbs (No Prep):</b><br>
Attack <span class="h3">×</span> her ✅ (BUT: An <span class="h3">attack on</span> her ✅ — noun mein "on" aata hai)<br>
Accompany <span class="h3">×</span> me ✅ &nbsp;|&nbsp; Board <span class="h3">×</span> the bus ✅<br>
Resemble <span class="h3">×</span> your mother ✅ &nbsp;|&nbsp; Sign <span class="h3">×</span> the papers ✅<br>
Resist <span class="h3">×</span> &nbsp;|&nbsp; Invade <span class="h3">×</span> &nbsp;|&nbsp; Pervade <span class="h3">×</span> &nbsp;|&nbsp; Join <span class="h3">×</span>`},
          {n:"Group 3", text:`<b class="h3">Reach — Special Rule:</b><br>
Reach <span class="h3">×</span> Delhi ✅ (place ke saath koi preposition nahi)<br>
Reach <span class="h3">×</span> home ✅ &nbsp;|&nbsp; Reach <span class="h3">×</span> the station ✅<br>
BUT: Reach <span class="h3">at</span> a conclusion / an agreement ✅ (abstract result ke saath "at")<br>
<b>Similarly:</b> Enter <span class="h3">×</span> the hall ✅ (place) | Enter <span class="h3">into</span> an agreement ✅ (abstract)`},
          {n:"Group 4", text:`<b class="h3">Control / Investigate / Comprise — Traps:</b><br>
Control <span class="h3">×</span> your children ✅ (verb) &nbsp;|&nbsp; BUT: Have <span class="h3">control on</span> your children ✅ (noun)<br>
Investigate <span class="h3">×</span> the matter ✅ (NOT "investigate into") &nbsp;|&nbsp; BUT: <span class="h3">look into</span> = investigate ✅<br>
This play comprises <span class="h3">×</span> three acts ✅ (NOT "comprises of") &nbsp;|&nbsp; BUT: <span class="h3">consist of</span> ✅ (consist mein "of" aata hai)<br>
Consider <span class="h3">×</span> him a friend ✅ (NOT "consider as/like")`},
        ]
      },

      {
        id:"prep-noun-adj-verb",
        title:"Noun / Adjective / Verb — Preposition Changes",
        subtitle:'"Same Word, Different Form, Different Prep"',
        tag:"Preposition 4", tagClass:"ta", type:"grammar",
        desc:`Yeh SSC ka ek <b>very important pattern</b> hai — jab ek word ka noun, adjective ya verb form alag ho, toh uske saath preposition bhi badal jaata hai.`,
        note:`<b>📌 Pattern:</b> Ek hi meaning ka word — teen alag forms mein teen alag prepositions!<br>
Yeh table yaad kar lo:<br>
<b>Noun → Verb → Adjective</b><br>
Confidence <b>in</b> → Confident <b>of</b><br>
Desire <b>for</b> → Desirous <b>of</b><br>
Lack <b>of</b> → Lack <b>×</b> (verb)<br>
Pride <b>in</b> → Pride <b>on</b> ❌ → Proud <b>of</b>`,
        ruleCard:{cls:"ra", html:`<b>PREPOSITION CHANGES WITH FORM:</b><br>
Confidence <b>in</b> (N) → Confident <b>of</b> (Adj)<br>
Desire <b>for</b> (N) → Desirous <b>of</b> (Adj)<br>
Ambition <b>for</b> (N) → Ambitious <b>of</b> (Adj)<br>
Affection <b>for</b> (N) → Affectionate <b>to</b> (Adj)<br>
Capacity <b>of/for</b> (N) → Capable <b>of</b> (Adj)<br>
Lack <b>of</b> (N) → Lack <b>×</b> (V) &nbsp;|&nbsp; Want <b>of</b> (N) → Want <b>×</b> (V)<br>
Pride <b>in</b> (N/V) → Proud <b>of</b> (Adj) [Pride <b>on</b> ❌]<br>
Answer <b>to</b> (N) → Answer <b>×</b> (V) &nbsp;|&nbsp; Result <b>of</b> (N) → Result <b>in</b> (V)<br>
Talk <b>with</b> (N) → Talk <b>to</b> (V) &nbsp;|&nbsp; Substitute <b>for</b> (N) → Substitute <b>with</b> ❌`},
        chips:{cls:"ta", words:["confidence in","confident of","desire for","desirous of","ambition for","ambitious of","affection for","affectionate to","lack of","lack ×","pride in","proud of","result of","result in","talk with","talk to","answer to","answer ×","full of","fill with","equal to","equal ×"]},
        paras:[
          {n:"Set 1", text:`<b class="ha">Confidence / Desire / Ambition / Affection:</b><br>
I have <span class="ha">confidence in</span> my abilities. ✅ &nbsp;|&nbsp; I am <span class="ha">confident of</span> his result. ✅<br>
He has no <span class="ha">desire for</span> money. ✅ &nbsp;|&nbsp; He is <span class="ha">desirous of</span> a government job. ✅<br>
He has no <span class="ha">ambition for</span> money. ✅ &nbsp;|&nbsp; He is <span class="ha">ambitious of</span> a good post. ✅<br>
Mother Teresa had <span class="ha">affection for</span> children. ✅ &nbsp;|&nbsp; She was <span class="ha">affectionate to</span> the destitute. ✅`},
          {n:"Set 2", text:`<b class="ha">Lack / Want / Answer / Substitute:</b><br>
There is a <span class="ha">lack of</span> confidence in her. ✅ &nbsp;|&nbsp; She lacks <span class="ha">×</span> confidence. ✅<br>
This room is in <span class="ha">want of</span> whitewash. ✅ &nbsp;|&nbsp; I want <span class="ha">×</span> a new assistant. ✅<br>
I have no <span class="ha">answer to</span> your question. ✅ &nbsp;|&nbsp; I cannot answer <span class="ha">×</span> your question. ✅<br>
There is no <span class="ha">substitute for</span> mother's milk. ✅ &nbsp;|&nbsp; Cannot be substituted <span class="ha">with</span> anything. ✅`},
          {n:"Set 3", text:`<b class="ha">Pride / Talk / Result:</b><br>
I take <span class="ha">pride in</span> my skills. ✅ &nbsp;|&nbsp; His father prides <span class="ha">on</span> ❌ → prides <span class="ha">×</span> his success ✅ &nbsp;|&nbsp; I am <span class="ha">proud of</span> you. ✅<br>
I had a <span class="ha">talk with</span> him. ✅ &nbsp;|&nbsp; I will talk <span class="ha">to</span> him. ✅<br>
This book is the <span class="ha">result of</span> my hard work. ✅ &nbsp;|&nbsp; Reckless driving results <span class="ha">in</span> accidents. ✅`},
          {n:"Set 4", text:`<b class="ha">Fill/Full, Equal, Capacity/Capable:</b><br>
Fill the jug <span class="ha">with</span> water. ✅ &nbsp;|&nbsp; The jug is full <span class="ha">of</span> water. ✅<br>
Nothing can equal <span class="ha">×</span> mother's love. ✅ &nbsp;|&nbsp; Nothing is equal <span class="ha">to</span> mother's love. ✅<br>
Capacity <span class="ha">of</span> this hall? ✅ &nbsp;|&nbsp; Capacity <span class="ha">for</span> providing lunch. ✅ &nbsp;|&nbsp; Capable <span class="ha">of</span> solving. ✅<br>
<br><b class="ha">Agree with/to/on:</b><br>
Agree <span class="ha">with</span> someone ✅ &nbsp;|&nbsp; Agree <span class="ha">to</span> a proposal ✅ &nbsp;|&nbsp; Agree <span class="ha">on</span> a point/clause ✅`},
          {n:"Set 5", text:`<b class="ha">Key to / Key of | Need of / Need for | Born in/of/to:</b><br>
Where is the <span class="ha">key of</span> my almirah? ✅ (real key) &nbsp;|&nbsp; Hard work is the <span class="ha">key to</span> success. ✅ (virtual/metaphorical)<br>
The poor man is in <span class="ha">need of</span> warm clothes. ✅ (lacking) &nbsp;|&nbsp; There was a <span class="ha">need for</span> further explanation. ✅ (additional requirement)<br>
He was born <span class="ha">in</span> Delhi / in May. ✅ &nbsp;|&nbsp; Born <span class="ha">in</span> a rich family. ✅ &nbsp;|&nbsp; Born <span class="ha">to</span> poor parents. ✅ &nbsp;|&nbsp; Misery is born <span class="ha">of</span> poverty. ✅ (se utpann hona)`},
        ]
      },

      {
        id:"prep-phrases",
        title:"Phrase Prepositions",
        subtitle:'"Ready-Made Phrases for SSC"',
        tag:"Preposition 5", tagClass:"tb", type:"grammar",
        desc:`Yeh <b>phrase prepositions</b> SSC mein fill-in-the-blank aur error-spotting dono mein aate hain. Inhe ek baar padhke yaad kar lo — context mein easy hai!`,
        note:`<b>📌 SSC Tip:</b> Yeh phrases mostly <b>error spotting</b> aur <b>sentence improvement</b> mein aate hain. Ek baar story padh lo — context mein yaad ho jaate hain.`,
        ruleCard:{cls:"rb", html:`<b>IMPORTANT PHRASE PREPOSITIONS:</b><br>
<b>Under:</b> under arrest / under construction / under trial / under treatment / under observation<br>
<b>At:</b> at risk / at the speed of / at the rate of / at home (comfortable)<br>
<b>In:</b> in my opinion (NOT "according to me") / in vain / in debt / in lieu of / in no way / in connection with / in relation to / in accordance with<br>
<b>On:</b> on behalf of / on board / on no condition / on no account / above board (honest)<br>
<b>For:</b> for ages / for good (permanently) / for granted / for the sake of / for sure / except for<br>
<b>By:</b> by mistake / by the way / by dint of (effort se) / by virtue of (authority se)<br>
<b>Of:</b> free of cost / free from vices / out of order / out of stock / of age`},
        chips:{cls:"tb", words:["under arrest","under construction","under trial","in my opinion","in vain","in lieu of","on behalf of","above board","for good","for granted","by mistake","by dint of","by virtue of","free of cost","free from","out of order","at risk","in accordance with","according to me ❌"]},
        paras:[
          {n:"Under-", text:`<b class="hb">Under + :</b><br>
You are <span class="hb">under arrest</span>. (giraftaar) ✅<br>
This building is <span class="hb">under construction</span>. (nirmaanadhin) ✅<br>
He is <span class="hb">under trial</span> and has not been convicted. (vichaaraadhin) ✅<br>
The patient is <span class="hb">under treatment</span>. ✅<br>
The patient is serious and <span class="hb">under observation</span>. (nigraani mein) ✅`},
          {n:"At / In-", text:`<b class="hb">At / In + :</b><br>
His life is <span class="hb">at risk</span>. (khatre mein) ✅<br>
<span class="hb">In my opinion</span>, he is efficient. ✅ (<span class="hb">According to me</span> ❌ — yeh galat hai SSC mein)<br>
I worked hard <span class="hb">in vain</span>. (bekar mein) ✅<br>
He is <span class="hb">in debt</span>. (karz mein) ✅<br>
He surrendered his bike <span class="hb">in lieu of</span> the pending rent. (ke sthan par) ✅<br>
<span class="hb">In accordance with</span> your request, I am sending a copy. ✅<br>
<span class="hb">In no way</span> can we allow corruption to flourish. ✅`},
          {n:"On / For-", text:`<b class="hb">On + :</b><br>
I went to collect the payment <span class="hb">on behalf of</span> my sister. (ki taraf se) ✅<br>
50 passengers were <span class="hb">on board</span>. (sawaar) ✅<br>
My accountant is <span class="hb">above board</span>. (imaandaar) ✅<br>
<span class="hb">On no condition</span> shall I let you come in. ✅<br>
<br><b class="hb">For + :</b><br>
We have been celebrating Diwali <span class="hb">for ages</span>. (lambe samay se) ✅<br>
She left India <span class="hb">for good</span>. (hamesha ke liye) ✅<br>
He took his wife <span class="hb">for granted</span>. (bina mahatva samjhe) ✅<br>
This book is good <span class="hb">except for</span> some typos. ✅`},
          {n:"By / Of-", text:`<b class="hb">By + :</b><br>
I sent this message <span class="hb">by mistake</span>. (galti se) ✅<br>
<span class="hb">By the way</span>, you are late. (baat mein kuch aur jodte waqt) ✅<br>
He passed <span class="hb">by dint of</span> hard work. (mehnat ki madad se) ✅<br>
The judge passed the order <span class="hb">by virtue of</span> his power. (adhikar ki wajah se) ✅<br>
<br><b class="hb">Of + :</b><br>
I got it <span class="hb">free of cost</span>. (muft mein) ✅<br>
He is <span class="hb">free from</span> vices. (burai se mukta) ✅<br>
The lift is <span class="hb">out of order</span>. (kharab) ✅<br>
Volume 1 is <span class="hb">out of stock</span>. ✅<br>
Now you are <span class="hb">of age</span>. (kanuni umra ka) ✅`},
          {n:"Tricky-", text:`<b class="hb">Special Tricky Rules:</b><br>
<span class="hb">Sick of</span> = tired of (pareshaan) → I am sick of his tantrums. ✅<br>
<span class="hb">Sick for</span> = longing for (tadapna) → He is sick for his home. ✅<br>
<span class="hb">Ill with</span> = suffer from disease → He is ill with Jaundice. ✅<br>
<br><span class="hb">Taste for</span> = pasand → I have a taste for classical music. ✅<br>
<span class="hb">Taste in</span> = expertise → He had taste in western music. ✅<br>
<br><span class="hb">Partake in</span> = participate → We will partake in the event. ✅<br>
<span class="hb">Partake of</span> = apna hissa lena → They partook of the refreshment. ✅<br>
<br><span class="hb">Reconcile with</span> = compromise → He reconciled with his rival. ✅<br>
<span class="hb">Reconcile oneself to</span> = beimani se accept karna → She reconciled herself to their demands. ✅<br>
<br><span class="hb">At the beginning</span> = ek specific event ke start mein ✅<br>
<span class="hb">In the beginning</span> = initially (shuruaat mein) ✅<br>
<span class="hb">At the end</span> = ek specific event ke end mein ✅<br>
<span class="hb">In the end</span> = ultimately (antatah) ✅`},
        ]
      },


      {
        id:"fixed-prep-1",
        title:"Fixed Prepositions — Batch 1",
        subtitle:'"The Rules That Never Change"',
        tag:"Fixed Prep 1", tagClass:"t2", type:"grammar",
        desc:`Yeh prepositions <b>hamesha fixed rehte hain</b> — verb/adjective ke saath jo preposition aata hai woh change nahi hota. SSC mein yeh baar baar aate hain.`,
        note:`<b>📌 Golden Rule:</b> Kuch words ke saath preposition <b>meaning ke hisaab se badalta hai</b>:<br>
• <b>Differ from</b> = alag hona &nbsp;|&nbsp; <b>Differ with</b> = disagree karna<br>
• <b>Agree with</b> = person se &nbsp;|&nbsp; <b>Agree to</b> = proposal se &nbsp;|&nbsp; <b>Agree on</b> = point pe<br>
• <b>Part from</b> = person se alag hona &nbsp;|&nbsp; <b>Part with</b> = cheez chhodna<br>
• <b>Annoyed/Angry with</b> = person se &nbsp;|&nbsp; <b>Annoyed/Angry at</b> = baat/situation se<br>
• <b>Talk to</b> (verb) &nbsp;|&nbsp; <b>Talk with</b> (noun)<br>
• <b>Filled with</b> (verb) &nbsp;|&nbsp; <b>Full of</b> (adjective)`,
        ruleCard:{cls:"r2", html:`<b>FIXED PREPOSITIONS — BATCH 1 (SSC Most Asked):</b><br>
Resort <b>to</b> &nbsp;|&nbsp; Wait <b>for</b> &nbsp;|&nbsp; Approve <b>of</b> &nbsp;|&nbsp; Deal <b>in</b> (business) / Deal <b>with</b> (handle)<br>
Differ <b>from</b> (alag) / Differ <b>with</b> (disagree) &nbsp;|&nbsp; Depend <b>on</b><br>
Injurious <b>to</b> &nbsp;|&nbsp; Cope <b>with</b> &nbsp;|&nbsp; Deprive <b>of</b> &nbsp;|&nbsp; Bereft <b>of</b><br>
Superior/Inferior/Senior/Junior/Prior/Adjacent <b>to</b><br>
Filled <b>with</b> / Full <b>of</b> &nbsp;|&nbsp; Agree <b>with</b> (person) / Agree <b>to</b> (proposal)<br>
Annoyed/Angry <b>with</b> (person) / <b>at</b> (situation) &nbsp;|&nbsp; Abide <b>by</b> / Comply <b>with</b>`},
        chips:{cls:"t2", words:["resort to","wait for","approve of","deal in","deal with","differ from","differ with","depend on","injurious to","part from","part with","cope with","filled with","full of","deprive of","bereft of","superior to","inferior to","senior to","junior to","prior to","talk to","talk with","listen to","agree with","agree to","avail of","annoyed with","annoyed at","angry with","angry at","adapt to","adjacent to","surprised at","amazed at","astonished at","abide by","comply with","marry ×","married to"]},
        paras:[
          {n:"Group 1", text:`<b class="h2">Resort / Wait / Approve / Depend:</b><br>
He resorted <span class="h2">to</span> crime. ✅ &nbsp;|&nbsp; I waited <span class="h2">for</span> you. ✅<br>
He approved <span class="h2">of</span> my project. ✅ &nbsp;|&nbsp; I depend <span class="h2">on</span> you. ✅<br><br>
<b class="h2">Deal in vs Deal with:</b><br>
He dealt <span class="h2">in</span> garments. ✅ (business karna)<br>
He dealt <span class="h2">with</span> problems. ✅ (handle karna)<br>
<b>Synonyms of "deal with":</b> cope with / tackle / handle`},
          {n:"Group 2", text:`<b class="h2">Differ from vs Differ with:</b><br>
Amphibians differ <span class="h2">from</span> reptiles. ✅ (alag hona — nature/type mein)<br>
I differ <span class="h2">with</span> you on this matter. ✅ (disagree karna — opinion mein)<br>
Amphibians are different <span class="h2">from</span> reptiles. ✅ (adjective form bhi "from")<br><br>
<b class="h2">Part from vs Part with:</b><br>
I cannot part <span class="h2">from</span> my friend. ✅ (kisi insaan se alag hona)<br>
I cannot part <span class="h2">with</span> my belongings. ✅ (kisi cheez ko chhodna)`},
          {n:"Group 3", text:`<b class="h2">Time Prepositions — SSC Trap:</b><br>
<span class="h2">On</span> Monday / Tuesday / weekdays / weekends / holidays / Sunday evening ✅<br>
<span class="h2">In</span> 2015 / May / August / summer / winter / the morning / the evening / the afternoon ✅<br>
<span class="h2">At</span> 7 o'clock / sunrise / sunset / noon / midnight / night / bedtime ✅<br>
<span class="h2">On</span> the 7th of November / Teachers' Day / September 5 ✅<br><br>
<b>Special combo:</b> On Tuesday <span class="h2">afternoon</span> / On Friday <span class="h2">evening</span> ✅ (din + time = ON)`},
          {n:"Group 4", text:`<b class="h2">Superior / Inferior / Senior / Junior / Prior / Adjacent:</b><br>
He is superior <span class="h2">to</span> you. ✅ &nbsp;|&nbsp; This brand is inferior <span class="h2">to</span> ours. ✅<br>
She is senior <span class="h2">to</span> me. ✅ &nbsp;|&nbsp; He is junior <span class="h2">to</span> her. ✅<br>
The train arrived prior <span class="h2">to</span> time. ✅ (pehle)<br>
Your house is adjacent <span class="h2">to</span> mine. ✅ (bagin mein)<br><br>
<b>Injurious:</b> Smoking is injurious <span class="h2">to</span> health. ✅<br>
<b>Cope:</b> I cannot cope <span class="h2">with</span> hot weather. ✅ (NOT "cope up with" ❌)`},
          {n:"Group 5", text:`<b class="h2">Filled with vs Full of:</b><br>
The bucket was filled <span class="h2">with</span> water. ✅ (verb — action of filling)<br>
The bucket is full <span class="h2">of</span> water. ✅ (adjective — state of being full)<br><br>
<b class="h2">Deprive of / Bereft of:</b><br>
He deprived me <span class="h2">of</span> my rights. ✅<br>
They are bereft <span class="h2">of</span> basic human rights. ✅<br><br>
<b class="h2">Avail of:</b><br>
I availed myself <span class="h2">of</span> the opportunity. ✅ (reflexive + of)`},
          {n:"Group 6", text:`<b class="h2">Agree — 3 forms:</b><br>
I agree <span class="h2">with</span> you. ✅ (person se agree)<br>
I agree <span class="h2">to</span> your proposal. ✅ (proposal/idea se agree)<br>
I agree <span class="h2">on</span> this point. ✅ (specific point pe agree)<br><br>
<b class="h2">Talk to vs Talk with:</b><br>
I will talk <span class="h2">to</span> him. ✅ (verb)<br>
The PM had a talk <span class="h2">with</span> the CM. ✅ (noun)<br><br>
<b class="h2">Listen to:</b><br>
Please listen <span class="h2">to</span> me. ✅ &nbsp;|&nbsp; I listen <span class="h2">to</span> old songs. ✅<br>
This song is worth listening <span class="h2">×</span>. ✅ (worth ke baad no preposition)`},
          {n:"Group 7", text:`<b class="h2">Annoyed / Angry — with vs at:</b><br>
I am annoyed <span class="h2">with</span> you. ✅ (person se)<br>
I am annoyed <span class="h2">at</span> your idiocy. ✅ (baat/situation se)<br>
She was angry <span class="h2">with</span> her children. ✅ (person se)<br>
We are angry <span class="h2">at</span> the mismanagement. ✅ (situation se)<br><br>
<b class="h2">Surprised / Amazed / Astonished — always "at":</b><br>
I am surprised <span class="h2">at</span> the result. ✅<br>
She is amazed <span class="h2">at</span> his audacity. ✅<br>
He was astonished <span class="h2">at</span> her behaviour. ✅`},
          {n:"Group 8", text:`<b class="h2">Abide by vs Comply with:</b><br>
I abide <span class="h2">by</span> the traffic rules. ✅ (rules ka paalan karna)<br>
Please comply <span class="h2">with</span> all the rules. ✅ (rules follow karna)<br>
<b>Dono ka matlab same hai</b> — abide by = comply with ✅<br><br>
<b class="h2">Adapt to:</b><br>
We adapt ourselves <span class="h2">to</span> the environment. ✅<br><br>
<b class="h2">Marry — Special Rule:</b><br>
She married <span class="h2">×</span> him. ✅ (Active Voice — no preposition)<br>
She was married <span class="h2">to</span> him. ✅ (Passive Voice — "to" aata hai)<br>
Suggest <span class="h2">to</span> someone ✅ &nbsp;|&nbsp; Approve <span class="h2">of</span> something ✅`},
        ]
      },
      // ← NAYA GRAMMAR CHAPTER ADD KARO YAHAN
    ]
  },

];
