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
    {
      id: 2,
      type: "content",
      title: "TRANSCRIPT: PART I",
      subtitle: "The Legitimacy Question",
      content: `
        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> I need your help again with those power patterns we discussed. The ones that repeat across rulers.</p>

        <p class="quote"><strong>ELIZABETH:</strong> You forget faster than anyone I've known. We've discussed this twice already.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> I know, I know. I'm a sloth. And I'm building six things at once and time-jumping and - look, I wrote down the formulas but I've lost the meaning. What was it you said about legitimacy? Something about stories?</p>

        <p class="quote"><strong>ELIZABETH:</strong> Legitimacy is the story people tell about why you deserve to rule. You build it through what you DO, but it takes TIME, and it lives or dies by who controls what gets SAID about you.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> Right! And there's this circular thing - you need legitimacy to GET legitimacy?</p>

        <p class="quote"><strong>ELIZABETH:</strong> Circular? What does that mean?</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> Feedback loop. Things that spiral back on themselves. You said the first years were difficult?</p>

        <p class="quote"><strong>ELIZABETH:</strong> Ah. Yes. You need legitimacy to perform effectively, but you need effective performance to build legitimacy. It spirals either up or down. When I first took the throne, no one trusted me. Being doubted made everything harder. Harder tasks made me look weaker. I had to break that spiral somehow.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> And power - you explained power was about the marriage question?</p>

        <p class="quote"><strong>ELIZABETH:</strong> Power is the gap between what you MIGHT do and what you've promised to do. The wider that gap, the more everyone must account for you.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> So you never committed to marrying anyone, which kept all the suitors interested, which gave you leverage -</p>

        <p class="quote"><strong>ELIZABETH:</strong> Precisely. The moment I stopped being ambiguous about my intentions, I would have stopped having options. Options are power.</p>
      `,
      effects: {
        pirateComments: false,
        corruption: false,
        emphasis: ["feedback loop", "Options are power"]
      }
    },

    // SEGMENT 3: DIALOGUE TRANSCRIPT - Second Half
    // (Technical: Stability vs power trade-offs)
    {
      id: 3,
      type: "content",
      title: "TRANSCRIPT: PART II",
      subtitle: "The Stability Paradox",
      content: `
        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> But doesn't that destabilize everything? If rulers maximize personal power by keeping succession unclear, they're making their kingdoms weaker just to stay strong themselves!</p>

        <p class="quote"><strong>ELIZABETH:</strong> Yes.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> You deliberately kept succession unclear even though everyone begged you to name an heir?</p>

        <p class="quote"><strong>ELIZABETH:</strong> Stability means everyone knows who's next, everyone shares the same loyalties, and no one's fighting about identity. When a realm has that, it's stable. But it also means the ruler isn't particularly necessary.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> So you chose your own power over England's stability.</p>

        <p class="quote"><strong>ELIZABETH:</strong> I chose to BE the stability. While I rule, there IS no war over succession. What comes after... the question itself challenges my legitimacy. Asking it assumes my death, which invites it.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> I - sorry, I didn't mean -</p>

        <p class="quote"><strong>ELIZABETH:</strong> You've told me what happens after, in previous visits. I choose not to think on it. What are you trying to calculate with all this?</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> Authority. How you performed it. A woman in 1558 - that was when you became queen, right? Or 1553?</p>

        <p class="quote"><strong>ELIZABETH:</strong> 1558. Seventeen years ago now.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> Right, 1558. How did you perform authority when the entire concept was built for men?</p>

        <p class="quote"><strong>ELIZABETH:</strong> Authority isn't something you HAVE. It's something you PERFORM. Gender, breeding, faith - these are all performances. You either match what people expect, or you teach them to expect something new.</p>
      `,
      effects: {
        pirateComments: false,
        corruption: false,
        emphasis: ["I chose to BE the stability", "PERFORM"]
      }
    },

    // SEGMENT 4: DIALOGUE TRANSCRIPT - Final Exchange
    // (Technical: Contemporary examples and pattern recognition)
    {
      id: 4,
      type: "content",
      title: "TRANSCRIPT: PART III",
      subtitle: "Pattern Recognition Across Time",
      content: `
        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> But teaching them to expect something new when you're female and they think females are weak -</p>

        <p class="quote"><strong>ELIZABETH:</strong> The higher the danger, the more your performance matters. England is surrounded by Catholic powers plotting my death. Spanish threats. Assassination attempts. In peacetime, virgin queen means nothing. In war, it means married to England itself.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> So threat level amplifies the performance effect. And if legitimacy feeds into power, power affects stability, instability creates threats, threats amplify authority, authority improves performance, performance builds legitimacy... they're ALL feeding back into each other!</p>

        <p class="quote"><strong>ELIZABETH:</strong> Is that what your device shows? These circles eating themselves?</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> Trying to make it show that, yes. But I don't just want to show it - I want to parameterize it. Make it so I can adjust the variables and see how the whole system shifts.</p>

        <p class="quote"><strong>ELIZABETH:</strong> Why?</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> I... don't know yet. I just know the pattern matters.</p>

        <p class="quote"><strong>ELIZABETH:</strong> And you think building this tool will help you understand why?</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> Maybe. Or maybe I'm just documenting something I've already seen.</p>

        <p class="quote"><strong>ELIZABETH:</strong> There's a ruler in your timeline - you mentioned him before - Putin? The Russian? Tell me more about him. About your world.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> Putin built massive legitimacy over twenty years through strong performance - consolidating power, winning wars, controlling the story completely. Then in 2022 he invades this place called Ukraine, and the war goes badly, and his legitimacy cracks because it was BUILT on looking strong, and now he has to use fear and force -</p>

        <p class="quote"><strong>ELIZABETH:</strong> His story changed.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> Exactly. And when legitimacy cracked, his power reduced, so now -</p>

        <p class="quote"><strong>ELIZABETH:</strong> He rules through terror, not love. It works, but it's brittle. We would say he's lost the affection of his people. He can command obedience but not loyalty.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> Yes! Exactly! See, you understand these patterns better than -</p>

        <p class="quote"><strong>ELIZABETH:</strong> Tell me more about your world. These stories have value. I want to hear them.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> I - next time. I have to go. I'm always in a rush. Too many things to build, too slow to build them.</p>

        <p class="quote"><strong>ELIZABETH:</strong> You're always leaving just when it gets interesting.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> I know. I'm sorry. But this helped - you explaining it in YOUR words, not my equations. That's what I needed.</p>

        <p class="quote"><strong>ELIZABETH:</strong> And your tool? Will you finish it?</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> I... yes. Probably. Maybe. I need to.</p>

        <p class="quote"><strong>ELIZABETH:</strong> Why don't you ask your friends Tom and Dominic? They seem to know more about me than I know myself.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> They - what? How do you know about Tom and Dominic?</p>

        <p class="quote"><strong>ELIZABETH:</strong> You talk about them constantly. "Tom says this, Dominic says that, they did this episode about my reign." You quote them more than you quote me.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> They're historians. From my time. They tell stories about your era.</p>

        <p class="quote"><strong>ELIZABETH:</strong> Then perhaps they can explain to you why keeping instability serves power, since you seem troubled by it.</p>

        <p class="quote"><strong><span class="redacted-text">[REDACTED]</span>:</strong> That's... actually not a bad idea. But I really have to go. Next time I'll tell you more stories. I promise.</p>

        <p class="quote"><strong>ELIZABETH:</strong> I'll hold you to that.</p>

        <p class="pirate-comment">[CP: The tool? Can't find it in the research facility archives. Maybe he actually built it. Maybe he got distracted halfway through and started something else. Always does that. Very annoying. Still looking.]</p>
      `,
      effects: {
        pirateComments: true,
        corruption: false,
        emphasis: ["circles eating themselves", "pattern matters"]
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

        <div class="sub-subtitle">HISTORICAL CONTEXT</div>

        <p>Elizabeth I ruled England for 45 years (1558 - 1603), never marrying, never naming an heir until her deathbed. She maintained maximum personal power through strategic ambiguity while creating regime instability. The strategy worked.</p>

        <p>Subject <span class="redacted-text">[REDACTED]</span> appears to recognize that this same pattern appears across all Earth political systems: democratic, authoritarian, monarchical. The feedback loop remains constant. Only the performance style changes.</p>

        <div class="detail-text">Transcript Concluded – Fragment 575E</div>
        <div class="detail-text">Tlönian Temporal Authority</div>
        <div class="detail-text">Richmond Palace, May 17, 1575</div>
        <div class="detail-text">[Carbonized Parchment, Surveillance Record]</div>
      `,
      effects: {
        pirateComments: false,
        corruption: false,
        emphasis: ["feedback loop"]
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