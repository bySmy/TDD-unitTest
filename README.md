# TDD-unitTest

Testing Basic Functions: 
1.Set up a new directory. Example: TDD-unitTest, or whatever else you want. 
2. Initialize a new npm project and to do that, open up a terminal and make sure you're inside TDD-unitTest  folder that we just created, and run npm init -y and hit enter.
 3. Install the Mocha and Chai libraries we'll be using for testing. To do that, type 
         npm install - -save-dev mocha chai, hit enter. 
4. Create a directory called, src 
5.And inside this directory, we're going to create two files. The first one is going to be called,
       count-letter.js 
      count-letter.test.js. 
     These are going to hold a production code and test code. 
6.Since we'll be wanting to write all our test and production code using modern es6 syntax, is to install the appropriate Babel packages. And to do that, we're just going to run, 
           npm install --save-dev @babel/core @babel/preset-env @babel/register 
7.  And once that completes we have to create a Babel resource file in the root of our project. 
So, create a new file and call it, .babelrc, and the only contents of this file are going to be an object with one key that says, presets, 
{
    "presets": ["@babel/preset-env"]
}
 And this just makes sure that our es6 code is transpiled correctly.
________________________________________________________________________
•	Let's open up  count-letter.test.js file and write a test. So the first thing that we're going to do is import the function from our count-count file,
      Import { countLetter } from ‘./letter-count’;
 Now this is obviously going to fail since we haven't even defined it yet in our production code, and that's perfectly okay.

•	Run in terminal :
 npx mocha "src/**/*.test.js" --recursive --require @babel/register



•	So as not to rewrite this long code: change scripts in package.json 
  "scripts": {
    "test": " npx mocha \"src/**/*.test.js\" --recursive --require @babel/register"
  },
            
   And after that you can just use;
                    npm run test

