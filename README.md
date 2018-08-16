# Brastlewark Town

This project is an easy way to browse all the population of Brastlewark. You can see all the detalis of each gnome in the town and filter them by the different properties.

## Table of Contents

- [Run The Project](#run-the-project)
- [Used Libraries](#sending-feedback)
- [Project Structure](#project-structure)
  - [Folder Structure](#project-structure)
  - [How the project is structured](how-the-project-is-structured)
  - [Data Flow](data-flow)
  
## Run The Project

This project was created with [ReactJS](https://reactjs.org/), a A JavaScript library for building user interfaces.

First of all, let's start installing the required frameworks to use React [npm](https://www.npmjs.com/) and [nodeJS](https://nodejs.org/). To do this you can follow [this quick tutorial](https://www.npmjs.com/get-npm/).

When we have node and npm installed, follow this steps in a command prompt:
```sh
# git clone https://github.com/daleu/brastlewark-town.git
# cd brastlewark-town
# npm i
# npm start
```

## Used Libraries

To create this project, the following libraries have been used:
- [@material-ui](https://material-ui.com/)
- [jquery](https://jquery.com/)
- [office-ui-fabric-react](https://github.com/OfficeDev/office-ui-fabric-react/)
- [react](https://reactjs.org/)
- [react-redux](https://github.com/reduxjs/react-redux)
- [typescript](https://www.typescriptlang.org/)

For creating the skeleton of the project I used [Create React App](https://github.com/facebookincubator/create-react-app).

## Project Structure

### Folder Structure

The folder structure of the project should look like this:

```
brastlewark-town/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    manifest.json
  src/
    actions/
      index.ts
    components/
      app/
        App.css
        App.tsx
      drawer/
        GnomeDrawer.tsx
        IGnomeDrawerProps.ts
        IGnomeDrawerState.ts
      gnomeCard/
        GnomeCard.tsx
        IGnomeCardProps.ts
        IGnomeCarsState.ts
      gnomeDialog/
        GnomeDialog.tsx
        IGnomeCardProps.ts
        IGnomeCardState.ts
      gnomeList/
        GnomeList.tsx
        IGnomeListProps.ts
        IGnomeListState.ts
    constants/
      constants.ts
    dataProviders/
      GnomesDataProvider.ts
      IDataProvider.ts
    models/
      IGnomeModel.ts
    reducers/
      brastlewark.ts
      index.ts
    store/
      index.ts
    index.css
    index.js
    logo.svg
    registerServiceWorker.ts
```

### How the project is structured

In the file index.html in the public folder, we can find a div with id 'root', where all the app is attached in.

All the html and javascript code is compiled and created in the src folder (the main part of the project), and then is attached in the root node of the public side of the application.

As we can see, the src folder have a lot of subfolders. Each one of this have a particular function in our project.

The folder components contain all the components of the app:
- app: Contains the main part of the app. Here we connect the store to our app and we render and call the different components.
- drawer: Contains a drawer with all the filters to find the gnomes in Brastlewark Town.
- gnomeCard: This component shows the minimal information of each gnome in the list (picture, name & age).
- gnomeDialog: Contains all the information of the gnome.
- gnomeList: a list with all the gnomeCards showed at the moment.

The folders actions, reducers and store contain all the information of the app. Eah time that we need to show more info on the screen, the App component will call the action, the action the reducer, and this one will update the state of the store depending on which action we have executed.

The folder dataProviders contains all the interfaces and implementations needed to get information from a database or dataProvider that is not in our application (Ex: url, api, external database, ...)

The folder models contains all the models used in our aplication. In this case we have only the model of the gnome.

And the folder constants, contains different constants that are used in all the project.

### Data Flow

This data flow is the data flow that is normally used in react-redux:

![alt text](/dataFlowDiagram.png)
