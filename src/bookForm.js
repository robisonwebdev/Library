function bookForm() {
    const bookFormDiv = document.createElement('div');

    bookFormDiv.setAttribute('id', 'bookFormDiv');
    bookFormDiv.setAttribute('style', 'display: none');

    bookFormDiv.innerHTML = `
        <form action="#" id="bookForm">
            <h3 id='bookFormHeader'>New Book</h3>

            <div class="bookFormInputs">
                <label for="authorInput">Author</label>
                <input type="text" name="authorInput" id="authorInput" placeholder="Enter Author's Name"> 
            </div>                   
                
            <div class="bookFormInputs">
                <label for="titleInput">Title</label>
                <input type="text" name="titleInput" id="titleInput" placeholder="Enter Book Title">
            </div>                    
                    
            <div class="bookFormInputs">
                <label for="pagesInput">Pages</label>
                <input type="number" name="pagesInput" id="pagesInput" placeholder="Number of Pages">
            </div>                    
                
            <div id='formStatus'>
                <label for="statusInput">Status:</label>    
                <select name="statusInput" id="statusInput">
                    <option value="" selected disabled hidden>None</option>
                    <option value="Read">Read</option>
                    <option value="Reading">Currently Reading</option>
                    <option value="Not Read">Not Read</option>
                </select>
            </div>
                    
            <div id='bookFormControls'>
                <button class="bookFormButtons" id="submit" type="button">Submit</button>
                <button class="bookFormButtons" id="cancel" type="button">Cancel</button>
            </div>                    
        </form>
    `;

    return bookFormDiv;
}

export default bookForm;