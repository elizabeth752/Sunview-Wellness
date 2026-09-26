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
import { SITE } from './site.js';

// One brand color per category (Brand Book tokens). bg = graphic ground, ink = title color on it,
// accent = rays/rule color, dot = the category marker on light cards.
export const CATEGORY_COLORS = {
  'Clinical Approach': { token: 'teal', bg: '#126E6E', ink: '#FFFFFF', accent: '#CF9034', dot: '#126E6E' },
  'Extended Care': { token: 'cream', bg: '#FDF6E3', ink: '#545555', accent: '#CF9034', dot: '#CF9034' },
  Podcasts: { token: 'charcoal', bg: '#545555', ink: '#FFFFFF', accent: '#F5C518', dot: '#545555' },
  // teal-light ground: distinct from the darker "Clinical Approach" teal card at a glance
  'Substance Use': { token: 'teal-light', bg: '#1F9E9E', ink: '#FFFFFF', accent: '#F5C518', dot: '#1F9E9E' },
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
  {
    slug: 'what-is-molly-mdma',
    type: 'article',
    title: 'What Is Molly? What Is Actually in the Capsule and What It Does',
    seoTitle: "What Is Molly? What's in the Capsule, Explained", // <title> only (≤60, answer 9.1)
    dek: 'MDMA sold as molly is rarely just MDMA. What drug checking actually finds in the capsule, what it does to the body, and what to do if you found one.',
    metaDescription: "The drug molly is sold as pure MDMA, but only 48% of tested samples contain MDMA alone. Learn what's actually in the capsule and what to do next.",
    date: '2026-09-25',
    author: 'dana-martin', // slug in src/data/team.js — prescribed as the article's clinical author
    category: 'Substance Use',
    // Dana Martin's clinical article, verbatim structure and claims; docx citation markers ([1]…[6]) converted
    // to the site's (Author, Year) in-text style (matches recovery-doesnt-happen-in-a-bubble), hyperlinks moved
    // to the Sources list only. Interlinks added to existing site pages. Phone pulled from SITE (never hardcoded);
    // the docx's own phone line was malformed ("7259006") and is replaced with SITE.phone/phoneHref throughout.
    body: `
<p>Molly is the powder or crystal form of MDMA (3,4-methylenedioxymethamphetamine), a synthetic drug that acts as both a stimulant and a mild hallucinogen (National Institute on Drug Abuse [NIDA], 2024a). Most people who wonder what molly is have something specific in front of them: a capsule that matches no prescription in the house, or a bag of off-white crystals. Here is what is actually being sold under the name molly, what it does to the body, and what to do next.</p>

<h2>What Does "Molly" Stand For?</h2>
<p>Molly is a street name for MDMA, shorthand for "molecular," a marketing term meant to suggest purity. It is typically sold in clear gel capsules, as loose powder, or as chunky crystals ranging from white to tan or brown (Drug Enforcement Administration [DEA], 2024).</p>
<p>Molly is similar to ecstasy, yet it comes in a different package. Ecstasy refers to pressed tablets stamped with logos and colors, while molly refers to capsules and crystals. Both are human-made, come from the same unregulated supply, and drug checking data shows no dependable purity advantage for either form (Sevigny et al., 2024).</p>
<p>MDMA is a Schedule I controlled substance with no accepted medical use outside approved research settings (Figurasin et al., 2024).</p>

<h2>Is Molly MDMA?</h2>
<p>Of 4,700 samples submitted to a drug checking service between 1999 and 2023, only 48% contained MDMA and nothing else, and almost 200 different adulterants were identified across those years (Sevigny et al., 2024).</p>
<p>The recent trend is better than the historical average. The share of samples containing MDMA alone rose from about 56% in 2017 to roughly 74% in 2023 (Sevigny et al., 2024). The improvement is real, yet it still leaves roughly one sample in four containing something other than MDMA.</p>
<p>Dose is the second unknown. Even when a capsule does contain MDMA, the amount is not standardized, and analyses of products sold as ecstasy or molly have documented wide variation alongside substitute compounds such as MDA (3,4-methylenedioxyamphetamine) and MDEA (3,4-methylenedioxy-N-ethylamphetamine) (Figurasin et al., 2024).</p>
<p>These are close chemical relatives of MDMA: MDA is more stimulating, more hallucinogenic, and longer lasting, while MDEA tends to be duller and more sedating.</p>
<p>Two capsules from the same bag can differ, which is why a person who has used the drug before without incident can have a medical emergency the next time.</p>

<h2>Is Molly Meth?</h2>
<p>Molly is not methamphetamine, but methamphetamine has been repeatedly found in samples of MDMA (NIDA, 2024a).</p>
<p>MDMA is a derivative of amphetamine, so it is structurally related to methamphetamine. The methylenedioxy group attached to the molecule shifts its activity toward serotonin, which is why MDMA produces emotional closeness and sensory intensity rather than the primarily dopaminergic stimulation associated with methamphetamine (Figurasin et al., 2024). They are relatives, but they are not the same drug.</p>
<p>The supply is where the two intersect. Chemical analyses of drugs sold as MDMA have identified methamphetamine, amphetamine, synthetic cathinones, ketamine, and MDA as hidden ingredients (NIDA, 2024a). In a New York City nightlife study, people who said they had used ecstasy tested positive for substances they had not reported, including methamphetamine (Palamar et al., 2023).</p>
<p>A capsule sold as molly is not methamphetamine by definition, but methamphetamine cannot be ruled out purely on price or appearance.</p>

<h2>What Testing Finds in Products Sold as Molly</h2>
<p>Drug checking has identified 199 distinct adulterants in the alleged MDMA supply over 25 years (Sevigny et al., 2024). Here are some of the substances found in molly.</p>
<figure><img src="/images/blog/infographics/molly-whats-in-the-capsule.svg" width="1200" height="760" loading="lazy" alt="Six substances drug checking has found in products sold as molly: synthetic cathinones, MDA and MDEA, methamphetamine and amphetamine, ketamine, caffeine and other cutting agents, and inert fillers, out of 199 adulterants identified across 4,719 samples from 1999 to 2023." /></figure>
<p>The practical point is that the "label" of molly carries no information. The person selling it is usually repeating what they were told, and the capsule itself has no specific dose, no batch, and no single manufacturer.</p>

<h2>What Does Molly Feel Like, and How Long Does It Last?</h2>
<p>Effects generally begin within 20 minutes to an hour of swallowing a dose, with peak blood concentration around two hours (Figurasin et al., 2024). People report feeling energetic, alert, emotionally open, and unusually attuned to touch, sound, and light. Effects peak shortly after onset and last an average of about 3 hours (NIDA, 2024a).</p>
<p>The physical signs are often what a family member notices first:</p>
<ul>
  <li>Jaw clenching and teeth grinding</li>
  <li>Dilated pupils</li>
  <li>Heavy sweating</li>
  <li>Elevated heart rate</li>
  <li>Restless legs</li>
  <li>An inability to sleep (NIDA, 2024a; Figurasin et al., 2024)</li>
</ul>
<figure><img src="/images/blog/infographics/molly-onset-to-clearance-timeline.svg" width="1200" height="480" loading="lazy" alt="Timeline of MDMA in the body: effects begin 20 to 60 minutes after a dose, peak around 2 hours, felt effects fade after about 3 hours on average, the elimination half-life is roughly 8 hours, and near-complete clearance takes about 40 hours. A person may still be affected from the time felt effects fade until full clearance." /></figure>
<p>MDMA has an elimination half-life of roughly eight hours, and near-complete clearance takes approximately 40 hours, so someone may still be affected well after the subjective effects have faded (Figurasin et al., 2024).</p>
<p>The days that follow matter clinically. People who use MDMA regularly report poor sleep, loss of appetite, confusion, low mood, anxiety, irritability, and problems with memory and concentration (NIDA, 2024a).</p>

<h2>The Risks That Send People to the Emergency Room</h2>
<p>Deaths involving MDMA are uncommon relative to how often it is used, but the medical emergencies that do occur escalate quickly.</p>
<ul>
  <li><strong>Overheating.</strong> MDMA interferes with the body's ability to regulate temperature. Combined with exertion in a hot, crowded setting, core temperature can climb past 105°F, leading to muscle breakdown, kidney and liver failure, brain swelling, and death (Figurasin et al., 2024; DEA, 2024).</li>
  <li><strong>Dangerously low sodium.</strong> MDMA increases release of antidiuretic hormone, causing fluid retention. Combined with drinking large amounts of water, sodium can fall far enough to cause seizures, brain swelling, and coma (Figurasin et al., 2024).</li>
  <li><strong>Serotonin syndrome.</strong> Combining MDMA with selective serotonin reuptake inhibitors (SSRIs), other antidepressants, or additional serotonergic drugs raises the risk of a potentially life-threatening reaction (NIDA, 2024a; Figurasin et al., 2024).</li>
  <li><strong>Cardiovascular strain.</strong> Rapid heart rate, high blood pressure, and arrhythmias are common in acute toxicity, and risk rises sharply when an unknown stimulant adulterant is stacked on top (Figurasin et al., 2024).</li>
</ul>
<figure><img src="/images/blog/infographics/molly-medical-emergencies.svg" width="1200" height="560" loading="lazy" alt="Four medical emergencies linked to MDMA: overheating, dangerously low sodium, serotonin syndrome, and cardiovascular strain. Call 911 for confusion, extreme heat, vomiting, seizure, or unresponsiveness; Poison Control is 1-800-222-1222." /></figure>
<p>If someone is confused, extremely hot, vomiting, having a seizure, or unresponsive, call 911. Poison Control can be reached at 1-800-222-1222.</p>

<h2>Is Molly Addictive?</h2>
<p>Research indicates that MDMA is potentially addictive, though it has been studied less thoroughly than other substances. Some people who use it report symptoms consistent with a substance use disorder, including tolerance, withdrawal effects, cravings, and continued use despite negative consequences (NIDA, 2024a).</p>
<p>In outpatient treatment, MDMA alone is rarely the whole picture. The pattern that brings families in usually involves several substances, a widening set of occasions for use, and an underlying mood or anxiety condition that use both masks and worsens. That combination is what <a href="/what-we-treat/dual-diagnosis/">dual diagnosis treatment</a> is built to address, and it is the reason a clinical assessment looks at far more than capsules of molly.</p>

<h2>What to Do If You Found a Capsule or a Baggie</h2>
<p>If you found a capsule among your loved one's things, visual inspection will tell you nothing about dose or contents. Community drug checking programs using laboratory methods are more accurate than any at-home method (NIDA, 2024b).</p>
<p>None of this makes an unregulated product safe, yet it calls for a conversation with your loved one and a clinical team. Lead with what you found and what concerns you. Be curious, don't accuse. Ask how often, with what, and in what settings they might be using molly, because frequency and combinations matter more than the single object in your hand.</p>
<p>Watch for these patterns:</p>
<ul>
  <li>Use during the week</li>
  <li>Use while alone</li>
  <li>Escalating amounts</li>
  <li>Money or possessions disappearing</li>
  <li>Withdrawal from previous friendships and activities</li>
  <li>Missed work or classes</li>
  <li>Low mood that deepens after each episode of use</li>
</ul>
<p>Any of these justify a professional assessment, which reviews substance use history, screens for co-occurring depression, anxiety, and trauma, evaluates medical risk, and produces a recommended level of care.</p>

<h2>How Sunview Wellness Treats Substance Abuse</h2>
<p>At Sunview Wellness, we treat <em>in vivo</em>, which means recovery happens inside a real life. Clients keep their jobs, stay in school, and sleep at home while receiving clinical treatment. There is no sober living funnel and no long-term housing commitment. Door-to-door transportation is provided at no cost so that attending treatment stays realistic.</p>
<p>Care is delivered at three levels:</p>
<ul>
  <li><strong>PHP — <a href="/programs/php/">Partial Hospitalization</a>.</strong> Intensive treatment five days a week. Suited to someone after inpatient discharge or when maximum structure is needed.</li>
  <li><strong>IOP — <a href="/programs/iop/">Intensive Outpatient</a>.</strong> Three days a week, daytime or evenings.</li>
  <li><strong>OP — <a href="/programs/outpatient/">Outpatient Program</a>.</strong> One day a week, mornings, for maintenance and step-down care.</li>
</ul>
<p>We're in network with most major insurance carriers, including Florida Medicaid plans. If you have found something you cannot identify and you do not know what comes next, our <a href="/admissions/insurance/">admissions team can verify your benefits</a>, schedule an assessment, and explain your options.</p>
<p><a href="/admissions/"><strong>Speak With Admissions</strong></a></p>

<h2>Key Takeaways</h2>
<ul>
  <li>Molly is the powder or capsule form of MDMA, and the difference between molly and ecstasy is packaging rather than chemistry.</li>
  <li>Drug checking shows that fewer than half of samples sold as MDMA contained MDMA alone, and the dose is never known from appearance.</li>
  <li>Molly is not methamphetamine, but methamphetamine, synthetic cathinones, MDA, and ketamine all turn up in products sold under this name.</li>
  <li>Overheating, dangerously low sodium, and serotonin syndrome are the medical emergencies that bring MDMA users to the emergency room.</li>
  <li>MDMA is potentially addictive, and its use may be part of a broader pattern that warrants a professional assessment rather than a single conversation.</li>
</ul>

<h2>Outpatient Drug and Alcohol Treatment in West Palm Beach</h2>
<p>Sunview Wellness is a Joint Commission accredited outpatient drug rehab in West Palm Beach serving adults 18 and older. Our programs treat substance use disorders involving MDMA, stimulants, alcohol, opioids, and polysubstance patterns, alongside the depression, anxiety, and trauma that so often sit underneath them.</p>
<p>Our PhD-led clinical team brings more than 50 years of combined experience and works psychodynamically, using <a href="/therapies/inner-child-therapy/">Inner Child Therapy</a> as an integrative modality to address the shame, inadequacy, and fear underneath substance use.</p>
<p><strong>Call <a href="${SITE.phoneHref}">${SITE.phone}</a></strong></p>
`,
    sources: [
      { label: 'Sevigny, E. L., Thyssen, S., Erowid, E., & Lea, R. (2024). Misrepresentation of MDMA in the United States, 1999–2023. Drug and Alcohol Dependence, 264, Article 112467.', url: 'https://pubmed.ncbi.nlm.nih.gov/39437494/' },
      { label: 'National Institute on Drug Abuse. (2024a). MDMA (Ecstasy/Molly). Research Topics. National Institute on Drug Abuse.', url: 'https://nida.nih.gov/research-topics/mdma-ecstasy-molly' },
      { label: 'Figurasin, R., Vearrier, D., et al. (2024). 3,4-Methylenedioxymethamphetamine (MDMA) Toxicity. StatPearls. StatPearls Publishing.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK538482/' },
      { label: 'Palamar, J. J., et al. (2023). Trends in Reported and Biologically Confirmed Drug Use Among People Who Use Ecstasy in the Nightclub/Festival-Attending Population, 2016–2022. Drug and Alcohol Dependence Reports, 9, Article 100198.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10665664/' },
      { label: 'Drug Enforcement Administration. (2024). Ecstasy or MDMA (Also Known as Molly). Drug Fact Sheets. U.S. Department of Justice.', url: 'https://www.dea.gov/factsheets/ecstasy-or-mdma-also-known-molly' },
      { label: 'National Institute on Drug Abuse. (2024b). Drug Checking. Research Topics. National Institute on Drug Abuse.', url: 'https://nida.nih.gov/research-topics/drug-checking' },
    ],
  },
  {
    slug: 'xanax-side-effects',
    type: 'article',
    title: "Xanax Side Effects: What It Does, Who It's Prescribed For, and When It Gets Risky",
    seoTitle: "Xanax Side Effects: What It Does and When It's Risky", // <title> only (≤60, answer 9.1)
    dek: 'Drowsiness and memory lapses are expected at a normal dose. Mixing Xanax with alcohol or opioids is what turns a prescription into an overdose.',
    metaDescription: 'Xanax (alprazolam) causes drowsiness and memory lapses at normal doses. Mixing it with alcohol or opioids can be fatal. Learn what to watch for.',
    date: '2026-09-25',
    author: 'dana-martin', // slug in src/data/team.js — prescribed as the article's clinical author
    category: 'Substance Use',
    // Dana Martin's clinical article. Docx citation markers converted to (Author, Year) in-text style (matches
    // recovery-doesnt-happen-in-a-bubble); hyperlinks moved to the Sources list only. Interlinks added to
    // existing site pages. Phone pulled from SITE, never hardcoded. The docx's own extended-care paragraph named
    // a specific average length of stay ("~130 days, month seven"): omitted here per the site's standing rule
    // (README "Launch blockers" #6) that the 130-day figure isn't published without client sign-off — [flag]
    // confirm with Elizabeth/the client before adding a specific duration back into this paragraph.
    body: `
<p>Xanax is the brand name for alprazolam, a benzodiazepine approved for generalized anxiety disorder and panic disorder (U.S. Food and Drug Administration [FDA], 2021). In the panic disorder trials, 77% of patients reported drowsiness, 40% reported impaired coordination, and 33% reported memory impairment (FDA, 2021).</p>
<p>Those are the common effects at a prescribed dose. The fatal risk lies elsewhere. In a CDC analysis of overdose deaths, 93% of benzodiazepine-involved deaths also involved opioids, and alprazolam was the prescription benzodiazepine identified most often (Liu et al., 2021).</p>
<p>This article covers what alprazolam does, which side effects are normal at prescribed doses, what dependence looks like in daily life, and why combining Xanax with alcohol or opioids is the thing that can turn a prescription into an overdose.</p>

<h2>What Is Xanax?</h2>
<p>Xanax contains alprazolam, a Schedule IV controlled substance. It is manufactured as 0.25 mg, 0.5 mg, 1 mg, and 2 mg tablets, the 2 mg tablet being multi-scored so it can be divided (FDA, 2021).</p>
<p>Alprazolam is the most commonly prescribed psychotropic medication in the United States, and it also comes as an extended-release tablet, an orally disintegrating tablet, and an oral solution (George &amp; Tripp, 2023).</p>

<h2>How Does Xanax Work?</h2>
<p>Xanax works through GABA, the chemical the brain uses to slow nerve activity down. Alprazolam attaches to the GABA-A receptor and makes GABA more effective there, so the "slow down" signal becomes stronger (George &amp; Tripp, 2023).</p>
<p>The GABA-A receptor is built from several parts, and each one has a somewhat different job. Animal research indicates the alpha-1 part is responsible for sedation, memory loss, and unsteadiness. The alpha-2 and alpha-3 parts are responsible for easing anxiety and relaxing muscles (George &amp; Tripp, 2023). Alprazolam does not pick and choose between these parts. It acts on all of them at once, affecting multiple receptor types at the same time, which is why the calming effects and the fogginess, sedation, or unsteadiness show up together.</p>
<figure><img src="/images/blog/infographics/xanax-gaba-mechanism.svg" width="1200" height="460" loading="lazy" alt="Diagram of alprazolam acting on the GABA-A receptor: the alpha-1 subunit produces sedation, memory loss and unsteadiness, while the alpha-2 and alpha-3 subunits ease anxiety and relax muscles. Alprazolam activates both pathways at once." /></figure>
<p>A dose reaches its peak in the blood 1 to 2 hours after it is taken by mouth (FDA, 2021; George &amp; Tripp, 2023). Clearing it takes much longer, and the speed varies a lot between people. The average half-life of alprazolam is about 11 hours, but in healthy adults it can range from 6 to 27 hours (FDA, 2021; George &amp; Tripp, 2023). In other words, two people taking the same prescription can be carrying very different amounts of the drug by the same evening.</p>

<h2>Is Xanax an Opioid?</h2>
<p>No. Opioids act at opioid receptors. Alprazolam acts at the GABA-A receptor and is unrelated to opioids chemically and pharmacologically (George &amp; Tripp, 2023).</p>
<p>The distinction matters most in an emergency, when someone has to decide what to give. There is a known antidote for opioid overdose, naloxone, sold as Narcan. There is no equivalent for Xanax.</p>
<p>Give naloxone in a mixed overdose, and it will reverse the effect of the opioid, but not the benzodiazepine. The person can still be sedated and breathing poorly after receiving the dose that was supposed to save them (Liu et al., 2021).</p>

<h2>What Is Xanax Used For?</h2>
<p>Xanax is FDA-approved for the management of anxiety disorder, short-term relief of anxiety symptoms, and the treatment of panic disorder with or without agoraphobia. The label states directly that anxiety or tension associated with the stress of everyday life usually does not require treatment with an anti-anxiety medication (FDA, 2021).</p>
<p>Dose matters to the risk profile. Management of panic disorder often requires average daily doses above 4 mg, and the label notes that the risk of dependence among patients treated for panic disorder may be higher than among those treated for less severe anxiety (FDA, 2021).</p>
<p>In 2020, the FDA required an updated boxed warning across the entire benzodiazepine class covering abuse, misuse, addiction, physical dependence, and withdrawal. The agency stated that taking benzodiazepines even at recommended dosages can lead to misuse, abuse, and addiction, and that physical dependence can develop when they are taken steadily for several days to weeks (FDA, 2020).</p>

<h2>What Does Xanax Do? The Common Side Effects</h2>
<p>The clearest picture comes from the placebo-controlled panic disorder trials in the prescribing information, with roughly 1,400 patients on Xanax and 1,200 on placebo (FDA, 2021).</p>
<figure><img src="/images/blog/infographics/xanax-side-effects-vs-placebo.svg" width="1200" height="620" loading="lazy" alt="Bar chart comparing Xanax to placebo across six side effects from FDA panic-disorder trials: drowsiness 76.8% versus 42.7%, fatigue and tiredness 48.6% versus 42.3%, impaired coordination 40.1% versus 17.9%, memory impairment 33.1% versus 22.1%, cognitive disorder 28.8% versus 20.5%, and slurred speech 23.3% versus 6.3%." /></figure>
<p>Benzodiazepines are also associated with temporary gaps in memory, loss of coordination, concentration difficulties, and changes in libido (FDA, 2021).</p>

<h3>Does Xanax Make You Sleepy?</h3>
<p>Yes, and it is the single most common effect. In the anxiety disorder trials, 41% of patients on Xanax reported drowsiness compared with 21.6% on placebo, and 15% required a dose reduction or discontinuation because of it (FDA, 2021).</p>
<p>Sedation is also an effect that can create risk outside the home. The label advises against driving or operating machinery until a person knows how alprazolam affects them, and that caution increases when it is combined with alcohol or other central nervous system depressants (FDA, 2021).</p>
<p>There is another point that often gets missed. Tolerance builds to the therapeutic relief effect, not to the side effects of Xanax. Over months the benefit fades while the memory problems and unsteadiness stay (FDA, 2021).</p>

<h3>Side Effects When Someone Takes More Than Prescribed</h3>
<p>The label lists the reactions specific to benzodiazepine abuse and misuse: amnesia, ataxia, blurred vision, confusion, disinhibition, disorientation, euphoria, impaired concentration and memory, irritability, aggression, slurred speech, and tremors.</p>
<p>The severe reactions include delirium, paranoia, suicidal ideation and behavior, seizures, coma, breathing difficulty, and death, which is more often associated with polysubstance use (FDA, 2021).</p>
<p>What is actually observable:</p>
<ul>
  <li>Conversations that repeat, or entire conversations the person does not recall</li>
  <li>Slurred or thickened speech, particularly on the phone</li>
  <li>Unexplained bruises, and falls on stairs or curbs</li>
  <li>Flat affect alternating with irritability or unusual aggression</li>
</ul>

<h2>What Dependence Looks Like Day to Day</h2>
<p>Physical dependence is a physiological adaptation to repeated dosing, and it develops on its own schedule. The label notes some risk of dependence even after relatively short-term use at 0.75 to 4.0 mg per day, with greater risk at doses above 4 mg per day and treatment longer than 12 weeks (FDA, 2021).</p>
<p>Addiction is a different phenomenon: difficulty controlling use, continued use despite harmful consequences, and giving a higher priority to the drug than to other obligations, to name a few (FDA, 2021).</p>
<p>In daily life, the pattern usually shows up in the practical before it shows up in anything more serious:</p>
<ul>
  <li>The dose that used to cover a stretch of hours no longer lasts as long</li>
  <li>The bottle runs out days before the refill date, repeatedly</li>
  <li>Early refill requests, a second prescriber, or pills obtained from friends and family</li>
  <li>Pills carried at all times, and anxiety about being somewhere without them</li>
  <li>More impairment and less relief than a year earlier</li>
</ul>
<p>Any change to a benzodiazepine regimen is a medical decision and belongs with a prescribing doctor.</p>

<h2>When Xanax Gets Dangerous: Alcohol, Opioids, and Pressed Pills</h2>
<p>The boxed warning leads with the combination risk: taking benzodiazepines and opioids together can cause heavy sedation, slowed breathing, coma, and death (FDA, 2021).</p>
<p>Alcohol is the second half of the problem and is often treated as harmless because it is legal. Fatalities have been reported in patients who overdosed on a single benzodiazepine, including alprazolam, in combination with alcohol. The alcohol levels in some of those patients were lower than the levels usually associated with alcohol-induced fatality (FDA, 2021).</p>
<p>In a CDC analysis of overdose deaths, 93% of benzodiazepine-involved deaths during the first half of 2020 also involved opioids, and 67% involved illicitly manufactured fentanyls. Alprazolam was the prescription benzodiazepine identified most often in those deaths (Liu et al., 2021).</p>
<p>Pressed tablets are a newer layer of risk, and the chemicals inside them keep changing. Bromazolam has been recently used to make counterfeit Xanax (Ehlers et al., 2024). A tablet that was not filled at a pharmacy cannot be identified by its stamp, its color, or its price. Counterfeits carry the same imprints as the real thing. Someone who has taken the same pressed bar for months without incident can receive a fentanyl-containing tablet the next time.</p>

<h2>Signs That Require Emergency Care</h2>
<p>An isolated benzodiazepine overdose typically presents as central nervous system depression with normal vital signs. Respiratory depression is the effect requiring immediate intervention (Kang et al., 2023).</p>
<p>Watch out for:</p>
<figure><img src="/images/blog/infographics/xanax-emergency-signs.svg" width="1200" height="460" loading="lazy" alt="Signs that require emergency care for a benzodiazepine overdose: sedation so heavy the person cannot be roused, slow shallow or irregular breathing, blue or gray lips fingertips or skin, confusion or inability to speak clearly, and loss of coordination or unresponsiveness." /></figure>
<p>Call 911. Report every substance involved, including alcohol, because that information changes the treatment (Kang et al., 2023).</p>

<h2>What Family Members Notice First</h2>
<p>Families may notice a combination of patterns their loved ones show over time:</p>
<ul>
  <li>Pill counts that do not match the fill date</li>
  <li>Sedation at hours that do not fit the prescribing schedule</li>
  <li>Drinking alongside the medication, downplayed as a drink or two</li>
  <li>Missed shifts or classes, other neglected responsibilities, and a shrinking social world</li>
  <li>Defensiveness or anger when the prescription is mentioned at all</li>
</ul>
<p>The useful next step is a <a href="/admissions/what-to-expect/">clinical assessment</a> rather than a confrontation. An assessment documents the substance use history, screens for the <a href="/what-we-treat/dual-diagnosis/">anxiety, depression, or trauma</a> sitting underneath it, evaluates medical risk, and produces a recommended level of care.</p>

<h2>How Sunview Wellness Treats Benzodiazepine Use</h2>
<p>At Sunview Wellness, we treat <em>in vivo</em>, which means treatment is adapted to your real life. Clients keep their jobs, stay in school, and sleep at home while receiving clinical care. There is no sober living funnel and no long-term housing commitment. Door-to-door transportation is provided at no cost so that attendance stays realistic for someone who is still working.</p>
<p>Care is delivered at three levels: <a href="/programs/php/">Partial Hospitalization (PHP)</a>, <a href="/programs/iop/">Intensive Outpatient (IOP)</a>, and <a href="/programs/outpatient/">Outpatient Programming (OP)</a>. Our <a href="/what-we-treat/substance-use/benzodiazepines/">benzodiazepine treatment program</a> follows clients well past the standard first month, because dependence built up over weeks or months does not resolve on a 30-day timeline.</p>
<p>If you or someone in your family have been taking more Xanax than prescribed, or combining it with alcohol or opioids, contact us for an assessment.</p>
<p>We're in network with most major insurance carriers, including Florida Medicaid plans. Our <a href="/admissions/insurance/">admissions team will verify your benefits</a> and explain options before you commit to anything specific.</p>
<p><a href="/admissions/"><strong>Speak With Admissions</strong></a></p>

<h2>Key Takeaways</h2>
<ul>
  <li>Xanax is alprazolam, a Schedule IV benzodiazepine approved for anxiety symptoms related to generalized anxiety disorder, depressive disorders, and panic disorder, and it is not an opioid.</li>
  <li>Drowsiness, impaired coordination, memory impairment, and slurred speech are the expected effects at prescribed doses, not signs of misuse on their own.</li>
  <li>Tolerance develops to the anxiety relief but not to the memory and cognitive impairment, so impairment can outlast the benefit.</li>
  <li>Physical dependence can develop with steady use over days to weeks, even exactly as prescribed, and shows up first in logistics like refill timing rather than anything alarming.</li>
  <li>Nearly all benzodiazepine overdose deaths involve another substance, most often an opioid, and alcohol raises fatality risk at levels that would not be dangerous on their own.</li>
</ul>

<h2>Outpatient Drug and Alcohol Treatment in West Palm Beach</h2>
<p>Sunview Wellness is a Joint Commission accredited outpatient drug rehab in West Palm Beach serving adults 18 and older. Our programs treat substance use disorders involving benzodiazepines, alcohol, opioids, stimulants, and polysubstance patterns, alongside the anxiety, depression, and trauma that so often exist underneath the substance use.</p>
<p>Our PhD-led clinical team brings more than 50 years of combined experience and works psychodynamically, using <a href="/therapies/inner-child-therapy/">Inner Child Therapy</a> as an integrative modality to address the shame, inadequacy, and fear underneath substance use.</p>
<p><strong>Call <a href="${SITE.phoneHref}">${SITE.phone}</a></strong></p>
`,
    sources: [
      { label: 'U.S. Food and Drug Administration. (2021). XANAX (Alprazolam) Tablets, USP: Prescribing Information. Drugs@FDA. U.S. Food and Drug Administration.', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/018276s058lbl.pdf' },
      { label: 'U.S. Food and Drug Administration. (2020, September 23). FDA Requiring Boxed Warning Updated to Improve Safe Use of Benzodiazepine Drug Class. Drug Safety Communications. U.S. Food and Drug Administration.', url: 'https://www.fda.gov/drugs/drug-safety-and-availability/fda-requiring-boxed-warning-updated-improve-safe-use-benzodiazepine-drug-class' },
      { label: 'George, T., & Tripp, J. (2023). Alprazolam. StatPearls. StatPearls Publishing.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK538165/' },
      { label: 'Kang, M., et al. (2023). Benzodiazepine Toxicity. StatPearls. StatPearls Publishing.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK482238/' },
      { label: 'Liu, S., et al. (2021, August 27). Trends in Nonfatal and Fatal Overdoses Involving Benzodiazepines — 38 States and the District of Columbia, 2019–2020. MMWR Morbidity and Mortality Weekly Report, 70(34), 1136–1141.', url: 'https://www.cdc.gov/mmwr/volumes/70/wr/mm7034a2.htm' },
      { label: 'National Institute on Drug Abuse. (2024). Benzodiazepines and Opioids. Research Topics. National Institute on Drug Abuse.', url: 'https://nida.nih.gov/research-topics/opioids/benzodiazepines-opioids' },
      { label: 'Ehlers, D., et al. (2024, January 5). Notes from the Field: Seizures, Hyperthermia, and Myocardial Injury in Three Young Adults Who Consumed Bromazolam Disguised as Alprazolam — Chicago, Illinois, February 2023. MMWR Morbidity and Mortality Weekly Report, 72(52–53), 1392–1393. Centers for Disease Control and Prevention.', url: 'https://www.cdc.gov/mmwr/volumes/72/wr/mm725253a5.htm' },
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
