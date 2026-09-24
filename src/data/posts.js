// Blog: articles and podcasts at /blog/<slug>/ (final sitemap). Slugs match the live WordPress URLs; /media/<slug>/ and the
// root-level legacy slug 301 here (vercel.json).
// type: 'article' (full body on-site: Sunview articles and Frank's LinkedIn articles, verbatim) · 'video' (podcast:
// YouTube embed + episode notes + Sunview context) · 'clip' (a short clip shared on LinkedIn: summary + links).
// Every post has a `body` (HTML). Text by Frank (articles, LinkedIn articles) and the YouTube "Episode notes" are
// verbatim: author's text is exempt from our copy rules. Our own copy is only the context section labeled
// "Summary by the Sunview Wellness team" (no em dashes, no "client", descriptive anchors). Episode notes are whole,
// unedited sentences/lines from each YouTube description; lines with client-banned claims (length of stay,
// scholarships, crisis lines, personal-recovery disclosures, relapse statistics) are left out:
// docs/content/blog-sources/omissions.md lists every omitted line.
// note: optional one-line note under the byline ({ text, linkText, url }): "Originally published on LinkedIn",
// "Watch on YouTube", "Watch the clip". Not a source.

// author: slug of the person in src/data/team.js (a reference, not free text). Name, credentials, role, photo, bio
// and the /our-team/{slug}/ link are read from team.js everywhere (banner, cards, author filter, BlogPosting).
// category: one per post. Its card/OG graphic color lives in CATEGORY_COLORS below; blog tabs are generated from
// the categories actually in use.
// updated: optional ISO date for BlogPosting dateModified (defaults to `date`).
// sources: optional [{ label, url? }], real references only (rendered as "Sources"; url only when the official
//   public page is certain, rel="nofollow noopener"; otherwise a plain citation).
// Video posts: youtube id, channel, uploadDate (from YouTube) and durationSec feed the card label and VideoObject.
// Feature graphics (card + og:image) are generated per slug by scripts/generate-post-graphics.mjs into
// public/images/blog/{slug}.webp and public/images/blog/og/{slug}.png. Re-run it after adding or retitling a post.

import { personBySlug, personHref } from './team.js';

// One brand color per category (Brand Book tokens). bg = graphic ground, ink = title color on it,
// accent = rays/rule color, dot = the category marker on light cards.
export const CATEGORY_COLORS = {
  'Clinical Approach': { token: 'teal', bg: '#126E6E', ink: '#FFFFFF', accent: '#CF9034', dot: '#126E6E' },
  'Extended Care': { token: 'cream', bg: '#FDF6E3', ink: '#545555', accent: '#CF9034', dot: '#CF9034' },
  Podcasts: { token: 'charcoal', bg: '#545555', ink: '#FFFFFF', accent: '#F5C518', dot: '#545555' },
};
const FALLBACK_COLOR = CATEGORY_COLORS['Clinical Approach'];
export const categoryColor = (c) => CATEGORY_COLORS[c] ?? FALLBACK_COLOR;

const EP10_CLIP_URL =
  'https://www.linkedin.com/posts/john-hsu-md-300a8b2a_insurance-companies-cut-patients-off-the-ugcPost-7503470595251109889-kgrR/';

