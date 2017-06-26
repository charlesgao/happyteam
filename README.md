# happyteam
Fast development framework with java, vue, springboot

The project starter refers to Randy Yang's Git Project.  [SpringVue-Starter](https://gitlab.com/randyyaj/SpringVue-Starter). Thanks Randy very much.

## 

This app uses Vue.js, Spring Boot, Git, Npm and Webpack

* [vue 2](https://vuejs.org/)
* [spring boot](https://spring.io/guides/gs/spring-boot/)
* [webpack](https://webpack.js.org/)
* [git](https://git-scm.com/)

## Folders and Files
### module structure
```
app
├── api： Spring boot project, which provides rest api service.
├── web: UI module for website. Which make engineers developer UI without backend. [webpack structure](https://webpack.js.org/)
├── adminweb: UI module for admin web. To be implement.
├── common: common module. To be implement.
├── gen: code generator module. To be implement.
```
### web project structure.
```
app
├── web
│	├── build： web pack build script
│	 	├── build.js
│	 	├── dev-client.js
│	 	├── dev-server.js
│		├── utils.js
│		├── webpack.base.conf.js
│		├── webpack.dev.conf.js
│		├── webpack.prod.conf.js
│	├── config： Configuration for environments
│	 	├── dev.env.js
│	 	├── index.js
│	 	├── prod.env.js
│	 	├── test.env.js
│	├── node：  maven plugin will install node here.
│	├── node_modules：  npm dependencies. Will download once you run npm install.
│	├── src
│	 	├── assets： image videos audios etc.
│	 	├── components： vue components
│	 	├── router： vue router
│	 	├── App.vue： main vue instance.
│	 	├── main.js： application enterence.
│	├── static
│	 	├── css
│	 	├── fonts
│	 	├── less
│	 	├── scss
│	├── test webpack automation testing forlder
│	├── .babelrc: Babel specific used in webpack to turn es2015/es2016 code to ES5 code for older browsers to use
│	├── .editorconfig：webstorm IDE configuration
│	├── .gitignore: Specify files in here for git to ignore
│	├── package.json: Frontend dependency manager similar to pom.xml but for managing javascript apps
│	├── pom.xml web module build dependency management
├── pom.xml parent build dependency management
```

## NPM Registry Setup
```
config set registry https://registry.npmjs.org
```
Config to taobao repository if you are locating at China. Fuck Great wall firewall
```
config set registry http://registry.npm.taobao.org/
```
## Build Setup

To run the front-end without the backend service(tomcat):

``` bash
# install frontend dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification - this will produce a dist/ folder.
npm run build [dev|prod]

# run unit tests
npm run unit

# run e2e tests - selenium
npm run e2e

# run all tests
npm test
```

To run spring boot app with built code from the parent(root pom) run:
```
mvn install && mvn --projects backend spring-boot:run
```
Or run spring boot app with built code from the backend modue(backend pom) run:
```
cd backend && mvn spring-boot:run
```


To setup run with Intellij:

* Run > Edit Configurations... > hit the plus sign to create a new entry > select maven 
* Name the new entry as ```spring-boot:run```
* Set Working Directory to ```/Users/<yourUserName>/IdeaProjects/app```
* Set Command Line to ```-projects backend spring-boot:run```

To setup run in eclipse:

* Run > Run Configurations... > Click the [Maven Build] at left list > Click [New] button(+) 
* Name the new entry as ```RunBackend```
* Set Base Directory to ```${workspace_loc:/backend}```
* Set Command Line to ```spring-boot:run```
