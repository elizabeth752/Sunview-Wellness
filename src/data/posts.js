// Blog: articles and podcasts at /blog/<slug>/ (final sitemap). Slugs match the live WordPress URLs; /media/<slug>/ and the
// root-level legacy slug 301 here (vercel.json).
// type: 'article' (full body on-site) · 'video' (podcast:
// YouTube embed + episode notes + Sunview context) · 'clip' (a short clip shared on LinkedIn: summary + links).
// Every post has a `body` (HTML). Guest authors' text and YouTube "Episode notes" are
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
  // mist ground: the site's other light section tint (distinct from Extended Care's warm cream)
  'Mental Health': { token: 'mist', bg: '#F0FAFA', ink: '#545555', accent: '#126E6E', dot: '#126E6E' },
};
const FALLBACK_COLOR = CATEGORY_COLORS['Clinical Approach'];
export const categoryColor = (c) => CATEGORY_COLORS[c] ?? FALLBACK_COLOR;


export const posts = [
  // 2026-11-19: "What Should a Treatment Center Feel Like?" (Frank Galimidi's article) removed at his request
  // (Scott, 11/19 status call); its URL 301s to /blog/ in vercel.json. Don't re-add Frank's content.
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
<p>At Sunview Wellness, recovery happens inside a real life. Clients keep their jobs, stay in school, and sleep at home while receiving clinical treatment. There is no sober living funnel and no long-term housing commitment. Door-to-door transportation is provided at no cost so that attending treatment stays realistic.</p>
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
<p>If you need to keep working or studying, our <a href="/programs/iop/">IOP in West Palm Beach</a> meets three days a week, and <a href="/programs/evening-iop/">evening IOP</a> meets Monday, Wednesday and Thursday from 6 to 9 PM.</p>
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
<p>At Sunview Wellness, treatment is adapted to your real life. Clients keep their jobs, stay in school, and sleep at home while receiving clinical care. There is no sober living funnel and no long-term housing commitment. Door-to-door transportation is provided at no cost so that attendance stays realistic for someone who is still working.</p>
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
<p>Once you’re medically stable, our <a href="/programs/iop/">IOP in West Palm Beach</a> meets three days a week, and <a href="/programs/evening-iop/">evening IOP</a> meets Monday, Wednesday and Thursday from 6 to 9 PM, so you can keep working during treatment.</p>
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
  {
    slug: 'is-alcohol-a-depressant',
    type: 'article',
    title: 'Is Alcohol a Depressant? Why Drinking to Feel Better Makes Your Mood Worse',
    seoTitle: 'Is Alcohol a Depressant? Why It Backfires', // <title> only (≤60, answer 9.1)
    dek: "Alcohol calms the brain in the moment, then the rebound the next day can leave you more anxious than before you drank. Here is the science behind hangxiety and what breaks the loop.",
    metaDescription: 'Alcohol raises GABA and suppresses glutamate, which is why the calm fades into next-day anxiety. Learn why alcohol is a depressant and what helps.',
    date: '2026-09-28',
    author: 'dana-martin', // slug in src/data/team.js — prescribed as the article's clinical author
    category: 'Substance Use',
    // Dana Martin's clinical article, verbatim structure and claims; docx citation markers ([1]…[6]) converted to
    // the site's (Author, Year) in-text style. One citation swapped: the docx cited the AUD demographics page for
    // the "28M with AUD, 2M treated" stat, but that page only carries the 28M figure — the treatment figure lives
    // on NIAAA's separate "Alcohol Treatment in the United States" page, so the Sources entry points there instead.
    // One claim rewritten after fetch-verifying PMC12695015: the docx's "diminishing returns" framing (payoff
    // shrinking over repeated use) isn't what that paper measured; it's a single-session lab finding about
    // perceived vs. actual relief, so the paragraph now reflects that instead. Hyperlinks moved to Sources only;
    // interlinks added to existing site pages (the docx's own /dual-diagnosis/ link 404s — real path is
    // /what-we-treat/dual-diagnosis/). Phone pulled from SITE, never hardcoded.
    body: `
<p>Alcohol is a depressant. It slows down the brain and spinal cord by increasing gamma-aminobutyric acid (GABA), the chemical that calms nerve cells, and suppressing glutamate, the chemical that fires them up (Canver &amp; Gomez, 2024). Here is what alcohol does to your mood, why the calming effect wears off so quickly, and what changes when drinking and <a href="/what-we-treat/mental-health/depression/">depression</a> are treated together.</p>

<h2>Hangxiety: Why Anxiety Gets Worse After Drinking</h2>
<p>This is the part most people experience without knowing what to call it. When you drink regularly, your brain stays balanced by making extra glutamate and reducing its own GABA. Take the alcohol away, and you are left with too little GABA and too much glutamate at once. This overstimulated state is withdrawal (Canver &amp; Gomez, 2024).</p>
<figure><img src="/images/blog/infographics/alcohol-gaba-glutamate-cycle.svg" width="1200" height="600" loading="lazy" alt="Four-step loop: you drink and GABA rises while glutamate is suppressed, the brain compensates by raising glutamate and lowering GABA with regular drinking, the alcohol clears but the compensation hasn't reversed, and hangxiety hits from too little GABA and too much glutamate at once." /></figure>
<p>You do not have to be physically dependent on alcohol for this to happen. Anxiety can show up after a single heavy night of drinking, even in someone with no anxiety disorder. It builds between drinking episodes and peaks during withdrawal (National Institute on Alcohol Abuse and Alcoholism [NIAAA], 2025a).</p>
<p>Among people who are sensitive to hangovers, about 30% report depression symptoms and 18% report anxiety symptoms while hungover, and people who already run higher on both are the most vulnerable (Kim et al., 2023). The people most likely to drink for relief are the people most likely to pay for it the next day.</p>
<p>Sleep makes it worse. Even moderate amounts of alcohol can disrupt sleep and reduce REM sleep, and it can take 30 days or more without drinking for sleep patterns to recover (NIAAA, 2025a). You can fall asleep fast and still wake up exhausted, which lowers your tolerance for anxiety before the day even starts.</p>

<h2>Does Alcohol Cause Depression?</h2>
<p>Being a depressant and causing depression are two different claims. Mental health conditions can lead to alcohol use disorder (AUD), partly because people drink to cope. Drinking can also lead to mental health conditions, especially when it starts in adolescence or continues for years. The two can also share genetic and environmental risk factors, including trauma and difficult childhood experiences (NIAAA, 2025a).</p>
<figure><img src="/images/blog/infographics/alcohol-depression-bidirectional.svg" width="1200" height="480" loading="lazy" alt="Two stat cards: among people with major depression, 27 to 40 percent have alcohol use disorder at some point and up to 22 percent had it in a given year; among people dependent on alcohol, 15 to 33 percent also experience major depression. Curved arrows show each condition can lead to the other." /></figure>
<p>Among people with major depression, 27% to 40% have AUD at some point in their lives, and up to 22% had it in a given year (NIAAA, 2025a). Among people dependent on alcohol, an estimated 15% to 33% also experience major depression (Winkler &amp; Grahame, 2025).</p>
<p>Alcohol does not push everyone who drinks into depression. Heavy alcohol use can worsen depressive symptoms, though, and when both are present they can reinforce each other, raising the risk of relapse and worse outcomes overall (NIAAA, 2025a).</p>

<h2>Is Alcohol a Depressant or a Stimulant?</h2>
<p>Alcohol is called a depressant because of its overall effect on your nervous system, not because of how you feel during the first hour after drinking. How much you drink shapes what you notice: smaller amounts can feel stimulating, while larger amounts feel sedating (Canver &amp; Gomez, 2024).</p>
<h3>Why the First Drink Feels Like a Lift</h3>
<p>The GABA boost is what you may feel in that first hour: lowered inhibitions, a buzz or a sense of relaxation, and eventually drowsiness (Canver &amp; Gomez, 2024). If you are already experiencing depression or anxiety, the relief can feel real, which makes the behavior easy to repeat. The problem is duration. Relief may last a few hours; the lingering effects can last much longer.</p>

<h2>How to Stop Anxiety After Drinking Alcohol</h2>
<p>Nothing speeds up the rebound except time. A few things can keep it from getting worse.</p>
<ul>
  <li><strong>Drink water and eat a real meal.</strong> Being dehydrated and running on an empty stomach makes you shaky and lightheaded, which feels a lot like anxiety.</li>
  <li><strong>Do not drink again to fix it.</strong> A morning drink increases GABA and delays the crash until later in the day. That is how occasional drinking turns into daily drinking.</li>
  <li><strong>Skip as-needed sedatives.</strong> For people who drink heavily, benzodiazepines taken as needed for anxiety, mood, or sleep carry real misuse and overdose risk and are specifically discouraged. Talk with a doctor first (NIAAA, 2025a).</li>
  <li><strong>Move.</strong> Light physical activity burns off the physical restlessness the rebound creates.</li>
  <li><strong>Protect the next night of sleep.</strong> One good night of sleep does more for your mood than anything you try during the hangover.</li>
  <li><strong>Write down what happened.</strong> Track how much, how often, and what triggered the drinking.</li>
</ul>
<p>If the anxiety keeps coming back and the drinking continues anyway, the question becomes less about managing a hangover and more about why the drinking continues when you already know the consequences.</p>

<h2>Drinking to Cope With Depression</h2>
<p>Alcohol is easy to access, and people commonly use it to manage anxiety. In the short term, it may seem to help. Over time, though, heavy drinking and repeated withdrawal can worsen both anxiety symptoms and the drinking pattern itself (NIAAA, 2025a).</p>
<p>Research on drinking motives adds a layer here. People often say they drink to change how they feel, but in the moment, their reported relief does not line up with any measurable improvement in mood; people high in drinking-to-cope motives feel better after a drink even when their actual emotional state has not changed (Echeverri et al., 2025). That belief is often enough to keep the habit going, whether or not the alcohol is doing what it is credited for.</p>
<p><a href="/what-we-treat/dual-diagnosis/">Dual diagnosis treatment</a> is built specifically for the cases where drinking is the main way you cope with a mood or <a href="/what-we-treat/mental-health/anxiety/">anxiety</a> condition. An assessment looks at both alcohol use and mental health symptoms and how they are intertwined.</p>

<h2>Alcohol-Induced Depression Versus Depression on Its Own</h2>
<p>Low mood is common during alcohol withdrawal, and by most accounts it improves after 2 to 4 weeks without alcohol (Winkler &amp; Grahame, 2025). If the symptoms are still there after a month, it may be a sign of underlying depression that warrants individualized treatment.</p>
<figure><img src="/images/blog/infographics/alcohol-induced-vs-standalone-depression.svg" width="1200" height="420" loading="lazy" alt="Timeline from the last drink: withdrawal-related low mood is common through about week 4, marked in teal. Mood symptoms that are still present past week 4, marked in gold, point toward depression on its own rather than withdrawal." /></figure>
<p>In treatment, a clinician builds a timeline with questions including:</p>
<ul>
  <li>How old were you when the mood symptoms started, and when did the regular drinking start?</li>
  <li>What is the longest stretch you have gone without drinking, and were the mood symptoms present then?</li>
  <li>Is there a family history of mood disorders, alcohol problems, or psychiatric hospitalization?</li>
</ul>
<p>Depression scores and alcohol scores tend to fluctuate together, which is why relevant care tracks both (NIAAA, 2025a).</p>

<h2>Why Treating Both at Once Changes the Outcome</h2>
<p>Stopping drinking can improve a co-occurring mental health condition on its own. Treating the mental health symptoms alone is usually not enough to reduce drinking. Treating both together is more effective for recovery than treating either one in isolation (NIAAA, 2025a).</p>
<p>Getting care is the bottleneck: of the 28 million people aged 12 and older with an alcohol use disorder in the past year, only about 2 million received any treatment for it (NIAAA, 2025b). Outpatient care exists partly to close that gap, because it allows people to receive care while continuing to live at home and maintain work, school, and other responsibilities.</p>

<h2>How Sunview Wellness Treats Alcohol Use and Co-Occurring Depression</h2>
<p>At Sunview Wellness, recovery happens inside a real life. Clients keep their jobs, stay in school, and sleep at home while receiving clinical treatment. There is no sober living funnel and no long-term housing commitment. Door-to-door transportation is provided at no cost so that attending treatment stays realistic.</p>
<p>Care is delivered at three levels: <a href="/programs/php/">Partial Hospitalization (PHP)</a>, <a href="/programs/iop/">Intensive Outpatient (IOP)</a>, and <a href="/programs/outpatient/">Outpatient Programming (OP)</a>. Our <a href="/what-we-treat/substance-use/alcohol/">alcohol use disorder program</a> treats the drinking and the mood condition underneath it together, not as two separate referrals.</p>
<p>We're in network with most major insurance carriers, including Florida Medicaid plans. Our <a href="/admissions/insurance/">admissions team can verify your benefits</a>, schedule an assessment, and explain your options.</p>
<p><a href="/admissions/"><strong>Speak With Admissions</strong></a></p>

<h2>Key Takeaways</h2>
<ul>
  <li>Alcohol is a depressant because it increases GABA and suppresses glutamate. That is separate from whether it causes depression.</li>
  <li>Drinking and depression feed each other. Among people with major depression, 27% to 40% have an alcohol use disorder at some point.</li>
  <li>Hangxiety is a rebound state caused by too little GABA and too much glutamate after alcohol wears off, and it can follow a single heavy night.</li>
  <li>Mood symptoms that clear within 2 to 4 weeks without drinking suggest alcohol-induced depression. Symptoms that persist beyond that point point to depression on its own.</li>
  <li>Stopping drinking may improve a co-occurring mental health condition, but treating that condition alone rarely reduces the drinking.</li>
</ul>

<h2>Outpatient Drug and Alcohol Treatment in West Palm Beach</h2>
<p>Sunview Wellness is a Joint Commission accredited outpatient drug and alcohol rehab in West Palm Beach, serving adults 18 and older. Our programs treat substance use disorders involving benzodiazepines, alcohol, opioids, stimulants, and polysubstance patterns, alongside the anxiety, depression, and trauma that so often exist underneath the substance use.</p>
<p>Our PhD-led clinical team brings more than 50 years of combined experience and works psychodynamically, using <a href="/therapies/inner-child-therapy/">Inner Child Therapy</a> to reach the shame, inadequacy, and fear underneath substance use.</p>
<p><strong>Call <a href="${SITE.phoneHref}">${SITE.phone}</a></strong></p>
`,
    sources: [
      { label: 'National Institute on Alcohol Abuse and Alcoholism. (2025a). Mental Health Issues: Alcohol Use Disorder and Common Co-occurring Conditions. The Healthcare Professional’s Core Resource on Alcohol. National Institute on Alcohol Abuse and Alcoholism.', url: 'https://www.niaaa.nih.gov/health-professionals-communities/core-resource-on-alcohol/mental-health-issues-alcohol-use-disorder-and-common-co-occurring-conditions' },
      { label: 'Canver, B., & Gomez, K. (2024). Alcohol Withdrawal Syndrome. StatPearls. StatPearls Publishing.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK441882/' },
      { label: 'Winkler, M., & Grahame, N. J. (2025). Species Differences in Comorbid Alcohol Use Disorder and Major Depressive Disorder: A Narrative Review. Alcohol, Clinical and Experimental Research, 49(4), 712–724.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12012872/' },
      { label: 'Kim, D., et al. (2023). Depression, Anxiety, and Stress Among Hangover-Sensitive and Hangover-Resistant Drinkers. Journal of Clinical Medicine, 12(8), Article 2766.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10145060/' },
      { label: 'Echeverri, D., et al. (2025). Drinking Motives and Alcohol’s Acute Effects in a Social Laboratory Setting. Psychology of Addictive Behaviors. Advance online publication.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12695015/' },
      { label: 'National Institute on Alcohol Abuse and Alcoholism. (2025b). Alcohol Treatment in the United States. Alcohol Facts and Statistics. National Institute on Alcohol Abuse and Alcoholism.', url: 'https://www.niaaa.nih.gov/alcohols-effects-health/alcohol-topics/alcohol-facts-and-statistics/alcohol-treatment-united-states' },
    ],
  },
  {
    slug: 'signs-of-depression-in-women-that-get-missed',
    type: 'article',
    title: 'Signs of Depression in Women That Get Missed, Including the Ones That Look Like Coping',
    seoTitle: 'Signs of Depression in Women That Get Missed', // <title> only (≤60, answer 9.1)
    dek: 'Depression in women does not always look like sadness. It can show up as irritability, exhaustion, physical pain with no clear cause, or a drinking habit that quietly grows.',
    metaDescription: 'Depression in women often looks like irritability, exhaustion, or drinking to cope, not sadness. Learn the signs that get missed and what to do next.',
    date: '2026-09-28',
    author: 'dana-martin', // slug in src/data/team.js — prescribed as the article's clinical author
    category: 'Mental Health',
    // Dana Martin's clinical article, verbatim structure and claims; docx citation markers ([1]…[7]) converted to
    // the site's (Author, Year) in-text style. One factual error in the docx's own Key Takeaways line was corrected:
    // it wrote "persistent depressive disorder (PMDD)" — PMDD is premenstrual dysphoric disorder, a different,
    // separate condition the article discusses on its own further down. The correct abbreviation, used correctly
    // everywhere else in the docx, is PDD; fixed here rather than propagated. The age-group stat was also tightened
    // to match the source exactly after fetch-verifying PMC12538442: women 18–45 had 10% greater odds of the
    // "Demoralized" symptom pattern than women in other age groups — not the broadest "highest odds" phrasing the
    // docx implied. Hyperlinks moved to Sources only; interlinks added to existing site pages. Phone pulled from
    // SITE, never hardcoded.
    body: `
<p>Depression does not always look like sadness. Some women never feel sad at all (National Institute of Mental Health [NIMH], 2023a). Instead it may show up as irritability, loss of interest, exhaustion, physical aches with no clear cause, or turning to alcohol as a way to cope. About 10% of adult women in the U.S. experience a major depressive episode in a given year, and roughly 4 in 10 adults who experience one receive no treatment for it (NIMH, 2023b). Here are the signs that get missed most often, and what to do about them.</p>

<h2>Why the Signs of Depression in Women Get Missed</h2>
<p>Depression does not look the same in everyone. Some women experience many symptoms at once, while others have only a few (NIMH, 2023a). A woman with three quieter symptoms may still be experiencing depression, even if there is nothing obvious to point to when someone asks if she is okay.</p>
<figure><img src="/images/blog/infographics/depression-hidden-signs-hub.svg" width="1200" height="700" loading="lazy" alt="Four signs of depression that get mistaken for something else: irritability instead of sadness, exhaustion sleep doesn't fix, pain with no clear cause, and increasing drinking to cope, quietly." /></figure>
<p>Symptom patterns help explain why some cases are easier to miss. In a 2025 study, women had 22% greater odds than men of showing a pattern centered on hopelessness, feeling like a failure, and low energy, rather than the more restless, anxious pattern more common in men (Weiss et al., 2025). This pattern is quiet. It may not disrupt a household or prompt someone to seek immediate help.</p>

<h2>Symptoms of Depression in Women: A Checklist</h2>
<p>Talk to a health care provider if you have experienced any of the following most of the day, nearly every day, for at least two weeks (NIMH, 2023a):</p>
<ul>
  <li>Anxiety or irritability</li>
  <li>Feelings of hopelessness, worthlessness, or helplessness</li>
  <li>Loss of interest or pleasure in hobbies and activities you once enjoyed</li>
  <li>Fatigue, lack of energy, or feeling slowed down</li>
  <li>Difficulty concentrating, remembering, or making decisions</li>
  <li>Changes in sleep or appetite, in either direction</li>
  <li>Physical aches or pains without a clear physical cause</li>
  <li>Thoughts of death or suicide</li>
</ul>
<p>If you are struggling or having thoughts of suicide, call or text the 988 Suicide and Crisis Lifeline at 988. In life-threatening situations, call 911 (NIMH, 2023a).</p>

<h2>Hidden Signs of Depression That Look Like Something Else</h2>
<h3>Irritability Instead of Sadness</h3>
<p>Anxiety and irritability sit at the top of the official symptom list and can be more noticeable than sadness (NIMH, 2023a). A short fuse over small things, snapping at people you care about, or feeling constantly overwhelmed are all recognized signs. They get explained away as stress or a personality trait, which is why they go dismissed for years.</p>
<h3>Exhaustion That Sleep Does Not Fix</h3>
<p>Low energy and fatigue are among the most common symptoms of depression, and they are easy to blame on something else: a demanding job, small children, or another health issue like a thyroid problem. The difference is that rest does not repair these symptoms. A full night of sleep, a weekend off, or a vacation may not change much.</p>
<h3>Pain With No Clear Cause</h3>
<p>Headaches, cramps, digestive problems, and body aches that have no clear physical explanation are recognized symptoms of depression (NIMH, 2023a). Many women see a string of providers for the pain, get normal results, and leave without anyone asking about mood. Clean workups are a reason to have the mood conversation, not to drop it.</p>
<h3>When Drinking Starts to Increase</h3>
<p>This is the sign that brings the most women to treatment, and it is rarely described as a depression symptom. It grows slowly enough that no single night looks like a problem. Alcohol is often used to cope with psychological distress, and providers screen women for alcohol misuse less often than men (NIAAA, 2024). The drinking increases while the depression underneath remains unnamed.</p>

<h2>What Does "High-Functioning Depression" Mean?</h2>
<p>"High-functioning depression" is not a clinical diagnosis. The closest formal match is <a href="/what-we-treat/mental-health/depression/">persistent depressive disorder (PDD)</a>. It involves depressed mood most of the day, more days than not, for at least two years, plus at least two of the following (Patel et al., 2024):</p>
<ul>
  <li>Poor appetite or overeating</li>
  <li>Insomnia or sleeping too much</li>
  <li>Low energy</li>
  <li>Low self-esteem</li>
  <li>Poor concentration</li>
  <li>Hopelessness</li>
</ul>
<p>PDD is often overlooked, and the impairment it causes can be as severe as major depression. It also raises the risk of developing a <a href="/what-we-treat/dual-diagnosis/">substance use disorder</a> (Patel et al., 2024). "High-functioning depression" is often overlooked because responsibilities are still taken care of: deadlines are met, the children get where they need to go, and nothing looks like an emergency. Despite all that, functioning is not the same as being well.</p>
<figure><img src="/images/blog/infographics/depression-symptom-patterns-compare.svg" width="1200" height="480" loading="lazy" alt="Comparison of two depression symptom patterns: women more often show a demoralized pattern of hopelessness, feeling like a failure, and low energy, with 22 percent greater odds than men. Men more often show an anxious arousal pattern of restlessness, trouble relaxing, and feeling on edge." /></figure>

<h2>Life Stages When Depression Symptoms in Women Are More Likely</h2>
<p>Some forms of depression are associated with reproductive stages, and they are treatable (NIMH, 2023a).</p>
<figure><img src="/images/blog/infographics/depression-reproductive-life-stages.svg" width="1200" height="420" loading="lazy" alt="Three treatable, hormone-linked depression types across a woman's reproductive years: premenstrual dysphoric disorder in the weeks before menstruation, perinatal depression during pregnancy or after childbirth, and perimenopausal depression during the transition to menopause." /></figure>
<ul>
  <li><strong>Premenstrual dysphoric disorder (PMDD)</strong> is a severe form of premenstrual syndrome that occurs in the weeks before menstruation. Symptoms can include depressed mood, anger or irritability, appetite changes, and physical pain.</li>
  <li><strong>Perinatal depression</strong> can occur during pregnancy or after childbirth. It goes beyond the temporary "baby blues," and may involve sadness, anxiety, and fatigue intense enough to interfere with caring for yourself or others.</li>
  <li><strong>Perimenopausal depression</strong> can occur during the transition to menopause. Mood swings and disrupted sleep are common during this stage, but persistent irritability, anxiety, or loss of enjoyment may be signs of depression.</li>
</ul>

<h2>When Drinking Is the Reason You Finally Call</h2>
<p>For some women, concerns about alcohol and substance use prompt them to seek help before they recognize or address underlying mood symptoms. Women can develop alcohol-related problems sooner and at lower levels of alcohol consumption than men, and they are less likely to receive treatment for <a href="/what-we-treat/substance-use/alcohol/">alcohol use disorder (AUD)</a> (NIAAA, 2025a).</p>
<p>Mental health conditions and alcohol use disorder can occur together. Some people use alcohol to cope with emotional distress, while alcohol use can also worsen mental health symptoms, creating a cycle that can be difficult to break (NIAAA, 2025b).</p>
<p>Abstinence may improve a co-occurring mental health condition on its own, but treating the mental health symptoms alone is not enough to resolve the drinking problem. <a href="/what-we-treat/dual-diagnosis/">Dual diagnosis treatment</a> includes an assessment that looks at both mental health and substance use histories, rather than focusing only on the one concern that led you to seek help (NIAAA, 2025b).</p>

<h2>How Sunview Wellness Treats Depression in Women</h2>
<p>At Sunview Wellness, recovery happens within your everyday life through our <a href="/programs/php/">partial hospitalization</a>, <a href="/programs/iop/">intensive outpatient</a>, and <a href="/programs/outpatient/">outpatient</a> programs. You can continue working, studying, and living at home while receiving care.</p>
<p>Our clinical team screens for both mood symptoms and alcohol use at intake, not just the concern that prompted the call, and treats <a href="/what-we-treat/mental-health/anxiety/">anxiety</a>, depression, and substance use together when they occur together.</p>
<p>We're in network with most major insurance carriers, and we accept Medicaid. Our <a href="/admissions/insurance/">admissions team can verify your benefits</a> at no cost and schedule an assessment.</p>
<p><a href="/admissions/"><strong>Speak With Admissions</strong></a></p>

<h2>Key Takeaways</h2>
<ul>
  <li>Anxiety and irritability sit at the top of the depression symptom list. Sadness is only one symptom, and some women never feel it at all.</li>
  <li>Women had 22% greater odds than men of a symptom pattern centered on hopelessness and low energy rather than visible agitation, and this pattern showed up more in women ages 18 to 45 than in women in other age groups.</li>
  <li>"High-functioning depression" is not a diagnosis. Its closest match, persistent depressive disorder (PDD), lasts at least two years and increases the risk of a substance use disorder.</li>
  <li>Providers are less likely to screen women for alcohol misuse than men, so a drinking pattern that grew out of coping often goes unmentioned.</li>
  <li>Stopping alcohol use may improve a co-occurring mental health condition, but treating that condition alone rarely resolves the drinking problem.</li>
</ul>

<h2>Outpatient Depression and Addiction Treatment in West Palm Beach</h2>
<p>Sunview Wellness is a Joint Commission accredited outpatient program in West Palm Beach, serving adults 18 and older. Depression, anxiety, and trauma are treated alongside substance use here, in the same program and by the same team.</p>
<p>Our PhD-led clinical team brings more than 50 years of combined experience and works psychodynamically, using <a href="/therapies/inner-child-therapy/">Inner Child Therapy</a> to reach the shame, inadequacy, and fear underneath substance use.</p>
<p><strong>Call <a href="${SITE.phoneHref}">${SITE.phone}</a></strong></p>
`,
    sources: [
      { label: 'National Institute of Mental Health. (2023a). Depression in Women: 4 Things to Know. Brochures and Fact Sheets, No. 23-MH-4779. National Institute of Mental Health.', url: 'https://www.nimh.nih.gov/health/publications/depression-in-women' },
      { label: 'National Institute of Mental Health. (2023b). Major Depression. Mental Health Information: Statistics. National Institute of Mental Health.', url: 'https://www.nimh.nih.gov/health/statistics/major-depression' },
      { label: 'Patel, R. K., et al. (2024). Persistent Depressive Disorder. StatPearls. StatPearls Publishing.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK541052/' },
      { label: 'National Institute on Alcohol Abuse and Alcoholism. (2025a). Women and Alcohol. Brochures and Fact Sheets. National Institute on Alcohol Abuse and Alcoholism.', url: 'https://www.niaaa.nih.gov/publications/brochures-and-fact-sheets/women-and-alcohol' },
      { label: 'National Institute on Alcohol Abuse and Alcoholism. (2025b). Mental Health Issues: Alcohol Use Disorder and Common Co-occurring Conditions. The Healthcare Professional’s Core Resource on Alcohol. National Institute on Alcohol Abuse and Alcoholism.', url: 'https://www.niaaa.nih.gov/health-professionals-communities/core-resource-on-alcohol/mental-health-issues-alcohol-use-disorder-and-common-co-occurring-conditions' },
      { label: 'Weiss, K., et al. (2025). Gender Differences in Symptom Profiles of Individuals Being Treated for Mood Disorders. Journal of Mood and Anxiety Disorders, 12, Article 100152.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12538442/' },
      { label: 'National Institute on Alcohol Abuse and Alcoholism. (2024). Advancing Research on Women’s Health. NIAAA Strategic Plan Fiscal Years 2024–2028. National Institute on Alcohol Abuse and Alcoholism.', url: 'https://www.niaaa.nih.gov/about-niaaa/strategic-plan-fiscal-years-2024-2028/cross-cutting-research-themes/advancing-research-womens-health' },
    ],
  },
  {
    slug: 'thca-vs-thc',
    type: 'article',
    title: 'THCA vs THC: Why Legal THCA Flower Gets You Just as High',
    dek: 'THCA flower is sold as hemp, but heat converts it into THC, the compound in marijuana that produces a high, along with the same risks for anxiety, paranoia, and cannabis use disorder.',
    metaDescription: 'THCA flower is sold as hemp, but heat converts it into THC. Learn how THCA compares to THC, its side effects, and what Florida and federal law say.',
    date: '2026-10-08',
    author: 'dana-martin', // slug in src/data/team.js — prescribed as the article's clinical author
    category: 'Substance Use',
    // Dana Martin's clinical article, verbatim structure and claims; docx citation markers ([1]…[6]) converted to
    // the site's (Author, Year) in-text style; the three CDC citations (mental health, lung health, cannabis use
    // disorder) given 2024a/b/c to disambiguate, matching the NIMH/NIAAA a/b convention used elsewhere. The docx's
    // "a 2025 federal law will include THCA" line was fetch-verified and tightened: the law (Public Law 119-37)
    // was signed November 2025, not merely proposed, and a later continuing-appropriations act delayed its
    // effective date to December 11, 2026 — both now stated explicitly rather than left as "will." The docx's
    // closing warning-signs bullet named the 988 Suicide and Crisis Lifeline; omitted per the client's standing
    // no-crisis-line rule (Answers-Content-Questions-2026-09-24.md, 8.1) and replaced with the site's existing
    // emergency-care phrasing (matches xanax-side-effects' "Call 911" pattern). Hyperlinks moved to Sources only;
    // interlinks added to existing site pages (no dedicated cannabis child page exists yet, so interlinks point to
    // the substance-use hub). Phone pulled from SITE, never hardcoded.
    body: `
<p>THCA flower is sold in smoke shops and online as hemp, often with a lab report showing less than 0.3% delta-9 THC. THCA (tetrahydrocannabinolic acid) is the natural, raw form of THC (tetrahydrocannabinol) that the cannabis plant actually produces, and heat converts it into delta-9 THC, the compound in marijuana that causes a high (Wang et al., 2016).</p>
<p>This article covers how THCA compares to THC, whether THCA flower gets you high, its side effects, how Florida and federal law treat it, and what it means for someone who is already struggling with cannabis use.</p>

<h2>Is THCA the Same as THC?</h2>
<p>THCA and THC are closely related, but they are not the same compound. The cannabis plant primarily produces THCA, while THC itself is present only in small amounts in the raw plant. Exposing THCA to heat or light triggers a reaction called decarboxylation, which converts it into THC (Wang et al., 2016).</p>
<p>In practice, the difference is small for anyone who smokes, vapes, or cooks cannabis flower, since each of those methods triggers the same conversion. That is also why forensic labs commonly measure THCA and delta-9 THC together as total THC when reporting a sample's cannabinoid content (Wang et al., 2016).</p>

<h2>What Is THCA?</h2>
<p>THCA is one of the main natural compounds in cannabis. Hemp and marijuana come from the same plant, <em>Cannabis sativa</em>, and the law distinguishes between them by cannabinoid content rather than how the plant looks (Congressional Research Service [CRS], 2026).</p>

<h2>What Is THCA Flower?</h2>
<p>THCA flower is dried cannabis bud sold as hemp. Since 2018, federal law has defined hemp by its delta-9 THC concentration: no more than 0.3% on a dry weight basis (CRS, 2026). A flower can carry a large amount of THCA and still test under that limit, because the test does not count THCA, even though the same flower can produce far more THC once it is heated.</p>

<h2>Does THCA Get You High?</h2>
<p>THCA flower can get you high. Smoking, vaping, or cooking it converts THCA into THC, so the effects can match those of marijuana with a comparable amount of THC (Wang et al., 2016).</p>
<figure><img src="/images/blog/infographics/thca-to-thc-decarboxylation.svg" width="1200" height="460" loading="lazy" alt="Three-step diagram: THCA is the raw, non-intoxicating compound the cannabis plant produces, heat applied through smoking, vaping, or cooking triggers decarboxylation, and the result is delta-9 THC, the psychoactive compound that produces the high." /></figure>
<p>Potency is a factor with any cannabis product, not just THCA flower. In research samples tracked over time, the average delta-9 THC concentration nearly doubled, from 9% in 2008 to 17% in 2017, and higher concentrations carry stronger effects on the brain (CDC, 2024c).</p>

<h2>What Are the Side Effects of THCA?</h2>
<p>The side effects of THCA flower are the side effects of THC, because that is what it becomes once it is heated. They include disorientation; anxiety and paranoia; psychosis, which involves losing touch with reality and may include hallucinations; a higher risk of long-lasting mental health conditions, including schizophrenia, especially in people who start using at a young age and use frequently; and depression, social anxiety, and suicidal thoughts (CDC, 2024a).</p>
<figure><img src="/images/blog/infographics/thca-thc-side-effects.svg" width="1200" height="460" loading="lazy" alt="List of THCA and THC side effects: disorientation, anxiety and paranoia, psychosis involving loss of touch with reality, a higher risk of long-lasting conditions including schizophrenia, and depression, social anxiety, and suicidal thoughts." /></figure>

<h3>Cannabis Use Disorder</h3>
<p>Cannabis use disorder (CUD) is a pattern of cannabis use in which a person is unable to stop using it even when it causes health and social problems. About 3 in 10 people who use cannabis have CUD, and the risk is higher for people who begin using at a younger age (CDC, 2024c). Signs include cravings, using more than intended, trying and failing to quit, and needing more cannabis to get the same high (CDC, 2024c).</p>

<h2>Is THCA Safe to Smoke?</h2>
<p>Smoking THCA flower carries the same lung risks as smoking marijuana. Inhaling cannabis smoke can injure lung tissue and may contribute to inflammation, scarring, and damage to the small blood vessels within the lungs.</p>
<p>Cannabis smoke contains many of the same toxins, irritants, and cancer-causing chemicals as tobacco smoke, and smoking it can increase the risk of bronchitis, cough, and mucus production. These symptoms generally improve after a person stops smoking cannabis (CDC, 2024b).</p>

<h2>Is THCA Legal in Florida?</h2>
<p>Hemp-derived products meant to be eaten or inhaled cannot be sold in Florida to anyone under 21 (Florida Legislature, 2026).</p>
<p>Federal law currently tests a hemp product only for how much delta-9 THC it contains, capped at 0.3%. THCA is not part of that test, which is why cannabis flower high in THCA can still be sold as hemp. That is changing: a federal law signed in November 2025, Public Law 119-37, redefines hemp around a total THC limit that counts THCA together with delta-9 THC, still capped at 0.3%. The change is currently set to take effect December 11, 2026 (CRS, 2026). Once it does, most high-THCA flower will no longer meet the federal definition of hemp.</p>
<figure><img src="/images/blog/infographics/thca-federal-hemp-test-change.svg" width="1200" height="420" loading="lazy" alt="Timeline showing the federal hemp test changing: today the test counts delta-9 THC only, so THCA flower can pass at 0.3 percent, and starting December 11, 2026, under Public Law 119-37, the test counts total THC, combining THCA and delta-9 THC, at the same 0.3 percent limit." /></figure>

<h2>What THCA Means for Someone Already Struggling With Cannabis</h2>
<p>For someone trying to control their cannabis use, THCA flower is not a lower-risk alternative. It can deliver the same THC-related effects as marijuana, and because it is sold as hemp, it can be easier to buy. Someone trying to cut back on marijuana may switch to THCA flower believing it is a safer or legal option, when in practice they are using the same drug and carry the same risk of CUD.</p>
<p>If you find THCA flower among a family member's belongings, the hemp label is not a reason to assume it is harmless. These steps can help:</p>
<ul>
  <li><strong>Start the conversation when things are calm.</strong> Ask how often they use it and what it does for them, and listen before you respond.</li>
  <li><strong>Look for signs of a pattern.</strong> Using more than planned, failed attempts to cut back, cravings, or giving up activities they once enjoyed can point toward cannabis use disorder (CDC, 2024c).</li>
  <li><strong>Ask for a professional assessment.</strong> A primary care provider or an <a href="/admissions/what-to-expect/">addiction treatment program</a> can evaluate cannabis use together with the <a href="/what-we-treat/mental-health/anxiety/">mood and anxiety</a> conditions that often go with it.</li>
  <li><strong>Know the urgent warning signs.</strong> Signs of psychosis, such as paranoia or not knowing what is real, and any talk of suicide need immediate attention. Call 911 or go to the nearest emergency room.</li>
</ul>

<h2>How Sunview Wellness Treats Cannabis Use Disorder</h2>
<p>At Sunview Wellness, care fits into daily life. Clients keep their jobs, stay in school, and live at home while receiving clinical treatment through our <a href="/programs/php/">Partial Hospitalization (PHP)</a>, <a href="/programs/iop/">Intensive Outpatient (IOP)</a>, and <a href="/programs/outpatient/">Outpatient Programming (OP)</a> levels of care.</p>
<p>Our <a href="/what-we-treat/substance-use/">substance use treatment program</a> addresses cannabis use disorder together with the <a href="/what-we-treat/dual-diagnosis/">anxiety, depression, and trauma</a> that so often sit underneath it, in the same program and by the same team.</p>
<p>We're in network with most major insurance carriers, including Florida Medicaid plans. Our <a href="/admissions/insurance/">admissions team can verify your benefits</a>, schedule an assessment, and explain your options.</p>
<p><a href="/admissions/"><strong>Speak With Admissions</strong></a></p>

<h2>Key Takeaways</h2>
<ul>
  <li>Heat converts THCA into THC, so smoked or vaped THCA flower can produce effects similar to marijuana.</li>
  <li>THCA is natural, not synthetic, but once it converts to THC it carries the same risks as marijuana.</li>
  <li>Side effects can include anxiety, paranoia, and psychosis, and about 3 in 10 people who use cannabis have cannabis use disorder.</li>
  <li>Smoked cannabis can harm lung tissue and raise the risk of bronchitis and cough.</li>
  <li>Federal law currently tests hemp only for delta-9 THC. Once a 2025 law takes effect on December 11, 2026, the test will count total THC, and most THCA flower will no longer qualify as hemp.</li>
</ul>

<h2>Outpatient Drug and Alcohol Treatment in West Palm Beach</h2>
<p>Sunview Wellness is a Joint Commission accredited outpatient drug rehab in West Palm Beach serving adults 18 and older. Our programs treat substance use disorders involving cannabis, alcohol, opioids, stimulants, and polysubstance patterns, alongside the anxiety, depression, and trauma that so often exist underneath the substance use.</p>
<p>If you need to keep working or studying, our <a href="/programs/iop/">IOP in West Palm Beach</a> meets three days a week, and <a href="/programs/evening-iop/">evening IOP</a> meets Monday, Wednesday and Thursday from 6 to 9 PM.</p>
<p>Our PhD-led clinical team brings more than 50 years of combined experience and works psychodynamically, using <a href="/therapies/inner-child-therapy/">Inner Child Therapy</a> as an integrative modality to address the shame, inadequacy, and fear underneath substance use.</p>
<p><strong>Call <a href="${SITE.phoneHref}">${SITE.phone}</a></strong></p>
`,
    sources: [
      { label: 'Wang, M., et al. (2016). Decarboxylation Study of Acidic Cannabinoids: A Novel Approach Using Ultra-High-Performance Supercritical Fluid Chromatography/Photodiode Array-Mass Spectrometry. Cannabis and Cannabinoid Research, 1(1), 262–271.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5549281/' },
      { label: 'Congressional Research Service. (2026). Changes to the Statutory Definition of Hemp and Implications for Agricultural Policy. In Focus, No. IF13136. Congressional Research Service.', url: 'https://www.congress.gov/crs-product/IF13136' },
      { label: 'Centers for Disease Control and Prevention. (2024a). Cannabis and Mental Health. Cannabis and Public Health. Centers for Disease Control and Prevention.', url: 'https://www.cdc.gov/cannabis/health-effects/mental-health.html' },
      { label: 'Centers for Disease Control and Prevention. (2024b). Cannabis and Lung Health. Cannabis and Public Health. Centers for Disease Control and Prevention.', url: 'https://www.cdc.gov/cannabis/health-effects/lung-health.html' },
      { label: 'Centers for Disease Control and Prevention. (2024c). Understanding Your Risk for Cannabis Use Disorder. Cannabis and Public Health. Centers for Disease Control and Prevention.', url: 'https://www.cdc.gov/cannabis/health-effects/cannabis-use-disorder.html' },
      { label: 'The Florida Legislature. (2026). Section 581.217, State Hemp Program. The 2026 Florida Statutes. The Florida Legislature.', url: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0581/Sections/0581.217.html' },
    ],
  },
  {
    slug: 'what-is-7-oh',
    type: 'article',
    title: 'What Is 7-OH? The Gas Station Kratom Product That Acts Like an Opioid',
    dek: '7-OH is sold as kratom in gas stations and vape shops, but the FDA describes it as a potent opioid. Here is what it is, how long it lasts, and where it stands under Florida and federal law.',
    metaDescription: '7-OH is sold as kratom in gas stations and vape shops, but the FDA calls it a potent opioid. Learn its effects, legal status, and how Sunview Wellness can help.',
    date: '2026-10-20',
    author: 'dana-martin', // slug in src/data/team.js — prescribed as the article's clinical author, matching precedent
    category: 'Substance Use',
    // Docx citation markers ([1]...[6]) converted to inline (Author, Year) style. Fetch-verified every source
    // against the specific claim it supports before writing this: the docx's [3] (NIDA) citation on the "7-OH is
    // under 2% of natural kratom's alkaloid content" figure was wrong — NIDA's page never gives a percentage; that
    // exact figure ("2% of the total alkaloid content," Hossain et al., 2023, cited within the FDA report) is in
    // the FDA/Reissig document, so it's cited to (Reissig et al., 2025) here instead. The "82.2% of products are
    // chewable tablets/shots/gummies" stat is also only in the FDA/Reissig document (via Hill et al., 2025), not
    // in the FDA consumer guide, so it's cited there alone rather than to both as the docx had it. Confirmed real
    // and correctly matched: the naloxone-reverses-breathing claim (NIDA's own page states this), the "500% more
    // 7-OH than natural" figure (independently supported in both the FDA/Reissig technical report, which found
    // 109-509% higher than expected, and the FDA consumer guide, which rounds it to "500%"), and the DEA timeline
    // (CRS LSB11457: 7-OH itself proposed for Schedule I in July 2026 and still not finalized — comment period
    // extended to September 10, 2026 — while three related compounds, mitragynine pseudoindoxyl, MGM-15, and
    // MGM-16, were finalized in Schedule I effective August 26, 2026; natural kratom leaf below a 0.05% 7-OH
    // threshold is excluded from both the federal proposal and Florida's rule). Pharmacokinetics tightened from the
    // docx's rounded "2 to 5 hours" to the source's actual range (half-life 1.7-5.67 hours depending on the study,
    // rounded here to "roughly 2 to 6 hours"). The docx's closing "free door-to-door transportation" line is
    // changed to "free transportation" (no staff pick-up implication, no radius stated) per the client's standing
    // rule (Answers-Content-Questions-2026-09-24.md §6.1), and the insurance line matches the site's established
    // phrasing instead of the docx's "we accept Medicaid." Phone pulled from SITE, never hardcoded. Interlinks
    // point to the existing /what-we-treat/substance-use/opioids/ page and the PHP/IOP/OP program pages, framed
    // (per that page's own standard) as the step after medically supervised detox, not detox itself.
    body: `
<p>7-OH is sold as tablets, gummies, and shots in gas stations, vape shops, and online across Florida, often labeled as kratom or a natural supplement. The U.S. Food and Drug Administration (FDA) describes 7-OH as a potent opioid that acts on the same brain receptors as morphine and can cause dependence, withdrawal, and slowed breathing (Reissig et al., 2025).</p>
<p>This article explains what 7-OH is, how it differs from kratom leaf, its effects, how long it lasts, its legal status, and what to do if you or a family member are using it.</p>

<h2>What Is 7-OH (7-Hydroxymitragynine)?</h2>
<p>7-OH, short for 7-hydroxymitragynine, is a compound that occurs naturally in the kratom plant, where it makes up less than 2% of the plant’s total alkaloid content (Reissig et al., 2025). The body also converts small amounts of kratom’s main alkaloid, mitragynine, into 7-OH on its own (NIDA, 2026).</p>
<p>Concentrated 7-OH products sold in stores are different. Because so little 7-OH occurs naturally, direct extraction from the plant would not be economical, so federal health officials say the much higher amounts found in these products are likely made by chemically converting other kratom compounds in a lab (Reissig et al., 2025). They are sold under street names including “7-Hydroxy,” “7-OHMG,” and simply “7” (FDA, 2025).</p>

<h2>Is 7-OH an Opioid?</h2>
<p>Yes, 7-OH is an opioid. It activates the same mu-opioid receptors in the brain that morphine, oxycodone, and fentanyl do, regardless of what the product’s label says (Reissig et al., 2025).</p>
<p>Mu-opioid receptors are where opioids attach in the brain and body to relieve pain and produce euphoria. In laboratory and animal studies, 7-OH has shown greater binding affinity and potency at these receptors than morphine, and it produces respiratory depression, physical dependence, and withdrawal symptoms characteristic of classical opioids. In rodent studies, naloxone, a medication used to reverse opioid overdose, reversed 7-OH’s effects on breathing (Reissig et al., 2025; NIDA, 2026).</p>
<figure><img src="/images/blog/infographics/7oh-mu-opioid-receptor.svg" width="1200" height="460" loading="lazy" alt="Diagram showing 7-OH binding the mu-opioid receptor, the same receptor targeted by morphine, oxycodone, and fentanyl, producing euphoria, sedation, respiratory depression, and physical dependence, effects reversed by naloxone in lab studies." /></figure>

<h2>Kratom vs. 7-OH: What Is the Difference?</h2>
<p>Kratom leaf and concentrated 7-OH come from the same plant, but they are not interchangeable. Kratom leaves and mitragynine generally do not appear to cause the slowed breathing seen in a life-threatening opioid overdose, largely because the body converts mitragynine to 7-OH slowly. Concentrated products skip that slow conversion and deliver 7-OH directly (NIDA, 2026).</p>
<p>Labels do not always make this clear. Products marketed as “enhanced” or “spiked” kratom can look like natural leaf but have been found to contain as much as 500% more 7-OH than would be expected naturally, a finding reported independently by both FDA’s technical review and its consumer guide (Reissig et al., 2025; FDA, 2025). A product sold as kratom can end up acting closer to a prescription opioid than to kratom leaf.</p>

<h2>What Are the Effects of 7-OH?</h2>
<p>Based on poison center data, toxicology testing, and user reports, federal health officials describe these effects of 7-OH (FDA, 2025):</p>
<ul>
  <li><strong>Euphoria</strong>, or an opioid-like “high”</li>
  <li><strong>Sedation and drowsiness</strong></li>
  <li><strong>Respiratory depression</strong>, meaning breathing becomes slow or shallow</li>
  <li><strong>Physical dependence</strong>, meaning the body adapts and may need the substance to function normally</li>
  <li><strong>Withdrawal symptoms</strong> similar to those of other opioids when use stops</li>
</ul>
<p>Florida health officials have also linked concentrated 7-OH products to seizures (Florida Attorney General, 2026).</p>

<h2>How Long Does 7-OH Last?</h2>
<p>In human studies, 7-OH blood levels peaked about one to two hours after a dose, and its half-life, the time it takes for the amount in the blood to drop by half, ranged from roughly two to six hours depending on the study, getting longer at higher doses (Reissig et al., 2025). Research on concentrated 7-OH products specifically is still limited, and how long the effects last in practice may depend on the product, the amount taken, how often it is used, and individual health factors (NIDA, 2026).</p>
<figure><img src="/images/blog/infographics/7oh-blood-level-timeline.svg" width="1200" height="420" loading="lazy" alt="Timeline showing 7-OH blood levels peaking about one to two hours after a dose, then declining with a half-life of roughly two to six hours, with the half-life increasing at higher doses." /></figure>

<h2>7-OH’s Legal Status: Federal and Florida</h2>
<p>Federally, 7-OH is not yet scheduled. In July 2026, the Drug Enforcement Administration (DEA) proposed temporarily placing 7-OH above a set concentration threshold into Schedule I, the same category as heroin, and extended the public comment period to September 10, 2026. That proposal has not been finalized. The DEA did finalize Schedule I status for three related kratom-derived compounds, mitragynine pseudoindoxyl, MGM-15, and MGM-16, effective August 26, 2026. Both the pending federal proposal and the compounds already scheduled exclude the kratom plant itself below a set 7-OH concentration threshold (CRS, 2026).</p>
<p>Florida has moved faster. In an emergency rule signed June 22, 2026, the state placed concentrated 7-OH and related compounds in Schedule I, enabling felony-level enforcement against manufacturers and sellers, and state health officials linked the products to addiction, overdose, and seizures (Florida Attorney General, 2026).</p>
<figure><img src="/images/blog/infographics/7oh-legal-status-federal-florida.svg" width="1200" height="460" loading="lazy" alt="Comparison showing Florida has placed concentrated 7-OH in Schedule I since June 22, 2026, while federal scheduling of 7-OH itself remains proposed and not finalized as of October 2026, with three related compounds already in Schedule I since August 26, 2026, and natural kratom leaf excluded from both." /></figure>

<h2>What to Do If a Family Member Is Using 7-OH</h2>
<ul>
  <li><strong>Talk to a doctor before stopping.</strong> Because 7-OH can cause physical dependence, stopping suddenly may lead to opioid-like withdrawal symptoms (Reissig et al., 2025). A doctor can help plan next steps.</li>
  <li><strong>Ask about a full assessment.</strong> There are no treatments approved specifically for kratom-related withdrawal, and research is ongoing (NIDA, 2026). A treatment provider can review the person’s history and recommend a level of care.</li>
  <li><strong>Start with a calm conversation.</strong> Many 7-OH products are marketed as kratom (FDA, 2025), so the person using them may not know they are taking an opioid. Focusing on what the product actually is, rather than assumptions about why it is being used, can make it easier to talk about help.</li>
  <li><strong>Know who to call.</strong> If someone is unresponsive, call 911. For questions about a possible reaction, the FDA directs people to the <a href="https://poisonhelp.hrsa.gov" rel="nofollow noopener">Poison Help Line</a> at 1-800-222-1222.</li>
</ul>

<h2>Is 7-OH Safe Because It Is Sold in Stores?</h2>
<p>No. Being sold in a store does not mean a product has been reviewed for safety. The FDA states that kratom, mitragynine, and 7-OH are not lawful as dietary supplements or food ingredients, and there are no FDA-approved drugs that contain them (Reissig et al., 2025).</p>

<h2>Can 7-OH Help With Opioid Withdrawal or Pain?</h2>
<p>No. The FDA states that kratom-related products, including 7-OH, are not safe or approved treatments for opioid withdrawal, chronic pain, depression, or anxiety (FDA, 2025).</p>
<p>If 7-OH is being used for any of these reasons, a doctor can discuss alternative approved options, including treatment for the <a href="/what-we-treat/dual-diagnosis/">anxiety or depression</a> it may be masking.</p>

<h2>Can You Overdose on 7-OH?</h2>
<p>Yes. 7-OH can cause respiratory depression, and at higher doses, breathing can slow enough that the brain and body do not get enough oxygen (Reissig et al., 2025). Families have reported dependence, withdrawal, overdose, and death involving 7-OH products (FDA, 2025).</p>

<h2>How Sunview Wellness Treats Opioid Use, Including 7-OH</h2>
<p>At Sunview Wellness, care fits into daily life. Clients keep their jobs, stay in school, and live at home while receiving clinical treatment through our <a href="/programs/php/">Partial Hospitalization (PHP)</a>, <a href="/programs/iop/">Intensive Outpatient (IOP)</a>, and <a href="/programs/outpatient/">Outpatient Programming (OP)</a> levels of care.</p>
<p>Whether opioid use started with a prescription or a store-bought product sold as kratom, our <a href="/what-we-treat/substance-use/opioids/">opioid treatment program</a> usually begins after medically supervised detox, with coordination with an outside MAT prescriber when that applies, and it addresses the anxiety, depression, and trauma that so often sit underneath the use.</p>
<p>We’re in network with most major insurance carriers, including Florida Medicaid plans. Our <a href="/admissions/insurance/">admissions team can verify your benefits</a>, schedule an assessment, and explain your options.</p>
<p><a href="/admissions/"><strong>Speak With Admissions</strong></a></p>

<h2>Key Takeaways</h2>
<ul>
  <li>7-OH (7-hydroxymitragynine) is an opioid. It activates the same brain receptors as morphine and oxycodone, even when it is sold as kratom.</li>
  <li>Natural kratom leaf contains only small amounts of 7-OH. Concentrated products are likely made in a lab and can have much stronger opioid effects.</li>
  <li>Effects can include euphoria, sedation, respiratory depression, physical dependence, and withdrawal, and officials have linked concentrated products to seizures.</li>
  <li>As of October 2026, 7-OH itself is not yet federally scheduled, though three related compounds already are. Concentrated 7-OH is already a Schedule I substance in Florida.</li>
  <li>Stopping 7-OH suddenly may cause withdrawal, so it is best to talk to a doctor first.</li>
</ul>

<h2>Outpatient Opioid and 7-OH Treatment in West Palm Beach</h2>
<p>Sunview Wellness is a Joint Commission accredited outpatient drug rehab in West Palm Beach serving adults 18 and older. Our programs treat substance use disorders involving opioids, alcohol, stimulants, and polysubstance patterns, alongside the anxiety, depression, and trauma that so often exist underneath the substance use.</p>
<p>Our PhD-led clinical team brings more than 50 years of combined experience and works psychodynamically, using <a href="/therapies/inner-child-therapy/">Inner Child Therapy</a> as an integrative modality to address the shame, inadequacy, and fear underneath substance use. We also offer free transportation to treatment.</p>
<p><strong>Call <a href="${SITE.phoneHref}">${SITE.phone}</a></strong></p>
`,
    sources: [
      { label: 'Office of the Attorney General of Florida. (2026, June 22). Attorney General James Uthmeier Signs Emergency Rule Immediately Scheduling Dangerous 7-OH and Related Compounds as Schedule I Controlled Substances. News Releases. Office of the Attorney General, State of Florida.', url: 'https://www.myfloridalegal.com/newsrelease/attorney-general-james-uthmeier-signs-emergency-rule-immediately-scheduling-dangerous-7' },
      { label: 'Reissig, C. J., et al. (2025). 7-Hydroxymitragynine (7-OH): An Assessment of the Scientific Data and Toxicological Concerns Around an Emerging Opioid Threat. FDA Center for Drug Evaluation and Research. U.S. Food and Drug Administration.', url: 'https://www.fda.gov/media/187899/download' },
      { label: 'National Institute on Drug Abuse. (2026). Kratom. Research Topics. National Institute on Drug Abuse.', url: 'https://nida.nih.gov/research-topics/kratom' },
      { label: 'U.S. Food and Drug Administration. (2025). Preventing the Next Wave of the Opioid Epidemic: What You Need to Know About 7-OH. Consumer Guide. U.S. Food and Drug Administration.', url: 'https://www.fda.gov/media/187913/download' },
      { label: 'Congressional Research Service. (2026, October 6). Temporary Control of 7-Hydroxymitragynine (7-OH) and Other Kratom-Related Substances Under the Controlled Substances Act. Legal Sidebar, No. LSB11457. Library of Congress.', url: 'https://www.congress.gov/crs-product/LSB11457' },
      { label: 'U.S. Food and Drug Administration. (2026, July 13). Hiding in Plain Sight: 7-OH Products. Public Health Focus. U.S. Food and Drug Administration.', url: 'https://www.fda.gov/news-events/public-health-focus/hiding-plain-sight-7-oh-products' },
    ],
  },
  {
    slug: 'what-is-a-functional-alcoholic',
    type: 'article',
    title: "What Is a Functional Alcoholic? When the Job Is Fine but the Drinking Isn't",
    seoTitle: 'What Is a Functional Alcoholic? Signs of AUD', // <title> only (≤60, answer 9.1)
    dek: "A steady job doesn't mean drinking is under control. The signs of alcohol use disorder, what counts as heavy drinking, and how to raise it with someone you love.",
    metaDescription: "A steady job doesn't rule out alcohol use disorder. Learn the signs of a \"functional alcoholic,\" how much drinking counts as heavy, and how to help.",
    date: '2026-10-27',
    author: 'tyler-shoens', // slug in src/data/team.js — named as the article's author in the docx brief
    category: 'Substance Use',
    // Tyler Shoens' clinical article, verbatim structure and claims; docx citation markers ([1]…[6]) converted to
    // the site's (Author, Year) in-text style (matches is-alcohol-a-depressant/what-is-molly-mdma), hyperlinks
    // moved to the Sources list only. All 6 NIAAA citations fetch-verified against their exact claims (28M/AUD and
    // <1-in-10-treated stats, the 11-criteria mild/moderate/severe cutoffs, the 8/week and 15/week heavy-drinking
    // thresholds, the body-system effects including the 5-15% breast cancer figure, and the two Alcohol Treatment
    // Navigator pages on talking to a loved one and levels of care) — no mismatches found. The docx's own interlink
    // (sunviewwellness.com/outpatient-rehab-west-palm-beach/) 301-redirects to /programs/outpatient/ on this site,
    // so it's linked directly instead; its phone line doesn't match SITE and is replaced throughout. The MAT mention
    // is phrased as coordination with an outside prescriber (/programs/psychiatry-medication-management/), not
    // in-house administration, matching that page's own framing. The docx's mid-article "Verify Insurance
    // Coverage"/"Speak With Admissions" callout is folded into the closing "How Sunview Wellness Treats" section,
    // where every other post's insurance/admissions CTA lives, rather than left as a one-off mid-body block.
    body: `
<p>A steady job does not always mean drinking is under control. "Functional alcoholic" is an informal term for a person who drinks heavily while maintaining work, financial, and family responsibilities. It is not a medical diagnosis, and health care providers use the term alcohol use disorder (AUD) instead. In 2024, about 28 million people in the U.S. had AUD, and fewer than 1 in 10 of them received treatment (National Institute on Alcohol Abuse and Alcoholism [NIAAA], 2026a).</p>
<p>Holiday parties and family gatherings can make heavy drinking harder to recognize, and drinking every night can add up without any single occasion looking excessive. Here is what "functional alcoholism" is, its signs, what daily drinking does to the body, how to approach a loved one, and how treatment can fit around work.</p>

<h2>What Is a "Functional Alcoholic"?</h2>
<p>A "functional alcoholic," sometimes called a "high-functioning alcoholic," is someone whose drinking may meet the criteria for AUD even though their life looks stable, including their ability to maintain or excel at work. A person with AUD has difficulty controlling or stopping their drinking despite negative effects on their health, work, or relationships (NIAAA, 2025a).</p>
<p>AUD is classified as mild, moderate, or severe based on how many of 11 criteria a person has shown within a 12-month period: 2 to 3 criteria indicates mild AUD, 4 to 5 indicates moderate, and 6 or more indicates severe (NIAAA, 2025a).</p>
<p>Work-related problems are only one of the 11 criteria (NIAAA, 2025a). Someone may meet several of the others while still performing well at their job, so a strong work record alone doesn't rule out a drinking problem.</p>

<h2>Why Does "Functional Alcoholism" Often Go Unnoticed?</h2>
<p>Drinking is socially accepted at many work and family events, especially during the holidays. Over time, a person may also develop alcohol tolerance, meaning their usual number of drinks has less effect than it once did (NIAAA, 2025a). As a result, someone may drink more than those around them without appearing intoxicated.</p>

<h2>Signs of a "Functional Alcoholic"</h2>
<p>Several of the 11 AUD criteria have nothing to do with work performance (NIAAA, 2025a):</p>
<figure><img src="/images/blog/infographics/functional-alcoholic-signs-checklist.svg" width="1200" height="600" loading="lazy" alt="Seven signs that may point to alcohol use disorder: drinking more, or for longer, than intended; wanting to cut down or stop without success; strong cravings for alcohol; giving up or reducing meaningful activities; continuing despite trouble with family, mood, or memory; needing more alcohol to feel the same effect (tolerance); and withdrawal symptoms as alcohol wears off. 2 to 3 signs indicates mild AUD, 4 to 5 moderate, 6 or more severe." /></figure>
<p>Any of these may be a reason for concern. People with severe AUD need medical help to stop drinking safely, because withdrawal after a long period of heavy drinking can be life-threatening (NIAAA, 2025a). Anyone who plans to stop should talk with a doctor first.</p>

<h2>How Much Drinking Is Considered Heavy?</h2>
<p>NIAAA defines heavy drinking as 4 or more drinks on any day or 8 or more drinks per week for women, and 5 or more drinks on any day or 15 or more drinks per week for men (NIAAA, 2026b).</p>
<figure><img src="/images/blog/infographics/functional-alcoholic-heavy-drinking-scale.svg" width="1200" height="560" loading="lazy" alt="Scale from 0 to 16 drinks per week. Women reach the heavy-drinking threshold at 8 drinks per week; men reach it at 15. Two standard drinks every night adds up to 14 drinks a week, shown with a reference line: above the threshold for women and just under it for men, even though no single night looks excessive." /></figure>
<p>Drinking every night can reach these levels even when no single occasion seems excessive. Two standard drinks a night adds up to 14 drinks a week, above the heavy-drinking level for women and approaching it for men (NIAAA, 2026b).</p>

<h2>What Happens When You Drink Alcohol Every Day?</h2>
<p>Alcohol can affect nearly every part of the body (NIAAA, 2025b).</p>
<figure><img src="/images/blog/infographics/functional-alcoholic-body-effects.svg" width="1200" height="600" loading="lazy" alt="Five effects of regular heavy drinking: brain and mood, where alcohol interferes with communication pathways and can change mood and behavior; heart, where misuse can raise blood pressure and weaken the heart muscle over time; liver, where heavy drinking can cause inflammation, scarring, and cirrhosis; immune system, where heavy drinking can weaken the body's ability to fight infections; and cancer risk, where even one daily drink can raise a woman's breast cancer risk by 5% to 15%." /></figure>
<p>Repeated heavy alcohol use can also cause lasting changes in the brain that contribute to AUD and make relapse more likely during recovery (NIAAA, 2025a).</p>

<h2>Living With a "Functional Alcoholic"</h2>
<p>For a spouse or partner, a steady paycheck can make concerns about drinking harder to raise. Their loved one may point to their job performance as a sign that nothing is wrong.</p>
<p>When talking with a loved one about their drinking, these approaches may help (NIAAA Alcohol Treatment Navigator, 2020):</p>
<ul>
  <li><strong>Plan what you will say.</strong> Preparing ahead of time can help you stay focused if the conversation becomes emotional.</li>
  <li><strong>Choose the right time.</strong> Wait until your loved one is sober and the setting is calm. A holiday dinner is probably not the best time.</li>
  <li><strong>Stay calm and supportive.</strong> A nonjudgmental tone may lead to a more productive conversation.</li>
  <li><strong>Talk one-on-one.</strong> Your loved one is more likely to listen when they feel supported; a group confrontation can make them feel cornered.</li>
  <li><strong>Stick to the facts.</strong> AUD is a medical condition, not a lack of willpower, and there are treatments that work.</li>
</ul>
<p>If your loved one turns down every option at first, giving them time may help. If your loved one is in crisis, call 911 (NIAAA Alcohol Treatment Navigator, 2020). Take care of yourself too — a <a href="/admissions/for-families/">family support program</a> can help you navigate the impact of a loved one's drinking.</p>

<h2>Treatment for "Functional Alcoholism" While You Keep Working</h2>
<p>Care for AUD is offered at different levels of intensity, including outpatient care, intensive outpatient or partial hospitalization, and more intensive settings for severe cases (NIAAA Alcohol Treatment Navigator, 2023). A full assessment helps determine which level fits a person's needs, and many outpatient options allow people to keep their regular routines and their privacy (NIAAA Alcohol Treatment Navigator, 2023).</p>
<p>Treatment often includes talk therapy in one-on-one, group, or family sessions (NIAAA Alcohol Treatment Navigator, 2023). The FDA has also approved three nonaddictive medications to help people stop or reduce drinking (NIAAA, 2025a). A doctor can help decide whether <a href="/programs/psychiatry-medication-management/">medication-assisted treatment</a>, coordinated with an outside prescriber, is a good fit.</p>

<h2>How Sunview Wellness Treats Functional Alcoholism</h2>
<p>At Sunview Wellness, recovery happens inside a real life. Our <a href="/what-we-treat/substance-use/alcohol/">alcohol use disorder program</a> lets people keep working and living at home during care, with no sober living funnel and no long-term housing commitment. Door-to-door transportation is provided at no cost so attending treatment stays realistic.</p>
<p>Care is delivered at three levels: <a href="/programs/php/">Partial Hospitalization (PHP)</a>, <a href="/programs/iop/">Intensive Outpatient (IOP)</a>, and <a href="/programs/outpatient/">Outpatient Programming (OP)</a>. Our <a href="/programs/evening-iop/">evening IOP</a> meets 3 evenings a week after work, and our outpatient program meets 1 morning a week when a less intensive level of care is the right fit. Spouses and family members can take part in treatment, too.</p>
<p>We're in network with most major insurance carriers, including Florida Medicaid plans. Our <a href="/admissions/insurance/">admissions team can verify your benefits</a>, schedule an assessment, and explain your options.</p>
<p><a href="/admissions/"><strong>Speak With Admissions</strong></a></p>

<h2>Key Takeaways</h2>
<ul>
  <li>"Functional alcoholic" is not a diagnosis. The clinical term is alcohol use disorder, which can be mild, moderate, or severe.</li>
  <li>Holding down a job does not rule out AUD. Work problems are only 1 of 11 criteria, and a person can meet several others without experiencing trouble at work.</li>
  <li>Heavy drinking means 8 or more drinks a week for women and 15 or more for men. Two drinks every night adds up to 14 drinks a week.</li>
  <li>Fewer than 1 in 10 people with AUD received treatment in 2024. Outpatient care can let a person keep working while in treatment.</li>
</ul>

<h2>Evening and Outpatient Alcohol Treatment in West Palm Beach</h2>
<p>Sunview Wellness is a Joint Commission accredited outpatient program in West Palm Beach, serving adults 18 and older. Treatment can be scheduled around the workday, and our programs treat alcohol use disorder alongside the depression, anxiety, and trauma that so often sit underneath the drinking.</p>
<p>Our PhD-led clinical team brings more than 50 years of combined experience and works psychodynamically, using <a href="/therapies/inner-child-therapy/">Inner Child Therapy</a> to address the shame, inadequacy, and fear underneath the drinking.</p>
<p><strong>Call <a href="${SITE.phoneHref}">${SITE.phone}</a></strong></p>
`,
    sources: [
      { label: 'National Institute on Alcohol Abuse and Alcoholism. (2026a). Alcohol Treatment in the United States. Alcohol Facts and Statistics. National Institute on Alcohol Abuse and Alcoholism.', url: 'https://www.niaaa.nih.gov/alcohols-effects-health/alcohol-topics-z/alcohol-facts-and-statistics/alcohol-treatment-united-states' },
      { label: 'National Institute on Alcohol Abuse and Alcoholism. (2025a). Understanding Alcohol Use Disorder. Brochures and Fact Sheets. National Institute on Alcohol Abuse and Alcoholism.', url: 'https://www.niaaa.nih.gov/publications/brochures-and-fact-sheets/understanding-alcohol-use-disorder' },
      { label: "National Institute on Alcohol Abuse and Alcoholism. (2026b). Understanding Alcohol Drinking Patterns. Alcohol's Effects on Health. National Institute on Alcohol Abuse and Alcoholism.", url: 'https://www.niaaa.nih.gov/alcohol-health/overview-alcohol-consumption/moderate-binge-drinking' },
      { label: "National Institute on Alcohol Abuse and Alcoholism. (2025b). Alcohol's Effects on the Body. Alcohol's Effects on Health. National Institute on Alcohol Abuse and Alcoholism.", url: 'https://www.niaaa.nih.gov/alcohols-effects-health/alcohols-effects-body' },
      { label: 'NIAAA Alcohol Treatment Navigator. (2020). Starting the Conversation. National Institute on Alcohol Abuse and Alcoholism.', url: 'https://alcoholtreatment.niaaa.nih.gov/support-through-the-process/starting-the-conversation' },
      { label: 'NIAAA Alcohol Treatment Navigator. (2023). What Types of Alcohol Treatment Are Available? National Institute on Alcohol Abuse and Alcoholism.', url: 'https://alcoholtreatment.niaaa.nih.gov/what-to-know/types-of-alcohol-treatment' },
    ],
  },
  {
    slug: 'cptsd-symptoms-in-adults',
    type: 'article',
    title: 'CPTSD Symptoms: What Complex Trauma Looks Like in Adults',
    dek: 'CPTSD, or complex post-traumatic stress disorder, includes the symptoms of PTSD plus difficulty managing emotions, persistent feelings of worthlessness, and challenges trusting others. Here is how it differs from PTSD, which symptoms get missed, and how Sunview Wellness can help.',
    metaDescription: 'CPTSD includes PTSD symptoms plus difficulty managing emotions and trusting others. Learn how it differs from PTSD and how Sunview Wellness can help.', // 151 chars
    date: '2026-11-02',
    author: 'dana-martin', // slug in src/data/team.js — prescribed as the article's clinical author, matching precedent
    category: 'Mental Health',
    // Docx citation markers [1]-[5] converted to the site's (Author, Year) in-text style. Fetch-verified all 5
    // sources against the specific claim each supports:
    // [1] National Center for PTSD's "Complex PTSD" page (ptsd.va.gov/understand/what/complex_ptsd.asp, last
    //   updated October 2026) confirms the ICD-11 (2022) vs. DSM-5-TR diagnostic split, the four added symptom
    //   domains (emotion regulation, self-perception, relationships, dissociation), and that any trauma type —
    //   not only prolonged childhood trauma — can produce CPTSD symptoms.
    // [2] NIMH's PTSD brochure (23-MH-8124) confirms the four symptom clusters, the one-month duration criterion,
    //   and trouble remembering key parts of the event as a named diagnostic symptom (not just a general effect).
    // [3] National Center for PTSD's "Common Reactions After Trauma" page confirms the physical reaction list
    //   (pounding heart, rapid breathing, shakiness, stomach upset, appetite change, sleep trouble, fatigue,
    //   headaches) and the relationship reactions (trust, withdrawal, wanting to control everything) verbatim.
    // [4] Swedo et al. (2023), MMWR 72(26): exact figures confirmed at 63.9% of U.S. adults with at least one ACE
    //   (brief's "nearly two thirds") and 17.3% with four or more (brief's "approximately 1 in 6"; true ratio is
    //   closer to 1 in 6 than 1 in 5, so kept as the brief had it, written out as "about 17%, or roughly 1 in 6").
    // [5] The brief's "Norman et al. 2025. Treatment of Co-Occurring PTSD and Substance Use Disorder in VA" is
    //   ptsd.va.gov/professional/treat/cooccurring/tx_sud_va.asp (title is actually "...in Veterans Affairs"),
    //   authored by Sonya Norman, PhD, Terrell Hicks, PhD, Alexandra Klein, PhD, and Jessica Hamblen, PhD, last
    //   updated Oct. 15, 2025. Confirms 44.6% of people with lifetime PTSD also meet criteria for AUD/SUD (brief's
    //   "about 45%"), the added medical/legal/financial/social burden, that trauma-focused treatment does not
    //   require abstinence first, and that integrated treatment of both conditions shows the greatest benefit.
    //   (A separate, veteran-specific VA patient flyer gives a different, non-matching 27% figure for Veterans in
    //   VA care already diagnosed with PTSD who also have SUD — not used here, since the brief's claim and this
    //   article are about the general population, not a VA treatment-seeking sample.)
    // Compliance: the docx's closing line "we accept Medicaid" is replaced with the site's standard insurance
    // sentence (admissions team verifies benefits; no blanket "we accept" claim). Phone pulled from SITE, never
    // hardcoded. No standalone /therapies/psychodrama/ page exists on this site (per src/data/therapies.js,
    // psychodrama lives inside /therapies/group-therapy/), so that mention links there instead of 404ing.
    // Interlinks: /what-we-treat/mental-health/trauma-ptsd/ (the site's dedicated trauma/PTSD page), the PHP/IOP/
    // outpatient program pages, /programs/psychiatry-medication-management/, /therapies/internal-family-systems/,
    // /therapies/dbt/, /therapies/cbt/, /therapies/group-therapy/, /what-we-treat/dual-diagnosis/, and
    // /admissions/insurance/.
    body: `
<p>CPTSD stands for complex post-traumatic stress disorder. The term describes the effects of prolonged trauma, often beginning in childhood, and involving harm from someone a person trusted. Complex PTSD includes the symptoms of post-traumatic stress disorder (PTSD), along with changes in how a person manages emotions, views themselves, and relates to others (National Center for PTSD, 2026a).</p>
<p>This article explores CPTSD symptoms in adults, how CPTSD differs from PTSD, symptoms that are easy to miss, and why trauma and substance use so often occur together.</p>

<h2>CPTSD Symptoms in Adults</h2>
<p>Complex PTSD (CPTSD) includes the core symptoms of PTSD, plus several others (National Center for PTSD, 2026a). The lists below separate the two. Only a mental health professional can determine whether symptoms meet the criteria for either condition (NIMH, 2023).</p>

<h3>Symptoms of Both PTSD and CPTSD</h3>
<ul>
  <li><strong>Reliving the event:</strong> Experiencing flashbacks, distressing memories, or nightmares, sometimes with physical reactions such as a racing heart or sweating.</li>
  <li><strong>Avoidance:</strong> Avoiding people, places, objects, activities, or situations that serve as reminders of the trauma.</li>
  <li><strong>Anxiety:</strong> Feeling on edge, being easily startled, trouble sleeping, difficulty concentrating, and increased irritability.</li>
  <li><strong>Negative thoughts and feelings:</strong> Blaming yourself or others, persistent fear, feelings of guilt or shame, and withdrawal from previously enjoyed activities (NIMH, 2023).</li>
</ul>

<h3>Symptoms That Set CPTSD Apart</h3>
<ul>
  <li><strong>Difficulty managing emotions:</strong> Feeling overwhelmed by intense emotions or struggling to regulate emotional responses.</li>
  <li><strong>Negative self-perception:</strong> Persistent feelings of worthlessness, shame, or failure.</li>
  <li><strong>Relationship difficulties:</strong> Struggling to trust others, withdrawing from relationships, or feeling emotionally distant.</li>
  <li><strong>Disconnection or dissociation:</strong> Feeling detached from yourself or your surroundings, or having difficulty staying present (National Center for PTSD, 2026a).</li>
</ul>
<p>PTSD is diagnosed when symptoms persist for more than a month and affect daily life, work, and relationships (NIMH, 2023). If you are having thoughts of suicide, call or text the 988 Suicide and Crisis Lifeline at 988. In a life-threatening emergency, call 911.</p>
<figure><img src="/images/blog/infographics/cptsd-vs-ptsd-symptoms.svg" width="1200" height="480" loading="lazy" alt="Comparison of symptoms shared by PTSD and CPTSD (reliving the event, avoidance, anxiety, negative thoughts and feelings) against the four symptoms that set CPTSD apart: difficulty managing emotions, negative self-perception, relationship difficulties, and dissociation." /></figure>

<h2>CPTSD vs. PTSD: What Is the Difference?</h2>
<p>PTSD and CPTSD both develop after trauma and share the same core symptoms: reliving the trauma, avoiding reminders of it, and feeling constantly on guard.</p>

<h3>What Is CPTSD?</h3>
<p>CPTSD is an acronym for complex post-traumatic stress disorder, also sometimes called C-PTSD. "Complex" denotes the recurrent, personal nature of the trauma and the broader array of symptoms that can result from it (National Center for PTSD, 2026a).</p>

<h3>Is CPTSD an Official Diagnosis?</h3>
<p>Complex PTSD was recognized as a separate diagnosis in the World Health Organization's International Classification of Diseases in 2022 (ICD-11). The American Psychiatric Association's Diagnostic and Statistical Manual of Mental Disorders (DSM-5-TR), commonly used in the United States, does not list CPTSD as a separate diagnosis. Instead, some symptoms associated with CPTSD may be captured under a PTSD diagnosis or other diagnoses (National Center for PTSD, 2026a).</p>

<h3>What Kind of Trauma Leads to CPTSD?</h3>
<p>CPTSD is often associated with prolonged or repeated trauma, particularly experiences involving interpersonal harm, such as childhood abuse, neglect, or abuse by someone a person depended on. This is not always the case, though. People respond to trauma differently: one person may experience childhood abuse and have few lasting symptoms, while another person may have lasting effects on their well-being and relationships after a single traumatic event (National Center for PTSD, 2026a).</p>
<p>Difficult childhood experiences are common. In an analysis of U.S. adults, nearly two thirds reported at least one adverse childhood experience, such as abuse, neglect, or exposure to violence before age 18, and about 17%, or roughly 1 in 6, reported four or more (Swedo et al., 2023). These experiences can contribute to health and mental health challenges, but they do not mean someone will develop CPTSD.</p>
<figure><img src="/images/blog/infographics/cptsd-ace-prevalence.svg" width="1200" height="420" loading="lazy" alt="Nearly two thirds of U.S. adults, 63.9%, report at least one adverse childhood experience, and about 17%, roughly 1 in 6, report four or more, though having ACEs does not mean someone will develop CPTSD." /></figure>

<h2>Trauma Symptoms That Are Easy to Miss</h2>
<p>Some symptoms of trauma do not look like flashbacks. They may be mistaken for everyday stress, a medical problem, or a personality trait.</p>

<h3>Can Trauma Cause Memory Loss?</h3>
<p>Trauma can affect memory. Trouble remembering key parts of the traumatic event is a recognized symptom of PTSD (NIMH, 2023). Some people with complex trauma may also experience dissociation, which can make it hard to stay in the present moment because they feel disconnected from themselves and their surroundings, even after the traumatic event (National Center for PTSD, 2026a). If memory gaps or periods of feeling disconnected are affecting your daily life, bring them up with a health care provider.</p>

<h3>What Is a Common Physical Reaction to Trauma?</h3>
<p>Trauma can affect the body as well as the mind. Common physical reactions include a pounding heart, rapid breathing, and shakiness, along with stomach upset, changes in appetite, difficulty sleeping, and persistent fatigue. Some people get severe headaches when they think about the event, and existing medical problems can get worse (National Center for PTSD, 2026b).</p>

<h3>Why Does Trauma Make Relationships Harder?</h3>
<p>Because complex trauma often includes being harmed, hurt, or betrayed, it can make it difficult for a person to trust and feel safe with others and have healthy relationships. The person may pull away from relationships, avoid contact, or try to control everything themselves (National Center for PTSD, 2026a, 2026b).</p>

<h2>Trauma and Substance Use: Why People Self-Medicate</h2>
<p>People with trauma may turn to alcohol or drugs to try to numb the memories and manage the associated thoughts and feelings. Substance use may offer temporary relief from suffering, but it can also create further problems (National Center for PTSD, 2026b).</p>
<p>PTSD and substance use disorders (SUDs), which involve ongoing problems with alcohol or drug use, often occur together. In a large national study, about 45% of people who had PTSD at some point in their lives also met the criteria for an alcohol or other substance use disorder. On average, people living with both conditions face more medical, legal, financial, and social challenges than people living with either condition alone (Norman et al., 2025).</p>
<figure><img src="/images/blog/infographics/cptsd-ptsd-sud-cooccurrence.svg" width="1200" height="440" loading="lazy" alt="About 45% of people with lifetime PTSD also meet criteria for an alcohol or other substance use disorder, and integrated treatment that addresses both conditions together shows the greatest benefit, without requiring abstinence first." /></figure>

<h2>Treating Trauma and Substance Use Together</h2>
<p>Some treatment approaches have required people to stop using substances before beginning trauma-focused therapy. Research suggests that treatment does not always need to wait until a person achieves abstinence. With appropriate clinical support, people experiencing both PTSD and substance use disorders can benefit from trauma-focused treatment, and integrated approaches that address both conditions at the same time show the greatest benefit (Norman et al., 2025).</p>
<p>At <a href="/what-we-treat/mental-health/trauma-ptsd/">Sunview Wellness, trauma is treated alongside substance use</a>, starting with safety and stability. Therapy may include <a href="/therapies/internal-family-systems/">Internal Family Systems (IFS)</a> to understand protective patterns, <a href="/therapies/dbt/">dialectical behavior therapy (DBT)</a> to build coping skills for managing strong emotions, <a href="/therapies/group-therapy/">psychodrama</a> to work through experiences with guided role-play, and <a href="/therapies/cbt/">cognitive behavioral therapy (CBT)</a> to identify and change unhelpful thoughts.</p>
<p><a href="/programs/psychiatry-medication-management/">Psychiatric evaluation and medication management</a> are part of every program. If substance use brings you to treatment, mention trauma symptoms during your assessment, even if you have not connected the two. A clinician can then plan care that addresses both, which is the focus of our <a href="/what-we-treat/dual-diagnosis/">dual diagnosis treatment</a>.</p>

<h2>Key Takeaways</h2>
<ul>
  <li>CPTSD includes PTSD symptoms along with difficulty managing emotions, feelings of worthlessness, and challenges in relationships.</li>
  <li>The U.S. diagnostic manual (DSM-5-TR) does not recognize CPTSD as a separate diagnosis from PTSD, while the World Health Organization's ICD-11 does.</li>
  <li>Trauma can affect memory and emotional well-being, and it can cause physical reactions such as a racing heart, stomach upset, and poor sleep.</li>
  <li>About 45% of people who have had PTSD also meet the criteria for an alcohol or other substance use disorder.</li>
  <li>Trauma and substance use can be treated at the same time, starting with safety and stability before deeper trauma work.</li>
</ul>

<h2>Trauma and Addiction Treatment in West Palm Beach</h2>
<p>Sunview Wellness is a Joint Commission accredited outpatient drug and alcohol rehab in West Palm Beach, serving adults 18 and older. We treat trauma and PTSD alongside substance use while you continue your daily life through our <a href="/programs/php/">Partial Hospitalization (PHP)</a>, <a href="/programs/iop/">Intensive Outpatient (IOP)</a>, and <a href="/programs/outpatient/">Outpatient Programming (OP)</a> levels of care. You can keep working and living at home during treatment.</p>
<p>We're in network with most major insurance carriers, including Florida Medicaid plans. Our <a href="/admissions/insurance/">admissions team can verify your benefits</a>, schedule an assessment, and explain your options.</p>
<p><strong>Call <a href="${SITE.phoneHref}">${SITE.phone}</a></strong></p>
`,
    sources: [
      { label: 'National Center for PTSD. (2026a). Complex PTSD. PTSD: National Center for PTSD. U.S. Department of Veterans Affairs.', url: 'https://www.ptsd.va.gov/understand/what/complex_ptsd.asp' },
      { label: 'National Institute of Mental Health. (2023). Post-Traumatic Stress Disorder. Brochures and Fact Sheets, No. 23-MH-8124. National Institute of Mental Health.', url: 'https://www.nimh.nih.gov/health/publications/post-traumatic-stress-disorder-ptsd' },
      { label: 'National Center for PTSD. (2026b). Common Reactions After Trauma. PTSD: National Center for PTSD. U.S. Department of Veterans Affairs.', url: 'https://www.ptsd.va.gov/understand/isitptsd/common_reactions.asp' },
      { label: 'Swedo, E. A., Aslam, M. V., Dahlberg, L. L., et al. (2023). Prevalence of Adverse Childhood Experiences Among U.S. Adults — Behavioral Risk Factor Surveillance System, 2011–2020. Morbidity and Mortality Weekly Report, 72(26), 707–715.', url: 'https://www.cdc.gov/mmwr/volumes/72/wr/mm7226a2.htm' },
      { label: 'Norman, S. B., Hicks, T., Klein, A., & Hamblen, J. (2025). Treatment of Co-Occurring PTSD and Substance Use Disorder in Veterans Affairs. PTSD: National Center for PTSD. U.S. Department of Veterans Affairs.', url: 'https://www.ptsd.va.gov/professional/treat/cooccurring/tx_sud_va.asp' },
    ],
  },
  {
    slug: 'physical-signs-of-alcoholism',
    type: 'article',
    title: 'The Physical Signs of Alcoholism You Might Notice Over the Holidays',
    seoTitle: 'Physical Signs of Alcoholism: What to Watch For', // <title> only (≤60, answer 9.1)
    dek: "Facial flushing, stomach trouble, and unexplained bruises can be signs of heavy drinking, but each can have other causes too. Here's what family members might notice over the holidays, which signs need medical care right away, and how to start a caring conversation.",
    metaDescription: 'Facial flushing, stomach trouble, and unexplained bruises can be signs of heavy drinking. Learn what they may mean and how to help a loved one.',
    date: '2026-11-13',
    author: 'dana-martin', // slug in src/data/team.js — named as the article's author in the docx brief
    category: 'Substance Use',
    // Docx citation markers [1]-[6] converted to the site's (Author, Year) in-text style. Fetch-verified all 6
    // sources (via the docx's own hyperlinks, cross-checked against document.xml.rels) against the specific claim
    // each supports:
    // [1] NIAAA's "Understanding Alcohol Use Disorder" confirms the AUD definition (impaired ability to stop or
    //   control drinking despite consequences), the withdrawal symptom list (shakiness, sweating, restlessness,
    //   nausea, trouble sleeping, racing heart), and that withdrawal is potentially life-threatening after
    //   prolonged heavy drinking.
    // [2] MedlinePlus "Skin Blushing/Flushing" lists alcohol as a flushing trigger alongside rosacea, menopause,
    //   fever, exercise, spicy food, and medications.
    // [3] MedlinePlus "Alcoholic Liver Disease" confirms spider angiomas, palmar erythema, leg/abdominal fluid
    //   buildup (edema/ascites), jaundice, GI bleeding (vomiting blood), confusion, fatigue, poor appetite, weight
    //   loss, nausea, abdominal pain, and easy bruising/bleeding from impaired clotting.
    // [4] NIAAA "Aging and Alcohol" confirms unexplained bruises and falls as possible signs of an alcohol problem
    //   in older adults.
    // [5] MedlinePlus "Gastritis" confirms heavy alcohol drinking as a leading cause and the symptom list (loss of
    //   appetite, nausea/vomiting, upper abdominal pain; some people have no symptoms).
    // [6] MedlinePlus "Helping a Loved One With a Drinking Problem" confirms the conversation guidance (sober
    //   timing, specific facts over guesses, "I" statements, dropping labels, no lectures/threats/pleading/
    //   bribing, offering to go with them) and support-seeking (Al-Anon, safety for yourself).
    // Letter suffixes distinguish same-year citations from the same publisher: NIAAA 2025a (Understanding AUD) /
    // 2025b (Aging and Alcohol); MedlinePlus 2025a (flushing) / 2025b (liver disease) / 2025c (gastritis); the
    // 2024 "Helping a Loved One" citation needs no suffix since no other MedlinePlus 2024 source is cited here.
    // Compliance: the docx's closing "we accept Medicaid" blanket claim is replaced with the site's standard
    // insurance sentence (in network with most major carriers including Florida Medicaid plans; admissions
    // verifies benefits), matching is-alcohol-a-depressant and what-is-a-functional-alcoholic. The docx's mid-
    // article "Find Out What Your Loved One's Insurance Covers" CTA is folded into the closing treatment section
    // rather than left as a one-off mid-body block, same precedent as what-is-a-functional-alcoholic. Phone pulled
    // from SITE, never the docx's stale (561) 269-3175. The docx's own interlinks (sunviewwellness.com/what-we-
    // treat/substance-use/alcohol/ and /admissions/for-families/) are kept as-is since both URLs exist on this
    // site unchanged.
    // Interlinks: /what-we-treat/substance-use/alcohol/, /programs/php/, /programs/iop/, /programs/outpatient/,
    // /programs/evening-iop/, /therapies/inner-child-therapy/, /admissions/insurance/, /admissions/,
    // /admissions/for-families/.
    body: `
<p>"Alcoholism" is a common everyday term for what health care providers call alcohol use disorder (AUD). AUD is a medical condition in which a person has trouble controlling or stopping their drinking, even when it leads to problems in their life (NIAAA, 2025a). Some physical signs of heavy drinking, such as facial flushing, stomach trouble, or unexplained bruises, may be noticeable to family members, but the same signs can also have other causes.</p>
<p>Holiday visits may be the first time in months that relatives see each other, which can make changes in a loved one's health more noticeable. This article covers the physical signs of heavy drinking, other possible explanations, symptoms that need immediate medical attention, and how to start a caring conversation about alcohol use.</p>

<h2>Physical Signs of Alcoholism Family Members May Notice</h2>
<p>No single physical sign confirms alcohol use disorder, and many of these symptoms can have other causes. However, recurring signs, multiple symptoms, or a noticeable change in a person's drinking habits may warrant a closer look.</p>
<figure><img src="/images/blog/infographics/physical-signs-of-alcoholism-checklist.svg" width="1200" height="600" loading="lazy" alt="Seven physical signs family members may notice: facial flushing or redness, a puffy or swollen face, unexplained bruises, stomach trouble such as nausea, vomiting, or upper abdominal pain, shaky hands or tremors, changes in appetite, weight, or sleep, and memory problems or less attention to hygiene and appearance. No single sign confirms AUD, and each can have other causes too." /></figure>

<h3>Why Does a Person's Face Turn Red From Drinking?</h3>
<p>Facial flushing is a sudden reddening of the face, neck, or upper chest caused by increased blood flow. Alcohol is one possible trigger, but other causes include rosacea (a long-term skin condition), menopause, fever, exercise, spicy food, and some medications (MedlinePlus, 2025a). A red face after a few drinks at a holiday gathering is not, on its own, a sign of AUD.</p>
<p>Long-term heavy alcohol use can also contribute to visible changes in the skin. Small, red, spider-like blood vessels, known as spider angiomas, may appear in people with alcohol-related liver disease. Redness on the palms of the hands, called palmar erythema, can also occur with liver disease. These findings are not exclusive to alcohol-related conditions, but they may warrant medical evaluation, particularly when accompanied by other symptoms (MedlinePlus, 2025b).</p>

<h3>Can Alcohol Cause a Puffy or Swollen Face?</h3>
<p>Facial puffiness can have many possible causes, including poor sleep and allergies, so it is not a reliable sign of heavy drinking on its own. Swelling in other parts of the body can be a more specific concern. As alcohol-related liver disease progresses, fluid can accumulate in the legs and in the abdomen (MedlinePlus, 2025b). Persistent swelling or an unusually bloated abdomen should be evaluated by a health care provider.</p>

<h3>What Causes Unexplained Bruising in Heavy Drinkers?</h3>
<p>Alcohol affects balance and coordination, which increases the risk of falls. A person who falls or bumps into objects while drinking may have bruises without remembering how they occurred. NIAAA identifies unexplained bruising and falls as possible signs of alcohol-related problems, particularly among older adults (NIAAA, 2025b).</p>
<p>Bruising can also be related to liver damage. As alcohol-related liver disease advances, the liver may become less able to produce the proteins needed for normal blood clotting, making a person more likely to bruise or bleed easily (MedlinePlus, 2025b). Because unexplained bruising has many possible causes, a health care provider can help determine what is behind it.</p>

<h2>What Are the Symptoms of Alcoholic Gastritis?</h2>
<p>Gastritis happens when the lining of the stomach becomes inflamed or swollen, and heavy drinking is one of its most common causes. Some people have no noticeable symptoms, while others may experience loss of appetite, nausea or vomiting, and pain or discomfort in the upper abdomen (MedlinePlus, 2025c).</p>
<p>Early signs of alcohol-related liver disease can also include fatigue, poor appetite, unexplained weight loss, nausea, and abdominal pain (MedlinePlus, 2025b). Persistent changes in appetite, weight, or digestion should be discussed with a health care provider.</p>

<h2>Can Shaky Hands Be a Sign of Alcohol Withdrawal?</h2>
<p>Shaky hands, or tremors, can be a sign of alcohol withdrawal. When a person who drinks heavily reduces or stops drinking, withdrawal symptoms can include shakiness, sweating, restlessness, nausea, difficulty sleeping, and a racing heart (NIAAA, 2025a). Relatives staying in the same home over the holidays may notice these signs more easily than during a brief visit.</p>

<h2>What Other Changes Might Family Members Notice?</h2>
<p>Other changes that may be linked to heavy drinking include unintentional weight loss or a noticeable decrease in appetite, fatigue or low energy, sleeping problems, memory problems or confusion, and less attention to personal hygiene, grooming, or appearance (MedlinePlus, 2025b; NIAAA, 2025b).</p>
<figure><img src="/images/blog/infographics/physical-signs-of-alcoholism-other-causes.svg" width="1200" height="500" loading="lazy" alt="Five possible signs of heavy drinking paired with common non-alcohol explanations: facial flushing can also come from rosacea, menopause, or spicy food; a puffy face can also come from poor sleep or allergies; unexplained bruising can also come from blood thinners or aging skin; stomach trouble can also come from other digestive conditions or stress; and shaky hands can also come from caffeine, anxiety, or low blood sugar." /></figure>

<h2>When a Physical Sign Needs Medical Care Right Away</h2>
<p>Some signs need prompt medical attention, whether or not alcohol is involved. Seek immediate medical attention if a loved one has yellowing of the skin or the whites of the eyes (jaundice), is vomiting blood or material that looks like coffee grounds, has black, tarry stools, shows new confusion or trouble thinking clearly, or has a seizure (NIAAA, 2025a; MedlinePlus, 2025b, 2025c).</p>
<figure><img src="/images/blog/infographics/physical-signs-of-alcoholism-emergency-signs.svg" width="1200" height="460" loading="lazy" alt="Five signs that need medical care right away, whether or not alcohol is involved: yellowing of the skin or the whites of the eyes (jaundice), vomiting blood or material that looks like coffee grounds, black tarry stools, new confusion or trouble thinking clearly, and a seizure." /></figure>
<p>Alcohol withdrawal can be life-threatening, particularly when someone who has been drinking heavily for a prolonged period suddenly stops. People with severe AUD who are physically dependent on alcohol should seek medical help to stop drinking safely (NIAAA, 2025a). If a loved one is in immediate danger, call 911.</p>

<h2>Can You Tell If Someone Has a Drinking Problem by Looking at Them?</h2>
<p>Physical signs may raise concerns about someone's drinking, but they cannot confirm a drinking problem, and there is no single feature that marks someone as an "alcoholic." Signs can include regularly drinking more than intended, struggling to cut back or stop, and experiencing problems at work, at home, or in relationships because of alcohol use (MedlinePlus, 2024).</p>
<p>Only a health care provider can diagnose AUD. For family members, a physical sign is a reason to start a conversation, not proof of a problem.</p>

<h2>How to Start the Conversation About Drinking</h2>
<p>Raising a concern about a loved one's drinking is not easy. These approaches may help the conversation go more smoothly (MedlinePlus, 2024):</p>
<ul>
  <li><strong>Choose a time when they are not drinking.</strong> A calm, private moment may give the conversation a better start than a crowded holiday gathering.</li>
  <li><strong>Describe what you have seen.</strong> Stick to specific facts, such as bruises you noticed or a change in their appetite, rather than guesses about the cause.</li>
  <li><strong>Use "I" statements.</strong> Saying "I am worried about your health" keeps the focus on your concern rather than on blame.</li>
  <li><strong>Leave out labels.</strong> Try not to use words like "alcoholic" during the conversation.</li>
  <li><strong>Avoid lectures, threats, and guilt.</strong> Pleading or bribing is unlikely to help either.</li>
  <li><strong>Offer a next step.</strong> Offer to go with your loved one to see a doctor or an addiction counselor.</li>
</ul>

<h2>What If Your Loved One Is Not Ready to Talk?</h2>
<p>It may take several conversations before a loved one agrees to get help. You cannot force someone into treatment, but you can keep offering support. Family support groups such as Al-Anon, or a counselor who works with alcohol problems, can help you too. If the relationship ever feels unsafe, seek help for yourself right away (MedlinePlus, 2024). A <a href="/admissions/for-families/">family support program</a> can also help you navigate the impact of a loved one's drinking.</p>

<h2>Key Takeaways</h2>
<ul>
  <li>Facial redness, spider-like blood vessels, stomach trouble, unexplained bruises, and shaky hands can be signs of heavy drinking, but each can have other, unrelated causes.</li>
  <li>Heavy drinking is a common cause of gastritis, which can lead to nausea, vomiting, and upper abdominal pain.</li>
  <li>Yellow skin or eyes, vomiting blood, black stools, confusion, or a seizure need medical care right away.</li>
  <li>A conversation may go more smoothly when the person is sober and the focus stays on specific facts and their health.</li>
</ul>

<h2>Outpatient Alcohol Treatment With Family Involvement in West Palm Beach</h2>
<p>Sunview Wellness is a Joint Commission accredited outpatient program, serving adults 18 and older. Our <a href="/what-we-treat/substance-use/alcohol/">alcohol addiction treatment in West Palm Beach</a> is delivered at three levels: <a href="/programs/php/">Partial Hospitalization (PHP)</a>, <a href="/programs/iop/">Intensive Outpatient (IOP)</a>, and <a href="/programs/outpatient/">Outpatient Programming (OP)</a>, including an <a href="/programs/evening-iop/">evening IOP</a> that meets after work. Free door-to-door transportation is provided, so attending treatment stays realistic alongside a job and family life.</p>
<p>With your loved one's consent, their therapist can contact a family member during the first week, and families can stay involved at a pace that fits the person in care. Our PhD-led clinical team uses in-depth, systems-focused psychodynamic interventions, including <a href="/therapies/inner-child-therapy/">Inner Child Therapy</a>, to address the shame, inadequacy, and fear that may be underneath the drinking.</p>
<p>We're in network with most major insurance carriers, including Florida Medicaid plans. Our <a href="/admissions/insurance/">admissions team can verify your benefits</a> at no cost and talk you through the options before you approach your loved one.</p>
<p><a href="/admissions/"><strong>Speak With Admissions</strong></a></p>
<p><strong>Call <a href="${SITE.phoneHref}">${SITE.phone}</a></strong></p>
`,
    sources: [
      { label: 'National Institute on Alcohol Abuse and Alcoholism. (2025a). Understanding Alcohol Use Disorder. Brochures and Fact Sheets. National Institute on Alcohol Abuse and Alcoholism.', url: 'https://www.niaaa.nih.gov/publications/brochures-and-fact-sheets/understanding-alcohol-use-disorder' },
      { label: "National Institute on Alcohol Abuse and Alcoholism. (2025b). Aging and Alcohol. Alcohol's Effects on Health. National Institute on Alcohol Abuse and Alcoholism.", url: 'https://www.niaaa.nih.gov/alcohols-effects-health/aging-and-alcohol' },
      { label: 'MedlinePlus Medical Encyclopedia. (2025a). Skin Blushing/Flushing. National Library of Medicine.', url: 'https://medlineplus.gov/ency/article/003241.htm' },
      { label: 'MedlinePlus Medical Encyclopedia. (2025b). Alcoholic Liver Disease. National Library of Medicine.', url: 'https://medlineplus.gov/ency/article/000281.htm' },
      { label: 'MedlinePlus Medical Encyclopedia. (2025c). Gastritis. National Library of Medicine.', url: 'https://medlineplus.gov/ency/article/001150.htm' },
      { label: 'MedlinePlus Medical Encyclopedia. (2024). Helping a Loved One With a Drinking Problem. National Library of Medicine.', url: 'https://medlineplus.gov/ency/patientinstructions/000815.htm' },
    ],
  },
  {
    slug: 'codependent-meaning',
    type: 'article',
    title: 'Codependent Meaning: What It Looks Like When You Love Someone Who Drinks or Uses',
    seoTitle: 'Codependent Meaning: When You Love Someone Who Uses', // <title> only (≤60, answer 9.1)
    dek: "Covering for a loved one who drinks or uses can feel like helping. Learn the signs of codependency and how enabling differs from support that helps.",
    metaDescription: 'Covering for a loved one who drinks or uses can feel like helping. Learn the signs of codependency and how enabling differs from helping.',
    date: '2026-11-18',
    author: 'tyler-shoens', // slug in src/data/team.js — named as the article's author in the docx brief
    category: 'Substance Use',
    // Docx citation markers [1]-[6] converted to the site's (Author, Year) in-text style, mapped from the docx's
    // own hyperlinks (document.xml.rels), not guessed from the Sources list order. Three SAMHSA TIP 39 chapters
    // all publish in 2020, so they take letter suffixes in Sources-list order: Ch. 2 "Influence of Substance
    // Misuse on Families" = 2020a, Ch. 3 "Family Counseling Approaches" = 2020b, Ch. 1 "Working With Families" =
    // 2020c. The MedlinePlus "Helping a Loved One With a Drinking Problem" page fetch-verified at a 7/5/2026
    // review date, so it's cited as (MedlinePlus, 2026) here — not the 2024 date the earlier
    // physical-signs-of-alcoholism post used for the same URL, which is now stale.
    // Compliance: the docx's closing "we are in network with most major insurance plans, including Medicaid"
    // blanket claim is replaced with the site's standard sentence (in network with most major carriers including
    // Florida Medicaid plans; admissions verifies benefits at no cost), matching what-is-a-functional-alcoholic
    // and physical-signs-of-alcoholism. The docx's standalone mid-article "Verify Your Insurance" CTA block is
    // folded into the closing section instead of left as a one-off mid-body block, same precedent. Phone pulled
    // from SITE, never the docx's stale (561) 269-3175.
    // Interlinks: /blog/what-is-a-functional-alcoholic/, /programs/php/, /programs/iop/, /programs/outpatient/,
    // /programs/evening-iop/, /therapies/family-therapy/, /therapies/inner-child-therapy/,
    // /admissions/for-families/, /admissions/insurance/, /admissions/.
    body: `
<p>Codependency is a relationship pattern in which a person becomes so focused on another person's problems, often their drinking or drug use, that their own needs, feelings, and well-being take a back seat (MHA, 2026). It is not a formal diagnosis, and the term itself is debated (SAMHSA, 2020a). In 2025, about 45 million people aged 12 or older in the U.S. had a substance use disorder (SUD), the medical term for an alcohol or drug addiction. Its effects often extend beyond the individual, affecting the whole family (SAMHSA, 2020a, 2026).</p>
<p>This article explores what "codependent" means, how codependency may show up in partners and parents, the difference between enabling and helping, and where family members can find support. Holiday gatherings often bring relatives together for extended periods, making relationship patterns and concerns about a loved one's substance use more noticeable.</p>

<h2>What Does Codependent Mean?</h2>
<p>The term "codependent" was first used to describe the spouses of people with alcohol use disorder. Its meaning expanded to include relatives of anyone with a behavioral or psychological problem. According to Mental Health America (MHA), codependency often affects a spouse, parent, sibling, friend, or coworker of a person with an alcohol or drug problem (MHA, 2026; SAMHSA, 2020a).</p>
<p>The pattern often starts with good intentions. A person tries to care for a loved one who is struggling, and over time the caretaking can become compulsive. Repeated rescue attempts may allow the loved one to continue on the same course, while the caretaker loses contact with their own needs and sense of self (MHA, 2026).</p>

<h3>What Is Codependent?</h3>
<p>"Codependent" is an informal term used to describe people who show this relationship pattern. Common characteristics may include an intense sense of responsibility for others' actions, taking on more than one's share of responsibilities, guilt when asserting their personal needs, and difficulty setting or maintaining boundaries (MHA, 2026).</p>

<h3>Is Codependency a Mental Health Diagnosis?</h3>
<p>No. The Substance Abuse and Mental Health Services Administration (SAMHSA) notes that the field has not agreed on how to use the term and that little research has focused on the concept. The term has also been criticized for potentially framing caring qualities, such as empathy and self-sacrifice, as problematic (SAMHSA, 2020a). This article uses it to describe a relationship pattern, not to label a person or to identify a mental health diagnosis.</p>

<h2>What Does Codependency Look Like? Signs of a Codependent Relationship</h2>
<p>Families tend to keep functioning as they always have, even when that means supporting a loved one's substance use. Signs may include (MHA, 2026; SAMHSA, 2020a; MedlinePlus, 2026):</p>
<ul>
  <li><strong>Covering for them.</strong> Making excuses to an employer, relatives, or friends for missed work or events.</li>
  <li><strong>Taking over their responsibilities.</strong> Paying their bills or handling their obligations, which can help them avoid the consequences of their use.</li>
  <li><strong>Organizing your days around their use.</strong> Checking how much they drank, waiting up for them, or planning events around whether they will be sober.</li>
  <li><strong>Keeping quiet to avoid conflict.</strong> Avoiding the subject to prevent an argument.</li>
  <li><strong>Feeling responsible for their choices.</strong> Believing they would get worse without your constant effort, or feeling guilty when you say no.</li>
  <li><strong>Putting your own health last.</strong> Neglecting your health or pulling away from friends and activities.</li>
</ul>
<figure><img src="/images/blog/infographics/codependency-signs-checklist.svg" width="1200" height="520" loading="lazy" alt="Six signs of a codependent relationship: covering for them with employers, relatives, or friends; taking over their responsibilities, like paying their bills; organizing your days around their use; keeping quiet to avoid an argument; feeling responsible for their choices; and putting your own health and friendships last." /></figure>
<p>Partners of people who misuse substances can also experience anger, anxiety, hopelessness, shame, and isolation (SAMHSA, 2020a).</p>

<h2>Codependency and Addiction</h2>
<p>SAMHSA describes substance use and family stress as affecting each other. Substance use can lead to conflict and poor communication, and that conflict can affect substance use and the risk of returning to use (SAMHSA, 2020a).</p>
<p>Most families are doing their best to cope, but some ways of coping can be unhealthy (SAMHSA, 2020a). If your partner keeps up with work while drinking heavily, our article on <a href="/blog/what-is-a-functional-alcoholic/">functional alcoholics</a> covers signs to look for.</p>
<p>These patterns can continue after a loved one starts recovery, as family members may return to old habits such as blaming or becoming overly responsible for the household (SAMHSA, 2020b).</p>

<h2>The Codependent Parent: When an Adult Child Drinks or Uses</h2>
<p>SAMHSA gives the example of parents whose adult son misuses prescription opioids. Because they love him, they keep giving him money, let him live at home, and bail him out of jail. These actions keep him from facing the effects of his use, which can make it easier to continue and give him less reason to seek recovery (SAMHSA, 2020a).</p>
<p>MedlinePlus advises family members not to feel guilty, noting that they did not encourage a loved one's drinking and cannot control it (MedlinePlus, 2026). Family counseling can include parents directly. Behavioral family counseling, for example, brings together a person in treatment and a family member, usually a parent of an adult child, to support recovery and improve communication (SAMHSA, 2020b).</p>

<h2>Enabling vs. Helping</h2>
<p>Enabling refers to actions that protect a person from the effects of their substance use. SAMHSA describes it as a common, well-intended reaction among family members that can work against recovery. Helping means supporting the person without supporting the substance use (SAMHSA, 2020a). Examples include (MedlinePlus, 2026; SAMHSA, 2020b):</p>
<ul>
  <li><strong>Making excuses vs. letting them answer for themselves.</strong> MedlinePlus advises against lying or making excuses for a loved one's drinking.</li>
  <li><strong>Taking over vs. handing back responsibilities.</strong> Taking on a loved one's obligations can help them avoid consequences.</li>
  <li><strong>Arguing during use vs. talking when they are sober.</strong> MedlinePlus advises against arguing when a loved one has been drinking and suggests talking when they are not.</li>
  <li><strong>Blame vs. concern and hope.</strong> Community Reinforcement and Family Training (CRAFT) teaches family members to avoid blaming or shaming, express concern and hope, and recognize any positive change.</li>
</ul>
<figure><img src="/images/blog/infographics/codependency-enabling-vs-helping.svg" width="1200" height="480" loading="lazy" alt="Enabling vs. helping. Enabling: making excuses, taking over, arguing during use, and blame. Helping: letting them answer for themselves, handing responsibilities back, talking when they're sober, and concern and hope." /></figure>
<p>SAMHSA notes that people pressed into treatment through confrontation are more likely to return to use than those encouraged through positive reinforcement (SAMHSA, 2020b).</p>

<h3>Is Setting a Boundary the Same as Giving Up?</h3>
<p>No. MedlinePlus describes boundaries as limits on your own actions, so that you do not encourage the person's behavior or let it overly affect you (MedlinePlus, 2026). A boundary might mean no longer paying for things that support substance use. It does not mean withdrawing love or concern.</p>

<h2>Support for Family Members, Too</h2>
<p>MedlinePlus notes that you cannot help a loved one if you do not also take care of yourself (MedlinePlus, 2026; SAMHSA, 2020b). Steps that can help include:</p>
<ul>
  <li><strong>Talk with people you trust.</strong> Tell relatives or friends how you feel and what would help.</li>
  <li><strong>Join a family support group.</strong> Al-Anon is for family and friends of people with alcohol problems, and Nar-Anon is for families of people who use other drugs. These groups help members focus on their own needs.</li>
  <li><strong>Consider counseling for yourself.</strong> A therapist who works with alcohol problems can help, since drinking affects the entire family.</li>
</ul>
<p>Mental Health America (MHA) notes that codependency is often rooted in childhood, so therapy may explore early family experiences and how they connect to current patterns (MHA, 2026). Family counseling can also help each person see how they have adjusted to a loved one's substance use and what they can change (SAMHSA, 2020c).</p>

<h3>Can Family Members Get Help if a Loved One Is Not Ready for Treatment?</h3>
<p>Yes. CRAFT works with family members to change how they interact with the person who has an SUD, which can encourage that person to enter treatment (SAMHSA, 2020b). Our page for <a href="/admissions/for-families/">families of someone struggling with addiction</a> explains how to start that conversation.</p>

<h2>Key Takeaways</h2>
<ul>
  <li>Codependency describes a relationship pattern of focusing on another person's problems at the expense of your own needs. It is not a formal diagnosis.</li>
  <li>Signs can include covering for a loved one, taking over their responsibilities, and putting your own health last.</li>
  <li>Enabling protects a person from the effects of substance use. Helping supports the person without supporting the use.</li>
  <li>Family members can benefit from their own support, whether or not their loved one is in treatment.</li>
</ul>

<h2>Evening IOP and Family Therapy in West Palm Beach</h2>
<p>Sunview Wellness is a Joint Commission accredited outpatient center in West Palm Beach for adults 18 and older. Care is delivered at three levels: <a href="/programs/php/">Partial Hospitalization (PHP)</a>, <a href="/programs/iop/">Intensive Outpatient (IOP)</a>, and <a href="/programs/outpatient/">Outpatient Programming (OP)</a>, including an <a href="/programs/evening-iop/">evening IOP</a> that meets three evenings a week, so your loved one can keep working or studying and live at home during treatment.</p>
<p>With the client's consent and when clinically appropriate, each person's primary therapist contacts a family member during the first week, and corresponding <a href="/therapies/family-therapy/">family therapy</a> sessions help the family recognize patterns of rescuing and enabling, with support for recovery. Free door-to-door transportation is available.</p>
<p>Our PhD-led clinical team brings together years of experience and training, and works psychodynamically, using <a href="/therapies/inner-child-therapy/">Inner Child Therapy</a> to address the long-held patterns that shape how people cope and relate to the people closest to them.</p>
<p>We're in network with most major insurance carriers, including Florida Medicaid plans. Our <a href="/admissions/insurance/">admissions team can verify your benefits</a> at no cost and answer family members' questions.</p>
<p><a href="/admissions/"><strong>Speak With Admissions</strong></a></p>
<p><strong>Call <a href="${SITE.phoneHref}">${SITE.phone}</a></strong></p>
`,
    sources: [
      { label: 'Mental Health America (MHA). (2026). Co-Dependency. Resources. Mental Health America.', url: 'https://mhanational.org/resources/co-dependency/' },
      { label: 'Substance Abuse and Mental Health Services Administration (SAMHSA). (2020a). Chapter 2 — Influence of Substance Misuse on Families. TIP 39: Substance Use Disorder Treatment and Family Therapy.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK571087/' },
      { label: 'Substance Abuse and Mental Health Services Administration (SAMHSA). (2026). Key Substance Use and Mental Health Indicators in the United States: Results From the 2025 National Survey on Drug Use and Health. NSDUH Series H-61.', url: 'https://www.samhsa.gov/data/sites/default/files/reports/rpt57150/2025-nsduh-annual-national-html/2025-nsduh-annual-national.htm' },
      { label: 'MedlinePlus Medical Encyclopedia. (2026). Helping a Loved One With a Drinking Problem. National Library of Medicine.', url: 'https://medlineplus.gov/ency/patientinstructions/000815.htm' },
      { label: 'Substance Abuse and Mental Health Services Administration (SAMHSA). (2020b). Chapter 3 — Family Counseling Approaches. TIP 39: Substance Use Disorder Treatment and Family Therapy.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK571088/' },
      { label: 'Substance Abuse and Mental Health Services Administration (SAMHSA). (2020c). Chapter 1 — Substance Use Disorder Treatment: Working With Families. TIP 39: Substance Use Disorder Treatment and Family Therapy.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK571084/' },
    ],
  },
  {
    slug: 'is-ativan-addictive',
    type: 'article',
    title: 'Is Ativan Addictive? How an Anxiety Prescription Turns Into Needing It',
    seoTitle: 'Is Ativan Addictive? How Dependence Can Develop', // <title> only (≤60, answer 9.1)
    dek: "Ativan can cause dependence even when taken as prescribed. Learn how it develops, how Ativan compares with Xanax, and why treating the underlying anxiety matters too.",
    metaDescription: 'Ativan can cause dependence even when taken as prescribed. See how it compares with Xanax and why treating the anxiety underneath matters too.',
    date: '2026-11-18',
    author: 'dana-martin', // slug in src/data/team.js — named as the article's author in the docx brief
    category: 'Substance Use',
    // Docx citation markers [1]-[6] converted to the site's (Author, Year) in-text style, mapped from the docx's
    // own hyperlinks. The docx itself cited the Ativan label (2023) and the Xanax label (2023) — two different
    // FDA 2023 sources, so letter suffixes in Sources-list order: Ativan label = 2023a, Xanax label = 2023b. Two
    // inline citations in the docx ("[1][4]" and "[4]") had no hyperlink run at all; mapped to the same sources
    // their numbers point to elsewhere in the docx (FDA 2023a / Ghiasi et al., 2024) rather than left bare. The
    // Xanax label this docx cites (018276s059lbl.pdf) is a newer revision than the one already cited in the
    // existing xanax-side-effects post (018276s058lbl.pdf) — kept as the docx supplied it, since it's the more
    // current label.
    // Compliance: the docx's closing "we are in network with most major insurance carriers, and we accept
    // Medicaid" blanket claim is replaced with the site's standard sentence, matching xanax-side-effects and
    // physical-signs-of-alcoholism. The docx's standalone mid-article "Check Your Insurance Coverage" CTA block
    // (including its program-levels sentence) is folded into the closing section rather than left as a one-off
    // mid-body block, same precedent. Phone pulled from SITE, never the docx's stale (561) 269-3175.
    // Interlinks: /blog/xanax-side-effects/, /what-we-treat/substance-use/benzodiazepines/,
    // /what-we-treat/mental-health/anxiety/, /programs/php/, /programs/iop/, /programs/outpatient/,
    // /programs/evening-iop/, /therapies/inner-child-therapy/, /admissions/insurance/, /admissions/.
    body: `
<p>Ativan can be addictive. Ativan is the brand name for lorazepam, a benzodiazepine prescribed to treat anxiety. Its label carries a boxed warning, the strongest warning the U.S. Food and Drug Administration (FDA) requires, about the risks of misuse, addiction, and physical dependence (FDA, 2023a). In 2025, about 1.7 million people in the U.S. had a prescription tranquilizer or sedative use disorder, a category that includes benzodiazepines such as lorazepam (SAMHSA, 2026).</p>
<p>This article explores how dependence can develop even when someone takes Ativan as prescribed, what Ativan is used for, how it compares with Xanax, and why treating the underlying anxiety is an important part of care.</p>

<h2>Is Ativan Addictive?</h2>
<p>The risks of taking Ativan extend beyond misuse or taking more than prescribed. According to the FDA, physical dependence can develop when benzodiazepines are taken regularly for several days to weeks, even when used as directed. The risk increases with higher daily doses and longer periods of treatment (FDA, 2023a, 2020).</p>
<p>Lorazepam is classified as a Schedule IV controlled substance. Like other benzodiazepines, it carries high risks of misuse, addiction, and physical dependence. The FDA advises healthcare providers to assess each patient's risk of misuse and addiction before prescribing these medications (FDA, 2023a; Ghiasi et al., 2024).</p>

<h3>What Is the Difference Between Dependence and Addiction?</h3>
<p>Physical dependence occurs when the body adapts to a medication, causing withdrawal symptoms to appear when a dose is missed, reduced, or stopped. It can occur even when a prescription medication is taken as directed under medical care (FDA, 2023a; SAMHSA, 2026).</p>
<p>Addiction involves patterns of behavior, including a strong desire to take the drug, difficulty controlling use, and continued use despite harmful consequences. Physical dependence and addiction can overlap. The Ativan prescribing information notes that people even taking benzodiazepines as prescribed may be at risk of misuse, which can lead to addiction (FDA, 2023a).</p>

<h2>How Dependence Builds on a Legitimate Prescription</h2>
<p>Dependence on Ativan can develop gradually. With continued use, a person may develop tolerance, meaning the same dose provides less relief than it once did. According to the prescribing information, tolerance may develop to the medication's sedative effects, while less tolerance develops to its effects on memory and thinking. As a result, a person may experience less benefit from the same dose while certain side effects continue (FDA, 2023a).</p>
<p>Anxiety, panic attacks, restlessness, and difficulty sleeping can also occur when a benzodiazepine dose is reduced. These symptoms can make it difficult to tell whether the original anxiety is returning or the body is reacting to lower levels of the medication (FDA, 2023a).</p>
<p>Signs that Ativan use may be moving toward dependence or misuse include (FDA, 2023a):</p>
<ul>
  <li>Taking more than prescribed, or taking doses earlier than scheduled</li>
  <li>Needing a higher dose to feel the same relief</li>
  <li>Experiencing strong urges to take it, or difficulty getting through the day without it</li>
  <li>Wanting to reduce use but having difficulty controlling it</li>
  <li>Continuing to take it despite problems with memory, work, or relationships</li>
  <li>Combining it with alcohol or other substances</li>
</ul>
<figure><img src="/images/blog/infographics/ativan-dependence-signs-checklist.svg" width="1200" height="520" loading="lazy" alt="Six signs Ativan use may be moving toward dependence: taking more than prescribed or earlier than scheduled; needing a higher dose for the same relief; strong urges to use it or trouble getting through the day without it; wanting to cut back but struggling to control it; continuing despite problems with memory, work, or relationships; and combining it with alcohol or other substances." /></figure>
<p>Anyone concerned about their Ativan use should talk with their prescribing doctor before changing their dose. Stopping a benzodiazepine suddenly after continued use can cause serious, potentially life-threatening withdrawal symptoms (FDA, 2023a).</p>

<h2>What Is Ativan Used For?</h2>
<p>The FDA has approved Ativan tablets for managing anxiety disorders and for providing short-term relief of anxiety symptoms, including anxiety associated with depression. Lorazepam is also used clinically for sleep problems related to anxiety, for sedation before surgery, and, as an injection, to treat prolonged seizures (FDA, 2023a; Ghiasi et al., 2024).</p>
<p>The prescribing information notes that anxiety related to everyday stress generally does not require medication. It also notes that Ativan's effectiveness beyond four months has not been evaluated in systematic clinical studies, so the prescribing doctor should regularly reassess whether the medication is still needed (FDA, 2023a).</p>

<h3>How Long Does Ativan Last?</h3>
<p>After taking Ativan by mouth, blood levels typically reach their highest point in about two hours. The medication's average half-life, or the time it takes the body to eliminate half of the drug, is approximately 12 hours. Because of its effects on alertness, the prescribing information advises people taking Ativan not to drive or operate dangerous machinery, and warns that it lowers their tolerance for alcohol (FDA, 2023a).</p>

<h3>Ativan vs. Xanax: What Is the Difference?</h3>
<p>Ativan (lorazepam) and Xanax (alprazolam) are both benzodiazepines. Both act on GABA (gamma-aminobutyric acid), a chemical the brain uses to slow down nerve activity (FDA, 2020). The main differences include:</p>
<ul>
  <li><strong>FDA-approved uses:</strong> Xanax is approved for generalized anxiety disorder and panic disorder. Ativan is approved for anxiety disorders and for providing short-term relief of anxiety symptoms (FDA, 2023a, 2023b).</li>
  <li><strong>How quickly they peak and how long they remain in the body:</strong> Xanax reaches its highest blood concentration about 1 to 2 hours after a dose and has an average half-life of about 11 hours. Ativan reaches its peak in about 2 hours and has an average half-life of about 12 hours (FDA, 2023a, 2023b).</li>
  <li><strong>How the body processes them:</strong> Lorazepam is processed through a process called glucuronidation and does not rely on the same liver enzyme pathways as many other medications. This may make it a consideration for some people with liver impairment, depending on their overall health and clinical circumstances (Ghiasi et al., 2024).</li>
</ul>
<figure><img src="/images/blog/infographics/ativan-vs-xanax-compare.svg" width="1200" height="480" loading="lazy" alt="Ativan vs. Xanax. Ativan (lorazepam): FDA-approved for anxiety disorders and short-term relief, peaks about 2 hours after a dose, average half-life about 12 hours, cleared by glucuronidation. Xanax (alprazolam): FDA-approved for generalized anxiety disorder and panic disorder, peaks about 1 to 2 hours after a dose, average half-life about 11 hours, cleared by the standard liver-enzyme pathway. Both carry FDA boxed warnings for misuse, addiction, and physical dependence." /></figure>
<p>Both medications carry FDA boxed warnings about misuse, addiction, and physical dependence (FDA, 2023a, 2023b). For more information on alprazolam, see our article on <a href="/blog/xanax-side-effects/">Xanax side effects</a>.</p>

<h2>Ativan Side Effects</h2>
<p>In a clinical study involving approximately 3,500 people treated for anxiety, the most commonly reported side effect of Ativan was sedation, reported by about 16% of participants. Dizziness, weakness, and unsteadiness were also reported. Sedation and unsteadiness became more common with age (FDA, 2023a).</p>
<p>Other possible side effects include fatigue, memory problems, confusion, depression, changes in sex drive, and slurred speech. The prescribing information also notes that existing depression may appear or worsen during benzodiazepine use (FDA, 2023a). Anyone who notices changes in mood or memory should tell their prescribing provider.</p>

<h2>Benzodiazepines and Alcohol</h2>
<p>Alcohol and benzodiazepines both slow down the central nervous system, which controls alertness and breathing. Taking them together can intensify these effects and increase the risk of dangerous sedation and slowed breathing. In cases of overdose, combining alcohol with lorazepam can be life-threatening. Benzodiazepines taken with opioids can also cause profound sedation, slowed breathing, coma, and death (FDA, 2023a; Ghiasi et al., 2024).</p>
<p>The FDA notes that misuse of benzodiazepines often involves alcohol or other substances, which is linked to more serious outcomes (FDA, 2023a).</p>

<h2>Why the Anxiety Underneath Has to Be Treated Too</h2>
<p>The National Institute of Mental Health (NIMH) notes that benzodiazepines can reduce anxiety quickly, but some people build tolerance and become dependent on them, so providers may prescribe them only for brief periods (NIMH, 2025). When a benzodiazepine is the only treatment, the anxiety it was prescribed for may still be present.</p>
<p>Psychotherapy is a central part of anxiety treatment. Cognitive behavioral therapy (CBT) helps people notice and question inaccurate or harmful thoughts and change patterns that increase worry. NIMH describes CBT as the most well-studied form of psychotherapy for generalized anxiety disorder (NIMH, 2025).</p>
<p>Other medications can also help. Certain antidepressants, known as SSRIs and SNRIs, can treat anxiety symptoms, and buspirone, an anti-anxiety medication, has less potential to be addictive than benzodiazepines. These medications may take several weeks to work (NIMH, 2025). A prescribing doctor can help decide which option may be the best fit.</p>

<h2>Key Takeaways</h2>
<ul>
  <li>Ativan (lorazepam) can be addictive. Physical dependence can develop within days to weeks, even when it is taken as prescribed.</li>
  <li>Dependence is the body adapting to the medication. Addiction involves loss of control over use. The two can overlap.</li>
  <li>Tolerance can reduce Ativan's calming effect over time, while effects on memory and thinking continue.</li>
  <li>Benzodiazepines can reduce anxiety quickly, but therapy such as CBT can address the anxiety itself.</li>
</ul>

<h2>Benzodiazepine and Anxiety Treatment in West Palm Beach</h2>
<p>Sunview Wellness is a Joint Commission accredited outpatient program in West Palm Beach for adults 18 and older. Care is delivered at three levels: <a href="/programs/php/">Partial Hospitalization (PHP)</a>, <a href="/programs/iop/">Intensive Outpatient (IOP)</a>, and <a href="/programs/outpatient/">Outpatient Programming (OP)</a>, including an <a href="/programs/evening-iop/">evening IOP</a> for those who need to keep working during the day.</p>
<p>Our <a href="/what-we-treat/substance-use/benzodiazepines/">benzodiazepine addiction treatment</a> addresses the medication use and the <a href="/what-we-treat/mental-health/anxiety/">anxiety</a> underneath it at the same time, with one clinical team. A psychiatric provider reviews your medications, and therapy groups teach practical skills for handling anxiety, stress, and poor sleep. Free door-to-door transportation is available if you cannot drive.</p>
<p>Our PhD-led clinical team brings years of experience and works psychodynamically, using <a href="/therapies/inner-child-therapy/">Inner Child Therapy</a> to address the fear, shame, and long-held patterns underneath the anxiety.</p>
<p>We're in network with most major insurance carriers, including Florida Medicaid plans. Our <a href="/admissions/insurance/">admissions team can review your benefits</a> at no cost and help you schedule an assessment.</p>
<p><a href="/admissions/"><strong>Talk to Admissions</strong></a></p>
<p><strong>Call <a href="${SITE.phoneHref}">${SITE.phone}</a></strong></p>
`,
    sources: [
      { label: 'U.S. Food and Drug Administration (FDA). (2023a). Ativan (Lorazepam) Tablets, USP: Prescribing Information. Drugs@FDA. Bausch Health US.', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/017794s049lbl.pdf' },
      { label: 'U.S. Food and Drug Administration (FDA). (2020, September 23). FDA Requiring Boxed Warning Updated to Improve Safe Use of Benzodiazepine Drug Class. Drug Safety Communications.', url: 'https://www.fda.gov/drugs/drug-safety-and-availability/fda-requiring-boxed-warning-updated-improve-safe-use-benzodiazepine-drug-class' },
      { label: 'Substance Abuse and Mental Health Services Administration (SAMHSA). (2026). Key Substance Use and Mental Health Indicators in the United States: Results From the 2025 National Survey on Drug Use and Health. NSDUH Series H-61.', url: 'https://www.samhsa.gov/data/sites/default/files/reports/rpt57150/2025-nsduh-annual-national-html/2025-nsduh-annual-national.htm' },
      { label: 'Ghiasi, N., et al. (2024). Lorazepam. StatPearls. StatPearls Publishing.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK532890/' },
      { label: 'U.S. Food and Drug Administration (FDA). (2023b). Xanax (Alprazolam) Tablets, USP: Prescribing Information. Drugs@FDA. Viatris.', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/018276s059lbl.pdf' },
      { label: 'National Institute of Mental Health (NIMH). (2025). Generalized Anxiety Disorder: What You Need to Know. Health Publications.', url: 'https://www.nimh.nih.gov/health/publications/generalized-anxiety-disorder-gad' },
    ],
  },
  {
    slug: 'is-weed-addictive',
    type: 'article',
    title: 'Is Weed Addictive? How to Tell When Daily Smoking Has Become a Problem',
    seoTitle: 'Is Weed Addictive? Signs of Cannabis Use Disorder', // <title> only (≤60, answer 9.1)
    dek: "Daily cannabis use can develop into a diagnosable disorder. See the clinical signs of cannabis use disorder, what a weed hangover may signal, and how outpatient care can fit around work.",
    metaDescription: "Daily weed use can lead to cannabis use disorder. See the clinical signs, what withdrawal looks like, and how outpatient care fits around work.",
    date: '2026-11-27',
    author: 'dana-martin', // slug in src/data/team.js — named as the article's author in the docx brief
    category: 'Substance Use',
    // Docx citation markers [1]-[5] converted to the site's (Author, Year) in-text style, mapped from the docx's
    // own hyperlinks. The docx cites SAMHSA twice (the NSDUH 2025 results report and the separate "Find Support"
    // page), so letter suffixes in Sources-list order: NSDUH report = 2026a, Find Support page = 2026b.
    // Compliance: the docx's "We are in network with most major insurance plans, including Medicaid" sentence is
    // replaced with the site's standard sentence, matching is-ativan-addictive and what-is-a-functional-alcoholic.
    // The docx's standalone mid-article "Verify Your Insurance" CTA block is folded into the closing section
    // rather than left as a one-off mid-body block, same precedent. Phone pulled from SITE, never the docx's
    // stale (561) 269-3175.
    // No dedicated /what-we-treat/substance-use/cannabis/ page exists yet, so the general cannabis-use-disorder
    // mention links to /what-we-treat/substance-use/ instead of a condition-specific page.
    // Interlinks: /blog/thca-vs-thc/, /what-we-treat/substance-use/, /admissions/for-families/, /therapies/cbt/,
    // /programs/php/, /programs/iop/, /programs/outpatient/, /programs/evening-iop/, /admissions/insurance/,
    // /admissions/.
    body: `
<p>Cannabis, also called weed or marijuana, can be addictive. The medical term for this is cannabis use disorder (CUD), and in 2025, about 19 million people in the U.S. aged 12 or older had it. Among adults 26 and older, the number with CUD rose from about 10 million in 2021 to about 13 million in 2025 (SAMHSA, 2026a). Cannabis use disorder is diagnosed by symptoms, not by the time of day a person uses, so smoking only after work does not rule it out (NIDA, 2026).</p>
<p>This article covers how addictive marijuana is, the clinical signs of CUD, weed hangover symptoms, how to talk with a loved one about weed use, and how treatment works.</p>

<h2>Is Weed Addictive?</h2>
<p>Weed is addictive for some people who use it. Studies estimate that 22% to 30% of people who use cannabis have CUD. A person with CUD is unable to stop using cannabis even when it causes health and social problems in their life (NIDA, 2026; CDC, 2024).</p>
<p>People in the U.S. increasingly view cannabis as low risk, but it can still cause negative health effects (NIDA, 2026).</p>

<h2>Why Daily Weed Use Raises the Risk</h2>
<p>How often a person uses cannabis is the strongest predictor of CUD. Daily or almost daily use is associated with developing the disorder, and family history and years of use can also play a role (NIDA, 2026).</p>
<p>Cannabis products have also become stronger. The potency of THC (tetrahydrocannabinol, the compound in cannabis that causes a high) in illegal cannabis seized by law enforcement rose from about 4% in 1995 to about 16% in 2022, and higher THC levels have been associated with a greater chance of developing CUD (NIDA, 2026). This includes products sold as hemp, such as <a href="/blog/thca-vs-thc/">THCA flower</a>, which converts to THC when smoked.</p>

<h2>Cannabis Use Disorder: The Clinical Signs of Weed Addiction</h2>
<p>Health care providers diagnose CUD using the <em>Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition</em> (DSM-5). A person may have CUD if they experience two or more of these 11 symptoms within 12 months (NIDA, 2026):</p>
<ul>
  <li>Using more cannabis, or for a longer time, than intended</li>
  <li>Wanting to cut down or stop, or trying to, without success</li>
  <li>Spending a lot of time getting, using, or recovering from cannabis</li>
  <li>Strong cravings or urges to use</li>
  <li>Falling behind on responsibilities at work, school, or home</li>
  <li>Continuing to use despite problems in relationships</li>
  <li>Giving up hobbies or time with family and friends to use</li>
  <li>Using in situations where someone could get hurt, such as before driving</li>
  <li>Continuing to use despite physical or mental health problems</li>
  <li>Needing more cannabis to get the same effect (tolerance)</li>
  <li>Withdrawal symptoms after cutting back or stopping</li>
</ul>
<p>CUD is considered mild when two or three symptoms are present, moderate with four or five, and severe with six or more (NIDA, 2026). In 2025, just over half of people with CUD had a mild form (SAMHSA, 2026a).</p>
<figure><img src="/images/blog/infographics/cannabis-use-disorder-severity-scale.svg" width="1200" height="460" loading="lazy" alt="How many symptoms make cannabis use disorder mild, moderate, or severe. Mild is 2 to 3 symptoms, moderate is 4 to 5 symptoms, severe is 6 or more symptoms, out of 11 possible DSM-5 symptoms within 12 months. In 2025, just over half of people with cannabis use disorder had the mild form." /></figure>
<p>Since job performance is only one of the criteria, steady work does not rule out CUD. Family members may notice other changes first, such as irritability, low motivation, trouble concentrating, or pulling away from people (Nimmana et al., 2026).</p>

<h2>Weed Hangover Symptoms: What They May Point To</h2>
<p>"Weed hangover" is an informal term, not a medical diagnosis. People who use cannabis every day may notice low mood, irritability, poor concentration, or low motivation the morning after use. These symptoms can reflect ongoing heavy use or early withdrawal, which can begin within 24 hours of the last use (Nimmana et al., 2026).</p>
<p>If the first use of the day relieves these symptoms, that pattern may be a sign of withdrawal. Using cannabis to relieve or avoid withdrawal symptoms counts toward the withdrawal criterion for CUD (SAMHSA, 2026a).</p>

<h2>What Happens When Daily Weed Use Stops?</h2>
<p>A person may have withdrawal symptoms after stopping or sharply cutting back on heavy, long-term cannabis use, even if they do not have CUD. Symptoms may include (NIDA, 2026):</p>
<ul>
  <li>Irritability, anger, or aggression</li>
  <li>Nervousness, anxiety, or restlessness</li>
  <li>Trouble sleeping or strange dreams</li>
  <li>Decreased appetite or weight loss</li>
  <li>Depressed mood</li>
  <li>Headaches, sweating, stomach pain, or shakiness</li>
</ul>
<p>Supportive care is the main treatment for withdrawal, and a doctor can help manage symptoms such as insomnia and changes in mood (Nimmana et al., 2026).</p>

<h2>How to Talk to a Loved One About Daily Weed Use</h2>
<p>If a loved one uses weed every day, talking with them about it can be a first step toward change. They may respond to concerns by calling cannabis "just weed," but focusing on specific changes you have noticed, rather than debating the drug itself, may lead to a more productive conversation. These approaches from the Substance Abuse and Mental Health Services Administration (SAMHSA) may help (SAMHSA, 2026b):</p>
<ul>
  <li><strong>Ask open-ended questions.</strong> Questions that start with "how" or "what" invite more than a yes or no answer, e.g. "What are the not-so-good things about smoking every night?"</li>
  <li><strong>Point out strengths.</strong> Commenting on what your loved one does well may keep them more open than a list of what they are doing wrong.</li>
  <li><strong>Show you are listening.</strong> Repeat back what you heard so your loved one feels understood.</li>
  <li><strong>Conclude with a plan.</strong> Summarize the conversation, ask how you can support them, and ask whether you can check in again.</li>
</ul>
<p>It may take many conversations before someone is ready to get help. If your loved one does not want to talk, let them know you will be there when they are ready (SAMHSA, 2026b). Our <a href="/admissions/for-families/">family resources</a> walk through what support can look like before someone is ready for treatment.</p>

<h2>Treatment for Cannabis Use Disorder</h2>
<p>Most people with CUD are treated in outpatient care. More intensive settings are generally reserved for serious concerns, such as severe withdrawal or psychosis. Behavioral therapies can be effective in treating CUD (NIDA, 2026; Nimmana et al., 2026):</p>
<ul>
  <li><strong><a href="/therapies/cbt/">Cognitive behavioral therapy (CBT)</a></strong> helps a person recognize triggers and build coping and problem-solving skills.</li>
  <li><strong>Motivational enhancement therapy</strong> helps a person build readiness to change and may work best when combined with CBT.</li>
</ul>
<p>There are no U.S. Food and Drug Administration (FDA)-approved medications for CUD. CUD often occurs alongside depression, anxiety, or posttraumatic stress disorder (PTSD), and treating these conditions at the same time is recommended (NIDA, 2026; Nimmana et al., 2026).</p>

<h2>Frequently Asked Questions About Weed Addiction</h2>
<h3>Can you get addicted to weed if you only smoke at night?</h3>
<p>CUD is diagnosed by symptoms, not by the time of day a person uses. Daily or almost daily use, at any time, is associated with developing the disorder (NIDA, 2026).</p>
<h3>Does daily weed use always mean cannabis use disorder?</h3>
<p>Daily use alone does not mean a person has CUD. A diagnosis requires at least two of the 11 symptoms within 12 months, along with significant problems or distress (NIDA, 2026). A professional assessment can clarify where someone stands.</p>
<h3>How long does weed withdrawal last?</h3>
<p>Withdrawal symptoms often begin within 24 hours of stopping, peak around day three, and improve over about two weeks (Nimmana et al., 2026).</p>

<h2>Key Takeaways</h2>
<ul>
  <li>Cannabis can be addictive. An estimated 22% to 30% of people who use it have cannabis use disorder (CUD).</li>
  <li>Daily or almost daily use is the strongest predictor of CUD.</li>
  <li>CUD is diagnosed when a person has two or more of 11 symptoms within 12 months.</li>
  <li>Behavioral therapies can treat CUD, most often in an outpatient setting.</li>
</ul>

<h2>Outpatient Cannabis Use Disorder Treatment in West Palm Beach</h2>
<p>Sunview Wellness is a Joint Commission accredited outpatient program in West Palm Beach for adults 18 and older. Care is delivered at three levels: <a href="/programs/php/">Partial Hospitalization (PHP)</a>, <a href="/programs/iop/">Intensive Outpatient (IOP)</a>, and <a href="/programs/outpatient/">Outpatient Programming (OP)</a>, including an <a href="/programs/evening-iop/">evening IOP</a> for those who need to keep working during the day.</p>
<p>We treat <a href="/what-we-treat/substance-use/">cannabis use disorder</a> together with the anxiety, depression, and trauma that may come with it. Family members can take part in care.</p>
<p>Our PhD-led clinical team brings years of combined experience and works psychodynamically, using Inner Child Therapy to address shame, fear, and long-held patterns underneath substance use.</p>
<p>We're in network with most major insurance carriers, including Florida Medicaid plans. Our <a href="/admissions/insurance/">admissions team can review your benefits</a> at no cost and help you schedule an assessment.</p>
<p><a href="/admissions/"><strong>Talk to Admissions</strong></a></p>
<p><strong>Call <a href="${SITE.phoneHref}">${SITE.phone}</a></strong></p>
`,
    sources: [
      { label: 'Substance Abuse and Mental Health Services Administration (SAMHSA). (2026a). Key Substance Use and Mental Health Indicators in the United States: Results From the 2025 National Survey on Drug Use and Health. NSDUH Series H-61.', url: 'https://www.samhsa.gov/data/sites/default/files/reports/rpt57150/2025-nsduh-annual-national-html/2025-nsduh-annual-national.htm' },
      { label: 'National Institute on Drug Abuse (NIDA). (2026). Cannabis (Marijuana). Research Topics.', url: 'https://nida.nih.gov/research-topics/cannabis-marijuana' },
      { label: 'Nimmana, S., et al. (2026). Cannabis Use Disorder. StatPearls. StatPearls Publishing.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK538131/' },
      { label: 'Centers for Disease Control and Prevention (CDC). (2024). Understanding Your Risk for Cannabis Use Disorder. Cannabis and Public Health.', url: 'https://www.cdc.gov/cannabis/health-effects/cannabis-use-disorder.html' },
      { label: 'Substance Abuse and Mental Health Services Administration (SAMHSA). (2026b). How to Talk to Someone About Help for Mental Health and Substance Use. Find Support.', url: 'https://www.samhsa.gov/find-support/helping-someone/how-to-talk-to-someone-about-help' },
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
