/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the images used in the game (Make sure these files are in the img folder)
monogatari.assets ('images', {
    'umbrella': 'img/umbrella.jpeg',
    'ladoo': 'img/ladoo.jpeg'
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {});

// Define the Characters
monogatari.characters ({
	'y': {
		name: 'Yui',
		color: '#5bcaff'
	}
});

monogatari.assets ('music', {
    'background': 'background-music.mp3'
});

monogatari.script ({

	// The game starts here.
	'Start': [
		'play music background loop', // Start looping the background music
		'show notification Welcome',
		'centered Welcome to the JWST interactive experience!',
		{
			'Input': {
				'Text': 'Please enter your name',
				'Validation': name => name.length > 0,
				'Save': name => {
					this.storage ({
						player: {
							name
						}
					});
				},
				'Revert': () => this.storage ().player.name,
				'Warning': 'You must enter a name!'
			}
		},
		'centered Thank you, {{player.name}}! Let’s begin the fun part.',

		'y Hi {{player.name}}! Welcome to the JWST interactive experience!',
		'y So, here’s a question for you: Do you think the JWST looks more like an umbrella or a cutting-edge space telescope?',
		'show scene url("img/umbrella.jpeg") with fadeIn',
		// Choice for user to pick a humorous response
		{
			'Choice': {
				'Dialog': 'y What do you think?',
				'Yes': {
					'Text': 'Umbrella, 100%',
					'Do': 'jump Umbrella'
				},
				'No': {
					'Text': 'Nah, it’s a serious telescope',
					'Do': 'jump Telescope'
				}
			}
		}
	],

	'Umbrella': [
		'y I knew it! JWST looks like an umbrella, right? 🤔',
		// Show the JWST as an umbrella background
		'show scene url("img/umbrella.jpeg") with fadeIn',
		'y I mean, is NASA trying to protect the universe from a space rainstorm? 😂',
		'y It’s either catching galaxies or keeping ET dry. Who knows? 😆',
		'y But wait, you’ve seen nothing yet. Check out this so-called asteroid...',

		// Show the Centaur 29P Outgassing as background (Artist's Concept)
		'show scene url("img/centaur-29p.jpeg") with fadeIn',
		'y Actually, this isn’t a regular asteroid—it’s Centaur 29P, a unique type of <b>centaur object</b> orbiting the Sun between Jupiter and Neptune. 🌌',
		'y Centaur 29P is known for its <b>outgassing</b> behavior, which means it releases gas and dust as it warms up, creating a bright coma, much like a comet. This artist’s concept represents that outgassing event!',
		
		// Asking the player if the image looks like a ladoo or an asteroid
		{
			'Choice': {
				'Dialog': 'y But let’s be honest, doesn’t it still look like a ladoo?',
				'Ladoo': {
					'Text': 'A ladoo, definitely!',
					'Do': 'jump LadooResponse'
				},
				'Asteroid': {
					'Text': 'No way, it looks like an asteroid!',
					'Do': 'jump AsteroidResponse'
				}
			}
		}
	],

	'Telescope': [
		'y Oh, come on! You really think it looks like a serious space telescope? 🤨',
		'y Well, sure, it does catch breathtaking images of distant galaxies... But don’t you think it looks a *tiny* bit like an umbrella?',
		
		// Show the JWST as an umbrella background
		'show scene url("img/umbrella.jpeg") with fadeIn',
		'y I mean, it’s like NASA was ready for a cosmic monsoon! 😂',
		
		'y But okay, okay, if you insist. How about this so-called asteroid? You’ll never guess what it really is...',

		// Show the Centaur 29P Outgassing as background (Artist's Concept)
		'show scene url("img/centaur-29p.jpeg") with fadeIn',
		'y That’s not an asteroid! It’s <b>Centaur 29P</b>, a celestial object found in the outer solar system. It behaves like a comet due to <b>outgassing</b> caused by its warming core.',
		'y Outgassing is when gas and dust are expelled, giving the object a comet-like glow. Pretty cool, right? 🌠',
		
		// Asking the player if the image looks like a ladoo or an asteroid
		{
			'Choice': {
				'Dialog': 'y But seriously, doesn’t it still look like a ladoo?',
				'Ladoo': {
					'Text': 'A ladoo, definitely!',
					'Do': 'jump LadooResponse'
				},
				'Asteroid': {
					'Text': 'No way, it looks like an asteroid!',
					'Do': 'jump AsteroidResponse'
				}
			}
		}
	],

	// LadooResponse
'LadooResponse': [
	'y Haha! I knew it! It really does look like a delicious ladoo floating in space. 🍬',
	'y Now I’m hungry... Anyway, time to get back to the cosmic adventure!',
	'jump NextPart' // Continue to the next part of the story
],

// AsteroidResponse
'AsteroidResponse': [
	'y Hmm, an asteroid, huh? I guess it does look like one if you squint a little. 🌑',
	'y But seriously, now I’m craving ladoos... Let’s continue our cosmic adventure!',
	'jump NextPart' // Continue to the next part of the story
],

// Continue from here to the next part
'NextPart': [
	'y But wait, we’re not done yet! Have you ever seen something that looks like an hourglass in space? 🌌',
	'y Let me show you this stunning image captured by MIRI (Mid-Infrared Instrument) from the James Webb Space Telescope. It’s the <b>L1527 Protostar</b>!',

	// Show the L1527 Protostar (hourglass image)
	'show scene url("img/hourglass.png") with fadeIn',
	'y This is the <b>L1527 Protostar</b>, and just look at it... doesn’t it remind you of an hourglass? ⏳',
	'y It’s almost like the universe is trying to tell us we’re running out of time to explore it!',

	// Asking the player a humorous question about the hourglass-shaped image
	{
		'Choice': {
			'Dialog': 'y So, what do you think this looks more like?',
			'Hourglass': {
				'Text': 'An hourglass, obviously!',
				'Do': 'jump HourglassResponse'
			},
			'SomethingElse': {
				'Text': 'Hmm, I see something else...',
				'Do': 'jump SomethingElseResponse'
			}
		}
	}
],

// Responses based on the user's choice
'HourglassResponse': [
	'y I knew it! The universe is literally giving us a cosmic timer. ⏳',
	'y Better hurry up and make those discoveries before the sand runs out!',
	'y But seriously, this is a<b>protostar</b>, which is an early stage in the formation of a star. This hourglass shape is created by material falling into the young star while glowing gas escapes!',
	'jump ContinueAdventure'
],

'SomethingElseResponse': [
	'y Really? You don’t see the hourglass? 😆 Well, it’s actually a <b>protostar</b>!',
	'y This image shows material falling into the young star at the center, with gas and dust being expelled in this beautiful hourglass shape. That’s why it looks like this!',
	'y Maybe you have a more creative imagination than I do! 🌌',
	'jump ContinueAdventure'
],

// Continue the cosmic journey
'ContinueAdventure': [
	'y Now that you’ve seen some of the universe’s coolest shapes, it’s time to continue our cosmic journey!',
	'y But wait, we’re not done yet. Let’s dive deeper into the mysteries of space!',

	'y Have you ever seen something that looks like a plate floating in space? 🍽️',
	'y This next image is actually the <b>Protoplanetary Disk</b>!',

	// Show the Protoplanetary Disk (Artist's Concept) as "plate"
	'show scene url("img/plate.jpg") with fadeIn',
	'y This is a <b>Protoplanetary Disk</b>, but come on, doesn’t it look like a cosmic dinner plate? 🍽️',
	'y It’s like the universe decided it was time to serve dinner!',

	// Asking the player a humorous question about the plate-shaped image
	{
		'Choice': {
			'Dialog': 'y So, what do you think? Cosmic plate or something else?',
			'Plate': {
				'Text': 'Definitely a plate! 🍽️',
				'Do': 'jump PlateResponse'
			},
			'SomethingElse': {
				'Text': 'Nope, something else entirely!',
				'Do': 'jump SomethingElsePlateResponse'
			}
		}
	}
],

// Responses based on the user's choice
'PlateResponse': [
	'y I knew it! It’s the universe’s way of saying, “Time for dinner, everyone!” 🍽️',
	'y But seriously, this is a <b>Protoplanetary Disk</b>, the birthplace of planets! This swirling disk of gas and dust forms around a new star and eventually clumps together to form planets, moons, and more!',
	'y So yeah, it may look like a plate now, but one day, it could form entire planets. 🍽️🌍',
	'jump ContinueJourney'
],

'SomethingElsePlateResponse': [
	'y Oh really? Not a plate? 😆',
	'y Okay, fine! It’s actually a <b>Protoplanetary Disk</b>, a swirling collection of gas and dust that orbits a young star and forms planets over millions of years.',
	'y So, while it might not serve dinner, it’s definitely serving up some brand-new planets in the future! 🍽️🌍',
	'jump ContinueJourney'
],

// Continue the cosmic journey
'ContinueJourney': [
	'y The universe is full of surprises, isn’t it? Plates, hourglasses, ladoos... What’s next?',
	'y Well, speaking of surprises, have you ever seen a cosmic image that looks like it came straight out of a bad sci-fi movie? 🎬',

	'y Let me introduce you to the <b>Webb and Hubble’s Views of Spiral Galaxy NGC 4254</b>... or should I say, the latest visual effects disaster? 😆',
	
	// Show the Webb and Hubble’s Views of Spiral Galaxy NGC 4254 as "badvfx"
	'show scene url("img/badvfx.png") with fadeIn',
	'y Now, be honest... Doesn’t this look like the kind of VFX you’d expect from the final battle in a Marvel movie? 🤔',

	// Continue with the joke
	'y I mean, come on! You could almost picture Ant-Man shrinking down and getting lost in there, trying to figure out if this is the <b>Quantum Realm</b> or just some poorly rendered special effects. 🎬',

	// Asking the player a humorous question about the bad VFX
	{
		'Choice': {
			'Dialog': 'y So, what do you think? Is this a real galaxy or some bad VFX from a Marvel movie?',
			'VFX': {
				'Text': 'Definitely bad VFX! 🎬',
				'Do': 'jump VFXResponse'
			},
			'RealGalaxy': {
				'Text': 'Wait... is this actually a real galaxy? 😳',
				'Do': 'jump RealGalaxyResponse'
			}
		}
	}
],

// Responses based on the user's choice
'VFXResponse': [
	'y Haha, I knew you’d say that! 🎬',
	'y Honestly, it does look like someone went a little overboard with the CGI. But nope! This is actually the real deal.',
	'y This is <b>NGC 4254</b>, a spiral galaxy captured by both <b>Hubble</b> and <b>Webb</b>. No Ant-Man or special effects here... just real cosmic beauty. 🌌',
	'jump ContinueExploration'
],

'RealGalaxyResponse': [
	'y You’re right, it’s hard to believe... but yes, this is a real galaxy! 🌌',
	'y Despite looking like it’s straight out of a low-budget sci-fi movie, this is <b>NGC 4254</b>, a spiral galaxy. Captured by both <b>Hubble</b> and <b>Webb</b>, it shows just how crazy cool the universe can look—no CGI required! 🎬',
	'y Maybe the universe is just showing off its own special effects! 😉',
	'jump ContinueExploration'
],

'ContinueExploration': [
	'y So, whether you think it’s Marvel-level VFX or an actual galaxy, one thing’s for sure: space never ceases to amaze! 🌌',
	'y Let’s keep exploring and see what other cosmic wonders we stumble upon. Hopefully, no more bad VFX! 😆',
	'end'
]



});
