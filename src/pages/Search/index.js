import React from "react";
import {
    Link,
  } from "react-router-dom";
  import "./search.scss"

function Search(props){
    props.changeIsCreatePost(false)
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
                            <a className="nav-link active" id="relevance" data-toggle="tab" href="#nav-feed"
                                role="tab" aria-controls="nav-feed" aria-selected="true">Most Relevant</a>
                            <a className="nav-link" id="newest" data-toggle="tab" href="#nav-week"
                                role="tab" aria-controls="nav-week" aria-selected="false">Newest</a>
                            <a className="nav-link" id="oldest" data-toggle="tab" href="#nav-month"
                                role="tab" aria-controls="nav-month" aria-selected="false">Oldest</a>

                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                         <div className="tab-pane fade show active" id="nav-feed" role="tabpanel" aria-labelledby="nav-feed-tab"></div>

                    </div>

                </section>
            </div>
        </main>
    )
}

export default Search