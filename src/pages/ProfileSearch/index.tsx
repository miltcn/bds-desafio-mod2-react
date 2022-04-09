import './styles.css';

const ProfileSearch = () => {
  return (
    <div className="profile-search-container">
      <h1>
        Encontre um perfil Github
      </h1>
      <input type="text" value="Usuário Github" />
      <button type="submit">Encontrar</button>
    </div>
  );
}

export default ProfileSearch;