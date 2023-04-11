import './Rightbar.css';

const Rightbar = () => {
  
    return (
        <aside className="aside-friends-community">
                    <div className="friends-community">
                        <section className="friends">
                            <div className="info-friends">
                                <h2>Friends (30)</h2>
                            </div>

                            <div className="list-friends">
                                <ul className="list-column">
                                    <li>

                                        <p>Eddy</p>

                                    </li>

                                    <li>


                                        <p>Mandi</p>

                                    </li>

                                    <li>

                                        <p>Ninita</p>

                                    </li>

                                    <li>

                                        <p>Viole</p>

                                    </li>

                                    <li>

                                        <p>Maru</p>

                                    </li>
                                </ul>
                            </div>

                            <a href="#">
                                <h4>See all</h4>
                            </a>

                        </section>

                       {/* <section className="communities">
                            <div className="info-communities">
                                <h2>Communities (3)</h2>
                            </div>

                            <div className="list-communities">
                                <ul className="list-column-communities">
                                    <li>


                                        <p>Robots</p>

                                    </li>

                                    <li>

                                        <p>Smile always</p>

                                    </li>

                                    <li>


                                        <p>Ironhackers</p>

                                    </li>
                                </ul>
                            </div>

                            <a href="#">
                                <h4>See all</h4>
                            </a>

                        </section>*/}
                    </div>
                </aside>
    )
}

export default Rightbar