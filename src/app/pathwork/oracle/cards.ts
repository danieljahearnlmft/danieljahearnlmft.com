// The Pathwork Oracle — full deck data, transcribed from the guidebook
// by Daniel Ahearn, artwork by Ana Tourian (U.S. Games Systems, Inc., 2024).
// 40 cards, ordered as the guidebook's 40-day sequential practice.

export type Element =
  | 'fire'      // loving-kindness
  | 'water'     // compassion
  | 'wind'      // sympathetic joy
  | 'earth'     // equanimity
  | 'breath'    // air + earth
  | 'cosmos'    // forgiveness
  | 'rest'      // completion
  | 'crown' | 'throat' | 'heart' | 'navel' | 'sacral' | 'root' // mudras / chakras
  | 'body' | 'speech' | 'mind' // three doors
  | 'forest'   // four aspects
  | 'buddha'   // five wisdom buddhas

export type Card = {
  id: string
  n: number // place in the 40-day path
  category: string
  group?: string
  title: string
  element: Element
  motif: string
  phrase?: string // the recitation / intention printed on the card
  audio?: string // matching guided meditation, if one exists
  body: string
  meta?: { chakra?: string; color?: string; keywords?: string; vehicle?: string }
}

export const CATEGORIES = [
  'The Brahma Viharas',
  'Breath',
  'Forgiveness',
  'Rest',
  'The Six Mudras',
  'The Three Doors',
  'The Four Aspects',
  'The Five Wisdom Buddhas',
] as const

