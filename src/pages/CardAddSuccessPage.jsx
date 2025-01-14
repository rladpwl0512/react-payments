import { useContext } from 'react';
import { CardInfoContext } from 'CardInfoContextProvider';

import Button from 'components/common/Button/Button';
import Card from 'components/common/Card/Card';
import CardNameInputForm from 'components/CardNameInputForm/CardNameInputForm';
import NoticeMessage from 'components/common/NoticeMessage/NoticeMessage';
import CardNickname from 'components/CardNickname/CardNickname';

function CardAddSuccessPage() {
  const { state } = useContext(CardInfoContext);
  const { card } = state;

  return (
    <div className="app">
      <CardNameInputForm>
        <NoticeMessage text="카드등록이 완료되었습니다." />
        <Card isEmpty={false} cardInfo={card} />
        <CardNickname />
        <Button text="확인" />
      </CardNameInputForm>
    </div>
  );
}

export default CardAddSuccessPage;
