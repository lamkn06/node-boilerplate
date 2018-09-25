import * as React from 'react'
import { Col, Row } from 'reactstrap'

interface IProps extends React.Props<any> {
}

const Home: React.SFC<IProps> = (props: IProps) => {
	return (
		<Row>
			<Col sm={3}>
				Col 1
			</Col>
			<Col>
				Col 2
			</Col>
		</Row>
	)
}

export default Home