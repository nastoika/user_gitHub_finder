import {Container} from 'components/Container'
import { Header } from 'components/Header';
import { Search } from 'components/Search';
import { UserCard } from 'components/UserCard';
import {defaultUser} from 'mock';

function App() {
  return (
    <Container>
      <Header/>
      <Search hasError onSubmit={() => {}}/>
      <UserCard {...defaultUser}/>
    </Container>
  );
}

export default App;
