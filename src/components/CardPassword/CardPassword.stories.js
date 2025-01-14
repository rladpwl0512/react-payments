import CardPassword from './CardPassword';
import CardInfoContextProvider from 'CardInfoContextProvider';

export default {
  title: 'CardAddPage/CardPassword',
  component: CardPassword,
  decorators: [
    (CardPassword) => (
      <CardInfoContextProvider>
        <CardPassword />
      </CardInfoContextProvider>
    ),
  ],
};

export const CardPasswordsInput = () => <CardPassword />;
