import React, { useEffect, useState } from "react";
import {
  Button
} from "reactstrap";
import api from '../../lib/api'
import Cards from '../Cards'
import './styles.scss'
import moment from 'moment'

// import ArticleComponent from "./articles/Articles";
// import ArticleStructure from "./articles/ArticleStructure";


const Content = () => {

  const putYear = date => moment(date).year()
  const putMonth = date => moment(date).month()
  const putWeek = date => moment(date).isoWeek()

  const [posts, setPosts] = useState([]);
  const [filterName, setFilterName] = useState('feed')
  const [filteredPosts, setFilteredPosts] = useState(posts)

	useEffect(async () => {

        const result = await api.getAllPosts()  
        console.log(result) 
        setPosts(result)
        setFilteredPosts(result)
       
    }, []) 

  const onFilterClick = (event) => {
    console.log('filterclick')
    let name = event.target.name
    setFilterName( name )
 
    let filteredPostRes = filterBy(name)
    setFilteredPosts( filteredPostRes )
  }  
  
  const filterBy = (filterNameArg) => {

      if(filterNameArg == 'feed' || filterNameArg == 'infinity' ){
          return posts
      } else if (filterNameArg == 'week'){
        return posts.filter( post => moment(post.publishedTimestamp) >= moment().subtract(7, 'days')) 
      } else if (filterNameArg == 'month'){
        return posts.filter( post => moment(post.publishedTimestamp) >= moment().subtract(1, 'month'))
      } else if (filterNameArg == 'latest'){
        let postCopy = [...posts]
        postCopy.sort((x,y) => {
          return moment(y.publishedTimestamp) - moment(x.publishedTimestamp)
        })
        return postCopy
        }
      }

  

  return (
    <section className = "cards-section">
     
          <nav className = 'cards-navigation'> 
              <div>
                  <h1 className='subtitle'>Posts</h1>
              </div>
              <div>
                  <Button color='none' className='filters' name='feed' onClick={onFilterClick}>Feed</Button>
                  <Button color='none' className='filters' name='week' onClick={onFilterClick}>Week</Button>
                  <Button color='none' className='filters' name='month' onClick={onFilterClick}>Month</Button>
                  <Button color='none' className='filters' name='infinity' onClick={onFilterClick}>Infinity</Button>
                  <Button color='none' className='filters' name='latest' onClick={onFilterClick}>Latest</Button>
              </div>
          </nav>
          { /*<select id="dropdown-select" className="dropdown">
              <option value="Feed" defaultValue>
                Feed
              </option>

              <option value="Week">Week</option>
              <option value="Month">Month</option>
              <option value="Year">Feed</option>
              <option value="Infinity">Infinity</option>
          </select> */}
    
      <div className="articles">

          { filteredPosts.map((post, index) => {
            return ( <Cards
              postKey = {post._id}
              postData = {post}
              postIndex = {index}
              />)
          })}

      </div>
    </section>
  );
};

export default Content;