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

  const getYear = date => moment(date).year()
  const getMonth = date => moment(date).month()
  const getWeek = date => moment(date).isoWeek()

  const currentDate = moment(new Date)

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState('Feed')

	useEffect(async () => {

        const result = await api.getAllPosts()   
        setPosts(result)
       
    }, []) 

   

  return (
    <section className = "cards-section">
     
          <nav className = 'cards-navigation'> 
              <div>
                  <h1 className='subtitle'>Posts</h1>
              </div>
              <div>
                  <Button color='none' className='filters'>Feed</Button>
                  <Button color='none' className='filters'>Week</Button>
                  <Button color='none' className='filters'>Month</Button>
                  <Button color='none' className='filters'>Infinity</Button>
                  <Button color='none' className='filters'>Latest</Button>
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

          { posts.map((post, index) => {
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