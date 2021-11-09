import {FaCopyright} from 'react-icons/fa'


function Footer() {
  
    let date = new Date();
    let year = date.getFullYear();


    return (
            <footer className="bg-s-t1a2 text-center _p-16px _space-y-16px group">


            <div>

                <span> Check out the code of this web app on </span>

                <a  href='https://github.com/Rasaf-Ibrahim/To-Do-List-Web-App' className="font-semibold text-b-t1l1a1 group-hover:animate-pulse cursor-pointer"
                title="Click">GitHub</a>


            </div>

            
                
                <p className='flex _gap-x-8px items-center justify-center'>
                    <div>Copyright</div>
                    <div><FaCopyright/> </div>
                    <div>{year}</div>
                </p>


                
                

                
            </footer>
    )
}

export default Footer

