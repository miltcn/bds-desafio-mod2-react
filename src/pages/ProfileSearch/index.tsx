import axios from 'axios';
import ProfileShow from 'ProfileShow';
import { useState } from 'react';
import './styles.css';


type FormData = {
  username: string;
}

type Profile = {
  avatar_url: string,
  url: string,
  name: string,
  location: string,
  followers: number
}

const ProfileSearch = () => {

  const [formData, setFormData] = useState<FormData>({
    username: '',
  });

  const [profile, setProfile] = useState<Profile>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    const name = event.target.name;
    const value = event.target.value;

    setFormData({...formData, [name]: value});
    }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios.get(`https://api.github.com/users/${formData.username}`)
    .then((response) => {
      setProfile(response.data);
    }).catch((error) => {
      setProfile(undefined);
      console.log(error);
    });
  }

  return (
    <div className="container">
      <div className="profile-search-container">
        <h1>
          Encontre um perfil Github
        </h1>
        <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="username"
          value={formData.username}
          placeholder="Usuário github"
          onChange={handleChange}
          />
        <button type="submit">Encontrar</button>
        </form>
      </div>
      <div className="info-container">
        {profile &&
  
          <ProfileShow {...profile} />

        }
      </div>
    </div>
  );
}

export default ProfileSearch;