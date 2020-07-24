
export const level1 =[
  {
    "Name": "Bloodlust",
    "img_src":"/images/Bloodlust.png",
    "Level": 1,
    "Class": "Fire Magic",
    "Effect": "Increases the attack skill of target (or all) allied creature for melee attacks.",
    "Basic": "Target, allied troop receives a +3 attack rating bonus for hand-to-hand attacks.",
    "Advanced": "Target, allied troop receives a +6 attack rating bonus for hand-to-hand attacks.",
    "Expert": "All allied troops receive a +6 attack rating bonus for hand-to-hand attacks.",
    "Cost": "5,4",
    "Duration":"1 rnd/sp",
    "Probability": ["Castle:0",
    "Rampart:0",
    "Tower:0","Inferno:0",
    "Necropolis:0",
     "Dungeon:", "Stronghold:", "Fortress:", "Conflux:"]
  },
  {
    "Name": "Cure ",
    "img_src":"/images/Cure.png",
    "Level": 1,
    "Class": "Water Magic",
    "Effect": "Removes all negative spell effects from target (or all) allied troop and heals it for (10/20/30 + (power x 5)) health points.",
    "Basic": "Removes all negative spell effects from target, allied troop and heals it for (10 + (power x 5)) health points.",
    "Advanced": "Removes all negative spell effects from target, allied troop and heals it for (20 + (Power x 5)) health points.",
    "Expert": "Removes all negative spell effects from all allied troops and heals each for (30 + (Power x 5)) health points.",
    "Cost": [6,5],
    "Duration":"instant",
    "Probability": ["Castle:54","Rampart:54","Tower:[39, 31]","Inferno: 31","Necropolis:0", "Dungeon:30", "Stronghold:31", "Fortress:53", "Conflux: 31"]
  },
  {
    "Name": "Curse ",
    "img_src":"/images/Curse.png",
    "Level": 1,
    "Class": "Fire Magic",
    "Effect": "The targeted (or all) enemy unit(s) deliver minimum or reduced damage when attacking.",
    "Basic": "The targeted enemy unit delivers minimum damage when attacking.",
    "Advanced": "The targeted enemy unit delivers (minimum damage * 0.8 - 1) when attacking. Base damage for each creature cannot be reduced to below 1.",
    "Expert": "All enemy units deliver (minimum damage * 0.8 - 1) when attacking. Base damage for each creature cannot be reduced to below 1.",
    "Cost": [6,5],
    "Duration":"1 rnd/sp",
    "Probability": ["Castle:0","Rampart:0","Tower:[25, 20]","Inferno:31","Necropolis:54", "Dungeon:30", "Stronghold:0", "Fortress:0", "Conflux:0"]
  },
  {
    "Name": "Dispel",
    "img_src":"/images/Dispel.png",
    "Level": 1,
    "Class": "Water Magic",
    "Effect": "Removes all spell effects from target allied, enemy or all creatures and the battlefield.",
    "Basic": "Removes all spell effects from target allied creature troop",
    "Advanced": "Removes all spell effects from target allied or enemy creature troop.",
    "Expert": "Removes all spell effects from all creatures and the battlefield.",
    "Cost": [5,4],
    "Duration":"instant",
    "Probability": ["Castle:54","Rampart:54","Tower:[63,53]","Inferno:53","Necropolis:54", "Dungeon:52", "Stronghold:53", "Fortress:53", "Conflux:53"]
  },
  {
    "Name": "Bless",
    "img_src":"/images/Bless.png",
    "Level": 1,
    "Class": "Water Magic",
    "Effect": "Target (or all) allied creature(s) inflict maximum damage (or maximum +1) when they attack.",
    "Basic": "Creatures in target allied troop inflict maximum damage when they attack.",
    "Advanced": "Creatures in target allied troop inflict maximum damage +1 when they attack.",
    "Expert": "All allied creatures inflict maximum damage +1 when they attack.",
    "Cost": [5,4],
    "Duration":"1 Round/Power",
    "Probability": ["Castle:54","Rampart:32","Tower:[39,31]","Inferno:0","Necropolis:0", "Dungeon:19", "Stronghold:20", "Fortress:31", "Conflux:31"]
  },
  {
    "Name": "Haste ",
    "img_src":"/images/Haste.png",
    "Level": 1,
    "Class": "Air Magic",
    "Effect": "Target (or all) allied troop's speed is increased by 3 (or 5) hexes per turn.",
    "Basic": "Target, allied troop's speed is increased by three hexes/turn.",
    "Advanced": "Target, allied troop's speed is increased by five hexes/turn.",
    "Expert": "All allied troops' speed is increased by five hexes/turn.",
    "Cost": "[6,5]",
    "Duration":"1 rnd/sp",
    "Probability": ["Castle:32","Rampart:54","Tower:[39,31]","Inferno:31","Necropolis:32", "Dungeon:52", "Stronghold:31", "Fortress:53", "Conflux:53"]
  },
  {
    "Name": "Magic Arrow ",
    "img_src":"/images/Magic_Arrow.png",
    "Level": 1,
    "Class": "All Schools",
    "Effect": "Target, enemy troop receives (10/20/30 + (power x 10)) damage",
    "Basic": "Target, enemy troop receives (10 + (power x 10)) damage.",
    "Advanced": "Target, enemy troop receives (20 + (power x 10)) damage.",
    "Expert": "Target, enemy troop receives (30 + (power x 10)) damage.",
    "Cost": [5,4],
    "Duration":"instant",
    "Probability": ["Castle:89","Rampart:89","Tower:[94,89]","Inferno:89","Necropolis:89", "Dungeon:88", "Stronghold:89", "Fortress:89", "Conflux:89"]
  },
  {
    "Name": "Protection from Fire ",
    "img_src":"/images/Protection_from_Fire.png",
    "Level": 1,
    "Class": "Fire Magic",
    "Effect": "Reduces damage taken from fire spells. Basic: Single ally. Expert: All allies.",
    "Basic": "Damage from fire magic spells is reduced by 30% for target, allied troop.",
    "Advanced": 
    "Damage from fire magic spells is reduced by 50% for target, allied troop.",
    "Expert": "Damage from fire magic spells is reduced by 50% for all allied troops.",
    "Cost": [5,4],
    "Duration":"1 rnd/sp",
    "Probability": "[Castle:20,Rampart:20,Tower:[25,20],Inferno:20,Necropolis:20, Dungeon:19, Stronghold:20, Fortress:20, Conflux:20]"
  },
  {
    "Name": "Protection from Water",
    "img_src":"/images/Protection_from_Water.png",
    "Level": 1,
    "Class": "Water Magic",
    "Effect": "Reduces damage taken from water spells. Basic: Single ally. Expert: All allies.",
    "Basic": "Damage from water magic spells is reduced by 30% for target allied troop.",
    "Advanced": "Damage from water magic spells is reduced by 50% for target allied troop.",
    "Expert": "Damage from water magic spells is reduced by 50% for all allied troops.",
    "Cost": [5,4],
    "Duration":"1 rnd/sp",
    "Probability": "[Castle:20,Rampart:20,Tower:[25,20] Inferno: 20,Necropolis:20, Dungeon:19, Stronghold:20, Fortress:20, Conflux:20]"
  },
  {
    "Name": "Shield ",
    "img_src":"/images/Shield.png",
    "Level": 1,
    "Class": "Earth Magic",
    "Effect": "Reduces damage taken from hand-to-hand attacks. Basic: Single ally. Expert: All allies.",
    "Basic": "Hand-to-hand damage delivered to target, allied troop is reduced by 15%.",
    "Advanced": "Hand-to-hand damage delivered to target, allied troop is reduced by 30%.",
    "Expert": "Hand-to-hand damage delivered to all allied troops is reduced by 30%.",
    "Cost": [5,4],
    "Duration":"1 rnd/sp",
    "Probability": "[Castle:54,Rampart:20,Tower:[39, 31],Inferno:20,Necropolis:54, Dungeon:30, Stronghold:31, Fortress:31, Conflux:31]"
  },
  {
    "Name": "Slow ",
    "img_src":"/images/Slow.png",
    "Level": 1,
    "Class": "Earth Magic",
    "Effect": "Decreases speed. Basic: Single enemy. Expert: All enemies.",
    "Basic": "Target, enemy troop's speed is reduced to 25% of normal.",
    "Advanced": "Target, enemy troop's speed is reduced to 50% of normal.",
    "Expert": "All enemy troops' speed ratings are reduced to 50% of normal.",
    "Cost": [6,5],
    "Duration":"1 rnd/sp",
    "Probability": "[Castle: 32,Rampart: 54,Tower: [65, 53],Inferno:53,Necropolis:32, Dungeon:30, Stronghold:31, Fortress:31, Conflux:53]"
  },
  {
    "Name": "Summon Boat ",
    "img_src":"/images/Summon_Boat.png",
    "Level": 1,
    "Class": "Water Magic",
    "Effect": "Summons unoccupied boat to nearby body of water.",
    "Basic": "Summons one of your hero's boats to their current location. If none of those boats are available, then one of your other heroes' boats is summoned. Spell has a 50% chance of working. The spell fails if there are no unoccupied boats available.",
    "Advanced": "Same as Basic, except that if no boats are available, a new one is created. The spell has a 75% chance of working. There are a maximum of sixty-four boats allowed on the Adventure Map at one time. The spell fails if all are occupied.",
    "Expert": "Same as Advanced, except that the spell has a 100% chance of working (unless all sixty-four boats are occupied).",
    "Cost": [8,7],
    "Duration":"instant",
    "Probability": "[Castle:20,Rampart:32,Tower:[39,31],Inferno:31,Necropolis:20, Dungeon:30, Stronghold:31, Fortress:20, Conflux:20]"
  },
  {
    "Name": "Stone Skin ",
    "img_src":"/images/Stone_Skin.png",
    "Level": 1,
    "Class": "Earth Magic",
    "Effect": "Increases defense rating. Basic: Single ally. Expert: All allies.",
    "Basic": "Target, allied troop's defense rating is increased by 3.",
    "Advanced": "Target, allied troop's defense rating is increased by 6.",
    "Expert": "All allied troops' defense ratings are increased by 6.",
    "Cost": [5,4],
    "Duration":"1 rnd/sp",
    "Probability": "[Castle:32,Rampart:32,Tower:[63,53],Inferno:31,Necropolis:54, Dungeon:30, Stronghold:53, Fortress:31, Conflux:31]"
  },
  {
    "Name": "View Air ",
    "img_src":"/images/View_Air.png",
    "Level": 1,
    "Class": "Air Magic",
    "Effect": "Reveals location of all unclaimed artifacts.",
    "Basic": "Displays the location of all artifacts on the view world screen.",
    "Advanced": "Displays the location of all artifacts and heroes on the view world screen.",
    "Expert": "Displays the location of all artifacts, heroes and towns.",
    "Cost": [2,1],
    "Duration":"instant",
    "Probability": "[Castle:20,Rampart:20,Tower:[25,20],Inferno:20,Necropolis:20, Dungeon:19, Stronghold:20, Fortress:20, Conflux:20]"
  },
  {
    "Name": "View Earth ",
    "img_src":"/images/View_Earth.png",
    "Level": 1,
    "Class": "Earth Magic",
    "Effect": "Reveals location of all resources.",
    "Basic": "Displays the location of all loose resources on the view world screen.",
    "Advanced": "Displays the location of all mines and loose resources on the view world screen.",
    "Expert": "Displays the entire terrain, all mines and loose resources on the view world screen.",
    "Cost": [2,1],
    "Duration":"instant",
    "Probability": "[Castle:20,Rampart:20,Tower:[25, 20],Inferno:20,Necropolis:20, Dungeon:19, Stronghold:20, Fortress:20, Conflux:20]"
  }
  ];

  export const level2 = [
    {
      "Name": "Blind ",
      "img_src":"/images/Blind.png",
      "Level": 2,
      "Class": "Fire Magic",
      "Effect": "Prevents any action from being taken by target enemy creature.",
      "Basic Effect": "Target, enemy troop is frozen until attacked, dispelled or effect wears off. Deactivating attack is retaliated at 50% of base attack rating.",
      "Advanced Effect": "Same as basic effect, except that deactivating attack is retaliated at 25% of base attack rating.",
      "Expert Effect": "Same as basic effect, except that deactivating attack is not retaliated.",
      "Cost": [
        10,
        8
      ],
      "Duration": "1 rnd/sp",
      "Probability of occurrence (%):": "[Castle:25,Rampart:35,Tower:[18,13],Inferno:47,Necropolis:24, Dungeon:25, Stronghold:25, Fortress:35, Conflux:37]"
    },
    {
      "Name": "Death Ripple ",
      "img_src":"/images/Death_Ripple.png",
      "Level": 2,
      "Class": "Earth Magic",
      "Effect": "Inflicts magic damage on all livingcreatures.",
      "Basic Effect": "All creatures (except undead) troops take (10 + (power x 5)) damage.",
      "Advanced Effect": "All creatures (except undead) troops take (20 + (power x 5)) damage.",
      "Expert Effect": "All creatures (except undead) troops take (30 + (power x 5)) damage.",
      "Cost": [
        10,
        8
      ],
      "Duration": "instant",
      "Probability of occurrence (%):": "[Castle:0,Rampart:0,Tower:[0,0],Inferno:0,Necropolis:95, Dungeon:0, Stronghold:0, Fortress:0, Conflux:0]"
    },
    {
      "Name": "Disguise",
      "img_src":"/images/Disguise.png",
      "Level": 2,
      "Class": "Air Magic",
      "Effect": "Modifies the army composition scouting report visible to enemies.",
      "Basic Effect": "All of the hero's creature troops are displayed as if they were composed of the most powerful creatures in the hero's army. Troop population numbers are represented normally.",
      "Advanced Effect": "Same as basic effect except troop population quantities are represented as 0.",
      "Expert Effect": "Same as advanced effect except all troops are represented as if populated by the most powerful creature in hero's longest owned town.",
      "Cost": [
        4,
        2
      ],
      "Duration": "1 day",
      "Probability of occurrence (%):": "[Castle:13,Rampart:13,Tower:[18,13],Inferno:18,Necropolis:13, Dungeon:13, Stronghold:13, Fortress:0, Conflux:11]"
    },
    {
      "Name": "Disrupting Ray",
      "img_src":"/images/Disrupting_Ray.png",
      "Level": 2,
      "Class": "Air Magic",
      "Effect": "Reduces defense rating of a single enemy. May be used repeatedly on the same target.",
      "Basic Effect": "Reduces target, enemy troop's defense rating by 3.",
      "Advanced Effect": "Reduces target, enemy troop's defense rating by 4.",
      "Expert Effect": "Reduces target, enemy troop's defense rating by 5",
      "Cost": [
        10,
        8
      ],
      "Duration": "until end of combat",
      "Probability of occurrence (%):": "[Castle:35,Rampart:25,Tower:[46,35],Inferno:47,Necropolis:24, Dungeon:35, Stronghold:35, Fortress:35, Conflux:37]"
    },
    {
      "Name": "Fire Wall",
      "img_src":"/images/Fire_Wall.png",
      "Level": 2,
      "Class": "Fire Magic",
      "Effect": "Creates wall of fire at target location that inflicts magic damage on creatures that pass through.",
      "Basic Effect": "Two-hex Wall. Damage is (10+ Spell Power*10)",
      "Advanced Effect": "Three-hex Wall. Damage is (20+ Spell Power*10) Cost reduced by 2",
      "Expert Effect": "Three-hex Wall. Damage is (50+ Spell Power*10)",
      "Cost": [
        8,
        6
      ],
      "Duration": "2 rounds",
      "Probability of occurrence (%):": "[Castle:25,Rampart:25,Tower:[33,25],Inferno:47,Necropolis:24, Dungeon:25, Stronghold:25, Fortress:25, Conflux:37]"
    },
    {
      "Name": "Fortune ",
      "img_src":"/images/Fortune.png",
      "Level": 2,
      "Class": "Air Magic",
      "Effect": "Increases luck. Basic: Single ally. Expert: All allies.",
      "Basic Effect": "Increases luck of target, allied troop by 1.",
      "Advanced Effect": "Increases luck of target, allied troop by 2.",
      "Expert Effect": "Increases luck of all allied troops by 2.",
      "Cost": [
        7,
        5
      ],
      "Duration": "1 rnd/sp",
      "Probability of occurrence (%):": "[Castle:25,Rampart:35,Tower:[33,25],Inferno:18,Necropolis:13, Dungeon:13, Stronghold:25, Fortress:25, Conflux:11]"
    },
    {
      "Name": "Ice Bolt ",
      "img_src":"/images/Ice_Bolt.png",
      "Level": 2,
      "Class": "Water Magic",
      "Effect": "Inflicts magic damage on a single enemy.",
      "Basic Effect": "Target enemy troop receives (10 + (power x 20)) damage.",
      "Advanced Effect": "Target enemy troop receives (20 + (power x 20)) damage.",
      "Expert Effect": "Target enemy troop receives (50 + (power x 20)) damage.",
      "Cost": [
        8,
        6
      ],
      "Duration": "instant",
      "Probability of occurrence (%):": "[Castle:95,Rampart:95,Tower:[46,35],Inferno:0,Necropolis:35, Dungeon:35, Stronghold:25, Fortress:96, Conflux:77]"
    },
    {
      "Name": "Lightning Bolt ",
      "img_src":"/images/Lightning_Bolt.png",
      "Level": 2,
      "Class": "Air Magic",
      "Effect": "Inflicts magic damage on a single enemy.",
      "Basic Effect": "Target, enemy creature receives (10 + (power x 25)) damage.",
      "Advanced Effect": "Target, enemy creature receives (20 + (power x 25)) damage.",
      "Expert Effect": "Target, enemy creature receives (50 + (power x 25)) damage.",
      "Cost": [
        10,
        8
      ],
      "Duration": "instant",
      "Probability of occurrence (%):": "[Castle:25,Rampart:25,Tower:[98,96],Inferno:65,Necropolis:35, Dungeon:95, Stronghold:95, Fortress:25, Conflux:77]"
    },
    {
      "Name": "Precision ",
      "img_src":"/images/Precision.png",
      "Level": 2,
      "Class": "Air Magic",
      "Effect": "Increases ranged attack rating. Basic: Single ally. Expert: All allies.",
      "Basic Effect": "Target, allied troop with ranged attack has its attack rating increased by 3 when making ranged attacks.",
      "Advanced Effect": "Target, allied troop with ranged attack has its attack rating increased by 6 when making ranged attacks.",
      "Expert Effect": "All allied troop with ranged attack has its attack rating increased by 6 when making ranged attacks.",
      "Cost": [
        8,
        6
      ],
      "Duration": "1 rnd/sp",
      "Probability of occurrence (%):": "[Castle:35,Rampart:35,Tower:[33,25],Inferno:34,Necropolis:13, Dungeon:35, Stronghold:25, Fortress:25, Conflux:11]"
    },
    {
      "Name": "Protection from Air",
      "img_src":"/images/Protection_from_Air.png",
      "Level": 2,
      "Class": "Air Magic",
      "Effect": "Reduces damage taken from air spells. Basic: Single ally. Expert: All allies.",
      "Basic Effect": "Damage from air magic spells is reduced by 30% for target, allied troop.",
      "Advanced Effect": "Damage from air magic spells is reduced by 50% for target, allied troop.",
      "Expert Effect": "Damage from air magic spells is reduced by 50% for all allied troops.",
      "Cost": [
        7,
        5
      ],
      "Duration": "1 rnd/sp",
      "Probability of occurrence (%):": "[Castle:13,Rampart:13,Tower:[18,13],Inferno:18,Necropolis:13, Dungeon:13, Stronghold:13, Fortress:13, Conflux:11]"
    },
    {
      "Name": "Quicksand ",
      "img_src":"/images/Quicksand.png",
      "Level": 2,
      "Class": "Earth Magic",
      "Effect": "Places quicksand at random locations on the battlefield. Only visible to caster and creatures native to the terrain. Creatures attempting to pass through quicksand become stuck and make the location of the quicksand visible.",
      "Basic Effect": "Quicksand pits are placed in 4 random hexes.",
      "Advanced Effect": "Quicksand pits are placed in 6 random hexes.",
      "Expert Effect": "Quicksand pits are placed in 8 random hexes.",
      "Cost": [
        8,
        6
      ],
      "Duration": "until end of combat",
      "Probability of occurrence (%):": "[Castle:25,Rampart:25,Tower:[46,35],Inferno:18,Necropolis:24, Dungeon:25, Stronghold:35, Fortress:35, Conflux:20]"
    },
    {
      "Name": "Remove Obstacle ",
      "img_src":"/images/Remove_Obstacle.png",
      "Level": 2,
      "Class": "Water Magic",
      "Effect": "Removes obstacles from the battlefield. Basic: Only trees, rocks and other natural obstacles may be removed. Advanced: May also remove fire walls.",
      "Basic Effect": "Removes one, non-magic obstacle from the battlefield. Integrated obstacles, such as cliffs are not affected.",
      "Advanced Effect": "Same as basic effect, except fire walls may also be removed.",
      "Expert Effect": "Same as advanced effect, except all, non-integrated obstacles can be removed.",
      "Cost": [
        7,
        5
      ],
      "Duration": "instant",
      "Probability of occurrence (%):": "[Castle:25,Rampart:25,Tower:[46,35],Inferno:18,Necropolis:24, Dungeon:25, Stronghold:,25 Fortress:25, Conflux:20]"
    },
    {
      "Name": "Scuttle Boat ",
      "img_src":"/images/Scuttle_Boat.png",
      "Level": 2,
      "Class": "Water Magic",
      "Effect": "Destroys nearby unoccupied boat.",
      "Basic Effect": "Spell has 50% chance of destroying a boat, unless occupied.",
      "Advanced Effect": "Spell has 75% chance of destroying a boat, unless occupied.",
      "Expert Effect": "Spell destroys a boat, unless occupied.",
      "Cost": [
        8,
        6
      ],
      "Duration": "instant",
      "Probability of occurrence (%):": "[Castle:35,Rampart:25,Tower:[33,25],Inferno:18,Necropolis:24, Dungeon:25, Stronghold:25, Fortress:25, Conflux:20]"
    },
    {
      "Name": "Visions ",
      "img_src":"/images/Visions.png",
      "Level": 2,
      "Class": "All Schools",
      "Effect": "Increases information shown in scouting reports of towns, creatures and heroes.",
      "Basic Effect": "Displays number of monsters in a wandering monster troop and whether or not the troop will offer to join the casting hero's army. Range is equal to power or three, whichever is greater.",
      "Advanced Effect": "Same as basic effect, except an enemy hero's primary skill stats, and the composition and quantity of the hero's army can be viewed. Range is (power x 2) or three, whichever is greater.",
      "Expert Effect": "Same as advanced effect, except an enemy town's statistics and garrison composition and quantity may be viewed. Range is (power x 3) or three, whichever is greater.",
      "Cost": [
        4,
        2
      ],
      "Duration": "1 day",
      "Probability of occurrence (%):": "[Castle:13,Rampart:13,Tower:[18,13] Inferno:18,Necropolis:13, Dungeon:13, Stronghold:13, Fortress:,13 Conflux:11]\n"
    },
    {
      "Name": "Weakness ",
      "img_src":"/images/Weakness.png",
      "Level": 2,
      "Class": "Water Magic",
      "Effect": "Reduces attack rating. Basic: Single enemy. Expert: All enemies.",
      "Basic Effect": "Target enemy troop's attack rating is reduced by three.",
      "Advanced Effect": "Target enemy troop's attack rating is reduced by six",
      "Expert Effect": "All enemy troops' attack ratings are reduced by six.",
      "Cost": [
        8,
        6
      ],
      "Duration": "1 rnd/sp",
      "Probability of occurrence (%):": "[Castle:13,Rampart:13,Tower:[18,13],Inferno:34,Necropolis:24, Dungeon:25, Stronghold:25, Fortress:25, Conflux:20]"
    }
    ];
    
  
