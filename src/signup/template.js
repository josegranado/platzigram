const yo = require('yo-yo');
const landing = require('../landing');

var $signupForm = yo` 
            <div class="col s12 m7 signup">
                <div class="row">
                    <div class="signup-box">
                        <h1 class="platzigram">Platzigram</h1>
                        <form action="" class="signup-form">
                            <h2>Regístrate para ver fotos de tus amigos estudiando en Platzi.</h2>
                            <div class="section">
                                <a href="" class="btn btn-fb hiden-on-small-only">
                                <i class="fab fa-facebook" aria-hidden="true"></i>
                                Iniciar sesión con facebook.</a>  
                            </div>
                            <div class="divider"></div>
                            <div class="section">
                                <input type="email" name="email" placeholder="Correo electrónico">
                                <input type="text" name="name" placeholder="Nombre completo">
                                <input type="text" name="username" placeholder="Nombre de usuario">
                                <input type="password" name="password" placeholder="Contraseña">
                                <button class="btn btn-signup waves-effect waves-light" type="submit">Regístrate</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row">
                    <div class="login-box">
                        ¿Tienes una cuenta? <a href="/signin">Entrar</a>
                    </div>
                </div>
            </div>
        `;
module.exports = landing($signupForm);