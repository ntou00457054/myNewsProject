
/*
function start()
{
	
	localStorage.clear();
	//add and remove button
	document.getElementById( "addButton" ).addEventListener(
      "click", addNode, false );
	
   // initialize currentNode 
} // end function start

window.addEventListener( "load", start, false );

var idcount = 0; // used to assign a unique id to new elements
//count 用localstorage存 記id
//the <ul>也適用localstorage

/*
function addNode()   //將新增node以new方式記錄
{	
	//作為a的名字的名字
	var name = document.getElementById( "AddName" ).value;
	var url = document.getElementById( "AddUrl" ).value;
	var ul =  document.getElementById( "ul" );
	//(x,y)值 ，並建立新物件，拿值
	
   var newNode = document.createElement( "li" );   // ******* the important method 新增一個<li>node****
   var newNodeLink = document.createElement( "a" );
   ++idcount;
   var t = document.createTextNode(idcount+" : "+name);
   newNode.setAttribute("id","li-" + idcount);
   console.log(newNode.id)
   
   newNodeLink.setAttribute("href",url);
   newNodeLink.setAttribute("target","blank");
   newNodeLink.setAttribute("id","a"+idcount);
 
	//存入localStorage	
   //localStorage.setItem("list-"+idcount,newNode);  //存到 localStorage，pho-為前綴字
   ul.appendChild(newNode);//將creat<li>新增
   newNode.appendChild(newNodeLink);
   newNodeLink.appendChild(t);
   //localStorage.setItem("li-"+name,newNode);  //存到 localStorage，li-為前綴字
} // end function createNewNode
*/

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

   var markup = "<ul id='myUL'>"; // used to store search link markup
   var url = document.getElementById("query").value;

   // build list of links
   for (var tag in tags) // ******   針對tags 所有值   *******
   {
      var query = url + localStorage.getItem(tags[tag]);
      markup += "<li><span><a href = '" + query + "'>" + tags[tag] + 
         "</a></span>" +
         "<input id = '" + tags[tag] + "' type = 'button' " + 
            "value = 'Edit' onclick = 'editTag(id)'>" +
         "<input id = '" + tags[tag] + "' type = 'button' " + 
            "value = 'Delete' onclick = 'deleteTag(id)'>\n";
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

//search filter
function myFunction() {
		var input, filter, ul, li, a, i;
		input = document.getElementById("myInput");
		filter = input.value.toUpperCase();
		ul = document.getElementById("myUL");
		li = ul.getElementsByTagName("li");
		for (i = 0; i < li.length; i++) {
			a = li[i].getElementsByTagName("a")[0];
			if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
				li[i].style.display = "";
			} else {
				li[i].style.display = "none";

			}
		}
}






	