/* Basic Structure

(function() {
	Declare private variables

	return {
		Declare public var and functions
	}
})

*/


// STANDARD MODULE PATTERN
// const UICtrl() = (function() {
// 	let text = 'Hello World';

// 	const changeText = function() {
// 		const element = document.querySelector('h1')
// 		element.textContext = text
// 	}

// 	return {
// 		callChangeText: function() {
// 			changeText()
// 			console.log(text)
// 		}
// 	}
// })();   

// UICtrl.callChangeText()






// REVEALING MODULE PATTERN
// const ItemCtrl = (function() {
// 	let data = [] // can be thought of as state
// 	// sometimes you'll see _var to denote private

// 	function add(item) {
// 		data.push(item)
// 		console.log('Item added...')
// 	}

// 	function get(id) {
// 		return data.find(item => {
// 			return item.id === id
// 		})
// 	}

// 	// directly revealing functions
// 	return {
// 		add,
// 		get
// 	}
// })()

// ItemCtrl.add({id: 1, name: 'John'})
// ItemCtrl.get(1)


// SINGLETON 
// Immediate anonmyous function. Can only return one instance of an object at a time
// E.g. One logged in user object at a time. Prevent two users from being created at once. 

// const Singleton = (function() {
// 	let instance
// 	function createInstance() {
// 		const object = new Object({name: 'Ronny'})
// 		return object
// 	}

// 	return {
// 		getInstance: function() {
// 			if(!instance) {
// 				instance = createInstance()
// 			}

// 			return instance
// 		}
// 	}
// })()

// const instanceA = Singleton.getInstance()
// const instanceB = Singleton.getInstance()

// console.log(instanceA === instanceB)


// FACTORY PATTERN
// Used to create multiple objects that share a lot but are different
// function MemberFactory() {
// 	this.createMember  = (name, type) => {
// 		let memeber

// 		if(type === 'simple') {
// 			member = new SimpleMembership(name)
// 		} else if (type === 'standard') {
// 			member = new StandardMembership(name)
// 		} else if (type === 'super') {
// 			member = new SuperMembership(name)
// 		}

// 		member.type = type

// 		member.define = function() {
// 			console.log(`${this.name} (${this.type} : ${this.cost})`)
// 		}

// 		return member
// 	}
// }

// const SimpleMembership = function(name) {
// 	this.name = name
// 	this.cost = '$5'
// }

// const StandardMembership = function(name)  {
// 	this.name = name
// 	this.cost = '$15'
// }
// const SuperMembership = function(name)  {
// 	this.name = name
// 	this.cost = '$25'
// }

// const members = []

// const factory = new MemberFactory()

// members.push(factory.createMember('Ronny', 'simple'))

// members.forEach(member => {
// 	member.define()
// })

// console.log(members)

// OBSERVER PATTERN
// function EventObserver() {
// 	this.observers = []

// }

// EventObserver.prototype = {
// 	subscribe: function(fn) {
// 		this.observers.push(fn)
// 		console.log(`You are now subscribed to ${fn.name}`)
// 	},

// 	unsubscribe: function(fn) {
// 		// Filter out from the list whatever matches the cb fxn. If no match, cb gets to stay on list.
// 		// Filter returns new list and reassigns the list of observers
// 		this.observers = this.observers.filter(item => {
// 			if(item !== fn) {
// 				return item
// 			} 
// 		})
// 		console.log(`You are now unsubscribe from ${fn.name}`)
// 	},

// 	fire: function() {
// 		this.observers.forEach(observer => {
// 			observer.call()
// 		})
// 	}
// }

// const click = new EventObserver()

// // Event Listeners
// document.querySelector('.sub-ms').addEventListener('click', function() {
// 	click.subscribe(getCurMilliseconds)
// })

// document.querySelector('.unsub-ms').addEventListener('click', function() {
// 	click.unsubscribe(getCurMilliseconds)
// })

// document.querySelector('.sub-s').addEventListener('click', function() {
// 	click.subscribe(getCurSeconds)
// })

// document.querySelector('.unsub-s').addEventListener('click', function() {
// 	click.unsubscribe(getCurSeconds)
// })

// document.querySelector('.fire').addEventListener('click', function() {
// 	click.fire()
// })

// // Click Handler
// const getCurMilliseconds = function() {
// 	console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`)
// }

// const getCurSeconds = function() {
// 	console.log(`Current Seconds: ${new Date().getSeconds()}`)
// }


// OBSERVER PATTERN ES6

// class EventObserver {
// 	constructor() {
// 		this.observers = []
// 	}

// 	subscribe(fn) {
// 		this.observers.push(fn)
// 		console.log(`You are now subscribed to ${fn.name}`)
// 	}

// 	unsubscribe(fn) {
// 		this.observers = this.observers.filter(item => {
// 			if(item !== fn) {
// 				return item
// 			} 
// 		})
// 		console.log(`You are now unsubscribe from ${fn.name}`)
// 	}

// 	fire() {
// 		this.observers.forEach(observer => {
// 			observer.call()
// 		})
// 	}
// }


// const click = new EventObserver()

// // Event Listeners
// document.querySelector('.sub-ms').addEventListener('click', function() {
// 	click.subscribe(getCurMilliseconds)
// })

// document.querySelector('.unsub-ms').addEventListener('click', function() {
// 	click.unsubscribe(getCurMilliseconds)
// })

// document.querySelector('.sub-s').addEventListener('click', function() {
// 	click.subscribe(getCurSeconds)
// })

// document.querySelector('.unsub-s').addEventListener('click', function() {
// 	click.unsubscribe(getCurSeconds)
// })

// document.querySelector('.fire').addEventListener('click', function() {
// 	click.fire()
// })

// // Click Handler
// const getCurMilliseconds = function() {
// 	console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`)
// }

// const getCurSeconds = function() {
// 	console.log(`Current Seconds: ${new Date().getSeconds()}`)
// }




// MEDIATOR PATTERN
// const User = function(name) {
// 	this.name = name
// 	this.chatroom = null

// }

// User.prototype = {
// 	send: function(message, to) {
// 		// this pertains to user
// 		this.chatroom.send(message, this, to)
// 	},
// 	receive: function(message, from ) {
// 		console.log(`${from.name} to ${this.name}: ${message}`)
// 	}
// }

// const Chatroom = function() {
// 	let users = {}

// 	return {
// 		register: function(user) {
// 			users[user.name] = user
// 			// this refers to current chatroom; Null by default
// 			user.chatroom = this
// 		},

// 		send: function(message, from, to) {
// 			if(to) {
// 				// single user message
// 				to.receive(message, from)
// 			} else {
// 				// Mass message
// 				for(key in users) {
// 					if(users[key] !== from) {
// 						users[key].receive(message, from)
// 					}
// 				}

// 			}
// 		}
// 	}
// }

// const brad = new User('Brad')
// const jeff = new User('Jeff')
// const ronny = new User('Ronny')

// const chatroom = new Chatroom()

// chatroom.register(brad)
// chatroom.register(jeff)
// chatroom.register(ronny)

// ronny.send('Hello Jeff', jeff)

// jeff.send('Hello Everyone!')





























































