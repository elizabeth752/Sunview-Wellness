// Blog: articles and podcasts at /blog/<slug>/ (final sitemap). Slugs match the live WordPress URLs; /media/<slug>/ and the
// root-level legacy slug 301 here (vercel.json).
// type: 'article' (full body on-site) · 'video' (YouTube embed + summary) · 'external' (LinkedIn piece)
// Video summaries are paraphrased from each episode's own YouTube description (our copy: no "client", no em dashes).
// Article bodies are Frank's signed articles, verbatim (blog rewrites are not for launch, Decisions 2026-09-24).

const FRANK = {
  name: 'Frank Galimidi',
  creds: 'CASAC, CAP, CRADC, ICADC, NCAC II, SAP',
  role: 'CEO, Sunview Wellness · Creator of In Vivo Treatment™ and Clinical Architecture™',
  href: '/our-team/frank-galimidi/', // author page: byline link + BlogPosting author.url (E-E-A-T)
};

export const posts = [
  {
    slug: 'what-should-a-treatment-center-feel-like',
    type: 'article',
    title: 'What Should a Treatment Center Feel Like?',
    dek: 'Clinical excellence matters, and so does recovery culture. What to pay attention to when you visit or call a program.',
    date: '2026-09-22',
    image: '/images/media/treatment-center-feel.webp',
    author: FRANK,
    body: `
<p>When people search for addiction treatment, they understandably look at the services first. What levels of care are offered? Does the program accept my insurance? Are there licensed clinicians? What does the schedule look like? Can I continue working or going to school?</p>
<p>Those are important questions. But there is another question that people considering treatment, and their families, should ask:</p>
<blockquote>What does it feel like to be there?</blockquote>
<p>A treatment center is obviously a healthcare environment. Clinical quality, safety, ethical practice, appropriate medical care, and qualified professionals matter enormously. Certain levels of care, particularly detoxification and other medically intensive services, appropriately require a more medical environment.</p>
<p>But treatment does not have to feel cold, sterile, or institutional to be clinically excellent. In fact, for many people recovering from a substance use disorder, the environment surrounding the clinical work can become an important part of the recovery process itself.</p>

<h2>You Should Feel Like a Person, Not a Client Number</h2>
<p>People often enter treatment during one of the most vulnerable periods of their lives. There may be shame, fear, damaged relationships, uncertainty about the future, and sometimes a genuine question about whether life can ever feel normal again. Walking into an unfamiliar treatment center can be intimidating.</p>
<p>A healthy treatment environment should begin changing that experience.</p>
<p>People should know your name. Someone should notice when you aren’t there. Your therapist should understand more about you than what appears in your chart. Staff should know when you are having a difficult week.</p>
<p>There should be room for serious clinical work, but there should also be room to laugh. There should be accountability without humiliation. Structure without feeling controlled. Professional boundaries without emotional distance.</p>
<p>Most importantly, you should gradually feel that you belong there.</p>

<h2>Clinical Excellence and Recovery Culture</h2>
<p>At Sunview Wellness, two ideas from our CEO Frank Galimidi’s Clinical Architecture™ framework are especially important to how we think about the treatment environment: <strong>Clinical Excellence</strong> and <strong>Recovery Culture</strong>.</p>
<p>Clinical Excellence means treatment has substance behind it. Therapy should have purpose. Groups should be meaningful. Clinicians should understand addiction and behavioral health. Treatment plans should reflect the individual rather than simply moving everyone through the same experience.</p>
<p>Recovery Culture addresses something different. It asks whether the environment itself supports recovery.</p>
<p>Do people connect with one another? Is honesty encouraged? Are clients challenged when necessary? Does accountability exist alongside compassion? Can people begin developing healthy relationships? Does recovery feel like something happening throughout the program rather than only during a scheduled therapy hour?</p>
<p>These two things belong together. Clinical excellence gives treatment its substance. Recovery culture gives that treatment somewhere to live.</p>

<h2>Recovery Requires Connection</h2>
<p>Addiction can be incredibly isolating. Over time, relationships may become damaged. Trust can disappear. Social circles can shrink or become centered around substance use. Family members may become exhausted or unsure how to help.</p>
<p>Treatment cannot repair all of that overnight. But it can provide a place where healthier patterns begin.</p>
<p>Group therapy is important partly because recovery doesn’t happen in isolation. Sitting with other people, telling the truth, hearing experiences that resemble your own, being challenged, supporting someone else, and discovering that people notice when you are struggling can all become part of the work.</p>
<p>That doesn’t replace good clinical treatment. It helps good clinical treatment take hold.</p>
<p>For families, this matters too. When you are choosing a program for someone you love, you are not simply purchasing a collection of therapy hours. You are placing someone you care about into an environment that may influence how they begin thinking about themselves, their relationships, and their future. It is reasonable to ask what that environment is like.</p>

<h2>Treatment Should Prepare You for Life, Not Separate You From It</h2>
<p>This becomes especially important in community-based care.</p>
<p>Our clients eventually leave a group or therapy session and return to real life. They go home. They interact with family. They go to work or school. They encounter stress, conflict, responsibilities, cravings, boredom, relationships, and all the other realities that don’t disappear simply because someone entered treatment.</p>
<p>That means treatment should become a place where people can bring those real experiences back, talk honestly about what happened, learn from them, make adjustments, and try again.</p>
<p>Over time, the goal isn’t for someone to become exceptionally good at being in treatment. The goal is to become increasingly capable of living a healthy life outside of it.</p>

<h2>Pay Attention to How a Place Feels</h2>
<p>If you are considering treatment for yourself or someone you love, ask about credentials, services, insurance, schedules, and clinical approaches. But when you speak with a program, or visit one, pay attention to something less tangible too.</p>
<ul>
  <li>How do people speak to you?</li>
  <li>Do they seem interested in understanding your situation, or simply completing an admission?</li>
  <li>Do you feel welcomed?</li>
  <li>Does the environment feel connected?</li>
  <li>Does the program seem like a community of people doing difficult work together, or simply a place people pass through?</li>
</ul>
<p>Those things are difficult to capture on a checklist, but they matter.</p>
<p>At Sunview Wellness, we believe treatment should be clinically serious without losing its humanity. People should be challenged, supported, known, and connected while developing the skills necessary to carry recovery into everyday life.</p>
<p>Because great treatment isn’t only about what happens inside a treatment center. It’s also about what someone begins to believe is possible when they walk back out the door.</p>
`,
  },
  {
    slug: 'recovery-centered-podcast-with-tim-roberto-why-addiction-treatment-cant-end-at-28-days',
    type: 'video',
    title: 'Recovery Centered Podcast with Tim Roberto: Why Addiction Treatment Can’t End at 28 Days',
    seoTitle: 'Why Addiction Treatment Can’t End at 28 Days | Sunview', // <title> only (≤60, answer 9.1)
    dek: 'Why 28 days is rarely enough, and what a stronger continuum of care looks like.',
    date: '2026-09-16',
    youtube: 'haoZ3Qb6kWA',
    show: 'Recovery Centered Podcast',
    author: FRANK,
    summary: [
      'In this conversation with Tim Roberto, Frank explores why 28 days is rarely enough to create lasting recovery.',
      'Detox and residential treatment provide safety, stabilization, structure and a critical interruption in the cycle of substance use. But recovery isn’t finished when someone is medically stable or reaches a discharge date. The deeper work often begins when a person has to apply what they’ve learned to relationships, work, responsibility, stress and everyday life.',
      'They discuss extended care, step-down services, recovery community, accountability, identity development and treatment environments that help people build lives they no longer feel compelled to escape from. It isn’t an argument against acute care. It’s an argument for a stronger continuum of care.',
    ],
  },
  {
    slug: 'in-vivo-treatment-at-sunview-wellness-recovery-has-to-work-in-the-real-world',
    type: 'article',
    title: 'In Vivo Treatment™ at Sunview Wellness: Recovery Has to Work in the Real World',
    seoTitle: 'In Vivo Treatment™: Recovery Has to Work in the Real World', // <title> only (≤60, answer 9.1)
    dek: 'Recovery skills shouldn’t just exist on paper. At some point, you have to practice them where your life actually happens.',
    date: '2026-09-10',
    image: '/images/media/in-vivo-treatment.webp',
    author: FRANK,
    body: `
<p>For decades, addiction treatment has relied heavily on highly structured environments to help people begin the process of recovery.</p>
<p>At Sunview Wellness, we know there is tremendous value in that structure. Detox and residential care provide safety, stabilization, a physical break from substances, and the space to start addressing the root causes of addiction.</p>
<p>Eventually, though, everyone in recovery faces the ultimate test: <strong>Can I stay sober while actually living my life?</strong></p>
<p>That question has shaped my career and led directly to what we champion here at Sunview Wellness: In Vivo Treatment™.</p>
<p><em>In vivo</em> essentially means “within the living environment.” The core idea is simple: recovery skills shouldn’t just exist on paper. At some point, you have to practice them right where your life actually happens.</p>
<figure><img src="/images/media/in-vivo-infographic.webp" width="1200" height="670" loading="lazy" alt="In Vivo Treatment™ infographic: clinical stabilization flows through PHP and IOP into real-world recovery and a learn–apply–process–adjust growth cycle." /></figure>

<h2>The Gap Between Learning Recovery and Living Recovery</h2>
<p>Treatment is great at teaching. Clients at Sunview Wellness learn about triggers, relapse prevention, emotional regulation, communication, boundaries, cognitive distortions, coping skills, and support networks.</p>
<p>But knowing something and actually doing it are two entirely different things.</p>
<p>A client sitting in group therapy can describe word for word how they will handle the next argument with their spouse, right up until they go home and that argument actually happens.</p>
<p>Someone can build a meticulous relapse prevention plan, but when Friday night rolls around, they are home alone, anxiety spikes, an old friend calls, and suddenly that plan gets real.</p>
<p>Someone can understand emotional regulation in theory, until their boss chews them out at work.</p>
<p>That is where recovery gets tested. And honestly, it is where the most meaningful clinical work happens for our clients at Sunview Wellness.</p>

<h2>From “What Would You Do” to “What Did You Do”</h2>
<p>In a controlled environment, a lot of clinical conversations are hypothetical:</p>
<ul>
  <li>What would you do if a craving hit?</li>
  <li>How would you respond if someone crossed a boundary?</li>
  <li>What coping skill would you pull out if you felt overwhelmed?</li>
</ul>
<p>Those are valuable discussions. But In Vivo Treatment™ adds a crucial second dimension:</p>
<ul>
  <li>What actually happened when the craving hit yesterday?</li>
  <li>How did it go when you tried to set that boundary with your family?</li>
  <li>How did you handle that rough day at work?</li>
  <li>What did you do when you felt lonely, angry, bored, or overwhelmed?</li>
</ul>
<p>Now, our clinicians and clients are not just talking in hypotheticals; they have real-world data to work with. The client lives life, tries applying their skills, brings the experience back to our program, and processes what went down.</p>
<blockquote>Learn → Apply → Experience → Process → Adjust → Apply Again</blockquote>
<p>That feedback loop is the heart of In Vivo Treatment™.</p>

<h2>The Real World Becomes Part of the Clinical Environment</h2>
<p>At Sunview Wellness, our <a href="/programs/">outpatient levels of care</a> give clients meaningful structure while letting them handle the everyday pressures of life. That means going back to work, managing bills, fixing relationships, building a sober network, and figuring out how to fill their time without substances.</p>
<p>It also means running into roadblocks. But hitting a roadblock is not a treatment failure; it is often what makes treatment actually click.</p>
<p>A client might realize that setting a boundary is a lot harder when they are sitting across from a real family member. They might find that going back to work triggers unexpected anxiety, or that boredom is a much bigger trigger than they thought. Conversely, they might successfully navigate a situation that used to automatically lead to using.</p>
<p>Both the struggles and the wins give our treatment team invaluable insights. Instead of guessing how recovery will hold up out in the wild, we help clients examine how it is actually holding up.</p>

<h2>Why Continuing Care Matters</h2>
<p>One of the most vulnerable stretches in recovery is stepping down from high structure back into everyday life. The pre-treatment stressors are still right there: families need attention, bills are due, jobs need to be maintained, and relationships need mending. And they are expected to navigate all of that without the coping mechanism they relied on for years.</p>
<p>That is why a true continuum of care is so important at Sunview Wellness. High-level care is essential for stabilization, but stabilization is not the same thing as long-term recovery. Our <a href="/programs/">Partial Hospitalization (PHP), Intensive Outpatient (IOP)</a>, and standard outpatient programs build a bridge, letting people practice their recovery step by step while clinical backup is still within reach.</p>
<p>The goal is not just to keep people in treatment longer; it is to weave treatment seamlessly into life.</p>

<h2>Treatment Should Prepare People to Need Less Treatment</h2>
<p>This is the core of our philosophy at Sunview. The goal of addiction treatment should never be to turn people into professional patients. Our goal is to help people build lives they can sustain without us.</p>
<p>That takes more than just staying abstinent. It takes confidence, good judgment, accountability, coping skills, real relationships, and the ability to sit with discomfort without falling back on destructive habits. You cannot build those things purely through conversation; you have to live them.</p>
<p>There is a world of difference between understanding a concept and living it:</p>
<ul>
  <li>Knowing how to set a boundary versus actually setting one.</li>
  <li>Identifying a trigger versus navigating one in real time.</li>
  <li>Describing a coping skill versus actually reaching for it when life hurts.</li>
</ul>

<h2>Building Recovery That Can Survive Life</h2>
<p>Successful treatment gradually shifts the responsibility from the treatment center over to the individual. That does not mean pulling the plug on support too early; everyone is different and appropriate care is vital. It just means recognizing that independence itself is a skill you have to practice.</p>
<p>At Sunview Wellness, In Vivo Treatment™ reflects our belief that the real world does not have to wait outside the clinic doors. When it is clinically appropriate, the real world is part of the clinic.</p>
<p>Clients face life, bring those moments back into treatment, look at what worked and what did not, and head back out with sharper awareness and another chance to practice.</p>
<p>Because at the end of the day, recovery is not proven by how well someone talks about it in a comfortable room. It is proven by whether they can use it when life happens. And great treatment should prepare them for exactly that.</p>
`,
  },
  {
    slug: 'what-actually-happens-after-rehab',
    type: 'video',
    title: 'What Actually Happens After Rehab',
    dek: 'The Saving Dose, Episode 10: consequence fade, insurance-driven discharge, and why connection is the opposite of addiction.',
    date: '2026-09-08',
    youtube: '6hMPNGCWx9E',
    show: 'The Saving Dose Podcast · Episode 10',
    author: FRANK,
    summary: [
      'Dr. John Hsu and William Pedranti are joined by Frank Galimidi, a clinical leader with 23 years in addiction treatment who entered the field himself, in recovery, at 22.',
      'Frank argues that the treatment industry has made enormous scientific progress with very little movement in relapse rates, and he is direct about why: short-term treatment, insurance-driven discharge, and a cultural belief that stabilization equals recovery.',
      'The episode covers what “consequence fade” is and why it hits hardest just as coverage often ends, and the line that stays with you: connection is the opposite of addiction.',
    ],
  },
  {
    slug: 'insurance-companies-cut-patients-off-the-moment-they-start-doing-well',
    type: 'external',
    title: 'Insurance companies cut patients off the moment they start doing well',
    seoTitle: 'Insurance Cuts Patients Off the Moment They Start Doing Well', // <title> only (≤60, answer 9.1)
    dek: 'A clip from Episode 10 of The Saving Dose on why coverage so often ends right when recovery starts to take hold.',
    date: '2026-09-08',
    image: '/images/media/insurance-clip.webp',
    externalUrl:
      'https://www.linkedin.com/posts/john-hsu-md-300a8b2a_insurance-companies-cut-patients-off-the-ugcPost-7503470595251109889-kgrR/',
    externalLabel: 'Watch the clip on LinkedIn',
    relatedVideo: 'what-actually-happens-after-rehab',
    author: FRANK,
    summary: [
      'In this clip from The Saving Dose, Frank describes a pattern he has watched for two decades: people begin to stabilize, feel better and engage in treatment, and that improvement becomes the reason coverage ends.',
      'The early weeks after stabilization are when the real work of recovery begins: returning to relationships, work and responsibility with support still in place. The full conversation is in Episode 10.',
    ],
  },
  {
    slug: 'drugs-and-alcohol-its-worse-than-you-think',
    type: 'video',
    title: 'Drugs and Alcohol: It’s Worse Than You Think',
    dek: 'How outpatient treatment differs from inpatient rehab, and why learning recovery at home matters.',
    date: '2026-06-02',
    youtube: '9yUaIjr6O1I',
    show: 'KIND Counseling',
    author: FRANK,
    summary: [
      'Frank Galimidi talks about his 23-year career in substance use disorder and mental health treatment.',
      'He explains how outpatient programs differ from inpatient rehab: people go home every day and learn to manage their recovery in real-world settings. He also walks through the levels of care Sunview offers for substance use, mental health and co-occurring conditions, with both daytime and evening programming.',
    ],
  },
  {
    slug: 'getting-sober-vs-staying-sober',
    type: 'video',
    title: 'Getting Sober vs. Staying Sober',
    dek: 'Getting someone into treatment is the first step. What happens after they leave is where recovery is decided.',
    date: '2026-06-02',
    youtube: 'jrmMDuDjkyk',
    show: 'The elev8.io Podcast · Episode 13',
    author: FRANK,
    summary: [
      'Gary Garth sits down with Frank Galimidi to talk about one of the biggest gaps in behavioral health: the difference between getting sober and actually staying sober.',
      'They cover why extended care (PHP, IOP and outpatient) is critical for long-term success, how reimbursement structures influence care decisions, and why outcomes, not just admissions, will define the future of the field.',
    ],
  },
  {
    slug: 'recovery-doesnt-happen-in-a-bubble',
    type: 'external',
    title: 'Recovery Doesn’t Happen in a Bubble',
    dek: 'Why extended care is where recovery actually happens.',
    metaDescription: 'Frank Galimidi on why PHP, IOP and outpatient care are where recovery is proven, because sobriety is practiced in real life, not in treatment. Read more.', // meta only (dek too short, answer 9.1)
    date: '2026-06-02',
    image: '/images/media/recovery-bubble.webp',
    externalUrl:
      'https://www.linkedin.com/pulse/recovery-doesnt-happen-bubble-why-extended-care-where-frank-0yste',
    externalLabel: 'Read the full article on LinkedIn',
    author: FRANK,
    summary: [
      'After twenty-two years in addiction treatment, from Brooklyn to the Florida model, Frank has watched residential programs save lives, and watched the same people return again and again. Not because they didn’t care, but because they were never taught how to live sober in the world they actually had to return to.',
      '“Sobriety is not proven in treatment. It is proven in life.” PHP, IOP and outpatient care were never meant to be afterthoughts. They are the bridge between insight and application, where people manage cravings after a long workday and set boundaries with real family members.',
      'Frank also describes how Sunview works in practice: the program operates only at the PHP, IOP and OP levels, and people live in their own homes and communities. “Getting sober is an event. Staying sober is a practice.”',
    ],
  },
  {
    slug: 'beyond-good-enough-redefining-community-based-care',
    type: 'external',
    title: 'Beyond Good Enough: Redefining Community-Based Care',
    dek: 'Why “good enough” care is no longer acceptable.',
    metaDescription: 'Frank Galimidi on why community-based outpatient care must be intensive, skilled and transformative, not merely adequate. Read the full article.', // meta only (dek too short, answer 9.1)
    date: '2026-06-02',
    image: '/images/media/beyond-good-enough.webp',
    externalUrl:
      'https://www.linkedin.com/pulse/beyond-good-enough-redefining-community-based-care-frank-8vrce',
    externalLabel: 'Read the full article on LinkedIn',
    author: FRANK,
    summary: [
      'Community-based providers (local outpatient clinics, recovery centers and mental health programs) are too often associated with mediocrity, and the people they serve stereotyped as unmotivated. Frank argues that narrative is inaccurate and harmful.',
      'Community programs already deliver most of the behavioral health treatment in the United States. They serve working professionals, parents, and people who are unemployed or unhoused. That’s why they need to be intensive, skilled and transformative, not merely adequate.',
      'His test for providers: would you trust this program with your own loved one? “The future of community based care is not defined by adequacy but by a collective commitment to excellence.”',
    ],
  },
];

export const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export const formatDate = (iso) =>
  new Date(iso + 'T12:00:00Z').toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });

export const postImage = (p) =>
  p.image || (p.youtube ? `https://i.ytimg.com/vi/${p.youtube}/hqdefault.jpg` : '/images/brand/og-default.jpg');
