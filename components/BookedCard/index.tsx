import CardAdmin from 'components/CardAdmin'
import Books from 'dtos/Books'
import { Col, Row } from 'react-bootstrap'
import * as S from './styles'

type Props = {
  book: Books
}
const BookedCard: React.FC<Props> = ({ book }) => {

  const value = book.accepted
  const isAdmin = book.admin

  if (isAdmin) {
    return <CardAdmin book={book} />
  }
  return (
    <S.CardWrapper>
      <Row className="main-title">
        <i className="fa fa-check-circle" style={{ color: 'green' }}></i>
        <h2>Pedido de consulta enviado</h2>
      </Row>
      <Row>
        <p className='text'>
          Obrigado!! Seu pedido de consulta foi recebido.Acompanhe por aqui o
          status do seu pedido. Agora só falta a confirmação do seu pedido pelo
          especialista escolhido.
        </p>
      </Row>
      <Row lg={12}>
        <Col lg={6}>
          <S.StatusTextWrapper>
            <h5>STATUS</h5>
          </S.StatusTextWrapper>
        </Col>
        <Col lg={6}>
          <S.StatusDisplay accepted={value as any}>
            <p>{value === "pending" ? "PENDENTE" : value === "accepted" ? "ACEITO" : "RECUSADO"}</p>
          </S.StatusDisplay>
        </Col>
      </Row>
    </S.CardWrapper>
  )
}

export default BookedCard
