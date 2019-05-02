const page = document.querySelector('.page');  //Store main/parent .div element into a variable "page" with the className "page"
                                               //Will use "page" to append a child/div element to the webpage.
const studentList = document.querySelectorAll('li'); //Store list items (54 total) in variable "studentList"
const maxStudents = 10; //Store number of in variable "maxStudents" for how many list items to show on each page (10 per page)
const pageNumber = 1; //Variable "pageNumber" storing value '1' to represent page '1' is diplayed when showPage() is first called.


//Creating a function showPage() to hide all the students except for the ten desired on a given page.

const showPage = (list, page) => {  //showPage() has two parameters "list" and "page". "list" represents the total list (items) that will be passed in as an arguemnt "StudentList".
                                    //The "page" parameter represents the page number (1) that will be passed in as the 2nd arguement when showPage() is called.
  let start = (page * maxStudents) - maxStudents;   //Created 2 variables "start" and "end" to store the start/end index of the list items to be displayed on the given page.
  let end = (page * maxStudents);
  for (let i = 0; i < list.length; i += 1) {  //Looping over the "list" (studentList) parameter
    list[i].style.display = 'none'; //Setting all list items display setting to "none" to hide all list items before running the condition.
    if (i >= start && i < end) { //if condition is true, display (block) any list items that's greater than or equal to the start index variable and less than the end index variable.
    list[i].style.display = 'block';
      } else {
        list[i].style.display = 'none';  //if not true, set the display setting for any remaining list items to "none".
      }
    }
};

const appendPageLinks = (list) => {
  const pagesNum = Math.ceil(list.length / maxStudents);  //Create pagesNum variable to store calculation to determine how many pages are needed
  const pagination = document.createElement('div'); // Create div element and storing in variable "pagination"
  const pagUl = document.createElement('ul');  // Create unordered list and storing in variable "pagUl"
  pagination.className = 'pagination';  //Set classname to "pagination" to the div element
  page.appendChild(pagination);  // append div (pagination) to the "page" div
  pagination.appendChild(pagUl);  // append unordered list (pagUl) to the "pagination" div.

  for (let i = 1; i < pagesNum + 1; i += 1){  //Loop to add the list items (links/page number(s))

    // Create variable "liContent" to store generated list items
    // note: using interpolation to dynamically load page numbers

     let liContent = `
          <li>
              <a href="#">${i}</a>
         </li>
         `;
       pagUl.innerHTML += liContent;
  };

const pageLinks = document.querySelectorAll('a');  // Create variable "pageLinks' to select the anchor/links loaded to page
  for (let i = 0; i < pageLinks.length; i += 1) {  // Using "For Loop" to determine how many pagination links will be stored in "pageLinks" variable
    pageLinks[0].className = "active";  // Add "active" class name to the first pagination link when page initially loads (position - index 0)
    pageLinks[i].addEventListener('click', function (event) {  // Add addEventListener for click events to each pagination link
      let active = document.querySelector('.active');  // Create variable "active" to store the element with the class name "active" attribute.
        if (active) {  // Create Condition to verify if "active" variable has the "active" class name (if "true"...run code block)
          active.classList.remove("active");  // Using "classList" method to remove class "active" from "active" DOM element which currently has "active" class applied to it.
        }
        showPage(list, i + 1); // Function call to showPage() and passing two parameters (list, i + 1), which represents studentList list items and
                               // the index position (adding 1 to index to properly pass correct value to hide/show student list items when
                               // showPage fuction runs (since index position starts from 0.) from the click event pass from the event listener
        event.target.className = 'active';  // Apply "active" class to pagination link that was detected from the click event
    });
  }
}

showPage(studentList, pageNumber); //Run showPage function and passing two arguments "studentList (54 list items total)" and pageNumber (1)
appendPageLinks(studentList);  // Run appendPageLinks function to generate pagination links, hide/show student list items
                               // (if showPage function runs from "click" event listener), and update DOM element
                               // to have the "active" classname which will highlight current pagination state
                               // Note: this function will load page 1 with the "active" class applied when page initially loads.
