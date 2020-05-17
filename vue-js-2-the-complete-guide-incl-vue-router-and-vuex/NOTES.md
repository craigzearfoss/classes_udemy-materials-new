# Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)

- Udemy
- Instructor: Maximilian Schwarzmüller
- Completed

---

# Section 1: Getting Started

### Why Choose Vue?
- Extremely Lean and Small
  - 16kb (without the router)
  - minified and gzipped
- Great Runtime Performance
- Feature-Rich

### Setup
- Go to [https://vuejs.org](https://vuejs.org) => **GET STARTED** => **Installations**
- You can either download it or use the CDN to import it from another server.
```
<script src="https://unpkg.com/vue@2.0.5/dist/vue.js"></script>
```
- If you want to make sure that you always get the latest version you can remove the version number.
```
<script src="https://unpkg.com/vue/dist/vue.js"></script>
```
- To instantiate a Vue instance.
    - **el** 
```
new Vue({
    el: "#app"
});
```
- **Directives** are commands that Vue recognizes, like **v-on**.
- **this** proxies all of the data properties to the top Vue instance object automatically.

# Section 2: Using VueJS to Interact with the DOM
- VueJS does not use our HTML at runtime and have the commands in the HTML code.
    - It creates a template based on our HTML code, stores it internally and uses it to create the real HTML code that is rendered as the DOM.
- You can access all properties in the data object of the Vue instance.
- You also have access to functions defined in the methods object.
    - The methods must output a string.
```
<div id="app">
    <h1>{{ title }}</h1>
    <p>{{ sayHello() }}</p>
</div>
...
new Vue({
    el: "#app",
    data: {
        title: "Hello World!",
    },
    methods: {
        sayHello: function() {
            return 'Hello!';
        }
    }
});
```
- By using *this* you can access any properties in the VueJS instance.
    - Behind the scenes Vue is creating easy access to these properties.
```
new Vue({
    el: "#app",
    data: {
        title: "Hello World!",
    },
    methods: {
        sayHello: function() {
            return this.title;
        }
    }
});
```
### Binding to Attributes
- *We can't use curly braces in any HTML attribute.**
- **v-bind** directive means don't use the attribute like a normal HTML attribute, but instead bind it
```
<a v-bind:href="link">Google</a>
...
new Vue({
    el: "#app",
    data: {
        link: "https://google.com",
    }
});
```

## Directives
- A directive is an instruction that you place in your code.

### v-bind
- Bind something to the data that is stored in the VueJS instance.
    - The argument is what you want to bind and it is specified after the colon.
    - The property is then just passed in the quotation marks.
- Allows you to pass dynamic data to HTML attributes.
```
<div id="app">
    <p><a v-bind:href="link">Google</a></p>
</div>

<script>
new Vue({
    el: "#app",
    data: {
        link: 'https://google.com'
    }
});
</script>

-----
The above displays the word "Google" with the link href as "https://google.com".
```

### v-once
- Binding **v-once** to an element causes all of the content inside of the element to only be rendered once. 
  - It won't be updated if it changes later on.
```
<div id="app">
    <p v-title="title"></p>
    <p>{{ sayHello() }}</p>
</div>

<script>
new Vue({
    el: "#app",
    data: {
        title: 'Hello World!'
    }
    methods: {
        sayHello: function() {
            this.title = 'Hello!';
            return this.hello;
        }
    }
});
</script>

------------------------------
The above will display
    Hello World!
    Hello!

Without the v-once directive it would display
    Hello!
    Hello!
Because the this.title data property is updated in the sayHello() method.
```

### v-html
- By default Vue escapes HTML which means it only renders text, not HTML elements.
  - This prevents cross-site scripting attacks.
- The **v-html** directive allows you to render raw html.
```
<div id="app">
    <p v-html="finishedLink"></p>
</div>

<script>
new Vue({
    el: "#app",
    data: {
        finishedLink: '<a href="https://google.com">Google</a>'
    }
});
</script>
```
- Use this carefully because it does expose you to cross-site scriptig attacks.

### v-on
- The **v-on** directive allows us to listen to something to receive something from our templates.
- The argument is the name of the event that we want to consume.
- In the value you put the name of the function that you want to execute.
- You can also pass arguments to the method. For instance, in the example below:
  - We could pass a a step for the counter  like *v-on:click="increase(2)"*
  - Then in the function we would receive the parameter like *increase: function(step)*
```
<div id="app">
    <button v-on:click="increase">Click me</button>
    <p>{{ counter }}</p>
</div>

<script>
new Vue({
    el: "#app",
    data: {
        counter: 0
    },
    methods: {
        increase: function() {
            this.counter++;
        }
    }
});
</script>
```
- The event automatically get passed to the function when we use the **v-bind** directive.
- We can access the data in an event.
```
<div id="app">
    <p v-on:mousemove="updateCoordinates">Coordinates: {{ x }} / {{ y }}</p>
</div>

<script>
new Vue({
    el: "#app",
    data: {
        x: 0,
        y: 0
    },
    methods: {
        updateCoordinates: function(event) {
            this.x event.clientX;
            this.y event.clientY;
        }
    }
});
</script>
```

### $event variable
- We can pass an event in any **v-on** directive using the special **$event** variable.
- **$event** is a special variable that Vue uses that has the eevent information.
- To use it:
```
<button v-on:click="increas(2, $event)">Click me</button>
...
methods: {
    increase:function(step, event) {
        ...
    }
```

### Event Modifiers
- You can modify a directive action by appending a period and an event modifier onto it like:
  - *\<span v-on:mousover.stop="">DEAD SPOT\</span>*
- **.stop** is an event modifer that will stop the propagation of the event up the DOM tree.
- **.prevent** is another common event modifier which prevents the default action from occuring.
- You can chain even modifiers like *\<span v-on:mousover.stop.prevent="">DEAD SPOT\</span>*
```
<div id="app">
    <p v-on:mousemove="updateCoordinates">
        Coordinates: {{ x }} / {{ y }}
        - <span v-on:mousover.stop=">DEAD SPOT</span>
    </p>
</div>

<script>
new Vue({
    el: "#app",
    data: {
        x: 0,
        y: 0
    },
    methods: {
        updateCoordinates: function(event) {
            this.x event.clientX;
            this.y event.clientY;
        }
    }
});
</script>
```

### Keyboard Events (**keyup**)
- You can also add modifiers to keyboard events.
  - *\<input type="type" v-on:keyup.enter="alertMe">*
- Keyboard modifiers are:
  - .enter
  - .tab
  - .delete (captures both “Delete” and “Backspace” keys)
  - .esc
  - .space
  - .up
  - .down
  - .left
  - .right
- You can chain keyboard event modifiers.
  - *\<input type="type" v-on:keyup.enter.space="alertMe">*

### Note that you can put JavaScript code in the HTML anywhere that you can put Vue variables or methods.
- In double curly braces:
  - *\<p>{{ counter * 2 > 10 ? 'Greater than 10' : ' Smaller than 10' }}\</p>*
- In directives:
  - *\<button v-on:click="count++">Click me\</button>*

### Two-Way Binding
- The **v-model** directive tells Vue to set up two-way binding for the element and the property that you put in the quotation marks.
```
<div id="app">
    <input type="text" v-model="name">
    <p>{{ name }}</p>
</div>

<script>
new Vue({
    el: "#app",
    data: {
        name: 'Max'
    }
});
</script>
```

### Reacting to Changes with **computed** Properties
- There is a **computed** object in the Vue object, alongside the **data** and **methods** obects.
- Everything stored in **computed** can be used just like a property stored in the **data** object.
- You can put functions in it, just like in the **methods** object.
- The difference is that **method** functions will get executed on every change, whereas **computed** methods will only be executed after a change if they need to be.
  - This is because Vue is aware of what is inside of the **computed** functions.
- This is how we should use **computed** objects if we have dependencies because the results are cached.
- In other words, only use **methods** if you know that you don't want to cache the results.
- **Computed properties always need to run synchronously.**

### Alternative to **computed** Properties - Watching for Changes
- With the **watch** object you speciy properties that you want to watch.
- In the **watch** object you make a function with the same name as the property that you want to watch.
  - Inside of the property you perform whatever actions you want to happen when the property changes.
- You will want to use **computed** whenever possible over **watch** because it is more optimized because of caching.
- For asynchronous tasks use **watch** instead of **computed**.
- Example:
```
    watch: {
        counter: function(value) {
            var vm = this;
            setTimeout(function() {
                vm.counter = 0;
            }, 2000);
        }
    }
```

## Shorthands
- You can replace **v-on:** with **@**. So for example:
  - *\<button v-on:click="changeLink">Click to change the Link\</button>*
    - becomes
  - *\<button @click="changeLink">Click to change the Link\</button>*
- You can replace **v-bind:** with **:**. So for example:
  - *\<a v-bind:href="link">Link\</a>*
    - becomes
  - *\<a :href="link">Link\</a>*

### CSS Classes
- In order to conditionally attach a css class you need to bind to the class with **:class** like.
  - *\<div :class="{red: attachRed}">* 
    - Or you coud wrap the property **red** in single quotes.  (You would need to do this if it contained special characters.)
      - *\<div :class="{'red': attachRed}">*
  - The following will toggle the background color of the div red when it is clicked on.
```
<div id="app">
    <div class="demo" @click="attachRed" = !attachRed" :class="{red: attachRed}"></div>
</div>
<script>
new Vue({
    el: "#app",
    data: {
        attachRed: false
    }
});
// CSS ------------------------------------
.red {
    background: red;
}
</script>
```
- You can also simplify the above code by using a computed property.
  - The following will toggle the div between red and blue if it is clicked on.
```
<div id="app">
    <div class="demo" @click="attachRed" :class="{divClasses}"></div>
</div>
<script>
new Vue({
    el: "#app",
    data: {
        attachRed: false
    },
    computed: {
        divClasses: function {
            red: this.attachRed,
            blue: !this.attachRed
        }
    }
});
// CSS ------------------------------------
.red {
    background: red;
}
.blue {
    background: rblue;
}
</script>
```
#### Dynamically Styling CSS Classes Using Names
- In the example below you can dynamically change the css class of the div by typing the class name into the input text box.
  - It is storing the class name (not boolean true pr false)
```
<div id="app">
    <div class="demo" :class="color"></div>
    <input type="text" v-model="color">
</div>
<script>
new Vue({
    el: "#app",
    data: {
        color: 'green'
    }
})
// CSS ------------------------------------
.red {
    background: red;
}
.blue {
    background: blue;
}
.green {
    background: green;
}
</script>
```
- You can also attach mutliple classed using braces like:
  - *\<div class="demo" :class="[color, {red: attachRed}]">>

#### Interacting Directly with Element Styles
```
- For style properties you must either enclose them in single quotation marks or use camel case as show below.
<div class="demo" :style="{backgroundColor: color}"></div>
```
- You can also pass objects or computed values as was done above for classes.
- You can also create an array of styles as was done for classes.

# Section 3: Using Conditionals and Rendering Lists

### v-if Directive
- Binds to a condition or a property that resolves to true or false.
- The sample below shows the first paragraph because the **show** property is set to *true*.
- Clicking on the button toggles the **show** property between *true* and *false*, thus displaying it in the DOM or removing.
  - **v-if** does hide elements, it actually attaches and detaches them from the DOM.
  - If you inspect the DOM you will see *\<\!--->* where the *\<p>* tag was.
- **v-else** directive will automatically refer to the **v-if** directive in front of it.
  - The **v-else** must be in parallel with the **v-if** and be on the same type of element.
- **v-else-if** was introduced in **VueJS version 2.1**. Before that if you wanted to check additional conditions you had to add more **v-if**s.
- Note that **v-if** shows the entire element and all nested elements.
```
<div id="app">
    <p v-if="show">You can see me!</p>
    <p v-else>Do you also see me?</p>
    <button @click="show = !show">Switch</button>
</div>
<script>
new Vue({
    el: "#app",
    data: {
        show: true
    }
});
</script>
```
- You can use **v-if** with *\<template>* elements.
  - *\<template>* elements were introduced in HTML5
  - *\<template>* elements are not rendered in the DOM so this is a way of avoiding building up too many nested *\<div>*'s or other elements

### v-show Directive
- Use the **v-show** directive if you want to show or hide an element. (It is not detached like with **v-if**.)
- It adds the css style *display: none* to the element.
```
<p v-show="show">Do you see me?</p>
```

### v-for Directive
- Allows you to loop through an array and allows you to replicate the element on which **v-for** exists as often as needed.
  - Also allows you to pull out the content of the array and use it in the current iteration.
  - Note that in the example below you could have named the variable **indgredient** anything.
```
<div id="app">
    <ul>
        <li v-for="ingredient in ingredients">{{ ingredient }}</li>
    </ul>
</div>
<script>
new Vue({
    el: "#app",
    data: {
        ingredients: ['meat', 'fruit', 'cookies'];
    }
});
</script>
```
- To get the index of the array elements change the syntax to *for="(ingredient, i) in ingredients"* and **i** will contain the index.
  - Note that in the example below you could have named the variables **indgredient** and **i** anything.
    - The order of the parameters is important. The first parameter is always the element in the array and the second is the index.
```
<li v-for="(ingredient, i) in ingredients">{{ ingredient }} ({{ i }})</li>
```
- You can use the **v-for** directive with the *\<template>* tag to create non-nesting elements.

### Looping Thru Objects
- You can next **v-for** loops.
  - The **name**, **key** and **index** properties can be named anything. It is the order that is important.
  - You only need to include the **name** parameter. Use the other two parameters as needed.
```
<div id="app">
    <ul>
        <li v-for="person in persons">
            <div v-for="(value, key, index) in person">{{ key }}: {{ value }} ({{ index }})</div>
        </li>
    </ul>
</div>
<script>
new Vue({
    el: "#app",
    data: {
        persons: [
            {name: "Max", age: 27, color: "red"},
            {name: "Anna", age: "unknown", color: "blue"},
        ]
    }
});
</script>
```

#### Looping through a List of Numbers
```
<span v-for=n in 10>{{ n }}</span>
```

### v-for Behind the Scenes
- The array object doesn't actually get updated because it is a reference type. Only the value in memory gets changed.
  - Vue monitors the value in memory automatically so we don't have to worry about it.
- Vue updates the list by updating the position in the array where something changed.
  - It does not keep track of the specific element that it created. It will only patch it into the array at the position.
  - If you want Vue to not only be aware of the position, but the actual list item you need to assign an actual key to the item.
```
<div v-for="(ingredient, i) in ingredients" :key="ingredient">{{ ingredient }})</div>
```

# Section 5: Understanding the VueJS Instance
- You can have multiple Vue instances on a page as long as there is no connection between them.
- Note that we can store a Vue instance in a variable.
  - You can use the variable name to access one Vue instance from another Vue instance or anywhere else in the JavaScript.
  - Vue proxies the properties and methods so that they can easily be accessed easily from outside of the instance.
    - Note that the properties that we set up in a Vue instance are just properties that we pass into the constructor.
        - We can access these as native property.
        - Vue also sets up kind of "watchers" on these properties.
          - Because of this if you add a property to a Vue instance externally Vue will not be able to use them because Vue is not watching them.
```
var vm = new Vue({
    el: "#app"
});
```

### #el
- Refers to the template, that is the native HTML element.
- This is how Vue keeps track of the HTML.

### $data
- Holds the data properties.
- It is another way of accessing the data from outside. Example *vm.$data.title*

### ref Attribute
- **ref** is a key which is recognized by VueJS.
- You have access the to the **ref** attribute from both inside and outside of Vue.
- You can access all **ref** attributes using the **$refs** property. Example. *this.\$refs*
```
<button v-on:click="show" ref="myButton">
...
this.$refs.myButton.innerText = 'Test';
```
- If you use **$refs** to update something in the Vue instance it makes the change in the DOM, but it DOES NOT update the Vue template.
  - That is because **$refs** is tied directly to the DOM, not to the Vue instance.

### Vue Templates
- Vue creates a template and coverts it internally to JavaScript.
  - It is able to determine when things need to be updated, then do the update and write it to the native DOM.
  - It automatically converts whatever is assigined to the **el** property.
  - You can also user the **$mount** method to mount the element. Example, *vm.\$mount('#app')* where *vm* is a Vue instance.
- You can use the **template** property to pass a template as a string to Vue a view instance.
- Limitations:
  - It's harder to write multiple line.
  - Might not get syntax highlighting in code editors.
  - 
```
var vm = new Vue({
    template: "<1>Hello!</h1>"
});
vm.$mount('#app');

// You count also use vanilla JavaScript to append the template to the DOM.
vm.$mount();
document.getElementById("app").appendChild(vm.$el);

```

### Vue.component
- Components allow you to create a Vue component that you can reuse in other Vue instances.
```
Vue.component("hello", {
    template: "<h1>Hello!</h1>"
})
```

### Two versions of VueJS
1. Built in compiler that runs in the browser.
   - Supports templates 
   - Takes the template and re-compiles it in the browser to re-render the DOM.
   - It has to respect some DOM limitations like case-insensitive element names.
2. No compiler
   - Templates are compiled druring the bulk process so we ship compiled JavaScript code.
   - Smaller and faster

### VueJS Updating
- Accessing the real DOM is slow.
- **Virtual DOM* is a representation of the DOM in JavaScript which is very quick to access.
- Vue watches and only updates the real DOM with the changes between the template and the virtual DOM.
- This make VueJS very performant and very fast.

### VueJS Instance Lifecycle
- These are all methods attached directly to the root of the instance,
- **beforeCreate()**
- **created()**
- **beforeMound()**
- **beforeUpdate()**
- **beforeDestroy()** - Do cleanup work here
- **destroyed()**
  - Destroying does not remove the DOM, it only removes the JavaScript connections to Vue.
```
beforeCreate()                         created()                              beforeMount()
+------------+    +---------------+    +----------+    +-------------------+  
| new Vue()  |--->| Initialize    |--->| Instance |--->| Compile templates |--------------+
+------------+    | Data & Events |    | Created  |    | or el's template  |              |
                  +---------------+    +----------+    +-------------------+              |
                                                                                          |
   +--------------------------------------------------------------------------------------+
   |
   |                                                                  beforeUpdate()        |
   |   +-------------------+    +------------+         +---------+    +---------------+
   +-->| Replace el with   |--->| Mounted to |-------->| Data    |--->| Re-render DOM |
       | compiled template |    |    DOM     |         | Changed |    +---------------+
       +-------------------+    +------------+         +---------+          |
                                   |     ^                                  |
                                   |     |             updated()            |
                                   |     +----------------------------------+
                                   |                     
                                   |   beforeDestroy()    destroyed()
                                   |                      +-----------+
                                   +--------------------->| Destroyed |
                                                          +-----------+
```

# Section 6: Moving to a "Real" Development Workflow with Webpack and Vue CLI

### What should the development flow have?
- A bulk process that optimizes the code. For example, it compiles ES6 code down to ES5.
- A development server.
  - You want to access the files through http:// protocol, not file:// protocol.
  - Allows you to test under more realistic circumstances,.
  - If you are not loading all of the files on startup you will need a server.

### What is a "Development Workflow"?
- The compiler removed from the VueJS package redeuces the size by 30%.
```
       +--------------------+
       |      { Code }      |
       +--------------------+
                 |
                 V
       +--------------------+
       |                    | - Compile single file Templates (don't use "templates")
       | "Special Features" | - Case-insensitive component selectors
       |                    | - Preprocessors and more (Babel, SASS, etc.)
       +--------------------+
                 |
                 V
       +--------------------+           +---------+
       | Production Server  |---------->| Client  |
       +--------------------+           +---------+
``` 

### The Vue CLI
- Allows us to fetch VueJS project templates.
- To install vue-cli globally:
```
sudo npm install -g vue-cli
```
- Choose from different templates.
  - **simple** - index.html + Vue CDN import (does not support template compilation)
  - **webpack-simple** - Basic Webpack Workflow
  - **webpack** - Complex Webpack Worflow (including Testing)
  - **browserfy / browserfy-simple** - Browserfy Workflows
- To create a Vue project specify the template that you want to use (webpack-simple) and the project name (vue-cli).
  - Then run *npm install* in the directory that was created to install the dependencies.
    - Almost all of the dependencies are development only dependencies.
  - Run *npm run dev* to start the development server.
    - It will automatically recompile and reload the server any time a file is changed.
```
npm install -g @vue/cli-init
vue init webpack-simple vue-cli
cd vue-cli
npm install
npm run dev
```

### Webpack Template Folder Structure
- Note that in development the */dist* folder is created memory.
  - When you run a build the */dist* folder is created and this is what is deployed.
- the **vue-loader** allows you to use single file templates.
```
  + src - where you write you code
       + assets
         App.vue
         main.js
    .babelrc - set file for the Babel transpiler to convert ES6 code to ES5
    .gitignore
    index.html - the file that gets served
    package.json - manages all of the dependencies
    README.md
    webpackage.config.js - responsible for setting up everything and allowing us to transpile the code
     
```

### main.js
- The first file executed when the bundle gets loaded in the index.html file.
- *render: h => h(App)* tells Vue to override this place in the DOM with the code that we render here.
```
import Vue from 'vue'
import App from './App.vue'

new Vue({
    el: '#app',
    render: h => h(App)
});
```


### App.vue
- It consists of three sections:
  - **\<template>**
  - **\<script>**
  - **\<style>** - you can omit this
- **.vue** files act like a Vue instance.
- Wrap all of your template code inside of one element.

# Section 7: An Introduction to Components
- A component basically extends a Vue instance. I is reusable.
- Make sure your component name is unique so it doesn't interfere with any package or any other HTML elements.
- The second argument is the object which represents our component. (Generally the same object you pass into a Vue instance.)
  - Note that instead of "data" holding a properties object it contains a function.
    - This is because it would interfere with other data properties.
```
Vue.component('my-cmp', {
    data: function() {
        return {
            status: 'Critical'
        }
    },
    template: '<p>Server Status: {{ status }}</p>',
    methods: {
        changeStatus: function() {
            this.status = 'Normal';
        }
    }
});

// Note that if just specified "data" as an object of properties as shown below 
// you would get an error because it would interfere with other data properties.
Vue.component('my-cmp', {
    data: {
        status: 'Critical'
    },
    template: '<p>Server Status: {{ status }}</p>'
});

```

### Registering Components Locally and Globally
- **Vue.component()** registers the component globally.
```
var cmp = {
    data: function() {
        return {
            status: 'Critical'
        }
    },
    template: '<p>Server Status: {{ status }}</p>',
    methods: {
        changeStatus: function() {
            this.status = 'Normal';
        }
    }
};
- To register a component locally.
new Vue({
    el: '#app',
    components: {
        'my-cmp' cmp
    }
})
```

### Folder Structure
- For smaller projects you can create a */components* folder and put you component files in their.
- For larger projects you may want to organize them by feature.
```
Example 1:
----------
. main.js
.... components/
........ shared/
........ feature1/
........ feature2/

Example 2:
----------
. main.js
. users/
.... account/
.... analytics/
. shop
.... main/
.... checkout/
``` 

### Component Tag Naming
- Component are case-sensitive because they are compiled by JavaScript before they are placed in the DOM. 
- Vue.js automatically gives you access to the hypenated version of your selector.
  - So the property "appHeader" can be accessed as the tag "\<app-header>'.
- It is common to use dashes. 
- For ES6 you do not need to specify a property and it will automatically generate a key-value pair so the following to examples are the same
```
// Example 1
export default {
    components: {
        Servers
    }
}

// Example 2 (The same result as Example 1)
export default {
    components: {
        Servers: Servers
    }
}
```
- **WARNING**: Always try to make sure that your selectors are unique.

### Component Styling
- By default any style you sepcify in a component is scoped globally.
- If you want the styles to only apply to the component you need to specify the **scoped** style attribute.
- Behind the scenes this emulates the behavior of the shadow DOM.
- When a page is rendered the styles are pulled up to the \<head> of the document.
  - For scoped styles Vue.js adds *v-data...* tags to elements in the components and they are always added to the styles in the \<head> of the page.
```
<style scoped>
    div {
        border: 1px solid red;
    }
</style>
```

# Section 8: Communicating Between Components

### props are used to transfer data from the parent to the child.
- **props** basically means properties set from outside.
- If you use case sensitive name attribute make sure that the template you are using supports case sensitivity.
- You can use the props in the child like any other prop set up in the data object by accessing it with the *this.propname* syntax.

- *User.vue* (Parent):
```
<template>
  <div class="component">
    <button @click="changeName">Change my Name</button>
    <hr />
    <app-user-detail v-bind:name="name"></app-user-detail>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";

export default {
  data: function() {
    return {
      name: "Max"
    };
  },
  methods: {
    changeName() {
      this.name = "Anna";
    }
  },
  components: {
    appUserDetail: UserDetail,
  }
};
</script>
```
- *UserDetail.vue* (Child):
- In props of the child you set the properties that can be set from outside.
```
<template>
  <div class="component">
    <p>User Name: {{ name }}</p>
  </div>
</template>

<script>
export default {
  props: ["name"]
};
</script>
```

### Validating props
- You can validate types String, Boolean, Number and Function.
```
  props: {
    name: [String, Array]
  },

  props: {
      name: {
          type: String,
          required: true
      }
  }

  props: {
      name: {
          type: String,
          default: "Some string"
      }
  }
```

### Passing props from child to parent
- We pass props from the child to the parent via custom events.
- The **$emit** method can be used to pass custom events to the parent.
- *UserDetail.vue* (Child):
```
<template>
  <div class="component">
    <p>User Name: {{ switchName() }}</p>
    <app-user-detail :name="name" @nameWasReset="name = $event"></app-user-detail>
  </div>
</template>
<script>
export default {
  props: {
    name: [String, Array]
  },
  methods: {
    switchName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.name = "Max";
      this.$emit("nameWasReset", this.name);
    }
  }
};
</script>
```
- *User.vue* (Parent):
```
<template>
  <div class="component">
    <button @click="changeName">Change my Name</button>
    <app-user-detail :name="name" @nameWasReset="name = $event"></app-user-detail>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";

export default {
  data: function() {
    return {
      name: "Max"
    };
  },
  methods: {
    changeName() {
      this.name = "Anna";
    }
  },
  components: {
    appUserDetail: UserDetail,
  }
};
</script>
```

### Unidirectional Data Flow from Top to Bottom!
- A child cannot pass data directly to anothe child.
  - It must pass the data to the parent which then passes it down to the other child.

### Communitcation between Sibling Components
1. Child component emits custom event to parent and the other children that are listening to the parent recieve the update.
2. Use a callback. Set up a function in the parent, set a pointer to it in the child and execute the function. 
3. **Event Bus** - an object to listen to events an pass on data.
 - You must set up your event bus before the Vue instance that holds all of you components.
```
import Vue from "vue";
import App from "./App.vue";

export const eventBus = new Vue();

new Vue({
  el: "#app",
  render: h => h(App)
});
```
    - Set up a listener in the *create()* lifecycle method. 
```
<script>
import { eventBus, eventBus } from "../main";
...
  created() {
    eventBus.$on();
  }
...
</script>
```

# Section 98: Advanced Component Usage

### Slots
- Reserved for content being passed from outside.
- \*<slot> is a reserved component keyword.
- The styles and Vue data and operations will be from the parent component.
  - Note that in earlier versions of Vue child component styling was applied to the \*<slot>. Now the parent styles are applied, but the child styles can override them.
- **Named Slots**
  - Unnamed slots are treated as default slots.
```
// parent component
<template>
  <div class="container">
      <app-quote>
        <h2 slot="title">The Quote</h2>
        <p slot="content">A wonderful quote!</p>
      </app-quote>
  </div>
</template>

// child component
<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
    </div>
    <hr />
    <div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

```

### Dynamic Components
- The \*<component> selector let's us dynamically add components.
- Can be used to dynamically replace parts of a template with different components.
```
<component :is="selectedComponent"></component>
```
- The component is created and destroyed when it is loaded/unloaded.
- You can keep dynamic compoents alive in the *\<keep-alive>* element.
```
<keep-alive>
    <component :is="selectedComponent"></component>
</keep-alive>
```
- Dynamic Component lifecyle hooks:
  - **deactivated**
  - **activated**