# List-Pagination-and-Filtering
Project 2 - List Pagination and Filtering

Description of Project:
In this project, I use JavaScript to illustrate a technique known as "pagination".  The HTML (index.html) from this project (by default) displayed a list of 54 students (unordered list).  The project request to use the "pagination" technique to  enhance the web page by providing a navigation (page numbers) system, displaying 10 student names per page, also providing a hightlighted page indication for which page the user is viewing.

Process to complete project:
1.  Create global variables to select elements (div and list items).
2.  Create showPage() function to calculate start/end points (10 students per page) and iterate through list items for when to display/hide list items on webpage.
3.  Create appendPageLinks() function to determine how many pages numbers needed for the navigation.
4.  Create and append elements (div and unordered list) to store list items (page numbers) that will be loaded dynamically.
5.  Interpolation technique will be used to dynamically load list items (for page numbers to navigation) and use .innerhtml when generating list item data to specific div on web page.
6.  Create variable to store how many page number/links created from appendPageLinks() function by using a loop.
7.  Use the className "active" (provided in project download file (CSS)) to highlight page number(s) to indicate page position. when web page initally loads.
8.  Create event listener for click events to remove/add "active" class (as page dynamically loads) to which page/link was most recently clicked.
