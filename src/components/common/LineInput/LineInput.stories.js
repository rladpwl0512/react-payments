import LineInput from './LineInput';
import CardInfoContextProvider from 'CardInfoContextProvider';

export default {
  title: 'CardAddSuccessPage/LineInput',
  component: LineInput,
  decorators: [
    (LineInput) => (
      <CardInfoContextProvider>
        <LineInput />
      </CardInfoContextProvider>
    ),
  ],
};

export const LineUserInput = () => <LineInput />;
