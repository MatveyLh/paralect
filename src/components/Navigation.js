import React from "react";
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import GridOnIcon from '@material-ui/icons/GridOn';
import '../styles/navigation.css';

function Navigation() {
    return (
        <nav>
            <a href={'https://www.google.com/intl/ru/gmail/about/#'}>Почта</a>
            <a href={'https://www.google.by/imghp?hl=ru&tab=wi&ogbl'}>Картинки</a>
            <a href={'#'}><GridOnIcon /></a>
            <a className={'gb_D gb_xc'} href={'https://accounts.google.com/signin/v2/identifier?hl=ru&passive=true&' +
            'continue=https%3A%2F%2Fwww.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin'}>
                <button className={'btn btn-primary btn-sm'}>Войти</button>
            </a>
        </nav>
    )
}

export default Navigation;