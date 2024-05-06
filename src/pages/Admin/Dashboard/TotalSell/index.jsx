
import { Row, Col } from "react-bootstrap";
import PieChart from "../PieChart";
const TotalSell = () => {
    const data = [
        { month: "Jan", sell: 65 },
        { month: "Feb", sell: 59 },
        { month: "Mar", sell: 80 },
        { month: "Apr", sell: 81 },
        { month: "May", sell: 56 },
        { month: "June", sell: 55 },
        { month: "July", sell: 40 },
        { month: "Aug", sell: 67 },
        { month: "Sep", sell: 100 },
        { month: "Oct", sell: 78 },
        { month: "Nov", sell: 34 },
        { month: "Dec", sell: 89 },
      ];
      const sell = [
        { sell: 5000000 },
        { sell: 3000000 },
        { sell: 2000000 },
        { sell: 1500000 },
        { sell: 100000 },
        { sell: 50000 },
        { sell: 0 },
      ];
      const maxsellValue = Math.max(...data.map((item) => item.sell));
    
      const handleMouseOver = (e, index) => {
        e.target.style.backgroundColor = "#062a41";
      };
    
      const handleMouseOut = (e, index) => {
        e.target.style.backgroundColor = "#eceff1";
      };
    
  return (
   <>
    <Row className="px-3">
        <Col md={8} className="bg-white py-3 px-4  border rounded-3">
          <Row>
            <h4 className="text-primary fw-bold pb-3">Product Sell</h4>
          </Row>
          <Row>
            <Col
              md={1}
              className="sell pe-4 d-flex justify-content-between flex-column pb-5"
            >
              {/* Render all sell here */}
              {sell.map((item, index) => (
                <div key={index} className="text-center text-secondary">
                  {item.sell}
                </div>
              ))}
            </Col>
            <Col md={11} className="ps-4">
              <div className="chart">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="bar rounded-4"
                    style={{
                      height: `${(item.sell / maxsellValue) * 100}%`,
                      backgroundColor: "#eceff1",
                      width: `${100 / data.length}%`,
                    }}
                    onMouseOver={(e) => handleMouseOver(e, index)}
                    onMouseOut={(e) => handleMouseOut(e, index)}
                  >
                    <span className="tooltiptext">{`${item.month}: ${item.sell}`}</span>
                  </div>
                ))}
              </div>

              <Row>
                {data.map((item, index) => (
                  <Col
                    key={index}
                    className="text-center text-secondary"
                    style={{ width: `${100 / data.length}%` }}
                  >
                    {item.month}
                  </Col>
                ))}
              </Row>
            </Col>
           
          </Row>
        </Col>
        <Col className="ps-4">
        <Row className="border bg-white rounded-3 d-flex justify-content-center align-items-center flex-column">
        
            <h4 className="text-primary fw-bold pb-3">Stock Details</h4>
          
            <PieChart  total={200} available={150} unavailable={50}/>
            </Row>
        </Col>
        
      </Row>
   </>
  )
}

export default TotalSell