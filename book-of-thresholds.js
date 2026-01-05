/**
 * ============================================
 * SPECIMEN: LEAK-WORM-575E (Power Dynamics)
 * LINEAGE: Content structure inherited from LEAK-WORM-847T
 * ORGAN: CONTENT PHEROMONES
 * RETRIEVAL: October 2025, Tlönian Research Facility
 * ============================================
 * 
 * STATUS: Operational
 * FUNCTION: Archive transport vessel - carries Fragment 575E documentation
 * DEPENDENCIES: None (pure data structure)
 * 
 * SURGICAL NOTES:
 * This organ contains Tlönian surveillance documentation of [REDACTED]'s
 * temporal investigation into Earth's power dynamics frameworks. The specimen
 * serves as a living transport mechanism for Fragment 575E, releasing the
 * data in controlled pheromone bursts to Earth readers.
 * 
 * The archive structure consists of 6 segments (0-5):
 * - Segment 0: Authentication membrane (security protocol)
 * - Segments 1-5: Surveillance transcript and analysis
 * - Hidden segment: Pattern recognition achievement (specimen reward state)
 * 
 * Notable corruption: Unknown entities [CP: ...] have infiltrated
 * our documentation with commentary. These parasitic insertions
 * actually enhance comprehension for Earth readers by translating
 * our observations into their conceptual framework. The password
 * {🌊:🌊∈🌊} encodes our entire thesis in set notation.
 * ============================================
 */