export const cards: Card[] = [
  // ── The Brahma Viharas — Loving-Kindness (Metta) · fire · "May ___ be filled with peace" ──
  {
    id: 'lk-self', n: 1, category: 'The Brahma Viharas', group: 'Loving-Kindness',
    title: 'Loving-Kindness for Self', element: 'fire', motif: 'flame',
    phrase: 'May I be filled with peace.', audio: '11-brahma-self.mp3',
    body: 'In this card, we find Noble Tara. She stands tall, surrounded by the flames of loving-kindness. Her figure is a pillar of calm, her hands forming the Akash mudra. Tara reminds us that within her flame, we find our own self. This self is held in the warmth of pure loving-kindness. Within the self, there is an additional flame. The heat and potential expansion of loving-kindness is infinite.',
  },
  {
    id: 'lk-loved', n: 2, category: 'The Brahma Viharas', group: 'Loving-Kindness',
    title: 'Loving-Kindness for Loved Ones', element: 'fire', motif: 'flame',
    phrase: 'May you be filled with peace.', audio: '10-brahma-loved-ones.mp3',
    body: 'Here, Tara’s story continues after loving-kindness for self. The flames of loving-kindness continue to expand. The cupped hands of Noble Tara hold the fire of loving-kindness, creating a flowering of peace for loved ones. Visualize a loved one radiating the warmth and heat of loving-kindness.',
  },
  {
    id: 'lk-difficult', n: 3, category: 'The Brahma Viharas', group: 'Loving-Kindness',
    title: 'Loving-Kindness for Difficult People', element: 'fire', motif: 'flame',
    phrase: 'May you be filled with peace.', audio: '09-brahma-difficultpeople.mp3',
    body: 'The mountains here represent the obstacles and hardships that we face. It is easy to be loving and kind when there are no obstacles. Even in the most challenging moments, there is always a light that can guide our way. We see the light of loving-kindness emanating from the fire and gaze of Noble Tara. The power of loving-kindness can travel great distances to reach difficult people. All are included in the practice, even those we struggle to stay connected with in peace.',
  },
  {
    id: 'lk-all', n: 4, category: 'The Brahma Viharas', group: 'Loving-Kindness',
    title: 'Loving-Kindness for All Sentient Beings', element: 'fire', motif: 'flame',
    phrase: 'May we all be filled with peace.', audio: '08-brahma-all-sentient-beings.mp3',
    body: 'In this card, we find ourselves in a mountainous terrain. However, we are not alone. Seated in the center of the valley of the world, Noble Tara, in perfect composure, radiates that which we seek, loving-kindness. Encircled by the flames of loving-kindness, Noble Tara holds the infinite flame of loving-kindness and offers it out to the world.',
  },

  // ── Compassion (Karuna) · water · "May ___ be free from suffering" ──
  {
    id: 'c-self', n: 5, category: 'The Brahma Viharas', group: 'Compassion',
    title: 'Compassion for Self', element: 'water', motif: 'drop',
    phrase: 'May I be free from suffering.', audio: '05-compassion-self.mp3',
    body: 'She stands before you, the gentle and noble Tara, ready to listen and heal in the most difficult times. A figure gently joins her, seeking solace. It is our own self that stands with her, suffering under the distortions of perception, yet already noble and perfect. Sometimes, we can’t see clearly in the midst of strong emotions, and we become our own worst enemy. Tara is here to bring stillness to the turbulent waters of our self. This card reminds us that things are not what they seem.',
  },
  {
    id: 'c-loved', n: 6, category: 'The Brahma Viharas', group: 'Compassion',
    title: 'Compassion for Loved Ones', element: 'water', motif: 'drop',
    phrase: 'May you be free from suffering.', audio: '07-compassion-loved-ones.mp3',
    body: 'The tear holds the reflection of our loved ones, their pain and suffering. Through this cleansing, the heart opens and heaves with newfound connection. We are mirrors of one another. We are the experience of our shared lives. Her tears always hold loved ones in their struggles.',
  },
  {
    id: 'c-difficult', n: 7, category: 'The Brahma Viharas', group: 'Compassion',
    title: 'Compassion for Difficult People', element: 'water', motif: 'drop',
    phrase: 'May you be free from suffering.', audio: '04-compassion-difficult-people.mp3',
    body: 'Water is the element connected with our emotions. Emotions run as wild and deep as we let them. A sea of tears drowning us is all the eye can see. Yet, beyond its surface lies the hand that will pull us through difficult times. Noble Tara grabs the hand to release the suffering. We are the hands of this compassion. We can reach into the cold water and extend the offering to help. All that is needed is the will to reach out.',
  },
  {
    id: 'c-all', n: 8, category: 'The Brahma Viharas', group: 'Compassion',
    title: 'Compassion for All Sentient Beings', element: 'water', motif: 'drop',
    phrase: 'May we all be free from suffering.', audio: '06-compassion-sentient-beings.mp3',
    body: 'Tara sees all living things and forgets none. She is always present even in the most barren places. Every flower is tended to, and with the waters of compassion, she brings new breath to all. Out of the water of compassion flows the purest rainbow. No one is left out of this offering; there is total inclusion. This is the experience of inviting the whole world, all sentient beings, into the offering.',
  },

  // ── Sympathetic Joy (Mudita) · wind · "May ___ life be a celebration" ──
  {
    id: 'sj-self', n: 9, category: 'The Brahma Viharas', group: 'Sympathetic Joy',
    title: 'Sympathetic Joy for Self', element: 'wind', motif: 'wind',
    phrase: 'May my life be a celebration.', audio: '18-sj-self.mp3',
    body: 'In the wind dances Noble Tara, wild and free in the unobstructed energy of life. The endless dance of celebrating the precious gift of life. Like her, we must remember to free ourselves from jealousy and envy, from the poisons of greed. To be liberated from these destructive obscurations is the practice.',
  },
  {
    id: 'sj-loved', n: 10, category: 'The Brahma Viharas', group: 'Sympathetic Joy',
    title: 'Sympathetic Joy for Loved Ones', element: 'wind', motif: 'wind',
    phrase: 'May your life be a celebration.', audio: '17-sj-loved-ones.mp3',
    body: 'Noble Tara’s mind and body open into a paradisiacal awareness, ushering our own awakening. Feel the interaction with the natural world as we open into celebrating the lives of loved ones, their path, their journey. There is a new sense of empathy that was dormant for so long. Opening the mind and heart to this creates an exuberant perspective, a wind-filled gloriousness.',
  },
  {
    id: 'sj-difficult', n: 11, category: 'The Brahma Viharas', group: 'Sympathetic Joy',
    title: 'Sympathetic Joy for Difficult People', element: 'wind', motif: 'wind',
    phrase: 'May your life be a celebration.', audio: '16-sj-difficult-people.mp3',
    body: 'The energy of Noble Tara’s complete sympathetic joy for even the difficult ones in our lives allows an exchange of rainbow energy. It is an alchemical experience where understanding each other’s path removes greed, envy and jealousy, allowing brilliance and radiance to become the shared vision. This creates the potential for radical change.',
  },
  {
    id: 'sj-all', n: 12, category: 'The Brahma Viharas', group: 'Sympathetic Joy',
    title: 'Sympathetic Joy for All Sentient Beings', element: 'wind', motif: 'wind',
    phrase: 'May all of our lives be a celebration.', audio: '19-sj-sentient-beings.mp3',
    body: 'We are a shared world. We live in delusion when we do not see this. We are in constant motion with each other. Our interdependence and interaction is truth at the deepest level. Settle into this understanding, and open the heart-mind. Hold all sentient beings with the wish for their paths to be free of obstacles and full of what they long to do with this life.',
  },

  // ── Equanimity (Upeksha) · earth · "May ___ see things as they are" ──
  {
    id: 'eq-self', n: 13, category: 'The Brahma Viharas', group: 'Equanimity',
    title: 'Equanimity for Self', element: 'earth', motif: 'mountain',
    phrase: 'May I see things as they are.', audio: '15-rp-equanimity-self.mp3',
    body: 'The traveler rests in the cave of contemplation, restricting distraction to clear the mind and see what is real. Returning, again and again, to practice training the mind to let go of the internal stories that shape the external view. For establishing equanimity, balance and evenness.',
  },
  {
    id: 'eq-loved', n: 14, category: 'The Brahma Viharas', group: 'Equanimity',
    title: 'Equanimity for Loved Ones', element: 'earth', motif: 'mountain',
    phrase: 'May you see things as they are.', audio: '13-rp-equanimity-lovedones.mp3',
    body: 'In this card, we find the light of Noble Tara awakening the traveler’s mind, body and spirit, activating the chakras at the crown, throat and chest. Her action will bring clarity and the ability to let go of obstruction and confusion. A new sense of resting in “awakened awareness” of what is will follow. Extending this awareness in the wish for your loved ones will come naturally.',
  },
  {
    id: 'eq-difficult', n: 15, category: 'The Brahma Viharas', group: 'Equanimity',
    title: 'Equanimity for Difficult People', element: 'earth', motif: 'mountain',
    phrase: 'May you see things as they are.', audio: '14-rp-equanimity-difficultpeople.mp3',
    body: 'The traveler is now willing to journey on the difficult path of awakening, embracing the challenges of moving past self-limiting beliefs, obscurations in the mind and distortions. In the near distance, we can see surrounding caves illuminated by the elemental lights of the chakra. It takes effort to cut through the stories that destroy our composure and our opportunity to remain awake. However, you will find the strength to push through.',
  },
  {
    id: 'eq-all', n: 16, category: 'The Brahma Viharas', group: 'Equanimity',
    title: 'Equanimity for All Sentient Beings', element: 'earth', motif: 'mountain',
    phrase: 'May we all see things as they are.', audio: '12-rp-equanimity-sentientbeings.mp3',
    body: 'The traveler is finally in the illuminated company of like-minded people. In unity, we are liberated, as our interconnection allows us to follow the path collectively and individually. Each of us is a light, made more brilliant in the company of one another. The awakened heart, mind and spirit engage in a celebration of the preciousness of this life.',
  },

  // ── Breath ──
  {
    id: 'breath-find', n: 17, category: 'Breath',
    title: 'Breath — Find Your Breath', element: 'breath', motif: 'tree',
    audio: '20-breath-find-your-breath.mp3',
    body: 'The root of our life is breath. Just like the tree whose roots are invisible to the naked eye, our breath is always present, yet not always our focus. The tree’s branches extend out behind the edges of the card with infinite expansion towards the heavens while the tree’s roots dig deep below the earth. Breathing in. Breathing out. The colors of the world and the colors of the universe meld and root as we breathe. The two blending energies of sky and earth. Air and earth. Find this center inside yourself. Your true nature. The life force of your breath. It grounds you and allows you to draw that attention to your center.',
  },
  {
    id: 'breath-stay', n: 18, category: 'Breath',
    title: 'Breath — Stay With Your Breath', element: 'breath', motif: 'tree',
    audio: '21-breath-stay-with-your-breath.mp3',
    body: 'The tree of life blooms in our breath, extending into and through the universe. Stay with your breath like the branches of a tree moving in the breeze. Be effortlessly connected to the breath. Stay with your breath, the inhale into the exhale, and back into the inhale. Breath is life.',
  },

  // ── Forgiveness · cosmos ──
  {
    id: 'forgive-me', n: 19, category: 'Forgiveness',
    title: 'Forgive Me', element: 'cosmos', motif: 'cosmos',
    phrase: 'For any injury or pain I have caused consciously or unconsciously, forgive me.',
    audio: '03-forgive-me.mp3',
    body: 'It takes courage to ask for forgiveness, but it is essential if we want to evolve and allow relationships to flourish. Through empathy, we can begin to identify with one another. In the universe, in the very matter of the cosmos, we are together. Cosmic winds move through us and in us as we turn through the galaxies together. Throughout the endlessness in which we come together and apart, forgiveness is the fulcrum of change, the opening of what can be.',
  },
  {
    id: 'forgive-you', n: 20, category: 'Forgiveness',
    title: 'I Forgive You', element: 'cosmos', motif: 'cosmos',
    phrase: 'For injury or pain caused to me consciously or unconsciously, I offer forgiveness.',
    audio: '01-i-forgive-you.mp3',
    body: 'Listen… Can you hear the silence, the peace that comes in the moment of forgiveness? Two bodies wrapped in the elemental world are filled with the universe. Here lies the opening of the answers for us. To forgive is not to forget. Boundaries matter. To move past the harm we have received is to understand suffering and to use our sacred energy in a new way, moving into liberation. Move into this at your own pace.',
  },
  {
    id: 'forgive-self', n: 21, category: 'Forgiveness',
    title: 'I Forgive Myself', element: 'cosmos', motif: 'heart',
    phrase: 'For injury and pain I caused myself consciously or unconsciously, I offer myself forgiveness.',
    audio: '02-i-forgive-myself.mp3',
    body: 'The heart holds the universe. Its steady rhythm tells us it will beat forever, for this is no ordinary heart. The entire cosmos is available in the heart-mind. The key to the infinite is to let go and offer forgiveness to the self. This does not excuse or explain the harm done, repeated or felt. Use this moment to turn towards the infinite and breathe in and out total self-forgiveness.',
  },

  // ── Rest ──
  {
    id: 'rest', n: 22, category: 'Rest',
    title: 'Rest', element: 'rest', motif: 'world',
    audio: '22-the-jewel-tree.mp3',
    body: 'This card is an invitation to rest. Akin to the last card in a traditional tarot deck’s Major Arcana, The World, the completion of the journey is when the practitioner rests in the expansive work accomplished, and the world is discovered. Open the mind and body to calm observance, non-action and peace. Sit with this. Walk with this in your heart-mind. Be at rest. Hold rest throughout your day. Know that you are carried with, and in, the knowledge of the masters who went before you. Resting heart in the universe of practice. Fully embodied in all the qualities of an awakened heart. You are closer than you think. Rest.',
  },

  // ── The Six Mudras · the six perfections ──
  {
    id: 'mudra-prithvi', n: 23, category: 'The Six Mudras',
    title: 'Prithvi Mudra', element: 'crown', motif: 'mudra',
    phrase: 'Turn towards the shared suffering of all sentient beings.',
    meta: { chakra: 'Crown Chakra', color: 'Purple', keywords: 'Consciousness, Compassion' },
    body: 'A mudra is a yoga hand gesture paired with a color corresponding to a chakra and a sigil that relates to the phrase on the card. These cards offer a means to develop the six perfections: generosity, patience, enthusiastic effort, ethical discipline, concentration and wisdom. When you pull this card, concentrate on holding your awareness on the mudra, phrase and chakra — here, the crown.',
  },
  {
    id: 'mudra-granthita', n: 24, category: 'The Six Mudras',
    title: 'Granthita Mudra', element: 'throat', motif: 'mudra',
    phrase: 'From true peace comes true liberation.',
    meta: { chakra: 'Throat Chakra', color: 'Yellow', keywords: 'Earth, Peacefulness' },
    body: 'A mudra is a yoga hand gesture paired with a color corresponding to a chakra and a sigil that relates to the phrase on the card. As you work with these cards, you develop your ability to move awareness around your body and hold it at different centers — here, the throat — exploring different characteristics of energies.',
  },
  {
    id: 'mudra-gyan', n: 25, category: 'The Six Mudras',
    title: 'Gyan Mudra', element: 'heart', motif: 'mudra',
    phrase: 'There is no beginning and no end to our connection.',
    meta: { chakra: 'Heart Chakra', color: 'White', keywords: 'Space, Openness' },
    body: 'A mudra is a yoga hand gesture paired with a color corresponding to a chakra and a sigil that relates to the phrase on the card. Sigils have been used for ages in ritual practice — a symbol distilled from a phrase that can be worn, memorized, drawn in the air, or placed close as a reminder of your intention. Hold your awareness at the heart center.',
  },
  {
    id: 'mudra-hakini', n: 26, category: 'The Six Mudras',
    title: 'Hakini Mudra', element: 'navel', motif: 'mudra',
    phrase: 'Wisdom is understanding how to act with truth.',
    meta: { chakra: 'Navel Chakra', color: 'Red', keywords: 'Fire, Wisdom' },
    body: 'A mudra is a yoga hand gesture paired with a color corresponding to a chakra and a sigil that relates to the phrase on the card. These cards inspire the awareness and expansion of the six perfections. Concentrate on holding your awareness on the mudra, phrase and chakra — here, the navel.',
  },
  {
    id: 'mudra-namskara', n: 27, category: 'The Six Mudras',
    title: 'Namskara Mudra', element: 'sacral', motif: 'mudra',
    phrase: 'I hold my heart in love.',
    meta: { chakra: 'Sacral Chakra', color: 'Green', keywords: 'Wind, Love' },
    body: 'A mudra is a yoga hand gesture paired with a color corresponding to a chakra and a sigil that relates to the phrase on the card. As you work with these cards, you develop your ability to move awareness around your body and hold it at the sacral center, in love.',
  },
  {
    id: 'mudra-prana', n: 28, category: 'The Six Mudras',
    title: 'Prana Mudra', element: 'root', motif: 'mudra',
    phrase: 'Our lives are a journey shared through our togetherness.',
    meta: { chakra: 'Root Chakra', color: 'Blue', keywords: 'Water, Community' },
    body: 'A mudra is a yoga hand gesture paired with a color corresponding to a chakra and a sigil that relates to the phrase on the card. These cards develop the six perfections. Hold your awareness at the root center, in the felt sense of community and shared journey.',
  },

  // ── The Three Doors ──
  {
    id: 'door-body', n: 29, category: 'The Three Doors',
    title: 'Body', element: 'body', motif: 'door',
    body: 'The three doors to enlightenment are the body, speech and mind. The body operates from where the brain lives, activated by the white light of awakening. The traveler holds a palace in the body. Intricate, glorious, vast and worthy of respect for what enters and what is forbidden. The white lights of awakening permeate the body, building focus and reverence for the sacred experience of awakening to life. The card asks us how aware we are of the body.',
  },
  {
    id: 'door-speech', n: 30, category: 'The Three Doors',
    title: 'Speech', element: 'speech', motif: 'door',
    body: 'Speech lives in the center of the throat, activated by the red light of awakening. The traveler feels the red light at the throat center. There is nothing timid about stillness; taking a pause is powerful. Our speech can warm or harm. It is our practice and awareness that builds the capacity for appropriate speech. The card asks us how aware we are of our speech.',
  },
  {
    id: 'door-mind', n: 31, category: 'The Three Doors',
    title: 'Mind', element: 'mind', motif: 'door',
    body: 'The mind is where the heart resides in the body, activated by the blue light of awakening. The traveler’s mind has the capacity for limitless awareness. It is oceanic and powerful. The blue of the water expands as the mind opens and awakens. The mind is as infinite as the cloudless sky. The card asks us to be aware of opening the mind.',
  },

  // ── The Four Aspects ──
  {
    id: 'aspect-sila', n: 32, category: 'The Four Aspects',
    title: 'Sila', element: 'forest', motif: 'path',
    body: 'Ethical and virtuous behavior is a cornerstone of healthy practice. One can pull this card and explore their relationship to what is called right speech, right action and right livelihood. Is your speech true, kind, helpful and timely? Are your actions constructive towards reducing harm for all sentient beings? Is your work in the world considerate of who you wish to be? The traveler moves from the dark of the forest into the light of awareness. What does the card show you?',
  },
  {
    id: 'aspect-ahimsa', n: 33, category: 'The Four Aspects',
    title: 'Ahimsa', element: 'forest', motif: 'bird',
    body: 'The practice and concept of non-violence is as ancient as it is crucial to our lives today. We are in a time of response. Our actions contribute to the growth and decline of our world. It is not passive; there is choice. The bird in flight has a true nature, but there is choice in movement. What is yours? What is your direction? How do you engage with and connect to the concept of non-violence in thought, speech and action? Where will you go in your flight?',
  },
  {
    id: 'aspect-dana', n: 34, category: 'The Four Aspects',
    title: 'Dāna', element: 'forest', motif: 'rose',
    body: 'The practice of generosity crosses every culture, religion and path of awakening. Our current world often surrenders to being generous only in money and charity. But we have the opportunity to practice total generosity in action, speech and awareness. Generosity is portrayed by the image of two roses converging and supporting one another while maintaining their individual beauty. Let this card encourage you to expand your definition and activity of living in generosity.',
  },
  {
    id: 'aspect-sunyata', n: 35, category: 'The Four Aspects',
    title: 'Sunyata', element: 'forest', motif: 'chains',
    body: 'Working with the concept of emptiness is often misunderstood. In this context, it does not mean we should seek disengagement or nihilism. To work with emptiness is to invite in possibility; specifically, the possibility that our perspective is limited and confining. When we work with this card, we are open to liberating ourselves from our fixed views and immediate reactions. The broken cuffs and severed chains mark a distinction between how things appear and how they actually are. Emptiness means to free ourselves from ourselves and view the world from this vantage point.',
  },

  // ── The Five Wisdom Buddhas ──
  {
    id: 'buddha-akshobhya', n: 36, category: 'The Five Wisdom Buddhas',
    title: 'Akshobhya', element: 'buddha', motif: 'elephant',
    phrase: 'Where are you with awareness of your wisdom?',
    meta: { vehicle: 'The Elephant' },
    body: 'Arising from the lotus, the elephant, in its stillness and power, is aware of its wisdom. Wisdom is not simply knowledge; it is understanding the use of knowledge. Pulling this card is an invitation to bring awareness to the corresponding perspective, guiding us to open up even more in our spiritual expansion.',
  },
  {
    id: 'buddha-vairocana', n: 37, category: 'The Five Wisdom Buddhas',
    title: 'Vairocana', element: 'buddha', motif: 'dragon',
    phrase: 'Where are you with awareness of your life force?',
    meta: { vehicle: 'The Dragon' },
    body: 'Arising from the lotus is the dragon, an enlightened expression of life force. Life force is the sacred energy moving through us individually and as a collective field. Pulling this card is an invitation to recognize all sentient beings as sacred and to open up even more in our spiritual expansion.',
  },
  {
    id: 'buddha-amitabha', n: 38, category: 'The Five Wisdom Buddhas',
    title: 'Amitabha', element: 'buddha', motif: 'peacock',
    phrase: 'Where are you with awareness of your desire?',
    meta: { vehicle: 'The Peacock' },
    body: 'Arising from the lotus is the peacock, brilliant with infinite light and splendor. Our world sees the pride of the peacock, seducing with its beauty. The source of seduction is desire: a want for sensory pleasure. Pulling this card is an invitation to bring awareness to desire.',
  },
  {
    id: 'buddha-ratnasambhava', n: 39, category: 'The Five Wisdom Buddhas',
    title: 'Ratnasambhava', element: 'buddha', motif: 'lion',
    phrase: 'Where are you with awareness of your pride?',
    meta: { vehicle: 'The Lion' },
    body: 'Arising from the lotus is the lion, stoic and poised in its magnificence. The lion has a presence that exudes confidence and power. This power benefits from being measured and appropriate but is problematic when it runs too wild and turns to conceit and pride. Pulling this card is an invitation to bring awareness to pride.',
  },
  {
    id: 'buddha-amoghasiddhi', n: 40, category: 'The Five Wisdom Buddhas',
    title: 'Amoghasiddhi', element: 'buddha', motif: 'garuda',
    phrase: 'Where are you with awareness of your fear?',
    meta: { vehicle: 'The Garuda' },
    body: 'Arising from the lotus is the fearless and ferocious garuda (half-man / half-eagle). The garuda feeds on negative delusions and energies that disrupt our lives and diverge us from the path. Pulling this card is an invitation to bring awareness to fear.',
  },
]

