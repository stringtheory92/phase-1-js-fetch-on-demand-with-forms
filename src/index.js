

const init = () => {
    const fetchData = url => {
        return fetch(url)
        .then(res => res.json())
        //.then(data => data)
    }
    // Restrict search to available IDs in database.
        // make array of ID values in the db. 
        // fetch db and push IDs to a new array
    
  // Add event listeners to capture form data and prevent default behavior
  const form = document.querySelector('form')
  const inputField = document.querySelector('#searchByID')
  const titleHeader = document.querySelector('#title-header')
  const summaryHeader = document.querySelector('#summary-header')
  
  form.addEventListener('submit', e => {
      e.preventDefault();
    //   console.log(Number(inputField.value))
        
        try {
            //console.log(typeof inputField.value)
            //if (Number(inputField.value) === 'NaN' ) alert('Please enter a number');
    
            const fetchUrl = `http://localhost:3000/movies/${inputField.value}`
            //console.log(fetchUrl)
    
            const title = document.createElement('h5');
            const summary = document.createElement('p');
            
            fetchData(fetchUrl)
            .then(movie => {

                // Append movie title
                console.log(movie.title);
                title.textContent = movie.title;
                titleHeader.append(title)
                
                // Append summary
                console.log(movie.summary)
                summary.textContent = movie.summary;
                summaryHeader.append(summary)
        })
        } catch (error) {
            console.error('got an error: ', error)
        }

        //title.textContent = 
    })
  // Fetch data based on what the user types into that form 
    //fetchData(fetchUrl).then()
  // Display that data on the page
}

document.addEventListener('DOMContentLoaded', init);