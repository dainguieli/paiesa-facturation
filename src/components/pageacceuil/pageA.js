import React from 'react';
<<<<<<< HEAD
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { NavLink } from 'react-router-dom';
import Header1 from '../Header/Header_p';
const PageA = () => {


  return (
    <div>
      <Header1 />

      <div className="accueil" id="home">

        <h1>Logiciel de gestion de PME,conçu pour votre entreprise.</h1>
        <p className="sous-titre">PAIESA FACTURATION est un logiciel de gestion de PME qui gère vos finances ,vos article,vos services , vos fournisseur et portefeuille.</p>
        <Row>
          <Col>

            <NavLink className="nav-link active btn-accueil " to="/Connexion">Connexion</NavLink >

          </Col>
          <Col>


            <NavLink className="nav-link active btn-accueil " to="/Inscription">S'inscrit</NavLink >

          </Col>

        </Row>
=======

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
>>>>>>> origin/master




<<<<<<< HEAD
      </div>

      <section className="section-asymetrique" id="asym">

        <h2><strong>Pourquoi vous devez utilise PAIESA FACTURATION comme le logiciel de votre entreprise</strong></h2>


      </section>

      <section id="section1">
        <div className="container">




          <Row className="container" >

            <Card className=" services-block" style={{ width: '30rem' }} >
              <Card.Img variant="top" src="assets/css/images/comp.jpeg" />
              <Card.Body>
                <Card.Title className="text-center">Comptabilité de bout en bout </Card.Title>
                <Card.Text >
                  De la négociation des accords à l'établissement des bons de commande, en passant par la facturation, PAIESA FACTURATION  gère les tâches comptables banales afin que vous puissiez vous concentrer sur votre entreprise.
                </Card.Text>

              </Card.Body>
            </Card>

            <Card className=" services-block" style={{ width: '30rem' }} >
              <Card.Img variant="top" src="https://st2.depositphotos.com/1071909/6630/i/450/depositphotos_66305687-stock-photo-marketing-segmentation-customers-care.jpg" />
              <Card.Body>
                <Card.Title>Gestion des client</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

              </Card.Body>
            </Card>

            <Card className=" services-block" style={{ width: '30rem' }} >
              <Card.Img variant="top" src="https://st2.depositphotos.com/3643473/6206/i/600/depositphotos_62060059-stock-photo-clipboard-and-earth-globe.jpg" />
              <Card.Body>
                <Card.Title>Gestion des fournisseur</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

              </Card.Body>
            </Card>

          </Row>

=======
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
>>>>>>> origin/master





        </div>
<<<<<<< HEAD
      </section>


      <section className="parallax">
        <p style={{ "text-align": " center" }}>FAITES-NOUS CONFIANCE</p>
        <span>Nous sommes là pour vous </span>
      </section>

      <section className="section-tarifs" id="tarifs">
        <h3>Laissez-vous guider...</h3>
        <hr />
        <div className="container-tarifs">

          <div className="cartes-tarifs">
            <h4>classNameique</h4>
            <span>100€</span>
            <p>✔️   Some quick example text </p>
            <p>✔️   Some quick example text </p>
            <p>✔️   Some quick example text </p>
            <p>❌ R  Some quick example text </p>
            <p>❌ Visite   Some quick example text s jours</p>
            <p>❌ A  Some quick example text oses</p>

            <a href="#contact">  Some  text </a>

          </div>

          <div className="cartes-tarifs">
            <h4>Découverte</h4>
            <span>250€</span>
            <p>✔️ Some quick example text</p>
            <p>✔️Some quick exame</p>
            <p>✔️ SSome quick examklorique</p>
            <p>✔️ RestaSome quick examue d'exception</p>
            <p>❌ Visite Some quick examsur plusieurs jours</p>
            <p>❌ Accès pSome quick examioses</p>

            <a href="#contact">Réservamuide</a>

          </div>


          <div className="cartes-tarifs">
            <h4>Exception</h4>
            <span>500€</span>
            <p>✔️ /mois facturé annuellement</p>
            <p>✔️ VisSome quick examville</p>
            <p>✔️ Some quick examorique</p>
            <p>✔️ ReSome quick examque d'exception</p>
            <p>✔️ Visite Some quick examle sur plusieurs jours</p>
            <p>✔️ ASSome quick examndioses</p>

            <a href="#contact">RSome quick ee</a>

          </div>



        </div>

      </section>
=======
>>>>>>> origin/master




<<<<<<< HEAD
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

      <footer class="navbar navbar-default navbar-static-bottom text-center" id="footer">



        <div class="col-lg-12">



          <p> <strong>&copy; PAIESA FACTURATION- 2022 </strong> </p>
        </div>




      </footer>


    </div>




  );
=======
    );
>>>>>>> origin/master
}

export default PageA;
