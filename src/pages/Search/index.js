import api from "../../lib/api"
import moment from 'moment'
import React, { useEffect, useState } from "react";
import {
    Link,
    useLocation
  } from "react-router-dom";
  import "./search.scss"
import Cards from "../../components/Cards"

function Search(props){
    const [sortValue, setSortValue] = useState("relevant")
    const [posts, setPosts] = useState([])
    const [sortedPosts, setSortedPosts] = useState([])
    
    props.changeIsCreatePost(false)
    const searchTerm = new URLSearchParams(useLocation().search).get("search")
    console.log(searchTerm)

    //empty, null or no results

    useEffect(async ()=>{
        if (!searchTerm){
            setPosts([])
            setSortedPosts([])
        }else{
            let allPosts = await api.getAllPosts()
            allPosts = filterPostsBy(allPosts, searchTerm)
            setPosts(allPosts)
            const sortedPostsRes = sortPostsBy(allPosts, sortValue)
            setSortedPosts(sortedPostsRes)
        }
    },[searchTerm])

    function filterPostsBy(postsArg, searchValue){
        return postsArg.filter( post => post.title.toLowerCase().includes(searchValue.toLowerCase()))
    }

    function sortPostsBy(postsArg, sortValueArg){
        if (sortValueArg == "relevant"){
            postsArg.sort((x,y)=>{
                return y.positiveReactionsCount - x.positiveReactionsCount
            })
        }else if(sortValueArg ==  "new"){
            postsArg.sort((x,y)=>{
                return moment(y.publishedTimestamp) - moment(x.publishedTimestamp)
            })
        }else if(sortValueArg ==  "old"){
            postsArg.sort((x,y)=>{
                return moment(x.publishedTimestamp) - moment(y.publishedTimestamp)
            })
        }
        return postsArg
    }

    function sortOnClick(event){
        const sortName = event.target.name
        const sorted = sortPostsBy(posts, sortName)
        console.log(sorted)
        setSortValue(sortName)
        setSortedPosts(sorted)
    }

    return(
        <main className="container-sm custom-container">

            <div className="row">
                {/* <!-------------------------------------------------------------------ASIDE LEFT-----------------------------------------------------------------------------------------> */}
                <aside className="d-md-flex flex-column align-items-stretch col-12 col-md-4 col-lg-3 ">
                {/* <!--aqui esta el input de busqueda--> */}
                
                    <h3 className="font-weight-bold ">Search results</h3>
                    <div className="d-flex icons section-list collapse  mb-n5 " id="section-list" aria-expanded="false">
                        <Link to="#" className="item-list  list-group-item-light">Posts</Link>
                        <Link to="#" className="item-list">Podcasts</Link>
                        <Link to="#" className="item-list">People</Link>
                        <Link to="#" className="item-list">Comments</Link>
                        <Link to="#" className="item-list">My posts only</Link>
                    </div>
                </aside>
                {/* <!------------------------------------------------------------------------MAIN CARDS---------------------------------------------------------------------------> */}
                <section className="col-12 col-md-7 col-lg-8 cards-section  ">

                    <nav className="cards-navigation">
                       
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className={ `nav-link ${ sortValue == "relevant" && "active" }` }   onClick={ sortOnClick }id="relevance" data-toggle="tab"
                                role="tab" aria-controls="nav-feed" aria-selected="true" name="relevant">Most Relevant</button>
                            <button className={ `nav-link ${ sortValue == "new" && "active" }` } id="newest" onClick={ sortOnClick } data-toggle="tab"
                                role="tab" aria-controls="nav-week" aria-selected="false" name="new">Newest</button>
                            <button className={ `nav-link ${ sortValue == "old" && "active" }` } id="oldest"  onClick={ sortOnClick }data-toggle="tab"
                                role="tab" aria-controls="nav-month" aria-selected="false" name="old">Oldest</button>

                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                         <div className="tab-pane fade show active" id="nav-feed" role="tabpanel" aria-labelledby="nav-feed-tab">
                        {
                            !sortedPosts.length  && <h1>No Results Found...</h1>
                        }
                         { sortedPosts && sortedPosts.map((post, index) => {
                                return ( <Cards
                                postKey = {post._id}
                                postData = {post}
                                postIndex = {index}
                                />)
                            })}
                         </div>

                    </div>

                </section>
            </div>
        </main>
    )
}

export default Search