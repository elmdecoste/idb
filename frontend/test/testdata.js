export const ITEMS_JSON = {
    items: [{
            "name": "Jade",
            "examine_info": "A semi precious stone.",
            "icon": "https://vignette.wikia.nocookie.net/2007scape/images/1/14/Jade_detail.png/revision/latest/scale-to-width-down/130?cb=20170203200834",
            "type": "gems",
            "market_price": 433,
            "location": "",
            "weight": 0,
            "id": 1,
            "skills": [1, 9],
            "videos": [1, 10],
            "reddits": [1]
        },
        {
            "name": "Dragon scimitar",
            "examine_info": "A vicious, curved sword.",
            "icon": "https://vignette.wikia.nocookie.net/2007scape/images/9/97/Dragon_scimitar_detail.png/revision/latest/scale-to-width-down/140?cb=20170118191039",
            "type": "Slash Weapons",
            "market_price": 100000,
            "location": "",
            "weight": 1.8,
            "id": 2,
            "skills": [2],
            "videos": [2],
            "reddits": [2]
        },
        {
            "name": "Iron bar",
            "examine_info": "An iron bar. Used in Smithing (15) for production and training.",
            "icon": "https://vignette.wikia.nocookie.net/2007scape/images/f/fb/Iron_bar_detail.png/revision/latest/scale-to-width-down/120?cb=20131219211657",
            "type": "Bars",
            "market_price": 179,
            "location": "A single iron bar can be found west of the Graveyard of Shadows next to the bears in some trees in level 18 Wilderness. ",
            "weight": 2,
            "id": 3,
            "skills": [3],
            "videos": [3],
            "reddits": [3]
        },
        {
            "name": "Shark",
            "examine_info": "I'd better be careful eating this.",
            "icon": "https://vignette.wikia.nocookie.net/2007scape/images/0/0b/Shark_detail.png/revision/latest/scale-to-width-down/120?cb=20160214063425",
            "type": "gems",
            "market_price": 1033,
            "location": "",
            "weight": 0.6,
            "id": 4,
            "skills": [4],
            "videos": [4, 5],
            "reddits": [4]
        },
        {
            "name": "Lantern lens",
            "examine_info": "A roughly circular disc of glass.",
            "icon": "https://vignette.wikia.nocookie.net/2007scape/images/f/fd/Lantern_lens.png/revision/latest?cb=20131011232646",
            "type": "Crafting items",
            "market_price": 177,
            "location": "",
            "weight": 0.02,
            "id": 5,
            "skills": [1],
            "videos": [5],
            "reddits": [1]
        },
        {
            "name": "Zamorak cape",
            "examine_info": "A cape from the almighty god Zamorak.",
            "icon": "https://vignette.wikia.nocookie.net/2007scape/images/8/8f/Zamorak_cape_detail.png/revision/latest/scale-to-width-down/140?cb=20160614222559",
            "type": "",
            "market_price": 1000,
            "location": "",
            "weight": 2,
            "id": 6,
            "skills": [5],
            "videos": [7, 8],
            "reddits": []
        },
        {
            "name": "Zamorak godsword",
            "examine_info": "A terrifying, heavy sword.",
            "icon": "https://vignette.wikia.nocookie.net/2007scape/images/d/db/Zamorak_godsword_detail.png/revision/latest/scale-to-width-down/140?cb=20160529084710",
            "type": "",
            "market_price": 1000,
            "location": "",
            "weight": 10,
            "id": 7,
            "skills": [2],
            "videos": [7],
            "reddits": []
        },
        {
            "name": "Potato cactus",
            "examine_info": "How am I supposed to eat that?!",
            "icon": "https://vignette.wikia.nocookie.net/2007scape/images/1/1d/Potato_cactus_detail.png/revision/latest/scale-to-width-down/130?cb=20160528062655",
            "type": "",
            "market_price": 3007,
            "location": "Kalphite Dungen",
            "weight": 0,
            "id": 8,
            "skills": [4, 7],
            "videos": [6],
            "reddits": [7, 9]
        },
        {
            "name": "Necromancer hood",
            "examine_info": "A hood worn by twisted necromancers.",
            "icon": "https://vignette.wikia.nocookie.net/runescape2/images/1/12/Necromancer_hood_detail.png/revision/latest/scale-to-width-down/160?cb=20110921233043",
            "type": "",
            "market_price": 10000,
            "location": "",
            "weight": 0,
            "id": 9,
            "skills": [1, 5, 8],
            "videos": [7, 8],
            "reddits": [5]
        }
    ],
    count: 9
}

