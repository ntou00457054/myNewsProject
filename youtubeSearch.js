// Fig. 11.19: FavoriteTwitterSearchs.js
// Storing and retrieving key-value pairs using 
// HTML5 localStorage and sessionStorage
var tags; // array of tags for queries

// loads previously saved searches and displays them in the page
function loadSearches() 
{
   if ( !window.sessionStorage.getItem( "herePreviously" ) )  // 第一次進入   herePreviously 為key  https://xyz.cinc.biz/2013/01/html5-web-storage.html可參考 
   {
      sessionStorage.setItem( "herePreviously", "true" ); // 設key 
      document.getElementById( "welcomeMessage" ).innerHTML =  // **** 加入框架寫法
         "Welcome to the Favorite Twitter Searches App";
   } // end if

   var length = localStorage.length; // number of key-value pairs   多少筆資料
   tags = []; // create empty array    這種創立方式比var a = new array()效果好

   // load all keys
   for (var i = 0; i < length; ++i) 
   {
      tags[i] = localStorage.key(i);
   } // end for

   tags.sort(); // sort the keys   依照字首排列

   var markup = "<ul>"; // used to store search link markup
   var url = "https://twitter.com/result?search_query=";

   // build list of links
   for (var tag in tags) // ******   針對tags 所有值   *******
   {
      var query = url + localStorage.getItem(tags[tag]);
      markup += "<li><span><a href = '" + query + "'>" + tags[tag] + 
         "</a></span>" +
         "<input id = '" + tags[tag] + "' type = 'button' " + 
            "value = 'Edit' onclick = 'editTag(id)'>" +
         "<input id = '" + tags[tag] + "' type = 'button' " + 
            "value = 'Delete' onclick = 'deleteTag(id)'>";
   } // end for

   markup += "</ul>";
   document.getElementById("searches").innerHTML = markup;
} // end function loadSearches

// deletes all key-value pairs from localStorage
function clearAllSearches() 
{
   localStorage.clear();
   loadSearches(); // reload searches
} // end function clearAllSearches

// saves a newly tagged search into localStorage
function saveSearch() 
{
   var query = document.getElementById("query");
   var tag = document.getElementById("tag");
   localStorage.setItem(tag.value, query.value); 
   tag.value = ""; // clear tag input
   query.value = ""; // clear query input
   loadSearches(); // reload searches
} // end function saveSearch

// deletes a specific key-value pair from localStorage
function deleteTag( tag ) 
{
   localStorage.removeItem( tag );
   loadSearches(); // reload searches
} // end function deleteTag

// display existing tagged query for editing
function editTag( tag )    // 將要tag 的地方重新tag 
{
   document.getElementById("query").value = localStorage[ tag ];   //將欄位值改成tag原本value值
   document.getElementById("tag").value = tag;    //將欄位值改成tag原本key 值
   loadSearches(); // reload searches  重做一遍
} // end function editTag

// register event handlers then load searches
function start()
{
   var saveButton = document.getElementById( "saveButton" );
   saveButton.addEventListener( "click", saveSearch, false );
   var clearButton = document.getElementById( "clearButton" );
   clearButton.addEventListener( "click", clearAllSearches, false );
   loadSearches(); // load the previously saved searches
} // end function start

window.addEventListener( "load", start, false );

/*************************************************************************
* (C) Copyright 1992-2012 by Deitel & Associates, Inc. and               *
* Pearson Education, Inc. All Rights Reserved.                           *
*                                                                        *
* DISCLAIMER: The authors and publisher of this book have used their     *
* best efforts in preparing the book. These efforts include the          *
* development, research, and testing of the theories and programs        *
* to determine their effectiveness. The authors and publisher make       *
* no warranty of any kind, expressed or implied, with regard to these    *
* programs or to the documentation contained in these books. The authors *
* and publisher shall not be liable in any event for incidental or       *
* consequential damages in connection with, or arising out of, the       *
* furnishing, performance, or use of these programs.                     *
**************************************************************************/