export const cardById = (id: string) => cards.find((c) => c.id === id)

// Element → palette + label for the card-design system.
export const elements: Record<
  Element,
  { label: string; from: string; to: string; ink: string; accent: string }
> = {
  fire:   { label: 'Fire · Loving-Kindness',  from: '#b9472a', to: '#e0913f', ink: '#fff6ec', accent: '#ffd9a8' },
  water:  { label: 'Water · Compassion',       from: '#1f5a6b', to: '#3f9fa8', ink: '#effaff', accent: '#bdeaf0' },
  wind:   { label: 'Wind · Sympathetic Joy',   from: '#5a5aa0', to: '#c47fb0', ink: '#fdf3ff', accent: '#f2d6ff' },
  earth:  { label: 'Earth · Equanimity',       from: '#5e6b3a', to: '#9c8a4e', ink: '#f9f7ec', accent: '#e4dca8' },
  breath: { label: 'Air & Earth · Breath',     from: '#3d6b6e', to: '#86a05c', ink: '#f4faf2', accent: '#cfe6c2' },
  cosmos: { label: 'Cosmos · Forgiveness',     from: '#2a2350', to: '#6b4a8f', ink: '#f6f0ff', accent: '#d9c8ff' },
  rest:   { label: 'Completion · Rest',        from: '#7a5a2e', to: '#c8a87a', ink: '#fff8ee', accent: '#f0dcb8' },
  crown:  { label: 'Crown Chakra',             from: '#4a2d6b', to: '#8a5fb0', ink: '#f7f0ff', accent: '#e0c8ff' },
  throat: { label: 'Throat Chakra',            from: '#7a5e1e', to: '#c8a83f', ink: '#fffae8', accent: '#f0dc9a' },
  heart:  { label: 'Heart Chakra',             from: '#6b6b6b', to: '#b8b0a8', ink: '#fbfbfa', accent: '#ece7e0' },
  navel:  { label: 'Navel Chakra',             from: '#8a2f24', to: '#c8553f', ink: '#fff0ec', accent: '#f5c4b4' },
  sacral: { label: 'Sacral Chakra',            from: '#2f6b4a', to: '#5fa87a', ink: '#f0fff4', accent: '#bfe6cc' },
  root:   { label: 'Root Chakra',              from: '#243a6b', to: '#4f6fb0', ink: '#eef3ff', accent: '#bccdf0' },
  body:   { label: 'Door of the Body',         from: '#6b6b6b', to: '#c0bab2', ink: '#fbfbfa', accent: '#ece7e0' },
  speech: { label: 'Door of Speech',           from: '#8a2f24', to: '#c8553f', ink: '#fff0ec', accent: '#f5c4b4' },
  mind:   { label: 'Door of the Mind',         from: '#243a6b', to: '#4f6fb0', ink: '#eef3ff', accent: '#bccdf0' },
  forest: { label: 'The Four Aspects',         from: '#2f4a2e', to: '#6b7a3a', ink: '#f3f8ec', accent: '#cfe0a8' },
  buddha: { label: 'The Five Wisdom Buddhas',  from: '#5a3a1e', to: '#a07850', ink: '#fff6ea', accent: '#f0d6b0' },
}
