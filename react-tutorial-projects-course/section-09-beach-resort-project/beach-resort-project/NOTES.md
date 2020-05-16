# React Beach Resort Project

## Setup
- Bootstrap the project with create-react-app.
- Install additional dependencies.
```
create-react-app beach-resort project 
npm install react-icons --save
npm install react-router-dom --save
```
- react-router-dom Doesn't Play Well with Netlify.
- Put following file named *_redirects* into the */public* folder.
  - This allows the redirectign and routing in Netlify to work like it would locally for any React application.
```
/*    /index.html   200
```

## [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)
- Installation:
```
npm install react-router-dom --save
```
- \<Route path="..." ... /> will match the first path so add the exact attribute so it uses exact matching.
```
<Route exact path="..." ... />
```
- To set up a default page if none of the routes match us the \<Switch> element.
```
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>

```

## [react-icons](https://react-icons.github.io/react-icons/)
- Rendered as svgs.
- Installation:
```
npm install react-icons --save
```
- Usage:
```
import { FaBeer } from "react-icons/fa";

class Quesion extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}
```

## [Context API](https://reactjs.org/docs/context.html)
- Create a Context object.
```
const MyContext = React.createContext(defaultValue);
```
### Context.Provider
- Allow consuming components to subscribe to context changes.
- One Provider can be connected to many consumers.
- Providers can be nested to override values deeper within the tree.
```
<MyContext.Provider value={/* some value */}>
```

```
class MyClass extends React.Component {
  static contextType = MyContext;
  render() {
    let value = this.context;
    /* render something based on the value */
  }
}
```

```
<MyContent.Consumer>
  {value => /* render something based on the context value */}
</MyContent.Consumer>
```

### [Styled Components](https://styled-components.com/docs)
- Allows you to attach styles to a component and they will be immediately rendered.
- The styles are written in JavaScript.
- Installation
```
npm install --save styled-components
```

## [contentful](https://www.contentful.com/)
- A content infrastructure.
- Headless CMS - bring your own content.
- Contentful documentation - [https://www.contentful.com/developers/docs/](https://www.contentful.com/developers/docs/)
- Contentful Client API Documentations - [https://contentful.github.io/contentful.js/contentful/7.5.0/](https://contentful.github.io/contentful.js/contentful/7.5.0/)
- Installation:
```
npm install contentful
```

## Deploy to Netlify
- In the *.gitignore* file add an entry for the file *.env.development*.
```
.env.development
```
- Create the file *.env.development* in the project root to store your environment variables.
```
REACT_APP_API_SPACE=xxxxxxxxxxx
REACT_APP_ACCESS_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-xxxxxxxxx
```
- Add the environment variables to *Contentful.js*.
```
import { createClient } from "contentful";

export default createClient({
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});
```
- You have to restart your server anytime that you change environment variables.

- Create Github repository craigzearfoss/react-beach-resort-project.
```
git init
git add .
git commit -m "first commit"
git remote add origin git@github.com:craigzearfoss/react-beach-resort-project.git
git push -u origin master
```

- Go to Netlify and click on "New site from Git" button.
- Select the project
- Click on **Show advanced** button and add the environment variables.