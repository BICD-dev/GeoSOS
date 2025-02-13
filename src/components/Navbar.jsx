const Navbar = () => {
    return ( 
        <div className="flex justify-between px-[6rem] pt-2 ">
            <h1 className="font-bold text-2xl "> <a href="/">GeoSOS</a></h1>
            <ul className="flex mt-1 text-xl">
                <li className="mr-6 font-semibold"><a href="/auth">Login</a></li>
                <li className=" font-semibold"><a href="/auth/sign-up">Signup</a></li>
            </ul>
        </div>
     );
}
 
export default Navbar;