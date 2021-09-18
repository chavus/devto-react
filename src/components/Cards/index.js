import './styles.scss'
import { Link } from 'react-router-dom';


const CardComponent =  (props)=> {

    const { postKey,  postIndex } =  props
    const { comments, coverImage, positiveReactionsCount, readablePublishedDate, readingTimeMinutes, tagsList, title, writer} =  props.postData

    
    return(

        <div className="card mt-3 br-post post-card">
          { postIndex == 0 && <img src={coverImage} class="card-img-top" alt="..."/> }
            <div className="card-body" key={postKey}>
                <div className="d-flex c-header">
                        <img src="https://picsum.photos/200/300" alt="" className="br-100 pad"/>
                    <div className="d-flex c-name">
                        <h6 className="nickname mb-0">{writer.userName}</h6>
                        <p>{readablePublishedDate }</p>
                    </div>   
                </div>
                <div classNameName="card-content pl-5 pt-2">
                    <Link to={`/postDetail/${postKey}`} classNameName="post-list">
                        <h4 classNameName="card-title">{title}</h4>
                    </Link>
                    <div className="d-flex h-order">
                        <nav className="">{ 
                          tagsList && tagsList.map(( tag, index ) => {
                                return  (<Link className='tag-list' key={index}>#{tag}</Link>)
                            })
                         }
                        </nav>
                    </div>
                    <div className=" d-flex read">
                        <div>
                            { positiveReactionsCount != 0 && <Link color='none' className='counters' to={`/postDetail/${postKey}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" role="img"
                                        aria-labelledby="ah0ho4vrguhqcalal3r0v1fzvlxju7zc"
                                        className="crayons-icon mb-1">
                                        <title id="ah0ho4vrguhqcalal3r0v1fzvlxju7zc">
                                            Reactions</title>
                                        <path
                                            d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z">
                                        </path>
                                    </svg>
                                    <span className="not-b"> {positiveReactionsCount} reactions</span>
                            </Link> }
                            <Link className='counters' to={`/postDetail/${postKey}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" role="img"
                                aria-labelledby="aavwx5vmqdgx8wvzfg593jo469ge3dnz"
                                className="crayons-icon mb-1">
                                <title id="aavwx5vmqdgx8wvzfg593jo469ge3dnz">
                                  Comments</title>
                                <path
                                    d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z">
                                </path>
                            </svg>
                            {comments.length != 0 ? comments.length + ' Comments'
                                                                               : 'Add a Comment'}</Link>
                        </div>
                        <div className="d-flex">
                            <p className="card-text mb-0 mt-1"><small className="text-muted">{readingTimeMinutes} min read</small></p>
                            <button className="save">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )

}

export default CardComponent