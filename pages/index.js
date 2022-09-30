import Button from "../components/button/button"
import Card from "../components/card/card"
import Container from "../components/container/container"

const Home = () => {
  return (
     <Container>
       <Card title='BASIC' text='100GB' price='$1.99/month' list={ ['100 GB of storage', 'Option to add memebers', 'Extra member benefits'] }>
          <Button />
      </Card>

      <Card title='STANDARD' text='200GB' price='$3.99/month' list={ ['200 GB of storage', 'Option to add memebers', 'Extra member benefits'] }>
          <Button />
      </Card>

      <Card title='PREMIUM' text='2TB' price='$8.99/month' list={ ['2TB GB of storage', 'Option to add memebers', 'Extra member benefits'] }>
          <Button />
      </Card>
     </Container>
  )
}

export default Home