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
		'show notification Welcome',
		'play music background loop',
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
		'y But wait, you’ve seen nothing yet. Check out this asteroid...',

		// Show the asteroid looking like ladoos as background
		'show scene url("img/ladoos.jpeg") with fadeIn',
		'y Yup, that’s right. It looks like ladoos floating in space! 🍬 Now I’m just hungry!',
		
		// Asking the player if the image looks like a ladoo or an asteroid
		{
			'Choice': {
				'Dialog': 'y What do you think this image looks like?',
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
		
		'y But okay, okay, if you insist. How about this asteroid? You’ll never guess what it looks like...',

		// Show the asteroid looking like ladoos as background
		'show scene url("img/ladoos.jpeg") with fadeIn',
		'y Ladoos, right? 🍬 Just when you thought space couldn’t get any sweeter!',
		
		// Asking the player if the image looks like a ladoo or an asteroid
		{
			'Choice': {
				'Dialog': 'y What do you think this image looks like?',
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

	'LadooResponse': [
		'y Haha! I knew it! It really does look like a delicious ladoo floating in space. 🍬',
		'y Now I’m hungry... Anyway, time to get back to the cosmic adventure!',
		'end'
	],

	'AsteroidResponse': [
		'y Hmm, an asteroid, huh? I guess it does look like one if you squint a little. 🌑',
		'y But seriously, now I’m craving ladoos... Let’s continue our cosmic adventure!',
		'end'
	]

});