export const posts = [
  {
    slug: 'what-should-a-treatment-center-feel-like',
    type: 'article',
    title: 'What Should a Treatment Center Feel Like?',
    dek: 'Clinical excellence matters, and so does recovery culture. What to pay attention to when you visit or call a program.',
    date: '2026-09-22',
    author: 'frank-galimidi', // slug in src/data/team.js
    category: 'Clinical Approach',
    // Full text of the official page (sunviewwellness.com/media/…), paragraph by paragraph; it cites nothing (no Sources).
    body: `
<p>When people search for addiction treatment, they understandably look at the services first. What levels of care are offered? Does the program accept my insurance? Are there licensed clinicians? What does the schedule look like? Can I continue working or going to school?</p>
<p>Those are important questions. But there is another question that people considering treatment, and their families, should ask:</p>
<blockquote>What does it feel like to be there?</blockquote>
<p>A treatment center is obviously a healthcare environment. Clinical quality, safety, ethical practice, appropriate medical care, and qualified professionals matter enormously. Certain levels of care, particularly detoxification and other medically intensive services, appropriately require a more medical environment.</p>
<p>But treatment does not have to feel cold, sterile, or institutional to be clinically excellent.</p>
<p>In fact, for many people recovering from a substance use disorder, the environment surrounding the clinical work can become an important part of the recovery process itself.</p>

<h2>You Should Feel Like a Person, Not a Client Number</h2>
<p>People often enter treatment during one of the most vulnerable periods of their lives. There may be shame, fear, damaged relationships, uncertainty about the future, and sometimes a genuine question about whether life can ever feel normal again.</p>
<p>Walking into an unfamiliar treatment center can be intimidating.</p>
<p>A healthy treatment environment should begin changing that experience.</p>
<p>People should know your name. Someone should notice when you aren’t there. Your therapist should understand more about you than what appears in your chart. Staff should know when you are having a difficult week.</p>
<p>There should be room for serious clinical work, but there should also be room to laugh.</p>
<p>There should be accountability without humiliation. Structure without feeling controlled. Professional boundaries without emotional distance.</p>
<p>Most importantly, you should gradually feel that you belong there.</p>

<h2>Clinical Excellence and Recovery Culture</h2>
<p>At Sunview Wellness, two ideas from our CEO Frank Galimidi’s <a href="/about/our-approach/">Clinical Architecture™ framework</a> are especially important to how we think about the treatment environment: <strong>Clinical Excellence</strong> and <strong>Recovery Culture</strong>.</p>
<p>Clinical Excellence means treatment has substance behind it. Therapy should have purpose. Groups should be meaningful. Clinicians should understand addiction and behavioral health. Treatment plans should reflect the individual rather than simply moving everyone through the same experience.</p>
<p>Recovery Culture addresses something different.</p>
<p>It asks whether the environment itself supports recovery.</p>
<p>Do people connect with one another? Is honesty encouraged? Are clients challenged when necessary? Does accountability exist alongside compassion? Can people begin developing healthy relationships? Does recovery feel like something happening throughout the program rather than only during a scheduled therapy hour?</p>
<p>These two things belong together.</p>
<p>Clinical excellence gives treatment its substance. Recovery culture gives that treatment somewhere to live.</p>

<h2>Recovery Requires Connection</h2>
<p>Addiction can be incredibly isolating.</p>
<p>Over time, relationships may become damaged. Trust can disappear. Social circles can shrink or become centered around substance use. Family members may become exhausted or unsure how to help.</p>
<p>Treatment cannot repair all of that overnight.</p>
<p>But it can provide a place where healthier patterns begin.</p>
<p><a href="/therapies/group-therapy/">Group therapy</a> is important partly because recovery doesn’t happen in isolation. Sitting with other people, telling the truth, hearing experiences that resemble your own, being challenged, supporting someone else, and discovering that people notice when you are struggling can all become part of the work.</p>
<p>That doesn’t replace good clinical treatment.</p>
<p>It helps good clinical treatment take hold.</p>
<p>For families, this matters too. When you are choosing a program for someone you love, you are not simply purchasing a collection of therapy hours. You are placing someone you care about into an environment that may influence how they begin thinking about themselves, their relationships, and their future.</p>
<p>It is reasonable to ask what that environment is like.</p>

<h2>Treatment Should Prepare You for Life, Not Separate You From It</h2>
<p>This becomes especially important in community-based care.</p>
<p>Our clients eventually leave a group or therapy session and return to real life. They go home. They interact with family. They go to work or school. They encounter stress, conflict, responsibilities, cravings, boredom, relationships, and all the other realities that don’t disappear simply because someone entered treatment.</p>
<p>That means treatment should become a place where people can bring those real experiences back, talk honestly about what happened, learn from them, make adjustments, and try again.</p>
<p>Over time, the goal isn’t for someone to become exceptionally good at being in treatment.</p>
<p>The goal is to become increasingly capable of living a healthy life outside of it.</p>

<h2>Pay Attention to How a Place Feels</h2>
<p>If you are considering treatment for yourself or someone you love, ask about credentials, services, insurance, schedules, and clinical approaches.</p>
<p>But when you speak with a program, or visit one, pay attention to something less tangible too.</p>
<ul>
  <li>How do people speak to you?</li>
  <li>Do they seem interested in understanding your situation, or simply completing an admission?</li>
  <li>Do you feel welcomed?</li>
  <li>Does the environment feel connected?</li>
  <li>Does the program seem like a community of people doing difficult work together, or simply a place people pass through?</li>
</ul>
<p>Those things are difficult to capture on a checklist, but they matter.</p>
<p>At Sunview Wellness, we believe treatment should be clinically serious without losing its humanity. People should be challenged, supported, known, and connected while developing the skills necessary to carry recovery into everyday life.</p>
<p>Because great treatment isn’t only about what happens inside a treatment center.</p>
<p>It’s also about what someone begins to believe is possible when they walk back out the door.</p>
`,
  },
  {
    slug: 'recovery-centered-podcast-with-tim-roberto-why-addiction-treatment-cant-end-at-28-days',
    type: 'video',
    title: 'Recovery Centered Podcast with Tim Roberto: Why Addiction Treatment Can’t End at 28 Days',
    seoTitle: 'Why Addiction Treatment Can’t End at 28 Days | Sunview', // <title> only (≤60, answer 9.1)
    dek: 'Why 28 days is rarely enough, and what a stronger continuum of care looks like.',
    metaDescription: 'Frank Galimidi joins Tim Roberto on the Recovery Centered Podcast on why 28 days is rarely enough and why recovery needs a stronger continuum of care.',
    date: '2026-09-16',
    youtube: 'haoZ3Qb6kWA',
    channel: 'Frank Galimidi',
    uploadDate: '2026-07-29T10:45:31-07:00',
    durationSec: 3198,
    show: 'Recovery Centered Podcast',
    note: { text: 'Recovery Centered Podcast with Tim Roberto', linkText: 'Watch on YouTube', url: 'https://www.youtube.com/watch?v=haoZ3Qb6kWA' },
    author: 'frank-galimidi', // slug in src/data/team.js
    category: 'Podcasts',
    body: `
<h2>Episode Notes</h2>
<p class="sv-src-label">From the episode description on YouTube (Frank Galimidi), excerpt</p>
<div class="sv-notes">
<p>In this conversation with Tim Roberto, we explore why 28 days is rarely enough to create lasting recovery.</p>
<p>Detox and residential treatment can provide safety, stabilization, structure, and a critical interruption in the cycle of substance use. But recovery is not completed when a person becomes medically stable or reaches a discharge date. The deeper work often begins when someone must apply what they have learned to relationships, employment, responsibility, stress, and everyday life.</p>
<p>We discuss the importance of extended care, step-down services, recovery community, accountability, identity development, and treatment environments that help people build lives they no longer feel compelled to escape from.</p>
<p>This is not an argument against acute care. It is an argument for a stronger continuum of care.</p>
<p>Getting sober may happen in treatment.</p>
<p>Learning how to live sober takes time.</p>
<p>Frank Galimidi is the founder of Clinical Architecture™ and In Vivo Treatment™.</p>
<p>Frank Galimidi is currently the Chief Executive Officer at Sunview Wellness.</p>
</div>

<h2>Why the Continuum of Care Matters at Sunview</h2>
<p class="sv-src-label">Summary by the Sunview Wellness team</p>
<p>The idea at the center of this conversation, that recovery keeps going after detox or residential care ends, is the reason Sunview Wellness works only at outpatient levels of care. After stabilization, people can step into partial hospitalization (PHP), then intensive outpatient (IOP), then standard outpatient care (OP), with less structure at each step as more of daily life returns. Work, family, stress and relationships stop being topics discussed in a group and become part of the treatment itself. Accountability, a recovery community and an identity beyond addiction are built during that time, not after it. For some people, Sunview is the next step after a residential program; for others, it is where treatment begins. You can see how the three levels fit together in our <a href="/programs/">outpatient programs overview</a>, and how In Vivo Treatment™ turns real-life experience into clinical work in <a href="/about/our-approach/">Sunview’s treatment approach</a>.</p>
`,
  },
  {
    slug: 'in-vivo-treatment-at-sunview-wellness-recovery-has-to-work-in-the-real-world',
    type: 'article',
    title: 'In Vivo Treatment™ at Sunview Wellness: Recovery Has to Work in the Real World',
    seoTitle: 'In Vivo Treatment™: Recovery Has to Work in the Real World', // <title> only (≤60, answer 9.1)
    dek: 'Recovery skills shouldn’t just exist on paper. At some point, you have to practice them where your life actually happens.',
    date: '2026-09-10',
    author: 'frank-galimidi', // slug in src/data/team.js
    category: 'Clinical Approach',
    // Full text of the official page, its paragraphs and H2s, the infographic where the original has it (after the
    // Learn → Apply loop), and the original's in-text links mapped to the new URLs. It cites nothing (no Sources).
    body: `
<p>For decades, addiction treatment has relied heavily on highly structured environments to help people begin the process of recovery.</p>
<p>At Sunview Wellness, we know there is tremendous value in that structure. Detox and residential care provide safety, stabilization, a physical break from substances, and the space to start addressing <a href="/what-we-treat/substance-use/">the root causes of addiction</a>.</p>
<p>Eventually, though, everyone in recovery faces the ultimate test: <strong>Can I <a href="/blog/getting-sober-vs-staying-sober/">stay sober while actually living my life</a>?</strong></p>
<p>That question has shaped my career and led directly to what we champion here at Sunview Wellness: <a href="/about/our-approach/">In Vivo Treatment™</a>.</p>
<p><em>In vivo</em> essentially means “within the living environment.” The core idea is simple: recovery skills shouldn’t just exist on paper. At some point, you have to practice them right where your life actually happens.</p>

<h2>The Gap Between Learning Recovery and Living Recovery</h2>
<p>Treatment is great at teaching. Clients at Sunview Wellness learn about triggers, relapse prevention, emotional regulation, communication, boundaries, cognitive distortions, coping skills, and <a href="/blog/recovery-doesnt-happen-in-a-bubble/">support networks</a>.</p>
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
<figure><img src="/images/media/in-vivo-infographic.webp" width="1200" height="670" loading="lazy" alt="In Vivo Treatment™ infographic: clinical stabilization flows through PHP and IOP into real-world recovery and a learn–apply–process–adjust growth cycle." /></figure>
<p>That feedback loop is the heart of In Vivo Treatment™.</p>

<h2>The Real World Becomes Part of the Clinical Environment</h2>
<p>At Sunview Wellness, our <a href="/programs/">outpatient levels of care</a> give clients meaningful structure while letting them handle the everyday pressures of life. That means going back to work, managing bills, fixing relationships, building a <a href="/blog/beyond-good-enough-redefining-community-based-care/">sober network</a>, and figuring out how to fill their time without substances.</p>
<p>It also means running into roadblocks. But hitting a roadblock is not a treatment failure; it is often what makes treatment actually click.</p>
<p>A client might realize that setting a boundary is a lot harder when they are sitting across from a real family member. They might find that going back to work triggers unexpected anxiety, or that boredom is a much bigger trigger than they thought. Conversely, they might successfully navigate a situation that used to automatically lead to using.</p>
<p>Both the struggles and the wins give our treatment team invaluable insights. Instead of guessing how recovery will hold up out in the wild, we help clients examine how it is actually holding up.</p>

<h2>Why Continuing Care Matters</h2>
<p>One of the most vulnerable stretches in recovery is stepping down from high structure back into everyday life. The pre-treatment stressors are still right there: families need attention, bills are due, jobs need to be maintained, and relationships need mending.</p>
<p>And they are expected to navigate all of that without the coping mechanism they relied on for years.</p>
<p>That is why a true continuum of care is so important at Sunview Wellness. High-level care is essential for stabilization, but stabilization is not the same thing as long-term recovery. Our <a href="/programs/php/">Partial Hospitalization (PHP)</a>, <a href="/programs/iop/">Intensive Outpatient (IOP)</a>, and standard outpatient programs build a bridge, letting people practice their recovery step by step while clinical backup is still within reach.</p>
<p>The goal is not just to keep people in treatment longer; it is to weave treatment seamlessly into life.</p>

<h2>Treatment Should Prepare People to Need Less Treatment</h2>
<p>This is the core of our philosophy at Sunview. The goal of addiction treatment should never be to turn people into professional patients.</p>
<p>Our goal is to help people build lives they can sustain without us.</p>
<p>That takes more than just staying abstinent. It takes confidence, good judgment, accountability, coping skills, real relationships, and the ability to sit with discomfort without falling back on destructive habits. You cannot build those things purely through conversation; you have to live them.</p>
<p>There is a world of difference between understanding a concept and living it:</p>
<ul>
  <li>Knowing how to set a boundary versus actually setting one.</li>
  <li>Identifying a trigger versus navigating one in real time.</li>
  <li>Describing a coping skill versus actually reaching for it when life hurts.</li>
</ul>

<h2>Building Recovery That Can Survive Life</h2>
<p>Successful treatment gradually shifts the responsibility from the treatment center over to the individual. That does not mean pulling the plug on support too early; everyone is different and appropriate care is vital.</p>
<p>It just means recognizing that independence itself is a skill you have to practice.</p>
<p>At Sunview Wellness, In Vivo Treatment™ reflects our belief that the real world does not have to wait outside the clinic doors. When it is clinically appropriate, the real world is part of the clinic.</p>
<p>Clients face life, bring those moments back into treatment, look at what worked and what did not, and head back out with sharper awareness and another chance to practice.</p>
<p>Because at the end of the day, recovery is not proven by how well someone talks about it in a comfortable room. It is proven by whether they can use it when life happens.</p>
<p>And great treatment should prepare them for exactly that.</p>
`,
  },
  {
    slug: 'what-actually-happens-after-rehab',
    type: 'video',
    title: 'What Actually Happens After Rehab',
    dek: 'The Saving Dose, Episode 10: consequence fade, insurance-driven discharge, and why connection is the opposite of addiction.',
    metaDescription: 'Frank Galimidi joins Dr. John Hsu and William Pedranti on The Saving Dose, Episode 10, on consequence fade, insurance-driven discharge and connection.',
    date: '2026-09-08',
    youtube: '6hMPNGCWx9E',
    channel: 'The Saving Dose Podcast',
    uploadDate: '2026-09-08T05:00:06-07:00',
    durationSec: 2875,
    show: 'The Saving Dose Podcast · Episode 10',
    note: { text: 'The Saving Dose, Episode 10, with Dr. John Hsu and William Pedranti', linkText: 'Watch on YouTube', url: 'https://www.youtube.com/watch?v=6hMPNGCWx9E' },
    author: 'frank-galimidi', // slug in src/data/team.js
    category: 'Podcasts',
    body: `
<h2>Episode Notes</h2>
<p class="sv-src-label">From the episode description on YouTube (The Saving Dose Podcast), excerpt</p>
<div class="sv-notes">
<p>Frank runs one of the most honest extended outpatient programs in the country.</p>
<p>He believes the addiction treatment industry has made enormous scientific progress and almost none of it has moved the relapse needle, and he is direct about why: short-term treatment, insurance-driven discharge, and a cultural belief that stabilization equals recovery are producing a predictable failure rate that the industry keeps misreading as patient noncompliance.</p>
<p>You cannot connect with a pill and you cannot connect with artificial intelligence.</p>
<ul class="sv-chapters">
  <li>00:00 Introduction and Frank's background</li>
  <li>02:08 23 years in addiction treatment: from Phoenix House Brooklyn to CEO</li>
  <li>04:27 Why the relapse rate has not moved despite decades of scientific progress</li>
  <li>06:13 Counselor burnout, workforce collapse, and who is leaving the field</li>
  <li>08:35 Holistic OUD treatment: why medication without therapy is not enough</li>
  <li>12:09 What AMA blocking is and why patients leave treatment before it works</li>
  <li>13:07 Consequence fade: why patients stop doing what is working at 90 days</li>
  <li>19:00 In vivo treatment: doing recovery in real life, not inside a facility</li>
  <li>26:00 Insurance companies cutting patients at exactly the wrong moment</li>
  <li>35:00 Medicaid, work requirements, and the socioeconomic reality of OUD</li>
  <li>38:00 Why Europe is trialing an oral heroin pill and what that means for harm reduction</li>
  <li>38:53 OUD as a chronic condition: why John compares it to cancer surveillance</li>
  <li>41:40 Longer duration, decreasing intensity: what the research actually supports</li>
  <li>42:02 What the perfect OUD treatment center looks like</li>
  <li>43:03 Detox alone without step-down care is setting patients up to fail</li>
  <li>45:28 The future of addiction treatment if the therapist workforce keeps shrinking</li>
  <li>46:05 Connection is the opposite of addiction</li>
  <li>47:49 Your addiction is constantly telling you you're okay</li>
  <li>49:15 Closing and how to find Sunview Wellness</li>
</ul>
<p><strong>About the Guest</strong></p>
<p>Frank Galimidi is the CEO of Sunview Wellness, an extended outpatient addiction treatment program based in West Palm Beach, Florida. He has 23 years of experience in substance use disorder and mental health treatment, beginning at Phoenix House in Brooklyn at age 22. He has held senior executive roles at Sunset House and the Meadows Counseling Center and is a recognized expert in program development, clinical frameworks, and continuum of care.</p>
</div>

<h2>Life After Rehab: Where Outpatient Care Fits</h2>
<p class="sv-src-label">Summary by the Sunview Wellness team</p>
<p>Much of this episode is about the weeks after someone leaves a residential program, when the pressure of home and work returns and the memory of how bad things were starts to fade. Outpatient care is designed for that stretch. At Sunview Wellness, people live at home and keep coming to scheduled treatment, so what happens between sessions can be talked through while support is still in place. Structure steps down gradually, from partial hospitalization to intensive outpatient to standard outpatient care. The episode also returns to a point that shapes our work: therapy and connection matter alongside any medication. Many people who struggle with substance use are also living with anxiety, depression or trauma, and treating both at the same time is part of building a recovery that holds. You can learn how the step-down works on our <a href="/programs/outpatient/">outpatient rehab program page</a> and how co-occurring conditions are treated on our <a href="/what-we-treat/dual-diagnosis/">dual diagnosis treatment page</a>.</p>
`,
  },
  {
    slug: 'insurance-companies-cut-patients-off-the-moment-they-start-doing-well',
    type: 'clip',
    title: 'Insurance companies cut patients off the moment they start doing well',
    seoTitle: 'Insurance Cuts Patients Off the Moment They Start Doing Well', // <title> only (≤60, answer 9.1)
    dek: 'A clip from Episode 10 of The Saving Dose on why coverage so often ends right when recovery starts to take hold.',
    date: '2026-09-08',
    // The clip is a LinkedIn post on a third party's profile (John Hsu MD): linked as "Watch the clip", never called
    // Frank's post. Its caption is not quoted (it makes a scholarship claim the client ruled out, answer 8.6), so it is
    // not embedded either. The summary is Sunview's, based only on the Episode 10 YouTube description and Frank's
    // LinkedIn article (no transcript available).
    note: { text: 'Clip from The Saving Dose, Episode 10, shared on LinkedIn', linkText: 'Watch the clip', url: EP10_CLIP_URL },
    relatedVideo: 'what-actually-happens-after-rehab',
    author: 'frank-galimidi', // slug in src/data/team.js
    category: 'Extended Care',
    body: `
<h2>Why Coverage Often Ends Too Early</h2>
<p class="sv-src-label">Summary by the Sunview Wellness team</p>
<p>In the episode, Frank discusses a pattern he has seen throughout his career in addiction treatment: insurance coverage often ends at exactly the wrong moment. People arrive in crisis, stabilize and begin to feel better, and that improvement can become the reason a payer decides treatment is no longer needed. Frank’s point is that stabilization is not the same thing as recovery. Feeling better early on is a sign that treatment is working, not proof that the work is finished.</p>
<p>He connects this to what the episode calls consequence fade. As the pain that brought someone into treatment starts to fade, it gets easier to stop doing the things that are helping, and that is often the same stretch of time when insurance-driven discharge happens.</p>
<p>In his article <a href="/blog/recovery-doesnt-happen-in-a-bubble/">Recovery Doesn’t Happen in a Bubble</a>, Frank describes the same problem from the payer’s side: insurers reimburse crisis care, detox and containment, but not the slower work of carrying recovery into everyday life. That work happens at home, at work and in relationships, with support still in place.</p>

<h2>Watch the Full Episode</h2>
<p>The whole conversation, including Frank’s view of what extended care should look like, is on our page for <a href="/blog/what-actually-happens-after-rehab/">What Actually Happens After Rehab, The Saving Dose Episode 10</a>. If you want to know what your own plan covers for outpatient care, our admissions team can help you <a href="/admissions/insurance/">check your insurance coverage for treatment at Sunview</a>.</p>
`,
  },
  {
    slug: 'drugs-and-alcohol-its-worse-than-you-think',
    type: 'video',
    title: 'Drugs and Alcohol: It’s Worse Than You Think',
    dek: 'How outpatient treatment differs from inpatient rehab, and why learning recovery at home matters.',
    metaDescription: 'Frank Galimidi talks with KIND Counseling about his 23-year career and how outpatient treatment lets people practice recovery at home, day or evening.',
    date: '2026-06-02',
    youtube: '9yUaIjr6O1I',
    channel: 'KIND Counseling, Inc.',
    uploadDate: '2026-03-14T15:42:49-07:00',
    durationSec: 2658,
    show: 'KIND Counseling',
    note: { text: 'Interview with KIND Counseling', linkText: 'Watch on YouTube', url: 'https://www.youtube.com/watch?v=9yUaIjr6O1I' },
    author: 'frank-galimidi', // slug in src/data/team.js
    category: 'Podcasts',
    body: `
<h2>Episode Notes</h2>
<p class="sv-src-label">From the episode description on YouTube (KIND Counseling, Inc.), excerpt</p>
<div class="sv-notes">
<p>Frank Galimidi, CEO of Sunview Wellness in Palm Beach County, discussed his 23-year career in substance use disorder and mental health treatment. He explained that outpatient programs differ from inpatient rehabilitation by allowing clients to return home daily while learning to manage their recovery in real-world settings. Frank noted that Sunview Wellness provides various levels of care for individuals dealing with substance use disorders, mental health issues, and combinations of both, with programs available during both daytime and evening hours.</p>
</div>

<h2>Outpatient Treatment for Substance Use at Sunview</h2>
<p class="sv-src-label">Summary by the Sunview Wellness team</p>
<p>In this interview, Frank describes the core difference between outpatient and inpatient care: people go home at the end of each treatment day and practice recovery in the places where they actually live. For someone with a substance use disorder, partial hospitalization (PHP) is the most structured outpatient option at Sunview Wellness, with treatment every weekday morning, about 20 hours a week, and afternoons and evenings at home. It often works as a step down after detox or residential treatment, or as a starting point when round-the-clock care isn’t needed. Treatment addresses alcohol and drug use together with the mental health conditions that often come with it, and as care steps down, intensive outpatient groups are offered in both the daytime and the evening. You can read about the substances we treat on our <a href="/what-we-treat/substance-use/">substance use treatment page</a> and what a PHP week includes on our <a href="/programs/php/">partial hospitalization program page</a>.</p>
`,
  },
  {
    slug: 'getting-sober-vs-staying-sober',
    type: 'video',
    title: 'Getting Sober vs. Staying Sober',
    dek: 'Getting someone into treatment is the first step. What happens after they leave is where recovery is decided.',
    metaDescription: 'Frank Galimidi joins Gary Garth on The elev8.io Podcast to talk about the gap between getting sober and staying sober, and why extended care matters.',
    date: '2026-06-02',
    youtube: 'jrmMDuDjkyk',
    channel: 'elev8io',
    uploadDate: '2026-04-18T04:32:20-07:00',
    durationSec: 2423,
    show: 'The elev8.io Podcast · Episode 13',
    note: { text: 'The elev8.io Podcast, Episode 13, with Gary Garth', linkText: 'Watch on YouTube', url: 'https://www.youtube.com/watch?v=jrmMDuDjkyk' },
    author: 'frank-galimidi', // slug in src/data/team.js
    category: 'Podcasts',
    body: `
<h2>Episode Notes</h2>
<p class="sv-src-label">From the episode description on YouTube (elev8io), excerpt</p>
<div class="sv-notes">
<p>Getting someone into treatment is only the first step.</p>
<p>What happens after they leave… is where recovery is actually decided.</p>
<p>In this episode of The elev8.io Podcast, Gary Garth sits down with Frank Galimidi, CEO of Sunview Wellness, to break down one of the biggest gaps in behavioral health today: the difference between getting sober and actually staying sober.</p>
<p>Frank shares real-world insights from nearly two decades in addiction treatment, covering:</p>
<ul>
  <li>Why extended care (PHP, IOP, outpatient) is critical for long-term success</li>
  <li>How current business models and reimbursement structures influence care decisions</li>
  <li>The role of readmissions, referrals, and reputation in behavioral health</li>
  <li>Why outcomes—not just admissions—will define the future of the industry</li>
</ul>
<p>If you’re a treatment center owner, operator, or leader in behavioral health, this episode will challenge how you think about recovery, growth, and patient outcomes.</p>
<ul class="sv-chapters">
  <li>00:00 – Why recovery doesn’t end after treatment. The gap between getting sober and staying sober.</li>
  <li>03:00 – How behavioral health has changed in the last 5–7 years. Access to care, payer scrutiny, and the shift toward scalable models.</li>
  <li>05:00 – Why extended care is where real recovery happens. From detox to real-world reintegration.</li>
  <li>08:00 – The business model behind treatment centers. Why detox and residential dominate the market.</li>
  <li>10:00 – The uncomfortable truth about readmissions. How relapse is often built into the system.</li>
  <li>16:00 – Trust, trauma, and why time in treatment matters. Why real clinical work can’t happen in 30 days</li>
  <li>18:00 – Insurance, reimbursement, and industry scrutiny. How past practices shaped today’s payer landscape.</li>
  <li>26:00 – Why PHP/IOP struggle as a business model. Marketing challenges and lower reimbursement realities.</li>
  <li>30:00 – Outcomes vs admissions: what actually drives growth. Reputation, referrals, and long-term success.</li>
  <li>36:00 – Alumni programs: support vs revenue strategy. Where many facilities get it wrong.</li>
  <li>40:00 – Advice for treatment center owners &amp; investors. What it really takes to succeed in behavioral health today</li>
</ul>
</div>

<h2>Staying Sober: The Role of IOP and Group Therapy</h2>
<p class="sv-src-label">Summary by the Sunview Wellness team</p>
<p>The gap this episode describes, between getting sober and staying sober, is where intensive outpatient care does much of its work. In an intensive outpatient program (IOP), people attend treatment three days a week, in the daytime or the evening, while going back to work, school and family life, so new skills are tested in real conditions and brought back to sessions. Group therapy sits at the center of that process. Hearing how others handled a hard conversation, a craving or a stressful week, and being honest about your own, builds the accountability and connection that early recovery depends on. It also helps people build a sober network that lasts after formal treatment ends. At Sunview Wellness, IOP is one step in a continuum that also includes partial hospitalization and standard outpatient care. Learn more on our <a href="/programs/iop/">intensive outpatient program page</a> and our <a href="/therapies/group-therapy/">group therapy page</a>.</p>
`,
  },
  {
    slug: 'recovery-doesnt-happen-in-a-bubble',
    type: 'article',
    title: 'Recovery Doesn’t Happen in a Bubble',
    dek: 'Why extended care is where recovery actually happens.',
    metaDescription: 'Frank Galimidi on why PHP, IOP and outpatient care are where recovery is proven, because sobriety is practiced in real life, not in treatment. Read more.', // meta only (dek too short, answer 9.1)
    date: '2026-06-02',
    // Frank's LinkedIn article, verbatim (his H3s as H2s for the table of contents), then Sunview's context section.
    note: {
      linkText: 'Originally published on LinkedIn',
      url: 'https://www.linkedin.com/pulse/recovery-doesnt-happen-bubble-why-extended-care-where-frank-0yste',
    },
    author: 'frank-galimidi', // slug in src/data/team.js
    category: 'Extended Care',
    body: `
<p>I have worked in addiction treatment for twenty-two years. I have served in nonprofit and for-profit systems. I began my career in Brooklyn. I later worked extensively within the Florida model. I have watched residential programs save lives. I have also watched the same people return again and again, not because they did not care, not because they were unwilling, but because they were never taught how to live sober in the world they actually had to return to.</p>
<p>One truth has become unmistakably clear over time: Sobriety is not proven in treatment. It is proven in life.</p>
<p>A person can remain sober for weeks or months in a highly controlled environment. That matters. Sometimes it is lifesaving. But recovery is not meant to exist in suspension. It is meant to exist in motion.</p>
<p>Recovery is not something you demonstrate inside a program. It is something you live on Monday morning. When the alarm goes off. When stress returns. When relationships resume. When the world no longer pauses for treatment.</p>
<p>Extended care exists for this exact reason.</p>
<p>Partial Hospitalization, Intensive Outpatient, and Outpatient levels of care were never designed to be afterthoughts. They were designed to be the bridge between insight and application. They are where people stop talking about change and begin living it.</p>
<p>In extended care, a client does not just learn how to manage cravings. They manage them after a long workday. They do not just role-play boundaries. They set them with family. They do not just discuss stress. They experience it, regulate it, and return to process it.</p>
<p>This is where recovery becomes real.</p>
<h2>Clients Need to Launch Back Into Their Lives</h2>
<p>Treatment should not halt a person’s life. It should support their return to it.</p>
<p>Clients need to go back to work while still being held by care. They need to return to their families while still having a place to process. They need to navigate bills, relationships, conflict, fatigue, temptation, and responsibility with support still in place.</p>
<p>Extended care allows that to happen safely.</p>
<p>Research consistently shows that relapse risk is highest in the first year following discharge from acute treatment (National Institute on Drug Abuse [NIDA], 2020). The issue is not motivation. It is exposure without scaffolding.</p>
<p>We do not build resilience by shielding people from life. We build it by teaching them how to live.</p>
<h2>Recovery Lives in Community</h2>
<p>Addiction is an illness of disconnection. Recovery is an act of reconnection.</p>
<p>Extended care returns people to their communities while still anchoring them in treatment. Clients begin rebuilding sober social networks, work identity, family roles, daily routines, and personal responsibility.</p>
<p>They are no longer “in treatment” apart from the world. They are in life with treatment walking beside them.</p>
<p>Historically, recovery has always been community-based. Long before modern programs existed, people recovered through fellowship, shared experience, and accountability. Recovery lived in neighborhoods, churches, basements, union halls, and living rooms.</p>
<p>Today, those community-based models are disappearing.</p>
<p>PHP, IOP, and OP programs are closing across the country, not because they are ineffective, but because they are increasingly unreimbursed. Payers undervalue the slow, relational work of recovery. They reimburse crisis. They reimburse detox. They reimburse containment. They do not reimburse integration.</p>
<p>As a result, the system is being reshaped by economics rather than outcomes.</p>
<p>SAMHSA reports a significant decline in the availability of PHP and IOP services over the past decade (SAMHSA, 2021). At the same time, detox and residential beds continue to expand. The industry is becoming increasingly weighted toward acute stabilization and away from sustained, community-based care.</p>
<p>We are building more places for people to stop using. We are building fewer places for people to learn how to live.</p>
<h2>The Cost of a Crisis-Only Model</h2>
<p>Residential treatment and detox save lives. They are essential. But when they become the dominant answer, recovery becomes episodic rather than developmental.</p>
<p>Despite more than $35 billion spent annually on addiction treatment, long-term outcomes remain stubbornly flat (Rudd et al., 2021). Too many individuals move from program to program without ever learning how to stay sober where they actually live.</p>
<p>What we are witnessing is not failure of effort. It is a structural mismatch between how recovery actually works and how it is financed.</p>
<p>We keep pulling people out of their lives. We keep stabilizing them. We keep sending them back without scaffolding.</p>
<p>And we call the relapse a personal failure.</p>
<p>It is not.</p>
<p>It is a systems failure.</p>
<p>Recovery does not happen in exile. It happens in context.</p>
<h2>What This Looks Like in Practice</h2>
<p>At Sunview Wellness, we operate exclusively at the PHP, IOP, and OP levels of care. We do not provide housing. Our clients live in their homes, with their families, in their communities.</p>
<p>They deal with traffic. They go to work. They argue with spouses. They manage bills. They feel overwhelmed.</p>
<p>And then they come to treatment to process what actually happened.</p>
<p>Our job is not to help people stay sober in a controlled environment. Our job is to help them stay sober and thrive in life.</p>
<p>Extended care is not a step-down. It is the proving ground of recovery.</p>
<h2>The Bottom Line</h2>
<p>Getting sober is an event. Staying sober is a practice.</p>
<p>Extended care is where that practice becomes possible.</p>
<p>Recovery does not live in treatment centers. It lives in homes, offices, grocery stores, relationships, and communities. If we want lasting change, we must meet people where their lives are actually happening.</p>
<p>The future of addiction treatment is not longer isolation. It is stronger integration.</p>
<p>And the disappearance of community based care should alarm every one of us who truly cares about outcomes.</p>

<h2>What This Means for Outpatient Treatment</h2>
<p class="sv-src-label">Summary by the Sunview Wellness team</p>
<p>Frank’s article describes the idea Sunview Wellness is built on: recovery has to be practiced where a person actually lives. That is why Sunview works only at outpatient levels of care, and why everyone in treatment keeps living at home. Partial hospitalization (PHP) offers the most structure, with treatment every weekday morning and afternoons free for work, school or family. Intensive outpatient (IOP) meets three days a week, in the daytime or the evening, as more of daily life comes back. Standard outpatient care (OP) supports the longer stretch, when new habits are tested by ordinary weeks. At every level, what happens at home, at work and in relationships is brought back into individual and group sessions and worked through with a therapist. You can see how the three levels fit together on our <a href="/programs/outpatient/">outpatient rehab program page</a>, and how In Vivo Treatment™ and Clinical Architecture™ shape the work in <a href="/about/our-approach/">Sunview’s clinical approach</a>.</p>
`,
    // The article's own References. Linked only where the official page is certain. The third citation is kept as
    // Frank wrote it: its volume/pages (MMWR 67(51–52), 1419–1427) belong to Scholl et al., "Drug and Opioid-Involved
    // Overdose Deaths, United States, 2013–2017", so it is not linked ([Elizabeth] to confirm with Frank).
    sources: [
      {
        label: 'National Institute on Drug Abuse. (2020). Principles of Drug Addiction Treatment: A Research-Based Guide (3rd ed.). National Institutes of Health.',
        url: 'https://nida.nih.gov/sites/default/files/podat-3rdEd-508.pdf',
      },
      {
        label: 'Substance Abuse and Mental Health Services Administration. (2021). Treatment Episode Data Set (TEDS): 2019–2021. U.S. Department of Health and Human Services.',
        url: 'https://www.samhsa.gov/data/data-we-collect/teds-treatment-episode-data-set',
      },
      {
        label: 'Rudd, R. A., Aleshire, N., Zibbell, J. E., & Gladden, R. M. (2021). Increases in drug and opioid-involved overdose deaths, United States, 2010–2017. Morbidity and Mortality Weekly Report, 67(51–52), 1419–1427.',
      },
    ],
  },
  {
    slug: 'beyond-good-enough-redefining-community-based-care',
    type: 'article',
    title: 'Beyond Good Enough: Redefining Community-Based Care',
    dek: 'Why “good enough” care is no longer acceptable.',
    metaDescription: 'Frank Galimidi on why community-based outpatient care must be intensive, skilled and transformative, not merely adequate. Read the full article.', // meta only (dek too short, answer 9.1)
    date: '2026-06-02',
    // Frank's LinkedIn article, verbatim (his H3s as H2s), then Sunview's context section. His References name
    // publishers and titles but no locatable documents, so they are plain citations (no links).
    note: {
      linkText: 'Originally published on LinkedIn',
      url: 'https://www.linkedin.com/pulse/beyond-good-enough-redefining-community-based-care-frank-8vrce',
    },
    author: 'frank-galimidi', // slug in src/data/team.js
    category: 'Clinical Approach',
    body: `
<h2>Challenging the Myth of Mediocrity</h2>
<p>Community based providers are too often associated with mediocrity. Local outpatient clinics, recovery centers, and mental health programs are imagined as understaffed, underfunded, and providing services that are only adequate. Clients are stereotyped as disengaged or unmotivated. This narrative is not only inaccurate but also harmful, as it diminishes the essential role that community based providers play in the behavioral health system and undermines the dignity of the clients they serve. Community based care should not be seen as a last resort but recognized as a frontline setting capable of delivering high quality, transformative services.</p>
<h2>The Urgency of Need</h2>
<p>The need for strong community-based programs is urgent. In 2022, more than one in five adults in the United States, nearly 59 million people, lived with a mental illness (National Institute of Mental Health [NIMH], 2023). In 2024, approximately one in three adults, or 86.6 million individuals, experienced either a mental illness or a substance use disorder within the past year (Substance Abuse and Mental Health Services Administration [SAMHSA], 2025a). Despite the scale of this crisis, treatment gaps remain profound. Only 52.1% of those with any mental illness and 70.8% of those with serious mental illness received treatment (SAMHSA, 2025a). For substance use disorders, fewer than 20% of those in need obtained care (American Addiction Centers, 2024). Among adults with both mental illness and substance use disorders, more than one-third received no treatment at all (Drug Abuse Statistics, 2024).</p>
<h2>The Central Role of Community Based Services</h2>
<p>Community based programs already provide most of the treatment delivered in the United States. In 2021, 97.1% of adults who received mental health services did so in community-based programs, and 99.4% of children were served in these settings (SAMHSA, 2022). This demonstrates that local programs are not peripheral to the system but are its backbone. They serve people across all demographics, including working professionals, families, adolescents, and individuals who are unemployed or unhoused.</p>
<p>The Treatment Episode Data Set illustrates the socioeconomic realities many clients face. In 2021, 45.2% of admissions to substance use treatment programs were unemployed, 29.9% were not in the labor force, and only 24.9% were employed (SAMHSA, 2025b). At discharge, 12.8% of clients reported homelessness and 41.6% remained unemployed (SAMHSA, 2025b). These numbers reflect the complexity of the lives being served by community programs and highlight the importance of providing care that is not minimal but intensive, skilled, and transformative.</p>
<h2>Why Excellence Matters</h2>
<p>The importance of excellence in community based care cannot be overstated. Research shows that early and accessible intervention significantly improves long-term outcomes, while delays often result in worsening conditions and preventable suffering (NIMH, 2023). Programs that emphasize coordinated care, peer support, and strong therapeutic alliances reduce emergency room visits, lower hospitalization rates, and improve both stability and quality of life (Associated Press, 2024). Even in resource limited environments, innovative approaches such as training non specialists to provide evidence based mental health support have demonstrated measurable recovery gains and strong returns on investment (Financial Times, 2024).</p>
<h2>We Can and Must Do Better</h2>
<p>Excellence in community based treatment does not require perfection. It requires intention, empathy, and a consistent commitment to help clients move from survival to thriving. Providers should reflect on whether their programs are places they would trust for their own loved ones. They should strive to create environments where clients are treated with dignity, skill, and intensity of care. Most importantly, they should commit to redefining what community-based treatment can be.</p>
<p>The goal for community based programs should be to challenge the stereotype of mediocrity and establish a new standard for care. When done well, these programs become places where people from all walks of life, including executives, working parents, and those with limited financial means, receive equal levels of dignity, respect, and clinical expertise. The future of community based care is not defined by adequacy but by a collective commitment to excellence that truly changes lives.</p>

<h2>What Community-Based Care Looks Like at Sunview</h2>
<p class="sv-src-label">Summary by the Sunview Wellness team</p>
<p>Frank’s article asks community programs to hold themselves to a higher standard than adequate. At Sunview Wellness, a community-based outpatient program in West Palm Beach, that standard shapes the daily work. People keep living at home and come to treatment in partial hospitalization, intensive outpatient or standard outpatient care, depending on how much structure they need. Each treatment plan is built around the person’s own history, goals and responsibilities, and the work happens in individual, group and family sessions. The question Frank puts to providers, whether they would trust a program with their own loved one, is the same one we invite families to ask when they call or visit. You can compare the levels of care on our <a href="/programs/">addiction and mental health programs page</a> and read how the work is organized in <a href="/about/our-approach/">Sunview’s clinical approach</a>.</p>
`,
    sources: [
      { label: 'American Addiction Centers. (2024). Rehab success rates and statistics.' },
      { label: 'Associated Press. (2024). Community mental health programs reducing hospitalizations.' },
      { label: 'Drug Abuse Statistics. (2024). Mental illness and substance use disorder treatment data.' },
      { label: 'Financial Times. (2024). Volunteer-based models in global mental health care.' },
      { label: 'National Institute of Mental Health. (2023). Mental illness statistics.' },
      { label: 'Substance Abuse and Mental Health Services Administration. (2022). Mental health client-level data annual report, 2021.' },
      { label: 'Substance Abuse and Mental Health Services Administration. (2025a). National survey on drug use and health, 2024 results.' },
      { label: 'Substance Abuse and Mental Health Services Administration. (2025b). Treatment episode data set, 2021 annual report.' },
    ],
  },
];

