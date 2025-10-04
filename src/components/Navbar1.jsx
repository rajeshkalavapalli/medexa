export function Navbar1() {
    return (
        <div>
            <div className="navbar1-head flex">
                <div>
                    {/* <img src="" alt="" /> */}
                    <h1 className="medexa-logo">MEDEXA</h1>
                </div>
                <div className="search-bar self-center ml-[450PX] round">
                    <form action="#" method="get" className="search-form flex">
                        <input type="text" placeholder="sear for medicine and health product" />
                        <button type="submit" className="search button"> &#128269;
                        </button>
                    </form>

                </div>
                <div className="login-main flex self-center ">
                    <div>
                        <div className="booking flex  gap-9">
                            <h1>Booking:+91-9866667073</h1>
                            <h1>Login/Register</h1>
                            <h1>cart</h1>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}