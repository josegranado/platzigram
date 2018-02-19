const yo = require('yo-yo');
const landing = require('../landing');

var $signinForm = yo` 
            <div class="signin col s12 m7">
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
                                <input type="text" name="username" placeholder="Nombre de usuario">
                                <input type="password" name="password" placeholder="Contraseña">
                                <button class="btn btn-signup waves-effect waves-light" type="submit">Iniciar sesión</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row">
                    <div class="login-box">
                        ¿No tienes una cuenta? <a href="/signup">Entrar</a>
                    </div>
                </div>
            </div>
        `;
module.exports = landing($signinForm);