export const level3 = [
  {
    "Name": "Air Shield ",
    "img_src":"/images/Air_Shield.png",
    "Level": 3,
    "Class": "Air Magic",
    "Effect": "Reduces damage taken from ranged attacks.",
    "Basic Effect": "Target, allied troop takes 25% less damage from ranged attacks.",
    "Advanced Effect": "Target, allied troop takes 50% less damage from ranged attacks.",
    "Expert Effect": "All allied troops takes 50% less damage from ranged attacks.",
    "Cost": [
      12,
      9
    ],
    "Duration": "1 rnd/sp",
    "Probability of occurrence (%):": "[Castle:13,Rampart:24,Tower:[32,24],Inferno:9,Necropolis:13, Dungeon:13, Stronghold:24, Fortress:17, Conflux:13]"
  },
  {
    "Name": "Animate Dead ",
    "img_src":"/images/Animate_Dead.png",
    "Level": 3,
    "Class": "Earth Magic",
    "Effect": "Reanimates killed undead creatures. Reanimated creatures are not lost when combat ends.",
    "Basic Effect": "Reanimates (30 + (power × 50)) health points worth of killed undead creatures in target, allied troop.",
    "Advanced Effect": "Reanimates (60 + (power × 50)) health points worth of killed undead creatures in target, allied troop.",
    "Expert Effect": "Reanimates (160 + (power × 50)) health points worth of killed undead creatures in target, allied troop.",
    "Cost": [
      15,
      12
    ],
    "Duration": "permanent",
    "Probability of occurrence (%):": "[Castle:0,Rampart:0,Tower:0,Inferno:0,Necropolis:44, Dungeon:0, Stronghold:0, Fortress:0, Conflux:0]"
  },
  {
    "Name": "Anti-Magic ",
    "img_src":"/images/Anti-Magic.png",
    "Level": 3,
    "Class": "Earth Magic",
    "Effect": "Grants spell immunity to a single creature.",
    "Basic Effect": "Target, allied troop can only be affected by level 4 or 5 spells.",
    "Advanced Effect": "Target, allied troop can only be affected by level 5 spells.",
    "Expert Effect": "Target, allied troop is immune to spell effects.",
    "Cost": [
      15,
      12
    ],
    "Duration": "1 rnd/sp",
    "Probability of occurrence (%):": "[Castle:35,Rampart:24,Tower:[32,24],Inferno:17,Necropolis:25, Dungeon:24, Stronghold:35, Fortress:40, Conflux:35]"
  },
  {
    "Name": "Destroy Undead ",
    "img_src":"/images/Destroy_Undead.png",
    "Level": 3,
    "Class": "Air Magic",
    "Effect": "Inflicts magic damage on all undead creatures.",
    "Basic Effect": "All undead creature troops receive ((power x 10) + 10) damage.",
    "Advanced Effect": "All undead creature troops receive ((power x 10) + 20) damage.",
    "Expert Effect": "All undead creature troops receive ((power x 10) + 50) damage.",
    "Cost": [
      15,
      12
    ],
    "Duration": "instant",
    "Probability of occurrence (%):": "[Castle:35,Rampart:24,Tower:[32,24],Inferno:9,Necropolis:0, Dungeon:13, Stronghold:13, Fortress:9, Conflux:13]"
  },
  {
    "Name": "Earthquake ",
    "img_src":"/images/Earthquake.png",
    "Level": 3,
    "Class": "Earth Magic",
    "Effect": "Inflicts damage on random castle wall sections during a siege.",
    "Basic Effect": "Does one point of damage to two random castle walls during siege combat.",
    "Advanced Effect": "Does one point of damage to three random castle walls during siege combat.",
    "Expert Effect": "Does one point of damage to four random castle walls during siege combat.",
    "Cost": [
      20,
      17
    ],
    "Duration": "instant",
    "Probability of occurrence (%):": "[Castle:13,Rampart:24,Tower:[17,13],Inferno:25,Necropolis:13, Dungeon:13, Stronghold:13, Fortress:90, Conflux:13]"
  },
  {
    "Name": "Fireball ",
    "img_src":"/images/Fireball.png",
    "Level": 3,
    "Class": "Fire Magic",
    "Effect": "Inflicts magic damage on all creatures in area.",
    "Basic Effect": "Troops within target hex and adjacent hexes take (15 + (power x 10)) damage.",
    "Advanced Effect": "Troops within target hex and adjacent hexes take (30 + (power x 10)) damage.",
    "Expert Effect": "Troops within target hex and adjacent hexes take (60 + (power x 10)) damage.",
    "Cost": [
      15,
      12
    ],
    "Duration": "instant",
    "Probability of occurrence (%):": "[Castle:24,Rampart:24,Tower:[32,24],Inferno:90,Necropolis:35, Dungeon:44, Stronghold:35, Fortress:9, Conflux:35]"
  },
  {
    "Name": "Force Field ",
    "img_src":"/images/Force_Field.png",
    "Level": 3,
    "Class": "Earth Magic",
    "Effect": "Places force field at specified location. Creatures cannot pass this field.",
    "Basic Effect": "A two hex-wide force wall is created at target hex. Movement through these hexes is blocked.",
    "Advanced Effect": "Same as basic effect, except the force wall is three hexes wide.",
    "Expert Effect": "Same as advanced effect.",
    "Cost": [
      12,
      9
    ],
    "Duration": "2 rounds",
    "Probability of occurrence (%):": "[Castle:13,Rampart:13,Tower:[32,24],Inferno:9,Necropolis:25, Dungeon:24, Stronghold:,13 Fortress:17, Conflux:24]"
  },
  {
    "Name": "Forgetfulness ",
    "img_src":"/images/Forgetfulness.png",
    "Level": 3,
    "Class": "Water Magic",
    "Effect": "Prevents use of ranged attacks. Basic: Single enemy. Expert: All enemies.",
    "Basic Effect": "Half of the creatures in target, enemy troop, with ranged attack forget to shoot.",
    "Advanced Effect": "Target, enemy troop with ranged attack cannot use its ranged attack.",
    "Expert Effect": "All enemy troops with ranged attacks cannot use their ranged attacks.",
    "Cost": [
      12,
      9
    ],
    "Duration": "1 rnd/sp",
    "Probability of occurrence (%):": "[Castle:24,Rampart:24,Tower:[17,13],Inferno:17,Necropolis:13, Dungeon:13, Stronghold:13, Fortress:17, Conflux:24]"
  },
  {
    "Name": "Frost Ring ",
    "img_src":"/images/Frost_Ring.png",
    "Level": 3,
    "Class": "Water Magic",
    "Effect": "Inflicts magic damage on all creatures in area.",
    "Basic Effect": "Troops in hexes surrounding target hex receive (15 + (power x 10)) in damage. Target hex is unaffected.",
    "Advanced Effect": "Troops in hexes surrounding target hex receive (30 + (power x 10)) in damage. Target hex is unaffected.",
    "Expert Effect": "Troops in hexes surrounding target hex receive (60 + (power x 10)) in damage. Target hex is unaffected.",
    "Cost": [
      12,
      9
    ],
    "Duration": "instant",
    "Probability of occurrence (%):": "[Castle:44,Rampart:43,Tower:[55,43],Inferno:0,Necropolis:35, Dungeon:35, Stronghold:35, Fortress:17, Conflux:35]"
  },
  {
    "Name": "Hypnotize ",
    "img_src":"/images/Hypnotize.png",
    "Level": 3,
    "Class": "Air Magic",
    "Effect": "Allows control of actions taken by enemy creature.",
    "Basic Effect": "Target, enemy troop of less than (10 + (power x 25)) health is put under your control.",
    "Advanced Effect": "Target, enemy troop of less than (20 + (power x 25)) health is put under your control.",
    "Expert Effect": "Target, enemy troop of less than (50 + (power x 25)) health is put under your control.",
    "Cost": [
      18,
      15
    ],
    "Duration": "special",
    "Probability of occurrence (%):": "[Castle:13,Rampart:13,Tower:[32,24],Inferno:25,Necropolis:0, Dungeon:24, Stronghold:13, Fortress:17, Conflux:35]"
  },
  {
    "Name": "Land Mine",
    "img_src":"/images/Land_Mine.png",
    "Level": 3,
    "Class": "Fire Magic",
    "Effect": "Places landmines at random locations on the battlefield. Only visible to caster and creatures native to the terrain.",
    "Basic Effect": "Landmines are placed in four random hexes on the battlefield. A troop stepping on a mine takes ((Power x 10) + 25) damage. Enemy creatures battling on their native terrain can see the mines and can cross them safely. To all others they are invisible.",
    "Advanced Effect": "Same as basic effect, except that six mines are placed, and damage is ((Power x 10) + 50).",
    "Expert Effect": "Same as basic effect, except that eight mines are placed, and damage is ((Power x 10) + 100).",
    "Cost": [
      18,
      15
    ],
    "Duration": "until touched",
    "Probability of occurrence (%):": "[Castle:24,Rampart:24,Tower:[32,24],Inferno:25,Necropolis:25, Dungeon:35, Stronghold:24, Fortress:9, Conflux:13]"
  },
  {
    "Name": "Mirth",
    "img_src":"/images/Mirth.png",
    "Level": 3,
    "Class": "Water Magic",
    "Effect": "Increases morale. Basic: Single ally. Expert: All allies.",
    "Basic Effect": "Morale of target allied troop is increased by one.",
    "Advanced Effect": "Morale of target allied troop is increased by two.",
    "Expert Effect": "Morale of all allied troops is increased by two.",
    "Cost": [
      12,
      9
    ],
    "Duration": "1 rnd/sp",
    "Probability of occurrence (%):": "[Castle:13,Rampart:13,Tower:[17,13],Inferno:9,Necropolis:13, Dungeon:13, Stronghold:35, Fortress:9, Conflux:13]"
  },
  {
    "Name": "Misfortune ",
    "img_src":"/images/Misfortune.png",
    "Level": 3,
    "Class": "Fire Magic",
    "Effect": "Reduces luck. Basic: Single enemy. Expert: All enemies.",
    "Basic Effect": "Luck of target, enemy troop is reduced by one.",
    "Advanced Effect": "Luck of target, enemy troop is reduced by two.",
    "Expert Effect": "Luck of all enemy troops is reduced by two.",
    "Cost": [
      12,
      9
    ],
    "Duration": "1 rnd/sp",
    "Probability of occurrence (%):": "[Castle:13,Rampart:13,Tower:[17,13],Inferno:25,Necropolis:25, Dungeon:13, Stronghold:13, Fortress:9, Conflux:13]"
  },
  {
    "Name": "Protection from Earth ",
    "img_src":"/images/Protection_from_Earth.png",
    "Level": 3,
    "Class": "Earth Magic",
    "Effect": "Reduces damage taken from earth spells. Basic: Single ally. Expert: All allies.",
    "Basic Effect": "Damage from earth magic spells is reduced by 30% for target, allied troop.",
    "Advanced Effect": "Damage from earth magic spells is reduced by 50% for target, allied troop.",
    "Expert Effect": "Damage from earth magic spells is reduced by 50% for all allied troops.",
    "Cost": [
      12,
      9
    ],
    "Duration": "1 rnd/sp",
    "Probability of occurrence (%):": "[Castle:13,Rampart:13,Tower:[17,13],Inferno:9,Necropolis:13, Dungeon:13, Stronghold:13, Fortress:0, Conflux:13]"
  },
  {
    "Name": "Teleport ",
    "img_src":"/images/Teleport.png",
    "Level": 3,
    "Class": "Water Magic",
    "Effect": "Teleports ally to location on the battlefield. Expert: May teleport creature over castle walls.",
    "Basic Effect": "Target allied troop instantly moves to an unoccupied target hex. Troop cannot teleport over walls or moats.",
    "Advanced Effect": "Same as Basic Effect, except troop can teleport over walls.",
    "Expert Effect": "Troop can move to any unoccupied hex.",
    "Cost": [
      15,
      12,
      6,
      3
    ],
    "Duration": "instant",
    "Probability of occurrence (%):": "[Castle:24,Rampart:24,Tower:[32,24],Inferno:32,Necropolis:25, Dungeon:24, Stronghold:24, Fortress:40, Conflux:24]"
  }
];

