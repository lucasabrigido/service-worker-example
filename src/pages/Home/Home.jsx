import React from 'react';
import {BellSimpleRinging, Placeholder, PlusMinus, Skull} from 'phosphor-react';

import fakeHeader from '../../assets/images/fake-header.png';
import { HomeButtons } from '../../components/HomeButtons/HomeButtons';

import styles from './Home.module.scss';
import routes from '../../utils/routes';
const myButtons = [
    {
        title: 'Notificações',
        Icon: <BellSimpleRinging size={85} color="#ffffff" />,
        path: routes.HOME,
    },
    {
        title: 'Não encontrada',
        Icon: <Placeholder size={85} color="#ffffff" />,
        path: routes.NOT_FOUND,
    },
    {
        title: 'Subscrições',
        Icon: <PlusMinus size={85} color="#ffffff" />,
        path: routes.LIST_SUBSCRIPTIONS,
    },
    {
        title: 'Nova Mensagem',
        Icon: <Skull size={85} color="#ffffff" />,
        path: routes.NEW_MESSAGE,
    },
    {
        title: 'Notificações 4',
        Icon: <BellSimpleRinging size={85} color="#ffffff" />,
        path: routes.HOME,
    },
    {
        title: 'Notificações 5',
        Icon: <BellSimpleRinging size={85} color="#ffffff" />,
        path: routes.HOME,
    },
];

const Home = () => {
    return (
        <div className={styles.HomeContainer} >
            <img alt='fake-header' src={fakeHeader}/>
            <HomeButtons  buttons={myButtons}/>
        </div>
    )
};


export default Home;