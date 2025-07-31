import {Link} from "react-router-dom";


const Portefolio = () => {
    return (
        <div className="portefolio">
            <section class="bg-img block"></section>
            <section class="text-light p-4">
                <h1 class="text-dark text-center mb-3">Portefolio</h1>
                <p class="text-dark text-center mb-3">Voici quelques unes de mes réalisations</p>
                <div class="row"><hr class="col-4" /><hr class="col-4 h-3" /><hr class="col-4" /></div>
                <div class="row padside-10">
                    <div class="row text-center">
                        <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 p-3">
                            <div  class="card  text-center">
                                 <img src="../img/portfolio/fresh-food.jpg" class="card-img-top" alt="produits frais en ligne"/>
                                <div class="card-body text-dark">
                                    <h3 class="card-title">Fresh food</h3>
                                    <p class="card-text">Site de vente de produits frais en ligne</p>
                                    <div><Link to="/portefolio"><h6 class="btn btn-primary text-light">Voir le site</h6></Link></div>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Site réaliser en PHP et MySQL</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 p-3">
                            <div  class="card text-center">
                                <img src="../img/portfolio/restaurant-japonais.jpg" class="card-img-top" alt="Restaurant japonais"/>
                                <div class="card-body text-dark">
                                    <h3 class="card-title">Restaurant Akira</h3>
                                    <p class="card-text">Site de vente de produits frais en ligne</p>
                                    <div><Link to="/portefolio"><h6 class="btn btn-primary text-light">Voir le site</h6></Link></div>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Réaliser avec WordPress</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 p-3">
                            <div  class="card text-center">
                                <img src="../img/portfolio/espace-bien-etre.jpg" class="card-img-top" alt="Espace bien-être"/>
                                <div class="card-body text-dark">
                                    <h3 class="card-title">Espace bien-être</h3>
                                    <p class="card-text">Site de vente de produits frais en ligne</p>
                                    <div><Link to="/portefolio"><h6 class="btn btn-primary text-light">Voir le site</h6></Link></div>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Réaliser avec LARAVEL</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 p-3">
                            <div  class="card text-center">
                                <img src="../img/portfolio/seo.jpg" class="card-img-top" alt="Programmation"/>
                                <div class="card-body text-dark">
                                    <h3 class="card-title">SEO</h3>
                                    <p class="card-text">Amélioration du référencement d'un site e-commerce</p>
                                    <div><Link to="/portefolio"><h6 class="btn btn-primary text-light">Voir le site</h6></Link></div>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Utilisation des outils SEO</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 p-3">
                            <div  class="card text-center">
                                <img src="../img/portfolio/coder.jpg" class="card-img-top" alt="Coder"/>
                                <div class="card-body text-dark">
                                    <h3 class="card-title">Création d'un API</h3>
                                    <p class="card-text">Création d'un API RESTFULL publique</p>
                                    <div><Link to="/portefolio"><h6 class="btn btn-primary text-light">Voir le site</h6></Link></div>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">PHP - SYMPHONY</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 p-3">
                            <div  class="card text-center">
                                <img src="../img/portfolio/screens.jpg" class="card-img-top" alt="Ecran"/>
                                <div class="card-body text-dark">
                                    <h3 class="card-title">Maquette d'un site web</h3>
                                    <p class="card-text">Création du prototype d'un site</p>
                                    <div><Link to="/portefolio"><h6 class="btn btn-primary text-light">Voir le site</h6></Link></div>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Réaliser avec FIGMA</small>
                                </div>
                            </div> 
                        </div>
                    </div>                    
                </div>
            </section>
        </div>
    )
}

export default Portefolio;