import React, { useEffect, useState } from "react";
import api from '../../lib/api'
import Cards from '../Cards'
import './styles.scss'
import moment from 'moment'

// import ArticleComponent from "./articles/Articles";
// import ArticleStructure from "./articles/ArticleStructure";


const Content = () => {

  const [posts, setPosts] = useState([]);
  const [filterName, setFilterName] = useState('feed')
  const [filteredPosts, setFilteredPosts] = useState(posts)

	useEffect(async () => {

        const result = await api.getAllPosts()  
        console.log(result) 
        setPosts(result)
        setFilteredPosts([...result].sort((x,y) => {
          return moment(y.publishedTimestamp) - moment(x.publishedTimestamp)
        }))
       
    }, []) 

  const onFilterClick = (event) => {
    
    let name = event.target.name
    setFilterName( name )
    
    let filteredPostRes = filterBy(name)

    setFilteredPosts( filteredPostRes )
  }  
  
  const filterBy = (filterNameArg) => {

      if(filterNameArg == 'feed'){
        let postCopy = [...posts]
        postCopy.sort((x,y) => {
          return moment(y.publishedTimestamp) - moment(x.publishedTimestamp)
        })
          return postCopy

      } else if (filterNameArg == 'week'){
        return posts.filter( post => moment(post.publishedTimestamp) >= moment().subtract(7, 'days')) 

      } else if (filterNameArg == 'month'){
        return posts.filter( post => moment(post.publishedTimestamp) >= moment().subtract(1, 'month'))

      } else if (filterNameArg == 'infinity'){
        return posts

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
              <div className='d-none d-sm-block'>
                  <h1 className='subtitle'>Posts</h1>
              </div>
              <div>
                  <button color='none' className={ `filters ${ filterName == "feed" && "active" }` }  name='feed'  onClick={onFilterClick}>
                    Feed
                  </button>
                  <button color='none' className={ `filters ${ filterName == "week" && "active" }` } name='week' onClick={onFilterClick}>
                    Week
                  </button>
                  <button color='none' className={ `filters ${ filterName == "month" && "active" }` } name='month' onClick={onFilterClick}>
                    Month
                  </button>
                  <button color='none' className={ `filters ${ filterName == "infinity" && "active" }` } name='infinity' onClick={onFilterClick}>
                    Infinity
                  </button>
                  <button color='none' className={ `filters ${ filterName == "latest" && "active" }` }name='latest' onClick={onFilterClick}>
                    Latest
                  </button>
              </div>
          </nav>
         
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