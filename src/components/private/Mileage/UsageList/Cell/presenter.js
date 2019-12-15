import React from 'react'
import styled from 'styled-components'
import getDayLabel from 'utils/getInputDayLabel'

const Container = styled.div`
    padding-left: 15px;
    padding-right:15px;
    height: 44px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    position: relative;
`


const Image = styled.img`
    width:20px;
    margin-right:20px;
`

const ShopAndDateContainer = styled.div`
    position:relative;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
`

const Shop = styled.div`
    color:black;
`

const Date = styled.div`
    position:absolute;
    bottom:0;
    font-size:10px;
`

const Money = styled.div`
    position:absolute;
    right:20px;
    font-size:12px;
`


export default function (cell) {
    console.log('Used money: ', cell.cell.CST_USE_POINT)
    if (around(cell.cell.CST_USE_POINT) === 0) {
        return <div />
    } else {
        return <Container>
            <Image src={require('./images/bluecard.png')} />
            <ShopAndDateContainer>
                <Shop>
                    {cell.cell.SHOP_NM}
                </Shop>
                <Date>
                    {cell.cell.SALE_DATE}
                    ({getDayLabel(cell.cell.SALE_DATE.substr(0, 4), cell.cell.SALE_DATE.substr(4, 2), cell.cell.SALE_DATE.substr(6, 2))})
                </Date>
            </ShopAndDateContainer>
            <Money>
                {around(cell.cell.CST_USE_POINT)}
            </Money>
            {/* <Left>

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
            </Right> */}
        </Container>
    }

}

function around(string) {
    return Math.round(parseFloat(string))
}