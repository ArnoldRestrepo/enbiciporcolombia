import React, { useEffect } from 'react';
import { MdStars } from 'react-icons/md';
import {
  PlansListWrapper,
  PlansListHeader,
  PlansListContent,
  PlansListTable,
  Features,
  Plans,
  Plan,
} from './style';
import { LinkButtonBlueSmall } from '../../styles/Buttons';
import { IMG_PATH } from '../../helpers';
import ApiPlansDetails from '../../api/plansDetails';

const PlansList = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${ApiPlansDetails}`, {
        method: 'get',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <PlansListWrapper>
      <PlansListHeader>
        <h1>Los Mejores Planes para Ti</h1>
      </PlansListHeader>
      <PlansListContent>
        <PlansListTable>
          <Features>
            <li>Rápido</li>
            <li>Fácil</li>
            <li>Sencillo</li>
          </Features>
          <Plans>
            <Plan>
              <img src={`${IMG_PATH}plan-basic.jpg`} alt='Plan Basic' />
              <article>
                <h3>Plan Basic</h3>
                <p>
                  Este plan se adecua a todos las personas que quieran iniciar a
                  conocer Colombia en su bicicleta, realizamos recorridos
                  cortos...
                </p>

                <b>$700.000 </b>
                <span>
                  7.0 <MdStars />
                </span>
                <div>
                  <LinkButtonBlueSmall className='is-block' to='/basic'>
                    Ver Plan Basic
                  </LinkButtonBlueSmall>
                </div>
              </article>
            </Plan>
            <Plan>
              <img src={`${IMG_PATH}plan-adventure.jpg`} alt='Plan Adventure' />
              <article>
                <h3>Plan Adventure</h3>
                <p>
                  Este plan reta a las personas que hagan ciclismo para
                  aficionados de alto nivel a descrubir nuevos paisajes, tramos
                  y rutas...
                </p>

                <b>$1.200.000 </b>
                <span>
                  8.0 <MdStars />
                </span>
                <div>
                  <LinkButtonBlueSmall className='is-block' to='/adventure'>
                    Ver Plan Adventure
                  </LinkButtonBlueSmall>
                </div>
              </article>
            </Plan>
            <Plan>
              <img src={`${IMG_PATH}plan-extreme.jpg`} alt='Plan Extreme' />
              <article>
                <h3>Plan Extreme</h3>
                <p>
                  Este plan para expertos pondrá a prueba a los ciclistas de
                  alto rendimiento ante los climas y paisajes de Colombia...
                </p>

                <b>$1.200.000 </b>
                <span>
                  9.0 <MdStars />
                </span>
                <div>
                  <LinkButtonBlueSmall className='is-block' to='/extreme'>
                    Ver Plan Extreme
                  </LinkButtonBlueSmall>
                </div>
              </article>
            </Plan>
          </Plans>
        </PlansListTable>
      </PlansListContent>
    </PlansListWrapper>
  );
};

export default PlansList;
