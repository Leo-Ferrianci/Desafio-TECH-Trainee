import React, { useState, useEffect } from 'react';
import {
  Col,
  Row,
  Button,
  Container,
} from 'reactstrap';

import api from "./services/api";

export default function App() {

  const [sunset, setSunset] = useState([]);

  const [janela_1, setJanela_1] = useState(false);
  const [janela_2, setJanela_2] = useState(false);
  const [janela_3, setJanela_3] = useState(false);
  const [janela_4, setJanela_4] = useState(false);
  const [janela_5, setJanela_5] = useState(false);
  const [janela_6, setJanela_6] = useState(false);
  const [janela_7, setJanela_7] = useState(false);
  const [janela_8, setJanela_8] = useState(false);
  const [janela_9, setJanela_9] = useState(false);
  const [janela_10, setJanela_10] = useState(false);
  const [janela_11, setJanela_11] = useState(false);
  const [janela_12, setJanela_12] = useState(false);

  const toggle = () => setJanela_1(!janela_1);
  const toggle2 = () => setJanela_2(!janela_2);
  const toggle3 = () => setJanela_3(!janela_3);
  const toggle4 = () => setJanela_4(!janela_4);
  const toggle5 = () => setJanela_5(!janela_5);
  const toggle6 = () => setJanela_6(!janela_6);
  const toggle7 = () => setJanela_7(!janela_7);
  const toggle8 = () => setJanela_8(!janela_8);
  const toggle9 = () => setJanela_9(!janela_9);
  const toggle10 = () => setJanela_10(!janela_10);
  const toggle11 = () => setJanela_11(!janela_11);
  const toggle12 = () => setJanela_12(!janela_12);

  let time = "";

  useEffect(() => {
    async function loadSunset() {
      const response = await api.get(``);
      setSunset(response.data);
      console.log(sunset.results)
    }
    loadSunset();
  }, []);


  const teste = sunset.results.sunset
  const sunrise = sunset.results.sunrise
  const solar_noon = sunset.results.solar_noon
  const day_length = sunset.results.day_length
  const civil_twilight_begin = sunset.results.civil_twilight_begin
  const civil_twilight_end = sunset.results.civil_twilight_end
  const nautical_twilight_begin = sunset.results.nautical_twilight_begin
  const nautical_twilight_end = sunset.results.nautical_twilight_end
  const astronomical_twilight_begin = sunset.results.astronomical_twilight_begin
  const astronomical_twilight_end = sunset.results.astronomical_twilight_end

  return (
    <Container style={{ marginTop: "15%", marginLeft: "15%" }}>
      <Row style={{ marginBottom: "10%" }}>
        <Col lg="3">
          <p> Sunset = {teste} </p>
          <p>
            Sunrise = {sunrise}
          </p>
          <p>
            Solar noon = {solar_noon}
          </p>
          <p>
            Day lenght = {day_length}
          </p>
          <p>
            Civil twilight begin =  {civil_twilight_begin}
          </p>
          <p>
            Civil twilight end = {civil_twilight_end}
          </p>
          <p>
            Nautical twilight begin = {nautical_twilight_begin}
          </p>
          <p>
            Nautical twilight end =  {nautical_twilight_end}
          </p>
          <p>
            Astronomical twilight begin = {astronomical_twilight_begin}
          </p>
          <p>
            Astronomical twilight end = {astronomical_twilight_end}
          </p>
        </Col>
        <Col lg="9">
          <Row>
            <Col lg="2" className="text-center" >
              {janela_1 === false
                ? <> <Button className="mb-2" color="success" onClick={toggle}> Janela 1 </Button> <p>ligado</p> </>
                : <> <Button className="mb-2" color="danger" onClick={toggle}> Janela 1 </Button> <p>desligado</p> </>
              }
            </Col>
            <Col lg="2" className="text-center" >
              {janela_2 === false
                ? <> <Button className="mb-2" color="success" onClick={toggle2}> Janela 2 </Button> <p>ligado</p> </>
                : <> <Button className="mb-2" color="danger" onClick={toggle2}> Janela 2 </Button> <p>desligado</p> </>
              }
            </Col>
            <Col lg="2" className="text-center" >
              {janela_3 === false
                ? <> <Button className="mb-2" color="success" onClick={toggle3}> Janela 3 </Button> <p>ligado</p> </>
                : <> <Button className="mb-2" color="danger" onClick={toggle3}> Janela 3 </Button> <p>desligado</p> </>
              }
            </Col>
            <Col lg="2" className="text-center" >
              {janela_4 === false
                ? <> <Button className="mb-2" color="success" onClick={toggle4}> Janela 4 </Button> <p>ligado</p> </>
                : <> <Button className="mb-2" color="danger" onClick={toggle4}> Janela 4 </Button> <p>desligado</p> </>
              }
            </Col>
            <Col lg="2" className="text-center" >
              {janela_5 === false
                ? <> <Button className="mb-2" color="success" onClick={toggle5}> Janela 5 </Button> <p>ligado</p> </>
                : <> <Button className="mb-2" color="danger" onClick={toggle5}> Janela 5 </Button> <p>desligado</p> </>
              }
            </Col>
            <Col lg="2" className="text-center" >
              {janela_6 === false
                ? <> <Button className="mb-2" color="success" onClick={toggle6}> Janela 6 </Button> <p>ligado</p> </>
                : <> <Button className="mb-2" color="danger" onClick={toggle6}> Janela 6 </Button> <p>desligado</p> </>
              }
            </Col>
            <Col lg="2" className="text-center" >
              {janela_7 === false
                ? <> <Button className="mb-2" color="success" onClick={toggle7}> Janela 7 </Button> <p>ligado</p> </>
                : <> <Button className="mb-2" color="danger" onClick={toggle7}> Janela 7 </Button> <p>desligado</p> </>
              }
            </Col>
            <Col lg="2" className="text-center" >
              {janela_8 === false
                ? <> <Button className="mb-2" color="success" onClick={toggle8}> Janela 8 </Button> <p>ligado</p> </>
                : <> <Button className="mb-2" color="danger" onClick={toggle8}> Janela 8 </Button> <p>desligado</p> </>
              }
            </Col>
            <Col lg="2" className="text-center" >
              {janela_9 === false
                ? <> <Button className="mb-2" color="success" onClick={toggle9}> Janela 9 </Button> <p>ligado</p> </>
                : <> <Button className="mb-2" color="danger" onClick={toggle9}> Janela 9 </Button> <p>desligado</p> </>
              }
            </Col>
            <Col lg="2" className="text-center" >
              {janela_10 === false
                ? <> <Button className="mb-2" color="success" onClick={toggle10}> Janela 10 </Button> <p>ligado</p> </>
                : <> <Button className="mb-2" color="danger" onClick={toggle10}> Janela 10 </Button> <p>desligado</p> </>
              }
            </Col>
            <Col lg="2" className="text-center" >
              {janela_11 === false
                ? <> <Button className="mb-2" color="success" onClick={toggle11}> Janela 11 </Button> <p>ligado</p> </>
                : <> <Button className="mb-2" color="danger" onClick={toggle11}> Janela 11 </Button> <p>desligado</p> </>
              }
            </Col>
            <Col lg="2" className="text-center" >
              {janela_12 === false
                ? <> <Button className="mb-2" color="success" onClick={toggle12}> Janela 12 </Button> <p>ligado</p> </>
                : <> <Button className="mb-2" color="danger" onClick={toggle12}> Janela 12 </Button> <p>desligado</p> </>
              }
            </Col>
          </Row>
        </Col>

      </Row>
    </Container>
  );
}

