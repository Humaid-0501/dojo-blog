const testComp = (props) => {
    return ( 
        <div className="test">
            {props.blogs.map((blog)=>(
                <div className="testBlog" key={blog.id}>
                    <h2>This is a test {blog.title}</h2>
                </div>
            ))}
        </div>
        
     );
    }
export default testComp;