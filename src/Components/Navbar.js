import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
        <div className="py-12 px-16">
            <div className="flex justify-between p-8 border-2 border-[blue] text-white">                
            <div>
           <Link to={"/"}>
             <h1 className="px-4">Muhammad Iqbal</h1>
           </Link>
            </div>
            <div className="flex justify-between">
                <div>                    
                    <Link to={"profile"} className="hover-underline-animation p-4">About Me</Link>
                    <Link to={"skills"} className="p-4 hover-underline-animation">Skills</Link>
                    <Link to={"address"} className="hover-underline-animation p-4">Address</Link>
                </div>
                <div className="flex">
              <a href="https://www.facebook.com/profile.php?id=100004897712069" target="_blank" rel="noreferrer" className="scale-up-center text-2xl px-2"><FaFacebook /></a> 
              <a href="https://github.com/Iqbalnglames" target="_blank" rel="noreferrer" className="text-2xl px-2 scale-up-center"><FaGithub /></a> 
              <a href="https://www.linkedin.com/in/muhammad-iqbal-2544981aa/" target="_blank" rel="noreferrer" className="text-2xl px-2 scale-up-center "><FaLinkedin /></a> 
              </div>
            </div>
        </div>
            </div>
        </>
    )
}
export default Navbar