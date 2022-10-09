import { PropsWithChildren } from 'react';

import { useOnClickOutside } from '../../hooks/on-click-outside';
import CrossIcon from '../icons/cross';
import { Container, IconContainer, Screen } from './styled';

interface Props {
  onClose: () => void;
}

const ModalWrapper = ({ onClose, children }: PropsWithChildren<Props>) => {
  const ref = useOnClickOutside<HTMLDivElement>(onClose);

  return (
    <Screen>
      <IconContainer>
        <CrossIcon size={36} />
      </IconContainer>
      <Container ref={ref}>{children}</Container>
    </Screen>
  );
};

export default ModalWrapper;
