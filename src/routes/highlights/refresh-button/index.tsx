import { PropsWithChildren } from 'react';

import Button from '../../../components/button';
import RefreshIcon from '../../../components/icons/refresh';
import { IconContainer } from './styled';

interface Props {
  onClick: () => void;
  disabled?: boolean;
}

const RefreshButton = ({ onClick, disabled, children }: PropsWithChildren<Props>) => (
  <Button
    variants={{
      grow: { scale: 1.1 },
      shrink: { scale: 0.9 },
    }}
    whileHover={disabled ? '' : 'grow'}
    whileTap={disabled ? '' : 'shrink'}
    disabled={disabled}
    onClick={onClick}
  >
    <IconContainer
      variants={{
        spinning: {
          rotate: [null, 360],
          transition: {
            duration: 1,
            ease: 'linear',
            times: [0, 1],
            repeat: Infinity,
          },
        },
      }}
      animate={disabled ? 'spinning' : ''}
    >
      <RefreshIcon size={14} />
    </IconContainer>
    {children}
  </Button>
);

export default RefreshButton;
