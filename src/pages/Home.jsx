
const Home = () => {
    return (
        <div>
            <section class="bg-img block text-light text-center p-4">
                <h1 class="text-uppercase mb-3">Bonjour, je suis John Doe</h1>
                <h2 class="mb-4">Développeur web fullstack</h2>
                <a class="btn btn-danger" href="https://github.com/github-john-doe" role="button">En savoir plus</a>
            </section>
            <section class="text-dark p-5">
                <div class="padside-20">
                    <div class="row shadow p-5 mb-5 bg-body rounded">
                        <div class="col-6 p-4">
                            <h2 class="text-dark mb-5"><strong>A propos</strong></h2>
                            <div class="row"><hr class="h-2"/></div>
                            <img class="col-12" src="../public/img/john-doe-about.jpg" alt="John Doe - Développeur web full-stack"/>
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p> */}
                        </div>
                        <div class="col-6 p-4">
                            <h2 class="text-dark mb-5"><strong>Mes compétences</strong></h2>
                            <div class="row"><hr class="h-2"/></div>
                            <h5>HTML5  90%</h5>{/* 
                            <div class="progress mb-5">            
                                <div class="progress-bar bg-danger" role="progressbar" aria-label="Danger example" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h5>CSS3  80%</h5>
                            <div class="progress mb-5">            
                                <div class="progress-bar bg-info" role="progressbar" aria-label="Info example" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h5>JAVASCRIPT  70%</h5>
                            <div class="progress mb-5">            
                                <div class="progress-bar bg-warning" role="progressbar" aria-label="Warning example" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h5>PHP  60%</h5>
                            <div class="progress mb-5">            
                                <div class="progress-bar bg-success" role="progressbar" aria-label="Success example" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h5>REACT  50%</h5>
                            <div class="progress mb-5">            
                                <div class="progress-bar" role="progressbar" aria-label="example" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;