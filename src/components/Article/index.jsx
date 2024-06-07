import React from "react";
import { motion } from "framer-motion";
import "./index.css"
function Article(props)
{
    const {data,index}=props;
    const {link,heading,author,publishDate,imgUrl}=data;
    const a=heading.split(" ");
    

  const redirect=()=>
    {
        window.location.href=link;
    }


    return(
        <motion.div
        className=""
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
          x: index % 2 === 0 ? 50 : -50
        }}
        whileInView={{
          opacity: 3,
          x: 0, // Slide in to its original position
          transition: {
            duration: 3 // Animation duration
          }
        }}
        viewport={{ once: true }}
      >
    
       <div className="container-fluid article-bg  mt-5 ">
        <div onClick={redirect} className="text-left row remove-des">
        <div className="col-12 col-md-6  col-lg-4">
                <img className="article-img" alt={author} src={imgUrl} />
            </div> 
            <div className="col-12 col-md-6 mt-4 col-lg-6">
            <div>
            {a.map((el, i) => (
                <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 8,
                    delay: i / 10,
                }}
                key={i}
                className="heading"
                >
                {el}{" "}
                </motion.span>
            ))}
            </div>
            <p className="author pt-3"> Author : <span className="author-sub">{author}</span></p>
            <p className="author">published_date: <span className="author-sub">{publishDate} days ago</span></p>
            <div className="">
            {/* <a href={link} className="link">{link}</a> */}
            </div>
            </div>  
           
        </div>
</div> 
      </motion.div>
        
    )
}

export default Article;



 