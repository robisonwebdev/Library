(()=>{"use strict";const t=function(){const t=document.querySelector("#bookFormDiv"),e=document.querySelector("#addBookButton");"none"===t.style.display?(t.style.display="flex",e.classList.add("removeDisplay")):(t.style.display="none",e.classList.remove("removeDisplay"))},e=function(){const e=document.createElement("div"),n=document.createElement("button");return e.setAttribute("id","addBookDiv"),n.setAttribute("id","addBookButton"),n.setAttribute("class","bookFormButtons"),n.setAttribute("type","button"),n.innerText="Add Book",n.addEventListener("click",(()=>{t()})),e.appendChild(n),e.appendChild(function(){const t=document.createElement("div");return t.setAttribute("id","bookFormDiv"),t.setAttribute("style","display: none"),t.innerHTML='\n        <form action="#" id="bookForm">\n            <h3 id=\'bookFormHeader\'>New Book</h3>\n\n            <div class="bookFormInputs">\n                <label for="authorInput">Author</label>\n                <input type="text" name="authorInput" id="authorInput" placeholder="Enter Author\'s Name"> \n            </div>                   \n                \n            <div class="bookFormInputs">\n                <label for="titleInput">Title</label>\n                <input type="text" name="titleInput" id="titleInput" placeholder="Enter Book Title">\n            </div>                    \n                    \n            <div class="bookFormInputs">\n                <label for="pagesInput">Pages</label>\n                <input type="number" name="pagesInput" id="pagesInput" placeholder="Number of Pages">\n            </div>                    \n                \n            <div id=\'formStatus\'>\n                <label for="statusInput">Status:</label>    \n                <select name="statusInput" id="statusInput">\n                    <option value="" selected disabled hidden>None</option>\n                    <option value="Read">Read</option>\n                    <option value="Reading">Currently Reading</option>\n                    <option value="Not Read">Not Read</option>\n                </select>\n            </div>\n                    \n            <div id=\'bookFormControls\'>\n                <button class="bookFormButtons" id="submit" type="button">Submit</button>\n                <button class="bookFormButtons" id="cancel" type="button">Cancel</button>\n            </div>                    \n        </form>\n    ',t}()),e},n=[{author:"David Robison",title:"Wind Hunter",pages:"523",status:"Read",dataKey:"DavidRobison_523"},{author:"Patrick Rothfuss",title:"The Name of the Wind",pages:"662",status:"Reading",dataKey:"PatrickRothfuss_662"},{author:"Robert Jordan",title:"The Great Hunt",pages:"706",status:"Not Read",dataKey:"RobertJordan_706"}],o=function(t,e){for(let n=0;n<e.length;n++)if(e[n].dataKey==t)return n},a=function(){const t=document.querySelector("#bookListTable");t.removeChild(t.lastChild),t.appendChild(i())},d=function(t){t.addEventListener("click",(e=>{var d,i;d=t,i=e.target.dataset.key,"Read"==d.textContent?n[o(i,n)].status="Not Read":"Reading"==d.textContent?n[o(i,n)].status="Read":"Not Read"==d.textContent&&(n[o(i,n)].status="Reading"),a()}))},i=function(){const t=document.createElement("tbody");return n.forEach((e=>{const i=document.createElement("tr"),r=document.createElement("td"),u=document.createElement("td"),l=document.createElement("td"),s=document.createElement("td"),c=document.createElement("button"),p=document.createElement("td"),m=document.createElement("i");r.innerText=e.title,u.innerText=e.author,l.innerText=e.pages,l.classList.add("centerAlign"),s.classList.add("centerAlign"),c.setAttribute("type","button"),c.setAttribute("class","statusBtns"),c.setAttribute("data-key",e.dataKey),c.innerText=e.status,p.classList.add("centerAlign"),m.setAttribute("class","las la-trash"),m.setAttribute("data-key",e.dataKey),d(c),m.addEventListener("click",(t=>{var e,d,i;e=n,d=o(t.target.dataset.key,n),i=1,e.splice(d,i),a()})),s.appendChild(c),p.appendChild(m),i.appendChild(r),i.appendChild(u),i.appendChild(l),i.appendChild(s),i.appendChild(p),t.appendChild(i)})),t},r=function(){const t=document.createElement("div");return t.setAttribute("id","bookListContainer"),t.appendChild(function(){const t=document.createElement("table"),e=document.createElement("thead"),n=document.createElement("tr"),o=document.createElement("th"),a=document.createElement("th"),d=document.createElement("th"),r=document.createElement("th"),u=document.createElement("th");return t.setAttribute("id","bookListTable"),d.setAttribute("class","centerAlign"),r.setAttribute("class","centerAlign"),u.setAttribute("class","centerAlign"),o.innerText="Title",a.innerText="Author",d.innerText="Pages",r.innerText="Status",u.innerText="Delete",n.appendChild(o),n.appendChild(a),n.appendChild(d),n.appendChild(r),n.appendChild(u),e.appendChild(n),t.appendChild(e),t.appendChild(i()),t}()),t},u=function(){const t=document.querySelector("#authorInput"),e=document.querySelector("#titleInput"),n=document.querySelector("#pagesInput"),o=document.querySelector("#statusInput");t.value="",e.value="",n.value="",o.selectedIndex=0},l=document.querySelector("body");l.appendChild(function(){const t=document.createElement("div");return t.setAttribute("id","container"),t.appendChild(function(t){const e=document.createElement("div"),n=document.createElement("h1");return e.setAttribute("id","header"),n.setAttribute("id","headerTitle"),n.innerText=t,e.appendChild(n),e}("Library")),t.appendChild(r()),t.appendChild(e()),t}()),l.appendChild(function(t,e){const n=document.createElement("div"),o=document.createElement("small"),a=document.createElement("a");return n.setAttribute("id","footer"),a.setAttribute("href",t),a.setAttribute("target","_blank"),o.innerText="Developed by ",a.innerText=e,o.appendChild(a),n.appendChild(o),n}("https://github.com/robisonwebdev","David Robison")),document.querySelector("#submit").addEventListener("click",(()=>{(function(){const t=document.querySelector("#authorInput").value,e=document.querySelector("#titleInput").value,o=document.querySelector("#pagesInput").value,a=document.querySelector("#statusInput").value,d=`${t.replace(/ /g,"")}_${o}`,i=new class{constructor(t,e,n,o,a){this.author=t,this.title=e,this.pages=n,this.status=o,this.dataKey=a}}(t,e,o,a,d);n.push(i)})(),u(),a(),t()})),document.querySelector("#cancel").addEventListener("click",(()=>{u(),t()}))})();