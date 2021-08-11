**Casumo Challenge**

**Introduction**
  This is a basic implementation of a typical Payment methods management screen.
  
  **Technologies used**
For the frontend I used React, Redux, Styled components
 
For data persistance I use a simple NodeJS server with a JSON file on which I perform CRU operations. 

**Available scripts**

`yarn install` on the Frontend

`npm install` inside /server directory for the Backend

To start BE: `npm start` will start the server at port `3033`

To start the FE: `yarn start` will start by default at port `3000 `

To run FE tests: `yarn test`

To create a build: `yarn build`

**Tests**

Implemented unit tests for each UI and parent components using JEST framework

**Folder Structure&mentions**

Normally, I would define routes for Home and Payment methods screen as well but for this demo I kept the Payments page as the default to access it easily. 
Inside `Pages` folder I have defined the parent component for this screen and inisde it there is another `Components` folder which hold different components like Payment Method Details form, Credit card. 
I also opted for having a single component for Add/Delete and I toggle between these two modes using a prop called `inEditMode`. I avoided code repetition that way since the screens were similar. 

There are some improvements that I am aware and would be nice to refactor a bit. For example, I would like to change the way validation and formatting patterns are defined since it would allow us to be more flexible when we add more card formats. Not to say that the Card formats are usually switched on/off depending on the legislation, country, etc. so if we keep that as a configuration it's much easier to manage. 

Also, I tried to follow the design but I have to say, it did not turn out so well. The information provided in the PDF was minimal and trying to depict the rules from the screenshots of the screens was not accurate at all. 