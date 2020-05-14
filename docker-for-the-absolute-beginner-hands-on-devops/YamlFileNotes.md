# yaml files

- yaml files are used to represent data, for example. configuration data

#### xml format:
```
<Servers>
	<Server>
		<name>Server1</name>
		<owner>John</owner>
		<created>12232012</created>
		<status>active</status>
	</Server>
</Servers>
```
	
#### json format:
```
{
	Servers:	[
		name: Server1,
		owner: John,
		created: 12232012,
		status: active
	]
}
```
		
#### yaml format:
```
Servers:
	- 	name: Server1,
		owner: John,
		created: 12232012,
		status: active
```
	
#### Key value Pairs separated by a colon.
```
Fruit: Apple
Vegetable: Carrot
Liquid: Water
Meat: Chicken
```

#### Array/Lists - A dash "-" specifies that it's an element of an array.
```
Fruits:
	-	Orange
	-	Apple
	-	Banana
	
Vegatables:
	-	Carrot
	-	Caulifower
	-	Tomato
```
		
#### Dictionary/Map - A set of properties grouped together under an item.
- Must have an equal number of spaces before each property so that they are all aligned.
```
Banana:
	Calories: 105
	Fat: 0.4 g
	Carbs: 27 g
	
Grapes
	Calories: 62
	Fat: 0.3 g
	Carbs: 1 g
```

- Lists are ordered. That means that the properties have to be listed in the same order in order to match.\

- Dictionaries are unordered. That means that the properties can be defined in any order and the dictionaries can match.

- Any line beginning with a # is ignored and considered a comment.
