import Avatar from '../assets/images/avatar.png';

import './styles.css';

const ProfileShow = () => {
  return (
    <div className="profile-show-container">
      <div className="avatar">
        <img src={Avatar}  alt="Imagem do perfil" />
      </div>
      <div className="infos">
        <h2>Informações</h2>
        <div className="infos-items">
        <p><span>Perfil:</span> <a href="/">https://api.github.com/users/acenelio</a></p>
        <p><span>Seguidores:</span> 4379</p>
        <p><span>Localidade:</span> Uberlândia</p>
        <p><span>Nome:</span> Nelio Alves</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileShow;