import React from 'react';
import {IMG_PATH} from "../../helpers"
import {
  ChooseWrapper,
  ChooseHeader,
  ChooseContent,
  ChooseList,
  Link,
  LinkImage,
  LinkOverlay
} from './style';

const Choose = () => (
  <ChooseWrapper>
    <ChooseHeader>
      <small>Escoge tu</small>
      <h3>Aventura en Bici</h3>
      <p>
        Escoge tus rutas y disfruta del paisaje, nsotros nos encargaremos para que pases las mejores vacaciones en compañia de{' '}
        <strong>tú bicicleta.</strong>
      </p>
    </ChooseHeader>

    <ChooseContent>
      <ChooseList>
        <li>
          <Link href='/plans'>
            <LinkImage src={`${IMG_PATH}plan-basic.jpg`} alt='Plan Basic' />
            <LinkOverlay>
              <h3>Plan Basic</h3>
            </LinkOverlay>
          </Link>
        </li>
        <li>
          <Link href='/plans'>
            <LinkImage src={`${IMG_PATH}plan-adventure.jpg`} alt='Plan Adventure' />
            <LinkOverlay>
              <h3>Plan Adventure</h3>
            </LinkOverlay>
          </Link>
        </li>
        <li>
          <Link href='/plans'>
            <LinkImage src={`${IMG_PATH}plan-extreme.jpg`} alt='Plan Extreme' />
            <LinkOverlay>
              <h3>Plan Extreme</h3>
            </LinkOverlay>
          </Link>
        </li>
      </ChooseList>
    </ChooseContent>
  </ChooseWrapper>
);

export default Choose;
