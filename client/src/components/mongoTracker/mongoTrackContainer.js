import '../../styles/components/mongotracker/mongotrackcontainer.scss'
import { useState } from 'react'
import { useEffect } from 'react'

export default function MongoTrackerContainer(){

    const [stackdata, setStackData] = useState({items: []})
    async function fetchStack(){
        const data = await fetch('https://api.stackexchange.com/2.3/questions?site=stackoverflow&tagged=reactjs&pagesize=5', {
          method: 'GET',
      }).then(res=> res.json()).then(data => {return(data)})
      setStackData(data)
   }

    useEffect(()=>{
       fetchStack()
      }, [])

      const stackDisp = () => {
        if(stackdata){
            return(
                <>
                        {stackdata.items.map((question)=>{
                            return(
                                <>
                                <div className="questions-container">
                                    <h5><a href = {question.link}>{question.title}</a></h5>
                                    <ul className='question-info'>
                                        <li><span>Answers: </span>{question.answer_count}</li>
                                        <ul className='tags'>
                                            {question.tags.map((tag)=>{
                                                return(
                                                    <>
                                                        <li>{tag}</li>
                                                    </>
                                                )
                                            })}
                                        </ul>
                                        <li><span>Owner: </span>{question.owner.display_name}</li>
                                    </ul>
                                    </div>
                                </>
                            )
                        })}
                </>
            )
        }
        else{
            return(
                <>
                    <h1>Error</h1>
                </>
            )
        }
      }
    return(
        <>
            <div className="mongotrack-container">
                {stackDisp()}
            </div>
        </>
    )
}