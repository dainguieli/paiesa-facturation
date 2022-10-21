import React from 'react';

const PageA = () => {
    return (
        <div>


            <div className="accueil" id="home">
            
                <h1>Logiciel de comptabilité en ligne,
                    conçu pour votre entreprise.</h1>
                <p className="sous-titre">PAIESA FACTURATION est un logiciel de comptabilité en ligne qui gère vos finances, automatise les flux de travail d'entreprise et vous aide à travailler collectivement dans tous les services.</p>
                <a href="#asym" className="btn-accueil">En savoir plus</a>
            </div>

            <section className="section-asymetrique" id="asym">

                <h2>A propos de nous</h2>

                <div className="bloc bloc-left bloc-1">
                    <div className="bloc-txt-left">
                        <h3>Visitez des temples</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ullam autem voluptatibus quia maiores
                            voluptatem nesciunt inventore neque exercitationem, iste repellendus! Earum dicta animi alias
                            nostrum officiis illo quibusdam illum sed sequi error. Optio, quidem placeat. Beatae aut cum aliquam
                            quidem? Soluta quo temporibus aut repudiandae nulla pariatur facilis neque.</p>
                        <button className="btn-bloc-left">En savoir plus</button>
                    </div>
                </div>
                <img src="https://media.istockphoto.com/photos/business-network-concept-customer-support-shaking-hands-picture-id1256603011?k=20&m=1256603011&s=612x612&w=0&h=ZoZ6LyKdwAqubUtMloUivfG1EYiIDUTJytFX-KK1Xdc=" alt="couloir d'un temple de kyoto" className="img-grid img-grid-1" />

                <div className="bloc bloc-right bloc-2">
                    <div className="bloc-txt-right">
                        <h3>Visitez des châteaux</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ullam autem voluptatibus quia maiores
                            voluptatem nesciunt inventore neque exercitationem, iste repellendus! Earum dicta animi alias
                            nostrum officiis illo quibusdam illum sed sequi error. Optio, quidem placeat. Beatae aut cum aliquam
                            quidem? Soluta quo temporibus aut repudiandae nulla pariatur facilis neque.</p>
                        <button>En savoir plus</button>
                    </div>
                </div>
                <img src="assets/css/images/finn.jpg" alt="château de kyoto" className="img-grid img-grid-2" />

                <div className="bloc bloc-left bloc-3">
                    <div className="bloc-txt-left">
                        <h3>Visitez des temples</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ullam autem voluptatibus quia maiores
                            voluptatem nesciunt inventore neque exercitationem, iste repellendus! Earum dicta animi alias
                            nostrum officiis illo quibusdam illum sed sequi error. Optio, quidem placeat. Beatae aut cum aliquam
                            quidem? Soluta quo temporibus aut repudiandae nulla pariatur facilis neque.</p>
                        <button className="btn-bloc-left">En savoir plus</button>
                    </div>
                </div>
                <img src="assets/css/images/comp.jpeg" alt="geisha" className="img-grid img-grid-3" />

                <div className="ligne-gauche"></div>
                <div className="ligne-droite"></div>
            </section>

            <section className="parallax">
                <p>冒険に行く</p>
                <span>Partez à l'aventure</span>
            </section>

            <section className="section-tarifs" id="tarifs">
                <h3>Laissez-vous guider...</h3>
                <hr />
                <div className="container-tarifs">

                    <div className="cartes-tarifs">
                        <h4>classNameique</h4>
                        <span>100€</span>
                        <p>✔️ Visite des châteaux</p>
                        <p>✔️ Visite de la ville</p>
                        <p>✔️ Spectacle folklorique</p>
                        <p>❌ Restaurant typique d'exception</p>
                        <p>❌ Visite culturelle sur plusieurs jours</p>
                        <p>❌ Accès privé à des lieux grandioses</p>

                        <a href="#contact">Réservez un guide</a>

                    </div>

                    <div className="cartes-tarifs">
                        <h4>Découverte</h4>
                        <span>250€</span>
                        <p>✔️ Visite des châteaux</p>
                        <p>✔️ Visite de la ville</p>
                        <p>✔️ Spectacle folklorique</p>
                        <p>✔️ Restaurant typique d'exception</p>
                        <p>❌ Visite culturelle sur plusieurs jours</p>
                        <p>❌ Accès privé à des lieux grandioses</p>

                        <a href="#contact">Réservez un guide</a>

                    </div>


                    <div className="cartes-tarifs">
                        <h4>Exception</h4>
                        <span>500€</span>
                        <p>✔️ Visite des châteaux</p>
                        <p>✔️ Visite de la ville</p>
                        <p>✔️ Spectacle folklorique</p>
                        <p>✔️ Restaurant typique d'exception</p>
                        <p>✔️ Visite culturelle sur plusieurs jours</p>
                        <p>✔️ Accès privé à des lieux grandioses</p>

                        <a href="#contact">Réservez un guide</a>

                    </div>



                </div>

            </section>




            <section className="section-contact" id="contact">

                <h2><strong>Rentrons</strong> en contact</h2>

                <div className="container-form">

                    <form className="form-bloc">

                        <div className="form-groupe">
                            <label for="prenom">Entrez votre prénom</label>
                            <input type="text" placeholder="Prénom" required id="prenom" />
                        </div>

                        <div className="form-groupe">
                            <label for="nom">Entrez votre nom</label>
                            <input type="text" placeholder="Prénom" required id="nom" />
                        </div>

                        <div className="form-groupe">
                            <textarea id="txt" placeholder="Votre message" required></textarea>
                        </div>

                        <div className="form-groupe">
                            <input type="submit" value="ENVOYER" className="button-sub" />
                        </div>

                    </form>

                </div>

            </section>

            <footer>
                Tous Droits Réservés &copy;
            </footer>





        </div>




    );
}

export default PageA;
