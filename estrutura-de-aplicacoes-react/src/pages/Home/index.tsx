import { getUser } from '../../services/user';
import { useUserData } from '../../stores/useUserData';
import { Title } from './styles';

export default function Home() {
  const { name, age } = useUserData();

  async function changeUser() {
    const { data } = await getUser('rnatu');

    useUserData.setState({
      name: data.name,
      age: 31,
    });
  }

  return (
    <>
      <h1>{name}</h1>
      <h3>{age}</h3>
      <Title isActive>Home</Title>
      <button type="button" onClick={changeUser}>
        Alterar usuário
      </button>
    </>
  );
}