export const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));

// Blog order (client rule 2026-09-24): articles (on-site, LinkedIn and the clip) newest first, then podcasts newest first.
const isVideo = (p) => p.type === 'video';
export const blogOrder = [...sortedPosts.filter((p) => !isVideo(p)), ...sortedPosts.filter(isVideo)];

// Tabs: categories with at least one post, in blog order of first appearance.
export const categories = [...new Set(blogOrder.map((p) => p.category))];

export const postUrl = (p) => `/blog/${p.slug}/`;
export const postImage = (p) => `/images/blog/${p.slug}.webp`; // card graphic (1200×630)
export const postOgImage = (p) => `/images/blog/og/${p.slug}.png`; // og:image (1200×630)
export const postUpdated = (p) => p.updated ?? p.date;
export const postExcerpt = (p) => p.excerpt ?? p.dek;

// Resolved author (team.js person) for a post
export const postAuthor = (p) => {
  const person = personBySlug(p.author);
  if (!person) throw new Error(`posts.js: unknown author "${p.author}" on ${p.slug}`);
  return {
    ...person,
    href: personHref(person),
    nameWithCreds: person.creds ? `${person.name}, ${person.creds}` : person.name,
    role: person.title,
  };
};
export const postsBy = (slug) => blogOrder.filter((p) => p.author === slug);
// People with at least one post (blog authors row)
export const authors = [...new Set(blogOrder.map((p) => p.author))].map((slug) => postAuthor({ author: slug, slug }));

