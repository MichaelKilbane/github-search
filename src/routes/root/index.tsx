import { Outlet } from 'react-router-dom';

import Container from '../../components/container';
import Header from '../../components/header';
import { useCycleValues } from '../../hooks/cycle-values';

const famousProgrammerNames = [
  'Alan Turing',
  'Philip Don Estridge',
  'Niklaus Wirth',
  'Dennis Ritchie',
  'Brian Wilson Kernighan',
  'Kenneth Lane Thompson',
  'Bjarne Stroustrup',
  'James Gosling',
  'Guido van Rossum',
  'Linus Torvalds',
  'Tim Berners-Lee',
  'Bill Gates',
  'Larry Page',
  'Mark Zuckerberg',
  'Elon Musk',
];

const Root = () => {
  const famousProgrammerName = useCycleValues(famousProgrammerNames, 5000);

  return (
    <>
      <Container>
        <Header name={famousProgrammerName} />
        <Outlet />
      </Container>
    </>
  );
};

export default Root;