export const level4 = [
  {
    "Name": "Armageddon ",
    "img_src":"/images/Armageddon.png",
    "Level": 4,
    "Class": "Fire Magic",
    "Effect": "Inflicts magic damage on all creatures on the battlefield.",
    "Basic Effect": "All troops take (30 + (power × 50)) points of damage",
    "Advanced Effect": "All troops take (60 + (power × 50)) points of damage",
    "Expert Effect": "All troops take (120 + (power × 50)) points of damage.",
    "Cost": [
      24,
      20
    ],
    "Duration": "instant",
    "Probability of occurrence (%):": "[Castle:0,Rampart:0,Tower:0,Inferno:10,Necropolis:10, Dungeon:20, Stronghold:0, Fortress:0, Conflux:0]"
  },
  {
    "Name": "Berserk ",
    "img_src":"/images/Berserk.png",
    "Level": 4,
    "Class": "Fire Magic",
    "Effect": "Forces enemy to attack closest creature.",
    "Basic Effect": "Target attacks nearest troop. 1 hex affected.",
    "Advanced Effect": "Target attacks nearest troop. All creatures in a 2 hex radius affected.",
    "Expert Effect": "Target attacks nearest troop. All creatures in a 3 hex radius affected.",
    "Cost":  " 20/16",
    "Duration": "1 attack",
    "Probability of occurrence (%):": "[Castle:10,Rampart:10,Tower:[16,10],Inferno:10,Necropolis:20, Dungeon:10, Stronghold:0, Fortress:0, Conflux:10]"
  },
  {
    "Name": "Chain Lightning ",
    "img_src":"/images/Chain_Lightning.png",
    "Level": 4,
    "Class": "Air Magic",
    "Effect": "Inflicts magic damage on initial creature and reduced damage on nearby creatures.",
    "Basic Effect": "Lightning bolt strikes target troop for (25 + (power x 40)) damage. Bolt strikes four troops.",
    "Advanced Effect": "Lightning bolt strikes target troop for (50 + (power x 40)) damage. Bolt strikes five troops.",
    "Expert Effect": "Lightning bolt strikes target troop for (100 + (power x 40)) damage. Bolt strikes five troops.",
    "Cost": [
      24,
      20
    ],
    "Duration": "instant",
    "Probability of occurrence (%):": "[Castle:20,Rampart:20,Tower:[29.20],Inferno:20,Necropolis:20, Dungeon:20, Stronghold:0, Fortress:0, Conflux:20]"
  },
  {
    "Name": "Clone ",
    "img_src":"/images/Clone.png",
    "Level": 4,
    "Class": "Water Magic",
    "Effect": "Creates clone of allied creature.",
    "Basic Effect": "Creates a duplicate of target, allied troop level 1-5. The duplicate can attack but is dispelled if it receives any damage.",
    "Advanced Effect": "Same as Basic Effect, except the duplicate may be of a level 1-6 troop.",
    "Expert Effect": "Same as Basic Effect, except the duplicate may be of a level 1-7 troop.",
    "Cost": [
      24,
      20
    ],
    "Duration": "1 rnd/sp",
    "Probability of occurrence (%):": "[Castle:10,Rampart:10,Tower:[29,20],Inferno:10,Necropolis:10, Dungeon:10, Stronghold:0, Fortress:0, Conflux:20]"
  },
  {
    "Name": "Counterstrike ",
    "img_src":"/images/Counterstrike.png",
    "Level": 4,
    "Class": "Air Magic",
    "Effect": "Allows extra retaliations per round. Basic: Single ally. Expert: All allies.",
    "Basic Effect": "Target, allied troop can retaliate against one additional attack per round.",
    "Advanced Effect": "Target, allied troop can retaliate against two additional attacks per round.",
    "Expert Effect": "All allied troops can retaliate against two additional attacks per round.",
    "Cost": [
      24,
      20
    ],
    "Duration": "1 rnd/sp",
    "Probability of occurrence (%):": "[Castle:10,Rampart:20,Tower:[16,10],Inferno:10,Necropolis:10, Dungeon:10, Stronghold:0, Fortress:0, Conflux:10]"
  },
  {
    "Name": "Fire Shield ",
    "img_src":"/images/Fire_Shield.png",
    "Level": 4,
    "Class": "Fire Magic",
    "Effect": "Inflicts magic damage proportional to damage taken from�hand-to-hand�attacks.",
    "Basic Effect": "20% of hand-to-hand damage inflicted on target, allied troop is counter-inflicted on attackers of the troop.",
    "Advanced Effect": "25% of hand-to-hand damage inflicted on target, allied troop is counter-inflicted on attackers of the troop.",
    "Expert Effect": "30% of hand-to-hand damage inflicted on target, allied troop is counter-inflicted on attackers of the troop.",
    "Cost": [
      16,
      12
    ],
    "Duration": "1 rnd/sp",
    "Probability of occurrence (%):": "[Castle:10,Rampart:10,Tower:[16,10],Inferno:10,Necropolis:10, Dungeon:10, Stronghold:0, Fortress:0, Conflux:10]"
  },
  {
    "Name": "Frenzy ",
    "img_src":"/images/Frenzy.png",
    "Level": 4,
    "Class": "Fire Magic",
    "Effect": "Increases attack rating and sets defense rating to 0.",
    "Basic Effect": "Target troop's attack rating is increased by 100% of the troop's defense rating, and its defense rating is reduced to zero.",
    "Advanced Effect": "Target troop's attack rating is increased by 150% of the troop's defense rating, and its defense rating is reduced to zero.",
    "Expert Effect": "Target troop's attack rating is increased by 200% of the troop's defense rating, and its defense rating is reduced to zero.",
    "Cost": [
      16,
      12
    ],
    "Duration": "until target troop's next action",
    "Probability of occurrence (%):": "[Castle:10,Rampart:10,Tower:[16,10],Inferno:10,Necropolis:10, Dungeon:10, Stronghold:0, Fortress:0, Conflux:10]"
  },
  {
    "Name": "Inferno ",
    "img_src":"/images/Inferno.png",
    "Level": 4,
    "Class": "Fire Magic",
    "Effect": "Inflicts magic damage on all creatures in area.",
    "Basic Effect": "Strikes target hex, and all hexes within two hexes for (20 + (power x 10)) damage.",
    "Advanced Effect": "Strikes target hex, and all hexes within two hexes for (40 + (power x 10)) damage.",
    "Expert Effect": "Strikes target hex, and all hexes within two hexes for (80 + (power x 10)) damage.",
    "Cost": [
      16,
      12
    ],
    "Duration": "instant",
    "Probability of occurrence (%):": "[Castle:10,Rampart:10,Tower:[16,10],Inferno:20,Necropolis:10, Dungeon:10, Stronghold:0, Fortress:0, Conflux:20]"
  },
  {
    "Name": "Meteor Shower",
    "img_src":"/images/Meteor_Shower.png",
    "Level": 4,
    "Class": "Earth Magic",
    "Effect": "Inflicts magic damage on all creatures in area.",
    "Basic Effect": "Troops in target hex and adjacent hexes take (25 + (power x 25)) damage.",
    "Advanced Effect": "Troops in target hex and adjacent hexes take (50 + (power x 25)) damage.",
    "Expert Effect": "Troops in target hex and adjacent hexes take (100 + (power x 25)) damage.",
    "Cost": [
      16,
      12
    ],
    "Duration": "instant",
    "Probability of occurrence (%):": "[Castle:20,Rampart:20,Tower:[29,20],Inferno:20,Necropolis:20, Dungeon:20, Stronghold:0, Fortress:0, Conflux:20]"
  },
  {
    "Name": "Prayer ",
    "img_src":"/images/Prayer.png",
    "Level": 4,
    "Class": "Water Magic",
    "Effect": "Increases attack rating, defense rating and speed. Basic: Single ally. Expert: All allies.",
    "Basic Effect": "Target, allied troop's attack, defense, and speed (hexes per turn) ratings are increased by 2.",
    "Advanced Effect": "Target, allied troop's attack, defense, and speed (hexes per turn) ratings are increased by 4.",
    "Expert Effect": "All allied troop's attack, defense, and speed ratings are increased by 4.",
    "Cost": [
      16,
      12
    ],
    "Duration": "1 rnd/sp",
    "Probability of occurrence (%):": "[Castle:20,Rampart:10,Tower:[16,10],Inferno:0,Necropolis:0, Dungeon:0, Stronghold:0, Fortress:0, Conflux:10]"
  },
  {
    "Name": "Resurrection ",
    "img_src":"/images/Resurrection.png",
    "Level": 4,
    "Class": "Earth Magic",
    "Effect": "Resurrects killed living creatures until the end of combat. Advanced: Resurrected creatures are not lost when combat ends.",
    "Basic Effect": "Target, allied troop with dead creatures has (40 + (power x 50)) health worth of creatures restored to life for the duration of the current battle.",
    "Advanced Effect": "Same as basic effect, except that (80 + (power x 50)) health worth of creatures are restored permanently.",
    "Expert Effect": "Same as advanced effect, except that (160 + (power x 50)) health worth of creatures are restored.",
    "Cost": [
      20,
      16
    ],
    "Duration": "combat/permanent",
    "Probability of occurrence (%):": "[Castle:20,Rampart:20,Tower:[29,20],Inferno:20,Necropolis:20, Dungeon:20, Stronghold:0, Fortress:0, Conflux:10]"
  },
  {
    "Name": "Slayer ",
    "img_src":"/images/Slayer.png",
    "Level": 4,
    "Class": "Fire Magic",
    "Effect": "Increases attack rating of a single ally against Dragons, Behemoths and Hydras. Advanced: Effect applies to Angels and Devils. Expert: Effect applies to Titans.",
    "Basic Effect": "Target, allied troop's attack rating is increased by eight against behemoths, dragons, and hydras.",
    "Advanced Effect": "Same as basic effect, except that attack bonus also affects devils and angels.",
    "Expert Effect": "Same as advanced effect, except attack bonus also affects titans.",
    "Cost": [
      16,
      12
    ],
    "Duration": "1 rnd/sp",
    "Probability of occurrence (%):": "[Castle:10,Rampart:10,Tower:[16,10],Inferno:10,Necropolis:10, Dungeon:10, Stronghold:0, Fortress:0, Conflux:10]"
  },
  {
    "Name": "Sorrow ",
    "img_src":"/images/Sorrow.png",
    "Level": 4,
    "Class": "Earth Magic",
    "Effect": "Reduces morale. Basic: Single enemy. Expert: All enemies.",
    "Basic Effect": "Target, enemy troop's morale rating is reduced by 1.",
    "Advanced Effect": "Target, enemy troop's morale rating is reduced by 2.",
    "Expert Effect": "All enemy troops' morale rating is reduced by 2.",
    "Cost": [
      16,
      12
    ],
    "Duration": "1 rnd/sp",
    "Probability of occurrence (%):": "[Castle:10,Rampart:10,Tower:[16,10],Inferno:10,Necropolis:10, Dungeon:10, Stronghold:0, Fortress:0, Conflux:10]"
  },
  {
    "Name": "Town Portal ",
    "img_src":"/images/Town_Portal.png",
    "Level": 4,
    "Class": "Earth Magic",
    "Effect": "Teleports hero to closest allied, unoccupied town. Advanced: May choose any allied, unoccupied town.",
    "Basic Effect": "Adventure Map Teleport, casting hero is teleported to the nearest allied town. 300 movement points are expended when the spell is cast.",
    "Advanced Effect": "Adventure Map Teleport, casting hero may teleport to any allied town with no visiting hero. 300 movement points are expended when the spell is cast.",
    "Expert Effect": "Adventure Map Teleport, any allied unoccupied town, deducted movement points are 200 points.",
    "Cost": [
      16,
      12
    ],
    "Duration": "instant",
    "Probability of occurrence (%):": "[Castle:20,Rampart:20,Tower:[29,20],Inferno:20,Necropolis:20, Dungeon:20, Stronghold:0, Fortress:0, Conflux:20]"
  },
  {
    "Name": "Water Walk ",
    "img_src":"/images/Water_Walk.png",
    "Level": 4,
    "Class": "Water Magic",
    "Effect": "Allows movement to visible land across bodies of�water.",
    "Basic Effect": "The casting hero may follow a movement path across water, provided the end destination is an unoccupied location on land. Water movement may be up to 60% of the hero's normal movement.",
    "Advanced Effect": "Same as basic effect, except that water movement may be up to 80% of the hero's normal movement.",
    "Expert Effect": "Same as basic effect, except that water movement may be made at the hero's full, normal movement.",
    "Cost": [
      12,
      8
    ],
    "Duration": "one day",
    "Probability of occurrence (%):": "[Castle:20,Rampart:20,Tower:[29,20],Inferno:20,Necropolis:20, Dungeon:20, Stronghold:0, Fortress:0, Conflux:20]"
  }

]