export const wordCount = (p) => (p.body ?? '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
// Read time for articles (230 wpm, from the full body)
export const readTime = (p) => (p.type === 'article' && p.body ? Math.max(1, Math.round(wordCount(p) / 230)) : null);
// Episode length in whole minutes, and as ISO 8601 (VideoObject.duration)
export const durationMin = (p) => (p.durationSec ? Math.round(p.durationSec / 60) : null);
export const durationIso = (p) => {
  if (!p.durationSec) return null;
  const h = Math.floor(p.durationSec / 3600), m = Math.floor((p.durationSec % 3600) / 60), s = p.durationSec % 60;
  return `PT${h ? `${h}H` : ''}${m ? `${m}M` : ''}${s ? `${s}S` : ''}`;
};

// Card meta line (QA batch 1 item 13, batch 11 item 4, batch 12 item 5): content type + read time or duration, the
// same wherever a PostCard renders. Never "LinkedIn".
//   article: "Article · 4 min read"   podcast: "Podcast · 48 min"   LinkedIn clip (no known length): "Video"
export const cardMeta = (p) => {
  if (p.type === 'video') return { kind: 'video', label: durationMin(p) ? `Podcast · ${durationMin(p)} min` : 'Podcast' };
  if (p.type === 'clip') return { kind: 'video', label: 'Video' };
  const mins = readTime(p);
  return { kind: 'article', label: mins ? `Article · ${mins} min read` : 'Article' };
};

// 3 most recent posts, excluding the current one
export const latestPosts = (p, n = 3) => sortedPosts.filter((x) => x.slug !== p.slug).slice(0, n);
// Same category first (newest first), then the latest of the rest
export const relatedPosts = (p, n = 3) => {
  const others = sortedPosts.filter((x) => x.slug !== p.slug);
  return [...others.filter((x) => x.category === p.category), ...others.filter((x) => x.category !== p.category)].slice(0, n);
};

export const formatDate = (iso) =>
  new Date(iso + 'T12:00:00Z').toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
