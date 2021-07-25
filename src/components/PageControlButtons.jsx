const PageControlButtons = ({allCharacters, setApiUrl}) => {
    return (
        <div className="page-control-container">
         {allCharacters.info && allCharacters.info.prev && (
                 <button onClick= {() => {
                    setApiUrl(allCharacters.info.prev)
                }}>Previous Page</button>
             )                          
             }

        {allCharacters.info && allCharacters.info.next && (
                 <button onClick= {() => {
                setApiUrl(allCharacters.info.next)
                }}>Next Page</button>
             )             
             }
         </div>
    )
}

export default PageControlButtons;