export const level5 = [{
  "Name": "Dimension Door",
  "img_src":"/images/Dimension_Door.png",
  "Level": 5,
  "Class": "Air Magic",
  "Effect": "Teleports hero to visible location.",
  "Basic Effect": "Teleports hero to a selected (unoccupied and visible) location on the adventure map. The spell may be cast twice per day and reduces the hero's movement by three tiles for each casting.",
  "Advanced Effect": "Same as basic effect, except the spell may be cast three times in a day.",
  "Expert Effect": "Same as advanced effect, except the spell may be cast four times in a day, and movement allowance is reduced by two tiles",
  "Cost": [
    25,
    20
  ],
  "Duration": "instant",
  "Probability of occurrence (%):": "[Castle:0,Rampart:20,Tower:[28,14],Inferno:16,Necropolis:16, Dungeon:16, Stronghold:0, Fortress:0, Conflux:13]"
},
{
  "Name": "Fly",
  "img_src":"/images/Fly.png",
  "Level": 5,
  "Class": "Air Magic",
  "Effect": "Allows movement to visible land over all map obstacles. Cannot fly through cave walls in the underground.",
  "Basic Effect": "Distance traveled may be up to 60% of normal movement.",
  "Advanced Effect": "Distance traveled may be up to 80% of normal movement.",
  "Expert Effect": "Distance traveled may be up to 100% of normal movement.",
  "Cost": [
    20,
    15
  ],
  "Duration": "one day",
  "Probability of occurrence (%):": "[Castle:0,Rampart:16,Tower:[32,16],Inferno:16,Necropolis:16, Dungeon:12, Stronghold:0, Fortress:0, Conflux:13]"
},
{
  "Name": "Implosion ",
  "img_src":"/images/Implosion.png",
  "Level": 5,
  "Class": "Earth Magic",
  "Effect": "Inflicts magic damage on a single enemy.",
  "Basic Effect": "Target, enemy troop receives (100 + (power × 75)) damage.",
  "Advanced Effect": "Target, enemy troop receives (200 + (power × 75)) damage.",
  "Expert Effect": "Target, enemy troop receives (300 + (power × 75)) damage.",
  "Cost": [
    30,
    25
  ],
  "Duration": "instant",
  "Probability of occurrence (%):": "[Castle:0,Rampart:16,Tower:[28,14],Inferno:16,Necropolis:20, Dungeon:12, Stronghold:0, Fortress:0, Conflux:13]"
},
{
  "Name": "Magic Mirror ",
  "img_src":"/images/Magic_Mirror.png",
  "Level": 5,
  "Class": "Air Magic",
  "Effect": "Reflects hostile spells to a random enemy. Basic: 20% chance of occurrence. Advanced: 30% chance. Expert: 40% chance.",
  "Basic Effect": "Enemy spells cast on targeted, allied troop has a 20% chance of being redirected to a random enemy troop.",
  "Advanced Effect": "Enemy spells cast on targeted, allied troop has a 30% chance of being redirected to a random enemy troop.",
  "Expert Effect": "Enemy spells cast on targeted, allied troop has a 40% chance of being redirected to a random enemy troop.",
  "Cost": [
    25,
    20
  ],
  "Duration": "1 rnd/sp",
  "Probability of occurrence (%):": "[Castle:0,Rampart:16,Tower:[28,14],Inferno:0,Necropolis:0, Dungeon:12, Stronghold:0, Fortress:0, Conflux:13]"
},
{
  "Name": "Sacrifice ",
  "img_src":"/images/Sacrifice.png",
  "Level": 5,
  "Class": "Fire Magic",
  "Effect": "Destroys and removes living, unkilled allies to bring previously living, killed allies back to life.",
  "Basic Effect": "Target, non-undead troop is sacrificed (destroyed). Then another target dead troop has ((power + destroyed troop's base health + 3) x # of creatures sacrificed) in health total of creatures returned to life.",
  "Advanced Effect": "Same as basic effect, except that health total of creatures resurrected is ((power + destroyed troop's base health + 6) x # of creatures sacrificed)-",
  "Expert Effect": "Same as basic effect, except that health total of creatures resurrected is ((power + destroyed troop's base health + 10) x # of creatures sacrificed)",
  "Cost": [
    25,
    20
  ],
  "Duration": "permanent",
  "Probability of occurrence (%):": "[Castle:0,Rampart:0,Tower:0,Inferno:20,Necropolis:16, Dungeon:12, Stronghold:0, Fortress:0, Conflux:0]"
},
{
  "Name": "Summon Air Elemental ",
  "img_src":"/images/Summon_Air_Elemental.png",
  "Level": 5,
  "Class": "Air Magic",
  "Effect": "Summons allied Air Elementals for the duration of combat.",
  "Basic Effect": "Summons a troop of air elementals containing creatures amount of (power x 2).",
  "Advanced Effect": "Summons a troop of air elementals containing creatures amount of (power x 3).",
  "Expert Effect": "Summons a troop of air elementals containing creatures amount of (power x 4).",
  "Cost": [
    25,
    20
  ],
  "Duration": "until end of combat",
  "Probability of occurrence (%):": "[Castle:0,Rampart:0,Tower:[28,14],Inferno:0,Necropolis:16, Dungeon:0, Stronghold:0, Fortress:0, Conflux:12]"
},
{
  "Name": "Summon Earth Elemental ",
  "img_src":"/images/Summon_Earth_Elemental.png",
  "Level": 5,
  "Class": "Earth Magic",
  "Effect": "Summons allied Earth Elementals for the duration of combat.",
  "Basic Effect": "A troop containing (power x 2) earth elementals appears on the side of the casting player.",
  "Advanced Effect": "Same as basic effect, except that (power x 3) earth elementals are summoned.",
  "Expert Effect": "Same as basic effect, except that (power x 4) earth elementals are summoned.",
  "Cost": [
    25,
    20
  ],
  "Duration": "until end of combat",
  "Probability of occurrence (%):": "[Castle:0,Rampart:16,Tower:[28,14],Inferno:16,Necropolis:16, Dungeon:12, Stronghold:0, Fortress:0, Conflux:12]"
},
{
  "Name": "Summon Fire Elemental ",
  "img_src":"/images/Summon_Fire_Elemental.png",
  "Level": 5,
  "Class": "Fire Magic",
  "Effect": "Summons allied Fire Elementals for the duration of combat.",
  "Basic Effect": "A troop containing (2 x power) fire elementals appears on the side of the casting player.",
  "Advanced Effect": "Same as basic effect, except that (3 x power) fire elementals are summoned.",
  "Expert Effect": "Same as basic effect, except that (4 x power) fire elementals are summoned.",
  "Cost": [
    25,
    20
  ],
  "Duration": "until end of combat",
  "Probability of occurrence (%):": "[Castle:0,Rampart:0,Tower:0,Inferno:16,Necropolis:0, Dungeon:12, Stronghold:0, Fortress:0, Conflux:12]"
},
{
  "Name": "Summon Water Elemental",
  "img_src":"/images/Summon_Water_Elemental.png",
  "Level": 5,
  "Class": "Water Magic",
  "Effect": "Summons allied Water Elementals for the duration of combat.",
  "Basic Effect": "A troop containing (power x 2) water elementals appears on the side of the casting player. Only one type of elemental can be summoned.",
  "Advanced Effect": "Same as basic effect, except that (power x 3) water elementals are summoned.",
  "Expert Effect": "Same as basic effect, except that (power x 4) water elementals are summoned.",
  "Cost": [
    25,
    20
  ],
  "Duration": "until end of combat",
  "Probability of occurrence (%):": "[Castle:0,Rampart:16,Tower:[28,14],Inferno:0,Necropolis:0, Dungeon:12, Stronghold:0, Fortress:0, Conflux:12]"
},
{
  "Name": "Titan's Lightning Bolt ",
  "img_src":"/images/Titan's_Lightning_Bolt.png",
  "Level": 5,
  "Class": "Air Magic",
  "Effect": "Inflicts 600 magic damage on a single enemy. Requires Titan's Thunder.",
  "Basic Effect": "Does 600 damage. Requires Titan's Thunder.",
  "Advanced Effect": "Does 600 damage. Requires Titan's Thunder.",
  "Expert Effect": "Does 600 damage. Requires Titan's Thunder.",
  "Cost": "0",
  "Duration": "instant",
  "Probability of occurrence (%):": "[Castle:0,Rampart:0,Tower:0,Inferno:0,Necropolis:0, Dungeon:0, Stronghold:0, Fortress:0, Conflux:0]"
}]

