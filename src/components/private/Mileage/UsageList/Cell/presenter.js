import React from 'react'
import styled from 'styled-components'
import getDayLabel from 'utils/getInputDayLabel'

const Container = styled.div`
    padding-left: 15px;
    padding-right:15px;
    height: 94px;
    flex-shrink: 0;
    border-bottom: 1px solid gainsboro;
    display: flex;
    align-items: center;
`

const Left = styled.div`
display:flex;
flex-direction:column;
width:50%;
`

const Row = styled.div`
    display:flex;
`

const Right = styled.div`
display:flex;
flex-direction:column;
width:50%;
align-items:flex-end;
`

const GrayText = styled.div`
    color:gray;
`

const RedText = styled.div`
    color:#e74c3c;
`

const DayLabel = styled.div`
    margin-left:7px;
    font-weight:600;
    color:rgba(0,0,0,0.4);
`

export default function (cell) {
    console.log('cell: ', cell)
    if (around(cell.cell.CST_USE_POINT) === 0) {
        return <div />
    } else {
        return <Container>
            <Left>
                <Row style={{

                    fontSize: 16,
                    fontWeight: 600,
                    marginBottom: 5
                }}>
                    {cell.cell.SHOP_NM}
                </Row>
                <Row style={{
                    fontWeight: 200
                }}>
                    {cell.cell.SALE_DATE}
                    <DayLabel>
                        ({getDayLabel(cell.cell.SALE_DATE.substr(0, 4), cell.cell.SALE_DATE.substr(4, 2), cell.cell.SALE_DATE.substr(6, 2))})
                    </DayLabel>
                </Row>
            </Left>
            <Right>
                <Row style={{
                    marginBottom: 5
                }}>
                    <GrayText>
                        -{around(cell.cell.CST_USE_POINT)}
                    </GrayText>
                </Row>
                <Row style={{
                    color: "rgba(0,0,0,0.4)"
                }}>
                    {'제품 구매'}
                </Row>
            </Right>
        </Container>
    }

}

function around(string) {
    return Math.round(parseFloat(string))
}