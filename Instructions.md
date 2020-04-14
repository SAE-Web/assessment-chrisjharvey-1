Please follow the instructions and ask questions if you are unsure. Points *will* be deducted for missing/incorrect executions!

## Part 1
This part should be created in a node.js project. You should only submit the javascript file that is able to run on the node command line.

1. In the World Leaders file this is a list of world leaders. Translate each leader into a JS object whose properties include:
  - firstName
  - lastName
  - country
  - title
  - dateAppointed (This should be in UTC format, so 23rd of April 2019 should be written as 2019-04-23)

2. Write a function that will take in a world leader and return a object that contains both the first and last name joined together *and* the length of the name.

3. Using (2) or otherwise, iterate through the list of leaders and return the full name and country of the leader with the longest name.



## Part 2

1. Create an HTML file. To save time, you may want to link to the file you created in Part 1.

2. Create a button in the HTML file. When pressed, it should display a random leader from the list of world leaders in the file. It should display the full name, title and country.

3. Using a third party module or otherwise, when the random leader is displayed, it should use the date appointed, and display the number of days in office.