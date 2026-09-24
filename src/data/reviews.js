// Google reviews for Sunview Wellness (Google Business Profile, read 2026-09-22: 17 reviews, 4.5 average).
// Only 5-star reviews with text are kept here (11), newest first. `date` is approximate, derived from
// Google's relative date on 2026-09-22; it only orders the cards (the cards show the star rating, not a date,
// per QA batch 1 item 3). Text is verbatim, including the reviewers' own
// spelling and punctuation. Don't edit it. Names are first name + last initial per the Home content spec.
// Reviewer profile photos are intentionally NOT reproduced (see README: privacy in a treatment context).

export const GBP_URL = 'https://maps.google.com/?cid=14860219805794154937';
export const GBP_RATING = { average: 4.5, count: 17 };

export const REVIEWS = [
  {
    author: 'Stacey P.',
    rating: 5,
    date: '2026-09-15',
    featured: true,
    text: 'If you are struggling with addiction, this is the place that will make you feel like home. The therapist are amazing in their own unique ways. Group sessions become your best friends in the circle. They are welcoming to any type of addiction, they are loving, and strong therapists.',
  },
  {
    author: 'Matthew L.',
    rating: 5,
    date: '2025-09-22',
    featured: true,
    text: 'Gabe is awesome! I have had therapists before at other practices and he is one of the most empathetic and down to earth providers I have had. The group facilitators and other staff there are very kind and helpful as well. The support to get you back onto a good mental health path is amazing. Would recommend if you want more help than just a one on one therapist but want to still go home and/or work after.',
  },
  {
    author: 'Jake J.',
    rating: 5,
    date: '2026-01-22',
    featured: true,
    text: 'Sunview Wellness is second to none. The staff at Sunview are amazing people who truly want to make their clients lives better and healthier. The staff provides you and others with an environment conducive to healing, learning and managing your life. You are able to express yourself without judgment from the staff or other clients. You are provided guidance through group sessions, private one-on-one sessions with a therapist and written materials to use outside of the facility. Although Sunview Wellness is a business and needs revenue to survive, the staff focuses predominately on your health and not on its bottom line. I highly recommend Sunview Wellness as an option for your path to healthier and more productive life.',
  },
  {
    author: 'Julie V.',
    rating: 5,
    date: '2026-06-22',
    text: 'Sunview Wellness was the icing on the cake in my mental health journey and recovery and it honestly changed my life for the better..This program was outstanding in the approach they implement to help all of their clients. The important thing is you have to really want the help and do the work to get where you want and need to be. I believe participation in the  group therapy is essential even though it may not be easy at first. Every single person that works at Sunview Wellness is caring and really wants everyone to get well. Laura Contreras was my therapist and she is one of the most caring empathetic individuals I have ever come across. She was truly the right therapist for me. Mia stood out to me ( even though everyone was good) as an excellent group facilitator . Karissa Delaney the office manager was always a welcoming face in the morning. She was always willing to help out with any concerns or questions that I had. I was actually sad when my time came to leave Sunview even though I was ready. I made many friends and enjoyed the interaction with other people that GOT IT with NO JUDGEMENT! And Finally thank you Frank for overseeing and having such a wonderful place for people to come and heal. I’m forever greatful. 😊💕',
  },
  {
    author: 'Henry E.',
    rating: 5,
    date: '2026-08-22',
    text: "It was the most rewarding experience I've had in such a long moment of time! The knowledge and expertise of the staff was immeasurable, of high quality and refreshing! A special shout out to Jillian my therapist, Carissa and Frank! This by no means is meant or intended to take from the excellent job done by each individual employee and Sunview. I'm not the type that would just throw around gratitude lightly! Last but not least, I want to give a shout out to all my peers and all participants of Sunview, for their unselfish willingness to surrender and assist the healing and recovery of others! God bless you! Love, Henry Edwards and Tiffany Cunningham!",
  },
  {
    author: 'Erica S.',
    rating: 5,
    date: '2025-09-22',
    text: 'I just wanted to express my gratitude, every single staff was so kind and compassionate. It took me a while to actually be receptive to the things they were teaching me and trying to help me. But once I was and truly understood and was willing to help myself too it was magic. I’m grateful for them. I’d recommend them to anyone! I also would recommend for Sunview to include same sex groups at least once a week, I believe it helps common issues and resolution insight and connection a more comfortable space for the same sex to connect to each other without feeling judgement or afraid to express their opinions and experiences in front of the other sex. (In my afternoon groups was primary female and it was an amazing experience) so much props to Sunview for giving me the tools and resources to believe myself and better myself! Thank for to every staff member there!!!!',
  },
  {
    author: 'Carmela S.',
    rating: 5,
    date: '2026-02-22',
    text: 'I would like to share my experience by telling everyone what a great program this is and how much my life has changed due to this wonderful program. The staff is great and there therapist are very thorough and supportive.',
  },
  {
    author: 'Francina U.',
    rating: 5,
    date: '2024-09-22',
    text: "I came to sunview on my own and um glad I came I hot the help that I needed they were very loving and kind to me they lived me when I didn't love my self and I am grateful...",
  },
  {
    author: 'Isaiah A.',
    rating: 5,
    date: '2024-09-22',
    text: 'Sun view wellness is amazing place supportive come here to get the best care they take care of all your fears and worries.',
  },
  {
    author: 'Bonita K.',
    rating: 5,
    date: '2025-10-22',
    text: 'Wonderful place: caring, understanding, supportive, efficient, knowledgeable and friendly staff.',
  },
  {
    author: 'Angel V.',
    rating: 5,
    date: '2024-09-22',
    text: 'Very helpful and attentive people who care to see you get better through your rough time in life.',
  },
];

export const featuredReviews = REVIEWS.filter((r) => r.featured);
export const reviewsByDate = [...REVIEWS].sort((a, b) => b.date.localeCompare(a.date));

