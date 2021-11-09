function Footer() {
  
    let date = new Date();
    let year = date.getFullYear();
    let footer = `Copyright © ${year}`;
    

    return (
            <footer className="bg-s-t1a2 text-center _p-16px _space-y-16px group">


            <div>

                <span> Check out the code of this web app on </span>

                <a  href='https://github.com/Rasaf-Ibrahim/To-Do-List-Web-App' className="font-semibold text-b-t1l1a1 group-hover:animate-pulse cursor-pointer"
                title="Click">GitHub</a>


            </div>

            
                
                <p>{footer}</p>


                
                

                
            </footer>
    )
}

export default Footer

