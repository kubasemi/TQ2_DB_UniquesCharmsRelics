export interface Item {
  item_name: string;
  item_type: string;
  rarity: string;
  required_level: number;
  base_stats: Record<string, any>;
  magical_properties: string[];
  unique_effects: string[];
  flavor_text: string;
  requirements: string | null;
  gold_value: number;
}

export const items: Item[] = [
  {
    "item_name": "Kaenas' Sword",
    "item_type": "Sword",
    "rarity": "Epic",
    "required_level": 180,
    "base_stats": {
      "total_damage": "36-40",
      "pierce_damage": "27-30",
      "strike_damage": "9-10",
      "attack_speed": "1.4x"
    },
    "magical_properties": [
      "+18% Cold Resistance",
      "+12% Poison Resistance",
      "+5 Weapon Strike Damage",
      "19% increased Critical Hit chance",
      "+9% Glancing Hits Chance",
      "7% increased Attack Speed",
      "12% increased Strike Damage",
      "12% increased Pierce Damage"
    ],
    "unique_effects": [],
    "flavor_text": "The sword of the heroic spirit you met on the beach.",
    "requirements": "FIT 133",
    "gold_value": 514
  },
  {
    "item_name": "Rimescythe",
    "item_type": "2h Axe",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "173-191",
      "cold_damage": "138-153",
      "pierce_damage": "35-38",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "+49 Weapon Cold Damage",
      "+28% Cold Resistance",
      "51% increased Cold Damage",
      "16% increased Energy",
      "+46 Weapon Pierce Damage",
      "10% increased Attack Speed",
      "21% increased Movement Skill Cooldown Rate"
    ],
    "unique_effects": [],
    "flavor_text": "When Demeter lifted the eternal winter, only this axe remained.",
    "requirements": "RSV 241",
    "gold_value": 9431
  },
  {
    "item_name": "Edge of Darkness",
    "item_type": "Sword",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "120-132",
      "vitality_damage": "84-93",
      "cold_damage": "36-40",
      "attack_speed": "1.4x"
    },
    "magical_properties": [
      "31% increased Cold Damage",
      "26% increased Vitality Damage",
      "+26 Weapon Vitality Damage",
      "+32 Energy"
    ],
    "unique_effects": [
      "30% Increased Lifesteal"
    ],
    "flavor_text": "A cursed sword from the land of the midnight sun.",
    "requirements": "RSV 241",
    "gold_value": 4778
  },
  {
    "item_name": "Arch of Iris",
    "item_type": "Bow",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "250-276",
      "elemental_breakdown": "50-55 Cold, Fire, Lightning, Poison, Spirit",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "9% increased Total Damage",
      "11% increased Attack Speed",
      "27% increased Poison Damage",
      "27% increased Lightning Damage",
      "20% increased Fire Damage",
      "20% increased Cold Damage"
    ],
    "unique_effects": [
      "+9% to all Magical Resistances",
      "10% increased Weapon Projectile Damage"
    ],
    "flavor_text": "The string of this bow is a magical band of shifting colors.",
    "requirements": "FIT 323",
    "gold_value": 10091
  },
  {
    "item_name": "Ceremonial Plate",
    "item_type": "Shield",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "armor": 257,
      "strike_armor": 129,
      "pierce_armor": 129
    },
    "magical_properties": [
      "337 Free Barrier",
      "+140 Pierce Armor",
      "+169 Strike Armor",
      "Summons have 10% increased All Speed",
      "+30 Energy",
      "+9 Energy Regeneration per second",
      "Summons have +16% to All Resistances",
      "Summons have 23% increased Health"
    ],
    "unique_effects": [],
    "flavor_text": "A large embossed bowl depicting mythical scenes of Glaukos and the people of Pyrgos.",
    "requirements": "RSV 241",
    "gold_value": 4711
  },
  {
    "item_name": "Crab Shield",
    "item_type": "Shield",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "armor": 257,
      "strike_armor": 129,
      "pierce_armor": 129
    },
    "magical_properties": [
      "481 Free Barrier",
      "+127 Pierce Armor",
      "+215 Strike Armor",
      "26% increased Critical Hit chance",
      "26% increased Ailment Chance",
      "Summons have 24% increased Health"
    ],
    "unique_effects": [
      "Activating Barrier inflicts Pierce Damage to enemies around you"
    ],
    "flavor_text": "A shield fashioned from a sturdy crab shell.",
    "requirements": "MGT 251",
    "gold_value": 4881
  },
  {
    "item_name": "Crush-Stick of the Fallen God",
    "item_type": "2h Club",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "250-276",
      "strike_damage": "250-276",
      "attack_speed": "1x"
    },
    "magical_properties": [
      "12% More Damage to Humans and Demi-Humans",
      "+40 Weapon Strike Damage",
      "+70 Weapon Vitality Damage",
      "+33 Vigor"
    ],
    "unique_effects": [
      "15% Chance to Stun for 1 second on Hit"
    ],
    "flavor_text": "A club made of junk, seemingly for a creature the size of a cyclops.",
    "requirements": "MGT 251",
    "gold_value": 9211
  },
  {
    "item_name": "Telekinos",
    "item_type": "Staff",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "total_damage": "147-163",
      "strike_damage": "147-163",
      "attack_speed": "1x"
    },
    "magical_properties": [
      "33% increased Strike Damage",
      "39% increased Ailment Power",
      "16% increased Area Ability Damage"
    ],
    "unique_effects": [
      "When you have full overwhelm, generating more spends it on an explosion dealing Strike Damage in a 3m Radius Area around you."
    ],
    "flavor_text": "A staff that projects blunt force, useful to settle scholarly disagreements.",
    "requirements": "RES 224",
    "gold_value": 6893
  },
  {
    "item_name": "Thyrsus",
    "item_type": "Staff",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "total_damage": "147-163",
      "poison_damage": "147-163",
      "attack_speed": "1x"
    },
    "magical_properties": [
      "12% increased Total Damage",
      "47% increased Poison Damage",
      "+200 Energy Barrier",
      "+9 Energy Regeneration per second",
      "10% increased Cast Speed"
    ],
    "unique_effects": [
      "Activating Barrier inflicts Pierce Damage to enemies around you"
    ],
    "flavor_text": "A vined staff, sacred to Dionysos.",
    "requirements": "KNO 230",
    "gold_value": 6902
  },
  {
    "item_name": "Raging Bull",
    "item_type": "2h Axe",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "total_damage": "212-234",
      "strike_damage": "142-157",
      "pierce_damage": "70-77",
      "attack_speed": "1x"
    },
    "magical_properties": [
      "25% Stun Resistance",
      "+159 Strike Armor",
      "+37 Weapon Strike Damage",
      "+14 Health Regeneration per Second",
      "12% increased Movement Speed"
    ],
    "unique_effects": [
      "4% increased Weapon Attack Damage per Rage Stack"
    ],
    "flavor_text": "This massive axe that once hung above the entrance to the Labyrinth in Knossos.",
    "requirements": "MIG 230",
    "gold_value": 6975
  },
  {
    "item_name": "Fotia",
    "item_type": "Staff",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "total_damage": "147-163",
      "fire_damage": "147-163",
      "attack_speed": "1x"
    },
    "magical_properties": [
      "+47 Weapon Fire Damage",
      "54% increased Fire Damage",
      "+54 Energy",
      "42% increased Ailment Chance",
      "10% increased Cast Speed"
    ],
    "unique_effects": [
      "10% increased Damage to Channel Spells"
    ],
    "flavor_text": "A staff infused with the very essence of fire.",
    "requirements": "KNO 230",
    "gold_value": 6938
  },
  {
    "item_name": "Ram Bow II",
    "item_type": "Bow",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "total_damage": "147-163",
      "pierce_damage": "44-49",
      "strike_damage": "44-49",
      "fire_damage": "59-65",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "+10% Bleeding and Poison Resistance",
      "46% increased Strike Damage",
      "+28 Might",
      "37% increased Ailment Chance"
    ],
    "unique_effects": [
      "Hitting an enemy with your Primary Attack has a 10% chance of causing an explosion dealing Fire Damage in a 3m area around your target."
    ],
    "flavor_text": "A bow that hits with unusually explosive force.",
    "requirements": "MIG 230",
    "gold_value": 6839
  },
  {
    "item_name": "Storm Strike",
    "item_type": "Bow",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "total_damage": "147-163",
      "pierce_damage": "44-49",
      "lightning_damage": "103-114",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "+67 Weapon Lightning Damage",
      "49% increased Lightning Damage",
      "+19 Agility",
      "25% increased Cooldown Rate",
      "14% increased Movement Speed"
    ],
    "unique_effects": [
      "Generating Overload grants 50% increased Critical Hit Chance for 2 seconds"
    ],
    "flavor_text": "A weapon enchanted with the power of wind and lightning.",
    "requirements": "AGI 230",
    "gold_value": 7078
  },
  {
    "item_name": "Moon Disc",
    "item_type": "Shield",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "armor": 220,
      "strike_resistance": 110,
      "pierce_resistance": 110
    },
    "magical_properties": [
      "Shield: +438 Free Barrier",
      "14% increased Energy",
      "+216 Energy Barrier",
      "+10 Energy Regeneration per second",
      "10% increased Cast Speed",
      "16% increased Movement Speed"
    ],
    "unique_effects": [
      "20% increased Cooldown Rate to Area Spells"
    ],
    "flavor_text": "A mystical shield bearing the symbols of Hekate.",
    "requirements": "RES 224",
    "gold_value": 3474
  },
  {
    "item_name": "Thornwall",
    "item_type": "Shield",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "armor": 220,
      "strike_resistance": 110,
      "pierce_resistance": 110
    },
    "magical_properties": [
      "Shield: +307 Free Barrier",
      "+9% Bleeding and Poison Resistance",
      "12% less Damage from Beasts",
      "19% increased Retaliation Damage"
    ],
    "unique_effects": [
      "+97 Pierce Retaliation"
    ],
    "flavor_text": "Sharp poisoned spikes dampen many a creature's appetite.",
    "requirements": null,
    "gold_value": 3483
  },
  {
    "item_name": "Gryphon Hunter Shield",
    "item_type": "Shield",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "armor": 220,
      "strike_resistance": 110,
      "pierce_resistance": 110
    },
    "magical_properties": [
      "Shield: +307 Free Barrier",
      "10% More Damage to Elite Creatures",
      "+7% Bleeding and Poison Resistance",
      "23% Impairment Resistance",
      "17% Stun Resistance",
      "+14% Glancing Hits Chance"
    ],
    "unique_effects": [
      "13% More Damage to enemy Heroes and Leaders"
    ],
    "flavor_text": "The bigger the creature, the greater the glory.",
    "requirements": "FIT 298",
    "gold_value": 3545
  },
  {
    "item_name": "Bonesaw",
    "item_type": "Sword",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "total_damage": "123-135",
      "pierce_damage": "74-81",
      "strike_damage": "49-54",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "+24 Weapon Pierce Damage",
      "19% increased Critical Hit chance",
      "25% increased Ailment Duration",
      "+3% Base Weapon Critical Hit Chance",
      "+19 Vigor"
    ],
    "unique_effects": [
      "+23% Base Weapon Ailment Chance",
      "20% increased Critical Hit chance against Incapacitated Enemies"
    ],
    "flavor_text": "They say Asklepios used this on his patients. It now serves a more gruesome purpose.",
    "requirements": "MIG 230",
    "gold_value": 3377
  },
  {
    "item_name": "Cuttlebone Standard",
    "item_type": "Spear",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "total_damage": "123-135",
      "pierce_damage": "49-54",
      "cold_damage": "25-27",
      "fire_damage": "25-27",
      "lightning_damage": "25-27",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "24% increased Cold Damage",
      "23% increased Fire Damage",
      "29% increased Lightning Damage",
      "26% increased Poison Damage",
      "+10 Energy Regeneration per second"
    ],
    "unique_effects": [
      "Generating Overload grants 15% increased Cast Speed for 2 seconds"
    ],
    "flavor_text": "A weird magical spear used in ichthian rituals.",
    "requirements": "KNO 230",
    "gold_value": 3324
  },
  {
    "item_name": "Soul Carver",
    "item_type": "Sword",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "total_damage": "102-112",
      "spirit_damage": "51-56",
      "pierce_damage": "25-28",
      "strike_damage": "25-28",
      "attack_speed": "1.4x"
    },
    "magical_properties": [
      "27% increased Spirit Damage",
      "+23 Weapon Vitality Damage",
      "+242 Energy Barrier",
      "24% increased Ailment Chance"
    ],
    "unique_effects": [
      "Consuming Overwhelm creates an explosion dealing Spirit Damage in a 3m Radius Area around you."
    ],
    "flavor_text": "A shining blade that wounds the spirit as much as the body.",
    "requirements": "CUN 224",
    "gold_value": 3518
  },
  {
    "item_name": "Shiverblood",
    "item_type": "Spear",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "total_damage": "123-135",
      "cold_damage": "92-102",
      "pierce_damage": "31-34",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "20% increased Cold Damage",
      "+11% Glancing Hits Chance",
      "21% increased Ailment Duration",
      "25% increased Ailment Power"
    ],
    "unique_effects": [
      "Every 10 seconds, hitting enemies with a Weapon Attack Freezes them for 1s"
    ],
    "flavor_text": "A masterpiece from the Temple of Kheimon, prime purveyor of cold-enchanted weapons and silent guardsmen.",
    "requirements": "RES 224",
    "gold_value": 3454
  },
  {
    "item_name": "Venom Heart",
    "item_type": "Necklace",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {},
    "magical_properties": [
      "21% increased Poison Damage",
      "+24% Poison Resistance",
      "+46 Weapon Poison Damage",
      "30% increased Ailment Chance",
      "25% increased Ailment Power"
    ],
    "unique_effects": [
      "10% increased Weapon Projectile Damage"
    ],
    "flavor_text": "A cursed amulet that once held the image of a dear spouse.",
    "requirements": "LV 45",
    "gold_value": 4406
  },
  {
    "item_name": "Wellspring",
    "item_type": "Necklace",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {},
    "magical_properties": [
      "+10 Energy Regeneration per second",
      "+50 Health Regeneration per second"
    ],
    "unique_effects": [
      "+6% to all Magical Resistances",
      "Generating Overload grants 20% increased Health Regeneration for 2 seconds"
    ],
    "flavor_text": "Wearing this amulet makes you feel refreshed and energized.",
    "requirements": "LV 45",
    "gold_value": 4583
  },
  {
    "item_name": "Moonclaw",
    "item_type": "Necklace",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {},
    "magical_properties": [
      "27% increased Pierce Damage",
      "27% increased Critical Hit chance",
      "+11% Glancing Hits Chance"
    ],
    "unique_effects": [
      "On dealing a Critical Hit, recover 30 Energy. 3 seconds Cooldown"
    ],
    "flavor_text": "A charm fashioned from an owl's talon.",
    "requirements": "LV 45",
    "gold_value": 4421
  },
  {
    "item_name": "Cartouche Ring",
    "item_type": "Ring",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {},
    "magical_properties": [
      "21% increased Cold Damage",
      "21% increased Fire Damage",
      "30% increased Lightning Damage",
      "+25 Energy",
      "+10 Energy Regeneration per second"
    ],
    "unique_effects": [
      "+3 Maximum Burning Stacks",
      "+3 Maximum Chilled Stacks",
      "+3 Maximum Shocked Stacks"
    ],
    "flavor_text": "A fine gold ring with a multitude of small colorful stones.",
    "requirements": "LV 35",
    "gold_value": 4564
  },
  {
    "item_name": "Cratus' Coil",
    "item_type": "Ring",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {},
    "magical_properties": [
      "+215 Health",
      "+16 Might",
      "14% increased Physical Damage",
      "15% increased Fire Damage",
      "15% increased Cold Damage"
    ],
    "unique_effects": [
      "+9% to all Magical Resistances",
      "+3 maximum Rage stacks"
    ],
    "flavor_text": "Touched by Strength itself, the plain looking metal emenates an aura of might and fury.",
    "requirements": "LV 35",
    "gold_value": 4551
  },
  {
    "item_name": "Captain's Signet",
    "item_type": "Ring",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {},
    "magical_properties": [
      "+154 Pierce Armor",
      "+165 Strike Armor",
      "+192 Free Barrier"
    ],
    "unique_effects": [
      "+9% to all Magical Resistances",
      "15% increased Damage to Weapon Attacks"
    ],
    "flavor_text": "The iron seal of a veteran commander",
    "requirements": "LV 35",
    "gold_value": 4683
  },
  {
    "item_name": "Brigand's Axe",
    "item_type": "1h Axe",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "total_damage": "123-135",
      "pierce_damage": "12-14",
      "strike_damage": "49-54",
      "poison_damage": "61-68",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "32% increased Poison Damage",
      "33% increased Strike Damage",
      "+25% Poison Resistance",
      "28% increased Dodge Range"
    ],
    "unique_effects": [
      "Hitting an enemy with your Primary Attack reduces Dodge Cooldown by 10% of its remaining duration"
    ],
    "flavor_text": "A well-honed blade coated in poison.",
    "requirements": "AGI 230",
    "gold_value": 3535
  },
  {
    "item_name": "Frostbite",
    "item_type": "1h Axe",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "total_damage": "123-135",
      "cold_damage": "82-91",
      "pierce_damage": "40-45",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "12% increased Total Damage",
      "12% increased Attack Speed"
    ],
    "unique_effects": [
      "Every 10 seconds, hitting enemies with a Weapon Attack Freezes them for 1s",
      "40% increased Critical Hit chance against Frozen Enemies"
    ],
    "flavor_text": "An insidious weapon designed to freeze and shatter living beings.",
    "requirements": "RES 224",
    "gold_value": 3336
  },
  {
    "item_name": "Sagaris Karkinos",
    "item_type": "1h Axe",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "total_damage": "123-135",
      "pierce_damage": "86-95",
      "strike_damage": "37-41",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "+35 Weapon Cold Damage",
      "+142 Pierce Armor",
      "+183 Health",
      "24% increased Critical Hit chance",
      "+3% Base Weapon Critical Hit Chance"
    ],
    "unique_effects": [
      "+23% Base Weapon Ailment Chance",
      "+2 Maximum Bleeding Stacks"
    ],
    "flavor_text": "An axe fashioned from razor-sharp crab claws.",
    "requirements": "MIG 322",
    "gold_value": 3387
  },
  {
    "item_name": "Ratcatcher's Stick",
    "item_type": "1h Club",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "total_damage": "123-135",
      "poison_damage": "98-108",
      "strike_damage": "25-27",
      "attack_speed": "1.12x"
    },
    "magical_properties": [
      "33% increased Poison Damage",
      "+19% Poison Resistance",
      "11% increased Attack Speed"
    ],
    "unique_effects": [
      "Hitting an enemy with your Primary Attack has a 15% chance of causing an explosion in a 3m area, dealing Poison Damage with a 30% Ailment Chance.",
      "44% more Damage to vermin (Spiders, Bats, etc.)"
    ],
    "flavor_text": "When rats were breeding in the sewers, Tegean citizens developed an unsettling mixture of volatile poisons.",
    "requirements": "KNO 230",
    "gold_value": 3365
  },
  {
    "item_name": "Barrage",
    "item_type": "Bow",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "total_damage": "102-112",
      "pierce_damage": "102-112",
      "attack_speed": "1.56x"
    },
    "magical_properties": [
      "39% increased Pierce Damage",
      "+21% Glancing Hits Chance",
      "11% increased Attack Speed",
      "12% increased Movement Speed",
      "19% increased Movement Skill Cooldown Rate"
    ],
    "unique_effects": [
      "Hitting an enemy with your Primary Attack has a 5% chance of casting an unmodified Rain of Arrows"
    ],
    "flavor_text": "Sometimes quantity is the answer after all.",
    "requirements": "FIT 298",
    "gold_value": 6784
  },
  {
    "item_name": "Coral Mace",
    "item_type": "1h Club",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "total_damage": "147-163",
      "strike_damage": "59-65",
      "pierce_damage": "44-49",
      "cold_damage": "44-49",
      "attack_speed": "1.12x"
    },
    "magical_properties": [
      "+41 Weapon Cold Damage",
      "+27 Weapon Pierce Damage"
    ],
    "unique_effects": [
      "+23% Base Weapon Ailment Chance",
      "10% more Damage to Cold Spells"
    ],
    "flavor_text": "This coral is hard enough to shatter bone.",
    "requirements": "MIG 230",
    "gold_value": 3470
  },
  {
    "item_name": "Trygon's Tail",
    "item_type": "Dagger",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "total_damage": "123-135",
      "cold_damage": "61-68",
      "poison_damage": "61-68",
      "attack_speed": "1.4x"
    },
    "magical_properties": [
      "+25 Weapon Cold Damage",
      "25% increased Cold Damage",
      "22% increased Poison Damage"
    ],
    "unique_effects": [
      "Your Primary Attack has an Additional 100% Chance to apply Plagued when hitting Frozen Enemies"
    ],
    "flavor_text": "The venomous tip of the lord of stingrays' tail, which slew the hero Odysseus.",
    "requirements": "FIT 224",
    "gold_value": 3505
  },
  {
    "item_name": "Katharsis",
    "item_type": "Dagger",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "total_damage": "102-112",
      "lightning_damage": "51-56",
      "pierce_damage": "51-56",
      "attack_speed": "1.56x"
    },
    "magical_properties": [
      "+35 Weapon Lightning Damage",
      "10% increased Energy",
      "30% increased Lightning Damage",
      "10% increased Attack Speed",
      "11% increased Cast Speed"
    ],
    "unique_effects": [
      "When you have full overwhelm, generating more spends it on an explosion dealing Lightning Damage in a 3m Radius Area around you."
    ],
    "flavor_text": "A unique weapon, tempered by Zeus's thunderbolt. It crackles with energy.",
    "requirements": "AGI 230",
    "gold_value": 3415
  },
  {
    "item_name": "Fell Blade",
    "item_type": "Dagger",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "total_damage": "102-112",
      "pierce_damage": "51-56",
      "fire_damage": "51-56",
      "attack_speed": "1.56x"
    },
    "magical_properties": [
      "+46 Weapon Fire Damage",
      "+26% Fire Resistance",
      "19% increased Pierce Damage",
      "10% increased Attack Speed"
    ],
    "unique_effects": [],
    "flavor_text": "An sinister weapon premanently burning with unholy fire.",
    "requirements": "KNO 230",
    "gold_value": 3351
  },
  {
    "item_name": "Aegis of Laconia",
    "item_type": "Shield",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "armor": 220,
      "strike_resistance": 110,
      "pierce_resistance": 110
    },
    "magical_properties": [
      "Shield: +438 Free Barrier",
      "+198 Health",
      "+13 Might",
      "11% increased Movement Skill Cooldown Rate"
    ],
    "unique_effects": [
      "10% more Damage to Melee abilities"
    ],
    "flavor_text": "The iconic shield of Spartan warrior, rarely found without its owner.",
    "requirements": "FIT 224",
    "gold_value": 3388
  },
  {
    "item_name": "Silence",
    "item_type": "Sword",
    "rarity": "Epic",
    "required_level": 29,
    "base_stats": {
      "total_damage": "58-64",
      "spirit_damage": "29-32",
      "lightning_damage": "29-32",
      "attack_speed": "1.4x"
    },
    "magical_properties": [
      "+18 Weapon Lightning Damage",
      "17% increased Lightning Damage",
      "18% increased Spirit Damage",
      "+21 Energy",
      "13% increased Cooldown Rate"
    ],
    "unique_effects": [
      "+6% to all Magical Resistances",
      "10% chance to Silence enemies on Hit"
    ],
    "flavor_text": "Created by a king to break a nymph's spell, this sword sparks fear in the hearts of magic-users.",
    "requirements": "KNO 123",
    "gold_value": 1088
  },
  {
    "item_name": "Shadowsting",
    "item_type": "Spear",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "total_damage": "123-135",
      "pierce_damage": "61-68",
      "leech_damage": "61-68",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "11% More Damage to Undead",
      "5% increased Health",
      "+44 Weapon Vitality Damage",
      "23% increased Ailment Chance"
    ],
    "unique_effects": [
      "Consuming Overwhelm creates an explosion dealing Spirit Damage in a 3m Radius Area around you.",
      "20% increased Damage against Shadow Creatures"
    ],
    "flavor_text": "A dark aura surrounds this old dory.",
    "requirements": "CUN 224",
    "gold_value": 3486
  },
  {
    "item_name": "Fungus Log",
    "item_type": "2h Club",
    "rarity": "Epic",
    "required_level": 26,
    "base_stats": {
      "total_damage": "107-119",
      "strike_damage": "54-59",
      "poison_damage": "54-59",
      "attack_speed": "1x"
    },
    "magical_properties": [
      "26% increased Poison Damage",
      "26% increased Strike Damage",
      "+29% Poison Resistance",
      "+103 Health",
      "40% increased Ailment Chance",
      "39% increased Ailment Duration"
    ],
    "unique_effects": [
      "+3 Maximum Plagued Stacks"
    ],
    "flavor_text": "Emits a cloud of spores when shaken.",
    "requirements": "FIT 160",
    "gold_value": 1903
  },
  {
    "item_name": "Huntsman's Barb",
    "item_type": "Spear",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "total_damage": "123-135",
      "pierce_damage": "123-135",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "22% increased Pierce Damage",
      "40% increased Ailment Chance",
      "18% increased Ailment Power",
      "11% increased Attack Speed"
    ],
    "unique_effects": [
      "30% More Damage to Boars, Wolves and Lions"
    ],
    "flavor_text": "A spear that always strikes true, enchanted by Artemis as a gift to Orion.",
    "requirements": "FIT 224",
    "gold_value": 3250
  },
  {
    "item_name": "Megalos",
    "item_type": "2h Axe",
    "rarity": "Epic",
    "required_level": 21,
    "base_stats": {
      "total_damage": "72-80",
      "pierce_damage": "11-12",
      "strike_damage": "43-48",
      "lightning_damage": "18-20",
      "attack_speed": "1.12x"
    },
    "magical_properties": [
      "10% increased Total Damage",
      "+23 Weapon Lightning Damage",
      "+29% Lightning Resistance",
      "+127 Health",
      "14% increased Movement Speed"
    ],
    "unique_effects": [
      "When you have full overwhelm, generating more spends it on an explosion dealing Lightning Damage in a 3m Radius Area around you."
    ],
    "flavor_text": "A large axe once gifted by Zeus to the king of Thracia.",
    "requirements": "FIT 177",
    "gold_value": 1258
  },
  {
    "item_name": "Key of Elysium",
    "item_type": "2h Axe",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "208-230",
      "spirit_damage": "104-115",
      "strike_damage": "104-115",
      "attack_speed": "1.12x"
    },
    "magical_properties": [
      "15% More Damage to Undead",
      "19% increased Attributes",
      "+62 Weapon Strike Damage",
      "Summons have 10% increased All Speed",
      "+24 Agility",
      "+57 Energy",
      "+236 Health",
      "+23 Knowledge",
      "+22 Might",
      "11% increased Attack Speed",
      "11% increased Movement Speed"
    ],
    "unique_effects": [],
    "flavor_text": "Legend says that the strength of great heroes past lingers in this mighty weapon.",
    "requirements": "RSV 354",
    "gold_value": 9617
  },
  {
    "item_name": "Nessus' Rage",
    "item_type": "Sword",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "120-132",
      "pierce_damage": "90-99",
      "strike_damage": "30-33",
      "attack_speed": "1.4x"
    },
    "magical_properties": [
      "+25 Weapon Strike Damage",
      "+16 Might",
      "10% increased Attack Speed",
      "13% increased Strike Damage",
      "13% increased Pierce Damage"
    ],
    "unique_effects": [
      "+2% Added base Lifesteal to Physical Damage",
      "15% increased Damage to Weapon Attacks"
    ],
    "flavor_text": "The bloodthirst of the mighty centaur warrior still lingers in this Khopesh.",
    "requirements": "FIT 241",
    "gold_value": 4785
  },
  {
    "item_name": "Oath Breaker",
    "item_type": "Dagger",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "120-132",
      "pierce_damage": "120-132",
      "attack_speed": "1.56x"
    },
    "magical_properties": [
      "+25 Weapon Strike Damage",
      "14% increased Cooldown Rate",
      "14% increased Strike Damage",
      "14% increased Pierce Damage",
      "11% increased Movement Skill Cooldown Rate"
    ],
    "unique_effects": [
      "+2 Maximum Bleeding Stacks",
      "20% Chance to Trigger a Rupture when hitting channeling Enemies"
    ],
    "flavor_text": "The blade was once shattered, to bury any memory of the dark role it played.",
    "requirements": "FIT 241",
    "gold_value": 5068
  },
  {
    "item_name": "Onager",
    "item_type": "1h Axe",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "144-160",
      "strike_damage": "97-107",
      "pierce_damage": "48-53",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "Summons have 9% increased All Speed",
      "+10 Energy Regeneration per second",
      "Summons have 18% increased Health"
    ],
    "unique_effects": [
      "Hitting an enemy with your Primary Attack grants 15% increased Movement Speed for 1 second",
      "+62 Health Regeneration per second"
    ],
    "flavor_text": "Named after a tenacious donkey.",
    "requirements": "KNL 148",
    "gold_value": 4949
  },
  {
    "item_name": "Spear of Myrine",
    "item_type": "Spear",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "144-160",
      "pierce_damage": "97-107",
      "poison_damage": "48-53",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "22% increased Poison Damage",
      "+37 Weapon Poison Damage",
      "Summons have 25% increased Damage",
      "Summons have 10% increased All Speed",
      "43% increased Ailment Chance",
      "10% increased Attack Speed"
    ],
    "unique_effects": [
      "Bleeding Enemies are slowed by 20%"
    ],
    "flavor_text": "The legendary Amazon queen inspired her followers by leading from the front.",
    "requirements": "AGI 251",
    "gold_value": 4630
  },
  {
    "item_name": "Thorny Maul",
    "item_type": "1h Club",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "173-191",
      "pierce_damage": "116-128",
      "strike_damage": "57-63",
      "attack_speed": "1.12x"
    },
    "magical_properties": [
      "33% increased Pierce Damage",
      "+27 Weapon Pierce Damage",
      "+139 Strike Armor",
      "19% increased Critical Hit chance",
      "+2% Base Weapon Critical Hit Chance"
    ],
    "unique_effects": [
      "121 Pierce Retaliation"
    ],
    "flavor_text": "Block crush and impale, all with one handy tool.",
    "requirements": "FIT 241",
    "gold_value": 4732
  },
  {
    "item_name": "Grace of Eos",
    "item_type": "Staff",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "173-191",
      "spirit_damage": "88-97",
      "cold_damage": "85-94",
      "attack_speed": "1x"
    },
    "magical_properties": [
      "33% increased Cold Damage",
      "36% increased Spirit Damage",
      "+11 Energy Regeneration per second",
      "+213 Free Barrier",
      "8% increased Attack and Cast Speed",
      "-21 Energy Reserved",
      "11% increased Movement Speed"
    ],
    "unique_effects": [
      "13% More Damage to enemy Heroes and Bosses"
    ],
    "flavor_text": "Holding this staff fills you with the vim of a new day.",
    "requirements": "KNL 251",
    "gold_value": 9715
  },
  {
    "item_name": "Harpe",
    "item_type": "2h Axe",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "total_damage": "147-163",
      "fire_damage": "88-98",
      "strike_damage": "44-49",
      "pierce_damage": "15-16",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "+70 Weapon Fire Damage",
      "+47% Fire Resistance",
      "41% increased Fire Damage",
      "+10 Energy Regeneration per second",
      "+24% Glancing Hits Chance",
      "10% increased Attack Speed"
    ],
    "unique_effects": [
      "Hitting an enemy with your Primary Attack grants 15% increased Movement Speed for 1 second"
    ],
    "flavor_text": "The flames of Hephaistos's forge still burn in this weapon's blade.",
    "requirements": "AGI 230",
    "gold_value": 6933
  },
  {
    "item_name": "Dam Breaker",
    "item_type": "2h Club",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "total_damage": "233-257",
      "strike_damage": "233-257",
      "attack_speed": "0.91x"
    },
    "magical_properties": [
      "44% increased Strike Damage",
      "+257 Health",
      "50% increased Ailment Chance",
      "42% increased Ailment Duration",
      "39% increased Ailment Power"
    ],
    "unique_effects": [
      "20% Chance to Trigger a Rupture when hitting channeling Enemies"
    ],
    "flavor_text": "An extremely heavy sledgehammer.",
    "requirements": "MIG 230",
    "gold_value": 6550
  },
  {
    "item_name": "Perdix' Sphere",
    "item_type": "2h Club",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "total_damage": "212-234",
      "lightning_damage": "169-187",
      "strike_damage": "42-47",
      "attack_speed": "1x"
    },
    "magical_properties": [
      "20% increased Energy",
      "31% increased Lightning Damage",
      "+30% Lightning Resistance",
      "+207 Energy Barrier",
      "29% increased Ailment Power"
    ],
    "unique_effects": [],
    "flavor_text": "While ingenuity ran in the family, Perdix had a special interest in iron and magnetism.",
    "requirements": "KNO 230",
    "gold_value": 7072
  },
  {
    "item_name": "Ilektrisimos",
    "item_type": "Staff",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "total_damage": "147-163",
      "lightning_damage": "147-163",
      "attack_speed": "1x"
    },
    "magical_properties": [
      "50% increased Lightning Damage",
      "+29% Lightning Resistance",
      "7% increased Attack and Cast Speed",
      "53% increased Ailment Chance",
      "46% increased Ailment Duration"
    ],
    "unique_effects": [],
    "flavor_text": "Crafting Zeus' thunderbolt took many failed attempts, some more promising than others.",
    "requirements": "CUN 298",
    "gold_value": 6581
  },
  {
    "item_name": "Mother Crab's Claw",
    "item_type": "Necklace",
    "rarity": "Epic",
    "required_level": 14,
    "base_stats": {},
    "magical_properties": [
      "+12% Cold Resistance",
      "4% increased Health",
      "+13% Poison Resistance",
      "+46 Pierce Armor",
      "10% increased Movement Speed"
    ],
    "unique_effects": [
      "10% increased Damage against Crabs"
    ],
    "flavor_text": "Crabs seem to sense that the bearer of this trophy is a threat.",
    "requirements": "LV 14",
    "gold_value": 535
  },
  {
    "item_name": "Hippokampos Scapula",
    "item_type": "2h Axe",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "208-230",
      "strike_damage": "83-92",
      "poison_damage": "64-71",
      "cold_damage": "60-67",
      "attack_speed": "1.12x"
    },
    "magical_properties": [
      "+37 Weapon Cold Damage",
      "+41 Weapon Poison Damage",
      "+52 Energy",
      "+9 Energy Regeneration per second",
      "12% increased Movement Speed",
      "Summons have +27% to All Resistances"
    ],
    "unique_effects": [
      "+6% to all Magical Resistances"
    ],
    "flavor_text": "For centuries the creature lay in wait, lurking in its prison of stone, until you slew it.",
    "requirements": "RSV 354",
    "gold_value": 10126
  }
];