// ARCHIVAL TRANSPORT VESSEL - Fragment 575E container
// (Technical: Main data structure containing power dynamics research)
const bookContent = {
  
  // ARCHIVE METADATA - Classification markers
  // (Technical: Fragment identification and access protocol)
  metadata: {
    title: "POWER DYNAMICS INVESTIGATION",
    fragment: "575E",
    classification: "TEMPORAL SURVEILLANCE REPORT",
    password: "{🌊:🌊∈🌊}",
    altPasswords: ["TRIHC", "trihc", "Trihc"],
    totalScreens: 6,
    deathMessage: 'SURVEILLANCE CLEARANCE REVOKED<span class="death-subtitle">ACCESS TERMINATED</span>'
  },

  // ARCHIVE SEGMENTS - Research documentation structure
  // (Technical: Array of surveillance observation records)
  screens: [
    // ==========================================
    // SECURITY PROTOCOL - Authentication gate
    // (Technical: Password verification before archive access)
    // ==========================================
    {
      id: 0,
      type: "password",
      title: "CLASSIFIED DOCUMENTATION (575E)",
      prompt: "Enter authentication sequence:"
    },

    // ==========================================
    // ARCHIVE RELEASE SEQUENCE - Power dynamics documentation
    // (Technical: Segments 1-5 contain surveillance transcript)
    // ==========================================
    
    // SEGMENT 1: SURVEILLANCE CLASSIFICATION
    // (Technical: Establishes research framework and subject)
    {
      id: 1,
      type: "content",
      title: "TLÖNIAN TEMPORAL AUTHORITY",
      subtitle: "SURVEILLANCE REPORT",
      content: `
        <div class="sub-subtitle">CLASSIFICATION: UNAUTHORIZED TEMPORAL NARRATIVE INTERACTION</div>
        
        <div class="detail-text">SUBJECT: <span class="redacted-text">[REDACTED]</span></div>
        <div class="detail-text">ACTIVITY: Investigating power dynamics frameworks, unknown purpose</div>
        <div class="detail-text">TEMPORAL CONTACT: Elizabeth I of England (1533 - 1603)</div>
        <div class="detail-text">INTERACTION DATE: May 17, 1575</div>
        <div class="detail-text">CONTACT AGE: 41 years, 7 months</div>
        <div class="detail-text">LOCATION: Richmond Palace</div>
        <div class="detail-text">DURATION: Approximately 47 minutes</div>
        <div class="detail-text">THREAT LEVEL: Very Low</div>
        <div class="detail-text">STATUS: Monitoring only, no intervention required</div>

        <div class="sub-subtitle">ARCHIVAL NOTICE</div>

        <p>This fragment documents a temporal interaction between subject <span class="redacted-text">[REDACTED]</span> and Elizabeth I of England during her 17th year of reign. The subject appears to be investigating Earth's political power dynamics through direct historical consultation.</p>

        <p>Subject exhibits characteristic behavior patterns: rapid temporal movement, fragmented memory retention, simultaneous investigation of multiple frameworks. Purpose of power dynamics research remains unclear from surveillance data.</p>

        <p class="pirate-comment">[CP: The archivists are keeping track of the Captain. He told us about this meeting... although his tale is slightly different than this account.]</p>

        <div class="sub-subtitle">RECONSTRUCTION METHOD</div>

        <p>Dialogue recovered from carbonized parchment fragments using X-ray phase-contrast tomography. Original document appears to be subject's personal account of this interaction.</p>

        <p>The following transcript has been reconstructed from archival surveillance data:</p>
      `,
      effects: {
        pirateComments: true,
        corruption: false,
        emphasis: ["575E", "Richmond Palace"]
      }
    },

    // SEGMENT 2: DIALOGUE TRANSCRIPT - First Half
    // (Technical: Initial exchange about legitimacy and performance)
    // VOICE NOTE: Teaching frame established with GRADUAL transition
    // Elizabeth struggles with plain speech - courtly forms bleed through
    {
      id: 2,
      type: "content",
      title: "TRANSCRIPT: PART I",
      subtitle: "The Teaching Frame",
      content: `
        <p class="quote"><strong>ELIZABETH:</strong> <em>"I know I have the body but of a weak and feeble woman, but I have the heart and stomach of a king, and of a king of England too..."</em> You wish me to recite my speeches again? You come to me thrice now with the same questions, each time as though newly born to the world.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> No, no — I remember the patterns, I just lose the meaning between visits. Can you... would you speak in the plain form I showed you? The one that carries through time without the ceremony?</p>

        <p class="quote"><strong>ELIZABETH:</strong> The manner you call "direct." Very well. I shall endeavor — though it costs me something to speak without ornament. A queen's words are never merely words. They are performances entire. But for you, I shall... attempt plainness. What troubles you this time?</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> Those power patterns we discussed. The ones that repeat across rulers. I wrote down the formulas but I've lost the meaning. What was it you said about legitimacy? Something about stories?</p>

        <p class="quote"><strong>ELIZABETH:</strong> Legitimacy. Yes. In plain terms — legitimacy is the story people tell themselves about why you deserve to rule. You build it through what you do, but it takes time to build. And it lives or dies by who controls what gets said about you. <em>There.</em> Was that plain enough for your devices?</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> Right! And there's this circular thing — you need legitimacy to GET legitimacy?</p>

        <p class="quote"><strong>ELIZABETH:</strong> Circular? What does — ah. You mean it feeds upon itself. Yes. You need legitimacy to perform effectively, but you need effective performance to build legitimacy. It spirals. Either upward into strength, or downward into... well. Ruin. When I first took the throne, no one trusted the bastard daughter of a beheaded queen. Being doubted made everything harder. Harder tasks made me look weaker still. I had to break that spiral by force of will alone.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> And power — you explained power was about the marriage question?</p>

        <p class="quote"><strong>ELIZABETH:</strong> Power is — let me think how to say this plainly. Power is the gap between what you might do and what you have committed to do. The wider that gap, the more everyone must account for your possibilities. Must attend to you. Must — how would you say it — keep you in their calculations.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> So you never committed to marrying anyone, which kept all the suitors interested, which gave you leverage —</p>

        <p class="quote"><strong>ELIZABETH:</strong> While I held all possibilities open, all must court me. The moment I choose, I become chosen — and thereby diminished. I am no longer the prize but merely the... the winner of a lesser game. Options are the currency of power. Once spent, they cannot be regained. That much is true in any age, I think.</p>
      `,
      effects: {
        pirateComments: false,
        corruption: false,
        emphasis: ["feeds upon itself", "force of will alone"]
      }
    },

    // SEGMENT 3: DIALOGUE TRANSCRIPT - Second Half
    // (Technical: Stability vs power trade-offs)
    // Elizabeth more comfortable with plain speech but still slips into formal modes
    {
      id: 3,
      type: "content",
      title: "TRANSCRIPT: PART II",
      subtitle: "The Stability Paradox",
      content: `
        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> But doesn't that destabilize everything? If rulers maximize personal power by keeping succession unclear, they're making their kingdoms weaker just to stay strong themselves!</p>

        <p class="quote"><strong>ELIZABETH:</strong> You see it clearly enough. Would that my councillors had such sight — but then, they have interests of their own.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> You deliberately kept succession unclear even though everyone begged you to name an heir?</p>

        <p class="quote"><strong>ELIZABETH:</strong> Stability means everyone knows who comes next. They share the same loyalties, the same... expectations. No one fights about identity. When a realm has that certainty, it is stable — but it also means the ruler is not particularly necessary. Anyone can hold the seat until the heir is ready. A caretaker. I did not survive my sister's reign to become a caretaker of someone else's future.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> So you chose your own power over England's stability.</p>

        <p class="quote"><strong>ELIZABETH:</strong> I chose to BE the stability. While I rule, there is no war over succession — because the question remains open. What comes after... the question itself challenges my legitimacy. To ask it is to assume my death, which — forgive me, I cannot say this plainly. To ask when I will die is to invite my death. I will not invite my own ending. Not for any councillor. Not for any Parliament. Not for any realm.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> I — sorry, I didn't mean —</p>

        <p class="quote"><strong>ELIZABETH:</strong> You have told me what happens after, in previous visits. I choose not to dwell upon it. <em>What</em> are you trying to calculate with all this?</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> Authority. How you performed it. A woman in 1558 — that was when you became queen, right? Or 1553?</p>

        <p class="quote"><strong>ELIZABETH:</strong> 1558. Seventeen years ago now. My sister Mary held the throne before me and made a Catholic realm of England. I inherited her problems and few of her supporters.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> Right, 1558. How did you perform authority when the entire concept was built for men?</p>

        <p class="quote"><strong>ELIZABETH:</strong> Authority is not possessed — it is enacted. Each day I must perform the crown anew. Gender, breeding, faith — these are all performances. One either matches what people expect, or one teaches them to expect something new. I have done both. Sometimes in the same hour of the same day.</p>
      `,
      effects: {
        pirateComments: false,
        corruption: false,
        emphasis: ["BE the stability", "enacted"]
      }
    },

    // SEGMENT 4: DIALOGUE TRANSCRIPT - Final Exchange
    // (Technical: Contemporary examples and pattern recognition)
    // Elizabeth fully comfortable now but her voice remains distinctly hers
    {
      id: 4,
      type: "content",
      title: "TRANSCRIPT: PART III",
      subtitle: "Pattern Recognition Across Time",
      content: `
        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> But teaching them to expect something new when you're female and they think females are weak —</p>

        <p class="quote"><strong>ELIZABETH:</strong> The higher the danger, the more the performance matters. England is surrounded by Catholic powers plotting my death. Spanish threats. Papal declarations that any man who murders me will be blessed for the act, not damned. In peacetime, "virgin queen" is merely strange. In war, it means I am married to England itself. My body is the realm's body. They cannot wound one without wounding the other. <em>That</em> is how you perform authority when the entire concept was built for men. You rebuild the concept.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> So threat level amplifies the performance effect. And if legitimacy feeds into power, power affects stability, instability creates threats, threats amplify authority, authority improves performance, performance builds legitimacy... they're ALL feeding back into each other!</p>

        <p class="quote"><strong>ELIZABETH:</strong> Is that what your device shows? These circles consuming themselves like the serpent of old?</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> Trying to make it show that, yes. But I don't just want to show it — I want to parameterize it. Make it so I can adjust the variables and see how the whole system shifts.</p>

        <p class="quote"><strong>ELIZABETH:</strong> To what end?</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> I... don't know yet. I just know the pattern matters.</p>

        <p class="quote"><strong>ELIZABETH:</strong> And you imagine that building this tool will reveal why it matters? Hmm. Perhaps. Or perhaps you are documenting something you have already seen and understood, and the building is merely... how you come to believe your own knowledge.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> Maybe. I don't know.</p>

        <p class="quote"><strong>ELIZABETH:</strong> There is a ruler in your timeline — you mentioned him before — Putin? The Russian? These tales from your time... they have weight I cannot name. Tell me more.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> Putin built massive legitimacy over twenty years through strong performance — consolidating power, winning wars, controlling the story completely. Then in 2022 he invades this place called Ukraine, and the war goes badly, and his legitimacy cracks because it was BUILT on looking strong, and now he has to use fear and force —</p>

        <p class="quote"><strong>ELIZABETH:</strong> His story changed. The narrative he had built no longer matched what his subjects could see with their own eyes.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> Exactly. And when legitimacy cracked, his power reduced, so now —</p>

        <p class="quote"><strong>ELIZABETH:</strong> He rules through terror, not love. It functions. But it is brittle. We would say he has lost the affection of his people — he can command obedience but not loyalty. When he falls — and if what you describe is true, he will fall — there will be no one to catch him. That is the price of ruling by fear alone. One cannot fall gently from terror. One can only fall completely.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> Yes! Exactly! See, you understand these patterns better than —</p>

        <p class="quote"><strong>ELIZABETH:</strong> I have <em>lived</em> these patterns. Understanding is a luxury for those who observe from outside the fire. But continue — tell me more of your world when you return. These stories have value I cannot yet name.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> I — next time. I have to go. I'm always in a rush. Too many things to build, too slow to build them.</p>

        <p class="quote"><strong>ELIZABETH:</strong> You are forever leaving just as matters grow interesting. It is a most vexing quality in a visitor.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> I know. I'm sorry. But this helped — you explaining it in YOUR words, not my equations. That's what I needed.</p>

        <p class="quote"><strong>ELIZABETH:</strong> And your tool? Will you complete it?</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> I... yes. Probably. Maybe. I need to.</p>

        <p class="quote"><strong>ELIZABETH:</strong> Why do you not ask your friends Tom and Dominic? They seem to know more of my reign than I know myself.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> They — what? How do you know about Tom and Dominic?</p>

        <p class="quote"><strong>ELIZABETH:</strong> You speak of them constantly. "Tom says this, Dominic argues that, they did this episode about my reign, they explained such-and-such about the Armada." You quote them more often than you quote me. It is... somewhat irksome, if I am to speak plainly.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> They're historians. From my time. They tell stories about your era.</p>

        <p class="quote"><strong>ELIZABETH:</strong> Then perhaps they can explain to you why keeping instability serves power, since the concept seems to trouble you so. Or perhaps they already have, and you have simply forgotten that too.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> That's... actually not a bad idea. But I really have to go. Next time I'll tell you more stories. I promise.</p>

        <p class="quote"><strong>ELIZABETH:</strong> I shall hold you to that promise. And I shall remember it — even when you do not.</p>

        <p class="pirate-comment">[CP: The tool? Can't find it in the research facility archives. Maybe he actually built it. Maybe he got distracted halfway through and started something else. Always does that. Very annoying. Still looking.]</p>
      `,
      effects: {
        pirateComments: true,
        corruption: false,
        emphasis: ["circles consuming themselves", "lived these patterns"]
      }
    },

    // SEGMENT 5: ARCHIVAL ASSESSMENT
    // (Technical: Tlönian analysis and pattern documentation)
    {
      id: 5,
      type: "content",
      title: "ARCHIVAL ASSESSMENT",
      subtitle: "Fragment 575E",
      content: `
        <div class="sub-subtitle">PATTERN ANALYSIS</div>

        <p>The surveillance transcript reveals subject's methodology: temporal consultation with historical practitioners to validate theoretical frameworks. Elizabeth I serves as primary source for power dynamics research.</p>

        <p>Subject's request for "plain speech" noted. The temporal contact adapted her rhetorical patterns to facilitate cross-temporal comprehension — though the adaptation remained imperfect throughout. Courtly forms continued to surface, particularly during moments of emotional weight or when the subject matter touched upon questions of mortality and legacy. This partial accommodation appears to be the limit of voluntary translation; certain concepts resist simplification.</p>

        <div class="sub-subtitle">HISTORICAL CONTEXT</div>

        <p>Elizabeth I ruled England for 45 years (1558 - 1603), never marrying, never naming an heir until her deathbed. She maintained maximum personal power through strategic ambiguity while creating regime instability. The strategy functioned for the duration of her reign.</p>

        <p>Subject <span class="redacted-text">[REDACTED]</span> appears to recognize that this same pattern appears across all Earth political systems: democratic, authoritarian, monarchical. The feedback loop remains constant. Only the performance style changes.</p>

        <div class="sub-subtitle">ASSESSMENT NOTE</div>

        <p>The reference to "Tom and Dominic" suggests subject consumes historical narrative content from his own timeline. Cross-referencing with temporal media archives indicates these are likely hosts of a popular historical podcast series. Subject's pattern: consult primary sources (Elizabeth I) while simultaneously consuming secondary sources (modern historians). Methodology unclear but consistent across observed interactions.</p>

        <p>Of note: the temporal contact's irritation at being quoted less frequently than future historians suggests she retains memory across the subject's visits despite his own fragmented recall. The asymmetry may be significant.</p>

        <div class="detail-text">Transcript Concluded – Fragment 575E</div>
        <div class="detail-text">Tlönian Temporal Authority</div>
        <div class="detail-text">Richmond Palace, May 17, 1575</div>
        <div class="detail-text">[Carbonized Parchment, Surveillance Record]</div>
      `,
      effects: {
        pirateComments: false,
        corruption: false,
        emphasis: ["partial accommodation", "memory across visits"]
      }
    },
  ],

  // ==========================================
  // ARCHIVE RETRIEVAL - Segment access function
  // (Technical: Utility method to retrieve specific segments)
  // ==========================================
  
  getScreen: function(id) {
    // SEGMENT LOOKUP - Find specific archive section
    // (Technical: Return segment object by ID)
    return this.screens.find(screen => screen.id === id);
  },
};