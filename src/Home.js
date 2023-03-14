import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // const [name, setName] = useState('mario');
    // const [age, setAge] = useState(25);

    // const handleNameChange = () =>{
    //     setName('luigi');
    //     setAge(30);
    // }

    // const handleAnotherClick = (name, e) => {
    //     console.log('Hello '+name,e.target);
    // }

    // const handleDelete = (id) =>{
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    // custom hook - useFetch()
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs!"/> }
        </div>
     );
}
 
export default Home;