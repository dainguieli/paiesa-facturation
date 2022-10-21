import React, { useState } from 'react';
import Header from '../Header/Header';
const Inscription = () => {


    const [inpval, setINP] = useState({
        nom: '',
        prenom: '',
        pseudo: '',
        email: '',
        password: '',
        type: ''
    })

    const setdata = (e) => {

        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value,
            }
        })

    }
    const addinpdata = async (e) => {
        e.preventDefault();

        const { nom, prenom, pseudo, email, type,password } = inpval;
        const res = await fetch("/api/auth/signup", {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                nom, prenom, pseudo, email, type, password
            })
        });

        const data = await res.json();

        console.log(data);

        if (res.status === 404 || !data) {
            alert('erro');
            console.log('error');
        } else {
          alert("data added");
          console.log('data added')
        }
    }
    return (
        <div>
              <Header />
           <div className="mb-3">
            <div className="div container">
                <form className='mt-3' style={{  "margin-top": "100px"}}>
                    <div className="row">
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="Nom_entreprise" className="form-label">Nom</label>
                            <input type="text" value={inpval.nom_entreprise} onChange={setdata} name='nom_entreprise' placeholder="Entrez votre nom de l'entreprise" className="form-control" id="Nom_entreprise" />

                        </div>

                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="Prenom" className="form-label">Prénoms</label>
                            <input type="text" value={inpval.prenom} onChange={setdata} name="prenom" placeholder='Entrez votre prénoms' className="form-control" id="Prenom" />

                        </div>

                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="Pseudo" className="form-label">Pseudo</label>
                            <input type="text" value={inpval.pseudo} onChange={setdata} name="pseudo" placeholder='Entrez votre pseudo' className="form-control" id="Pseudo" />
                        </div>

                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="Email" className="form-label">Email</label>
                            <input type="email" value={inpval.email} name='email' onChange={setdata} placeholder='Entrez votre email' className="form-control" id="Email" />
                        </div>

                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="password" className="form-label">Mot de passe</label>
                            <input type="password" value={inpval.password} onChange={setdata} name='password' placeholder='Entrez votre mot de passe' className="form-control" id="Password" />

                        </div>

                        <div className="mb-3 col-lg-6 col-md-6 col-12 ">
                            <label for="Type" className="form-label">Type</label>
                            <select className="form-select" value={inpval.type} onChange={setdata} name="type" id="type">

                                <option selected>-- Svp choisissez un type-</option>
                                <option value='admin'>Administrateur</option>
                                <option value='client'>Client</option>
                            </select>

                        </div>

                        <button type="submit" onClick={addinpdata} className="btn btn-primary">Enregistrer</button>
                    </div>
                </form>



            </div>

        </div>
        </div>
    );
}

export default Inscription;
