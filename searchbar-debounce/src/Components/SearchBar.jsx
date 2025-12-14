import React, { useEffect, useState } from 'react'

const SearchBar = () => {
    const [data, setData] = useState("");
    const [output, setOutput] = useState([]);
    let Acces_Key = "H3s0Ay26iI-x_wZp9C2ly-Y91pIs_pENS1eN1YbKN2g";
    let pageNo =1
    const fetchData = async (searchData) => {
        console.log("Search data ",searchData);
        
        if(searchData !== ''){
            const fetching = await fetch(`https://api.unsplash.com/search/photos?query=${searchData}&per_Page=28&P=${pageNo}age&client_id=${Acces_Key}`)
            const jsonData = await fetching.json()
             
            console.log("SEARCH VALUE ::",searchData);
            console.log(jsonData.results);
    
            setOutput([...jsonData.results])
        }
        else if(searchData == ""){
            setOutput([])
        }
        
    }

    const handleInput = (event) => {
        console.log(event.target.value);
        
        setData(event.target.value)
        fetchData(event.target.value)
    }

    useEffect(() => {
        console.log(data);
        
        let timer = setTimeout(() => {
            fetchData(data)
        }, 300)
        return () => clearTimeout(timer)
    }, [data])
  
    return (
        <div className='container'>
            <h1 className='heading'>Search Bar Using Debounce</h1>
            <div className='searchBar'>
                <input type='text' placeholder='Search Here ...' onKeyUp={handleInput} />
            </div>
            <div className='datas'>
                {output.length > 0 ?
                    output.map((curvalue, index) => {
                        return (
                             
                                <div className='card' key={index}>
                                    <img src={curvalue.urls.thumb} />
                                </div>
                            
                        )
                    })
                    :  
                    'Search Images ... '
                    }
            </div>


        </div>
    )
}

export default SearchBar  