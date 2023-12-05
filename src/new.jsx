import { useState } from "react";

function New() {

    // src/components/SearchResults.js


  const [results, setResults] = useState([]);
  const API_KEY = 'AIzaSyC4jnDY43PfS2UEw3SCGXFThTTo0LZ071o'; // Replace with your API key
  const CX = '017576662512468239146'; // Replace with your Custom Search Engine ID

  const fetchData = async () => {
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=car`);
    const data = await response.json();
    console.log(data);
    setResults(data.items); // Assuming you're interested in search items
  }
fetchData()
  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <ul>
        {results.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}


export default New