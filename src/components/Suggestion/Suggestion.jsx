import React, { useEffect, useState } from 'react'
import { fetchDocuments } from '../../utils/fetchDocuments'
import { suggestionFilter } from './suggestionFilter'
import './Suggestion.scss'

function Suggestion({ searchTerm, isFocus }) {
    const [list, setList] = useState([])
    const [filteredList, setFilteredList] = useState([])

    useEffect(() => {
        const loadList = async () => {
        setList(await fetchDocuments())    
        }
        loadList()
    },[])

    useEffect(() => {
      const filterSearch = () => {
      setFilteredList(searchTerm && isFocus ? suggestionFilter(list,searchTerm) : [])
      }
      filterSearch()
    
    },[searchTerm, list, isFocus])


  return (
  <>
    { filteredList.length > 0 &&
      <div className='suggestion hide'>
        {filteredList.map(e => (
            <div 
              className="suggestion_item" 
              key={e._id}
              >
              {e.title}
              </div>
        ))}
    </div>
  }
  </>
  )
}

export default Suggestion