import ProfileShow from 'ProfileShow';
import './styles.css';

const ProfileSearch = () => {
  return (
    <div className="container">
      <div className="profile-search-container">
        <h1>
          Encontre um perfil Github
        </h1>
        <input type="text" value="Usuário Github" />
        <button type="submit">Encontrar</button>
      </div>
      <div className="info-container">
        <ProfileShow />
      </div>
    </div>
  );
}

export default ProfileSearch;