export const SKILLS_JSON = {
    items: [{
            "name": "Crafting",
            "id": 1,
            "icon": "https://vignette.wikia.nocookie.net/2007scape/images/f/ff/Crafting.png/revision/latest?cb=20131026214928",
            "description": "Crafting is a skill that allows players to create items such as jewellery, pottery, and armour for use or for trade. ",
            "members_only": false,
            "max_level": 99,
            "items": [1, 5],
            "videos": [1],
            "reddits": [1]
        },
        {
            "name": "Attack",
            "id": 2,
            "icon": "https://vignette.wikia.nocookie.net/2007scape/images/0/00/Attack.png/revision/latest?cb=20131026214927",
            "description": "Attack is a player's accuracy in melee combat. As a player raises their Attack level, they can deal damage more consistently as well as wield weapons of stronger materials. ",
            "members_only": false,
            "max_level": 99,
            "items": [2],
            "videos": [2],
            "reddits": [2]
        },
        {
            "name": "Smithing",
            "id": 3,
            "icon": "https://vignette.wikia.nocookie.net/2007scape/images/8/84/Smithing.png/revision/latest?cb=20131026214932",
            "description": "Smithing is a production skill through which players may create a wide variety of metal items from ore and metal bars. It is the companion skill of Mining, which generates all of the raw materials used in Smithing. Ores acquired from Mining are smelted into metal bars at furnaces, and then hammered into items at anvils. Many smithable items are useful in combat, quests, and the training of a number of other skills such as Crafting and Fletching.",
            "members_only": false,
            "max_level": 99,
            "items": [3],
            "videos": [3],
            "reddits": [3, 8]
        },
        {
            "name": "Cooking",
            "id": 4,
            "icon": "https://vignette.wikia.nocookie.net/2007scape/images/f/f4/Cooking.png/revision/latest?cb=20131026214928",
            "description": "Cooking is a skill that allows a player to cook raw food into food that you can eat. Cooking goes hand-in-hand with the Fishing skill as the player can cook the fish they obtain shortly after a full inventory is made. If no stove/range is nearby, having an axe and tinderbox on hand can allow the player to cut down a tree and make a fire to cook the fish on (however, there is a significantly smaller chance of burning the food if it is used on the range in the Lumbridge castle). By levelling up Cooking the player is able to cook the more profitable foods such as lobsters, swordfish, monkfish and shark. By eating cooked food you gain lost Hitpoints, which is useful for training your combat skills.",
            "members_only": false,
            "max_level": 99,
            "items": [4, 8],
            "videos": [6],
            "reddits": [6, 7]
        },
        {
            "name": "Magic",
            "id": 5,
            "icon": "https://vignette.wikia.nocookie.net/2007scape/images/f/f7/Magic.png/revision/latest?cb=20131026214930",
            "description": "Magic is a skill that uses the energy released by runes for a variety of subjects such as combat, enchantment, teleportation, and alchemy. While it is possible to play the game without being skilled in Magic, there are advantages gained when a player is highly leveled. This is especially true with beneficial spells such as High level alchemy and various teleports.",
            "members_only": false,
            "max_level": 99,
            "items": [6, 9],
            "videos": [7, 8],
            "reddits": []
        },
        {
            "name": "Fishing",
            "id": 6,
            "icon": "https://vignette.wikia.nocookie.net/2007scape/images/1/19/Fishing.png/revision/latest?cb=20131026214929",
            "description": "Fishing is a skill which involves catching fish from selected spots around Gielinor. Higher Fishing levels enable different mechanisms of Fishing, the ability to catch a larger selection of fish and increases a player's catch rate. Caught fish may be cooked through the Cooking skill to create food which may be used later to regain hitpoints during combat. Alternatively, many players sell their excess stock of catches for gold.",
            "members_only": false,
            "max_level": 99,
            "items": [4],
            "videos": [4],
            "reddits": []
        },
        {
            "name": "Herblore",
            "id": 7,
            "icon": "https://vignette.wikia.nocookie.net/2007scape/images/b/bf/Herblore.png/revision/latest?cb=20131026214930",
            "description": "Herblore is a members only skill that involves making potions from herbs. Using this skill requires completion of the Druidic Ritual quest.",
            "members_only": true,
            "max_level": 99,
            "items": [8],
            "videos": [6],
            "reddits": []
        },
        {
            "name": "Defence",
            "id": 8,
            "icon": "https://vignette.wikia.nocookie.net/2007scape/images/4/41/Defence.png/revision/latest?cb=20131026214928",
            "description": "Defence (spelled 'Defense' in RuneScape Classic; oftentimes abbreviated as Def) is one of the primary combat skills that grants players protection in all forms of combat. Defence is one of the skills that will raise the combat level of a player regardless of other skill levels. For this reason, many pures leave their defence at a certain level and stop training it. They range from 1 Defence pures, to Initiate pures (level 20-25), rune pures (level 40/42), Berserker pures (level 45), and Barrows pures (level 70). All of the above may be considered as a type of 'pure'. Some people may choose to only train Defence, and are known as just 'Defence pures'.",
            "members_only": false,
            "max_level": 99,
            "items": [9],
            "videos": [9],
            "reddits": []
        },
        {
            "name": "Mining",
            "id": 9,
            "icon": "https://vignette.wikia.nocookie.net/2007scape/images/4/41/Mining.png/revision/latest?cb=20131026214931",
            "description": "Mining is a skill that allows players to extract ores, gems, rune essence and other resources from rocks in mines throughout RuneScape. To increase your Mining level, you will need to mine ore from rocks. All the different ores come from different colored rocks that are roughly based on the ore, e.g. a Mithril rock would be blue in color. As your Mining level increases, mining will become quicker. When you have mined a rock, the ore will disappear and the rock will become a light gray color and you will then have to wait for it to respawn.",
            "members_only": false,
            "max_level": 99,
            "items": [3],
            "videos": [10],
            "reddits": [4]
        },
        {
            "name": "Agility",
            "id": 10,
            "icon": "https://vignette.wikia.nocookie.net/2007scape/images/1/14/Agility.png/revision/latest?cb=20150328194018",
            "description": "Agility is a members only skill which gives access to various shortcuts around RuneScape. Apart from the shortcuts, Agility also has several other uses, such as obtaining the graceful outfit and fighting Commander Zilyana. A higher Agility level allows for faster run energy restoration. At level 1 Agility, a player recovers 1% of their run energy every 7.5 seconds. At level 50 Agility, a player recovers the same amount in only 4 seconds.",
            "members_only": true,
            "max_level": 99,
            "items": [],
            "videos": [],
            "reddits": []
        },
        {
            "name": "Farming",
            "id": 11,
            "icon": "https://vignette.wikia.nocookie.net/2007scape/images/1/18/Farming.png/revision/latest?cb=20131026214928",
            "description": "Farming is a skill in which players grow crops using seeds and harvest useful items from them, or more commonly, harvest the plant itself. The crops grown range from the standard staples of vegetables, fruit trees, herbs, hops, to more exotic and unusual crops such as wood-bearing trees, cacti, and mushrooms. The harvested items have wide range of uses, but are mostly used to train Herblore or Cooking, or simply eaten as food. Many players sell their harvest for a significant profit. Once players have reached the intermediate level range and beyond, they can begin to plant wood-bearing trees. Player grown trees function just like their standard equivalents, which can be chopped down and regenerate after a short period of time to yield Woodcutting experience and logs. Player grown woodcutting trees have the added benefit of being only accessible to the player who grew them, which means that players will not need to compete to gather their own tree's wood.",
            "members_only": true,
            "max_level": 99,
            "items": [],
            "videos": [],
            "reddits": []
        },
        {
            "name": "Thieving",
            "id": 12,
            "icon": "https://vignette.wikia.nocookie.net/2007scape/images/f/f4/Thieving.png/revision/latest?cb=20131026214938",
            "description": "Thieving is a members-only skill which allows players to obtain coins and items by stealing from market stalls, chests, or by pickpocketing non-player characters. This skill also allows players to unlock doors and disarm traps. ",
            "members_only": true,
            "max_level": 99,
            "items": [],
            "videos": [],
            "reddits": []
        },
        {
            "name": "Prayer",
            "id": 13,
            "icon": "https://vignette.wikia.nocookie.net/2007scape/images/3/32/Prayer.png/revision/latest?cb=20131026214931",
            "description": "Prayer is a non-members combat skill. Prayer is trained by burying bones, using them on an altar in a player-owned house, by praying at the Ectofuntus with bonemeal and buckets of slime or killing reanimated monsters summoned via the Arceuus spellbook. Different bones give different amounts of experience. Prayers are unlocked as the level in the skill goes up, which are used to aid the player in combat. The prayers can help with Attack, Defence, Strength, Ranged, Magic, and Hitpoints; among other uses. When prayers are activated, they drain the player's Prayer points until the prayer is turned off or all Prayer points are used. Most prayers can be activated immediately before the attack hits and promptly deactivated in order to gain buffs and/or protection with minimal to no expenditure of prayer points. This is called Prayer flicking.",
            "members_only": false,
            "max_level": 99,
            "items": [],
            "videos": [],
            "reddits": []
        },
        {
            "name": "Ranged",
            "id": 14,
            "icon": "https://vignette.wikia.nocookie.net/2007scape/images/c/c8/Ranged.png/revision/latest?cb=20131026214931",
            "description": "Ranged is one of the three Combat classes in Old School RuneScape. It involves using bows, crossbows, and thrown weapons to damage opponents from a distance, and Ranged armour can mostly be made from animal hides. Players who specialise in this skill are known as rangers or archers. Rangers are capable of having the highest accuracy of any combat type, boasting a maximum of +234 to Ranged attack, beating both Magic with a maximum of +152, and melee with a maximum of +170 to slash. For this reason, it is often used against monsters with very high Defence. The combat triangle dictates that Rangers are strong against mages but weak against Melee fighters. The ability to attack from a distance means that a player can safespot a melee monster while fighting from safety. Keep in mind that some melee monsters have high Ranged Defence, so a high Ranged level may be needed. Crossbows are useful against monsters with high Defence, as they are very accurate.",
            "members_only": false,
            "max_level": 99,
            "items": [],
            "videos": [],
            "reddits": []
        },
        {
            "name": "Construction",
            "id": 15,
            "icon": "https://vignette.wikia.nocookie.net/2007scape/images/3/37/Construction.png/revision/latest?cb=20131026214927",
            "description": "Construction is a members-only skill that allows players to build their own houses and provide furniture for them. To begin Construction, players must buy a house from one of the estate agents. A starter house will cost 1,000 coins, and will be in Rimmington. A level 40 Magic spell can then be used to teleport to the house, or players can walk to Rimmington, where there is a portal (Player-owned house icon icon on the map) that will teleport players to their house. The house starts off with only a small room and garden, but more can be built. To build, go to the options menu, select house options, and set the build mode to on. Players will then see what looks like ghost-like Hot Spots where new objects can be built. See the Constructed items list for details on what you can build at what level. Players can also visit a friend's house if they are home and using the same portal. Construction is widely regarded as one of the most costly skills to level up.",
            "members_only": true,
            "max_level": 99,
            "items": [],
            "videos": [],
            "reddits": []
        },
        {
            "name": "Runecrafting",
            "id": 16,
            "icon": "https://vignette.wikia.nocookie.net/2007scape/images/5/5a/Runecrafting.png/revision/latest?cb=20131026214932",
            "description": "Runecraft (also known as Runecrafting) is a skill that allows players to craft their own runes for Magic spells. The experience earned from making runes is small, making Runecraft a very slow skill to train, on par with Slayer, and due to the need for constant running and banking, it is fairly click and attention intensive. However, due to the constant demand for different types of runes, it can create a very generous profit.",
            "members_only": false,
            "max_level": 99,
            "items": [],
            "videos": [],
            "reddits": []
        },
        {
            "name": "Slayer",
            "id": 17,
            "icon": "https://vignette.wikia.nocookie.net/2007scape/images/6/6e/Slayer.png/revision/latest?cb=20131026214932",
            "description": "Slayer is a skill that allows players to kill monsters that may otherwise be immune to damage. Players must visit a Slayer master, who will assign them a task to kill certain monsters based on the player's Combat level. Slayer experience roughly equal to a slain monster's Hitpoints is awarded each time the player kills an assigned monster. Many players primarily train Combat by completing Slayer tasks, as Combat experience is still given as normal while fighting Slayer monsters. Slayer is a very profitable skill to train, as high leveled slayer monsters such as slayer bosses have a multitude of both rare and valuable drops.",
            "members_only": true,
            "max_level": 99,
            "items": [],
            "videos": [],
            "reddits": []
        },
        {
            "name": "Hunter",
            "id": 18,
            "icon": "https://vignette.wikia.nocookie.net/2007scape/images/6/6e/Slayer.png/revision/latest?cb=20131026214932",
            "description": "Hunter is a members'-only skill where players catch different animals and creatures in RuneScape. Although Hunter is a non-combat skill, players can still be damaged while hunting. Using hunting equipment bought from hunter stores, players can hunt specific creatures obtaining rewards such as spotted kebbit fur for spotted cape, chinchompa ammunition, black salamanders, and the fabled dragon impling jar.",
            "members_only": true,
            "max_level": 99,
            "items": [],
            "videos": [],
            "reddits": []
        },
        {
            "name": "Fletching",
            "id": 19,
            "icon": "https://vignette.wikia.nocookie.net/2007scape/images/0/0c/Fletching.png/revision/latest?cb=20131026214929",
            "description": "Fletching is a skill which allows the player to create various types of ranged weapons and their ammunition. The products of this skill are primarily used in the combat skill, Ranged. It also provides some of the most popular materials used for High Alchemy, which is one of the main methods for training the Magic skill.",
            "members_only": true,
            "max_level": 99,
            "items": [],
            "videos": [],
            "reddits": []
        }
    ],
    count: 19
}

export const JADE_JSON = {
    "name": "Jade",
    "examine_info": "A semi precious stone.",
    "icon": "https://vignette.wikia.nocookie.net/2007scape/images/1/14/Jade_detail.png/revision/latest/scale-to-width-down/130?cb=20170203200834",
    "type": "gems",
    "market_price": 433,
    "location": "",
    "weight": 0,
    "id": 1,
    "skills": ["Crafting", "Mining"],
    "videos": ["OSRS 99 CRAFTING GUIDE 07 RS", "NEW Mining Guild EXPANSION"],
    "reddits": ["Loot from cutting 119k semi-precious gems"]
}