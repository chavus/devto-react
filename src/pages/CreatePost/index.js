import React, {useState, useEffect} from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import{ Link, useHistory } from "react-router-dom"
import getUserData from "../../lib/auth";
import api from '../../lib/api'
import firebase from '../../lib/fire'
import './styles.scss'

function CreatePost(props){
    
    const [imagePath, setImagePath] = useState("")
    const [imagePost, setImagePost] = useState({})
    const [postData, setPostData] = useState({})  
    const TEXT_BUTTON_LABEL_IMAGE = "Add a cover image"
    const [inputButtonText, setInputButtonText] = useState(TEXT_BUTTON_LABEL_IMAGE)
    
    const history = useHistory()
    const date = new Date()
    const readableDate = date.toDateString().split(" ").slice(1,3).join(" ")
    const publishedAt = date.toISOString()
    const storage = getStorage(firebase)

    function getRandomMinutes()    {
        return Math.floor(Math.random() * (10 - 1)) + 1
    }

    useEffect( ()=>{
        const userData = getUserData()
        if (!userData){
            console.log("user not logged in")
            history.push('/login')
        }
        props.changeIsCreatePost(true)
    },[])
    
    useEffect( () =>{
        setPostData({...postData,  comments:[] , positiveReactionsCount:0, readingTimeMinutes: getRandomMinutes(),  
                                    readablePublishedDate: readableDate, publishedTimestamp: publishedAt, 
                                    writer:  getUserData()._id  })        
    }, [] )

    const selectFileHandler = (event) => {    
        if (event.target.files[0]) {            
           const TmpPath = URL.createObjectURL(event.target.files[0])  
           setImagePath(TmpPath) 
           setImagePost(event.target.files[0])           
           setInputButtonText ("Change") 
        }
        else {
           buttonResetHandler()
        }	
    }

   const buttonResetHandler = () => {
        setImagePath(null)
        setInputButtonText (TEXT_BUTTON_LABEL_IMAGE)
        setImagePost(null)
   }

   const uploadFile =  async () => {  
        const file = imagePost              
        const storageRef = ref(storage, 'postimages/' + file.name)
        const snapshot = await uploadBytes(storageRef, file)
        const downloadurl = await getDownloadURL(snapshot.ref)                              
        return downloadurl 
   }   

    const buttonCreatePostHandler = async  () => {
        let urlPostImage = await uploadFile()        
         postData.coverImage = urlPostImage            
        let result = await api.createPost(postData, getUserData().token  )
        history.push(`/postDetail/${result._id}`)
    }
   
   const inputHandlers = (event) =>  {
        const { name, value } = event.target
       if (event.target.name =="tagsList"){
           setPostData({...postData, [name]:value.trim().split(" ")})
       }    
       else  {
           setPostData({...postData, [name]:value})
       }
    }

    return(
        <main className="container-fluid py-2 mt-0">
            <form className=" create-post-inner">
                <div className="row header-nav-container pl-md-3">
                    <div className="col-12 col-md-9 justify-content-end justify-content-md-between header-wrapper d-flex">
                        <div className="button-tittle-wrapper d-none d-md-flex">
                            <span className="logo-wrapper ">
                                <a href="index.html" className="site-logo" aria-label="DEV Community Home">
                                    <svg width="50" height="40" viewBox="0 0 50 40"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="50" height="40" rx="3"> </rect>
                                        <path fill="white"
                                            d="M19.099 23.508c0 1.31-.423 2.388-1.27 3.234-.838.839-1.942 1.258-3.312 1.258h-4.403V12.277h4.492c1.31 0 2.385.423 3.224 1.27.846.838 1.269 1.912 1.269 3.223v6.738zm-2.808 0V16.77c0-.562-.187-.981-.562-1.258-.374-.285-.748-.427-1.122-.427h-1.685v10.107h1.684c.375 0 .75-.138 1.123-.415.375-.285.562-.708.562-1.27zM28.185 28h-5.896c-.562 0-1.03-.187-1.404-.561-.375-.375-.562-.843-.562-1.404V14.243c0-.562.187-1.03.562-1.404.374-.375.842-.562 1.404-.562h5.896v2.808H23.13v3.65h3.088v2.808h-3.088v3.65h5.054V28zm7.12 0c-.936 0-1.684-.655-2.246-1.965l-3.65-13.758h3.089l2.807 10.804 2.808-10.804H41.2l-3.65 13.758C36.99 27.345 36.241 28 35.305 28z">
                                        </path>
                                    </svg>
                                </a>                                    
                            </span>
                            <div className="page-title-wrapper ml-4">
                                <span><p>Create Post</p></span>
                            </div>
                        </div>
                        <div className="buttons-close d-flex">
                            <nav className="nav-buttons-wrapper">
                                <ul className="d-flex">
                                    <li>
                                        <button type="button" className="btn">Edit</button>
                                    </li>
                                    <li>
                                        <button type="button" className="btn">Preview</button>
                                    </li>
                                </ul>
                            </nav>
                            <div className="close-editor-wrapper">
                                <button type="button" className="btn">
                                    <Link to="/">
                                        <svg width="24" height="24" viewBox="0 0 24 24" className="crayons-icon" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="as1mn15llu5e032u2pgzlc6yhvss2myk">
                                            <title id="as1mn15llu5e032u2pgzlc6yhvss2myk">Close the editor</title>
                                            <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"></path>
                                        </svg>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row create-post-container">
                    <div className="col-lg-2">
                    </div>
                    <div className="col-12 col-md-8 col-lg-8 main-creation-container">
                        <div className="post-content-container border rounded bg-white">
                            <div className="post-content-header" >

                                <div className="image-preview-wrapper mt-2">				
                                    <div className="image-preview-container d-flex flex-column justify-content-start align-items-start flex-md-row ">	
                                        { imagePath &&  
                                            <div className="image-preview-div " id="preview">
                                                <img className="image-preview" src= {`${imagePath}`} id="imagepreview"  width="250" height="105" alt="Post cover"  />
                                            </div>	                                        
                                        }
                                        <div className="d-flex flex-row  mt-4 ">
                                            <button className="new-cover-img " type="button" id="button-cover-image"  >
                                                <input className = "input-file-image-name " id="post-cover-image" type="file" accept="image/*"  data-max-file-size-mb="25"  onChange={selectFileHandler} />
                                                <label for="post-cover-image" id="post-cover-image" className="label-post-cover-image "> {inputButtonText}
                                                </label>                                                    
                                            </button>
                                        { imagePath &&  
                                            <a  className=" btn-outline-danger btn-remove  ml-4 mt-0" type="button" id="btnRemove" onClick={buttonResetHandler}>Remove</a>
                                        }
                                        </div>
                                    </div>					
                                </div>

                                <div className="title-container p-1">
                                    <textarea className="w-100  post-title-text" type="text" name="title"   placeholder="New post title here..." id="title" onChange={inputHandlers}  ></textarea>
                                </div>
                                <div className="tags-container p-1">
                                    <label for="tagsList"></label>
                                    <input className="w-100 publish-post tag-input-text" type="text" name="tagsList"  id="tag-input" placeholder="Add up to 4 tags..." onChange={inputHandlers} />
                                </div>
  
                            </div>

                            <div className="other-image-container " > 
                                    <button className="other-image-button" type="button">
                                        <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="a17qec5pfhrwzk9w4kg0tp62v27qqu9t"><title id="a17qec5pfhrwzk9w4kg0tp62v27qqu9t">Upload image</title><path d="M20 5H4v14l9.292-9.294a1 1 0 011.414 0L20 15.01V5zM2 3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993zM8 11a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                                        <label for="otherimage" className="other-image-label" >Upload Image</label>
                                        <input id="otherimage" name ="otherimage" type="file" accept="image/*" className="other-image-input"  data-max-file-size-mb="25"/>
                                    </button>
                              </div>  

                            <div className="post-content-body ">
                                <div className="image-button-wrapper"></div>
                                <div className="text-body-container">
                                    <label for="content-body"></label>
                                    <textarea className="w-100 publish-post" type="text" name="content" placeholder="Write your post content here..."  id="content-body" onChange={inputHandlers}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="post-footer-container pt-3 pb-3">
                            <button type="button" id="publish-button" className="btn-publish-post p-2 rounded text-white" onClick={buttonCreatePostHandler} >Publish</button>
                            <button type="button" className="btn-save-draft rounded p-2">Save draft</button>
                            <svg width="24" className="crayons-icon" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="75abcb76478519ca4eb9">
                                <title id="75abcb76478519ca4eb9">Post options</title>
                                <path d="M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 2.311L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311zM12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"></path>
                            </svg>
                            <span id="preview-tags"> Revert new changes</span>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-2 d-none d-md-block post-aside-container">                  
                            <h5>Writing a Great Post Title</h5>
                            <p>Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.
                                Use keywords where appropriate to help ensure people can find your post by search.</p>
                    </div>
                </div>
            </form>
        </main>

    )
}

export default CreatePost